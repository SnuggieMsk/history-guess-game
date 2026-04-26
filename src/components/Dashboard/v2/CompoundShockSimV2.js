import React, { useMemo } from 'react';
import { compoundShockScenarios, survivalThresholds, mitigationLayers } from '../../../data/v2CompoundShocks';
import { hotRoutes } from '../../../data/v2SimRoutes';
import { simulateRoute, aggregateAnnual } from '../../../data/v2SimEngine';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import Disclaimer from './Disclaimer';

export default function CompoundShockSimV2() {
  // Run base portfolio (5 routes) under each compound shock — declared outside useMemo to satisfy hook-deps
  const scenarioResults = useMemo(() => {
    const baseRoutes = ['r4','r6','r7','r3','r1'];
    return compoundShockScenarios.map(scn => {
      let totalRev = 0, totalMargin = 0;
      baseRoutes.forEach(rid => {
        const route = hotRoutes.find(r => r.id === rid);
        if (!route) return;
        const yearResult = Array.from({length:12},(_,m) => {
          const overrides = {
            fobMultiplier: 1 + (scn.fobShock || 0),
            buyMultiplier: 1 + (scn.buyShock || 0) + (scn.diseaseEvent && [3,4,5].includes(m) ? 0.20 : 0),
            mortalityMultiplier: scn.mortalityMul || 1.0,
            tariffPct: scn.tariffPct,
          };
          const r = simulateRoute(route, 2024, m, overrides);
          if (scn.cycloneEvent && [4,5,6,7].includes(m)) {
            r.monthlyMT *= 0.55; r.monthlyRevenueINR *= 0.55; r.monthlyMarginINR *= 0.45;
          }
          if (scn.rasffEvent && m >= 6) {
            r.monthlyMT *= 0.4; r.monthlyRevenueINR *= 0.4; r.monthlyMarginINR *= 0.3;
          }
          if (scn.supplyMul && scn.supplyMul < 1) {
            r.monthlyMT *= scn.supplyMul; r.monthlyRevenueINR *= scn.supplyMul; r.monthlyMarginINR *= scn.supplyMul;
          }
          return r;
        });
        const ag = aggregateAnnual(yearResult);
        totalRev += ag.totalRevenueINR;
        totalMargin += ag.totalMarginINR;
      });
      const marginPct = totalRev > 0 ? (totalMargin / totalRev * 100) : 0;
      const status = totalMargin < -20000000 ? 'Kill zone' :
                     totalMargin < 5000000 ? 'Warn zone' :
                     totalMargin < 10000000 ? 'OK' : 'Thriving';
      return {
        ...scn,
        totalRevenueCr: totalRev / 10000000,
        totalMarginCr: totalMargin / 10000000,
        marginPct,
        status,
      };
    });
  }, []);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · L7 Compound Shock Sim (sim v6)</div>
        <h1 className="sec-title">When 2-3 Shocks Hit Simultaneously</h1>
        <p className="sec-sub">
          Single-shock simulators are naive. Real risk is correlated — cyclone + tariff + RASFF in same year.
          {compoundShockScenarios.length} compound scenarios run against our 5-route portfolio. See which scenarios
          are survivable and which trigger kill conditions.
        </p>
      </div>

      <Disclaimer kind="modelled">
        Compound-shock scenarios are <strong>design stress tests</strong>, not statistical predictions.
        Magnitudes are calibrated against 2018-2024 actuals (cyclone Tauktae, USA tariff Aug 2025,
        RASFF events). Co-occurrence probabilities are illustrative.
      </Disclaimer>

      <div className="card">
        <h3>Portfolio outcome under {compoundShockScenarios.length} compound scenarios</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={scenarioResults} margin={{top:10,right:10,left:0,bottom:60}}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
            <XAxis dataKey="name" stroke="#5c6272" fontSize={9} angle={-22} textAnchor="end" height={90}/>
            <YAxis stroke="#5c6272" fontSize={11}/>
            <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
            <Bar dataKey="totalMarginCr" name="Annual margin ₹cr">
              {scenarioResults.map((s,i) => <Cell key={i} fill={s.color}/>)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="section-block">
        <h2>Scenario detail table</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Scenario</th><th>Description</th><th className="num">Rev ₹cr</th><th className="num">Margin ₹cr</th><th className="num">GM%</th><th>Status</th></tr></thead>
            <tbody>
              {scenarioResults.map((s,i) => (
                <tr key={i} style={{borderLeft:`3px solid ${s.color}`}}>
                  <td><strong>{s.name}</strong></td>
                  <td style={{fontSize:11.5}}>{s.description}</td>
                  <td className="num">{s.totalRevenueCr.toFixed(1)}</td>
                  <td className="num" style={{color: s.totalMarginCr > 0 ? 'var(--c-good)' : 'var(--c-bad)'}}>{s.totalMarginCr.toFixed(2)}</td>
                  <td className="num">{s.marginPct.toFixed(1)}%</td>
                  <td>
                    <span className={`pill ${
                      s.status === 'Kill zone' ? 'pill-bad' :
                      s.status === 'Warn zone' ? 'pill-warn' :
                      s.status === 'OK' ? 'pill-info' : 'pill-good'
                    }`}>{s.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block grid grid-2">
        <div className="card">
          <h3>Survival thresholds</h3>
          <table className="tbl">
            <tbody>
              <tr><td><strong style={{color:'var(--c-bad)'}}>Kill zone</strong></td><td style={{fontSize:12}}>{survivalThresholds.killZone}</td></tr>
              <tr><td><strong style={{color:'var(--c-warn)'}}>Warn zone</strong></td><td style={{fontSize:12}}>{survivalThresholds.warnZone}</td></tr>
              <tr><td><strong style={{color:'var(--c-accent)'}}>OK</strong></td><td style={{fontSize:12}}>{survivalThresholds.okZone}</td></tr>
              <tr><td><strong style={{color:'var(--c-good)'}}>Thriving</strong></td><td style={{fontSize:12}}>{survivalThresholds.thrivingZone}</td></tr>
            </tbody>
          </table>
        </div>
        <div className="card">
          <h3>Mitigation layers + recovery %</h3>
          <table className="tbl">
            <thead><tr><th>Layer</th><th className="num">Recovery</th><th>Covered by</th></tr></thead>
            <tbody>
              {mitigationLayers.map((m,i) => (
                <tr key={i}>
                  <td><strong>{m.layer}</strong></td>
                  <td className="num">{m.recoveryPct}%</td>
                  <td style={{fontSize:11}}>{m.coveredBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="callout">
        <strong>Key insight:</strong> The "Triple shock" worst case shows portfolio margin compression to near-zero or negative.
        Survival here depends entirely on (a) ECGC insurance proceeds, (b) WC reserve, (c) ability to dock costs by 15-20% rapidly.
        Goldilocks scenario triples base-case margin — but planning must assume base-or-worse, never bull.
      </div>
    </>
  );
}
