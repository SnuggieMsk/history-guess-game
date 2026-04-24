import React, { useState } from 'react';
import { teardownSections, replacementSummary } from '../../../data/v2Teardown';

export default function TeardownV2() {
  const [active, setActive] = useState(teardownSections[0].id);
  const current = teardownSections.find(s => s.id === active);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Investor Audit</div>
        <h1 className="sec-title">What v1 Got Wrong</h1>
        <p className="sec-sub">
          The v1 plan is a consultant deck, not an operator's playbook.
          Four lenses — strategic, supply, ops, financial — with every hand-wave
          replaced by a concrete verdict. This is the teardown before the rebuild.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {teardownSections.map(s => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            style={{
              padding: '8px 18px', border: `1px solid ${s.color}`,
              borderRadius: 20, cursor: 'pointer',
              background: active === s.id ? s.color : 'transparent',
              color: active === s.id ? '#fff' : s.color,
              fontWeight: 600, fontSize: 13, letterSpacing: 0.3,
              textTransform: 'capitalize',
              transition: 'all 0.15s',
            }}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div>
        {current.points.map((p, i) => (
          <div key={i} className="card" style={{ marginBottom: 14, borderLeft: `3px solid ${current.color}` }}>
            <div style={{ marginBottom: 10 }}>
              <span style={{ fontSize: 11, color: 'var(--c-text-dim)', textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 600 }}>
                v1 claim
              </span>
              <p style={{ fontSize: 14, color: 'var(--c-text)', marginTop: 4, fontStyle: 'italic' }}>{p.claim}</p>
            </div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ fontSize: 11, color: 'var(--c-bad)', textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 600 }}>
                Reality
              </span>
              <p style={{ fontSize: 13.5, color: 'var(--c-text)', marginTop: 4, lineHeight: 1.6 }}>{p.reality}</p>
            </div>
            <div style={{ paddingTop: 10, borderTop: '1px solid var(--c-border)' }}>
              <span style={{ fontSize: 11, color: 'var(--c-good)', textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 600 }}>
                Verdict
              </span>
              <p style={{ fontSize: 13.5, color: 'var(--c-text)', marginTop: 4, fontWeight: 500 }}>{p.verdict}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="section-block">
        <h2>What v2 replaces</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>v1 claim</th><th>v2 reality</th></tr></thead>
            <tbody>
              {replacementSummary.map((r, i) => (
                <tr key={i}>
                  <td style={{ color: 'var(--c-bad)' }}>{r.v1}</td>
                  <td style={{ color: 'var(--c-good)', fontWeight: 600 }}>{r.v2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
