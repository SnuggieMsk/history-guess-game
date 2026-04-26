import React from 'react';
import { reactionScenarios, reactionAggregate } from '../../../data/v2ReactionCase';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import Disclaimer from './Disclaimer';

export default function ReactionCaseV2() {
  const probSum = reactionScenarios.reduce((s, sc) => s + sc.probabilityPct, 0);
  const baselineProb = 100 - probSum;

  const evChart = [
    ...reactionScenarios.map(s => ({
      name: s.id.replace(/-/g, ' '),
      ev: s.revisedExitEvINRcr,
      prob: s.probabilityPct,
      color: '#a8322d',
    })),
    { name: 'Baseline (no scenario)', ev: 440.55, prob: baselineProb, color: '#2d6a4f' },
  ].sort((a, b) => b.ev - a.ev);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Strategic Reaction Case</div>
        <h1 className="sec-title">If Adani / Reliance / Thai Union React</h1>
        <p className="sec-sub">
          Audit found this scenario missing. Below: 5 reaction scenarios with probability bands,
          time-to-impact, revised Y3/Y5 numbers, exit-multiple impact, and our specific counter
          per scenario. Probability-weighted expected exit EV
          <strong> ₹{reactionAggregate.expectedExitEvINRcr.toFixed(0)} cr</strong>
          (vs base ₹{reactionAggregate.baseExitEvINRcr} cr).
        </p>
      </div>

      <Disclaimer kind="modelled">
        Probability bands (8-22%) are <strong>directional estimates</strong> based on public M&A activity
        + industry-consultant intelligence (Apr 2026). Verified inputs include Adani Wilmar FY24 revenue
        ₹54,000 cr and FDI cap raised to 100% under automatic route (DPIIT 2024). Time-to-impact is
        modelled per scenario.
      </Disclaimer>

      <div className="kpi-grid">
        <div className="card"><h3>Scenarios modelled</h3><div className="big">{reactionAggregate.totalScenarios}</div></div>
        <div className="card"><h3>Combined probability (any)</h3><div className="big" style={{color:'var(--c-warn)'}}>{probSum}%</div></div>
        <div className="card"><h3>Base exit EV</h3><div className="big">₹{reactionAggregate.baseExitEvINRcr} cr</div></div>
        <div className="card"><h3>Expected exit EV (prob-wt)</h3><div className="big" style={{color: reactionAggregate.expectedExitEvINRcr < reactionAggregate.baseExitEvINRcr ? 'var(--c-bad)' : 'var(--c-good)'}}>₹{reactionAggregate.expectedExitEvINRcr.toFixed(0)} cr</div></div>
      </div>

      <div className="section-block">
        <h2>Probability-weighted exit EV across scenarios</h2>
        <div className="card">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={evChart} layout="vertical" margin={{top:5, right:30, left:10, bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis type="number" stroke="#5c6272" fontSize={11}/>
              <YAxis type="category" dataKey="name" stroke="#5c6272" fontSize={11} width={200}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}
                formatter={(v, n, p) => [`₹${v} cr (${p.payload.prob}% prob)`, 'Exit EV']}/>
              <Bar dataKey="ev" name="Exit EV ₹cr" radius={[0, 4, 4, 0]}>
                {evChart.map((c, i) => <Cell key={i} fill={c.color}/>)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="section-block">
        <h2>Scenario detail — 5 reaction cases</h2>
        {reactionScenarios.map((s, i) => (
          <div key={s.id} className="card" style={{marginBottom:14, borderLeft:'4px solid var(--c-bad)'}}>
            <div style={{display:'flex',justifyContent:'space-between',gap:12,flexWrap:'wrap',marginBottom:10}}>
              <div>
                <h3 style={{fontFamily:'Georgia,serif',fontSize:16,fontWeight:600,color:'var(--c-text)'}}>{s.trigger}</h3>
                <div style={{fontSize:12, color:'var(--c-text-dim)', marginTop:4}}>
                  Probability {s.probabilityPct}% · Time-to-impact {s.timeToImpactMonths} months
                </div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontFamily:'Georgia,serif',fontSize:20,fontWeight:600,color:'var(--c-bad)'}}>
                  ₹{s.revisedExitEvINRcr.toFixed(0)} cr exit
                </div>
                <div style={{fontSize:11, color:'var(--c-text-dim)'}}>
                  vs ₹{reactionAggregate.baseExitEvINRcr} cr base ({((s.revisedExitEvINRcr/reactionAggregate.baseExitEvINRcr - 1) * 100).toFixed(0)}%)
                </div>
              </div>
            </div>

            <div className="grid grid-2" style={{fontSize:12, marginBottom:10}}>
              <div>
                <strong style={{fontSize:11, color:'var(--c-bad)', textTransform:'uppercase', letterSpacing:1}}>Immediate impact</strong>
                <ul className="bullets" style={{marginTop:4, fontSize:12}}>{s.immediateImpact.map((m,k) => <li key={k}>{m}</li>)}</ul>
              </div>
              <div>
                <strong style={{fontSize:11, color:'var(--c-good)', textTransform:'uppercase', letterSpacing:1}}>Our counter</strong>
                <ul className="bullets" style={{marginTop:4, fontSize:12}}>{s.ourCounter.map((m,k) => <li key={k}>{m}</li>)}</ul>
              </div>
            </div>

            <div className="grid grid-3" style={{fontSize:12, padding:10, background:'var(--c-surface-2)', borderRadius:4, marginBottom:10}}>
              <div><strong>Y3 revenue revised:</strong> ₹{s.yearlyImpactToUs.Y3RevenueRevisedINRcr} cr</div>
              <div><strong>Y5 revenue revised:</strong> ₹{s.yearlyImpactToUs.Y5RevenueRevisedINRcr} cr</div>
              <div><strong>Y5 EBITDA revised:</strong> ₹{s.yearlyImpactToUs.Y5EbitdaRevisedINRcr.toFixed(1)} cr</div>
              <div><strong>Exit multiple at risk of:</strong> {s.exitMultipleAtRiskOf}×</div>
              <div><strong>Revenue impact:</strong> {s.yearlyImpactToUs.revenueImpactPct}%</div>
              <div><strong>EBITDA impact:</strong> {s.yearlyImpactToUs.ebitdaImpactPct} ppt</div>
            </div>

            <div style={{fontSize:11.5, color:'var(--c-text-dim)', borderTop:'1px solid var(--c-border)', paddingTop:8}}>
              <strong>Early warning signals: </strong>{s.earlyWarningSignals.join(' · ')}
            </div>
          </div>
        ))}
      </div>

      <div className="callout" style={{borderLeftColor:'var(--c-warn)'}}>
        <strong>Posture: </strong>The expected EV (₹{reactionAggregate.expectedExitEvINRcr.toFixed(0)} cr) is
        ~{((1 - reactionAggregate.expectedExitEvINRcr/reactionAggregate.baseExitEvINRcr) * 100).toFixed(0)}% below the
        base exit (₹{reactionAggregate.baseExitEvINRcr} cr) — investor should price this in via terms (ratchets,
        anti-dilution, exit-discount clauses).
      </div>
    </>
  );
}
