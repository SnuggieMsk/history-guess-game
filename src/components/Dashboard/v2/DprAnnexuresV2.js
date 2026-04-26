import React, { useState } from 'react';
import { annexureTemplates, dprChecklist } from '../../../data/v2DprAnnexures';

export default function DprAnnexuresV2() {
  const [open, setOpen] = useState(annexureTemplates[0].id);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · L8 DPR Annexures</div>
        <h1 className="sec-title">10 Annexure Templates + 15-Item Checklist</h1>
        <p className="sec-sub">
          Every PMMSY DPR needs 10 annexures. Each one templated with: who issues, sample structure (the
          actual content + sequence), realistic cost + timeline. Use this list to prepare annexure bundle
          alongside DPR drafting — saves 2-3 weeks.
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Annexure templates</h3><div className="big">{annexureTemplates.length}</div></div>
        <div className="card"><h3>Total cost estimate</h3><div className="big">₹4-6 L</div><div className="sub">incl. CA + lawyer + consultants</div></div>
        <div className="card"><h3>Total timeline</h3><div className="big">8-12 wk</div><div className="sub">parallel with DPR drafting</div></div>
        <div className="card"><h3>Checklist items</h3><div className="big">{dprChecklist.length}</div></div>
      </div>

      <div className="section-block">
        <h2>Annexure templates</h2>
        {annexureTemplates.map(a => {
          const isOpen = open === a.id;
          return (
            <div key={a.id} className="card" style={{marginBottom:10, borderLeft:'3px solid var(--c-accent-2)'}}>
              <div onClick={() => setOpen(isOpen ? null : a.id)} style={{cursor:'pointer', display:'flex', justifyContent:'space-between', gap:10, flexWrap:'wrap', alignItems:'flex-start'}}>
                <div>
                  <strong style={{fontFamily:'Georgia,serif', fontSize:14}}>{a.name}</strong>
                  <div style={{fontSize:11, color:'var(--c-text-dim)', marginTop:4}}>Issued by: {a.issuedBy}</div>
                </div>
                <div style={{textAlign:'right'}}>
                  <span className="pill pill-good">{a.cost}</span>
                  <div style={{fontSize:11, color:'var(--c-text-dim)', marginTop:4}}>{a.timeline}</div>
                </div>
              </div>
              {isOpen && (
                <div style={{marginTop:14, paddingTop:12, borderTop:'1px solid var(--c-border)'}}>
                  <strong style={{fontSize:11,color:'var(--c-accent)',textTransform:'uppercase',letterSpacing:1}}>Sample structure</strong>
                  <ol style={{paddingLeft:22,marginTop:6,fontSize:12.5}}>
                    {a.sampleStructure.map((s,i) => <li key={i} style={{margin:'3px 0'}}>{s}</li>)}
                  </ol>
                  {a.note && <div className="callout" style={{marginTop:10}}><strong>Note: </strong>{a.note}</div>}
                  {a.minimumCount && <div style={{marginTop:8, fontSize:11.5, color:'var(--c-warn)'}}><strong>Minimum required: </strong>{a.minimumCount}</div>}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="section-block">
        <h2>15-item DPR submission checklist</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Item</th><th>Status</th><th>Tip</th></tr></thead>
            <tbody>
              {dprChecklist.map((c,i) => (
                <tr key={i}>
                  <td><strong>{c.item}</strong></td>
                  <td><span className={`pill ${c.status.includes('Required') || c.status.includes('Critical') ? 'pill-bad' : 'pill-warn'}`}>{c.status}</span></td>
                  <td style={{fontSize:12, color:'var(--c-text-dim)'}}>{c.tip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="callout">
        <strong>Submission protocol:</strong> Submit DPR + annexures bundle to State DoF (Commissioner of Fisheries, Taraporevala Aquarium, Mumbai).
        State recommends to Central; sanction in 6-10 months. Tranches over 18-28 months.
        Track via PMMSY portal pmmsy.dof.gov.in.
      </div>
    </>
  );
}
