import React, { useState, useMemo } from 'react';
import { hotRoutes } from '../../../data/v2SimRoutes';
import { simulateYear, aggregateAnnual } from '../../../data/v2SimEngine';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#0d3b66','#a8322d','#c5a565','#2d6a4f','#7a5b8c','#b8860b','#5fb3e3','#92c7b6'];

export default function PortfolioSimV2() {
  const [year, setYear] = useState(2024);
  // Default 5-route portfolio (live + MSC tuna + octopus + pomfret + commodity vannamei)
  const [allocations, setAllocations] = useState({
    r4: 20,   // live lobster HK
    r6: 25,   // octopus Spain
    r7: 25,   // MSC tuna Japan
    r3: 15,   // pomfret GCC
    r1: 15,   // vannamei USA
  });

  const total = Object.values(allocations).reduce((s, v) => s + v, 0);

  const portfolio = useMemo(() => {
    const results = Object.entries(allocations).map(([rid, alloc]) => {
      const route = hotRoutes.find(r => r.id === rid);
      if (!route || alloc === 0) return null;
      // Scale route's targetMT proportionally to allocation
      const scaledRoute = { ...route, targetMT: route.targetMT * (alloc / 100) * 5 };  // multiplier for portfolio scale
      const yr = simulateYear(scaledRoute, year);
      const ag = aggregateAnnual(yr);
      return { route: route.name, rid, alloc, ...ag, color: COLORS[Object.keys(allocations).indexOf(rid) % COLORS.length] };
    }).filter(Boolean);

    const totalRev = results.reduce((s, r) => s + r.totalRevenueINR, 0);
    const totalMargin = results.reduce((s, r) => s + r.totalMarginINR, 0);
    const totalMT = results.reduce((s, r) => s + r.totalMT, 0);
    const blendedMargin = totalRev > 0 ? (totalMargin / totalRev * 100) : 0;
    const blendedSurvivability = results.reduce((s, r) => s + r.avgSurvivability * (r.totalRevenueINR / totalRev || 0), 0);
    return { results, totalRev, totalMargin, totalMT, blendedMargin, blendedSurvivability };
  }, [allocations, year]);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · L5 Sim Portfolio (sim v4)</div>
        <h1 className="sec-title">Multi-Route Portfolio Simulator</h1>
        <p className="sec-sub">
          Real operators run 5+ routes in parallel. Allocate % capacity across routes; engine computes blended portfolio
          margin, revenue, MT, and survivability. Try shifting allocation from commodity vannamei to live + MSC and watch
          blended margin lift from ~10% to 20%+.
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Portfolio revenue {year}</h3><div className="big">₹{(portfolio.totalRev/10000000).toFixed(2)} cr</div></div>
        <div className="card"><h3>Portfolio margin</h3><div className="big" style={{color: portfolio.totalMargin > 0 ? 'var(--c-good)' : 'var(--c-bad)'}}>₹{(portfolio.totalMargin/10000000).toFixed(2)} cr</div></div>
        <div className="card"><h3>Blended GM%</h3><div className="big" style={{color: portfolio.blendedMargin > 15 ? 'var(--c-good)' : portfolio.blendedMargin > 5 ? 'var(--c-warn)' : 'var(--c-bad)'}}>{portfolio.blendedMargin.toFixed(1)}%</div></div>
        <div className="card"><h3>Survivability</h3><div className="big" style={{color: portfolio.blendedSurvivability > 0.85 ? 'var(--c-good)' : 'var(--c-warn)'}}>{(portfolio.blendedSurvivability*100).toFixed(0)}%</div></div>
      </div>

      <div className="section-block grid grid-2">
        <div className="card">
          <h3>Allocation sliders ({total}% total — keep close to 100%)</h3>
          <div style={{marginBottom:12}}>
            <label style={{fontSize:12, color:'var(--c-text-dim)'}}>Year</label>
            <input type="range" min="2018" max="2026" value={year} onChange={e => setYear(parseInt(e.target.value))} style={{width:'100%'}}/>
            <div style={{fontSize:13, fontWeight:600}}>{year}</div>
          </div>
          {Object.keys(allocations).map(rid => {
            const route = hotRoutes.find(r => r.id === rid);
            return (
              <div key={rid} style={{marginBottom:10}}>
                <div style={{display:'flex',justifyContent:'space-between',marginBottom:4}}>
                  <span style={{fontSize:11.5}}>{route.name.slice(0,38)}</span>
                  <span style={{fontSize:12, fontWeight:600, color:'var(--c-accent)'}}>{allocations[rid]}%</span>
                </div>
                <input type="range" min="0" max="100" value={allocations[rid]}
                  onChange={e => setAllocations({...allocations, [rid]: parseInt(e.target.value)})}
                  style={{width:'100%', accentColor: 'var(--c-accent)'}}/>
              </div>
            );
          })}
          <div style={{marginTop:10, fontSize:11, color: total > 105 || total < 95 ? 'var(--c-bad)' : 'var(--c-good)'}}>
            Total: {total}% {total !== 100 && `(adjust to 100%)`}
          </div>
        </div>

        <div className="card">
          <h3>Margin contribution by route</h3>
          <ResponsiveContainer width="100%" height={290}>
            <BarChart data={portfolio.results.map(r => ({ name: r.route.slice(0, 28), Margin: Math.round(r.totalMarginINR/100000), Revenue: Math.round(r.totalRevenueINR/100000) }))} margin={{top:10,right:10,left:0,bottom:30}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis dataKey="name" stroke="#5c6272" fontSize={9} angle={-22} textAnchor="end" height={60}/>
              <YAxis stroke="#5c6272" fontSize={11}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Legend wrapperStyle={{fontSize:11}}/>
              <Bar dataKey="Revenue" fill="#0d3b66"/>
              <Bar dataKey="Margin" fill="#2d6a4f"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="section-block grid grid-2">
        <div className="card">
          <h3>Revenue mix (allocation × outcome)</h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={portfolio.results.map(r => ({ name: r.route.slice(0,24), value: r.totalRevenueINR }))}
                outerRadius={95} label={({name,percent}) => `${name} ${(percent*100).toFixed(0)}%`} labelLine={{stroke:'#5c6272'}} fontSize={10}>
                {portfolio.results.map((r,i) => <Cell key={i} fill={r.color}/>)}
              </Pie>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}} formatter={(v) => [`₹${(v/10000000).toFixed(2)} cr`, 'Revenue']}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <h3>Per-route detail</h3>
          <table className="tbl">
            <thead><tr><th>Route</th><th className="num">Alloc%</th><th className="num">Rev ₹L</th><th className="num">Margin ₹L</th><th className="num">GM%</th><th className="num">Surv%</th></tr></thead>
            <tbody>
              {portfolio.results.map((r,i) => (
                <tr key={i}>
                  <td style={{fontSize:11}}><strong>{r.route.slice(0,24)}</strong></td>
                  <td className="num">{r.alloc}%</td>
                  <td className="num">{Math.round(r.totalRevenueINR/100000)}</td>
                  <td className="num" style={{color: r.totalMarginINR > 0 ? 'var(--c-good)' : 'var(--c-bad)'}}>{Math.round(r.totalMarginINR/100000)}</td>
                  <td className="num">{r.avgMarginPct}%</td>
                  <td className="num">{Math.round(r.avgSurvivability*100)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="callout" style={{marginTop:14}}>
        <strong>Portfolio insight:</strong> A diversified 5-route portfolio trades peak margin for stability.
        High-margin routes (live lobster, MSC tuna) carry the upside; commodity routes (vannamei to USA/China) provide
        cash-flow ballast and capacity utilization. Survivability of the blended portfolio is higher than any single route
        because shocks (cyclone, tariff, mortality) typically hit one or two lanes — not all five.
      </div>
    </>
  );
}
