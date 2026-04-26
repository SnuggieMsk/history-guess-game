import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Cmd+K (or Ctrl+K) global command palette / route search.
 * Searches across all 60+ routes, opens the matching one on Enter.
 */
export default function CommandPalette({ routes }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Open on Cmd+K / Ctrl+K; close on Esc
  useEffect(() => {
    const onKey = (e) => {
      const isMac = navigator.platform.toUpperCase().includes('MAC');
      const cmd = isMac ? e.metaKey : e.ctrlKey;
      if (cmd && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen(o => !o);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Auto-focus when opened
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
      setQuery('');
      setActiveIdx(0);
    }
  }, [open]);

  // Filter routes
  const q = query.toLowerCase().trim();
  const filtered = !q ? routes.slice(0, 12) : routes.filter(r =>
    r.label.toLowerCase().includes(q) ||
    r.path.toLowerCase().includes(q) ||
    (r.group || '').toLowerCase().includes(q)
  ).slice(0, 12);

  // Navigate to selected
  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIdx(i => Math.min(i+1, filtered.length-1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIdx(i => Math.max(i-1, 0)); }
    else if (e.key === 'Enter' && filtered[activeIdx]) {
      navigate(filtered[activeIdx].path);
      setOpen(false);
    }
  };

  if (!open) {
    return (
      <button onClick={() => setOpen(true)}
        title="Search (⌘K / Ctrl+K)"
        aria-label="Open command palette to search 60+ sections"
        type="button"
        className="cmdk-fab"
        style={{
          position:'fixed', bottom:24, right:24, zIndex:30,
          background:'#0d3b66', color:'#fff', border:'none', borderRadius:'50%',
          width:48, height:48, cursor:'pointer', fontSize:20, fontWeight:600,
          boxShadow:'0 2px 8px rgba(26,31,54,.18)',
        }}>⌘K</button>
    );
  }

  return (
    <div onClick={() => setOpen(false)} style={{
      position:'fixed', inset:0, zIndex:100,
      background:'rgba(26,31,54,0.45)', backdropFilter:'blur(4px)',
      display:'flex', alignItems:'flex-start', justifyContent:'center',
      paddingTop:'10vh',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        width:'min(640px, 92vw)',
        background:'#fbf8f1',
        border:'1px solid #cdc4ae',
        borderRadius:8,
        boxShadow:'0 10px 40px rgba(26,31,54,.30)',
        overflow:'hidden',
      }}>
        <input ref={inputRef} value={query}
          onChange={e => { setQuery(e.target.value); setActiveIdx(0); }}
          onKeyDown={onKeyDown}
          placeholder="Search 60+ sections — type 'lobster', 'PMMSY', 'tariff'…"
          aria-label="Search routes by keyword"
          role="combobox"
          aria-expanded="true"
          aria-controls="cmdk-results"
          style={{
            width:'100%', padding:'16px 20px',
            border:'none', borderBottom:'1px solid #e0d9c8',
            background:'transparent', color:'#1a1f36',
            fontSize:15, outline:'none',
          }}/>
        <div style={{maxHeight:'56vh', overflowY:'auto', padding:'4px 0'}}>
          {filtered.length === 0 ? (
            <div style={{padding:'24px 20px', color:'#5c6272', fontSize:13}}>No matches. Try another keyword.</div>
          ) : filtered.map((r, i) => (
            <div key={r.path}
              onClick={() => { navigate(r.path); setOpen(false); }}
              onMouseEnter={() => setActiveIdx(i)}
              style={{
                padding:'10px 20px', cursor:'pointer',
                background: activeIdx === i ? '#efeada' : 'transparent',
                borderLeft: activeIdx === i ? '3px solid #0d3b66' : '3px solid transparent',
              }}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:8}}>
                <strong style={{fontSize:13, color:'#1a1f36'}}>{r.label}</strong>
                <span style={{fontSize:10, color:'#8a8f9a', fontFamily:'Menlo,monospace'}}>{r.path}</span>
              </div>
              {r.group && <div style={{fontSize:11, color:'#5c6272', marginTop:2}}>{r.group}</div>}
            </div>
          ))}
        </div>
        <div style={{padding:'8px 20px', borderTop:'1px solid #e0d9c8', fontSize:11, color:'#8a8f9a', display:'flex', gap:14}}>
          <span>↑↓ Navigate</span>
          <span>↵ Open</span>
          <span>Esc Close</span>
          <span style={{marginLeft:'auto'}}>{filtered.length} of {routes.length} routes</span>
        </div>
      </div>
    </div>
  );
}
