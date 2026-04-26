import React from 'react';
import MaharashtraMap from '../MaharashtraMap';
import { landingCentres } from '../../../data/maharashtraMap';

export default function MaharashtraView() {
  const byDistrict = landingCentres.reduce((acc, n) => {
    acc[n.district] = (acc[n.district] || 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Maharashtra Geography</div>
        <h1 className="sec-title">Where the Supply Comes From — and Where it Goes</h1>
        <p className="sec-sub">
          Interactive map of Maharashtra's Konkan coast with every named landing centre
          we source from, the Purandar plant site, and the 4 outbound nodes (JNPT
          container, CSMIA + PNQ air, future Purandar airport). Hover any landing for
          species + capacity.
        </p>
      </div>

      <div className="card">
        <MaharashtraMap />
      </div>

      <div className="section-block grid grid-3">
        <div className="card">
          <h3>Coast covered</h3>
          <div className="big">720 km</div>
          <div className="sub">Palghar to Sindhudurg — full Konkan</div>
        </div>
        <div className="card">
          <h3>Landing centres mapped</h3>
          <div className="big">{landingCentres.length}</div>
          <div className="sub">6 coastal districts</div>
        </div>
        <div className="card">
          <h3>Outbound infrastructure</h3>
          <div className="big">4 nodes</div>
          <div className="sub">JNPT · CSMIA · PNQ · Purandar (future)</div>
        </div>
      </div>

      <div className="section-block">
        <h2>Landing centres by district</h2>
        <div className="grid grid-3">
          {Object.entries(byDistrict).map(([d, count]) => {
            const nodes = landingCentres.filter(n => n.district === d);
            const totalTPD = nodes.reduce((s, n) => s + n.tpd, 0);
            return (
              <div className="card" key={d}>
                <h3>{d}</h3>
                <div className="big" style={{ fontSize: 22 }}>{count} <span style={{ fontSize: 13, color: 'var(--c-text-dim)', fontWeight: 400 }}>landings</span></div>
                <div className="sub" style={{ marginBottom: 10 }}>~{totalTPD} TPD combined</div>
                <ul className="bullets" style={{ fontSize: 12 }}>
                  {nodes.map((n, i) => (
                    <li key={i}>
                      <strong>{n.name}</strong> · {n.size} · {n.tpd} TPD
                      <div style={{ color: 'var(--c-text-dim)', fontSize: 11 }}>{n.species}</div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
