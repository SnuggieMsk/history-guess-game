import React from 'react';
import { insightLibrary, decisionFlowchart, operatorDailyPrompts } from '../../../data/v2SimNarration';

export default function SimNarrationV2() {
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · L8 Sim Narration + Decision Layer</div>
        <h1 className="sec-title">From Simulator Output to Operator Decision</h1>
        <p className="sec-sub">
          Sim outputs are useless without operator interpretation. {insightLibrary.length} structural insight patterns +
          {decisionFlowchart.length} decision flowcharts + {operatorDailyPrompts.length} daily-prompts checklist.
          Use this to translate simulator numbers into action.
        </p>
      </div>

      <div className="section-block">
        <h2>Structural insight library</h2>
        {insightLibrary.map((il,i) => (
          <div key={i} className="card" style={{marginBottom:12, borderLeft:'3px solid var(--c-accent-2)'}}>
            <strong style={{fontFamily:'Georgia,serif', fontSize:14, color:'var(--c-accent)'}}>Pattern: {il.pattern}</strong>
            <p style={{fontSize:13, marginTop:6}}>{il.insight}</p>
            <div style={{fontSize:12.5, marginTop:8, padding:8, background:'var(--c-surface-2)', borderRadius:4, borderLeft:'2px solid var(--c-good)'}}>
              <strong style={{color:'var(--c-good)'}}>→ Action: </strong>{il.actionItem}
            </div>
          </div>
        ))}
      </div>

      <div className="section-block">
        <h2>Decision flowcharts (4 critical decisions)</h2>
        {decisionFlowchart.map((d,i) => (
          <div key={i} className="card" style={{marginBottom:12, borderLeft:'3px solid var(--c-accent)'}}>
            <h3 style={{fontFamily:'Georgia,serif', fontSize:15, fontWeight:600}}>{d.decision}</h3>
            <div style={{marginTop:10}}>
              <strong style={{fontSize:11, color:'var(--c-text-dim)', textTransform:'uppercase', letterSpacing:1}}>Inputs to evaluate</strong>
              <ul className="bullets" style={{marginTop:6, fontSize:12}}>
                {d.inputs.map((inp,j) => <li key={j}>{inp}</li>)}
              </ul>
            </div>
            <div style={{marginTop:10, padding:10, background:'var(--c-surface-2)', borderRadius:4}}>
              <strong style={{fontSize:11, color:'var(--c-warn)', textTransform:'uppercase'}}>Threshold:</strong>
              <div style={{fontSize:12.5, marginTop:4, fontFamily:'Menlo,monospace'}}>{d.threshold}</div>
            </div>
            <div className="grid grid-2" style={{marginTop:10}}>
              <div style={{padding:8, background:'#e8f0ec', borderRadius:4}}>
                <strong style={{fontSize:11, color:'var(--c-good)'}}>If YES:</strong>
                <div style={{fontSize:12, marginTop:4}}>{d.decision_yes}</div>
              </div>
              <div style={{padding:8, background:'#f8ebe8', borderRadius:4}}>
                <strong style={{fontSize:11, color:'var(--c-bad)'}}>If NO:</strong>
                <div style={{fontSize:12, marginTop:4}}>{d.decision_no}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-block">
        <h2>Operator daily prompts (10-min morning routine)</h2>
        <div className="card">
          <ol style={{paddingLeft:22, fontSize:13.5}}>
            {operatorDailyPrompts.map((p,i) => <li key={i} style={{margin:'8px 0'}}>{p}</li>)}
          </ol>
        </div>
      </div>

      <div className="callout">
        <strong>Discipline:</strong> Run these 10 prompts every morning before opening email.
        Pattern recognition across days reveals trends that single-day data misses.
        Pair with weekly portfolio review + monthly Monte Carlo refresh + quarterly compound-shock test.
      </div>
    </>
  );
}
