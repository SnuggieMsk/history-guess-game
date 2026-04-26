import React from 'react';
import { nationalCompetitors, maharashtraCompetitors, competitivePositioning } from '../../../data/competitors';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import SortableTable from '../SortableTable';

export default function Competitors() {
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">Competitive Landscape</div>
        <h1 className="sec-title">Who We Are Up Against</h1>
        <p className="sec-sub">
          AP shrimp majors at 10× our scale, Maharashtra incumbents holding decades of buyer
          relationships, and global rivals (Ecuador, Vietnam) pressuring commodity vannamei.
          Where we win and where we lose — explicit.
        </p>
      </div>

      <div className="section-block">
        <h2>National competitors (top 11)</h2>
        <div className="card">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={nationalCompetitors} layout="vertical" margin={{top:5,right:10,left:10,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis type="number" stroke="#5c6272" fontSize={11}/>
              <YAxis type="category" dataKey="name" stroke="#5c6272" fontSize={10} width={210}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Bar dataKey="revenueINRcr" name="Revenue (₹ cr)" fill="#0d3b66" radius={[0,5,5,0]}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={{marginTop:14}}>
          <SortableTable
            columns={[
              { key:'name', label:'Company', render:(v) => <strong>{v}</strong> },
              { key:'revenueINRcr', label:'Revenue (₹ cr)', numeric:true },
              { key:'share', label:'Share %', numeric:true, format:(v) => `${v}%` },
              { key:'focus', label:'Focus', style:{fontSize:12} },
              { key:'plantStates', label:'Plant states', render:(v) => v.join(', ') },
              { key:'strength', label:'Strength', style:{fontSize:12, color:'var(--c-good)'} },
              { key:'weakness', label:'Weakness', style:{fontSize:12, color:'var(--c-bad)'} },
            ]}
            rows={nationalCompetitors}
            defaultSort="revenueINRcr"
            defaultDir="desc"
            filterable
          />
        </div>
      </div>

      <div className="section-block">
        <h2>Maharashtra incumbents</h2>
        <div className="grid grid-2">
          {maharashtraCompetitors.map((c,i) => (
            <div className="card" key={i}>
              <h3 style={{fontSize:15,color:'var(--c-text)',fontWeight:600,marginBottom:6}}>{c.name}</h3>
              <p style={{fontSize:12,color:'var(--c-text-dim)',marginBottom:4}}><strong>HQ:</strong> {c.HQ} · <strong>Plant:</strong> {c.plant}</p>
              <p style={{fontSize:12.5,color:'#1a1f36',marginBottom:4}}><strong style={{color:'var(--c-accent)'}}>Species:</strong> {c.species}</p>
              <p style={{fontSize:12.5,color:'#1a1f36'}}><strong style={{color:'var(--c-accent)'}}>Edge:</strong> {c.edge}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-block">
        <h2>Where we win, where we lose</h2>
        {competitivePositioning.map((p,i) => (
          <div className="card" key={i} style={{marginBottom:14}}>
            <h3 style={{fontSize:15,color:'var(--c-accent)',fontWeight:600,marginBottom:10}}>{p.competitorType}</h3>
            <div className="grid grid-2">
              <div>
                <span className="pill pill-bad">They win</span>
                <ul className="bullets" style={{marginTop:6}}>{p.theyWin.map((x,k)=><li key={k}>{x}</li>)}</ul>
              </div>
              <div>
                <span className="pill pill-good">We win</span>
                <ul className="bullets" style={{marginTop:6}}>{p.weWin.map((x,k)=><li key={k}>{x}</li>)}</ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
