import React, { useState } from 'react';
import { buyerOutreachLog, loiTemplate, trialShipmentPlan, outreachKPIs, seriesAPreconditions, buyerEvidenceSummaryStats } from '../../../data/v2BuyerEvidence';
import SortableTable from '../SortableTable';
import Disclaimer from './Disclaimer';

const RISK_COLOR = { 'Very high': 'var(--c-bad)', 'High': 'var(--c-bad)', 'Medium': 'var(--c-warn)', 'Low': 'var(--c-good)' };
const STATUS_COLOR = { 'COMPLETE': 'var(--c-good)', 'IN PROGRESS': 'var(--c-warn)', 'PENDING': 'var(--c-bad)' };

export default function BuyerEvidenceV2() {
  const [showLoi, setShowLoi] = useState(false);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Series-A Diligence Evidence</div>
        <h1 className="sec-title">Buyer Engagement Evidence Tracker</h1>
        <p className="sec-sub">
          The #1 question every PE investor asks: <em>"Show me the LOIs."</em> Below is the live
          buyer pipeline + outreach log + trial-shipment plan + LOI template + Series-A precondition
          tracker. {buyerEvidenceSummaryStats.buyersInPipeline} buyers across {outreachKPIs.tradeFairsAttended.length}
          trade-fair touchpoints. {outreachKPIs.responseRate}% response rate.
        </p>
      </div>

      <Disclaimer kind="estimate">
        Buyer entries below are <strong>pipeline status</strong> as of April 2026 — not historical
        contracts. As LOIs are signed, this page will be updated with actual signed copies (per LOI
        template). Names of contact persons are placeholder; real contact info is held in CRM and
        shared with investors under NDA at term-sheet stage.
      </Disclaimer>

      <div className="kpi-grid">
        <div className="card"><h3>Buyers contacted</h3><div className="big">{outreachKPIs.totalBuyersContacted}</div></div>
        <div className="card"><h3>Response rate</h3><div className="big" style={{color:'var(--c-good)'}}>{outreachKPIs.responseRate}%</div></div>
        <div className="card"><h3>Qualified conversations</h3><div className="big">{outreachKPIs.qualifiedConversations}</div></div>
        <div className="card"><h3>LOIs targeted</h3><div className="big" style={{color:'var(--c-accent)'}}>{outreachKPIs.loisPlanned}</div></div>
      </div>

      {/* OUTREACH LOG */}
      <div className="section-block">
        <h2>Buyer outreach log — by market</h2>
        {buyerOutreachLog.map((b, i) => (
          <div key={i} className="card" style={{marginBottom:14, borderLeft:`4px solid ${RISK_COLOR[b.risk.split(' —')[0]] || 'var(--c-warn)'}`}}>
            <div style={{display:'flex',justifyContent:'space-between',gap:12,flexWrap:'wrap',marginBottom:10}}>
              <div>
                <div style={{fontSize:11, color:'var(--c-text-dim)', textTransform:'uppercase', letterSpacing:1}}>{b.market}</div>
                <h3 style={{fontFamily:'Georgia,serif',fontSize:17,fontWeight:600,color:'var(--c-text)',marginTop:2}}>{b.buyer}</h3>
                <div style={{fontSize:12, color:'var(--c-text-dim)', marginTop:2, fontStyle:'italic'}}>
                  Contact: {b.contactName} ({b.contactRole})
                </div>
              </div>
              <div style={{textAlign:'right'}}>
                <span className={`pill ${b.risk.startsWith('High') || b.risk.startsWith('Very high') ? 'pill-bad' : b.risk.startsWith('Medium') ? 'pill-warn' : 'pill-good'}`}>
                  Risk: {b.risk}
                </span>
                <div style={{fontSize:11, color:'var(--c-text-dim)', marginTop:6, textTransform:'uppercase', letterSpacing:1}}>{b.relationshipStage}</div>
              </div>
            </div>

            <div className="grid grid-2" style={{fontSize:12.5, marginBottom:10}}>
              <div><strong>First contact:</strong> {b.firstContactMonth}</div>
              <div><strong>Last interaction:</strong> {b.lastInteractionMonth}</div>
              <div><strong>Volume discussed:</strong> {b.volumeDiscussed}</div>
              <div><strong>Pricing discussed:</strong> {b.pricingDiscussed}</div>
            </div>

            <div style={{marginBottom:8, fontSize:13}}>
              <strong style={{color:'var(--c-accent)'}}>LOI status: </strong>{b.loiStatus}
            </div>

            <div className="callout" style={{marginBottom:8}}>
              <strong>Next action: </strong>{b.nextAction} <em>(deadline: {b.nextActionDeadline})</em>
            </div>

            <div style={{fontSize:12, color:'var(--c-bad)', borderTop:'1px solid var(--c-border)', paddingTop:8, fontStyle:'italic'}}>
              <strong>Barrier(s): </strong>{b.barriersExplicit}
            </div>
          </div>
        ))}
      </div>

      {/* SERIES A PRECONDITIONS */}
      <div className="section-block">
        <h2>Series A precondition tracker — {buyerEvidenceSummaryStats.preconditionsComplete}/{buyerEvidenceSummaryStats.preconditionsTotal} complete</h2>
        <div className="card">
          <SortableTable
            columns={[
              { key:'precondition', label:'Precondition', render:(v) => <strong>{v}</strong> },
              { key:'status', label:'Status', render:(v) => <span className="pill" style={{background: STATUS_COLOR[v] || 'var(--c-text-dim)', color:'#fff'}}>{v}</span> },
              { key:'deadline', label:'Deadline' },
              { key:'evidenceRequired', label:'Evidence required', style:{fontSize:12} },
            ]}
            rows={seriesAPreconditions}
            defaultSort="status"
          />
        </div>
      </div>

      {/* TRIAL SHIPMENT PLAN */}
      <div className="section-block">
        <h2>Trial shipment plan (per buyer, post-LOI)</h2>
        <div className="card">
          <SortableTable
            columns={[
              { key:'milestone', label:'Milestone', render:(v) => <strong>{v}</strong> },
              { key:'task', label:'Task', style:{fontSize:12.5} },
              { key:'timing', label:'Timing' },
              { key:'responsibleSide', label:'Side', render:(v) => <span className={`pill ${v === 'Konkan' ? 'pill-info' : v === 'Buyer' ? 'pill-warn' : 'pill-mute'}`}>{v}</span> },
            ]}
            rows={trialShipmentPlan}
          />
        </div>
      </div>

      {/* TRADE FAIRS */}
      <div className="section-block">
        <h2>Trade-fair attendance log</h2>
        <div className="card">
          <ul className="bullets" style={{fontSize:13.5, lineHeight:1.8}}>
            {outreachKPIs.tradeFairsAttended.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <p style={{fontSize:12, color:'var(--c-text-dim)', marginTop:10, fontStyle:'italic'}}>
            Each trade fair generates 8-15 leads; ~30% convert to formal outreach; ~10% reach LOI stage. Trade-fair budget ₹15-25 L/yr (PMMSY-eligible via MPEDA Buyer-Seller Meet co-fund).
          </p>
        </div>
      </div>

      {/* LOI TEMPLATE */}
      <div className="section-block">
        <h2>LOI template (used for all buyers)</h2>
        <div className="card">
          <button
            type="button"
            onClick={() => setShowLoi(s => !s)}
            aria-expanded={showLoi}
            style={{
              padding:'8px 16px', background:'var(--c-accent)', color:'#fff',
              border:'none', borderRadius:4, cursor:'pointer', fontSize:13, fontWeight:600,
              marginBottom:14,
            }}>
            {showLoi ? '▾ Hide LOI template' : '▸ Show LOI template'}
          </button>

          {showLoi && (
            <div style={{padding:18, background:'var(--c-surface-2)', border:'1px solid var(--c-border)', borderRadius:6}}>
              <h3 style={{fontFamily:'Georgia,serif',fontSize:15,fontWeight:600,marginBottom:12,color:'var(--c-text)'}}>{loiTemplate.title}</h3>
              {loiTemplate.bodyParts.map((p, i) => (
                <div key={i} style={{marginBottom:14}}>
                  <strong style={{fontSize:11, color:'var(--c-accent)', textTransform:'uppercase', letterSpacing:1}}>{p.section}</strong>
                  <p style={{fontSize:12.5, color:'var(--c-text)', marginTop:4, lineHeight:1.65, fontFamily:'Georgia,serif', fontStyle:i === 7 ? 'italic' : 'normal'}}>
                    {p.text}
                  </p>
                </div>
              ))}
              <div style={{padding:10, background:'#fff', borderRadius:4, marginTop:8, fontSize:11.5, color:'var(--c-text-dim)'}}>
                <strong>Legal review: </strong>{loiTemplate.legalReview}<br/>
                <strong>Validity: </strong>{loiTemplate.validity}<br/>
                <strong>Total pages: </strong>{loiTemplate.totalPages}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="callout" style={{borderLeftColor:'var(--c-good)'}}>
        <strong>Series A precondition: </strong>4 signed LOIs from 3+ distinct markets, each with
        named contact, volume + price band, trial-shipment commitment. Investors will use these to
        validate the buyer-side moat. Without LOIs, valuation gets discounted 30-40%.
      </div>
    </>
  );
}
