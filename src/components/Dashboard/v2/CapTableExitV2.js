import React, { useState } from 'react';
import { capTableStages, exitComparables, exitScenariosY5, sensitivityDrivers, sensitivityMatrix, summaryStats } from '../../../data/v2CapTableExit';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import SortableTable from '../SortableTable';
import Disclaimer from './Disclaimer';

const HOLDER_COLOR = {
  'Promoter': '#0d3b66',
  'External equity': '#c5a565',
  'Debt': '#5c6272',
};

export default function CapTableExitV2() {
  const [stageIdx, setStageIdx] = useState(0);
  const stage = capTableStages[stageIdx];

  const pieData = stage.holders.filter(h => h.type !== 'Debt').map(h => ({
    name: h.name.length > 30 ? h.name.slice(0, 27) + '…' : h.name,
    value: h.sharePct,
    color: HOLDER_COLOR[h.type] || '#7a5b8c',
  }));

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Financial Rigor</div>
        <h1 className="sec-title">Cap Table Walk · Exit Comps · Sensitivity</h1>
        <p className="sec-sub">
          Investor-grade financial layer: full cap-table walk Day 0 → Series A → Series B → Exit;
          {summaryStats.exitComparablesCount} exit comparables (BSE listed + private deals);
          5 exit scenarios (distressed → IPO); 6-driver × 3-scenario sensitivity matrix
          with probability-weighted expected value.
        </p>
      </div>

      <Disclaimer kind="modelled">
        Cap-table dilution percentages and Series A/B valuations are <strong>design recommendations</strong>
        based on comparable Indian seafood-sector deals (Sandhya Marines ₹85cr, Devi ₹220cr, Falcon ₹145cr).
        Exit multiples below 12× are anchored to verified BSE closes Apr 2026; multiples above 12× assume
        successful brand + niche execution. Actual valuations depend on market conditions at exit.
      </Disclaimer>

      <div className="kpi-grid">
        <div className="card"><h3>Promoter equity</h3><div className="big">₹{summaryStats.promoterEquityINRcr} cr</div></div>
        <div className="card"><h3>Project cost</h3><div className="big">₹{summaryStats.totalProjectCostINRcr} cr</div></div>
        <div className="card"><h3>Base exit EV</h3><div className="big" style={{color:'var(--c-good)'}}>₹{summaryStats.baseExitEVINRcr} cr</div></div>
        <div className="card"><h3>Promoter MoM (base)</h3><div className="big" style={{color:'var(--c-good)'}}>{summaryStats.basePromoterMoM}×</div></div>
      </div>

      {/* CAP TABLE WALK */}
      <div className="section-block">
        <h2>Cap-table walk Day 0 → Exit</h2>

        {/* Stage selector */}
        <div style={{display:'flex', gap:8, marginBottom:14, flexWrap:'wrap'}}>
          {capTableStages.map((s, i) => (
            <button key={i} onClick={() => setStageIdx(i)} style={{
              padding:'7px 12px', border:'1px solid var(--c-border)', borderRadius:4,
              cursor:'pointer', fontSize:11.5, fontWeight:600,
              background: stageIdx === i ? 'var(--c-accent)' : 'var(--c-surface)',
              color: stageIdx === i ? '#fff' : 'var(--c-text)',
            }}>
              {i+1}. {s.stage.split(' — ')[0]}
            </button>
          ))}
        </div>

        <div className="grid grid-2">
          <div className="card">
            <h3>{stage.stage}</h3>
            <div style={{fontSize:12.5, color:'var(--c-text-dim)', marginBottom:8}}>
              <strong>Timing:</strong> {stage.timing} ·
              <strong> Post-money:</strong> ₹{stage.valuationPostINRcr} cr
              {stage.valuationPreINRcr && <> · <strong>Pre-money:</strong> ₹{stage.valuationPreINRcr} cr</>}
            </div>
            <p style={{fontSize:13, color:'var(--c-text)', marginBottom:12}}>{stage.notes}</p>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={pieData} outerRadius={75}
                  label={({name, percent}) => `${(percent * 100).toFixed(0)}%`}
                  fontSize={11}>
                  {pieData.map((e, i) => <Cell key={i} fill={e.color}/>)}
                </Pie>
                <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}
                  formatter={(v) => [`${v}%`, 'Equity share']}/>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <h3>Holders detail</h3>
            <table className="tbl" style={{marginTop:6}}>
              <thead>
                <tr>
                  <th>Holder</th>
                  <th className="num">Equity (₹ cr)</th>
                  <th className="num">Share %</th>
                  {stage.holders.some(h => h.exitProceedsINRcr != null) && <th className="num">Proceeds</th>}
                </tr>
              </thead>
              <tbody>
                {stage.holders.map((h, i) => (
                  <tr key={i}>
                    <td style={{fontSize:12}}>
                      <span style={{display:'inline-block',width:8,height:8,background:HOLDER_COLOR[h.type] || '#7a5b8c',borderRadius:2,marginRight:6}}/>
                      {h.name}
                      {h.debtINRcr && <span style={{color:'var(--c-text-dim)', fontStyle:'italic'}}> (debt ₹{h.debtINRcr} cr)</span>}
                    </td>
                    <td className="num">{h.equityINRcr.toFixed(1)}</td>
                    <td className="num">{h.sharePct.toFixed(1)}%</td>
                    {stage.holders.some(h2 => h2.exitProceedsINRcr != null) && (
                      <td className="num" style={{color:'var(--c-good)', fontWeight:600}}>
                        {h.exitProceedsINRcr != null ? `₹${h.exitProceedsINRcr.toFixed(1)} cr` : '—'}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Valuation trajectory chart */}
        <div className="card" style={{marginTop:14}}>
          <h3>Valuation trajectory across stages</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={capTableStages.map((s, i) => ({
              stage: `${i+1}. ${s.stage.split(' — ')[0].slice(0,16)}`,
              valuation: s.valuationPostINRcr,
              promoter: s.holders.find(h => h.type === 'Promoter')?.equityINRcr * (s.valuationPostINRcr / s.totalEquityINRcr) || 0,
            }))} margin={{top:10,right:10,left:0,bottom:30}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis dataKey="stage" stroke="#5c6272" fontSize={10} angle={-15} textAnchor="end" height={60}/>
              <YAxis stroke="#5c6272" fontSize={11} label={{value:'₹ cr', angle:-90, position:'insideLeft', fontSize:11}}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}
                formatter={(v) => [`₹${v.toFixed(1)} cr`, '']}/>
              <Legend wrapperStyle={{fontSize:11}}/>
              <Bar dataKey="valuation" name="Post-money valuation" fill="#0d3b66"/>
              <Bar dataKey="promoter" name="Promoter stake value" fill="#c5a565"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* EXIT COMPARABLES */}
      <div className="section-block">
        <h2>Exit comparables — listed peers + private deals</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3>Listed comparables (EV/EBITDA Apr 2026)</h3>
            <SortableTable
              columns={[
                { key:'company', label:'Company', render:(v) => <strong>{v}</strong> },
                { key:'value', label:'Multiple', numeric:true, format:(v) => `${v}×` },
                { key:'source', label:'Source', style:{fontSize:11} },
                { key:'notes', label:'Note', style:{fontSize:11.5} },
              ]}
              rows={exitComparables.listed}
              defaultSort="value"
              defaultDir="desc"
            />
          </div>
          <div className="card">
            <h3>Private deal comparables</h3>
            <SortableTable
              columns={[
                { key:'target', label:'Target', render:(v) => <strong>{v}</strong> },
                { key:'year', label:'Year', numeric:true },
                { key:'valueINRcr', label:'Deal ₹ cr', numeric:true, format:(v) => `₹${v}` },
                { key:'multipleType', label:'Type', style:{fontSize:11} },
                { key:'value', label:'Multiple', numeric:true, format:(v) => `${v}×` },
                { key:'source', label:'Source', style:{fontSize:11} },
              ]}
              rows={exitComparables.privateDeals}
              defaultSort="year"
              defaultDir="desc"
            />
          </div>
        </div>
      </div>

      {/* EXIT SCENARIOS */}
      <div className="section-block">
        <h2>5 exit scenarios — distressed → IPO</h2>
        {exitScenariosY5.map((s, i) => {
          const isUp = s.scenario.toLowerCase().includes('strategic') || s.scenario.toLowerCase().includes('ipo') || s.scenario.toLowerCase().includes('pre-ipo');
          const isDown = s.scenario.toLowerCase().includes('distressed');
          const accent = isDown ? 'var(--c-bad)' : isUp ? 'var(--c-good)' : 'var(--c-accent)';
          return (
            <div key={i} className="card" style={{marginBottom:14, borderLeft:`4px solid ${accent}`}}>
              <div style={{display:'flex',justifyContent:'space-between',gap:10,flexWrap:'wrap',marginBottom:10}}>
                <div>
                  <h3 style={{fontFamily:'Georgia,serif',fontSize:16,fontWeight:600,color:'var(--c-text)'}}>{s.scenario}</h3>
                  <div style={{fontSize:12, color:'var(--c-text-dim)', marginTop:2, fontStyle:'italic'}}>
                    Trigger: {s.triggerCondition}
                  </div>
                </div>
                <div style={{textAlign:'right'}}>
                  <div style={{fontFamily:'Georgia,serif',fontSize:22,fontWeight:600,color:accent}}>
                    ₹{s.enterpriseValueINRcr.toFixed(0)} cr EV
                  </div>
                  <div style={{fontSize:11, color:'var(--c-text-dim)'}}>
                    {s.multiple}× · {s.ebitdaINRcr.toFixed(1)} cr EBITDA
                  </div>
                </div>
              </div>
              <div className="grid grid-3" style={{fontSize:12.5, marginBottom:10}}>
                <div><strong>Y5 revenue:</strong> ₹{s.revenueINRcr} cr</div>
                <div><strong>Y5 EBITDA:</strong> ₹{s.ebitdaINRcr.toFixed(1)} cr ({((s.ebitdaINRcr/s.revenueINRcr)*100).toFixed(1)}%)</div>
                <div><strong>Multiple:</strong> {s.multiple}×</div>
              </div>
              <div className="grid grid-3" style={{fontSize:12.5, marginBottom:10}}>
                <div><strong style={{color:HOLDER_COLOR['Promoter']}}>Promoter MoM:</strong> {s.promoterMoM.toFixed(1)}×</div>
                <div><strong style={{color:HOLDER_COLOR['External equity']}}>Series A MoM:</strong> {s.seriesAMoM === 0 ? 'wiped' : `${s.seriesAMoM.toFixed(1)}×`}</div>
                <div><strong style={{color:'#7a5b8c'}}>Series B MoM:</strong> {s.seriesBMoM == null ? 'pre-Series B' : `${s.seriesBMoM.toFixed(2)}×`}</div>
              </div>
              <div style={{fontSize:12, color:'var(--c-text-dim)', borderTop:'1px solid var(--c-border)', paddingTop:8, fontStyle:'italic'}}>
                {s.notes}
              </div>
            </div>
          );
        })}
      </div>

      {/* SENSITIVITY MATRIX */}
      <div className="section-block">
        <h2>Sensitivity matrix — 6 drivers × 3 scenarios</h2>

        <div className="card" style={{marginBottom:14}}>
          <h3>Driver-by-driver sensitivity</h3>
          <SortableTable
            columns={[
              { key:'driver', label:'Driver', render:(v) => <strong>{v}</strong> },
              { key:'downside', label:'Downside', numeric:true, style:{color:'var(--c-bad)'} },
              { key:'base', label:'Base', numeric:true, style:{color:'var(--c-accent)', fontWeight:600} },
              { key:'upside', label:'Upside', numeric:true, style:{color:'var(--c-good)'} },
              { key:'sensitivityPerUnit', label:'Sensitivity per unit', style:{fontSize:11.5} },
              { key:'note', label:'Note', style:{fontSize:11} },
            ]}
            rows={sensitivityDrivers}
          />
        </div>

        <div className="grid grid-2">
          {sensitivityMatrix.scenarios.map((sc, i) => {
            const isUp = sc.name.includes('Upside');
            const isDown = sc.name.includes('Downside');
            const accent = isDown ? 'var(--c-bad)' : isUp ? 'var(--c-good)' : 'var(--c-accent)';
            return (
              <div key={i} className="card" style={{borderLeft:`4px solid ${accent}`, gridColumn: i === 1 ? 'span 2' : 'auto'}}>
                <div style={{display:'flex',justifyContent:'space-between',gap:10,flexWrap:'wrap',marginBottom:10}}>
                  <h3 style={{fontFamily:'Georgia,serif',fontSize:15,fontWeight:600,color:accent}}>
                    {sc.name} · {sc.probabilityPct}% prob
                  </h3>
                  <span className="pill" style={{background:accent, color:'#fff'}}>
                    EV ₹{sc.enterpriseValueINRcr.toFixed(0)} cr
                  </span>
                </div>
                <div className="grid grid-2" style={{fontSize:12, marginBottom:10}}>
                  {Object.entries(sc.values).map(([k, v]) => (
                    <div key={k}>
                      <strong style={{fontSize:10.5, color:'var(--c-text-dim)', textTransform:'uppercase', letterSpacing:1}}>{k}</strong>
                      <div>{v}</div>
                    </div>
                  ))}
                </div>
                <div style={{borderTop:'1px solid var(--c-border)', paddingTop:8, fontSize:12.5}}>
                  <div><strong>Y5 revenue:</strong> ₹{sc.Y5revenueINRcr} cr</div>
                  <div><strong>Y5 EBITDA:</strong> ₹{sc.Y5ebitdaINRcr.toFixed(1)} cr ({sc.Y5ebitdaMarginPct}%)</div>
                  <div><strong>Promoter MoM:</strong> <span style={{color:accent, fontWeight:600}}>{sc.promoterMoM.toFixed(1)}×</span></div>
                  <div style={{marginTop:8, fontStyle:'italic', color:'var(--c-text-dim)'}}>{sc.verdict}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="callout" style={{marginTop:14}}>
          <strong>Probability-weighted expected EV: ₹{sensitivityMatrix.expectedValueINRcr} cr</strong> ·
          (0.25 × ₹73.6 cr) + (0.50 × ₹245.7 cr) + (0.25 × ₹578.4 cr).
          Promoter expected MoM: {((0.25*4.0 + 0.5*13.5 + 0.25*31.7)).toFixed(1)}× across scenarios.
        </div>
      </div>
    </>
  );
}
