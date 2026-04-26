import React, { useState } from 'react';
import { indiaPortFlows, destinationCountries, lanes, competitorPrimaryLanes, monthlyExportPattern, shippingLineMarketShare, refrigeratedAirCarriers } from '../../../data/v2GlobalFlows';
import { ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';

// World map projection: simple equirectangular for visual clarity
// Lng: -180 to 180 → 0 to 1000; Lat: 70 to -55 → 0 to 500
const WORLD_W = 1000, WORLD_H = 500;
const projectWorld = (lat, lng) => [
  ((lng + 180) / 360) * WORLD_W,
  ((70 - lat) / 125) * WORLD_H,
];

const COLORS = ['#0d3b66','#a8322d','#c5a565','#2d6a4f','#7a5b8c','#b8860b','#5fb3e3','#92c7b6','#cdc4ae','#ef476f','#f4a261','#7fbcd0'];

export default function GlobalFlowsV2() {
  const [showCompetitor, setShowCompetitor] = useState(true);

  const monthData = Object.entries(monthlyExportPattern).map(([m,v]) => ({ month: m, exports: v }));

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · L7 Global Trade Flows</div>
        <h1 className="sec-title">India's Seafood Export Map — Ports, Lanes, Destinations</h1>
        <p className="sec-sub">
          {indiaPortFlows.length} Indian ports → {destinationCountries.length} destination markets via {lanes.length} primary lanes.
          Total India seafood exports FY24 ~₹{indiaPortFlows.reduce((s,p)=>s+p.valueINRcr,0).toLocaleString('en-IN')} cr.
          Layered with {competitorPrimaryLanes.length} competitor flows + 8 shipping lines + 7 air cargo carriers.
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>India ports</h3><div className="big">{indiaPortFlows.length}</div></div>
        <div className="card"><h3>Destinations</h3><div className="big">{destinationCountries.length}</div></div>
        <div className="card"><h3>Primary lanes</h3><div className="big">{lanes.length}</div></div>
        <div className="card"><h3>Total export FY24</h3><div className="big">₹{(indiaPortFlows.reduce((s,p)=>s+p.valueINRcr,0)/1000).toFixed(1)}k cr</div></div>
      </div>

      <div className="card" style={{marginTop:14}}>
        <h3>World flow map (India ports → destinations)</h3>
        <label style={{fontSize:11, color:'var(--c-text-dim)', cursor:'pointer'}}>
          <input type="checkbox" checked={showCompetitor} onChange={e=>setShowCompetitor(e.target.checked)}/> Show competitor flows
        </label>
        <svg viewBox={`0 0 ${WORLD_W} ${WORLD_H}`} style={{width:'100%', height:'auto', background:'#fbf8f1', borderRadius:4, border:'1px solid var(--c-border)', marginTop:10}}>
          {/* Equator + tropics guide lines */}
          <line x1="0" y1={projectWorld(0,0)[1]} x2={WORLD_W} y2={projectWorld(0,0)[1]} stroke="#cdc4ae" strokeWidth="0.5" strokeDasharray="2 2"/>
          <line x1="0" y1={projectWorld(23.5,0)[1]} x2={WORLD_W} y2={projectWorld(23.5,0)[1]} stroke="#cdc4ae" strokeWidth="0.4" strokeDasharray="1 3"/>
          <line x1="0" y1={projectWorld(-23.5,0)[1]} x2={WORLD_W} y2={projectWorld(-23.5,0)[1]} stroke="#cdc4ae" strokeWidth="0.4" strokeDasharray="1 3"/>

          {/* Continent text labels */}
          <text x="200" y="180" fontSize="11" fill="#cdc4ae" fontFamily="Georgia,serif" fontStyle="italic">North America</text>
          <text x="100" y="320" fontSize="11" fill="#cdc4ae" fontFamily="Georgia,serif" fontStyle="italic">South America</text>
          <text x="540" y="200" fontSize="11" fill="#cdc4ae" fontFamily="Georgia,serif" fontStyle="italic">Europe</text>
          <text x="600" y="280" fontSize="11" fill="#cdc4ae" fontFamily="Georgia,serif" fontStyle="italic">Africa</text>
          <text x="780" y="240" fontSize="13" fill="#5c6272" fontFamily="Georgia,serif" fontWeight="700">Asia</text>
          <text x="920" y="380" fontSize="11" fill="#cdc4ae" fontFamily="Georgia,serif" fontStyle="italic">Australia</text>

          {/* Lanes from India to destinations */}
          {indiaPortFlows.map(p => {
            const [px, py] = projectWorld(p.lat, p.lng);
            return destinationCountries.filter(d => {
              const matchUSA = d.country === 'USA' && p.primaryRoutes.some(r => r.includes('USA'));
              const matchEU = (d.country === 'European Union' || d.country === 'United Kingdom') && p.primaryRoutes.some(r => r.includes('Europe'));
              const matchAsia = ['China','Japan','Vietnam','Singapore','Hong Kong','South Korea','Thailand'].includes(d.country) && p.primaryRoutes.some(r => r.includes('Asia') || r.includes('Japan'));
              const matchGCC = d.country === 'GCC (UAE+Saudi+Qatar)' && p.primaryRoutes.some(r => r.includes('Middle East') || r.includes('GCC'));
              return matchUSA || matchEU || matchAsia || matchGCC;
            }).map(d => {
              const [dx, dy] = projectWorld(d.lat, d.lng);
              return (
                <line key={`${p.port}-${d.code}`} x1={px} y1={py} x2={dx} y2={dy}
                  stroke="#0d3b66" strokeOpacity={Math.min(0.5, p.exportShare/40)} strokeWidth={Math.max(0.5, p.exportShare/15)}/>
              );
            });
          })}

          {/* Indian ports */}
          {indiaPortFlows.map(p => {
            const [x, y] = projectWorld(p.lat, p.lng);
            const r = Math.sqrt(p.exportShare) * 2.5;
            return (
              <g key={p.port}>
                <circle cx={x} cy={y} r={r} fill="#a8322d" stroke="#fbf8f1" strokeWidth="1.5" opacity="0.85"/>
                <text x={x} y={y - r - 3} fontSize="9" textAnchor="middle" fill="#1a1f36" fontWeight="600" fontFamily="Georgia,serif">{p.port.split(' ')[0]}</text>
              </g>
            );
          })}

          {/* Destinations */}
          {destinationCountries.map(d => {
            const [x, y] = projectWorld(d.lat, d.lng);
            const r = Math.sqrt(d.indianShare) * 3;
            return (
              <g key={d.code}>
                <circle cx={x} cy={y} r={r} fill="#2d6a4f" stroke="#fbf8f1" strokeWidth="1.5" opacity="0.85"/>
                <text x={x} y={y + r + 10} fontSize="9" textAnchor="middle" fill="#1a1f36" fontWeight="600" fontFamily="Georgia,serif">{d.code}</text>
              </g>
            );
          })}

          {/* Competitor flows overlay */}
          {showCompetitor && competitorPrimaryLanes.map((c,i) => {
            const portKey = c.from.split('+')[0].split(' ')[0];
            const port = indiaPortFlows.find(p => p.port.includes(portKey)) || indiaPortFlows[0];
            const dest = destinationCountries.find(d => c.to.includes(d.country) || c.to.startsWith(d.code)) || destinationCountries[0];
            const [px,py] = projectWorld(port.lat, port.lng);
            const [dx,dy] = projectWorld(dest.lat, dest.lng);
            const isUs = c.competitor.includes('Konkan');
            return <line key={i} x1={px} y1={py} x2={dx} y2={dy}
                stroke={isUs ? '#a8322d' : '#c5a565'} strokeWidth={isUs ? 2.5 : 1} strokeDasharray={isUs?null:'4 4'} strokeOpacity={isUs?0.9:0.4}/>;
          })}
        </svg>
        <div style={{fontSize:11, color:'var(--c-text-dim)', marginTop:8, display:'flex', gap:14, flexWrap:'wrap'}}>
          <span><span style={{display:'inline-block',width:9,height:9,background:'#a8322d',borderRadius:'50%',marginRight:4}}/>India ports (size = export share)</span>
          <span><span style={{display:'inline-block',width:9,height:9,background:'#2d6a4f',borderRadius:'50%',marginRight:4}}/>Destinations (size = India's share)</span>
          {showCompetitor && <span><svg width="20" height="6" style={{display:'inline-block', verticalAlign:'middle'}}><line x1="0" y1="3" x2="20" y2="3" stroke="#a8322d" strokeWidth="2"/></svg> Our planned lanes</span>}
        </div>
      </div>

      <div className="section-block grid grid-2">
        <div className="card">
          <h3>Indian ports — export share FY24</h3>
          <ResponsiveContainer width="100%" height={290}>
            <BarChart data={indiaPortFlows} margin={{top:10,right:10,left:0,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis dataKey="port" stroke="#5c6272" fontSize={9} angle={-22} textAnchor="end" height={50}/>
              <YAxis stroke="#5c6272" fontSize={11}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Bar dataKey="valueINRcr" name="Value ₹cr" fill="#0d3b66"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <h3>Destination market share (Indian seafood)</h3>
          <ResponsiveContainer width="100%" height={290}>
            <PieChart>
              <Pie data={destinationCountries} dataKey="indianShare" nameKey="code"
                outerRadius={95} label={({code, indianShare}) => `${code} ${indianShare}%`} fontSize={10}>
                {destinationCountries.map((d,i) => <Cell key={i} fill={COLORS[i % COLORS.length]}/>)}
              </Pie>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="section-block">
        <h2>Lane economics ({lanes.length} primary)</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Origin</th><th>Destination</th><th>Mode</th><th className="num">Distance NM</th><th className="num">Transit days</th><th className="num">FOB $/kg</th><th className="num">Freight $/kg</th><th>Peak season</th></tr></thead>
            <tbody>
              {lanes.map((l,i) => (
                <tr key={i}>
                  <td><strong>{l.from}</strong></td>
                  <td>{l.to}</td>
                  <td><span className={`pill ${l.mode === 'Air' ? 'pill-warn' : 'pill-info'}`}>{l.mode}</span></td>
                  <td className="num">{l.distanceNM.toLocaleString('en-IN')}</td>
                  <td className="num">{l.transitDays}</td>
                  <td className="num">${l.fobUSDperKg}</td>
                  <td className="num">${l.freightUSDperKg}</td>
                  <td style={{fontSize:11.5}}>{l.peakSeasonMonths}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block">
        <h2>Monthly export volume pattern (FY24, MT × 1000s seasonal index)</h2>
        <div className="card">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthData} margin={{top:10,right:10,left:0,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis dataKey="month" stroke="#5c6272" fontSize={11}/>
              <YAxis stroke="#5c6272" fontSize={11}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Line dataKey="exports" stroke="#0d3b66" strokeWidth={3} dot={{r:5}} name="Index (100 = avg)"/>
            </LineChart>
          </ResponsiveContainer>
          <div className="callout" style={{marginTop:10}}>
            <strong>Pattern:</strong> Jun-Jul collapse driven by trawl ban; peak Nov-Dec for Western Christmas demand + CNY pre-buying.
            Operator must plan inventory + WC for this swing.
          </div>
        </div>
      </div>

      <div className="section-block grid grid-2">
        <div className="card">
          <h3>Shipping line market share</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={shippingLineMarketShare} layout="vertical" margin={{top:5,right:10,left:10,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis type="number" stroke="#5c6272" fontSize={11}/>
              <YAxis type="category" dataKey="line" stroke="#5c6272" fontSize={10} width={140}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Bar dataKey="share" name="Container share %" fill="#0d3b66"/>
              <Bar dataKey="refeerCapacityShare" name="Reefer share %" fill="#2d6a4f"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <h3>Air cargo carriers (live + perishable)</h3>
          <table className="tbl">
            <thead><tr><th>Carrier</th><th>Strength</th></tr></thead>
            <tbody>
              {refrigeratedAirCarriers.map((c,i) => (
                <tr key={i}><td><strong>{c.carrier}</strong></td><td style={{fontSize:11.5}}>{c.strength}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block">
        <h2>Competitor primary lanes</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Competitor</th><th>From</th><th>To</th><th className="num">Annual MT</th><th className="num">FOB $/kg</th></tr></thead>
            <tbody>
              {competitorPrimaryLanes.map((c,i) => (
                <tr key={i} style={c.competitor.includes('Konkan')?{background:'#faf5e5',fontWeight:600}:{}}>
                  <td><strong>{c.competitor}</strong></td>
                  <td style={{fontSize:11.5}}>{c.from}</td>
                  <td style={{fontSize:11.5}}>{c.to}</td>
                  <td className="num">{c.annualMT.toLocaleString('en-IN')}</td>
                  <td className="num" style={{color: c.fobUSDperKg > 7 ? 'var(--c-good)':'var(--c-text)'}}>${c.fobUSDperKg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
