import React, { useState } from 'react';
import { regForms, feeBudget, usAgentRecommendations } from '../../../data/v2RegForms';

export default function RegFormsV2() {
  const [open, setOpen] = useState(regForms[0].id);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · L4 Exact Forms + Portals</div>
        <h1 className="sec-title">Click-by-Click Regulatory Application</h1>
        <p className="sec-sub">
          Every certification with the exact application portal URL, exact form name, exact fee,
          field-by-field what to fill, exact timeline, and traps. Print this directly and walk it
          through with your CS / consultant. {regForms.length} certifications mapped.
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Forms documented</h3><div className="big">{regForms.length}</div></div>
        <div className="card"><h3>Y1 one-off fee budget</h3><div className="big">₹{feeBudget.oneOffINRl} L</div></div>
        <div className="card"><h3>Annual recurring</h3><div className="big">₹{feeBudget.recurringINRlPerYr} L</div></div>
        <div className="card"><h3>+ Consultant</h3><div className="big">₹{feeBudget.consultantINRlPerYr} L</div><div className="sub">/yr</div></div>
      </div>

      <div className="section-block">
        <h2>All forms — click to expand</h2>
        {regForms.map(f => {
          const isOpen = open === f.id;
          return (
            <div key={f.id} className="card" style={{marginBottom:10, borderLeft:'3px solid var(--c-accent)'}}>
              <div onClick={() => setOpen(isOpen ? null : f.id)} style={{cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:12, flexWrap:'wrap'}}>
                <div>
                  <h3 style={{fontFamily:'Georgia,serif',fontSize:15,fontWeight:600}}>{f.cert}</h3>
                  <div style={{fontSize:11,color:'var(--c-text-dim)',marginTop:4}}>Authority: {f.authority} · Form: <strong>{f.formName}</strong></div>
                </div>
                <div style={{textAlign:'right'}}>
                  <span className="pill pill-good">{f.fee}</span>
                  <div style={{fontSize:11,color:'var(--c-text-dim)',marginTop:4}}>Timeline: {f.timeline}</div>
                </div>
              </div>
              {isOpen && (
                <div style={{marginTop:14, paddingTop:12, borderTop:'1px solid var(--c-border)'}}>
                  <div style={{marginBottom:10}}>
                    <strong style={{fontSize:11, color:'var(--c-accent)', textTransform:'uppercase', letterSpacing:1}}>Portal URL</strong>
                    <div style={{fontSize:12, marginTop:4}}><a href={f.portal} target="_blank" rel="noreferrer">{f.portal}</a></div>
                  </div>
                  <div style={{marginBottom:10}}>
                    <strong style={{fontSize:11, color:'var(--c-accent)', textTransform:'uppercase', letterSpacing:1}}>Fee payment</strong>
                    <div style={{fontSize:12, marginTop:4}}>{f.feePayment}</div>
                  </div>
                  <div style={{marginBottom:10}}>
                    <strong style={{fontSize:11, color:'var(--c-good)', textTransform:'uppercase', letterSpacing:1}}>Fields / docs to submit</strong>
                    <ol style={{paddingLeft:22, marginTop:4, fontSize:12.5}}>
                      {f.fields.map((field, i) => <li key={i} style={{margin:'3px 0'}}>{field}</li>)}
                    </ol>
                  </div>
                  {f.note && (
                    <div className="callout" style={{marginTop:10, background:'#faf5e5'}}>
                      <strong>Note: </strong>{f.note}
                    </div>
                  )}
                  {f.riskNote && (
                    <div className="callout" style={{marginTop:8, background:'#f8ebe8', borderLeftColor:'var(--c-bad)'}}>
                      <strong style={{color:'var(--c-bad)'}}>Risk: </strong>{f.riskNote}
                    </div>
                  )}
                  {f.annualRenewal && (
                    <div style={{fontSize:11, color:'var(--c-warn)', marginTop:6}}><strong>Renewal:</strong> {f.annualRenewal}</div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="section-block">
        <h2>USFDA US Agent recommendations (mandatory)</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Firm</th><th>Annual ₹L</th><th>Specialty</th></tr></thead>
            <tbody>
              {usAgentRecommendations.map((u,i) => (
                <tr key={i}>
                  <td><strong>{u.firm}</strong>{u.web && <div style={{fontSize:11}}><a href={`https://${u.web}`} target="_blank" rel="noreferrer">{u.web}</a></div>}</td>
                  <td className="num">{u.annualINRl}</td>
                  <td style={{fontSize:12}}>{u.specialty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="callout">
        <strong>Critical sequence (do not skip):</strong> IEC → MPEDA RCMC → FSSAI Central → MPCB CTE (before civil) → PESO (before ammonia install) → HACCP (post commissioning) → MPEDA per-shipment → USFDA FFR → EU establishment via MPEDA → GACC. Skipping order = wasted months + penalties.
      </div>
    </>
  );
}
