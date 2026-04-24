import React from 'react';
import { centralSchemesV2, stateSchemesV2, captureTable, applicationTimeline, namedConsultants } from '../../../data/v2Schemes';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function SchemesV2() {
  const captureChartData = captureTable.map(r => {
    const [lo, hi] = r.amountINRcr.includes('-')
      ? r.amountINRcr.split('-').map(parseFloat)
      : [parseFloat(r.amountINRcr), parseFloat(r.amountINRcr)];
    return { scheme: r.scheme.slice(0, 28), mid: (lo + hi) / 2, risk: r.risk };
  });

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Subsidy Capture Mechanics</div>
        <h1 className="sec-title">How to Actually Get the Money</h1>
        <p className="sec-sub">
          Every scheme with real application mechanics, realistic disbursal timing,
          what it pays for, what it doesn't, and the traps. Revised capture: ₹12-15 cr
          over 7 years — not v1's naive ₹5.2 cr in Y1.
        </p>
      </div>

      <div className="card">
        <h3>Capture by scheme (₹ cr mid-range)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={captureChartData} layout="vertical" margin={{ top: 5, right: 15, left: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8" />
            <XAxis type="number" stroke="#5c6272" fontSize={11} />
            <YAxis type="category" dataKey="scheme" stroke="#5c6272" fontSize={10} width={180} />
            <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e0d9c8', color: '#1a1f36' }}
              formatter={(v, n, p) => [`₹${v} cr · ${p.payload.risk} risk`, 'Capture']} />
            <Bar dataKey="mid" name="₹ cr" fill="#c5a565" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="section-block">
        <h2>Central schemes</h2>
        {centralSchemesV2.map(s => (
          <div key={s.id} className="card" style={{ marginBottom: 16, borderLeft: '4px solid var(--c-accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 10, flexWrap: 'wrap' }}>
              <div>
                <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 17, color: 'var(--c-text)', fontWeight: 600 }}>{s.name}</h3>
                <div style={{ fontSize: 11, color: 'var(--c-text-dim)', marginTop: 2 }}>{s.ministry} · {s.mode}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'Georgia,serif', fontSize: 22, fontWeight: 600, color: 'var(--c-good)' }}>{s.ourCapture}</div>
                <div style={{ fontSize: 11, color: 'var(--c-text-dim)' }}>{s.tranches} tranches · {s.disbursalTiming}</div>
              </div>
            </div>
            <div className="grid grid-2" style={{ marginBottom: 12 }}>
              <div>
                <strong style={{ fontSize: 11, color: 'var(--c-good)', textTransform: 'uppercase', letterSpacing: 1 }}>Pays for</strong>
                <ul className="bullets" style={{ marginTop: 4, fontSize: 12.5 }}>
                  {s.whatPays.map((w, i) => <li key={i}>{w}</li>)}
                </ul>
              </div>
              <div>
                <strong style={{ fontSize: 11, color: 'var(--c-bad)', textTransform: 'uppercase', letterSpacing: 1 }}>Does NOT pay</strong>
                <ul className="bullets" style={{ marginTop: 4, fontSize: 12.5 }}>
                  {s.whatDoesnt.map((w, i) => <li key={i}>{w}</li>)}
                </ul>
              </div>
            </div>
            <div style={{ marginBottom: 10 }}>
              <strong style={{ fontSize: 11, color: 'var(--c-accent)', textTransform: 'uppercase', letterSpacing: 1 }}>Application steps</strong>
              <ol style={{ marginTop: 4, paddingLeft: 20, fontSize: 12.5 }}>
                {s.applicationSteps.map((a, i) => <li key={i} style={{ margin: '4px 0' }}>{a}</li>)}
              </ol>
            </div>
            {s.traps && s.traps.length > 0 && (
              <div className="callout" style={{ borderLeftColor: 'var(--c-bad)', background: '#f8ebe8' }}>
                <strong>Traps: </strong>{s.traps.join(' · ')}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section-block">
        <h2>Maharashtra state schemes</h2>
        {stateSchemesV2.map(s => (
          <div key={s.id} className="card" style={{ marginBottom: 12, borderLeft: '3px solid var(--c-accent-2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
              <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 15, color: 'var(--c-text)', fontWeight: 600 }}>{s.name}</h3>
              <span className="pill pill-good">{s.ourCapture}</span>
            </div>
            <ul className="bullets" style={{ fontSize: 12.5 }}>{s.benefits.map((b, i) => <li key={i}>{b}</li>)}</ul>
            <div style={{ marginTop: 10, fontSize: 12, color: 'var(--c-text-dim)' }}>
              <strong>Apply via:</strong> {s.applicationPath} · <strong>Timeline:</strong> {s.timeline}
            </div>
          </div>
        ))}
      </div>

      <div className="section-block">
        <h2>Application timeline</h2>
        <div className="card">
          <table className="tbl">
            <thead><tr><th>Month</th><th>Action</th></tr></thead>
            <tbody>
              {applicationTimeline.map((t, i) => (
                <tr key={i}>
                  <td><strong style={{ color: 'var(--c-accent)' }}>{t.month >= 0 ? `M+${t.month}` : `M${t.month}`}</strong></td>
                  <td style={{ fontSize: 13 }}>{t.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block">
        <h2>Named DPR consultants</h2>
        <div className="grid grid-2">
          {namedConsultants.map((c, i) => (
            <div key={i} className="card">
              <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 15, fontWeight: 600 }}>{c.firm}</h3>
              <p style={{ fontSize: 12, color: 'var(--c-text-dim)', marginTop: 4 }}>{c.location}</p>
              <p style={{ fontSize: 12, color: 'var(--c-accent)', marginTop: 6 }}>{c.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
