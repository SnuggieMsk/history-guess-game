import React from 'react';
import { criticalPathItems, criticalPathSummary, failureCascades } from '../../../data/v2CriticalPath';
import SortableTable from '../SortableTable';
import Disclaimer from './Disclaimer';

const RISK_COLOR = { 'High': 'var(--c-bad)', 'Medium': 'var(--c-warn)', 'Low': 'var(--c-good)' };

export default function CriticalPathV2() {
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Regulatory Critical Path</div>
        <h1 className="sec-title">Land · MPCB · FSSAI · MSC · EU — M-8 to M+30</h1>
        <p className="sec-sub">
          Audit found the regulatory critical-path missing. Below: {criticalPathSummary.totalItems} statutory
          items spanning {criticalPathSummary.totalSpanMonths} months from land due-diligence (M-8) to EU
          establishment (M+30). {criticalPathSummary.highRiskItems} High-risk items can each delay project
          6+ months. {failureCascades.length} failure-cascade scenarios with revenue impact + mitigation.
        </p>
      </div>

      <Disclaimer kind="estimate">
        Regulatory timelines are <strong>standard process bands</strong> per current MPCB / FSSAI /
        DGFT / MPEDA / MSC India / DG SANTE published timelines (April 2026). Actual durations depend
        on file completeness + officer disposition + occasional political/election cycle delays.
      </Disclaimer>

      <div className="kpi-grid">
        <div className="card"><h3>Critical items</h3><div className="big">{criticalPathSummary.totalItems}</div></div>
        <div className="card"><h3>High risk</h3><div className="big" style={{color:'var(--c-bad)'}}>{criticalPathSummary.highRiskItems}</div></div>
        <div className="card"><h3>Govt fees total</h3><div className="big">₹{criticalPathSummary.totalGovtFeesINRl.toFixed(1)} L</div></div>
        <div className="card"><h3>Span (months)</h3><div className="big">{criticalPathSummary.totalSpanMonths}</div></div>
      </div>

      <div className="section-block">
        <h2>Critical path items — sortable BOQ-style</h2>
        <div className="card">
          <SortableTable
            columns={[
              { key:'item', label:'Item', render:(v) => <strong>{v}</strong> },
              { key:'statutoryAuthority', label:'Authority', style:{fontSize:11} },
              { key:'earliestStartMonth', label:'Start', numeric:true, format:(v) => v >= 0 ? `M+${v}` : `M${v}` },
              { key:'durationDays', label:'Duration (d)', numeric:true },
              { key:'deadlineMonth', label:'Deadline', numeric:true, format:(v) => v >= 0 ? `M+${v}` : `M${v}` },
              { key:'riskLevel', label:'Risk', render:(v) => <span className={`pill ${v === 'High' ? 'pill-bad' : v === 'Medium' ? 'pill-warn' : 'pill-good'}`}>{v}</span> },
              { key:'feeINRl', label:'Fees ₹L', numeric:true, format:(v) => `₹${v.toFixed(2)}` },
              { key:'ourStatus', label:'Our status', style:{fontSize:11} },
            ]}
            rows={criticalPathItems}
            defaultSort="deadlineMonth"
            filterable
          />
        </div>
      </div>

      <div className="section-block">
        <h2>Per-item drilldown</h2>
        {criticalPathItems.map((it, i) => (
          <div key={it.id} className="card" style={{marginBottom:10, borderLeft:`3px solid ${RISK_COLOR[it.riskLevel]}`}}>
            <div style={{display:'flex',justifyContent:'space-between',gap:10,flexWrap:'wrap',marginBottom:6}}>
              <h3 style={{fontFamily:'Georgia,serif',fontSize:14,fontWeight:600,color:'var(--c-text)'}}>{it.item}</h3>
              <span className={`pill ${it.riskLevel === 'High' ? 'pill-bad' : it.riskLevel === 'Medium' ? 'pill-warn' : 'pill-good'}`}>
                {it.riskLevel} risk · {it.earliestStartMonth >= 0 ? `M+${it.earliestStartMonth}` : `M${it.earliestStartMonth}`} → M+{it.deadlineMonth}
              </span>
            </div>
            <div style={{fontSize:12, color:'var(--c-text-dim)', marginBottom:6}}>
              <strong>Authority:</strong> {it.statutoryAuthority} · <strong>Duration:</strong> {it.durationDays} days · <strong>Fees:</strong> ₹{it.feeINRl.toFixed(2)} L
            </div>
            <div style={{fontSize:12, marginBottom:6}}>
              <strong>Documents:</strong> {it.documentsRequired.join(' · ')}
            </div>
            <div style={{fontSize:12, marginBottom:6}}>
              <strong>Blocking for:</strong> <em>{it.blockingFor.join(', ')}</em>
            </div>
            <div style={{fontSize:12, color: 'var(--c-bad)', borderTop:'1px solid var(--c-border)', paddingTop:6, fontStyle:'italic'}}>
              <strong>Failure mode: </strong>{it.failureMode}
            </div>
          </div>
        ))}
      </div>

      <div className="section-block">
        <h2>Failure cascade scenarios — what slips when</h2>
        {failureCascades.map((fc, i) => (
          <div key={i} className="card" style={{marginBottom:10, borderLeft:'3px solid var(--c-bad)'}}>
            <div style={{display:'flex',justifyContent:'space-between',gap:10,flexWrap:'wrap',marginBottom:8}}>
              <h3 style={{fontFamily:'Georgia,serif',fontSize:14,fontWeight:600,color:'var(--c-bad)'}}>{fc.upstreamFailure}</h3>
              <span className="pill pill-bad">Revenue impact ₹{fc.revenueImpactINRcr.toFixed(1)} cr</span>
            </div>
            <div style={{marginBottom:8, fontSize:12}}>
              <strong style={{color:'var(--c-bad)'}}>Cascade: </strong>
              <ul className="bullets" style={{marginTop:4}}>{fc.cascade.map((c, k) => <li key={k}>{c}</li>)}</ul>
            </div>
            <div className="callout" style={{borderLeftColor:'var(--c-good)'}}>
              <strong>Mitigation: </strong>{fc.mitigation}
            </div>
          </div>
        ))}
      </div>

      <div className="callout" style={{borderLeftColor:'var(--c-warn)'}}>
        <strong>Bank disbursal precondition: </strong>SBI/BoB term loan release requires Land title +
        NA conversion + MPCB CTE in hand. Any of these slipping pushes commissioning by 3-6 months.
        Project IRR sensitivity: each 3-month delay costs ~80-120 bps.
      </div>
    </>
  );
}
