import React, { useState } from 'react';
import { dprWalkthroughCh1to9 } from '../../../data/v2DprWalkthrough';
import { dprWalkthroughCh10to18 } from '../../../data/v2DprWalkthrough2';

const allChapters = [...dprWalkthroughCh1to9, ...dprWalkthroughCh10to18];

export default function DprDeepDiveV2() {
  const [open, setOpen] = useState(allChapters[0].ch);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · L8 DPR Hyper-Detail Walkthrough</div>
        <h1 className="sec-title">PMMSY DPR — Line-by-Line Sample Drafting</h1>
        <p className="sec-sub">
          {allChapters.length}-chapter DPR with sample text for every section. Print this directly to your
          PMMSY-empanelled consultant — they fill in your specifics on top. Reduces DPR drafting time
          from 8-10 weeks to 4-6 weeks.
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Chapters mapped</h3><div className="big">{allChapters.length}</div></div>
        <div className="card"><h3>Sections drafted</h3><div className="big">{allChapters.reduce((s,c)=>s+c.sampleSections.length,0)}</div></div>
        <div className="card"><h3>Annexures</h3><div className="big">10</div></div>
        <div className="card"><h3>Realistic timeline</h3><div className="big">4-6 wk</div></div>
      </div>

      <div className="section-block">
        <h2>Click any chapter to expand sections</h2>
        {allChapters.map(c => {
          const isOpen = open === c.ch;
          return (
            <div key={c.ch} className="card" style={{marginBottom:10, borderLeft:'3px solid var(--c-accent)'}}>
              <div onClick={() => setOpen(isOpen ? null : c.ch)} style={{cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12}}>
                <div style={{display:'flex',alignItems:'center',gap:10}}>
                  <span style={{
                    width:36, height:36, borderRadius:4, display:'flex', alignItems:'center', justifyContent:'center',
                    background:'var(--c-accent)', color:'#fff', fontFamily:'Georgia,serif', fontWeight:700, fontSize:14,
                  }}>{c.ch}</span>
                  <h3 style={{fontFamily:'Georgia,serif',fontSize:15,fontWeight:600,margin:0}}>{c.title}</h3>
                </div>
                <span style={{fontSize:20,color:'var(--c-accent)'}}>{isOpen ? '−' : '+'}</span>
              </div>
              {isOpen && (
                <div style={{marginTop:14, paddingTop:12, borderTop:'1px solid var(--c-border)'}}>
                  {c.sampleSections.map((s,i) => (
                    <div key={i} style={{marginBottom:14, paddingBottom:12, borderBottom:i < c.sampleSections.length-1 ? '1px dotted var(--c-border)' : 'none'}}>
                      <strong style={{fontSize:11.5,color:'var(--c-accent)',textTransform:'uppercase',letterSpacing:1}}>{s.sect}</strong>
                      <div style={{fontSize:12.5,marginTop:6,padding:10,background:'var(--c-surface-2)',border:'1px solid var(--c-border)',borderRadius:4,color:'var(--c-text)',fontFamily:'Menlo,monospace'}}>
                        {s.sample}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="callout">
        <strong>Submission protocol:</strong> Use this walkthrough as the "draft of drafts." Your PMMSY consultant (AGRUNIVERSE Pune / KPMG Agri Food Mumbai etc.)
        validates each section against current state DoF guidelines, adds Maharashtra-specific signoffs, and packages annexures.
        Total cost ₹1.5-2.5 L; total time 4-6 weeks vs 8-10 typical.
      </div>
    </>
  );
}
