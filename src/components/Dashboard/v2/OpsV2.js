import React, { useState } from 'react';
import { ccps, antibioticScreen, microTests, coldChainSops, labEquipment, labAccreditation, failureModes, waterEffluent } from '../../../data/v2Ops';

const TABS = [
  { id: 'ccp', label: 'HACCP CCPs' },
  { id: 'cold', label: 'Cold Chain SOPs' },
  { id: 'lab', label: 'Lab & Antibiotic Screen' },
  { id: 'fail', label: 'Failure Modes' },
  { id: 'water', label: 'Water & ZLD' },
];

export default function OpsV2() {
  const [tab, setTab] = useState('ccp');
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Operations Playbook</div>
        <h1 className="sec-title">SOPs, Not Brochure-Speak</h1>
        <p className="sec-sub">
          Concrete operating standards replacing v1's "HACCP-grade plant" hand-waves.
          Five CCPs, 7 antibiotic analytes with LOD + action limits, cold-chain stage
          targets, failure-mode responses with owners, water/ZLD architecture.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            style={{
              padding: '8px 16px', border: '1px solid var(--c-border)',
              borderRadius: 4, cursor: 'pointer',
              background: tab === t.id ? 'var(--c-accent)' : 'transparent',
              color: tab === t.id ? '#fff' : 'var(--c-text)',
              fontSize: 13, fontWeight: 500,
            }}>{t.label}</button>
        ))}
      </div>

      {tab === 'ccp' && (
        <div>
          {ccps.map(c => (
            <div key={c.id} className="card" style={{ marginBottom: 12, borderLeft: '3px solid var(--c-accent)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, marginBottom: 8 }}>
                <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 16, color: 'var(--c-text)', fontWeight: 600 }}>
                  CCP #{c.id} · {c.name}
                </h3>
                <span className="pill pill-bad">Critical</span>
              </div>
              <div className="grid grid-2" style={{ fontSize: 13 }}>
                <div><strong>Hazard:</strong> {c.hazard}</div>
                <div><strong>Target:</strong> {c.target}</div>
                <div><strong>Action limit:</strong> <span style={{ color: 'var(--c-bad)' }}>{c.limit}</span></div>
                <div><strong>Monitoring:</strong> {c.monitoring}</div>
              </div>
              <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid var(--c-border)' }}>
                <strong style={{ color: 'var(--c-good)' }}>Action on breach:</strong> {c.action}
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'cold' && (
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Stage</th><th>Target</th><th>Note</th></tr></thead>
            <tbody>
              {coldChainSops.map((s, i) => (
                <tr key={i}>
                  <td><strong>{s.stage}</strong></td>
                  <td style={{ color: 'var(--c-accent)', fontWeight: 600 }}>{s.target}</td>
                  <td style={{ fontSize: 12 }}>{s.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'lab' && (
        <>
          <div className="callout">
            <strong>Lab accreditation target:</strong> {labAccreditation.target} · {labAccreditation.timeline} · {labAccreditation.costRange}.
            {' '}{labAccreditation.note}
          </div>

          <div className="section-block">
            <h2>Antibiotic + banned-substance screen</h2>
            <div className="tbl-wrap">
              <table className="tbl">
                <thead><tr><th>Analyte</th><th>Method</th><th className="num">LOD</th><th>Action limit</th><th className="num">% lots</th></tr></thead>
                <tbody>
                  {antibioticScreen.map((a, i) => (
                    <tr key={i}>
                      <td><strong>{a.analyte}</strong></td>
                      <td style={{ fontSize: 12 }}>{a.method}</td>
                      <td className="num">{a.lod}</td>
                      <td style={{ color: 'var(--c-bad)', fontSize: 12 }}>{a.action}</td>
                      <td className="num">{a.testPct}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="section-block">
            <h2>Microbiological testing</h2>
            <div className="tbl-wrap">
              <table className="tbl">
                <thead><tr><th>Target</th><th>Method (ISO)</th><th>Action limit</th></tr></thead>
                <tbody>
                  {microTests.map((m, i) => (
                    <tr key={i}>
                      <td><strong>{m.target}</strong></td>
                      <td style={{ fontSize: 12 }}>{m.method}</td>
                      <td style={{ color: 'var(--c-bad)', fontSize: 12 }}>{m.limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="section-block">
            <h2>Lab equipment capex</h2>
            <div className="tbl-wrap">
              <table className="tbl">
                <thead><tr><th>Item</th><th className="num">₹L</th><th>Role</th></tr></thead>
                <tbody>
                  {labEquipment.map((e, i) => (
                    <tr key={i}>
                      <td>{e.item}</td>
                      <td className="num">{e.capexL}</td>
                      <td style={{ fontSize: 12 }}>{e.role}</td>
                    </tr>
                  ))}
                  <tr><td><strong>Total</strong></td>
                      <td className="num"><strong>{labEquipment.reduce((s,e)=>s+e.capexL,0)}</strong></td>
                      <td></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {tab === 'fail' && (
        <div>
          {failureModes.map((f, i) => (
            <div key={i} className="card" style={{ marginBottom: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 15, color: 'var(--c-text)', fontWeight: 600 }}>{f.mode}</h3>
                <span className="pill pill-info">{f.owner}</span>
              </div>
              <p style={{ fontSize: 13, marginBottom: 6 }}><strong>Trigger:</strong> {f.trigger}</p>
              <p style={{ fontSize: 13 }}><strong style={{ color: 'var(--c-good)' }}>Response:</strong> {f.response}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'water' && (
        <div className="card">
          <h3>Water & effluent architecture</h3>
          <table className="tbl">
            <tbody>
              <tr><td><strong>Intake</strong></td><td>{waterEffluent.intake}</td></tr>
              <tr><td><strong>Use rate</strong></td><td>{waterEffluent.useRate}</td></tr>
              <tr><td><strong>Y3 daily demand</strong></td><td>{waterEffluent.y3DailyDemand}</td></tr>
              <tr><td><strong>ZLD stages</strong></td><td>{waterEffluent.zldStages.join(' → ')}</td></tr>
              <tr><td><strong>ZLD capex</strong></td><td>{waterEffluent.zldCapex}</td></tr>
              <tr><td><strong>ZLD opex</strong></td><td>{waterEffluent.zldOpex}</td></tr>
              <tr><td><strong>Recovery target</strong></td><td>{waterEffluent.recoveryTarget}</td></tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
