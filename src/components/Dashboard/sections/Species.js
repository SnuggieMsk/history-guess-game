import React, { useState, useMemo } from 'react';
import { species, portfolioMix } from '../../../data/species';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
} from 'recharts';

const FLAG_PILL = { CORE: 'pill-good', VOLUME: 'pill-info', GAP: 'pill-warn' };

export default function Species() {
  const [filter, setFilter] = useState('ALL');
  const filtered = useMemo(() => filter === 'ALL' ? species : species.filter(s => s.flag === filter), [filter]);
  const flags = ['ALL','CORE','VOLUME','GAP'];

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">Products</div>
        <h1 className="sec-title">Species Portfolio</h1>
        <p className="sec-sub">
          16 species across farmed shrimp, wild marine fish, cephalopods and gap-opportunity finfish.
          Each flagged CORE (revenue anchor), VOLUME (cash-flow filler) or GAP (under-supplied premium niche).
        </p>
      </div>

      <div style={{display:'flex',gap:8,marginBottom:18,flexWrap:'wrap'}}>
        {flags.map(f => (
          <button key={f}
            onClick={() => setFilter(f)}
            className={`sp-tab ${filter===f?'active':''}`}>
            {f}{f!=='ALL' ? ` (${species.filter(s=>s.flag===f).length})` : ` (${species.length})`}
          </button>
        ))}
      </div>

      <div className="sp-grid">
        {filtered.map(s => (
          <div key={s.id} className="card sp-card">
            <div className="sp-card-head">
              <div>
                <div className="sp-card-cat">{s.category}</div>
                <h3 style={{color:'var(--c-text)',fontSize:16,fontWeight:600}}>{s.name}</h3>
              </div>
              <span className={`pill ${FLAG_PILL[s.flag]}`}>{s.flag}</span>
            </div>

            <div className="sp-stat-row">
              <div><div className="sp-stat-k">FOB</div><div className="sp-stat-v">${s.fobUSD_per_kg.toFixed(1)}/kg</div></div>
              <div><div className="sp-stat-k">GM</div><div className="sp-stat-v" style={{color:'var(--c-good)'}}>{s.grossMargin}%</div></div>
              <div><div className="sp-stat-k">India share</div><div className="sp-stat-v">{s.indiaShareOfWorld}%</div></div>
              <div><div className="sp-stat-k">MOQ</div><div className="sp-stat-v">{s.moqExportContainerMT} MT</div></div>
            </div>

            <div className="sp-section">
              <span className="sp-mini-label">Source regions</span>
              <p>{s.sourceRegions.join(' · ')}</p>
            </div>
            <div className="sp-section">
              <span className="sp-mini-label">Primary markets</span>
              <p>{s.primaryMarkets.join(' · ')}</p>
            </div>
            <div className="sp-section">
              <span className="sp-mini-label">Seasonality</span>
              <p>{s.seasonality}</p>
            </div>
            <div className="sp-section">
              <span className="sp-mini-label">Value-add potential</span>
              <p>{s.valueAddPotential}</p>
            </div>
            <p className="sp-note">{s.notes}</p>
          </div>
        ))}
      </div>

      <div className="section-block">
        <h2>Portfolio mix evolution</h2>
        <p className="sec-sub" style={{marginBottom:14}}>
          We start vannamei-heavy (45%) for cash flow and ramp gap-species + value-added every year.
          By Y5, vannamei is down to 32% and 25%+ of revenue comes from premium niches.
        </p>
        <div className="grid grid-3">
          {[['Y1', portfolioMix.year1],['Y3', portfolioMix.year3],['Y5', portfolioMix.year5]].map(([yr, mix]) => (
            <div className="card" key={yr}>
              <h3>{yr} mix</h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={mix} layout="vertical" margin={{top:5,right:8,left:8,bottom:0}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
                  <XAxis type="number" stroke="#5c6272" fontSize={10}/>
                  <YAxis type="category" dataKey="species" stroke="#5c6272" fontSize={10} width={130}/>
                  <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
                  <Bar dataKey="revenueShare" name="% revenue" fill="#0d3b66" radius={[0,5,5,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .sp-tab { background:transparent; color:var(--c-text-dim); border:1px solid var(--c-border); padding:6px 14px; border-radius:999px; cursor:pointer; font-size:12px; }
        .sp-tab.active { background:var(--c-accent); color:#ffffff; border-color:var(--c-accent); }
        .sp-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; }
        @media (max-width:880px){ .sp-grid{grid-template-columns:1fr;} }
        .sp-card-head { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:14px; gap:12px; }
        .sp-card-cat { font-size:10.5px; color:var(--c-accent); text-transform:uppercase; letter-spacing:1.4px; margin-bottom:4px; }
        .sp-stat-row { display:grid; grid-template-columns:repeat(4,1fr); gap:8px; padding:10px 0; border-top:1px solid var(--c-border); border-bottom:1px solid var(--c-border); margin-bottom:12px; }
        .sp-stat-k { font-size:10px; color:var(--c-text-dim); letter-spacing:.5px; text-transform:uppercase; }
        .sp-stat-v { font-size:14px; font-weight:600; color:var(--c-text); margin-top:2px; }
        .sp-section { margin-bottom:8px; }
        .sp-section p { font-size:12.5px; color:#1a1f36; }
        .sp-mini-label { font-size:10.5px; color:var(--c-text-dim); text-transform:uppercase; letter-spacing:1px; }
        .sp-note { font-size:12px; color:#5c6272; font-style:italic; padding:10px 12px; background:var(--c-surface-2); border:1px solid var(--c-border); border-radius:6px; margin-top:10px; }
      `}</style>
    </>
  );
}
