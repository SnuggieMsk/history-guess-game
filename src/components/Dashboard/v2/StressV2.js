import React from 'react';
import { capexRevised, capexTotals, fundingPlan, fundingTotal, scenariosY5, pnlBase, dscrTable, combinedShock, returnsSummary, monitorKPIs } from '../../../data/v2Stress';
import { ResponsiveContainer, BarChart, Bar, ComposedChart, Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

export default function StressV2() {
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Stress-Tested Financials</div>
        <h1 className="sec-title">Numbers That Survive an Angry Investor</h1>
        <p className="sec-sub">
          Revised capex ₹{(capexTotals.grossL / 100).toFixed(1)} cr gross ·
          ₹{(capexTotals.netL / 100).toFixed(1)} cr net after subsidy.
          Funding ₹{fundingTotal} cr total (promoter ₹14 cr, loan ₹16 cr, WC ₹10 cr, subsidy ₹5 cr tranche-timed).
          Y5 revenue bear/base/bull = ₹175/243/315 cr · Project IRR 10-28% with 17-19% central.
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Gross capex</h3><div className="big">₹{(capexTotals.grossL / 100).toFixed(1)} cr</div></div>
        <div className="card"><h3>Subsidy capture</h3><div className="big" style={{ color: 'var(--c-good)' }}>₹{(capexTotals.subL / 100).toFixed(1)} cr</div></div>
        <div className="card"><h3>Net capex</h3><div className="big">₹{(capexTotals.netL / 100).toFixed(1)} cr</div></div>
        <div className="card"><h3>Project cost</h3><div className="big">₹{fundingTotal} cr</div></div>
      </div>

      <div className="section-block grid grid-3">
        {Object.values(scenariosY5).map(s => (
          <div key={s.label} className="card" style={{ borderTop: `4px solid ${s.color}` }}>
            <h3 style={{ color: s.color, fontSize: 16, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>{s.label}</h3>
            <div style={{ fontFamily: 'Georgia,serif', fontSize: 30, fontWeight: 600, marginTop: 8 }}>₹{s.revenueINRcr} cr</div>
            <div className="sub">Y5 revenue · {s.ebitdaPct}% EBITDA</div>
            <div style={{ marginTop: 14, paddingTop: 10, borderTop: '1px solid var(--c-border)' }}>
              <strong style={{ fontSize: 11, color: s.color, textTransform: 'uppercase', letterSpacing: 1 }}>Assumptions</strong>
              <ul className="bullets" style={{ marginTop: 4, fontSize: 12 }}>
                {s.assumptions.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="section-block">
        <h2>Revised capex breakdown (₹ lakh)</h2>
        <div className="tbl-wrap" style={{ maxHeight: 400, overflowY: 'auto' }}>
          <table className="tbl">
            <thead><tr><th>Category</th><th>Item</th><th className="num">Gross</th><th className="num">Subsidy</th><th className="num">Net</th></tr></thead>
            <tbody>
              {capexRevised.map((r, i) => (
                <tr key={i}>
                  <td style={{ fontSize: 11, color: 'var(--c-text-dim)', textTransform: 'uppercase' }}>{r.cat}</td>
                  <td>{r.item}</td>
                  <td className="num">{r.grossL}</td>
                  <td className="num" style={{ color: 'var(--c-good)' }}>{r.subL}</td>
                  <td className="num"><strong>{r.netL}</strong></td>
                </tr>
              ))}
              <tr style={{ fontWeight: 700, background: 'var(--c-surface-2)' }}>
                <td colSpan="2">Total</td>
                <td className="num">{capexTotals.grossL}</td>
                <td className="num" style={{ color: 'var(--c-good)' }}>{capexTotals.subL}</td>
                <td className="num">{capexTotals.netL}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block">
        <h2>Funding plan</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Source</th><th className="num">₹ cr</th></tr></thead>
            <tbody>
              {fundingPlan.map((f, i) => (
                <tr key={i}><td>{f.source}</td><td className="num">{f.amountINRcr}</td></tr>
              ))}
              <tr style={{ fontWeight: 700, background: 'var(--c-surface-2)' }}>
                <td>Total</td>
                <td className="num">{fundingTotal}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block grid grid-2">
        <div className="card">
          <h3>5-year P&L trajectory (base)</h3>
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart data={pnlBase} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8" />
              <XAxis dataKey="year" stroke="#5c6272" fontSize={11} />
              <YAxis stroke="#5c6272" fontSize={11} />
              <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e0d9c8', color: '#1a1f36' }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="revenueL" name="Revenue ₹L" fill="#0d3b66" />
              <Line dataKey="ebitdaL" name="EBITDA ₹L" stroke="#2d6a4f" strokeWidth={3} dot={{ r: 5 }} />
              <Line dataKey="patL" name="PAT ₹L" stroke="#c5a565" strokeWidth={3} dot={{ r: 5 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <h3>DSCR walkthrough</h3>
          <table className="tbl">
            <thead><tr><th>Year</th><th className="num">EBITDA ₹L</th><th className="num">DS ₹L</th><th>DSCR</th></tr></thead>
            <tbody>
              {dscrTable.map((r, i) => (
                <tr key={i}>
                  <td><strong>{r.year}</strong></td>
                  <td className="num">{r.ebitdaL}</td>
                  <td className="num">{r.dsL}</td>
                  <td style={{ color: typeof r.dscr === 'string' && r.dscr.includes('×') ? 'var(--c-good)' : 'var(--c-accent)' }}>{r.dscr}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="callout" style={{ marginTop: 10 }}>
            <strong>Bear Y3 DSCR: </strong>≈ 2.95× (still above 1.5× bank minimum).
            Y2 is the pinch-point year; 24-month moratorium + ₹14 cr promoter equity mitigates.
          </div>
        </div>
      </div>

      <div className="section-block">
        <h2>Combined-shock sensitivity (Y3 PAT)</h2>
        <div className="card">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={combinedShock} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8" />
              <XAxis type="number" stroke="#5c6272" fontSize={11} />
              <YAxis type="category" dataKey="scenario" stroke="#5c6272" fontSize={10} width={220} />
              <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e0d9c8', color: '#1a1f36' }}
                formatter={(v, n, p) => [`₹${v} L · IRR ${p.payload.projectIRR}%`, 'Y3 PAT']} />
              <Bar dataKey="y3PatL" name="Y3 PAT ₹L">
                {combinedShock.map((r, i) => (
                  <Cell key={i} fill={r.y3PatL < 0 ? '#a8322d' : r.y3PatL < 1000 ? '#b8860b' : '#2d6a4f'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="section-block grid grid-3">
        {Object.entries(returnsSummary).map(([k, v]) => (
          <div key={k} className="card" style={{ borderTop: `4px solid ${scenariosY5[k].color}` }}>
            <h3 style={{ color: scenariosY5[k].color, textTransform: 'uppercase' }}>{k}</h3>
            <table className="tbl">
              <tbody>
                <tr><td>Y5 revenue ₹ cr</td><td className="num"><strong>{v.y5rev}</strong></td></tr>
                <tr><td>Y5 EBITDA %</td><td className="num">{v.y5ebitda}%</td></tr>
                <tr><td>Project IRR</td><td className="num">{v.projectIRR}%</td></tr>
                <tr><td>Equity IRR</td><td className="num">{v.equityIRR}%</td></tr>
                <tr><td>Payback (yrs)</td><td className="num">{v.paybackY}</td></tr>
                <tr><td>Y5 EV @ 6× EBITDA</td><td className="num">₹{v.y5EVcr} cr</td></tr>
                <tr><td>Promoter equity IRR</td><td className="num"><strong style={{color: scenariosY5[k].color}}>{v.promoterEquityIRR}</strong></td></tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <div className="section-block">
        <h2>KPI monitoring cadence</h2>
        <div className="grid grid-3">
          {monitorKPIs.map((g, i) => (
            <div key={i} className="card">
              <h3>{g.cadence}</h3>
              <ul className="bullets" style={{ fontSize: 12.5 }}>
                {g.items.map((x, j) => <li key={j}>{x}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
