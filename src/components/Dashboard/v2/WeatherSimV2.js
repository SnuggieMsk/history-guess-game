import React from 'react';
import { monsoonForecast2026, cycloneRiskByQuarter, seaSurfaceTemp2026, climateAdaptationCosts, weatherImpactMatrix, weatherDataSources } from '../../../data/v2SimWeather';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function WeatherSimV2() {
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · L6 Weather + Climate Layer</div>
        <h1 className="sec-title">Monsoon, Cyclones, SST — Daily Operating Inputs</h1>
        <p className="sec-sub">
          Weather is the supply-side variable that breaks plans. This view: monsoon 2026 forecast,
          cyclone probability by quarter, sea-surface temperature anomalies, climate adaptation cost
          schedule, weather-impact matrix per event type, and the 7 essential data sources to monitor daily.
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Monsoon 2026 forecast</h3><div className="big">Mixed</div><div className="sub">Above normal Jun; below normal Aug-Sep</div></div>
        <div className="card"><h3>Cyclones expected 2026</h3><div className="big">3-5</div><div className="sub">2-3 east coast Oct-Dec</div></div>
        <div className="card"><h3>SST anomaly (Bay)</h3><div className="big">+0.9°C</div><div className="sub">Marine heatwave 18 days</div></div>
        <div className="card"><h3>Adaptation capex</h3><div className="big">₹{climateAdaptationCosts.reduce((s,c)=>s+c.capexINRl,0)} L</div></div>
      </div>

      <div className="section-block grid grid-2">
        <div className="card">
          <h3>Monsoon 2026 forecast (Jun-Sep)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={Object.entries(monsoonForecast2026).map(([m,d]) => ({month:m, Forecast:d.rainfallMM, Normal:d.normalMM}))} margin={{top:10,right:10,left:0,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis dataKey="month" stroke="#5c6272" fontSize={11}/>
              <YAxis stroke="#5c6272" fontSize={11}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Bar dataKey="Normal" fill="#cdc4ae"/>
              <Bar dataKey="Forecast" fill="#0d3b66"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <h3>Cyclone probability by quarter</h3>
          <table className="tbl">
            <thead><tr><th>Quarter</th><th className="num">West coast %</th><th className="num">East coast %</th><th>Severity</th></tr></thead>
            <tbody>
              {Object.entries(cycloneRiskByQuarter).map(([q,d]) => (
                <tr key={q}>
                  <td><strong>{q.replace('q','Q').replace('_',' - ')}</strong></td>
                  <td className="num">{(d.westCoastP*100).toFixed(0)}%</td>
                  <td className="num">{(d.eastCoastP*100).toFixed(0)}%</td>
                  <td style={{fontSize:11}}>{d.severity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block">
        <h2>Sea surface temperature anomalies 2026</h2>
        <div className="grid grid-3">
          {Object.entries(seaSurfaceTemp2026).map(([region, d]) => (
            <div key={region} className="card">
              <h3 style={{textTransform:'capitalize'}}>{region}</h3>
              <div className="big">{d.avgC}°C</div>
              <div style={{fontSize:11,color:d.anomaly > 0.5 ? 'var(--c-bad)' : 'var(--c-warn)'}}>+{d.anomaly}°C anomaly · {d.marineHeatWaveDays} MHW days</div>
              <div style={{fontSize:12,marginTop:8,color:'var(--c-text)'}}>{d.fishImpact}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-block">
        <h2>Weather impact matrix (per event)</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Event</th><th className="num">Supply impact</th><th className="num">Cost impact</th><th className="num">FOB impact</th><th className="num">Recovery (weeks)</th></tr></thead>
            <tbody>
              {weatherImpactMatrix.map((e,i) => (
                <tr key={i}>
                  <td><strong>{e.event}</strong></td>
                  <td className="num" style={{color:'var(--c-bad)'}}>{(e.supplyImpact*100).toFixed(0)}%</td>
                  <td className="num" style={{color:e.costImpact>0?'var(--c-bad)':'var(--c-good)'}}>{(e.costImpact*100).toFixed(0)}%</td>
                  <td className="num" style={{color:e.fobImpact>0?'var(--c-good)':'var(--c-text-dim)'}}>+{(e.fobImpact*100).toFixed(0)}%</td>
                  <td className="num">{e.recoveryWeeks}w</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block">
        <h2>Climate adaptation capex schedule</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Measure</th><th className="num">Capex ₹L</th><th className="num">Recurring ₹L/yr</th><th>Urgency</th></tr></thead>
            <tbody>
              {climateAdaptationCosts.map((c,i) => (
                <tr key={i}>
                  <td>{c.measure}</td>
                  <td className="num">{c.capexINRl}</td>
                  <td className="num">{c.recurring}</td>
                  <td><span className="pill pill-warn">{c.urgency}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block">
        <h2>Weather data sources to monitor daily</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Source</th><th>URL</th><th>Use</th></tr></thead>
            <tbody>
              {weatherDataSources.map((s,i) => (
                <tr key={i}>
                  <td><strong>{s.source}</strong></td>
                  <td style={{fontSize:11}}><a href={s.url} target="_blank" rel="noreferrer">{s.url}</a></td>
                  <td style={{fontSize:12}}>{s.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
