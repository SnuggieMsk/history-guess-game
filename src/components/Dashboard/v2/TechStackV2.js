import React from 'react';
import { techCategories, totalTechCostMonthly } from '../../../data/v2TechStack';

export default function TechStackV2() {
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Software Stack</div>
        <h1 className="sec-title">What Software You Actually Need</h1>
        <p className="sec-sub">
          {techCategories.length} categories — ERP, CRM, LIMS, telematics, traceability, QMS, comms.
          Recommended option per category with realistic monthly cost. Y1 ~₹{totalTechCostMonthly.Y1};
          Y3 ~₹{totalTechCostMonthly.Y3}; Y5 ~₹{totalTechCostMonthly.Y5}.
        </p>
      </div>

      {techCategories.map(c => (
        <div key={c.id} className="card" style={{ marginBottom: 14, borderLeft: '3px solid var(--c-accent-2)' }}>
          <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 16, fontWeight: 600 }}>{c.title}</h3>
          <div className="tbl-wrap" style={{ marginTop: 10 }}>
            <table className="tbl">
              <thead><tr><th>Option</th><th>Tier</th><th className="num">₹/mo</th><th>Fit</th></tr></thead>
              <tbody>
                {c.options.map((o, i) => (
                  <tr key={i}>
                    <td><strong>{o.name}</strong></td>
                    <td><span className={`pill ${o.tier === 'Premium' ? 'pill-bad' : o.tier === 'Mid' ? 'pill-warn' : o.tier === 'Entry' || o.tier === 'Bootstrap' ? 'pill-good' : 'pill-info'}`}>{o.tier}</span></td>
                    <td className="num">{o.monthlyINR}</td>
                    <td style={{ fontSize: 12 }}>{o.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="callout" style={{ marginTop: 10 }}>
            <strong>Recommendation: </strong>{c.recommendation}
          </div>
        </div>
      ))}
    </>
  );
}
