import React from 'react';
import { insuranceProgram, totalAnnualInsuranceCost, insuranceTimeline } from '../../../data/v2Insurance';

export default function InsuranceV2() {
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Insurance Program</div>
        <h1 className="sec-title">12 Insurance Lines, Costed</h1>
        <p className="sec-sub">
          Every line we need with named insurers + brokers + premium budget.
          Y1 ₹{totalAnnualInsuranceCost.y1INRl} L · Y3 ₹{totalAnnualInsuranceCost.y3INRl} L · Y5 ₹{totalAnnualInsuranceCost.y5INRl} L.
          Includes ECGC export credit insurance — non-optional for open-account buyers.
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Insurance lines</h3><div className="big">{insuranceProgram.length}</div></div>
        <div className="card"><h3>Y1 budget</h3><div className="big">₹{totalAnnualInsuranceCost.y1INRl} L</div></div>
        <div className="card"><h3>Y3 budget</h3><div className="big">₹{totalAnnualInsuranceCost.y3INRl} L</div></div>
        <div className="card"><h3>Y5 budget</h3><div className="big">₹{totalAnnualInsuranceCost.y5INRl} L</div></div>
      </div>

      <div className="section-block">
        <h2>Insurance procurement timeline</h2>
        <div className="card">
          <table className="tbl">
            <thead><tr><th>Stage</th><th>Priority lines</th></tr></thead>
            <tbody>
              {insuranceTimeline.map((t, i) => (
                <tr key={i}>
                  <td><strong>{t.stage}</strong></td>
                  <td style={{ fontSize: 12.5 }}>{t.priority.join(' · ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block">
        <h2>Line-by-line program</h2>
        {insuranceProgram.map((l, i) => (
          <div key={i} className="card" style={{ marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
              <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 15, fontWeight: 600 }}>{l.line}</h3>
              <span className="pill pill-good">₹{l.annualPremiumINRl} L/yr</span>
            </div>
            <div className="grid grid-2" style={{ fontSize: 12.5 }}>
              <div><strong>Cover scope:</strong> {l.coverScope}</div>
              <div><strong>Risk covered:</strong> {l.risk}</div>
              <div><strong>Insurers:</strong> {l.insurers.join(' · ')}</div>
              <div><strong>Broker:</strong> {l.broker}</div>
            </div>
            <div style={{ marginTop: 10, paddingTop: 8, borderTop: '1px solid var(--c-border)', fontSize: 12, color: 'var(--c-text-dim)', fontStyle: 'italic' }}>
              {l.notes}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
