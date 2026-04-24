import React from 'react';
import { implementationRoadmap } from '../../../data/operations';

const PHASE_COLOR = {
  'Pre-construction':'#7a5b8c',
  'Construction':'#0d3b66',
  'Commissioning':'#c5a565',
  'Y1 Operations':'#2d6a4f',
  'Y2 Expansion':'#b8860b',
};

export default function Roadmap() {
  // Group by phase for the grouped view
  const phases = {};
  implementationRoadmap.forEach(r => { (phases[r.phase] ||= []).push(r); });

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">Execution</div>
        <h1 className="sec-title">36-Month Implementation Roadmap</h1>
        <p className="sec-sub">
          From land due-diligence to first EU export shipments, in 36 months. Phased
          across pre-construction, construction, commissioning, and operations.
          Critical path: EU/USFDA establishment approval (M15-M24).
        </p>
      </div>

      {Object.entries(phases).map(([phase, items]) => (
        <div className="card" key={phase} style={{marginBottom:14, borderLeft:`3px solid ${PHASE_COLOR[phase]}`}}>
          <h3 style={{fontSize:15,color:PHASE_COLOR[phase],fontWeight:600,marginBottom:10}}>{phase}</h3>
          <div className="rd-grid">
            {items.map((it,i) => (
              <div key={i} className="rd-item">
                <div className="rd-month">{it.month}</div>
                <div className="rd-text">{it.activity}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="callout">
        <strong>Critical-path milestones:</strong>
        <ul style={{marginTop:6,paddingLeft:18}}>
          <li style={{margin:'4px 0',color:'#d8e3f4',fontSize:13}}><strong>M-1:</strong> Term loan sanction + PMMSY DPR submitted (without this, capex stalls)</li>
          <li style={{margin:'4px 0',color:'#d8e3f4',fontSize:13}}><strong>M9:</strong> Plant commissioning (1-month buffer for shake-down)</li>
          <li style={{margin:'4px 0',color:'#d8e3f4',fontSize:13}}><strong>M13:</strong> First export shipment to GCC/SEA (no EU/USFDA approval needed)</li>
          <li style={{margin:'4px 0',color:'#d8e3f4',fontSize:13}}><strong>M18:</strong> USFDA establishment audit (90% of US import volume gated on this)</li>
          <li style={{margin:'4px 0',color:'#d8e3f4',fontSize:13}}><strong>M24:</strong> EU establishment number live (unlocks 30%+ of revenue potential)</li>
          <li style={{margin:'4px 0',color:'#d8e3f4',fontSize:13}}><strong>M30:</strong> Cooking + breading line live (value-added margin uplift)</li>
        </ul>
      </div>

      <style>{`
        .rd-grid { display:flex; flex-direction:column; gap:8px; }
        .rd-item { display:flex; gap:14px; padding:8px 10px; background:rgba(76,201,240,.04); border-radius:8px; }
        .rd-month { font-size:11px; font-weight:700; color:var(--c-accent); width:90px; flex-shrink:0; padding-top:2px; }
        .rd-text { font-size:13px; color:#cbd6e8; }
      `}</style>
    </>
  );
}
