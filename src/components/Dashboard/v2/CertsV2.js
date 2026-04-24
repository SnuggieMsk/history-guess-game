import React from 'react';
import { certCategories, certRoadmap, certRecurringCost } from '../../../data/v2Certs';

export default function CertsV2() {
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Certification Roadmap</div>
        <h1 className="sec-title">Every Gate We Need to Open</h1>
        <p className="sec-sub">
          Each buyer segment is gated by certifications. This maps every cert —
          mandatory India-side, destination regulatory, and premium voluntary —
          with timeline, cost, and what it unlocks.
          <strong> Recurring cert cost at Y3 steady state: ₹{certRecurringCost.y3AnnualL} L/year.</strong>
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Recurring Y3</h3><div className="big">₹{certRecurringCost.y3AnnualL} L/yr</div></div>
        <div className="card"><h3>One-off Y1-Y3</h3><div className="big">₹{certRecurringCost.y1Y3OneOffL} L</div></div>
        <div className="card"><h3>MSC fishery share</h3><div className="big">₹{certRecurringCost.mscFisheryShareL} L</div><div className="sub">Over Y1-Y3 co-funding</div></div>
        <div className="card"><h3>Total certs</h3><div className="big">{certCategories.reduce((s, c) => s + c.items.length, 0)}</div></div>
      </div>

      <div className="section-block">
        <h2>Y1-Y5 certification roadmap</h2>
        <div className="card">
          <div style={{ position: 'relative', paddingLeft: 24, borderLeft: '3px solid var(--c-border)' }}>
            {certRoadmap.map((r, i) => (
              <div key={i} style={{ marginBottom: 18, position: 'relative' }}>
                <span style={{ position: 'absolute', left: -30, top: 4, width: 14, height: 14, background: 'var(--c-accent-2)', borderRadius: '50%', border: '3px solid var(--c-bg)' }} />
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--c-accent)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>{r.period}</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {r.certs.map((c, j) => <span key={j} className="pill pill-info">{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {certCategories.map(cat => (
        <div className="section-block" key={cat.id}>
          <h2 style={{ color: cat.color }}>{cat.title}</h2>
          <div className="tbl-wrap">
            <table className="tbl">
              <thead><tr><th>Certification</th><th>Fee</th><th>Timeline</th><th>What it unlocks</th></tr></thead>
              <tbody>
                {cat.items.map((item, i) => (
                  <tr key={i}>
                    <td><strong>{item.cert}</strong></td>
                    <td style={{ fontSize: 12 }}>{item.fee}</td>
                    <td style={{ fontSize: 12, color: 'var(--c-accent)' }}>{item.timeline}</td>
                    <td style={{ fontSize: 12 }}>{item.unlocks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
}
