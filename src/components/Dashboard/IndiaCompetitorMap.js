import React, { useState } from 'react';
import { competitorPlants, plantTypeColors, portsAndAirports, supplyChainLanes } from '../../data/v2CompetePlants';

// India-wide competitor + port/airport SVG map.
// Lat range: 8°N-30°N · Lng range: 68°E-92°E

const W = 920, H = 720;
const LAT = [8, 30];
const LNG = [68, 92];
const project = (lat, lng) => [
  ((lng - LNG[0]) / (LNG[1] - LNG[0])) * W,
  ((LAT[1] - lat) / (LAT[1] - LAT[0])) * H,
];

const COMPANY_FILTER = ['ALL','avanti','apex','nekkanti','devi','ifbAgro','gadre','coastalCorp','falcon','sandhyaAqua','us'];

// Highly-stylised India outline (approximate vertices).
const INDIA_OUTLINE = [
  [34.0, 74.0], [34.5, 76.0], [35.0, 78.5], [34.0, 81.0], [33.0, 82.5], [31.5, 84.0],
  [30.0, 84.5], [29.0, 86.0], [28.0, 88.5], [27.0, 89.5], [26.0, 91.0], [25.0, 92.5],
  [24.0, 92.0], [23.0, 91.5], [22.0, 91.5], [22.5, 90.0], [21.5, 88.0], [20.0, 87.0],
  [18.5, 85.0], [16.5, 82.0], [14.0, 80.5], [12.0, 80.0], [10.0, 79.5], [8.5, 78.0],
  [8.0, 77.0], [9.0, 76.0], [10.5, 75.5], [12.0, 75.0], [14.0, 74.0], [16.0, 73.5],
  [18.0, 72.8], [20.0, 72.7], [22.0, 70.0], [23.5, 68.5], [24.5, 68.5], [26.0, 70.0],
  [27.5, 71.0], [29.0, 72.5], [30.5, 73.0], [32.0, 74.5], [34.0, 74.0],
];

