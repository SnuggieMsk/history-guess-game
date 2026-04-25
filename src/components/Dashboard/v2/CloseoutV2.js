import React, { useState } from 'react';
import { esg, wargame, additionalJDs, buyerOutreach, supplierVisitAgenda, associations, liaisons } from '../../../data/v2Closeout';

const TABS = [
  { id: 'esg',     label: 'ESG / Climate' },
  { id: 'wargame', label: 'Competitor Wargame' },
  { id: 'jds',     label: 'Additional JDs' },
  { id: 'outreach',label: 'Buyer Outreach' },
  { id: 'visit',   label: 'Supplier Visit Agenda' },
  { id: 'assoc',   label: 'Associations & Liaisons' },
];

export default function CloseoutV2() {
  const [tab, setTab] = useState('esg');
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Closeout — Last-Mile Detail</div>
        <h1 className="sec-title">The Final Gaps Closed</h1>
        <p className="sec-sub">
          ESG + climate adaptation budget, 6-move competitor wargame, 8 additional JDs,
          cold-email + trade-fair + sample-shipping protocols, supplier-visit agenda,
          industry associations, and bureaucracy liaisons.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            style={{
              padding: '8px 14px', border: '1px solid var(--c-border)', borderRadius: 4,
              cursor: 'pointer', fontSize: 12, fontWeight: 500,
              background: tab === t.id ? 'var(--c-accent)' : 'var(--c-surface)',
              color: tab === t.id ? '#fff' : 'var(--c-text)',
            }}>{t.label}</button>
        ))}
      </div>

      {tab === 'esg' && (
        <div>
          <div className="card" style={{ marginBottom: 14 }}>
            <h3>Bycatch + sustainability policy</h3>
            <ul className="bullets">{esg.bycatchPolicy.map((b, i) => <li key={i}>{b}</li>)}</ul>
          </div>
          <div className="card" style={{ marginBottom: 14 }}>
            <h3>Child labour + social audit</h3>
            <ul className="bullets">{esg.childLabourSocialAudit.map((b, i) => <li key={i}>{b}</li>)}</ul>
          </div>
          <div className="card" style={{ marginBottom: 14 }}>
            <h3>Climate adaptation — capex budget ₹{esg.climateAdaptation.capexBudgetINRl} L</h3>
            <ul className="bullets">{esg.climateAdaptation.measures.map((b, i) => <li key={i}>{b}</li>)}</ul>
          </div>
          <div className="callout">
            <strong>Dolphin-safe:</strong> {esg.dolphinSafe}
          </div>
        </div>
      )}

      {tab === 'wargame' && (
        <div>
          {wargame.map((w, i) => (
            <div key={i} className="card" style={{ marginBottom: 12, borderLeft: '3px solid var(--c-bad)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 15, fontWeight: 600 }}>{w.move}</h3>
                <span className={`pill ${w.likelihood.startsWith('High') || w.likelihood.startsWith('Medium-high') ? 'pill-bad' : w.likelihood.startsWith('Medium') ? 'pill-warn' : 'pill-mute'}`}>{w.likelihood}</span>
              </div>
              <div className="grid grid-3" style={{ fontSize: 12.5 }}>
                <div><strong style={{ color: 'var(--c-bad)' }}>Day 1-30: </strong>{w.response30}</div>
                <div><strong style={{ color: 'var(--c-warn)' }}>Day 30-60: </strong>{w.response60}</div>
                <div><strong style={{ color: 'var(--c-good)' }}>Day 60-90: </strong>{w.response90}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'jds' && (
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Role</th><th>Salary + ESOP</th><th>Must-haves</th></tr></thead>
            <tbody>
              {additionalJDs.map((j, i) => (
                <tr key={i}>
                  <td><strong>{j.role}</strong></td>
                  <td style={{ color: 'var(--c-accent)', fontWeight: 600 }}>{j.salary}</td>
                  <td style={{ fontSize: 12 }}>{j.musts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'outreach' && (
        <div>
          <div className="card" style={{ marginBottom: 14 }}>
            <h3>Cold email template</h3>
            <pre style={{ whiteSpace: 'pre-wrap', fontSize: 12, fontFamily: 'Menlo, Monaco, monospace', background: 'var(--c-surface-2)', padding: 16, borderRadius: 6, border: '1px solid var(--c-border)' }}>{buyerOutreach.coldEmailTemplate}</pre>
          </div>
          <div className="card" style={{ marginBottom: 14 }}>
            <h3>Pre-trade-fair checklist (60-day lead)</h3>
            <ul className="bullets">{buyerOutreach.preFairChecklist.map((c, i) => <li key={i}>{c}</li>)}</ul>
          </div>
          <div className="card">
            <h3>Sample-shipping protocol</h3>
            <ul className="bullets">{buyerOutreach.sampleShipping.map((s, i) => <li key={i}>{s}</li>)}</ul>
          </div>
        </div>
      )}

      {tab === 'visit' && (
        <div className="card">
          <h3>Konkan supplier visit — full-day agenda</h3>
          <ul className="bullets" style={{ fontSize: 13 }}>{supplierVisitAgenda.map((a, i) => <li key={i}>{a}</li>)}</ul>
        </div>
      )}

      {tab === 'assoc' && (
        <div>
          <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 18, marginBottom: 14 }}>Industry associations to join</h2>
          <div className="tbl-wrap" style={{ marginBottom: 20 }}>
            <table className="tbl">
              <thead><tr><th>Association</th><th>Location</th><th>Why</th></tr></thead>
              <tbody>
                {associations.map((a, i) => (
                  <tr key={i}>
                    <td><strong>{a.name}</strong></td>
                    <td style={{ fontSize: 12 }}>{a.location}</td>
                    <td style={{ fontSize: 12 }}>{a.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 18, marginBottom: 14 }}>Bureaucracy liaisons</h2>
          <div className="tbl-wrap">
            <table className="tbl">
              <thead><tr><th>Role</th><th>Why needed</th><th>Cost ₹/mo</th><th>Sourcing</th></tr></thead>
              <tbody>
                {liaisons.map((l, i) => (
                  <tr key={i}>
                    <td><strong>{l.role}</strong></td>
                    <td style={{ fontSize: 12 }}>{l.whyNeeded}</td>
                    <td style={{ color: 'var(--c-accent)' }}>{l.costINRMonth}</td>
                    <td style={{ fontSize: 12 }}>{l.sourcing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
