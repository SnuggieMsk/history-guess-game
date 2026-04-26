import React, { useState } from 'react';
import { failureModes, survivorshipStats, survivorPlaybook, investorRedFlags } from '../../../data/v2RealityChecks';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

export default function RealityChecksV2() {
  const [open, setOpen] = useState(failureModes[0].rank);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · L6 Reality Checks</div>
        <h1 className="sec-title">What Kills 70% of New Entrants</h1>
        <p className="sec-sub">
          The 12 failure modes that kill seafood-export startups. Each ranked by % of failures with
          examples, root causes, time-to-death, what survivors did differently, and our specific mitigation.
          {survivorshipStats.insight}
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Estimated new entrants 2018-24</h3><div className="big">50-70</div></div>
        <div className="card"><h3>Survived past Y3</h3><div className="big" style={{color:'var(--c-good)'}}>{survivorshipStats.estimatedSurvived}</div></div>
        <div className="card"><h3>Failed</h3><div className="big" style={{color:'var(--c-bad)'}}>{survivorshipStats.estimatedFailed}</div></div>
        <div className="card"><h3>Acquired</h3><div className="big" style={{color:'var(--c-warn)'}}>{survivorshipStats.estimatedAcquired}</div></div>
      </div>

      <div className="card" style={{marginTop:14}}>
        <h3>Failure mode distribution (% of failures)</h3>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={failureModes} layout="vertical" margin={{top:5,right:15,left:10,bottom:0}}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
            <XAxis type="number" stroke="#5c6272" fontSize={11} domain={[0,30]}/>
            <YAxis type="category" dataKey="failure" stroke="#5c6272" fontSize={9} width={260}/>
            <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
            <Bar dataKey="pctOfFailures" name="% of failures">
              {failureModes.map((f,i) => (
                <Cell key={i} fill={f.pctOfFailures > 20 ? '#a8322d' : f.pctOfFailures > 10 ? '#b8860b' : '#c5a565'}/>
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="section-block">
        <h2>Failure mode deep-dive (click to expand)</h2>
        {failureModes.map(f => {
          const isOpen = open === f.rank;
          return (
            <div key={f.rank} className="card" style={{marginBottom:10, borderLeft:'3px solid var(--c-bad)'}}>
              <div onClick={() => setOpen(isOpen ? null : f.rank)} style={{cursor:'pointer', display:'flex', justifyContent:'space-between', gap:10, flexWrap:'wrap'}}>
                <div>
                  <span className="pill pill-bad">#{f.rank}</span>
                  <strong style={{marginLeft:8, fontFamily:'Georgia,serif', fontSize:14}}>{f.failure}</strong>
                </div>
                <span className="pill pill-warn">{f.pctOfFailures}% of failures</span>
              </div>
              {isOpen && (
                <div style={{marginTop:14, paddingTop:12, borderTop:'1px solid var(--c-border)'}}>
                  <div style={{marginBottom:10}}>
                    <strong style={{fontSize:11,color:'var(--c-bad)',textTransform:'uppercase',letterSpacing:1}}>Examples</strong>
                    <p style={{fontSize:13,marginTop:4}}>{f.examples}</p>
                  </div>
                  <div style={{marginBottom:10}}>
                    <strong style={{fontSize:11,color:'var(--c-warn)',textTransform:'uppercase',letterSpacing:1}}>Root cause</strong>
                    <p style={{fontSize:13,marginTop:4}}>{f.rootCause}</p>
                  </div>
                  <div style={{marginBottom:10}}>
                    <strong style={{fontSize:11,color:'var(--c-text-dim)',textTransform:'uppercase',letterSpacing:1}}>Time to death</strong>
                    <p style={{fontSize:13,marginTop:4}}>{f.timeToDeath}</p>
                  </div>
                  <div style={{marginBottom:10}}>
                    <strong style={{fontSize:11,color:'var(--c-good)',textTransform:'uppercase',letterSpacing:1}}>Survivor profile</strong>
                    <p style={{fontSize:13,marginTop:4}}>{f.survivor}</p>
                  </div>
                  <div className="callout" style={{background:'#e8f0ec'}}>
                    <strong>Our mitigation: </strong>{f.ourMitigation}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="section-block grid grid-2">
        <div className="card">
          <h3>Survivor playbook (12 rules)</h3>
          <ol style={{paddingLeft:22, fontSize:12.5}}>
            {survivorPlaybook.map((s,i) => <li key={i} style={{margin:'5px 0'}}>{s}</li>)}
          </ol>
        </div>
        <div className="card">
          <h3>Investor red flags (≥3 = avoid)</h3>
          <ul className="bullets" style={{fontSize:12.5}}>
            {investorRedFlags.map((r,i) => <li key={i}>{r}</li>)}
          </ul>
        </div>
      </div>

      <div className="callout">
        <strong>Brutal truth:</strong> {survivorshipStats.insight}
      </div>
    </>
  );
}
