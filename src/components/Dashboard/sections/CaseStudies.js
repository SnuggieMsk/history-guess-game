import React from 'react';
import { caseStudies, consolidatedLessons } from '../../../data/caseStudies';

export default function CaseStudies() {
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">Lessons from the field</div>
        <h1 className="sec-title">Case Studies — Successes & Failures</h1>
        <p className="sec-sub">
          7 successes (Avanti, Apex, Gadre, Thai Union, Mowi, Minh Phu, OMARSA) and
          2 anonymised Indian failures. What they did right, where they slipped, and
          what we copy or avoid.
        </p>
      </div>

      <div className="callout">
        <strong>Top consolidated lessons:</strong>
        <ul style={{marginTop:6,paddingLeft:18}}>
          {consolidatedLessons.map((l,i) => <li key={i} style={{margin:'4px 0',color:'#d8e3f4',fontSize:13}}>{l}</li>)}
        </ul>
      </div>

      {caseStudies.map(c => (
        <div className="card" key={c.id} style={{marginBottom:14}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:12,marginBottom:8}}>
            <div>
              <h3 style={{fontSize:17,color:'var(--c-text)',fontWeight:600}}>{c.company}</h3>
              <p style={{fontSize:12.5,color:'var(--c-accent)',marginTop:2,fontStyle:'italic'}}>{c.headline}</p>
            </div>
            <div style={{textAlign:'right',fontSize:11,color:'var(--c-text-dim)'}}>
              <div>Founded {c.founded} · {c.location}</div>
              <div>{c.revenuePeakINRcr ? `₹${c.revenuePeakINRcr} cr` : c.revenuePeakUSDmn ? `$${c.revenuePeakUSDmn} mn` : ''} · {c.employees ? `${c.employees.toLocaleString()} emp` : 'Defunct'}</div>
            </div>
          </div>

          <div className="section-block" style={{marginTop:8}}>
            <strong style={{fontSize:12,color:'var(--c-accent)'}}>Timeline</strong>
            <div className="timeline">
              {c.timeline.map((t,i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-year">{t.year}</div>
                  <div className="timeline-text">{t.event}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-2">
            <div>
              <strong style={{fontSize:12,color:'var(--c-good)'}}>{c.whatWorked ? 'What worked' : 'What failed'}</strong>
              <ul className="bullets" style={{marginTop:4}}>
                {(c.whatWorked || c.whatFailed).map((w,i) => <li key={i}>{w}</li>)}
              </ul>
            </div>
            <div>
              <strong style={{fontSize:12,color:'var(--c-warn)'}}>{c.whatStruggled ? 'What struggled' : 'Lessons for us'}</strong>
              <ul className="bullets" style={{marginTop:4}}>
                {(c.whatStruggled || c.lessonsForUs).map((w,i) => <li key={i}>{w}</li>)}
              </ul>
            </div>
          </div>

          {c.lessonsForUs && c.whatStruggled && (
            <div style={{marginTop:14,paddingTop:10,borderTop:'1px solid var(--c-border)'}}>
              <strong style={{fontSize:12,color:'var(--c-accent)'}}>Lessons for us</strong>
              <ul className="bullets" style={{marginTop:4}}>
                {c.lessonsForUs.map((w,i) => <li key={i}>{w}</li>)}
              </ul>
            </div>
          )}
        </div>
      ))}

      <style>{`
        .timeline { margin: 8px 0 14px; padding-left: 12px; border-left: 2px solid var(--c-border); }
        .timeline-item { display:flex; gap:12px; padding:4px 0; }
        .timeline-year { font-weight:600; color:var(--c-accent); width:50px; flex-shrink:0; font-size:12px; }
        .timeline-text { font-size:12.5px; color:#cbd6e8; }
      `}</style>
    </>
  );
}
