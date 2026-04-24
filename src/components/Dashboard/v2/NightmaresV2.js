import React, { useState } from 'react';
import { nightmares } from '../../../data/v2Nightmares';

export default function NightmaresV2() {
  const [open, setOpen] = useState(nightmares[0].id);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Worst-Case Playbook</div>
        <h1 className="sec-title">When It Goes Wrong — Day-by-Day Response</h1>
        <p className="sec-sub">
          Every seafood operator fears these {nightmares.length} nightmares. Each one
          has: frequency, immediate + cascading damage, Day-1 / Week-1 / Month-1 response
          SOPs, prevention playbook, and escape value. Memorize before commissioning.
        </p>
      </div>

      {nightmares.map(n => {
        const isOpen = open === n.id;
        return (
          <div key={n.id} className="card" style={{ marginBottom: 12, borderLeft: '4px solid var(--c-bad)' }}>
            <div onClick={() => setOpen(isOpen ? null : n.id)} style={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                <div>
                  <span className="pill pill-bad" style={{ marginBottom: 6, display: 'inline-block' }}>{n.frequency}</span>
                  <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 17, color: 'var(--c-text)', fontWeight: 600 }}>{n.title}</h3>
                </div>
                <span style={{ fontSize: 22, color: 'var(--c-accent)' }}>{isOpen ? '−' : '+'}</span>
              </div>
              <p style={{ fontSize: 12.5, color: 'var(--c-text-dim)', marginTop: 8 }}>
                <strong style={{color:'var(--c-bad)'}}>Immediate: </strong>{n.immediateDamage} ·
                {' '}<strong style={{color:'var(--c-warn)'}}>Cascade: </strong>{n.cascadingDamage}
              </p>
            </div>
            {isOpen && (
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--c-border)' }}>
                <div className="grid grid-3">
                  <div>
                    <strong style={{ fontSize: 11, color: 'var(--c-bad)', textTransform: 'uppercase', letterSpacing: 1 }}>Day 1 response</strong>
                    <ul className="bullets" style={{ marginTop: 6, fontSize: 12.5 }}>
                      {n.day1Response.map((a, i) => <li key={i}>{a}</li>)}
                    </ul>
                  </div>
                  <div>
                    <strong style={{ fontSize: 11, color: 'var(--c-warn)', textTransform: 'uppercase', letterSpacing: 1 }}>Week 1 response</strong>
                    <ul className="bullets" style={{ marginTop: 6, fontSize: 12.5 }}>
                      {n.week1Response.map((a, i) => <li key={i}>{a}</li>)}
                    </ul>
                  </div>
                  <div>
                    <strong style={{ fontSize: 11, color: 'var(--c-accent)', textTransform: 'uppercase', letterSpacing: 1 }}>Month 1 response</strong>
                    <ul className="bullets" style={{ marginTop: 6, fontSize: 12.5 }}>
                      {n.month1Response.map((a, i) => <li key={i}>{a}</li>)}
                    </ul>
                  </div>
                </div>
                <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid var(--c-border)' }}>
                  <strong style={{ fontSize: 11, color: 'var(--c-good)', textTransform: 'uppercase', letterSpacing: 1 }}>Prevention</strong>
                  <ul className="bullets" style={{ marginTop: 6, fontSize: 12.5 }}>
                    {Array.isArray(n.prevention) ? n.prevention.map((a, i) => <li key={i}>{a}</li>) : <li>{n.prevention}</li>}
                  </ul>
                </div>
                <div className="callout" style={{ marginTop: 12 }}>
                  <strong>If we handle it right: </strong>{n.escapeValue}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
