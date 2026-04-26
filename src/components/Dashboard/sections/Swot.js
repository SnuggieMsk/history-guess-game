import React from 'react';
import { swot } from '../../../data/strategy';

const QUADS = [
  { key:'strengths',     title:'Strengths',     color:'#2d6a4f', cls:'pill-good' },
  { key:'weaknesses',    title:'Weaknesses',    color:'#a8322d', cls:'pill-bad'  },
  { key:'opportunities', title:'Opportunities', color:'#0d3b66', cls:'pill-info' },
  { key:'threats',       title:'Threats',       color:'#b8860b', cls:'pill-warn' },
];

export default function Swot() {
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">Strategy</div>
        <h1 className="sec-title">SWOT Analysis</h1>
        <p className="sec-sub">
          Internal (S/W) and external (O/T) factors. Strengths concentrated in greenfield modernity
          and capex efficiency; weaknesses in inland location and zero buyer relationships at start.
        </p>
      </div>

      <div className="grid grid-2">
        {QUADS.map(q => (
          <div key={q.key} className="card" style={{borderTop:`3px solid ${q.color}`}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
              <h3 style={{fontSize:16,color:'var(--c-text)',fontWeight:600}}>{q.title}</h3>
              <span className={`pill ${q.cls}`}>{swot[q.key].length} items</span>
            </div>
            <ul className="bullets">
              {swot[q.key].map((x,i) => <li key={i}>{x}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
