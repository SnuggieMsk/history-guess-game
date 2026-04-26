import React, { useState } from 'react';
import { newsEvents, eventTypeColors, eventCategoryRollup } from '../../../data/v2SimNews';

export default function SimNewsTimelineV2() {
  const [filter, setFilter] = useState('all');
  const types = ['all', ...new Set(newsEvents.map(e => e.type))];
  const filtered = filter === 'all' ? newsEvents : newsEvents.filter(e => e.type === filter);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · L4 Simulator News Layer</div>
        <h1 className="sec-title">10 Years of Shocks — Visual Timeline</h1>
        <p className="sec-sub">
          {newsEvents.length} major events 2016-2026 affecting Indian seafood profitability.
          Cyclones · disease · pandemic · freight crises · FX moves · tariff escalations · trade deals.
          Each event mapped to its simulator effect; use to understand why historical margins moved.
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Total events</h3><div className="big">{eventCategoryRollup.totalEvents}</div></div>
        <div className="card"><h3>Cyclones (10 yr)</h3><div className="big">{eventCategoryRollup.cycloneCount}</div><div className="sub">~1 every 2 yr</div></div>
        <div className="card"><h3>Disease outbreaks</h3><div className="big">{eventCategoryRollup.diseaseCount}</div><div className="sub">3 major in 10 yr</div></div>
        <div className="card"><h3>Tariff/freight shocks</h3><div className="big">{eventCategoryRollup.tariffCount + eventCategoryRollup.freightCount}</div><div className="sub">market access risks</div></div>
      </div>

      <div className="callout">
        <strong>Operator insight:</strong> {eventCategoryRollup.insight}
      </div>

      <div style={{display:'flex',gap:6,flexWrap:'wrap',marginTop:18,marginBottom:14}}>
        {types.map(t => (
          <button key={t} onClick={() => setFilter(t)} style={{
            padding:'5px 12px', border:`1px solid ${eventTypeColors[t] || 'var(--c-border)'}`, borderRadius:999,
            cursor:'pointer', fontSize:11, fontWeight:600,
            background: filter === t ? (eventTypeColors[t] || 'var(--c-accent)') : 'transparent',
            color: filter === t ? '#fff' : (eventTypeColors[t] || 'var(--c-text)'),
          }}>{t}</button>
        ))}
      </div>

      <div className="card">
        <div style={{position:'relative',paddingLeft:20,borderLeft:'2px solid var(--c-border)'}}>
          {filtered.map((e, i) => {
            const color = eventTypeColors[e.type] || 'var(--c-accent)';
            return (
              <div key={i} style={{position:'relative',marginBottom:14}}>
                <span style={{position:'absolute',left:-26,top:5,width:12,height:12,background:color,borderRadius:'50%',border:'2px solid var(--c-bg)'}} />
                <div style={{display:'flex',gap:10,alignItems:'flex-start',flexWrap:'wrap'}}>
                  <span style={{fontFamily:'Georgia,serif',fontSize:13,fontWeight:700,color:color,width:70,flexShrink:0}}>{e.date}</span>
                  <div style={{flex:1}}>
                    <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:4,alignItems:'center'}}>
                      <span className="pill" style={{background:color+'22',color,border:`1px solid ${color}55`}}>{e.type}</span>
                      <span style={{fontSize:11,color:'var(--c-text-dim)'}}>{e.region}</span>
                    </div>
                    <div style={{fontSize:13.5,fontWeight:600,color:'var(--c-text)'}}>{e.headline}</div>
                    <div style={{fontSize:12,color:'var(--c-text-dim)',marginTop:2}}>{e.impact}</div>
                    <div style={{fontSize:11,color:'var(--c-accent-2)',marginTop:4,fontFamily:'Menlo,monospace'}}>sim → {e.simEffect}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="callout" style={{marginTop:14}}>
        <strong>How to use with Market Simulator:</strong> Open Market Simulator → set Year to event year → review monthly margin curve.
        E.g. set Year 2019 → see Q2 collapse driven by EHP+WSSV outbreak. Set Year 2021 → see freight peak compression.
        Set Year 2025 → see USA tariff impact on USA-routed shipments. Each event explains a real margin movement in the simulator.
      </div>
    </>
  );
}
