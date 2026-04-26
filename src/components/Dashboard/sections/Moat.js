import React from 'react';
import { moatLayers } from '../../../data/strategy';

const DEFENSIBILITY_PILL = (d) => {
  if (d.startsWith('Very high')) return 'pill-good';
  if (d.startsWith('High')) return 'pill-good';
  if (d.startsWith('Medium-high')) return 'pill-info';
  if (d.startsWith('Medium')) return 'pill-info';
  return 'pill-warn';
};

export default function Moat() {
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">Unbeatable</div>
        <h1 className="sec-title">MOAT Strategy — 7 Defensible Layers</h1>
        <p className="sec-sub">
          A moat is not a single thing — it's compounding layers. We build seven defensible
          layers across geography, cost, trust, channel, supplier, product, and brand. Each
          layer takes time, but together they create a position that competitors cannot replicate
          without replicating all of it.
        </p>
      </div>

      {moatLayers.map((m, i) => (
        <div className="card" key={i} style={{marginBottom:14, borderLeft:'3px solid var(--c-accent)'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:12,marginBottom:8}}>
            <div>
              <div style={{fontSize:11,color:'var(--c-text-dim)',letterSpacing:1.4,textTransform:'uppercase'}}>Layer {i+1}</div>
              <h3 style={{fontSize:17,color:'var(--c-text)',fontWeight:600}}>{m.layer}</h3>
            </div>
            <div style={{textAlign:'right'}}>
              <span className={`pill ${DEFENSIBILITY_PILL(m.defensibility)}`}>{m.defensibility}</span>
              <div style={{fontSize:11,color:'var(--c-text-dim)',marginTop:4}}>Build time: {m.timeToBuild}</div>
            </div>
          </div>
          <p style={{fontSize:13.5,color:'#1a1f36',lineHeight:1.6}}>{m.description}</p>
        </div>
      ))}

      <div className="callout">
        <strong>The compounding logic:</strong> Geography (Konkan-multispecies) gives us a starting niche.
        Cost stack (solar+subsidy) gives us pricing power. Trust (lab+QR traceability) lets us serve EU/US
        premium. Channel (live air-export) creates relationship anchors. Supplier (boat-owner equity pool)
        locks supply. Product (gap species) defends margin. Brand (private-label specialist) makes us sticky.
        No single competitor has all seven. By Y3-Y4, dislodging us requires replicating ₹40-60 cr of capex
        plus 4+ years of relationship building.
      </div>
    </>
  );
}
