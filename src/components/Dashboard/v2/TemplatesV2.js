import React, { useState } from 'react';
import { templates, downloadable } from '../../../data/v2Templates';

export default function TemplatesV2() {
  const [open, setOpen] = useState(templates[0].id);
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Templates</div>
        <h1 className="sec-title">Documents You Can Print and Sign</h1>
        <p className="sec-sub">
          {templates.length} key documents (Buyer LOI, Supplier MoU, Bank term-sheet, SHA, Pitch deck, JD samples)
          with key clauses, red flags, and use-cases. Don't sign anything that's missing the listed clauses.
        </p>
      </div>

      {templates.map(t => {
        const isOpen = open === t.id;
        return (
          <div key={t.id} className="card" style={{ marginBottom: 12, borderLeft: '4px solid var(--c-accent)' }}>
            <div onClick={() => setOpen(isOpen ? null : t.id)} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
              <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 16, fontWeight: 600 }}>{t.title}</h3>
              <span style={{ fontSize: 22, color: 'var(--c-accent)' }}>{isOpen ? '−' : '+'}</span>
            </div>
            <p style={{ fontSize: 12.5, color: 'var(--c-text-dim)', marginTop: 6 }}>{t.use}</p>
            {isOpen && (
              <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid var(--c-border)' }}>
                <strong style={{ fontSize: 11, color: 'var(--c-good)', textTransform: 'uppercase', letterSpacing: 1 }}>Key clauses</strong>
                <ul className="bullets" style={{ marginTop: 6, fontSize: 12.5 }}>
                  {t.keyClauses.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
                {t.redFlags && (
                  <div style={{ marginTop: 12, paddingTop: 10, borderTop: '1px solid var(--c-border)' }}>
                    <strong style={{ fontSize: 11, color: 'var(--c-bad)', textTransform: 'uppercase', letterSpacing: 1 }}>Red flags</strong>
                    <ul className="bullets" style={{ marginTop: 6, fontSize: 12.5 }}>
                      {t.redFlags.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}

      <div className="section-block">
        <h2>Downloadable templates roadmap</h2>
        <div className="card">
          <ul className="bullets">{downloadable.map((d, i) => <li key={i}>{d}</li>)}</ul>
          <p style={{ fontSize: 12, color: 'var(--c-text-dim)', marginTop: 10, fontStyle: 'italic' }}>
            Until templates are downloadable, take this list to your CS / lawyer / CA — they will draft.
          </p>
        </div>
      </div>
    </>
  );
}
