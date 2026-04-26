import React, { useState } from 'react';
import { graveyardCases, graveyardSummary, survivorComparison } from '../../../data/v2GraveyardCases';
import { backtestScenarios, simAccuracyByEvent, knownLimitations, futureSimEnhancements } from '../../../data/v2BackTesting';

export default function GraveyardV2() {
  const [open, setOpen] = useState(graveyardCases[0].id);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · L6 The Graveyard</div>
        <h1 className="sec-title">5 Anonymized Death Stories + Sim Back-Testing</h1>
        <p className="sec-sub">
          Real failures from 2019-2024 anonymized. Each: timeline from founding to death, root causes,
          jobs impacted, asset recovery, and our specific lesson. Plus: simulator back-testing accuracy
          (~87% directional) against 6 known historical cases.
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Graveyard cases</h3><div className="big">{graveyardSummary.totalCases}</div></div>
        <div className="card"><h3>Combined peak rev</h3><div className="big">₹{graveyardSummary.totalRevenueAtPeak} cr</div></div>
        <div className="card"><h3>Jobs impacted</h3><div className="big">{graveyardSummary.totalImpactedJobs.toLocaleString('en-IN')}</div></div>
        <div className="card"><h3>Avg time to death</h3><div className="big">{graveyardSummary.averageTimeFromFoundingToFailure} yr</div></div>
      </div>

      <div className="section-block">
        <h2>Death stories</h2>
        {graveyardCases.map(c => {
          const isOpen = open === c.id;
          return (
            <div key={c.id} className="card" style={{marginBottom:10, borderLeft:'3px solid var(--c-bad)'}}>
              <div onClick={() => setOpen(isOpen ? null : c.id)} style={{cursor:'pointer', display:'flex', justifyContent:'space-between', gap:10, flexWrap:'wrap', alignItems:'flex-start'}}>
                <div>
                  <strong style={{fontFamily:'Georgia,serif', fontSize:15}}>{c.pseudonym}</strong>
                  <div style={{fontSize:11, color:'var(--c-text-dim)', marginTop:3}}>
                    Founded {c.foundedYear} · Closed {c.closedYear} · Peak ₹{c.peakRevenueINRcr} cr · {c.impactedJobs} jobs
                  </div>
                </div>
                <span className="pill pill-bad">{c.primaryFailureMode}</span>
              </div>
              {isOpen && (
                <div style={{marginTop:14, paddingTop:12, borderTop:'1px solid var(--c-border)'}}>
                  <div style={{marginBottom:12}}>
                    <strong style={{fontSize:11,color:'var(--c-accent)',textTransform:'uppercase',letterSpacing:1}}>Timeline</strong>
                    <ol style={{paddingLeft:22,marginTop:6,fontSize:12.5}}>
                      {c.timeline.map((t,i) => <li key={i} style={{margin:'3px 0'}}>{t}</li>)}
                    </ol>
                  </div>
                  <div style={{marginBottom:12}}>
                    <strong style={{fontSize:11,color:'var(--c-bad)',textTransform:'uppercase',letterSpacing:1}}>Root causes</strong>
                    <ul className="bullets" style={{marginTop:6, fontSize:12.5}}>
                      {c.rootCauses.map((r,i) => <li key={i}>{r}</li>)}
                    </ul>
                  </div>
                  <div className="callout" style={{background:'#e8f0ec'}}>
                    <strong>Lesson for us: </strong>{c.lessonForUs}
                  </div>
                  <div style={{marginTop:8, fontSize:12, color:'var(--c-text-dim)'}}>
                    <strong>Asset recovery:</strong> {c.finalAssetRecovery}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="section-block">
        <h2>Survivor vs failure trait comparison</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Trait</th><th className="num">Survivors</th><th className="num">Failures</th></tr></thead>
            <tbody>
              {survivorComparison.map((s,i) => (
                <tr key={i}>
                  <td><strong>{s.trait}</strong></td>
                  <td className="num" style={{color:'var(--c-good)'}}>{s.survivors}</td>
                  <td className="num" style={{color:'var(--c-bad)'}}>{s.failures}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block">
        <h2>Simulator back-testing</h2>
        <div className="kpi-grid">
          <div className="card"><h3>Cyclone predictiveness</h3><div className="big">{simAccuracyByEvent.cyclonePredictiveness}</div></div>
          <div className="card"><h3>Tariff predictiveness</h3><div className="big">{simAccuracyByEvent.tariffPredictiveness}</div></div>
          <div className="card"><h3>Disease predictiveness</h3><div className="big">{simAccuracyByEvent.diseasePredictiveness}</div></div>
          <div className="card"><h3>Overall accuracy</h3><div className="big">{simAccuracyByEvent.overallSimGoodness}</div></div>
        </div>

        <div className="section-block">
          <h3>Back-tested scenarios</h3>
          {backtestScenarios.map((b,i) => (
            <div key={i} className="card" style={{marginBottom:10, borderLeft:'3px solid var(--c-good)'}}>
              <strong style={{fontSize:13}}>{b.case}</strong>
              <div style={{fontSize:12, marginTop:6}}><strong style={{color:'var(--c-bad)'}}>Actual: </strong>{b.actualOutcome}</div>
              <div style={{fontSize:12, marginTop:4}}><strong style={{color:'var(--c-good)'}}>Sim predicted: </strong>{b.simPredicted}</div>
              <div style={{fontSize:11.5, marginTop:4, color:'var(--c-accent)'}}><strong>Accuracy: </strong>{b.accuracy}</div>
              <div style={{fontSize:11.5, marginTop:4, color:'var(--c-text-dim)', fontStyle:'italic'}}>{b.learning}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-block grid grid-2">
        <div className="card">
          <h3>Known limitations</h3>
          <ul className="bullets" style={{fontSize:12}}>
            {knownLimitations.map((l,i) => <li key={i}>{l}</li>)}
          </ul>
        </div>
        <div className="card">
          <h3>Future enhancements</h3>
          <ul className="bullets" style={{fontSize:12}}>
            {futureSimEnhancements.map((f,i) => <li key={i}>{f}</li>)}
          </ul>
        </div>
      </div>
    </>
  );
}
