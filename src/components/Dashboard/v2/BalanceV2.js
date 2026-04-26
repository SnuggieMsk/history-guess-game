import React from 'react';
import { balanceSheet, taxStructure, exitScenarios, dilutionScenarios } from '../../../data/v2Balance';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function BalanceV2() {
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Balance Sheet + Tax + Exits</div>
        <h1 className="sec-title">The Numbers Beyond P&L</h1>
        <p className="sec-sub">
          Balance sheet evolution Y1-Y5, tax structure optimisation (115BAA vs BAB,
          Sec 80JJAA, GST + RoDTEP refunds), 5 exit scenarios with promoter-return math,
          and dilution cap-table evolution.
        </p>
      </div>

      <div className="section-block">
        <h2>Balance sheet evolution (₹ lakh)</h2>
        <div className="card">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={balanceSheet} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8" />
              <XAxis dataKey="year" stroke="#5c6272" fontSize={11} />
              <YAxis stroke="#5c6272" fontSize={11} />
              <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e0d9c8', color: '#1a1f36' }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="equity" name="Equity" stackId="a" fill="#2d6a4f" />
              <Bar dataKey="debtTerm" name="Term Debt" stackId="a" fill="#0d3b66" />
              <Bar dataKey="debtWC" name="WC Debt" stackId="a" fill="#5fb3e3" />
              <Bar dataKey="payables" name="Payables" stackId="a" fill="#c5a565" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="tbl-wrap" style={{ marginTop: 14 }}>
          <table className="tbl">
            <thead>
              <tr>
                <th>Year</th>
                <th className="num">Cash</th><th className="num">Debtors</th><th className="num">Inv</th><th className="num">Fixed Assets</th><th className="num">Total Assets</th>
                <th className="num">Equity</th><th className="num">Term Debt</th><th className="num">WC Debt</th><th className="num">Payables</th>
              </tr>
            </thead>
            <tbody>
              {balanceSheet.map((b, i) => (
                <tr key={i}>
                  <td><strong>{b.year}</strong></td>
                  <td className="num">{b.cash}</td>
                  <td className="num">{b.debtors}</td>
                  <td className="num">{b.inventory}</td>
                  <td className="num">{b.fixedAssets}</td>
                  <td className="num"><strong>{b.totalAssets}</strong></td>
                  <td className="num">{b.equity}</td>
                  <td className="num">{b.debtTerm}</td>
                  <td className="num">{b.debtWC}</td>
                  <td className="num">{b.payables}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block">
        <h2>Tax structure — optimisation</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3>Corporate tax</h3>
            <p style={{ fontSize: 13 }}>{taxStructure.corporate}</p>
            <div className="callout" style={{ marginTop: 12 }}>
              <strong>Sec 115BAB (concessional new-manufacturer):</strong> {taxStructure.bab.eligibility} — <strong>{taxStructure.bab.rate}</strong>. Fallback: {taxStructure.bab.riskIfFail}.
            </div>
            <div className="callout">
              <strong>Sec 115BAA (standard concession):</strong> {taxStructure.baa.eligibility} — <strong>{taxStructure.baa.rate}</strong>. {taxStructure.baa.note}
            </div>
          </div>
          <div className="card">
            <h3>Other tax levers</h3>
            <p style={{ fontSize: 13, marginBottom: 10 }}>
              <strong>{taxStructure.jjaa.section}:</strong> {taxStructure.jjaa.benefit} — <strong style={{ color: 'var(--c-good)' }}>{taxStructure.jjaa.ourUseCase}</strong>
            </p>
            <p style={{ fontSize: 13, marginBottom: 10 }}>
              <strong>GST:</strong> {taxStructure.gst.outputRate}. {taxStructure.gst.inputCreditFlows} <em style={{ color: 'var(--c-warn)' }}>{taxStructure.gst.risk}</em>
            </p>
            <p style={{ fontSize: 13, marginBottom: 10 }}>
              <strong>RoDTEP:</strong> {taxStructure.rodtep.rate}. {taxStructure.rodtep.mechanism}
            </p>
            <p style={{ fontSize: 13 }}>
              <strong>Transfer pricing:</strong> {taxStructure.transferPricing.threshold}. {taxStructure.transferPricing.note}
            </p>
          </div>
        </div>
      </div>

      <div className="section-block">
        <h2>Exit scenarios</h2>
        {exitScenarios.map((s, i) => (
          <div key={i} className="card" style={{ marginBottom: 12, borderLeft: '3px solid var(--c-accent-2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
              <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 16, fontWeight: 600 }}>{s.type}</h3>
              <span className="pill pill-good">{s.promoterReturn}</span>
            </div>
            <div className="grid grid-3" style={{ fontSize: 12.5 }}>
              <div><strong>Likely buyer:</strong> {s.likelyBuyer}</div>
              <div><strong>Multiple:</strong> {s.valuationMultiple}</div>
              <div><strong>Timing:</strong> {s.timing}</div>
              <div><strong>Valuation:</strong> <span style={{ color: 'var(--c-accent)' }}>{s.valuationRange}</span></div>
              <div><strong>Net proceeds:</strong> {s.proceedsAfterDebt}</div>
              <div><strong>Fit:</strong> <em>{s.fit}</em></div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-block">
        <h2>Dilution cap-table evolution</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Event</th><th>Capital raised</th><th>Dilution</th><th>Note</th></tr></thead>
            <tbody>
              {dilutionScenarios.map((d, i) => (
                <tr key={i}>
                  <td><strong>{d.event}</strong></td>
                  <td>{d.equityRaised}</td>
                  <td style={{ color: 'var(--c-accent)' }}>{d.dilution}</td>
                  <td style={{ fontSize: 12 }}>{d.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
