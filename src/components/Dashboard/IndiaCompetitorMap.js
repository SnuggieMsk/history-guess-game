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

// India outline — denser vertices than v1, especially on the Konkan + Coromandel
// coasts (relevant to the seafood thesis). ~95 vertices, derived from public-domain
// Natural Earth 1:50m + manual decimation. Includes Kashmir bulge, Sundarbans
// notch, Kutch peninsula. Lakshadweep + Andaman drawn separately.
const INDIA_OUTLINE = [
  // Northern frontier — Kashmir → Ladakh → Arunachal
  [34.5, 74.0], [35.2, 75.0], [35.5, 76.5], [35.4, 77.8], [35.0, 78.8], [34.5, 79.6],
  [33.5, 79.0], [32.5, 78.5], [31.5, 79.0], [30.5, 80.0], [30.2, 80.8],
  [30.0, 81.5], [29.5, 82.5], [28.5, 83.5], [27.8, 85.0], [27.0, 86.5],
  [27.0, 88.0], [27.0, 88.8], [27.5, 89.5], [27.0, 90.5], [27.5, 91.5],
  [28.0, 92.5], [28.5, 94.0], [29.0, 95.5], [28.5, 96.7], [27.5, 97.0],
  // East: Arunachal → Nagaland → Mizoram → Bangladesh border
  [27.0, 96.0], [26.0, 95.5], [25.0, 94.5], [24.0, 94.0], [23.0, 93.5],
  [22.0, 93.0], [21.5, 92.5], [22.0, 92.0], [22.5, 91.7],
  // Bangladesh notch (Sundarbans) — India re-emerges at WB coast
  [22.5, 89.0], [21.7, 88.0], [21.5, 87.5],
  // Odisha + AP coast — Konark, Visakhapatnam, Kakinada
  [21.0, 87.0], [20.5, 86.7], [20.0, 86.5], [19.5, 85.5], [19.0, 84.8],
  [18.5, 84.3], [18.0, 83.8], [17.5, 83.3], [17.0, 82.7], [16.5, 82.2],
  // AP delta: Krishna + Godavari mouths
  [16.2, 81.7], [16.0, 81.2], [15.9, 80.8], [15.5, 80.3],
  // Tamil Nadu + Pondicherry: Chennai → Cuddalore → Nagapattinam
  [14.5, 80.2], [13.0, 80.3], [12.0, 80.2], [11.5, 79.8], [10.7, 79.85],
  // Palk Strait + Rameshwaram tip
  [9.5, 79.3], [9.2, 78.9], [9.0, 78.5], [8.5, 78.1],
  // Kanyakumari (southernmost tip) — Cape Comorin
  [8.07, 77.55],
  // Kerala coast: Trivandrum → Kollam → Kochi → Calicut → Mangalore
  [8.5, 76.95], [9.0, 76.5], [9.5, 76.3], [10.0, 76.2], [10.5, 76.0],
  [11.0, 75.7], [11.5, 75.5], [12.0, 75.0], [12.8, 74.8],
  // Karnataka Karavali + Goa
  [13.5, 74.7], [14.5, 74.4], [15.0, 74.1], [15.5, 73.8],
  // KONKAN COAST — Vengurla → Ratnagiri → Dabhol → Alibag → Mumbai
  [16.0, 73.7], [16.5, 73.4], [17.0, 73.3], [17.5, 73.2], [18.0, 73.0],
  [18.5, 72.95], [18.95, 72.82], [19.2, 72.85], [19.6, 72.75],
  // Gujarat coast — Daman → Surat → Bharuch → Bhavnagar
  [20.4, 72.85], [21.0, 72.7], [21.5, 72.65], [21.8, 72.5], [21.9, 72.0],
  // Saurashtra peninsula — Diu → Veraval → Porbandar → Dwarka → Okha
  [21.5, 71.5], [20.9, 71.0], [20.8, 70.5], [21.0, 70.0], [21.5, 69.6],
  [22.0, 69.2], [22.5, 69.0], [22.4, 68.55],
  // Kutch — Mandvi → Kandla → Bhuj → Lakhpat → Indo-Pak border
  [22.85, 68.4], [23.5, 68.5], [23.7, 68.7], [24.0, 68.8], [24.7, 68.7],
  // Rajasthan border up
  [25.5, 70.0], [26.5, 70.5], [27.5, 71.0], [28.5, 72.0], [29.5, 73.0],
  [30.5, 73.5], [31.5, 74.0], [32.5, 74.5], [33.5, 74.0], [34.5, 74.0],
];

