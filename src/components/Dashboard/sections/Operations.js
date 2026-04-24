import React from 'react';
import { orgChart, hiringPlaybook, regulatoryChecklist, buyerProfilesByMarket, sopHighlights } from '../../../data/operations';

export default function Operations() {
  const allRoles = [orgChart.ceo, ...orgChart.leadership, ...orgChart.middleManagement, ...orgChart.workforce];
  const totalMonthlyCostLakh = allRoles.reduce((s, r) => s + r.count * r.costPerMonthLakh, 0);
  const totalCount = allRoles.reduce((s, r) => s + r.count, 0);
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">Playbook</div>
        <h1 className="sec-title">Operations, HR, Regulatory & Buyer Playbook</h1>
        <p className="sec-sub">
          The execution layer: org chart, hiring channels, regulatory checklist (16 licenses),
          buyer profiles by market (USA, EU, China, Japan, GCC, SEA), and SOP highlights.
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Headcount @ Y3</h3><div className="big">{totalCount}</div><div className="sub">includes 90 skilled + 24 helpers</div></div>
        <div className="card"><h3>Monthly payroll</h3><div className="big">₹{totalMonthlyCostLakh.toFixed(1)} L</div><div className="sub">≈ ₹{(totalMonthlyCostLakh*12/100).toFixed(2)} cr/yr</div></div>
        <div className="card"><h3>Women workforce</h3><div className="big">~70%</div><div className="sub">of processing line</div></div>
        <div className="card"><h3>Y1 attrition target</h3><div className="big">{hiringPlaybook.Y1.targetAttritionPct}%</div><div className="sub">→ {hiringPlaybook.Y3.targetAttritionPct}% by Y3</div></div>
      </div>

      <div className="section-block">
        <h2>Org chart (Y3)</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3>Leadership</h3>
            <table className="tbl">
              <thead><tr><th>Role</th><th className="num">#</th><th className="num">₹L/mo</th></tr></thead>
              <tbody>
                <tr><td><strong>{orgChart.ceo.title}</strong></td><td className="num">{orgChart.ceo.count}</td><td className="num">{orgChart.ceo.costPerMonthLakh}</td></tr>
                {orgChart.leadership.map((r,i) => (
                  <tr key={i}><td>{r.title}<br/><span style={{fontSize:11,color:'var(--c-text-dim)'}}>{r.role}</span></td><td className="num">{r.count}</td><td className="num">{r.costPerMonthLakh}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card">
            <h3>Middle management & specialists</h3>
            <table className="tbl">
              <thead><tr><th>Role</th><th className="num">#</th><th className="num">₹L/mo each</th></tr></thead>
              <tbody>
                {orgChart.middleManagement.map((r,i) => (
                  <tr key={i}><td>{r.title}</td><td className="num">{r.count}</td><td className="num">{r.costPerMonthLakh}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card" style={{marginTop:14}}>
          <h3>Workforce (Y3)</h3>
          <table className="tbl">
            <thead><tr><th>Role</th><th className="num">#</th><th className="num">₹L/mo each</th><th className="num">Women %</th></tr></thead>
            <tbody>
              {orgChart.workforce.filter(r=>r.count>0).map((r,i) => (
                <tr key={i}><td>{r.title}</td><td className="num">{r.count}</td><td className="num">{r.costPerMonthLakh}</td><td className="num">{r.womenSharePct}%</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block">
        <h2>Hiring playbook (Y1)</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3>Recruitment channels</h3>
            <ul className="bullets">{hiringPlaybook.Y1.recruitmentChannels.map((c,i) => <li key={i}>{c}</li>)}</ul>
          </div>
          <div className="card">
            <h3>Wage bands (₹/month)</h3>
            <table className="tbl">
              <thead><tr><th>Role</th><th className="num">Entry</th><th className="num">Y1 end</th></tr></thead>
              <tbody>
                {Object.entries(hiringPlaybook.Y1.wages).map(([k,v]) => (
                  <tr key={k}><td>{k.replace(/([A-Z])/g, ' $1').replace(/^\w/, c => c.toUpperCase())}</td><td className="num">{v.entry.toLocaleString()}</td><td className="num">{v.year1End.toLocaleString()}</td></tr>
                ))}
              </tbody>
            </table>
            <p style={{fontSize:11,color:'var(--c-text-dim)',marginTop:6}}>All include PF + ESI from Day 1</p>
          </div>
        </div>
        <div className="card" style={{marginTop:12}}>
          <h3>Benefits stack</h3>
          <ul className="bullets">{hiringPlaybook.Y1.benefits.map((b,i) => <li key={i}>{b}</li>)}</ul>
        </div>
      </div>

      <div className="section-block">
        <h2>Regulatory checklist</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Authority</th><th>License / approval</th><th>Lead time</th><th>Critical</th><th>Cost</th></tr></thead>
            <tbody>
              {regulatoryChecklist.map((r,i) => (
                <tr key={i}>
                  <td><strong>{r.authority}</strong></td>
                  <td>{r.license}</td>
                  <td>{r.leadTime}</td>
                  <td>{r.critical ? <span className="pill pill-bad">YES</span> : <span className="pill pill-mute">No</span>}</td>
                  <td>{r.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block">
        <h2>Buyer profiles by market</h2>
        {buyerProfilesByMarket.map((m,i) => (
          <div className="card" key={i} style={{marginBottom:12}}>
            <h3 style={{fontSize:16,color:'var(--c-accent)',fontWeight:600,marginBottom:10}}>{m.market}</h3>
            <div className="tbl-wrap">
              <table className="tbl">
                <thead><tr><th>Buyer segment</th><th>What we sell them</th><th>Vol target (MT/yr each)</th><th>Pricing power</th></tr></thead>
                <tbody>
                  {m.buyerTypes.map((b,k) => (
                    <tr key={k}>
                      <td><strong>{b.segment}</strong></td>
                      <td style={{fontSize:12}}>{b.value}</td>
                      <td>{b.annualVolMT}</td>
                      <td>{b.pricingPower}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{fontSize:12.5,color:'var(--c-text-dim)',marginTop:8}}>
              <strong style={{color:'var(--c-accent)'}}>Payment:</strong> {m.paymentTerms}<br/>
              <strong style={{color:'var(--c-accent)'}}>Trade fair:</strong> {m.keyContact}
            </p>
          </div>
        ))}
      </div>

      <div className="section-block">
        <h2>SOP highlights</h2>
        {sopHighlights.map((s,i) => (
          <div className="card" key={i} style={{marginBottom:8}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:10,marginBottom:6}}>
              <h3 style={{fontSize:14,color:'var(--c-text)',fontWeight:600}}>{s.sop}</h3>
              <span className={`pill ${s.criticality==='Critical'?'pill-bad':s.criticality==='High'?'pill-warn':'pill-info'}`}>{s.criticality}</span>
            </div>
            <p style={{fontSize:12.5,color:'#1a1f36'}}>{s.summary}</p>
          </div>
        ))}
      </div>
    </>
  );
}
