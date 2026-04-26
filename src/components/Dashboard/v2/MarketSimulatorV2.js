import React, { useState, useMemo } from 'react';
import { hotRoutes, sourcingLocations, products, markets, distributors, transportModes } from '../../../data/v2SimRoutes';
import { simulateYear, simulateMultiYear, aggregateAnnual } from '../../../data/v2SimEngine';
import { ResponsiveContainer, ComposedChart, Line, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart } from 'recharts';
import Disclaimer from './Disclaimer';

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

export default function MarketSimulatorV2() {
  const [routeId, setRouteId] = useState(hotRoutes[0].id);
  const [year, setYear] = useState(2024);
  const [mortMul, setMortMul] = useState(1);
  const [tariffPct, setTariffPct] = useState(null);  // null = use historical
  const [buyMul, setBuyMul] = useState(1);
  const [fobMul, setFobMul] = useState(1);

  const route = hotRoutes.find(r => r.id === routeId);

  const yearData = useMemo(() => {
    const ov = { mortalityMultiplier: mortMul, tariffPct, buyMultiplier: buyMul, fobMultiplier: fobMul };
    return simulateYear(route, year, ov);
  }, [route, year, mortMul, tariffPct, buyMul, fobMul]);
  const annual   = useMemo(() => aggregateAnnual(yearData), [yearData]);
  const multiYear = useMemo(() => {
    const ov = { mortalityMultiplier: mortMul, tariffPct, buyMultiplier: buyMul, fobMultiplier: fobMul };
    return simulateMultiYear(route, 2018, 2025, ov);
  }, [route, mortMul, tariffPct, buyMul, fobMul]);

  // Compare hot routes for the same year + overrides
  const routeComparison = useMemo(() => {
    const ov = { mortalityMultiplier: mortMul, tariffPct, buyMultiplier: buyMul, fobMultiplier: fobMul };
    return hotRoutes.map(r => {
      const yr = simulateYear(r, year, ov);
      const ag = aggregateAnnual(yr);
      return { route: r.name.slice(0, 28), ...ag };
    }).sort((a, b) => b.totalMarginINR - a.totalMarginINR);
  }, [year, mortMul, tariffPct, buyMul, fobMul]);

  const chartYearData = yearData.map((d, i) => ({
    month: MONTHS[i],
    Revenue: Math.round(d.monthlyRevenueINR / 100000),  // ₹ lakh
    Margin: Math.round(d.monthlyMarginINR / 100000),
    GMpct: d.grossMarginPct,
    Survivability: Math.round(d.survivability * 100),
    MT: d.monthlyMT,
  }));

  const chartMultiYear = multiYear.map(d => ({
    label: d.label,
    Margin: Math.round((d.monthlyMarginINR || 0) / 100000),
    GMpct: d.grossMarginPct || 0,
  }));

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Dynamic Market Simulator</div>
        <h1 className="sec-title">Multi-Dimensional Profitability Engine</h1>
        <p className="sec-sub">
          Pick any of {hotRoutes.length} pre-defined routes (supplier × product × market × distributor × mode).
          Engine computes monthly + annual margin + survivability using 10 years of historical AP/Konkan farm-gate prices,
          USA FOB benchmarks, FX, sea + air freight rates, monsoon/cyclone/disease shocks, and tariff scenarios.
          Add overrides (mortality, tariff, buy/sell shock) and watch how the margin curve shifts.
        </p>
      </div>

      <Disclaimer kind="modelled">
        The 10-year monthly historical series (vannamei farm-gate, pomfret/lobster dockside, USA FOB, FX, sea/air freight, cyclone severity, disease severity, tariff)
        is <strong>synthesised from publicly-reported MPEDA monthly bulletins, IMD weather, Drewry shipping indices, USDA AMS, and FAO/GLOBEFISH price ranges</strong> —
        and reproduces the major shocks (2019 EHP+WSSV, 2020 COVID, 2021 freight peak, 2023 Ecuador price war, 2025 tariff escalation). It is NOT a tick-level
        archive — use for directional / pattern analysis, not for back-testing trading strategies. Validate against current MPEDA monthly bulletin before any commitment.
      </Disclaimer>

      <div className="kpi-grid">
        <div className="card"><h3>Routes simulated</h3><div className="big">{hotRoutes.length}</div></div>
        <div className="card"><h3>Historical depth</h3><div className="big">10 yrs</div><div className="sub">2016-2026 (124 months)</div></div>
        <div className="card"><h3>Variables modelled</h3><div className="big">14</div><div className="sub">price, FX, freight, monsoon, cyclone, disease, tariff, mortality, buying spikes, MSC premium…</div></div>
        <div className="card"><h3>Outputs</h3><div className="big">Margin · Survivability · Revenue · MT</div></div>
      </div>

      <div className="section-block">
        <h2>Configure simulation</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3>Route selection</h3>
            <select value={routeId} onChange={e => setRouteId(e.target.value)}
              style={{ width: '100%', padding: 8, border: '1px solid var(--c-border)', borderRadius: 4, background: 'var(--c-surface)', color: 'var(--c-text)', fontSize: 13 }}>
              {hotRoutes.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
            </select>
            <div style={{ marginTop: 12, fontSize: 12, color: 'var(--c-text-dim)' }}>
              <strong>Supplier:</strong> {sourcingLocations.find(s => s.id === route.supplier)?.name}<br/>
              <strong>Product:</strong> {products.find(p => p.id === route.product)?.name}<br/>
              <strong>Market:</strong> {markets.find(m => m.id === route.market)?.name}<br/>
              <strong>Distributor:</strong> {distributors.find(d => d.id === route.distributor)?.name}<br/>
              <strong>Mode:</strong> {transportModes.find(t => t.id === route.mode)?.name}<br/>
              <strong>Target:</strong> {route.targetMT} MT/yr
            </div>
          </div>
          <div className="card">
            <h3>Year + scenario overrides</h3>
            <div style={{ marginBottom: 10 }}>
              <label style={{ fontSize: 12, color: 'var(--c-text-dim)' }}>Year</label>
              <input type="range" min="2018" max="2026" value={year} onChange={e => setYear(parseInt(e.target.value))} style={{ width: '100%' }}/>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{year}</div>
            </div>
            <div style={{ marginBottom: 10 }}>
              <label style={{ fontSize: 12, color: 'var(--c-text-dim)' }}>Mortality multiplier (live cargo)</label>
              <input type="range" min="0.5" max="2" step="0.1" value={mortMul} onChange={e => setMortMul(parseFloat(e.target.value))} style={{ width: '100%' }}/>
              <div style={{ fontSize: 13, fontWeight: 600 }}>×{mortMul.toFixed(1)}</div>
            </div>
            <div style={{ marginBottom: 10 }}>
              <label style={{ fontSize: 12, color: 'var(--c-text-dim)' }}>USA tariff override (%)</label>
              <input type="range" min="0" max="50" value={tariffPct ?? 26} onChange={e => setTariffPct(parseInt(e.target.value))} style={{ width: '100%' }}/>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{tariffPct ?? 'historical'}%</div>
            </div>
            <div style={{ marginBottom: 10 }}>
              <label style={{ fontSize: 12, color: 'var(--c-text-dim)' }}>Buy-side price shock</label>
              <input type="range" min="0.7" max="1.5" step="0.05" value={buyMul} onChange={e => setBuyMul(parseFloat(e.target.value))} style={{ width: '100%' }}/>
              <div style={{ fontSize: 13, fontWeight: 600 }}>×{buyMul.toFixed(2)}</div>
            </div>
            <div style={{ marginBottom: 10 }}>
              <label style={{ fontSize: 12, color: 'var(--c-text-dim)' }}>FOB price shock</label>
              <input type="range" min="0.7" max="1.5" step="0.05" value={fobMul} onChange={e => setFobMul(parseFloat(e.target.value))} style={{ width: '100%' }}/>
              <div style={{ fontSize: 13, fontWeight: 600 }}>×{fobMul.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="kpi-grid" style={{ marginTop: 14 }}>
        <div className="card"><h3>Annual revenue {year}</h3><div className="big">₹{(annual.totalRevenueINR/10000000).toFixed(2)} cr</div></div>
        <div className="card"><h3>Annual margin {year}</h3><div className="big" style={{color: annual.totalMarginINR > 0 ? 'var(--c-good)' : 'var(--c-bad)'}}>₹{(annual.totalMarginINR/10000000).toFixed(2)} cr</div></div>
        <div className="card"><h3>Avg GM %</h3><div className="big" style={{color: annual.avgMarginPct > 15 ? 'var(--c-good)' : annual.avgMarginPct > 5 ? 'var(--c-warn)' : 'var(--c-bad)'}}>{annual.avgMarginPct}%</div></div>
        <div className="card"><h3>Survivability</h3><div className="big" style={{color: annual.avgSurvivability > 0.85 ? 'var(--c-good)' : annual.avgSurvivability > 0.65 ? 'var(--c-warn)' : 'var(--c-bad)'}}>{(annual.avgSurvivability*100).toFixed(0)}%</div></div>
      </div>

      <div className="section-block grid grid-2">
        <div className="card">
          <h3>Monthly margin + revenue ({year})</h3>
          <ResponsiveContainer width="100%" height={290}>
            <ComposedChart data={chartYearData} margin={{ top:10, right:10, left:0, bottom:0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8" />
              <XAxis dataKey="month" stroke="#5c6272" fontSize={11}/>
              <YAxis yAxisId="l" stroke="#5c6272" fontSize={11}/>
              <YAxis yAxisId="r" orientation="right" stroke="#5c6272" fontSize={11}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Legend wrapperStyle={{fontSize:11}}/>
              <Bar yAxisId="l" dataKey="Revenue" fill="#0d3b66" name="Revenue ₹L"/>
              <Bar yAxisId="l" dataKey="Margin" fill="#2d6a4f" name="Margin ₹L"/>
              <Line yAxisId="r" dataKey="GMpct" stroke="#c5a565" strokeWidth={2} dot={{r:4}} name="GM %"/>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <h3>Monthly survivability ({year})</h3>
          <ResponsiveContainer width="100%" height={290}>
            <AreaChart data={chartYearData} margin={{ top:10, right:10, left:0, bottom:0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8" />
              <XAxis dataKey="month" stroke="#5c6272" fontSize={11}/>
              <YAxis stroke="#5c6272" fontSize={11} domain={[0, 100]}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Legend wrapperStyle={{fontSize:11}}/>
              <Area type="monotone" dataKey="Survivability" stroke="#a8322d" fill="#a8322d" fillOpacity={0.3} name="Survivability %"/>
              <Area type="monotone" dataKey="MT" stroke="#0d3b66" fill="#0d3b66" fillOpacity={0.2} name="Throughput MT"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card" style={{ marginTop: 14 }}>
        <h3>Multi-year margin trajectory (2018-2025)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartMultiYear} margin={{ top:10, right:10, left:0, bottom:30 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8" />
            <XAxis dataKey="label" stroke="#5c6272" fontSize={9} angle={-30} textAnchor="end" height={50} interval={5}/>
            <YAxis stroke="#5c6272" fontSize={11}/>
            <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
            <Legend wrapperStyle={{fontSize:11}}/>
            <Line type="monotone" dataKey="Margin" stroke="#2d6a4f" strokeWidth={2} dot={false} name="Margin ₹L (monthly)"/>
            <Line type="monotone" dataKey="GMpct" stroke="#c5a565" strokeWidth={2} dot={false} name="GM %"/>
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="section-block">
        <h2>Cross-route ranking ({year})</h2>
        <div className="card">
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={routeComparison.slice(0, 15)} layout="vertical" margin={{ top:5, right:10, left:10, bottom:0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis type="number" stroke="#5c6272" fontSize={11}/>
              <YAxis type="category" dataKey="route" stroke="#5c6272" fontSize={9} width={210}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Legend wrapperStyle={{fontSize:11}}/>
              <Bar dataKey="totalMarginINR" name="Annual margin ₹" fill="#2d6a4f" radius={[0,4,4,0]}/>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="tbl-wrap" style={{ marginTop: 14 }}>
          <table className="tbl">
            <thead><tr><th>Route</th><th className="num">Revenue ₹L</th><th className="num">Margin ₹L</th><th className="num">GM%</th><th className="num">Survival%</th><th className="num">MT</th></tr></thead>
            <tbody>
              {routeComparison.map((r, i) => (
                <tr key={i}>
                  <td><strong style={{ fontSize: 11 }}>{r.route}</strong></td>
                  <td className="num">{Math.round(r.totalRevenueINR/100000)}</td>
                  <td className="num" style={{color: r.totalMarginINR > 0 ? 'var(--c-good)' : 'var(--c-bad)'}}>{Math.round(r.totalMarginINR/100000)}</td>
                  <td className="num"><strong>{r.avgMarginPct}%</strong></td>
                  <td className="num">{Math.round(r.avgSurvivability*100)}%</td>
                  <td className="num">{r.totalMT}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="callout" style={{ marginTop: 14 }}>
        <strong>How to use this simulator:</strong> Pick a route → vary the year to see how historical conditions
        (cyclone in 2019/2021, COVID dip 2020, freight spike 2021, Ecuador price war 2023, USA tariff 2025) affect outcomes.
        Use overrides to test "what if mortality is 2× target" or "what if USA tariff drops to 5%". Cross-route ranking
        compares all 30 routes for the chosen year + scenario.
      </div>

      <div className="callout">
        <strong>Future enhancements (loops 3-8):</strong> Live news data integration, supplier-specific FCR variability,
        weather forecast feed, currency hedging optimization, multi-route portfolio optimizer, route stress-testing under
        combined shocks, distributor mix optimizer, and back-testing against actual exporter financials.
      </div>
    </>
  );
}
