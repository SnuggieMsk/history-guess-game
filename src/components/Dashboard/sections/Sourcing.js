import React from 'react';
import { sourcingNodes, outboundNodes, purandarPlant } from '../../../data/sourcing';

const TYPE_COLOR = {
  'Major fish market':    '#c5a565',
  'Major landing':        '#0d3b66',
  'Mid landing':          '#7fbcd0',
  'Vannamei farm cluster':'#c5a565',
  'Mixed shrimp + wild':  '#7a5b8c',
  'Pole-and-line tuna':   '#2d6a4f',
  'Wild black tiger':     '#a8322d',
  'Sea port':             '#b8860b',
  'Air cargo':            '#0d3b66',
};

// Crude SVG bounding box for India west coast view: lat 8-25, lng 65-90
const projectX = (lng) => ((lng - 65) / 25) * 760;
const projectY = (lat) => ((25 - lat) / 17) * 540;

export default function Sourcing() {
  const allNodes = [...sourcingNodes, ...outboundNodes.map(o=>({...o, isOutbound:true, lat:18.4+Math.random()*0.5, lng:73}))];

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">Geography</div>
        <h1 className="sec-title">Sourcing & Logistics Map</h1>
        <p className="sec-sub">
          Inputs flow from {sourcingNodes.length} landing/farm nodes → 3-acre Purandar plant →
          5 outbound nodes (sea + air). Distances and lead times shown for each lane.
        </p>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3>Schematic map (Konkan + AP belt)</h3>
          <svg viewBox="0 0 760 540" style={{width:'100%',height:'auto',background:'#fbf8f1',borderRadius:10,border:'1px solid var(--c-border)'}}>
            {/* simple coastline guide */}
            <path d="M 230 60 Q 240 200 215 270 Q 195 330 195 380 Q 200 420 220 470 Q 250 510 290 520"
                  stroke="#e0d9c8" strokeWidth="2" fill="none" strokeDasharray="3 4"/>
            {/* AP coast */}
            <path d="M 380 380 Q 470 350 550 280 Q 600 220 600 160" stroke="#e0d9c8" strokeWidth="2" fill="none" strokeDasharray="3 4"/>

            {/* Plant marker */}
            <g>
              <circle cx={projectX(purandarPlant.lng)} cy={projectY(purandarPlant.lat)} r="11" fill="#0d3b66" stroke="#fff" strokeWidth="2"/>
              <text x={projectX(purandarPlant.lng)+15} y={projectY(purandarPlant.lat)+4} fontSize="11" fill="#1a1f36" fontWeight="600">
                Purandar Plant (3 ac)
              </text>
            </g>

            {/* Konkan + AP nodes */}
            {sourcingNodes.filter(n => typeof n.lat === 'number').map(n => {
              const x = projectX(n.lng), y = projectY(n.lat);
              const c = TYPE_COLOR[n.type] || '#5c6272';
              return (
                <g key={n.id}>
                  <line x1={projectX(purandarPlant.lng)} y1={projectY(purandarPlant.lat)} x2={x} y2={y}
                        stroke={c} strokeOpacity=".25" strokeWidth="1"/>
                  <circle cx={x} cy={y} r="5" fill={c} stroke="#fbf8f1" strokeWidth="1.5"/>
                  <text x={x+8} y={y+3} fontSize="9.5" fill="#1a1f36">{n.name.split(' (')[0]}</text>
                </g>
              );
            })}
          </svg>
          <div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:10,fontSize:11}}>
            {Object.entries(TYPE_COLOR).slice(0,7).map(([k,v]) => (
              <span key={k} style={{display:'inline-flex',alignItems:'center',gap:4,color:'var(--c-text-dim)'}}>
                <span style={{display:'inline-block',width:10,height:10,background:v,borderRadius:'50%'}}></span>{k}
              </span>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>Purandar plant — pros, cons, mitigations</h3>
          <div style={{marginBottom:12}}>
            <span className="pill pill-good">PROS</span>
            <ul className="bullets" style={{marginTop:6}}>{purandarPlant.remarksPro.map((p,i)=><li key={i}>{p}</li>)}</ul>
          </div>
          <div style={{marginBottom:12}}>
            <span className="pill pill-bad">CONS</span>
            <ul className="bullets" style={{marginTop:6}}>{purandarPlant.remarksCon.map((p,i)=><li key={i}>{p}</li>)}</ul>
          </div>
          <div>
            <span className="pill pill-info">MITIGATIONS</span>
            <ul className="bullets" style={{marginTop:6}}>{purandarPlant.mitigations.map((p,i)=><li key={i}>{p}</li>)}</ul>
          </div>
        </div>
      </div>

      <div className="section-block">
        <h2>Inbound — sourcing nodes</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Node</th><th>State</th><th>Type</th><th className="num">Km</th><th className="num">Hrs</th><th className="num">TPD</th><th>Primary species</th></tr></thead>
            <tbody>
              {sourcingNodes.map(n => (
                <tr key={n.id}>
                  <td>{n.name}</td>
                  <td>{n.state}</td>
                  <td><span className="pill pill-mute">{n.type}</span></td>
                  <td className="num">{n.km}</td>
                  <td className="num">{n.hrs}</td>
                  <td className="num">{n.throughputTPD}</td>
                  <td style={{fontSize:12}}>{n.primarySpecies.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block">
        <h2>Outbound — port and airport options</h2>
        <div className="grid grid-2">
          {outboundNodes.map(o => (
            <div className="card" key={o.id}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <h3 style={{fontSize:15,color:'var(--c-text)',fontWeight:600}}>{o.name}</h3>
                <span className="pill pill-info">{o.type}</span>
              </div>
              <div style={{display:'flex',gap:14,margin:'10px 0',fontSize:12}}>
                <span style={{color:'var(--c-text-dim)'}}>Distance: <strong style={{color:'var(--c-text)'}}>{o.km} km</strong></span>
                <span style={{color:'var(--c-text-dim)'}}>Drive: <strong style={{color:'var(--c-text)'}}>{o.hrs} hrs</strong></span>
              </div>
              <p style={{fontSize:12.5,color:'#1a1f36'}}>{o.role}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
