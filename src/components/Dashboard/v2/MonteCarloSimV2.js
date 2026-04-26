import React, { useState, useMemo } from 'react';
import { hotRoutes } from '../../../data/v2SimRoutes';
import { runMonteCarlo, buildHistogram } from '../../../data/v2SimMonteCarlo';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, AreaChart, Area } from 'recharts';

export default function MonteCarloSimV2() {
  const [routeId, setRouteId] = useState(hotRoutes[0].id);
  const [year, setYear] = useState(2024);
  const [iterations, setIterations] = useState(1000);
  const [running, setRunning] = useState(false);
  const [results, setResults] = useState(null);

  const route = hotRoutes.find(r => r.id === routeId);

  const runSim = () => {
    setRunning(true);
    setTimeout(() => {
      const r = runMonteCarlo(route, year, iterations);
      setResults(r);
      setRunning(false);
    }, 50);
  };

  const histogram = useMemo(() => {
    if (!results) return [];
    return buildHistogram(results.scenarios.map(s => s.annualMarginPct), 20);
  }, [results]);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · L6 Monte Carlo (sim v5)</div>
        <h1 className="sec-title">Stochastic Risk Simulation — 1000 Scenarios</h1>
        <p className="sec-sub">
          Real risk modeling. Run 1000 simulations of one route × year with random shock combinations
          (FX, freight, FOB, mortality, cyclone, disease, RASFF, tariff). See full distribution of outcomes —
          P5 worst case, P50 median, P95 best case, probability of loss, probability of >15% margin.
        </p>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3>Configure</h3>
          <div style={{marginBottom:10}}>
            <label style={{fontSize:12, color:'var(--c-text-dim)'}}>Route</label>
            <select value={routeId} onChange={e => setRouteId(e.target.value)}
              style={{width:'100%', padding:8, border:'1px solid var(--c-border)', borderRadius:4, fontSize:12, marginTop:4, background:'var(--c-surface)'}}>
              {hotRoutes.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
            </select>
          </div>
          <div style={{marginBottom:10}}>
            <label style={{fontSize:12, color:'var(--c-text-dim)'}}>Year baseline</label>
            <input type="range" min="2018" max="2026" value={year} onChange={e => setYear(parseInt(e.target.value))} style={{width:'100%'}}/>
            <div style={{fontSize:13, fontWeight:600}}>{year}</div>
          </div>
          <div style={{marginBottom:10}}>
            <label style={{fontSize:12, color:'var(--c-text-dim)'}}>Iterations</label>
            <input type="range" min="100" max="2000" step="100" value={iterations} onChange={e => setIterations(parseInt(e.target.value))} style={{width:'100%'}}/>
            <div style={{fontSize:13, fontWeight:600}}>{iterations} runs</div>
          </div>
          <button onClick={runSim} disabled={running} style={{
            width:'100%', padding:12, background:'var(--c-accent)', color:'#fff',
            border:'none', borderRadius:4, fontSize:13, fontWeight:600, cursor:'pointer',
            opacity: running ? 0.5 : 1,
          }}>{running ? 'Running...' : 'Run Monte Carlo'}</button>
        </div>

        {results && (
          <div className="card">
            <h3>Distribution summary</h3>
            <table className="tbl">
              <tbody>
                <tr><td><strong>P5 (worst 5%)</strong></td><td className="num" style={{color:'var(--c-bad)'}}>{results.marginPct.p5.toFixed(1)}%</td></tr>
                <tr><td><strong>P25</strong></td><td className="num" style={{color:'var(--c-bad)'}}>{results.marginPct.p25.toFixed(1)}%</td></tr>
                <tr><td><strong>P50 (median)</strong></td><td className="num" style={{color: results.marginPct.p50 > 10 ? 'var(--c-good)' : 'var(--c-warn)'}}>{results.marginPct.p50.toFixed(1)}%</td></tr>
                <tr><td><strong>P75</strong></td><td className="num" style={{color:'var(--c-good)'}}>{results.marginPct.p75.toFixed(1)}%</td></tr>
                <tr><td><strong>P95 (best 5%)</strong></td><td className="num" style={{color:'var(--c-good)'}}>{results.marginPct.p95.toFixed(1)}%</td></tr>
                <tr><td><strong>Mean</strong></td><td className="num">{results.marginPct.mean.toFixed(1)}%</td></tr>
                <tr><td><strong>Probability of loss</strong></td><td className="num" style={{color:'var(--c-bad)'}}>{(results.marginPct.probLoss*100).toFixed(0)}%</td></tr>
                <tr><td><strong>P(margin &gt; 15%)</strong></td><td className="num" style={{color:'var(--c-good)'}}>{(results.marginPct.probAbove15*100).toFixed(0)}%</td></tr>
                <tr><td><strong>P(margin &gt; 25%)</strong></td><td className="num" style={{color:'var(--c-good)'}}>{(results.marginPct.probAbove25*100).toFixed(0)}%</td></tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {results && (
        <>
          <div className="card" style={{marginTop:14}}>
            <h3>Outcome distribution histogram</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={histogram} margin={{top:10, right:10, left:0, bottom:5}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
                <XAxis dataKey="bin" stroke="#5c6272" fontSize={10} label={{value:'Margin %', position:'insideBottom', offset:-5}}/>
                <YAxis stroke="#5c6272" fontSize={11} label={{value:'Frequency', angle:-90, position:'insideLeft'}}/>
                <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
                <Bar dataKey="count" name="Scenarios">
                  {histogram.map((h,i) => (
                    <Cell key={i} fill={h.binMid < 0 ? '#a8322d' : h.binMid < 10 ? '#b8860b' : h.binMid < 20 ? '#c5a565' : '#2d6a4f'}/>
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="callout" style={{marginTop:14}}>
            <strong>Interpretation:</strong> The {iterations}-iteration sim shows median margin {results.marginPct.p50.toFixed(1)}% for this route + year combo.
            With {(results.marginPct.probLoss*100).toFixed(0)}% probability of negative margin, this route is {results.marginPct.probLoss < 0.10 ? 'low-risk' : results.marginPct.probLoss < 0.25 ? 'medium-risk' : 'high-risk'}.
            P5 = ₹{(results.marginINR.p5/100000).toFixed(1)} L margin in worst 5% of scenarios. P95 = ₹{(results.marginINR.p95/100000).toFixed(1)} L in best 5%.
          </div>
        </>
      )}

      <div className="callout">
        <strong>Why Monte Carlo:</strong> Single-path simulation gives one number (margin = X%). Reality is a distribution.
        A route with mean 18% but P5 of -8% is very different from a route with mean 12% but P5 of +5%.
        This sim reveals which routes are <em>resilient</em> vs which are <em>fragile-but-high-mean</em>.
      </div>
    </>
  );
}
