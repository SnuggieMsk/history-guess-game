import React from 'react';
import { references, dataVerificationLedger, verificationSummaryStats } from '../../../data/references';

export default function References() {
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">Sources</div>
        <h1 className="sec-title">References & Source Material</h1>
        <p className="sec-sub">
          Every number in this dashboard is sourced. Last research pass: April 2026.
          Where data is estimated or modelled, it is flagged in the relevant section's notes
          and in the Data Verification Ledger below.
        </p>
      </div>

      <div className="kpi-grid" style={{marginBottom:18}}>
        <div className="card"><h3>Source files</h3><div className="big">{verificationSummaryStats.totalDataFiles}</div></div>
        <div className="card"><h3>Verified claims</h3><div className="big" style={{color:'var(--c-good)'}}>{verificationSummaryStats.totalVerifiedClaims}</div></div>
        <div className="card"><h3>Directional</h3><div className="big" style={{color:'var(--c-warn)'}}>{verificationSummaryStats.totalDirectionalClaims}</div></div>
        <div className="card"><h3>Modelled</h3><div className="big" style={{color:'var(--c-accent)'}}>{verificationSummaryStats.totalModelledClaims}</div></div>
      </div>

      <div className="section-block">
        <h2>Data verification ledger</h2>
        {dataVerificationLedger.map((d, i) => (
          <div className="card" key={i} style={{marginBottom:12, borderLeft:'3px solid var(--c-accent)'}}>
            <h3 style={{fontFamily:'Menlo,monospace',fontSize:12.5,color:'var(--c-text)',marginBottom:10}}>
              {d.file}
            </h3>
            <div className="grid grid-3">
              <div>
                <strong style={{fontSize:10.5,color:'var(--c-good)',textTransform:'uppercase',letterSpacing:1}}>Verified ({d.verified.length})</strong>
                <ul className="bullets" style={{fontSize:11.5,marginTop:4}}>
                  {d.verified.map((v,k) => <li key={k}>{v}</li>)}
                  {d.verified.length === 0 && <li style={{fontStyle:'italic',color:'var(--c-text-faint)'}}>none</li>}
                </ul>
              </div>
              <div>
                <strong style={{fontSize:10.5,color:'var(--c-warn)',textTransform:'uppercase',letterSpacing:1}}>Directional ({d.directional.length})</strong>
                <ul className="bullets" style={{fontSize:11.5,marginTop:4}}>
                  {d.directional.map((v,k) => <li key={k}>{v}</li>)}
                  {d.directional.length === 0 && <li style={{fontStyle:'italic',color:'var(--c-text-faint)'}}>none</li>}
                </ul>
              </div>
              <div>
                <strong style={{fontSize:10.5,color:'var(--c-accent)',textTransform:'uppercase',letterSpacing:1}}>Modelled ({d.modelled.length})</strong>
                <ul className="bullets" style={{fontSize:11.5,marginTop:4}}>
                  {d.modelled.map((v,k) => <li key={k}>{v}</li>)}
                  {d.modelled.length === 0 && <li style={{fontStyle:'italic',color:'var(--c-text-faint)'}}>none</li>}
                </ul>
              </div>
            </div>
          </div>
        ))}
        <div className="callout" style={{marginTop:8}}>
          <strong>Verification policy: </strong>{verificationSummaryStats.policyStatement}
        </div>
      </div>

      <div className="section-block">
        <h2>Public sources by topic</h2>
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
      </div>

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
