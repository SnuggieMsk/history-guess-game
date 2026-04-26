import React from 'react';
import { portersFiveForces } from '../../../data/strategy';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';

const RATING_PILL = (rating) => {
  if (rating.startsWith('High')) return 'pill-bad';
  if (rating.startsWith('Medium')) return 'pill-warn';
  return 'pill-good';
};

export default function Porter() {
  const radarData = portersFiveForces.map(f => ({ force: f.force, score: f.score, fullMark: 5 }));
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">Strategy</div>
        <h1 className="sec-title">Porter's Five Forces</h1>
        <p className="sec-sub">
          Industry attractiveness assessment. Buyers and rivalry are the toughest forces;
          we mitigate via multi-buyer diversification and Maharashtra-origin niche moats.
        </p>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3>Force intensity (1-5)</h3>
          <ResponsiveContainer width="100%" height={320}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#e0d9c8"/>
              <PolarAngleAxis dataKey="force" stroke="#5c6272" fontSize={11}/>
              <PolarRadiusAxis stroke="#e0d9c8" angle={90} domain={[0, 5]}/>
              <Radar name="Intensity" dataKey="score" stroke="#0d3b66" fill="#0d3b66" fillOpacity={0.5}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <h3>At a glance</h3>
          <table className="tbl">
            <thead><tr><th>Force</th><th>Rating</th><th className="num">Score</th></tr></thead>
            <tbody>
              {portersFiveForces.map((f,i) => (
                <tr key={i}>
                  <td><strong>{f.force}</strong></td>
                  <td><span className={`pill ${RATING_PILL(f.rating)}`}>{f.rating}</span></td>
                  <td className="num"><strong>{f.score}/5</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {portersFiveForces.map((f,i) => (
        <div className="card" key={i} style={{marginTop:14}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
            <h3 style={{fontSize:16,color:'var(--c-text)',fontWeight:600}}>{f.force}</h3>
            <span className={`pill ${RATING_PILL(f.rating)}`}>{f.rating} · {f.score}/5</span>
          </div>
          <div className="grid grid-2">
            <div>
              <strong style={{fontSize:12,color:'var(--c-bad)'}}>Drivers</strong>
              <ul className="bullets" style={{marginTop:6}}>{f.drivers.map((d,k)=><li key={k}>{d}</li>)}</ul>
            </div>
            <div>
              <strong style={{fontSize:12,color:'var(--c-good)'}}>Our mitigation</strong>
              <ul className="bullets" style={{marginTop:6}}>{f.mitigation.map((d,k)=><li key={k}>{d}</li>)}</ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