export default function IndiaCompetitorMap() {
  const [filter, setFilter] = useState('ALL');
  const [showLanes, setShowLanes] = useState(true);
  const [showPorts, setShowPorts] = useState(true);

  const filtered = filter === 'ALL' ? competitorPlants : competitorPlants.filter(p => p.companyId === filter);
  const filteredLanes = supplyChainLanes.filter(l => {
    const fromPlant = competitorPlants.find(p => p.id === l.from);
    return filter === 'ALL' || (fromPlant && fromPlant.companyId === filter);
  });

  const indiaPath = INDIA_OUTLINE.map(([lat, lng], i) => {
    const [x, y] = project(lat, lng);
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ') + ' Z';

  return (
    <div className="india-map-wrap">
      <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        {COMPANY_FILTER.map(c => (
          <button key={c} onClick={() => setFilter(c)} style={{
            padding: '5px 12px', border: '1px solid var(--c-border)', borderRadius: 999,
            cursor: 'pointer', fontSize: 11, fontWeight: 600,
            background: filter === c ? 'var(--c-accent)' : 'var(--c-surface)',
            color: filter === c ? '#fff' : 'var(--c-text)',
          }}>{c === 'us' ? 'Us (Konkan SF)' : c.replace(/([A-Z])/g, ' $1')}</button>
        ))}
        <label style={{ marginLeft: 12, fontSize: 11, color: 'var(--c-text-dim)', cursor: 'pointer' }}>
          <input type="checkbox" checked={showLanes} onChange={e => setShowLanes(e.target.checked)} /> Show supply-chain lanes
        </label>
        <label style={{ fontSize: 11, color: 'var(--c-text-dim)', cursor: 'pointer' }}>
          <input type="checkbox" checked={showPorts} onChange={e => setShowPorts(e.target.checked)} /> Show ports + airports
        </label>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', background: '#fbf8f1', borderRadius: 6, border: '1px solid var(--c-border)' }}>
        {/* India outline */}
        <path d={indiaPath} fill="#f3eed8" stroke="#cdc4ae" strokeWidth="1.4" />

        {/* State name labels (rough positions) */}
        {[
          { name: 'Maharashtra', lat: 19.5, lng: 75.5 },
          { name: 'Gujarat', lat: 22.5, lng: 71.5 },
          { name: 'Andhra Pradesh', lat: 15.5, lng: 79.5 },
          { name: 'Tamil Nadu', lat: 11.0, lng: 78.5 },
          { name: 'Kerala', lat: 10.5, lng: 76.5 },
          { name: 'Karnataka', lat: 14.5, lng: 76.0 },
          { name: 'Odisha', lat: 20.5, lng: 84.5 },
          { name: 'West Bengal', lat: 23.0, lng: 87.5 },
          { name: 'Lakshadweep', lat: 11.5, lng: 73.0 },
        ].map(s => {
          const [x, y] = project(s.lat, s.lng);
          return <text key={s.name} x={x} y={y} fontSize="10" fill="#8a8f9a" fontFamily="Georgia,serif" fontStyle="italic">{s.name}</text>;
        })}

        {/* Supply chain lanes */}
        {showLanes && filteredLanes.map((lane, i) => {
          const fromNode = competitorPlants.find(p => p.id === lane.from) || portsAndAirports.find(p => p.id === lane.from);
          const toNode = competitorPlants.find(p => p.id === lane.to) || portsAndAirports.find(p => p.id === lane.to);
          if (!fromNode || !toNode) return null;
          const [x1, y1] = project(fromNode.lat, fromNode.lng);
          const [x2, y2] = project(toNode.lat, toNode.lng);
          return (
            <line key={'l-'+i} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={lane.us ? '#a8322d' : '#5c6272'}
              strokeWidth={lane.us ? 2 : 1.2}
              strokeDasharray={lane.us ? null : '3 3'}
              strokeOpacity={lane.us ? 0.85 : 0.45} />
          );
        })}

        {/* Plant markers */}
        {filtered.map(p => {
          const [x, y] = project(p.lat, p.lng);
          const color = plantTypeColors[p.type] || '#0d3b66';
          const isUs = p.companyId === 'us';
          return (
            <g key={p.id}>
              <circle cx={x} cy={y} r={isUs ? 9 : 5}
                fill={color} stroke="#fbf8f1" strokeWidth={isUs ? 2.5 : 1.5}
                opacity={filter === 'ALL' || filter === p.companyId ? 1 : 0.25} />
              {(filter !== 'ALL' || isUs) && (
                <text x={x + 9} y={y + 3} fontSize="9.5" fill="#1a1f36" fontWeight={isUs ? 700 : 500}
                  fontFamily="Georgia,serif">
                  {p.plant.split(' ')[0]}
                </text>
              )}
            </g>
          );
        })}

        {/* Ports + airports */}
        {showPorts && portsAndAirports.map(p => {
          const [x, y] = project(p.lat, p.lng);
          const isPort = p.type === 'Sea port';
          return (
            <g key={p.id}>
              <rect x={x-5} y={y-5} width="10" height="10" rx="1.5"
                fill={isPort ? '#b8860b' : '#0d3b66'} stroke="#fbf8f1" strokeWidth="1.2" opacity="0.85" />
              <text x={x} y={y+3} fontSize="8" textAnchor="middle"
                fill="#fff" fontWeight="700">{isPort ? '⚓' : '✈'}</text>
            </g>
          );
        })}

        {/* Lakshadweep + Andamans inset markers */}
        <text x={project(11, 72.2)[0] - 30} y={project(11, 72.2)[1] - 12} fontSize="9" fill="#5c6272" fontFamily="Georgia,serif" fontStyle="italic">
          Lakshadweep
        </text>

        {/* Map title */}
        <text x="20" y="30" fontSize="14" fill="#1a1f36" fontFamily="Georgia,serif" fontWeight="700">
          India Competitor Plants + Export Infrastructure
        </text>
        <text x="20" y="48" fontSize="10" fill="#5c6272">
          {filtered.length} plants {showLanes ? `· ${filteredLanes.length} supply lanes` : ''} {showPorts ? `· ${portsAndAirports.length} ports/airports` : ''}
        </text>
      </svg>

      <div style={{ marginTop: 12, fontSize: 11, color: 'var(--c-text-dim)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {Object.entries(plantTypeColors).map(([k, v]) => (
            <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <span style={{ display: 'inline-block', width: 9, height: 9, background: v, borderRadius: '50%' }} />
              {k}
            </span>
          ))}
        </div>
        <div style={{ marginTop: 6, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <span style={{ display: 'inline-block', width: 11, height: 11, background: '#b8860b', borderRadius: 2, color: '#fff', fontSize: 8, textAlign: 'center', lineHeight: '11px', fontWeight: 700 }}>⚓</span> Sea port
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <span style={{ display: 'inline-block', width: 11, height: 11, background: '#0d3b66', borderRadius: 2, color: '#fff', fontSize: 8, textAlign: 'center', lineHeight: '11px', fontWeight: 700 }}>✈</span> Airport
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <svg width="20" height="6"><line x1="0" y1="3" x2="20" y2="3" stroke="#a8322d" strokeWidth="2" /></svg> Our planned lanes
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <svg width="20" height="6"><line x1="0" y1="3" x2="20" y2="3" stroke="#5c6272" strokeWidth="1.2" strokeDasharray="3 3" /></svg> Competitor lanes
          </span>
        </div>
      </div>
    </div>
  );
}
