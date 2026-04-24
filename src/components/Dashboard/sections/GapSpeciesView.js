import React from 'react';
import { gapSpecies, gapSpeciesRollup, bulletproofRationale } from '../../../data/gapSpecies';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ScatterChart, Scatter, ZAxis,
} from 'recharts';

const TIER_FOR = id => {
  if (gapSpeciesRollup.bulletproofTier1.includes(id)) return { tier: 'TIER 1', cls: 'pill-good' };
  if (gapSpeciesRollup.experimentalTier2.includes(id)) return { tier: 'TIER 2', cls: 'pill-info' };
  return { tier: 'TIER 3', cls: 'pill-warn' };
};

export default function GapSpeciesView() {
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">★ Bulletproof Opportunity Map</div>
        <h1 className="sec-title">Gap Species — High-Margin Plays India Under-Supplies</h1>
        <p className="sec-sub">
          10 species where the global market is large, supply is constrained, and India has either
          existing capability or a proven tech path to scale. Each entry is verified for: global gap,
          India\'s current state, our Maharashtra-specific edge, capture plan and risks.
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Species identified</h3><div className="big">{gapSpeciesRollup.totalSpecies}</div><div className="sub">4 Tier-1 · 3 Tier-2 · 3 Tier-3</div></div>
        <div className="card"><h3>Combined Y3 revenue target</h3><div className="big">${gapSpeciesRollup.combinedY3RevenueUSDmn.toFixed(1)} mn</div><div className="sub">≈ ₹{gapSpeciesRollup.combinedY3RevenueINRcr} cr</div></div>
        <div className="card"><h3>Blended gross margin</h3><div className="big" style={{color:'var(--c-good)'}}>{gapSpeciesRollup.blendedGM}%</div><div className="sub">vs ~12% on commodity vannamei</div></div>
        <div className="card"><h3>Total dedicated capex</h3><div className="big">~₹4 cr</div><div className="sub">~5% of project budget</div></div>
      </div>

      <div className="callout">
        <strong>Why this is bulletproof: </strong>
        <ul style={{marginTop:6, paddingLeft:18}}>
          {bulletproofRationale.map((r,i) => <li key={i} style={{margin:'4px 0',color:'#1a1f36',fontSize:13}}>{r}</li>)}
        </ul>
      </div>

      <div className="section-block grid grid-2">
        <div className="card">
          <h3>Y3 revenue contribution by species ($mn)</h3>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={[...gapSpecies].sort((a,b)=>b.revenueY3USDmn-a.revenueY3USDmn)} layout="vertical" margin={{top:5,right:10,left:10,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis type="number" stroke="#5c6272" fontSize={11}/>
              <YAxis type="category" dataKey="name" stroke="#5c6272" fontSize={10} width={170}
                tickFormatter={n => n.length > 28 ? n.slice(0,28)+'…' : n}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Bar dataKey="revenueY3USDmn" name="$mn revenue Y3" fill="#c5a565" radius={[0,5,5,0]}/>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>Margin × FOB price scatter</h3>
          <ResponsiveContainer width="100%" height={320}>
            <ScatterChart margin={{top:10,right:30,bottom:10,left:10}}>
              <CartesianGrid stroke="#e0d9c8"/>
              <XAxis type="number" dataKey="fobUSDperKg" name="FOB $/kg" stroke="#5c6272" fontSize={11}/>
              <YAxis type="number" dataKey="grossMarginPct" name="GM %" stroke="#5c6272" fontSize={11}/>
              <ZAxis type="number" dataKey="revenueY3USDmn" range={[60, 400]} name="Y3 $mn"/>
              <Tooltip cursor={{strokeDasharray:'3 3'}} contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}
                formatter={(v,n)=>[v, n]} labelFormatter={(_,d)=>d?.[0]?.payload?.name||''}/>
              <Scatter data={gapSpecies} fill="#0d3b66"/>
            </ScatterChart>
          </ResponsiveContainer>
          <p style={{fontSize:11,color:'var(--c-text-dim)',marginTop:6}}>
            Bubble size = Y3 revenue. Top-right = high FOB price + high margin (sea cucumber, lobster, eel).
          </p>
        </div>
      </div>

      <div className="section-block">
        <h2>Deep dive — every species</h2>
        {gapSpecies.map(g => {
          const t = TIER_FOR(g.id);
          return (
            <div key={g.id} className="card" style={{marginBottom:14}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:12,marginBottom:10}}>
                <div>
                  <div style={{fontSize:11,color:'var(--c-text-dim)',letterSpacing:1.5,textTransform:'uppercase'}}>Rank #{g.rank}</div>
                  <h3 style={{fontSize:17,color:'var(--c-text)',fontWeight:600}}>{g.name}</h3>
                </div>
                <span className={`pill ${t.cls}`}>{t.tier}</span>
              </div>

              <div className="sp-stat-row" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:8,padding:'10px 0',borderTop:'1px solid var(--c-border)',borderBottom:'1px solid var(--c-border)',marginBottom:12}}>
                <div><div style={{fontSize:10,color:'var(--c-text-dim)',textTransform:'uppercase'}}>Global mkt</div><div style={{fontSize:14,fontWeight:600,marginTop:2}}>${g.globalMarketUSDmn} mn</div></div>
                <div><div style={{fontSize:10,color:'var(--c-text-dim)',textTransform:'uppercase'}}>India share</div><div style={{fontSize:14,fontWeight:600,marginTop:2}}>{g.indiaShareCurrentPct}% → {g.indiaShareTargetPct}%</div></div>
                <div><div style={{fontSize:10,color:'var(--c-text-dim)',textTransform:'uppercase'}}>FOB price</div><div style={{fontSize:14,fontWeight:600,marginTop:2}}>${g.fobUSDperKg}/kg</div></div>
                <div><div style={{fontSize:10,color:'var(--c-text-dim)',textTransform:'uppercase'}}>GM</div><div style={{fontSize:14,fontWeight:600,marginTop:2,color:'var(--c-good)'}}>{g.grossMarginPct}%</div></div>
              </div>

              <div style={{marginBottom:10}}>
                <strong style={{fontSize:12,color:'var(--c-accent)'}}>Why the gap exists:</strong>
                <p style={{fontSize:13,color:'#1a1f36',marginTop:4}}>{g.why}</p>
              </div>
              <div style={{marginBottom:10}}>
                <strong style={{fontSize:12,color:'var(--c-accent)'}}>India\'s state today:</strong>
                <p style={{fontSize:13,color:'#1a1f36',marginTop:4}}>{g.indiaState}</p>
              </div>

              <div className="grid grid-2" style={{gap:12}}>
                <div>
                  <strong style={{fontSize:12,color:'var(--c-good)'}}>Our edge</strong>
                  <ul className="bullets">{g.ourEdge.map((e,i)=><li key={i}>{e}</li>)}</ul>
                </div>
                <div>
                  <strong style={{fontSize:12,color:'var(--c-warn)'}}>Capture plan</strong>
                  <ul className="bullets">{g.capturePlan.map((e,i)=><li key={i}>{e}</li>)}</ul>
                </div>
              </div>
              <div style={{marginTop:12,paddingTop:10,borderTop:'1px solid var(--c-border)'}}>
                <strong style={{fontSize:12,color:'var(--c-bad)'}}>Risks: </strong>
                <span style={{fontSize:12.5,color:'#1a1f36'}}>{g.risks.join(' · ')}</span>
              </div>
              <div className="callout" style={{marginTop:10}}>
                <strong>Y3 revenue target:</strong> ${g.revenueY3USDmn.toFixed(1)} mn
                ≈ ₹{(g.revenueY3USDmn*8.7).toFixed(1)} cr
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
