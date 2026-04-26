import React, { useState, useMemo } from 'react';
import { fiveYearScenarios, run5YearForecast } from '../../../data/v2Sim5Year';
import { hotRoutes } from '../../../data/v2SimRoutes';
import { ResponsiveContainer, ComposedChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';

const DEFAULT_PORTFOLIO = ['r4','r6','r7','r3','r1'];
const DEFAULT_ALLOC = { r4:20, r6:25, r7:25, r3:15, r1:15 };

export default function FiveYearSimV2() {
  const [scenario, setScenario] = useState('base');

  const forecast = useMemo(() => run5YearForecast(scenario, DEFAULT_PORTFOLIO, DEFAULT_ALLOC), [scenario]);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · L8 5-Year Forecast Sim (sim v7)</div>
        <h1 className="sec-title">Multi-Year Compounded Forecast — Y1 to Y5</h1>
        <p className="sec-sub">
          Single-year sim is a snapshot. This 5-year compounded simulator runs the 5-route portfolio under
          year-by-year shock profiles (bear / base / bull). Working capital + cash position evolve;
          shocks compound; you see how the company actually evolves over 5 years.
        </p>
      </div>

      <div style={{display:'flex',gap:8,marginTop:14,marginBottom:18,flexWrap:'wrap'}}>
        {Object.keys(fiveYearScenarios).map(s => (
          <button key={s} onClick={() => setScenario(s)} style={{
            padding:'10px 20px', border:`2px solid ${fiveYearScenarios[s].color}`, borderRadius:6,
            cursor:'pointer', fontSize:13, fontWeight:600,
            background: scenario === s ? fiveYearScenarios[s].color : 'transparent',
            color: scenario === s ? '#fff' : fiveYearScenarios[s].color,
          }}>{fiveYearScenarios[s].label}</button>
        ))}
      </div>

      <div className="callout" style={{borderLeftColor: forecast.color, marginBottom:14}}>
        <strong>Scenario assumptions: </strong>{forecast.description}
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Cumulative revenue 5-yr</h3><div className="big">₹{forecast.summary.cumRevINRcr.toFixed(0)} cr</div></div>
        <div className="card"><h3>Cumulative margin</h3><div className="big" style={{color: forecast.summary.cumMarginINRcr > 0 ? 'var(--c-good)' : 'var(--c-bad)'}}>₹{forecast.summary.cumMarginINRcr.toFixed(1)} cr</div></div>
        <div className="card"><h3>Blended GM%</h3><div className="big">{forecast.summary.blendedMargin.toFixed(1)}%</div></div>
        <div className="card"><h3>Y5 revenue</h3><div className="big">₹{forecast.summary.y5RevINRcr.toFixed(0)} cr</div></div>
      </div>

      <div className="section-block">
        <h2>5-year revenue + margin trajectory</h2>
        <div className="card">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={forecast.yearly} margin={{top:10,right:10,left:0,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis dataKey="year" stroke="#5c6272" fontSize={11}/>
              <YAxis yAxisId="l" stroke="#5c6272" fontSize={11} label={{value:'₹ cr', angle:-90, position:'insideLeft'}}/>
              <YAxis yAxisId="r" orientation="right" stroke="#5c6272" fontSize={11} label={{value:'GM%', angle:90, position:'insideRight'}}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Legend wrapperStyle={{fontSize:11}}/>
              <Bar yAxisId="l" dataKey="revenueINRcr" name="Revenue ₹cr" fill={forecast.color}/>
              <Bar yAxisId="l" dataKey="marginINRcr" name="Margin ₹cr" fill="#2d6a4f"/>
              <Line yAxisId="r" dataKey="marginPct" name="GM %" stroke="#c5a565" strokeWidth={3} dot={{r:5}}/>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="section-block grid grid-2">
        <div className="card">
          <h3>Working capital evolution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={forecast.yearly.map((y,i) => ({year:y.year, WC: forecast.wcINRcr[i]}))} margin={{top:10,right:10,left:0,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis dataKey="year" stroke="#5c6272" fontSize={11}/>
              <YAxis stroke="#5c6272" fontSize={11}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Area dataKey="WC" name="WC ₹cr" stroke="#0d3b66" fill="#0d3b66" fillOpacity={0.3}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <h3>Cash position trajectory</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={forecast.yearly.map((y,i) => ({year:y.year, Cash: forecast.cashPosition[i]}))} margin={{top:10,right:10,left:0,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis dataKey="year" stroke="#5c6272" fontSize={11}/>
              <YAxis stroke="#5c6272" fontSize={11}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Line dataKey="Cash" name="Cash position ₹cr" stroke="#2d6a4f" strokeWidth={3} dot={{r:5}}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="section-block">
        <h2>Year-by-year detail</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Year</th><th className="num">Revenue ₹cr</th><th className="num">Margin ₹cr</th><th className="num">GM%</th><th className="num">MT</th><th>Shock profile</th></tr></thead>
            <tbody>
              {forecast.yearly.map((y,i) => (
                <tr key={i}>
                  <td><strong>{y.year}</strong> <span style={{fontSize:11,color:'var(--c-text-dim)'}}>({y.yearLabel})</span></td>
                  <td className="num">{y.revenueINRcr.toFixed(1)}</td>
                  <td className="num" style={{color: y.marginINRcr > 0 ? 'var(--c-good)' : 'var(--c-bad)'}}>{y.marginINRcr.toFixed(2)}</td>
                  <td className="num">{y.marginPct.toFixed(1)}%</td>
                  <td className="num">{y.mt.toFixed(0)}</td>
                  <td style={{fontSize:11}}>
                    FOB×{(1+(y.shockProfile.fobMul||0)).toFixed(2)} · Buy×{(1+(y.shockProfile.buyMul||0)).toFixed(2)} · Mort×{y.shockProfile.mortalityMul} · Tariff{y.shockProfile.tariffPct||0}% · {y.shockProfile.cyclone?'Cyclone':'No cyclone'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="callout">
        <strong>5-yr insight:</strong> The {forecast.scenario} scenario produces cumulative ₹{forecast.summary.cumRevINRcr.toFixed(0)} cr revenue
        and ₹{forecast.summary.cumMarginINRcr.toFixed(1)} cr margin (blended GM {forecast.summary.blendedMargin.toFixed(1)}%).
        Compare bear / base / bull to see asymmetric outcomes — bull case 3-4× margin of bear case for same operational complexity.
        Operator must plan to bear case + secure ECGC/insurance + maintain WC reserve to weather cyclone+disease+tariff combinations.
      </div>
    </>
  );
}
