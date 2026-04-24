import React from 'react';
import { months, calendarHeatmap, buyingSpikes } from '../../../data/calendar';

const HEAT = ['#f0ead9','#dac99c','#c5a565','#b0833f','#8c5a2b'];

export default function ExportCalendar() {
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">Markets</div>
        <h1 className="sec-title">Export Destination Calendar</h1>
        <p className="sec-sub">
          Which products go where, in which months. Heatmap intensity (0-3): off-season →
          peak. Built from buyer purchasing rhythms (Lent, Ramadan, CNY, US holidays,
          Japan year-end), India catch seasons and tariff windows.
        </p>
      </div>

      <div className="card" style={{overflowX:'auto'}}>
        <table className="cal-tbl">
          <thead>
            <tr>
              <th style={{width:240,textAlign:'left'}}>Product / Market</th>
              {months.map(m => <th key={m}>{m}</th>)}
              <th style={{width:200,textAlign:'left'}}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {calendarHeatmap.map(row => (
              <tr key={row.product}>
                <td className="prod">{row.product}</td>
                {row.data.map((v,i) => (
                  <td key={i} title={`${row.product} · ${months[i]} · intensity ${v}/3`}
                      style={{background: HEAT[v+1] || HEAT[1], color: v>=2?'#ffffff':'#1a1f36', fontWeight:v===3?700:400}}>
                    {v === 0 ? '·' : v}
                  </td>
                ))}
                <td className="notes">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{display:'flex',gap:14,marginTop:14,fontSize:11,color:'var(--c-text-dim)',flexWrap:'wrap'}}>
        <span style={{display:'inline-flex',alignItems:'center',gap:5}}><span style={{display:'inline-block',width:14,height:14,background:HEAT[1]}}></span> 0 — off-season</span>
        <span style={{display:'inline-flex',alignItems:'center',gap:5}}><span style={{display:'inline-block',width:14,height:14,background:HEAT[2]}}></span> 1 — light</span>
        <span style={{display:'inline-flex',alignItems:'center',gap:5}}><span style={{display:'inline-block',width:14,height:14,background:HEAT[3]}}></span> 2 — normal</span>
        <span style={{display:'inline-flex',alignItems:'center',gap:5}}><span style={{display:'inline-block',width:14,height:14,background:HEAT[4]}}></span> 3 — peak</span>
      </div>

      <div className="section-block">
        <h2>Cultural / religious buying spikes (premium pricing windows)</h2>
        <div className="grid grid-2">
          {buyingSpikes.map((s, i) => (
            <div className="card" key={i}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
                <h3 style={{fontSize:15,color:'var(--c-text)',fontWeight:600}}>{s.event}</h3>
                <span className="pill pill-good">+{s.surchargePct}%</span>
              </div>
              <p style={{fontSize:12,color:'var(--c-text-dim)',marginBottom:6}}><strong style={{color:'var(--c-accent)'}}>Window:</strong> {s.window}</p>
              <p style={{fontSize:12,color:'#1a1f36',marginBottom:6}}><strong style={{color:'var(--c-accent)'}}>Markets:</strong> {s.markets.join(' · ')}</p>
              <p style={{fontSize:12,color:'#1a1f36'}}><strong style={{color:'var(--c-accent)'}}>Best species:</strong> {s.species.join(' · ')}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cal-tbl { width:100%; border-collapse:collapse; font-size:12px; }
        .cal-tbl th { background:var(--c-surface-2); color:var(--c-text-dim); font-weight:600; padding:8px 6px; text-align:center; border-bottom:2px solid var(--c-border-strong); font-size:11px; text-transform:uppercase; letter-spacing:.8px;}
        .cal-tbl td { padding:8px 6px; text-align:center; border-bottom:1px solid var(--c-border); font-size:11.5px; }
        .cal-tbl td.prod { text-align:left; font-weight:500; color:var(--c-text); }
        .cal-tbl td.notes { text-align:left; font-size:11px; color:var(--c-text-dim); font-style:italic; }
      `}</style>
    </>
  );
}
