import React, { useState } from 'react';
import { detailedCapex, yearByYearPnL, balanceSheetEvolution, monthlyCashFlowY1, detailedSensitivityMatrix } from '../../../data/v2DprFinModel';
import { ResponsiveContainer, BarChart, Bar, ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TABS = [
  { id: 'capex', label: 'Capex Detail (33 line items)' },
  { id: 'pnl', label: '5-Yr P&L (21 lines)' },
  { id: 'bs', label: 'Balance Sheet Y1-Y5' },
  { id: 'cf', label: 'Y1 Monthly Cash Flow' },
  { id: 'sens', label: 'Sensitivity Matrix' },
];

export default function DprFinModelV2() {
  const [tab, setTab] = useState('capex');

  // Capex roll-up by category
  const capexByCat = detailedCapex.reduce((acc, c) => {
    acc[c.cat] = (acc[c.cat] || 0) + c.amountL;
    return acc;
  }, {});
  const capexCatChart = Object.entries(capexByCat).map(([cat,v]) => ({ category: cat, amount: v }));
  const totalCapex = detailedCapex.reduce((s, c) => s + c.amountL, 0);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · L8 DPR Financial Model — Line by Line</div>
        <h1 className="sec-title">Investor-Grade Financial Model</h1>
        <p className="sec-sub">
          The complete financial model that goes into DPR Chapter 14. Capex itemized to 33 lines with vendor + source.
          5-yr P&L with 21 line items (revenue → COGS → Opex → EBITDA → Dep → Int → PBT → Tax → PAT).
          Balance sheet Y1-Y5 with D/E evolution. Y1 monthly cash flow. Sensitivity matrix on 8 variables.
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Capex line items</h3><div className="big">{detailedCapex.length}</div></div>
        <div className="card"><h3>Total capex ₹L</h3><div className="big">₹{totalCapex.toLocaleString('en-IN')}</div></div>
        <div className="card"><h3>P&L lines</h3><div className="big">{yearByYearPnL.length}</div></div>
        <div className="card"><h3>Sensitivity vars</h3><div className="big">{detailedSensitivityMatrix.length}</div></div>
      </div>

      <div style={{display:'flex',gap:8,marginTop:18,marginBottom:14,flexWrap:'wrap'}}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            padding:'8px 14px', border:'1px solid var(--c-border)', borderRadius:4,
            cursor:'pointer', fontSize:12, fontWeight:500,
            background: tab === t.id ? 'var(--c-accent)' : 'var(--c-surface)',
            color: tab === t.id ? '#fff' : 'var(--c-text)',
          }}>{t.label}</button>
        ))}
      </div>

      {tab === 'capex' && (
        <>
          <div className="card">
            <h3>Capex by category</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={capexCatChart} margin={{top:10,right:10,left:0,bottom:30}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
                <XAxis dataKey="category" stroke="#5c6272" fontSize={10} angle={-22} textAnchor="end" height={60}/>
                <YAxis stroke="#5c6272" fontSize={11}/>
                <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
                <Bar dataKey="amount" name="₹ Lakh" fill="#0d3b66"/>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="tbl-wrap" style={{marginTop:14}}>
            <table className="tbl">
              <thead><tr><th>Category</th><th>Item</th><th>Qty</th><th>Rate</th><th className="num">₹L</th><th>Source</th></tr></thead>
              <tbody>
                {detailedCapex.map((c,i) => (
                  <tr key={i}>
                    <td><span className="pill pill-info" style={{fontSize:10}}>{c.cat}</span></td>
                    <td style={{fontSize:11.5}}>{c.item}</td>
                    <td style={{fontSize:11}}>{c.qty}</td>
                    <td style={{fontSize:11}}>{c.rate}</td>
                    <td className="num"><strong>{c.amountL}</strong></td>
                    <td style={{fontSize:11,color:'var(--c-text-dim)'}}>{c.source}</td>
                  </tr>
                ))}
                <tr style={{background:'var(--c-surface-2)',fontWeight:700}}>
                  <td colSpan="4">Total Capex</td>
                  <td className="num">{totalCapex.toLocaleString('en-IN')}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}

      {tab === 'pnl' && (
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Line item</th><th className="num">Y1</th><th className="num">Y2</th><th className="num">Y3</th><th className="num">Y4</th><th className="num">Y5</th></tr></thead>
            <tbody>
              {yearByYearPnL.map((p,i) => (
                <tr key={i} style={
                  p.line.includes('EBITDA') || p.line.includes('PAT') ? {fontWeight:700, background:'var(--c-surface-2)'} :
                  p.line.includes('Margin') || p.line.includes('%') ? {color:'var(--c-accent)'} : {}
                }>
                  <td><strong>{p.line}</strong></td>
                  <td className="num">{p.Y1}</td>
                  <td className="num">{p.Y2}</td>
                  <td className="num">{p.Y3}</td>
                  <td className="num">{p.Y4}</td>
                  <td className="num">{p.Y5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'bs' && (
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Line item</th><th className="num">Y1</th><th className="num">Y2</th><th className="num">Y3</th><th className="num">Y4</th><th className="num">Y5</th></tr></thead>
            <tbody>
              {balanceSheetEvolution.map((b,i) => (
                <tr key={i} style={
                  b.line.includes('Total') ? {fontWeight:700, background:'var(--c-surface-2)'} :
                  b.line.includes('D/E') ? {color:'var(--c-accent)'} : {}
                }>
                  <td><strong>{b.line}</strong></td>
                  <td className="num">{b.Y1}</td>
                  <td className="num">{b.Y2}</td>
                  <td className="num">{b.Y3}</td>
                  <td className="num">{b.Y4}</td>
                  <td className="num">{b.Y5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'cf' && (
        <>
          <div className="card">
            <h3>Y1 monthly cash flow (₹L)</h3>
            <ResponsiveContainer width="100%" height={290}>
              <ComposedChart data={monthlyCashFlowY1} margin={{top:10,right:10,left:0,bottom:30}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
                <XAxis dataKey="month" stroke="#5c6272" fontSize={10} angle={-22} textAnchor="end" height={60}/>
                <YAxis stroke="#5c6272" fontSize={11}/>
                <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
                <Legend wrapperStyle={{fontSize:11}}/>
                <Bar dataKey="operating" name="Operating CF" fill="#0d3b66"/>
                <Bar dataKey="investing" name="Investing CF" fill="#a8322d"/>
                <Bar dataKey="financing" name="Financing CF" fill="#c5a565"/>
                <Line dataKey="ending" name="Ending cash ₹L" stroke="#2d6a4f" strokeWidth={3} dot={{r:5}}/>
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="tbl-wrap" style={{marginTop:14}}>
            <table className="tbl">
              <thead><tr><th>Month</th><th className="num">Operating CF</th><th className="num">Investing CF</th><th className="num">Financing CF</th><th className="num">Ending Cash</th></tr></thead>
              <tbody>
                {monthlyCashFlowY1.map((m,i) => (
                  <tr key={i}>
                    <td><strong>{m.month}</strong></td>
                    <td className="num" style={{color:m.operating>0?'var(--c-good)':'var(--c-bad)'}}>{m.operating}</td>
                    <td className="num" style={{color:'var(--c-bad)'}}>{m.investing}</td>
                    <td className="num">{m.financing}</td>
                    <td className="num"><strong>{m.ending}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {tab === 'sens' && (
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Variable</th><th>Y3 Rev impact</th><th>Y3 Margin impact</th><th>IRR impact</th></tr></thead>
            <tbody>
              {detailedSensitivityMatrix.map((s,i) => (
                <tr key={i}>
                  <td><strong>{s.variable}</strong></td>
                  <td>{s.Y3RevImpact}</td>
                  <td style={{color:'var(--c-accent)'}}>{s.Y3MarginImpact}</td>
                  <td>{s.IRRImpact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
