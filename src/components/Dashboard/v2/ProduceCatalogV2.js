import React, { useState } from 'react';
import { produceItems, processingFlow, yieldChart } from '../../../data/v2ProduceCatalog';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import SpeciesImage from '../../SpeciesImage';

export default function ProduceCatalogV2() {
  const [selected, setSelected] = useState(produceItems[0].id);
  const item = produceItems.find(p => p.id === selected);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · L5 Produce Catalog</div>
        <h1 className="sec-title">Visual Produce Identity — Counts, Sizes, Forms</h1>
        <p className="sec-sub">
          {produceItems.length} core species with: count grades + size bands + FOB by grade + form-yield matrix +
          seasonality + storage + species image. Every operator should memorize size grades — wrong grade = wrong price.
          (Species illustrations are SVG fallbacks; drop licensed photos in <code>public/species/&lt;id&gt;.jpg</code> to override.)
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Species catalogued</h3><div className="big">{produceItems.length}</div></div>
        <div className="card"><h3>Total grades</h3><div className="big">{produceItems.reduce((s,p)=>s+p.countGrades.length,0)}</div></div>
        <div className="card"><h3>Forms per species</h3><div className="big">{Math.round(produceItems.reduce((s,p)=>s+p.forms.length,0)/produceItems.length)}</div></div>
        <div className="card"><h3>Yield variants</h3><div className="big">{yieldChart.length}</div></div>
      </div>

      <div style={{display:'flex',gap:6,flexWrap:'wrap',marginTop:18,marginBottom:14}}>
        {produceItems.map(p => (
          <button key={p.id} onClick={() => setSelected(p.id)} style={{
            padding:'6px 12px', border:'1px solid var(--c-border)', borderRadius:999,
            cursor:'pointer', fontSize:11, fontWeight:600,
            background: selected === p.id ? 'var(--c-accent)' : 'var(--c-surface)',
            color: selected === p.id ? '#fff' : 'var(--c-text)',
          }}>{p.name.split(' ')[0]}</button>
        ))}
      </div>

      <div className="card" style={{borderLeft:'4px solid var(--c-accent)'}}>
        <div style={{display:'flex',justifyContent:'space-between',gap:12,flexWrap:'wrap'}}>
          <div>
            <h3 style={{fontFamily:'Georgia,serif',fontSize:20,fontWeight:600}}>{item.name}</h3>
            <div style={{fontSize:12,color:'var(--c-text-dim)',marginTop:2,fontStyle:'italic'}}>{item.aliases}</div>
          </div>
          <div style={{textAlign:'right'}}>
            <span className="pill pill-info">Avg {item.avgWeight}</span>
            <div style={{fontSize:11,color:'var(--c-text-dim)',marginTop:4}}>{item.color}</div>
          </div>
        </div>

        {/* Species image — real photo if /public/species/<id>.jpg exists, else SVG fallback */}
        <div style={{marginTop:14}}>
          <SpeciesImage
            id={item.id}
            alt={`${item.name} reference photo`}
            credit={item.photoCredit}
            license={item.photoLicense}
            scientificName={item.scientificName || item.name}
          />
        </div>

        <div className="section-block" style={{marginTop:16}}>
          <h3 style={{fontFamily:'Georgia,serif',fontSize:15,marginBottom:8}}>Count grades + FOB by grade</h3>
          <div className="tbl-wrap">
            <table className="tbl">
              <thead><tr><th>Grade</th><th>Size</th><th>FOB ~$/kg</th><th>Use case</th></tr></thead>
              <tbody>
                {item.countGrades.map((g,i) => (
                  <tr key={i}>
                    <td><strong>{g.count}</strong></td>
                    <td style={{fontSize:12}}>{g.sizeG}</td>
                    <td style={{color:'var(--c-good)',fontWeight:600}}>{g.mtToHKG}</td>
                    <td style={{fontSize:12}}>{g.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="section-block">
          <h3 style={{fontFamily:'Georgia,serif',fontSize:15,marginBottom:8}}>Forms / processing variants</h3>
          <ul className="bullets" style={{fontSize:13}}>
            {item.forms.map((f,i) => <li key={i}>{f}</li>)}
          </ul>
        </div>

        <div className="grid grid-2" style={{marginTop:16}}>
          <div>
            <strong style={{fontSize:11,color:'var(--c-accent)',textTransform:'uppercase',letterSpacing:1}}>Seasonality</strong>
            <div style={{fontSize:13,marginTop:4}}>{item.seasonality}</div>
          </div>
          <div>
            <strong style={{fontSize:11,color:'var(--c-accent)',textTransform:'uppercase',letterSpacing:1}}>Storage</strong>
            <div style={{fontSize:13,marginTop:4}}>
              Temp: {item.storageTemp}<br/>
              Shelf: {item.shelfLifeFrozen || item.shelfLifeLive}
            </div>
          </div>
        </div>
      </div>

      <div className="section-block">
        <h2>Processing flow (universal)</h2>
        <div className="card">
          <div style={{position:'relative',paddingLeft:20,borderLeft:'2px solid var(--c-border)'}}>
            {processingFlow.map((s,i) => (
              <div key={i} style={{position:'relative',marginBottom:10}}>
                <span style={{position:'absolute',left:-26,top:5,width:12,height:12,background:'var(--c-accent-2)',borderRadius:'50%',border:'2px solid var(--c-bg)'}} />
                <strong style={{fontSize:12.5,color:'var(--c-text)'}}>{s.stage}</strong>
                <div style={{fontSize:12,color:'var(--c-text-dim)',marginTop:2}}>{s.activity}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-block">
        <h2>Yield matrix (output / input)</h2>
        <div className="card">
          <ResponsiveContainer width="100%" height={420}>
            <BarChart data={yieldChart} layout="vertical" margin={{top:5, right:15, left:10, bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis type="number" stroke="#5c6272" fontSize={11} domain={[0,100]}/>
              <YAxis type="category" dataKey="product" stroke="#5c6272" fontSize={10} width={240}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}} formatter={(v) => [`${v}%`, 'Yield']}/>
              <Bar dataKey="yieldPct" name="Yield %" radius={[0,4,4,0]}>
                {yieldChart.map((y,i) => (
                  <Cell key={i} fill={y.yieldPct > 80 ? '#2d6a4f' : y.yieldPct > 60 ? '#c5a565' : y.yieldPct > 40 ? '#b8860b' : '#a8322d'}/>
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="callout">
        <strong>Operator memorization:</strong> Count grades change FOB by 30-50%. Vannamei 16/20 sells at $11+/kg vs 31/40 at $6/kg — same shrimp, double the price. Yield discipline is the difference between profit and loss. Memorize these.
      </div>
    </>
  );
}
