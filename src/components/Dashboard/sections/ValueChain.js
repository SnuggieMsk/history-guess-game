import React from 'react';
import { valueChainStages, vannameiCostStack, yieldRecoveries } from '../../../data/valueChain';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell,
} from 'recharts';

const STAGE_COLORS = ['#0d3b66','#5fb3e3','#7fbcd0','#92c7b6','#a8d49b','#cfd76f','#b8860b','#c5a565','#a8322d','#7a5b8c'];

export default function ValueChain() {
  const totalCostPerKg = vannameiCostStack.reduce((s,r) => s + r.inrPerKg, 0);
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">Operations</div>
        <h1 className="sec-title">End-to-End Value Chain</h1>
        <p className="sec-sub">
          From Konkan boat / AP pond to FOB at JNPT or air-cargo at NMIA — ten stages,
          each with its cost economics, lead time, moat lever and risk register.
        </p>
      </div>

      <div className="section-block">
        <h2>Stage-by-stage flow</h2>
        <div className="vc-flow">
          {valueChainStages.map((s, i) => (
            <div key={s.id} className="vc-stage">
              <div className="vc-stage-num" style={{background: STAGE_COLORS[i]}}>{i+1}</div>
              <div className="vc-stage-body">
                <h4>{s.name}</h4>
                <p className="vc-stage-where">{s.location}</p>
                <p className="vc-stage-desc">{s.description}</p>
                <div className="vc-stage-meta">
                  <span className="pill pill-info">₹{s.costINRPerKg}/kg</span>
                  <span className="pill pill-mute">range ₹{s.costRangeINR[0]}-{s.costRangeINR[1]}</span>
                  {s.valueAdded > 0 && <span className="pill pill-good">+₹{s.valueAdded}/kg value</span>}
                  <span className="pill pill-mute">{typeof s.leadTimeHrs === 'number' ? `${s.leadTimeHrs} hrs` : s.leadTimeHrs}</span>
                </div>
                <div className="vc-stage-cols">
                  <div>
                    <div className="vc-mini-title">Moat levers</div>
                    <ul className="bullets">{s.moatLevers.map((m,k) => <li key={k}>{m}</li>)}</ul>
                  </div>
                  <div>
                    <div className="vc-mini-title">Risks</div>
                    <ul className="bullets">{s.risks.map((m,k) => <li key={k}>{m}</li>)}</ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-block grid grid-2">
        <div className="card">
          <h3>Cost stack — vannamei HLSO 31/40 (₹/kg, FOB-ready)</h3>
          <ResponsiveContainer width="100%" height={310}>
            <BarChart data={vannameiCostStack} layout="vertical" margin={{top:10, right:30, left:10, bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis type="number" stroke="#5c6272" fontSize={11}/>
              <YAxis type="category" dataKey="stage" stroke="#5c6272" fontSize={11} width={170}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Bar dataKey="inrPerKg" name="₹/kg">
                {vannameiCostStack.map((_, i) => <Cell key={i} fill={STAGE_COLORS[i % STAGE_COLORS.length]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="callout">
            Total landed FOB cost: <strong>₹{totalCostPerKg}/kg</strong> (~$5.97/kg).
            FOB price band $6.20-7.20 = ₹540-625/kg. Blended margin <strong>~₹60/kg</strong>,
            ~<strong>11.5%</strong> on a conservative basis. Value-added SKUs lift this to 18-24%.
          </div>
        </div>

        <div className="card">
          <h3>Yield recoveries (output / input)</h3>
          <div className="tbl-wrap">
            <table className="tbl">
              <thead><tr><th>Conversion</th><th className="num">Recovery</th></tr></thead>
              <tbody>
                {Object.entries(yieldRecoveries).map(([k,v]) => (
                  <tr key={k}>
                    <td>{k.replace(/([A-Z])/g, ' $1').replace(/^\w/, c => c.toUpperCase())}</td>
                    <td className="num">{(v*100).toFixed(0)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{fontSize:12, color:'var(--c-text-dim)', marginTop:10}}>
            Yield discipline is the difference between 11% and 16% gross margin.
            Every 1 ppt of yield improvement on vannamei = ~₹3.8/kg saved.
          </p>
        </div>
      </div>
    </>
  );
}
