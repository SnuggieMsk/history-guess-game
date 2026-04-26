import React, { useState } from 'react';
import { dayZero, week1, week2to4, month2to3, month4to9, month10to12, dailyRhythm, monthlyCadence, quarterlyReview, annualReview, firstYearMilestoneSummary } from '../../../data/v2Playbook';

const PHASES = [
  { id: 'dayZero', label: 'Day 0 — Monday morning' },
  { id: 'week1',   label: 'Week 1' },
  { id: 'week2to4', label: 'Weeks 2-4' },
  { id: 'month2to3', label: 'Months 2-3' },
  { id: 'month4to9', label: 'Months 4-9' },
  { id: 'month10to12', label: 'Months 10-12' },
  { id: 'daily', label: 'Daily operating rhythm' },
  { id: 'monthly', label: 'Monthly cadence' },
  { id: 'quarterly', label: 'Quarterly review' },
  { id: 'annual', label: 'Annual review' },
];

export default function PlaybookV2() {
  const [active, setActive] = useState('dayZero');

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Zero-to-Shop Operator Playbook</div>
        <h1 className="sec-title">From Monday Morning to Year 5</h1>
        <p className="sec-sub">
          A complete first-timer spoon-fed: hour-by-hour on Day 0, day-by-day in Week 1,
          then week / month / quarter / year cadence. What you do, whom you call, what it
          costs, what timeline to expect.
        </p>
      </div>

      <div className="section-block">
        <h2>Year 1 milestones at a glance</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Month</th><th>Milestone</th></tr></thead>
            <tbody>
              {firstYearMilestoneSummary.map((m, i) => (
                <tr key={i}>
                  <td><strong style={{color:'var(--c-accent)'}}>M{m.month}</strong></td>
                  <td>{m.milestone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, marginTop: 24, marginBottom: 20, flexWrap: 'wrap' }}>
        {PHASES.map(p => (
          <button key={p.id} onClick={() => setActive(p.id)}
            style={{
              padding: '8px 14px', border: '1px solid var(--c-border)',
              borderRadius: 4, cursor: 'pointer', fontSize: 12, fontWeight: 500,
              background: active === p.id ? 'var(--c-accent)' : 'var(--c-surface)',
              color: active === p.id ? '#fff' : 'var(--c-text)',
            }}>{p.label}</button>
        ))}
      </div>

      {active === 'dayZero' && (
        <div className="card">
          <h3>Day 0 · hour by hour</h3>
          {dayZero.hour.map((h, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, padding: '12px 0', borderBottom: i < dayZero.hour.length - 1 ? '1px solid var(--c-border)' : 'none' }}>
              <span style={{ fontFamily: 'Georgia,serif', fontSize: 15, fontWeight: 700, color: 'var(--c-accent)', width: 60, flexShrink: 0 }}>{h.h}</span>
              <span style={{ fontSize: 13.5, color: 'var(--c-text)' }}>{h.action}</span>
            </div>
          ))}
        </div>
      )}
      {active === 'week1' && (
        <div className="card">
          <h3>Week 1 checklist</h3>
          <ol style={{ paddingLeft: 24 }}>{week1.map((s, i) => <li key={i} style={{ margin: '10px 0', fontSize: 13.5 }}>{s}</li>)}</ol>
        </div>
      )}
      {active === 'week2to4' && (
        <div className="card">
          <h3>Weeks 2-4</h3>
          <ul className="bullets">{week2to4.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
      )}
      {active === 'month2to3' && (
        <div className="card">
          <h3>Months 2-3</h3>
          <ul className="bullets">{month2to3.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
      )}
      {active === 'month4to9' && (
        <div className="card">
          <h3>Months 4-9 — build phase</h3>
          <ul className="bullets">{month4to9.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
      )}
      {active === 'month10to12' && (
        <div className="card">
          <h3>Months 10-12 — commissioning + first revenue</h3>
          <ul className="bullets">{month10to12.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
      )}

      {active === 'daily' && (
        <div className="grid grid-3">
          {Object.entries(dailyRhythm).map(([day, items]) => (
            <div key={day} className="card">
              <h3 style={{ textTransform: 'capitalize' }}>{day}</h3>
              <ol style={{ paddingLeft: 20 }}>
                {items.map((s, i) => <li key={i} style={{ margin: '6px 0', fontSize: 12.5 }}>{s}</li>)}
              </ol>
            </div>
          ))}
        </div>
      )}

      {active === 'monthly' && (
        <div className="card">
          <h3>Monthly cadence</h3>
          <div className="tbl-wrap">
            <table className="tbl">
              <thead><tr><th>Day of month</th><th>Action</th></tr></thead>
              <tbody>
                {monthlyCadence.map((m, i) => (
                  <tr key={i}>
                    <td><strong style={{color:'var(--c-accent)'}}>Day {m.day}</strong></td>
                    <td>{m.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {active === 'quarterly' && (
        <div className="card">
          <h3>Quarterly board / management review</h3>
          <ol style={{ paddingLeft: 24 }}>{quarterlyReview.map((s, i) => <li key={i} style={{ margin: '8px 0', fontSize: 13.5 }}>{s}</li>)}</ol>
        </div>
      )}
      {active === 'annual' && (
        <div className="card">
          <h3>Annual review</h3>
          <ol style={{ paddingLeft: 24 }}>{annualReview.map((s, i) => <li key={i} style={{ margin: '8px 0', fontSize: 13.5 }}>{s}</li>)}</ol>
        </div>
      )}
    </>
  );
}
