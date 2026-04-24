import React from 'react';
import { centralSchemes, stateSchemes, subsidyCaptureSummary } from '../../../data/subsidies';

const REL_PILL = (r) => {
  if (r === 'PRIMARY') return 'pill-good';
  if (r === 'SECONDARY') return 'pill-info';
  return 'pill-mute';
};

export default function Subsidies() {
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">Government Stack</div>
        <h1 className="sec-title">Subsidy & Incentive Capture Plan</h1>
        <p className="sec-sub">
          The government stack reduces our effective capex by {subsidyCaptureSummary.effectiveCapexReductionPct}%
          and adds {subsidyCaptureSummary.recurringRebatePctRevenue}% to revenue via RoDTEP.
          Total identified subsidy capture: ₹{(subsidyCaptureSummary.capexSubsidyINRlakh/100).toFixed(2)} cr in capex.
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Capex subsidy</h3><div className="big" style={{color:'var(--c-good)'}}>₹{(subsidyCaptureSummary.capexSubsidyINRlakh/100).toFixed(1)} cr</div></div>
        <div className="card"><h3>Effective capex cut</h3><div className="big">{subsidyCaptureSummary.effectiveCapexReductionPct}%</div></div>
        <div className="card"><h3>RoDTEP rebate</h3><div className="big">{subsidyCaptureSummary.recurringRebatePctRevenue}%</div><div className="sub">of revenue, recurring</div></div>
        <div className="card"><h3>Interest saving</h3><div className="big">{subsidyCaptureSummary.interestSavingPctTermLoan}%</div><div className="sub">via NABARD AIF refinance</div></div>
      </div>

      <div className="section-block">
        <h2>Central schemes</h2>
        {centralSchemes.map((s,i) => (
          <div className="card" key={i} style={{marginBottom:12}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:10,marginBottom:8}}>
              <div>
                <h3 style={{fontSize:15,color:'var(--c-text)',fontWeight:600}}>{s.scheme}</h3>
                <p style={{fontSize:11,color:'var(--c-text-dim)'}}>{s.ministry} · Outlay: {s.outlay}</p>
              </div>
              <span className={`pill ${REL_PILL(s.relevance.split(' ')[0])}`}>{s.relevance.split(' — ')[0]}</span>
            </div>
            <div className="grid grid-2">
              <div>
                <strong style={{fontSize:12,color:'var(--c-accent)'}}>Benefits</strong>
                <ul className="bullets" style={{marginTop:4}}>{s.benefits.map((b,k)=><li key={k}>{b}</li>)}</ul>
              </div>
              <div>
                <p style={{fontSize:12.5,color:'#1a1f36',marginBottom:6}}><strong style={{color:'var(--c-accent)'}}>Relevance:</strong> {s.relevance}</p>
                <p style={{fontSize:12.5,color:'#1a1f36',marginBottom:6}}><strong style={{color:'var(--c-accent)'}}>How to apply:</strong> {s.applicationProcess}</p>
                <p style={{fontSize:12.5,color:'#1a1f36'}}><strong style={{color:'var(--c-accent)'}}>Timeline:</strong> {s.typicalTimeline}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-block">
        <h2>Maharashtra state schemes</h2>
        {stateSchemes.map((s,i) => (
          <div className="card" key={i} style={{marginBottom:12}}>
            <h3 style={{fontSize:15,color:'var(--c-text)',fontWeight:600,marginBottom:8}}>{s.scheme}</h3>
            <div className="grid grid-2">
              <div>
                <strong style={{fontSize:12,color:'var(--c-accent)'}}>Benefits</strong>
                <ul className="bullets" style={{marginTop:4}}>{s.benefits.map((b,k)=><li key={k}>{b}</li>)}</ul>
              </div>
              <div>
                <p style={{fontSize:12.5,color:'#1a1f36',marginBottom:6}}><strong style={{color:'var(--c-accent)'}}>Relevance:</strong> {s.relevance}</p>
                <p style={{fontSize:12.5,color:'#1a1f36'}}><strong style={{color:'var(--c-accent)'}}>How to apply:</strong> {s.applicationProcess}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
