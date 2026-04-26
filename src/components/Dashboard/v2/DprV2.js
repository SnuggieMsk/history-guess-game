import React, { useState } from 'react';
import { dprChapters, dprSubmissionPath, supportingDocs } from '../../../data/v2Dpr';

export default function DprV2() {
  const [expanded, setExpanded] = useState({});

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · PMMSY DPR Skeleton</div>
        <h1 className="sec-title">Detailed Project Report — Structure, Step-by-Step</h1>
        <p className="sec-sub">
          An 18-chapter DPR skeleton aligned with PMMSY submission requirements. Click any
          chapter to expand its section list. Use this as the table-of-contents when
          you engage a PMMSY-empanelled consultant. A disciplined DPR unlocks ₹5-9 cr
          subsidy capture over 2-3 years and bank term-loan sanction.
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>DPR chapters</h3><div className="big">{dprChapters.length}</div></div>
        <div className="card"><h3>Supporting docs</h3><div className="big">{supportingDocs.length}</div></div>
        <div className="card"><h3>Consulting cost</h3><div className="big">₹1.5-2.5 L</div><div className="sub">6-10 weeks drafting</div></div>
        <div className="card"><h3>End-to-end to tranche 1</h3><div className="big">10-14 mo</div></div>
      </div>

      <div className="section-block">
        <h2>Chapter-by-chapter outline</h2>
        <p className="sec-sub" style={{ marginBottom: 14 }}>Click any chapter to expand section list. This is the canonical structure investors / banks / PMMSY evaluators expect.</p>
        {dprChapters.map(ch => {
          const isOpen = expanded[ch.id];
          return (
            <div key={ch.id} className="card" style={{ marginBottom: 10, cursor: 'pointer' }}
              onClick={() => setExpanded({ ...expanded, [ch.id]: !isOpen })}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{
                  width: 36, height: 36, borderRadius: 4, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  background: 'var(--c-accent)', color: '#fff',
                  fontFamily: 'Georgia,serif', fontWeight: 700, fontSize: 14, flexShrink: 0,
                }}>{ch.id}</span>
                <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 16, color: 'var(--c-text)', fontWeight: 600, margin: 0, flex: 1 }}>{ch.title}</h3>
                <span style={{ fontSize: 20, color: 'var(--c-accent)' }}>{isOpen ? '−' : '+'}</span>
              </div>
              {isOpen && (
                <ul className="bullets" style={{ marginTop: 12, paddingLeft: 56, fontSize: 12.5 }}>
                  {ch.sections.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      <div className="section-block">
        <h2>Submission path — 9 steps</h2>
        <div style={{ position: 'relative', paddingLeft: 24, borderLeft: '3px solid var(--c-border)' }}>
          {dprSubmissionPath.map(s => (
            <div key={s.step} style={{ marginBottom: 14, position: 'relative' }}>
              <span style={{ position: 'absolute', left: -30, top: 4, width: 14, height: 14, background: 'var(--c-accent-2)', borderRadius: '50%', border: '3px solid var(--c-bg)' }} />
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--c-accent)', textTransform: 'uppercase', letterSpacing: 1 }}>Step {s.step}</div>
              <div style={{ fontSize: 13, color: 'var(--c-text)', marginTop: 2 }}>{s.action}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-block">
        <h2>Supporting documents required</h2>
        <div className="card">
          <ul className="bullets" style={{ columnCount: 2, columnGap: 28, fontSize: 13 }}>
            {supportingDocs.map((d, i) => <li key={i} style={{ breakInside: 'avoid' }}>{d}</li>)}
          </ul>
        </div>
      </div>

      <div className="callout">
        <strong>Critical reminder:</strong> Do not outsource DPR without retaining editorial control.
        A generic consultant template loses PMMSY component codes, misses Maharashtra state top-ups,
        and fails to mention MSC co-funding eligibility. Verify the consultant has PMMSY track-record;
        demand a prior DPR sample; ensure financial model is scenario-tested before submission.
      </div>
    </>
  );
}
