import React from 'react';
import { risks } from '../../../data/risks';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip } from 'recharts';

const SCORE_COLOR = (s) => s >= 12 ? '#a8322d' : s >= 9 ? '#c5a565' : s >= 6 ? '#b8860b' : '#2d6a4f';
const SCORE_PILL = (s) => s >= 12 ? 'pill-bad' : s >= 9 ? 'pill-warn' : s >= 6 ? 'pill-warn' : 'pill-good';

const LIKE_TO_NUM = { 'Low':1, 'Medium':2, 'Medium-High':2.5, 'High':3, 'Certain':4 };
const IMP_TO_NUM = { 'Low':1, 'Medium':2, 'High':3, 'Critical':4 };

export default function Risks() {
  const heatData = risks.map(r => ({
    risk: r.risk,
    likelihood: LIKE_TO_NUM[r.likelihood] || 2,
    impact: IMP_TO_NUM[r.impact] || 2,
    score: r.score,
  }));

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">Risk Register</div>
        <h1 className="sec-title">Top Risks & Mitigations</h1>
        <p className="sec-sub">
          12 risks ranked by Likelihood × Impact. Top concerns: antibiotic rejection,
          US tariffs, monsoon idle period, buyer concentration. Each risk has a
          documented mitigation already wired into the operating plan.
        </p>
      </div>

      <div className="card">
        <h3>Risk heatmap (size = severity score)</h3>
        <ResponsiveContainer width="100%" height={360}>
          <ScatterChart margin={{top:20,right:30,left:10,bottom:30}}>
            <CartesianGrid stroke="#e0d9c8"/>
            <XAxis type="number" dataKey="likelihood" name="Likelihood" stroke="#5c6272" fontSize={11} domain={[0,5]}
              ticks={[1,2,3,4]} tickFormatter={n=>['','Low','Med','High','Cert.'][n]||''}/>
            <YAxis type="number" dataKey="impact" name="Impact" stroke="#5c6272" fontSize={11} domain={[0,5]}
              ticks={[1,2,3,4]} tickFormatter={n=>['','Low','Med','High','Crit.'][n]||''}/>
            <ZAxis type="number" dataKey="score" range={[80, 700]} name="Score"/>
            <Tooltip cursor={{strokeDasharray:'3 3'}} contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}
              formatter={(v,n)=>[v,n]} labelFormatter={(_,d)=>d?.[0]?.payload?.risk||''}/>
            <Scatter data={heatData} fill="#a8322d"/>
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div className="section-block">
        <h2>Detailed risk register</h2>
        {risks.sort((a,b)=>b.score-a.score).map(r => (
          <div className="card" key={r.id} style={{marginBottom:12, borderLeft:`3px solid ${SCORE_COLOR(r.score)}`}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:12,marginBottom:8}}>
              <h3 style={{fontSize:15,color:'var(--c-text)',fontWeight:600}}>{r.risk}</h3>
              <div style={{display:'flex',gap:6,flexShrink:0}}>
                <span className="pill pill-mute">{r.likelihood} likelihood</span>
                <span className="pill pill-mute">{r.impact} impact</span>
                <span className={`pill ${SCORE_PILL(r.score)}`}>Score {r.score}</span>
              </div>
            </div>
            <div className="grid grid-2">
              <div>
                <strong style={{fontSize:12,color:'var(--c-bad)'}}>If it happens</strong>
                <ul className="bullets" style={{marginTop:4}}>{r.consequences.map((c,k)=><li key={k}>{c}</li>)}</ul>
              </div>
              <div>
                <strong style={{fontSize:12,color:'var(--c-good)'}}>Our mitigation</strong>
                <ul className="bullets" style={{marginTop:4}}>{r.mitigations.map((c,k)=><li key={k}>{c}</li>)}</ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
