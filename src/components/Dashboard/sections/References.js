import React from 'react';
import { references } from '../../../data/references';

export default function References() {
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">Sources</div>
        <h1 className="sec-title">References & Source Material</h1>
        <p className="sec-sub">
          Every number in this dashboard is sourced. Last research pass: April 2026.
          Where data is estimated or modelled, it is flagged in the relevant section's notes.
        </p>
      </div>

      {references.map((g, i) => (
        <div className="card" key={i} style={{marginBottom:12}}>
          <h3 style={{fontSize:15,color:'var(--c-accent)',fontWeight:600,marginBottom:8}}>{g.section}</h3>
          <ul className="bullets">
            {g.sources.map((s, k) => (
              <li key={k}>
                <a href={s.url} target="_blank" rel="noreferrer">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="callout">
        <strong>Disclaimer:</strong> This dashboard synthesises publicly available data with modelled
        assumptions. Numbers are indicative and should be validated against MPEDA monthly bulletins,
        DGCI&S export statistics, and primary supplier quotes before any investment commitment.
        Subsidy quantum and timing depend on scheme guidelines as updated by MoFPI/DoF/MPEDA from
        time to time.
      </div>
    </>
  );
}
