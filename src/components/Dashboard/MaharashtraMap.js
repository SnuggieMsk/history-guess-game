import React, { useState } from 'react';
import {
  mapViewBox, projectCoord, stateOutline, coastalDistricts, plant,
  landingCentres, outbound, cities, labelOffsets,
} from '../../data/maharashtraMap';

// Renders a stylised Maharashtra map focused on the coast.
// - State polygon with coastal districts highlighted
// - Landing centres sized by tpd, coloured by district
// - Outbound nodes (ports, airports) with differentiated icons
// - Plant location star

const DISTRICT_ACCENT = {
  'Ratnagiri':  '#0d3b66',
  'Sindhudurg': '#2d6a4f',
  'Raigad':     '#7a5b8c',
  'Palghar':    '#b8860b',
  'Mumbai':     '#a8322d',
  'Thane':      '#c5a565',
};

const SIZE_RADIUS = { small: 5, mid: 7, major: 10 };

export default function MaharashtraMap({ compact }) {
  const [hover, setHover] = useState(null);

  const polyPath = (coords) => {
    const pts = coords.map(([lat, lng]) => projectCoord(lat, lng).join(','));
    return `M${pts[0]} L${pts.slice(1).join(' L')} Z`;
  };

  const projected = {
    state:    polyPath(stateOutline),
    plant:    projectCoord(plant.lat, plant.lng),
    landings: landingCentres.map(n => ({ ...n, xy: projectCoord(n.lat, n.lng) })),
    outbound: outbound.map(n => ({ ...n, xy: projectCoord(n.lat, n.lng) })),
    cities:   cities.map(n => ({ ...n, xy: projectCoord(n.lat, n.lng) })),
  };

  return (
    <div className="mh-map-wrap">
      <svg
        viewBox={`0 0 ${mapViewBox.w} ${mapViewBox.h}`}
        style={{ width: '100%', height: 'auto', background: '#fbf8f1', borderRadius: 6 }}
      >
        {/* State outline */}
        <path d={projected.state} fill="#f0ead9" stroke="#cdc4ae" strokeWidth="1.2" />

        {/* Coastal district bands */}
        {coastalDistricts.map(d => (
          <path key={d.id} d={polyPath(d.polygon)} fill={d.color} opacity="0.75"
            stroke={DISTRICT_ACCENT[d.name] || '#cdc4ae'} strokeWidth="0.8" strokeOpacity="0.4" />
        ))}

        {/* Coast line */}
        <path
          d="M 17 0 Q 15 100 10 200 Q 5 300 0 400 Q 5 500 15 600 Q 30 670 50 700"
          stroke="#0d3b66" strokeWidth="1.4" fill="none" strokeDasharray="4 3" opacity="0.35"
        />

        {/* Connecting lines from landings to plant */}
        {projected.landings.map(n => (
          <line key={'ln-'+n.id}
            x1={projected.plant[0]} y1={projected.plant[1]}
            x2={n.xy[0]} y2={n.xy[1]}
            stroke={DISTRICT_ACCENT[n.district]}
            strokeOpacity={hover === n.id ? 0.6 : 0.15}
            strokeWidth={hover === n.id ? 1.4 : 0.9}
          />
        ))}

        {/* Cities */}
        {projected.cities.map(c => (
          <g key={c.id}>
            <circle cx={c.xy[0]} cy={c.xy[1]} r="3.5" fill="#8a8f9a" stroke="#fbf8f1" strokeWidth="0.8" />
            <text x={c.xy[0] + 6} y={c.xy[1] + 3} fontSize="9" fill="#5c6272" fontFamily="Georgia, serif">
              {c.name}
            </text>
          </g>
        ))}

        {/* Landing centres */}
        {projected.landings.map(n => {
          const off = labelOffsets[n.id] || { dx: 8, dy: 3 };
          const r = SIZE_RADIUS[n.size] || 5;
          const isHover = hover === n.id;
          return (
            <g key={n.id} style={{ cursor: 'pointer' }}
               onMouseEnter={() => setHover(n.id)} onMouseLeave={() => setHover(null)}>
              <circle
                cx={n.xy[0]} cy={n.xy[1]} r={isHover ? r+2 : r}
                fill={DISTRICT_ACCENT[n.district] || '#0d3b66'}
                stroke="#fbf8f1" strokeWidth="1.5"
              />
              <text x={n.xy[0] + off.dx} y={n.xy[1] + off.dy}
                    fontSize="9.5" fill="#1a1f36"
                    fontWeight={n.size === 'major' ? 700 : 500}
                    fontFamily="Georgia, serif">
                {n.name}
              </text>
            </g>
          );
        })}

        {/* Outbound nodes */}
        {projected.outbound.map(o => (
          <g key={o.id}>
            <rect x={o.xy[0]-7} y={o.xy[1]-7} width="14" height="14"
                  fill="#c5a565" stroke="#fbf8f1" strokeWidth="1.5" rx="2"/>
            <text x={o.xy[0]} y={o.xy[1]+3}
                  fontSize="9" textAnchor="middle" fontWeight="700"
                  fill={o.type === 'Sea port' ? '#fff' : '#1a1f36'}>
              {o.type === 'Sea port' ? '⚓' : '✈'}
            </text>
            <text x={o.xy[0]+10} y={o.xy[1]-8} fontSize="10" fill="#1a1f36" fontWeight="600"
                  fontFamily="Georgia, serif">
              {o.name}
            </text>
          </g>
        ))}

        {/* Plant star */}
        <g>
          <circle cx={projected.plant[0]} cy={projected.plant[1]} r="14"
                  fill="#a8322d" stroke="#fff" strokeWidth="2" />
          <text x={projected.plant[0]} y={projected.plant[1]+4}
                fontSize="15" textAnchor="middle" fill="#fff" fontWeight="700">★</text>
          {!compact && (
            <>
              <text x={projected.plant[0]+20} y={projected.plant[1]-6}
                    fontSize="12" fill="#1a1f36" fontWeight="700"
                    fontFamily="Georgia, serif">
                {plant.name}
              </text>
              <text x={projected.plant[0]+20} y={projected.plant[1]+10}
                    fontSize="10" fill="#5c6272" fontFamily="Georgia, serif">
                {plant.subtitle}
              </text>
            </>
          )}
        </g>

        {/* Hover panel */}
        {hover && (
          <g>
            {(() => {
              const n = projected.landings.find(l => l.id === hover);
              if (!n) return null;
              return (
                <g transform={`translate(${Math.min(n.xy[0]+18, mapViewBox.w - 230)} ${Math.max(10, n.xy[1] - 48)})`}>
                  <rect x="0" y="0" width="220" height="64" rx="4"
                        fill="#ffffff" stroke={DISTRICT_ACCENT[n.district] || '#cdc4ae'}
                        strokeWidth="1.2" filter="url(#mh-shadow)" />
                  <text x="12" y="20" fontSize="12" fontWeight="700" fill="#1a1f36"
                        fontFamily="Georgia, serif">
                    {n.name} · {n.district}
                  </text>
                  <text x="12" y="38" fontSize="10" fill="#5c6272">
                    {n.species}
                  </text>
                  <text x="12" y="54" fontSize="10" fill={DISTRICT_ACCENT[n.district]} fontWeight="700">
                    ≈ {n.tpd} TPD · {n.size}
                  </text>
                </g>
              );
            })()}
          </g>
        )}

        <defs>
          <filter id="mh-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#1a1f36" floodOpacity="0.12"/>
          </filter>
        </defs>
      </svg>

      {/* Legend */}
      <div className="mh-legend">
        <div className="mh-legend-row">
          {Object.entries(DISTRICT_ACCENT).map(([d, c]) => (
            <span key={d} className="mh-legend-item">
              <span className="mh-dot" style={{ background: c }} /> {d}
            </span>
          ))}
        </div>
        <div className="mh-legend-row">
          <span className="mh-legend-item">
            <span className="mh-dot" style={{ background: '#a8322d', width: 12, height: 12 }} /> Plant
          </span>
          <span className="mh-legend-item">
            <span className="mh-dot-rect" style={{ background: '#c5a565' }} /> Port / Airport
          </span>
          <span className="mh-legend-item">Bubble size = landing volume</span>
        </div>
      </div>

      <style>{`
        .mh-map-wrap { width: 100%; }
        .mh-legend { margin-top: 14px; font-size: 11.5px; color: var(--c-text-dim); }
        .mh-legend-row { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 6px; }
        .mh-legend-item { display: inline-flex; align-items: center; gap: 6px; }
        .mh-dot { display: inline-block; width: 10px; height: 10px; border-radius: 50%; border: 1px solid #fbf8f1; }
        .mh-dot-rect { display: inline-block; width: 11px; height: 11px; border-radius: 2px; }
      `}</style>
    </div>
  );
}