// Lakshadweep (10 islands) — schematic positions
const LAKSHADWEEP = [
  [12.5, 73.0], [12.0, 72.7], [11.5, 73.0], [11.0, 72.7], [10.5, 72.6],
  [10.2, 72.3], [10.0, 73.0], [9.5, 72.5], [9.0, 73.5], [8.5, 73.0],
];

// Andaman & Nicobar (representative outline) — north-south island chain
const ANDAMAN_NICOBAR = [
  [13.5, 92.7], [13.0, 92.9], [12.0, 92.85], [11.7, 92.7], [11.5, 92.7],
  [10.5, 92.5], [9.5, 92.7], [8.5, 93.0], [7.5, 93.5], [7.0, 93.7],
  [6.8, 93.85], [7.0, 93.9], [8.0, 93.5], [9.0, 93.2], [10.0, 93.0],
  [11.0, 92.95], [12.0, 93.0], [13.0, 93.0], [13.5, 92.95], [13.5, 92.7],
];

// Major rivers — for editorial context
const RIVERS = {
  ganga: [[30.0, 78.5], [29.5, 78.0], [28.5, 79.0], [27.5, 80.5], [26.5, 82.5], [25.3, 83.0], [25.0, 85.0], [24.0, 87.0], [22.5, 88.5], [21.7, 88.0]],
  brahmaputra: [[27.5, 95.5], [27.0, 94.0], [26.5, 92.5], [26.0, 91.5], [25.5, 90.0], [24.5, 89.5], [22.5, 90.5]],
  godavari: [[19.5, 73.5], [19.5, 76.0], [18.5, 78.5], [17.5, 80.5], [17.0, 81.5], [16.5, 82.2]],
  krishna: [[18.0, 73.5], [17.5, 75.0], [16.8, 77.5], [16.5, 79.5], [16.0, 80.5], [15.7, 80.7]],
  cauvery: [[12.5, 75.5], [12.3, 76.5], [11.8, 78.0], [11.0, 79.0], [10.8, 79.7]],
};

export default function IndiaCompetitorMap() {
  const [filter, setFilter] = useState('ALL');
  const [showLanes, setShowLanes] = useState(true);
  const [showPorts, setShowPorts] = useState(true);

  const filtered = filter === 'ALL' ? competitorPlants : competitorPlants.filter(p => p.companyId === filter);
  const filteredLanes = supplyChainLanes.filter(l => {
    const fromPlant = competitorPlants.find(p => p.id === l.from);
    return filter === 'ALL' || (fromPlant && fromPlant.companyId === filter);
  });

  const toPath = (coords, close = true) => coords.map(([lat, lng], i) => {
    const [x, y] = project(lat, lng);
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ') + (close ? ' Z' : '');

  const indiaPath = toPath(INDIA_OUTLINE);
  const andamanPath = toPath(ANDAMAN_NICOBAR);

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
        {/* Bay of Bengal / Arabian Sea graticule (subtle) */}
        {[10, 15, 20, 25, 30].map(lat => (
          <line key={`p-${lat}`}
            x1="0" y1={project(lat, 68)[1]} x2={W} y2={project(lat, 68)[1]}
            stroke="#ece5d3" strokeWidth="0.4"/>
        ))}
        {[70, 75, 80, 85, 90].map(lng => (
          <line key={`m-${lng}`}
            x1={project(8, lng)[0]} y1="0" x2={project(8, lng)[0]} y2={H}
            stroke="#ece5d3" strokeWidth="0.4"/>
        ))}

        {/* India mainland outline */}
        <path d={indiaPath} fill="#f3eed8" stroke="#a8997a" strokeWidth="1.4" strokeLinejoin="round" />

        {/* Major rivers — for context */}
        {Object.entries(RIVERS).map(([name, coords]) => (
          <path key={name} d={toPath(coords, false)}
            fill="none" stroke="#a4b8c7" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
        ))}

        {/* Lakshadweep islands */}
        {LAKSHADWEEP.map(([lat, lng], i) => {
          const [x, y] = project(lat, lng);
          return <circle key={`lak-${i}`} cx={x} cy={y} r="1.4" fill="#a8997a"/>;
        })}

        {/* Andaman & Nicobar (separate landmass) */}
        <path d={andamanPath} fill="#f3eed8" stroke="#a8997a" strokeWidth="1" strokeLinejoin="round"/>
        <text x={project(11, 93)[0] + 12} y={project(11, 93)[1]}
          fontSize="9" fill="#5c6272" fontFamily="Georgia,serif" fontStyle="italic">
          Andaman &amp; Nicobar
        </text>

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
