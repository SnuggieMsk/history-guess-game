import React, { useState, useMemo } from 'react';
import { jargon, jargonByGroup } from '../../../data/v2Jargon';
import SortableTable from '../SortableTable';

export default function JargonV2() {
  const [search, setSearch] = useState('');
  const [group, setGroup] = useState('ALL');
  const groups = ['ALL', ...Object.keys(jargonByGroup)];

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    const byGroup = group === 'ALL' ? jargon : jargon.filter(j => jargonByGroup[group].includes(j.term));
    return byGroup.filter(j => j.term.toLowerCase().includes(q) || j.full.toLowerCase().includes(q) || j.what.toLowerCase().includes(q));
  }, [search, group]);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Cheatsheet</div>
        <h1 className="sec-title">Industry Jargon Glossary</h1>
        <p className="sec-sub">
          {jargon.length} terms decoded. Categorised into {Object.keys(jargonByGroup).length} groups.
          Keep this open during calls with consultants, bank managers, or USFDA agents.
        </p>
      </div>

      <div className="kpi-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
        <div className="card">
          <h3>Search</h3>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Type a term..."
            style={{
              width: '100%', padding: '8px 12px',
              border: '1px solid var(--c-border)', borderRadius: 4,
              fontSize: 14, background: 'var(--c-surface)', color: 'var(--c-text)',
            }} />
        </div>
        <div className="card">
          <h3>Filter by group</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {groups.map(g => (
              <button key={g} onClick={() => setGroup(g)} style={{
                padding: '4px 10px', fontSize: 11, border: '1px solid var(--c-border)',
                borderRadius: 999, cursor: 'pointer',
                background: group === g ? 'var(--c-accent)' : 'transparent',
                color: group === g ? '#fff' : 'var(--c-text-dim)',
              }}>{g}</button>
            ))}
          </div>
        </div>
        <div className="card">
          <h3>Showing</h3>
          <div className="big">{filtered.length}</div>
          <div className="sub">of {jargon.length} terms</div>
        </div>
      </div>

      <div className="section-block">
        <SortableTable
          columns={[
            { key:'term', label:'Term', render:(v) => <strong style={{ fontFamily: 'Georgia,serif', color: 'var(--c-accent)', fontSize: 14 }}>{v}</strong> },
            { key:'full', label:'Full form', style:{ fontSize: 13, fontWeight: 500 } },
            { key:'what', label:'What it means', style:{ fontSize: 12.5, color: 'var(--c-text)' } },
          ]}
          rows={filtered}
          defaultSort="term"
        />
      </div>
    </>
  );
}
