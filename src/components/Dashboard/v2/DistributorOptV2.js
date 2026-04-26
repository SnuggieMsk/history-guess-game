import React from 'react';
import { distributorTypes, optimalMixByYear, blendedMarginByMix, distributorChurnRisk } from '../../../data/v2DistributorEcon';
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function DistributorOptV2() {
  const mixData = Object.entries(optimalMixByYear).map(([yr, mix]) => ({
    year: yr,
    Broker: mix.broker, Wholesale: mix.wholesale, Ethnic: mix.ethnic,
    HoReCa: mix.horeca, PrivateLabel: mix.privateLabel, Foodservice: mix.foodservice,
    BlendedMargin: blendedMarginByMix[yr],
  }));

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · L6 Distributor Mix Optimizer</div>
        <h1 className="sec-title">Channel Mix Evolution Y1 → Y5</h1>
        <p className="sec-sub">
          {distributorTypes.length} distributor types with margin/risk/payment-terms/onboarding-time profiles.
          Recommended optimal mix by year shifts from broker-heavy (Y1, fast entry) to private-label + HoReCa (Y5, premium).
          Blended margin lifts from {blendedMarginByMix.Y1}% (Y1) to {blendedMarginByMix.Y5}% (Y5).
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Distributor types</h3><div className="big">{distributorTypes.length}</div></div>
        <div className="card"><h3>Y1 blended margin</h3><div className="big">{blendedMarginByMix.Y1}%</div></div>
        <div className="card"><h3>Y3 blended margin</h3><div className="big">{blendedMarginByMix.Y3}%</div></div>
        <div className="card"><h3>Y5 blended margin</h3><div className="big" style={{color:'var(--c-good)'}}>{blendedMarginByMix.Y5}%</div></div>
      </div>

      <div className="section-block grid grid-2">
        <div className="card">
          <h3>Channel mix evolution Y1-Y5</h3>
          <ResponsiveContainer width="100%" height={290}>
            <BarChart data={mixData} margin={{top:10,right:10,left:0,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis dataKey="year" stroke="#5c6272" fontSize={11}/>
              <YAxis stroke="#5c6272" fontSize={11}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Legend wrapperStyle={{fontSize:11}}/>
              <Bar dataKey="Broker" stackId="a" fill="#0d3b66"/>
              <Bar dataKey="Wholesale" stackId="a" fill="#5fb3e3"/>
              <Bar dataKey="Ethnic" stackId="a" fill="#c5a565"/>
              <Bar dataKey="HoReCa" stackId="a" fill="#2d6a4f"/>
              <Bar dataKey="PrivateLabel" stackId="a" fill="#a8322d"/>
              <Bar dataKey="Foodservice" stackId="a" fill="#7a5b8c"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <h3>Blended margin trajectory</h3>
          <ResponsiveContainer width="100%" height={290}>
            <LineChart data={mixData} margin={{top:10,right:10,left:0,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis dataKey="year" stroke="#5c6272" fontSize={11}/>
              <YAxis stroke="#5c6272" fontSize={11}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Line dataKey="BlendedMargin" name="Blended GM%" stroke="#2d6a4f" strokeWidth={3} dot={{r:6}}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="section-block">
        <h2>Distributor type deep-dive</h2>
        {distributorTypes.map((d,i) => (
          <div key={i} className="card" style={{marginBottom:12, borderLeft:'3px solid var(--c-accent)'}}>
            <div style={{display:'flex',justifyContent:'space-between',gap:10,flexWrap:'wrap',marginBottom:10}}>
              <h3 style={{fontFamily:'Georgia,serif',fontSize:16,fontWeight:600}}>{d.name}</h3>
              <div style={{display:'flex',gap:6}}>
                <span className="pill pill-good">Margin {d.margin}</span>
                <span className="pill pill-warn">Risk {d.riskAbsorbed}</span>
              </div>
            </div>
            <div className="grid grid-3" style={{fontSize:12}}>
              <div><strong>Payment:</strong> {d.paymentTerms}</div>
              <div><strong>Onboarding:</strong> {d.onboardingTime}</div>
              <div><strong>Min volume:</strong> {d.minVolume}</div>
            </div>
            <div className="grid grid-2" style={{marginTop:10}}>
              <div>
                <strong style={{fontSize:11,color:'var(--c-good)',textTransform:'uppercase'}}>Pros</strong>
                <ul className="bullets" style={{fontSize:12}}>{d.pros.map((p,k) => <li key={k}>{p}</li>)}</ul>
              </div>
              <div>
                <strong style={{fontSize:11,color:'var(--c-bad)',textTransform:'uppercase'}}>Cons</strong>
                <ul className="bullets" style={{fontSize:12}}>{d.cons.map((p,k) => <li key={k}>{p}</li>)}</ul>
              </div>
            </div>
            <div style={{marginTop:10,fontSize:12}}>
              <strong>Examples:</strong> {d.examples}<br/>
              <strong style={{color:'var(--c-accent)'}}>Best for:</strong> {d.bestFor}
            </div>
          </div>
        ))}
      </div>

      <div className="section-block">
        <h2>Distributor churn risk</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Distributor type</th><th className="num">Annual churn %</th><th>Recovery time</th></tr></thead>
            <tbody>
              {distributorChurnRisk.map((c,i) => (
                <tr key={i}>
                  <td><strong>{c.type}</strong></td>
                  <td className="num" style={{color:c.annualChurnPct > 20 ? 'var(--c-bad)' : 'var(--c-warn)'}}>{c.annualChurnPct}%</td>
                  <td style={{fontSize:12}}>{c.recovery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="callout">
        <strong>Strategic guidance:</strong> Y1 prioritise broker + wholesale for fast entry + cash flow.
        Y2-Y3 begin private-label trials (12-24 month onboarding) and HoReCa for live cargo.
        Y4-Y5 private-label + HoReCa become 46% of revenue at premium margins.
        Mix discipline drives blended GM from 9.5% to 19.8% over 5 years.
      </div>
    </>
  );
}
