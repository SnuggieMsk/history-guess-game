import React from 'react';
import { insurancePolicies, insuranceTotals, premiumByYear, claimsBenchmarks, brokerStrategy } from '../../../data/v2InsuranceSchedule';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import SortableTable from '../SortableTable';
import Disclaimer from './Disclaimer';

export default function InsuranceScheduleV2() {
  const premiumChart = Object.entries(premiumByYear).map(([yr, d]) => ({
    year: yr,
    premium: d.totalINRl,
  }));

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Insurance Program</div>
        <h1 className="sec-title">Insurance Schedule — {insuranceTotals.totalLines} Policy Lines</h1>
        <p className="sec-sub">
          Total sum-insured <strong>₹{insuranceTotals.totalSumInsuredINRcr.toFixed(0)} cr</strong> · annual
          premium <strong>₹{insuranceTotals.totalAnnualPremiumINRl.toFixed(1)} L</strong>
          ({insuranceTotals.premiumAsPctOfRevenueY3.toFixed(2)}% of Y3 revenue). Audit found insurance
          schedule was missing — only keyman was budgeted. This page closes that gap.
        </p>
      </div>

      <Disclaimer kind="estimate">
        Premium rates are <strong>indicative</strong> based on Indian general insurance website rates
        (HDFC ERGO, Bajaj Allianz, ICICI Lombard) Apr 2026. Actual quotes obtained via broker RFP process
        will vary ±10-15%. Sum insured per line aligns with v2Constants reconciled values.
      </Disclaimer>

      <div className="kpi-grid">
        <div className="card"><h3>Total sum insured</h3><div className="big">₹{insuranceTotals.totalSumInsuredINRcr.toFixed(0)} cr</div></div>
        <div className="card"><h3>Annual premium Y3</h3><div className="big">₹{insuranceTotals.totalAnnualPremiumINRl.toFixed(1)} L</div></div>
        <div className="card"><h3>% of Y3 revenue</h3><div className="big">{insuranceTotals.premiumAsPctOfRevenueY3.toFixed(2)}%</div></div>
        <div className="card"><h3>Policy lines</h3><div className="big">{insuranceTotals.totalLines}</div></div>
      </div>

      <div className="section-block">
        <h2>Premium escalation Y1 → Y5</h2>
        <div className="card">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={premiumChart} margin={{top:10,right:10,left:0,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis dataKey="year" stroke="#5c6272" fontSize={11}/>
              <YAxis stroke="#5c6272" fontSize={11} label={{value:'₹ L', angle:-90, position:'insideLeft', fontSize:11}}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}} formatter={(v) => `₹${v} L`}/>
              <Bar dataKey="premium" fill="#0d3b66" name="Premium ₹L"/>
            </BarChart>
          </ResponsiveContainer>
          <div style={{marginTop:8, fontSize:11, color:'var(--c-text-dim)'}}>
            Y1 reduced (₹80 L) — only mandatory; Y3 full schedule (₹113 L); Y5 (₹132 L) includes D&O activated post-Series A.
          </div>
        </div>
      </div>

      <div className="section-block">
        <h2>Full policy schedule — {insuranceTotals.totalLines} lines</h2>
        <div className="card">
          <SortableTable
            columns={[
              { key:'line', label:'Policy line', render:(v) => <strong>{v}</strong> },
              { key:'sumInsuredINRcr', label:'SI ₹cr', numeric:true, format:(v) => `₹${v.toFixed(2)}` },
              { key:'annualPremiumINRl', label:'Premium ₹L', numeric:true, format:(v) => `₹${v.toFixed(1)}` },
              { key:'deductibleINRl', label:'Deductible ₹L', numeric:true, format:(v) => `₹${v.toFixed(2)}` },
              { key:'insurer', label:'Insurer', style:{fontSize:11} },
              { key:'notes', label:'Notes', style:{fontSize:11} },
            ]}
            rows={insurancePolicies}
            defaultSort="sumInsuredINRcr"
            defaultDir="desc"
            filterable
          />
        </div>
      </div>

      <div className="section-block">
        <h2>Per-policy detail</h2>
        {insurancePolicies.map((p, i) => (
          <div key={p.id} className="card" style={{marginBottom:10, borderLeft:'3px solid var(--c-accent)'}}>
            <div style={{display:'flex',justifyContent:'space-between',gap:10,flexWrap:'wrap',marginBottom:6}}>
              <h3 style={{fontFamily:'Georgia,serif',fontSize:14,fontWeight:600,color:'var(--c-text)'}}>{p.line}</h3>
              <span className="pill pill-info">SI ₹{p.sumInsuredINRcr.toFixed(2)} cr · Prem ₹{p.annualPremiumINRl.toFixed(1)} L</span>
            </div>
            <div style={{fontSize:12, color:'var(--c-text-dim)', marginBottom:6}}>
              <strong>Insurer:</strong> {p.insurer} · <strong>Deductible:</strong> ₹{p.deductibleINRl} L
            </div>
            <div style={{fontSize:12, marginBottom:6}}>
              <strong>Risks covered:</strong> {p.risksCovered.join(' · ')}
            </div>
            <div style={{fontSize:12, color:'var(--c-text-dim)', fontStyle:'italic'}}>
              {p.notes}
            </div>
          </div>
        ))}
      </div>

      <div className="section-block">
        <h2>Claims experience benchmarks (industry data)</h2>
        <div className="card">
          <SortableTable
            columns={[
              { key:'event', label:'Event', render:(v) => <strong>{v}</strong> },
              { key:'benchmark', label:'Frequency / Severity', style:{fontSize:12} },
              { key:'payoutRangeINRcr', label:'Payout range', style:{fontSize:12} },
              { key:'sourceNote', label:'Source', style:{fontSize:11, color:'var(--c-text-dim)'} },
            ]}
            rows={claimsBenchmarks}
          />
        </div>
      </div>

      <div className="section-block">
        <h2>Broker strategy + cost optimisation</h2>
        <div className="card">
          <p style={{fontSize:13.5, marginBottom:10}}>
            <strong>Primary broker: </strong>{brokerStrategy.primaryBroker}
          </p>
          <p style={{fontSize:12.5, marginBottom:10}}>
            <strong>Panel brokers: </strong>{brokerStrategy.panelBrokers.join(' · ')}
          </p>
          <p style={{fontSize:12.5, marginBottom:10}}>
            <strong>Broker fees: </strong>{brokerStrategy.brokerFees}
          </p>
          <p style={{fontSize:12.5, marginBottom:10}}>
            <strong>RFP frequency: </strong>{brokerStrategy.rfpFreq}
          </p>
          <div className="callout">
            <strong>Cost optimisation: </strong>{brokerStrategy.policyConsolidation}
          </div>
        </div>
      </div>
    </>
  );
}
