import React from 'react';
import { capex, capexSummary, productionPlan, pnl, workingCapital, cashFlow, returns, sensitivityY3 } from '../../../data/financials';
import {
  ResponsiveContainer, BarChart, Bar, LineChart, Line, ComposedChart, Area,
  XAxis, YAxis, Tooltip, CartesianGrid, Legend,
} from 'recharts';

export default function FinancialModel() {
  const capexByCategory = Object.values(capex.reduce((acc, c) => {
    acc[c.category] = acc[c.category] || { category: c.category, gross: 0, sub: 0 };
    acc[c.category].gross += c.amountLakh; acc[c.category].sub += c.subsidy;
    return acc;
  }, {})).map(c => ({ ...c, net: c.gross - c.sub }));

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">5-Year Model</div>
        <h1 className="sec-title">Financial Projections — Capex, P&L, WC, Cash Flow, Returns</h1>
        <p className="sec-sub">
          ₹{(capexSummary.grossCapex/100).toFixed(1)} cr gross capex,
          ₹{(capexSummary.subsidy/100).toFixed(1)} cr subsidy capture,
          ₹{(capexSummary.netCapex/100).toFixed(1)} cr net.
          ₹10 cr promoter equity + ₹14 cr term loan + ₹8 cr CC limit.
          Project IRR <strong style={{color:'var(--c-good)'}}>{returns.projectIRR}%</strong>,
          equity IRR <strong style={{color:'var(--c-good)'}}>{returns.equityIRR}%</strong>.
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Gross Capex</h3><div className="big">₹{(capexSummary.grossCapex/100).toFixed(1)} cr</div></div>
        <div className="card"><h3>Subsidy capture</h3><div className="big" style={{color:'var(--c-good)'}}>₹{(capexSummary.subsidy/100).toFixed(1)} cr</div><div className="sub">{(capexSummary.subsidy/capexSummary.grossCapex*100).toFixed(0)}% of gross</div></div>
        <div className="card"><h3>Net Capex</h3><div className="big">₹{(capexSummary.netCapex/100).toFixed(1)} cr</div></div>
        <div className="card"><h3>Debt-equity</h3><div className="big">1.4×</div><div className="sub">Promoter ₹10 cr · Loan ₹14 cr</div></div>
      </div>

      <div className="section-block">
        <h2>Capex breakdown by category</h2>
        <div className="grid grid-2">
          <div className="card">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={capexByCategory} margin={{top:10,right:10,left:0,bottom:30}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
                <XAxis dataKey="category" stroke="#5c6272" fontSize={10} angle={-15} textAnchor="end" height={50}/>
                <YAxis stroke="#5c6272" fontSize={11}/>
                <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
                <Legend wrapperStyle={{fontSize:11}}/>
                <Bar dataKey="gross" name="Gross (₹L)" fill="#0d3b66"/>
                <Bar dataKey="sub"   name="Subsidy (₹L)" fill="#2d6a4f"/>
                <Bar dataKey="net"   name="Net (₹L)"   fill="#c5a565"/>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="card">
            <h3>Top capex line items</h3>
            <div className="tbl-wrap" style={{maxHeight:300,overflowY:'auto'}}>
              <table className="tbl">
                <thead><tr><th>Item</th><th className="num">Gross</th><th className="num">Sub</th></tr></thead>
                <tbody>
                  {[...capex].sort((a,b)=>b.amountLakh-a.amountLakh).map((c,i) => (
                    <tr key={i}>
                      <td style={{fontSize:12}}>{c.item}</td>
                      <td className="num">{c.amountLakh}</td>
                      <td className="num" style={{color:'var(--c-good)'}}>{c.subsidy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="section-block">
        <h2>P&L (₹ lakh)</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Year</th><th className="num">Revenue</th><th className="num">COGS</th><th className="num">Gross</th><th className="num">Opex</th><th className="num">EBITDA</th><th className="num">EBITDA %</th><th className="num">Dep</th><th className="num">Int</th><th className="num">PBT</th><th className="num">Tax</th><th className="num">PAT</th><th className="num">PAT %</th></tr></thead>
            <tbody>
              {pnl.map(p => (
                <tr key={p.year}>
                  <td><strong>{p.year}</strong></td>
                  <td className="num">{p.revenue.toLocaleString('en-IN')}</td>
                  <td className="num">{p.cogs.toLocaleString('en-IN')}</td>
                  <td className="num">{p.gross.toLocaleString('en-IN')}</td>
                  <td className="num">{p.opex}</td>
                  <td className="num"><strong>{p.ebitda.toLocaleString('en-IN')}</strong></td>
                  <td className="num"><span className="pill pill-good">{p.ebitdaPct}%</span></td>
                  <td className="num">{p.deprec}</td>
                  <td className="num">{p.interest}</td>
                  <td className="num">{p.pbt.toLocaleString('en-IN')}</td>
                  <td className="num">{p.tax}</td>
                  <td className="num"><strong style={{color:'var(--c-good)'}}>{p.pat.toLocaleString('en-IN')}</strong></td>
                  <td className="num">{p.patPct}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block grid grid-2">
        <div className="card">
          <h3>Revenue + EBITDA trajectory</h3>
          <ResponsiveContainer width="100%" height={290}>
            <ComposedChart data={pnl} margin={{top:10,right:10,left:0,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis dataKey="year" stroke="#5c6272" fontSize={11}/>
              <YAxis stroke="#5c6272" fontSize={11}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Legend wrapperStyle={{fontSize:11}}/>
              <Bar dataKey="revenue" name="Revenue (₹L)" fill="#0d3b66"/>
              <Line dataKey="ebitda" name="EBITDA (₹L)" stroke="#2d6a4f" strokeWidth={3} dot={{r:5}}/>
              <Line dataKey="pat" name="PAT (₹L)" stroke="#c5a565" strokeWidth={3} dot={{r:5}}/>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <h3>Cash flow</h3>
          <ResponsiveContainer width="100%" height={290}>
            <BarChart data={cashFlow} margin={{top:10,right:10,left:0,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis dataKey="year" stroke="#5c6272" fontSize={11}/>
              <YAxis stroke="#5c6272" fontSize={11}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Legend wrapperStyle={{fontSize:11}}/>
              <Bar dataKey="operatingCF" name="Operating CF" fill="#0d3b66"/>
              <Bar dataKey="investingCF" name="Investing CF" fill="#a8322d"/>
              <Bar dataKey="financingCF" name="Financing CF" fill="#c5a565"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="section-block grid grid-2">
        <div className="card">
          <h3>Working capital (₹ lakh)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={workingCapital} margin={{top:10,right:10,left:0,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis dataKey="year" stroke="#5c6272" fontSize={11}/>
              <YAxis stroke="#5c6272" fontSize={11}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Legend wrapperStyle={{fontSize:11}}/>
              <Bar dataKey="inventory" name="Inventory (12d)" stackId="a" fill="#0d3b66"/>
              <Bar dataKey="receivables" name="Receivables (35d)" stackId="a" fill="#c5a565"/>
              <Bar dataKey="payables" name="Payables (-18d)" stackId="b" fill="#a8322d"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <h3>Returns summary</h3>
          <table className="tbl">
            <tbody>
              <tr><td>Project IRR</td><td className="num"><strong style={{color:'var(--c-good)'}}>{returns.projectIRR}%</strong></td></tr>
              <tr><td>Equity IRR</td><td className="num"><strong style={{color:'var(--c-good)'}}>{returns.equityIRR}%</strong></td></tr>
              <tr><td>NPV @ 12%</td><td className="num">₹{(returns.npv12pct/100).toFixed(1)} cr</td></tr>
              <tr><td>Payback</td><td className="num">{returns.paybackYears} yrs</td></tr>
              <tr><td>Break-even utilisation</td><td className="num">{returns.breakEvenUtilisation}%</td></tr>
              <tr><td>FX break-even</td><td className="num">₹{returns.fxBreakEvenINRperUSD}/USD</td></tr>
            </tbody>
          </table>
          <div className="callout" style={{marginTop:14}}>
            <strong>What drives returns:</strong> Solar PV cost floor, value-added mix shift Y2 onwards,
            owned reefer fleet locking AP-Purandar lane, and Tier-1 gap species (octopus, lobster, tuna)
            kicking in by Y3 to lift blended GM.
          </div>
        </div>
      </div>

      <div className="section-block">
        <h2>Sensitivity — Y3 PAT (₹ lakh)</h2>
        <p className="sec-sub" style={{marginBottom:10}}>Rows = ASP shock vs base · Columns = raw-cost shock vs base.</p>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>ASP \\ Raw</th><th className="num">Raw +10%</th><th className="num">Raw +5%</th><th className="num">Base</th><th className="num">Raw -5%</th><th className="num">Raw -10%</th></tr></thead>
            <tbody>
              {sensitivityY3.map((r,i) => (
                <tr key={i}>
                  <td><strong>ASP {r.aspShock}</strong></td>
                  <td className="num" style={{color: r['+10%']>0?'var(--c-good)':'var(--c-bad)'}}>{r['+10%']}</td>
                  <td className="num" style={{color: r['+5%']>0?'var(--c-good)':'var(--c-bad)'}}>{r['+5%']}</td>
                  <td className="num" style={{color: r['base']>0?'var(--c-good)':'var(--c-bad)',fontWeight:700}}>{r['base']}</td>
                  <td className="num" style={{color: r['-5%']>0?'var(--c-good)':'var(--c-bad)'}}>{r['-5%']}</td>
                  <td className="num" style={{color: r['-10%']>0?'var(--c-good)':'var(--c-bad)'}}>{r['-10%']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block">
        <h2>Production ramp</h2>
        <div className="card">
          <ResponsiveContainer width="100%" height={250}>
            <ComposedChart data={productionPlan} margin={{top:10,right:10,left:0,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis dataKey="year" stroke="#5c6272" fontSize={11}/>
              <YAxis yAxisId="l" stroke="#5c6272" fontSize={11}/>
              <YAxis yAxisId="r" orientation="right" stroke="#5c6272" fontSize={11}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Legend wrapperStyle={{fontSize:11}}/>
              <Bar yAxisId="l" dataKey="throughputMT" name="Throughput (MT)" fill="#0d3b66"/>
              <Line yAxisId="r" dataKey="utilisation" name="Utilisation %" stroke="#c5a565" strokeWidth={3}/>
              <Line yAxisId="r" dataKey="valueAddShare" name="Value-add %" stroke="#2d6a4f" strokeWidth={3}/>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
