import React from 'react';
import { thesisOneLiner, pillars, revenueMatrix, killConditions, vsV1 } from '../../../data/v2Thesis';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

export default function ThesisV2() {
  const totalRev = revenueMatrix.reduce((s, r) => s + r.revINRcr, 0);
  const blendedGM = revenueMatrix.reduce((s, r) => s + r.gm * r.revINRcr, 0) / totalRev;

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Sharpened Thesis</div>
        <h1 className="sec-title">What We Actually Win On</h1>
        <p className="sec-sub">
          {thesisOneLiner}
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Pillars</h3><div className="big">3</div><div className="sub">B live · C MSC · filler</div></div>
        <div className="card"><h3>Y3 revenue target</h3><div className="big">₹{totalRev.toFixed(0)} cr</div><div className="sub">2,030 MT across 7 segments</div></div>
        <div className="card"><h3>Blended GM</h3><div className="big" style={{color:'var(--c-good)'}}>{blendedGM.toFixed(0)}%</div><div className="sub">vs v1's 11.5%</div></div>
        <div className="card"><h3>Kill conditions</h3><div className="big">{killConditions.length}</div><div className="sub">Quarterly board review</div></div>
      </div>

      <div className="section-block">
        <h2>The three pillars</h2>
        {pillars.map(p => (
          <div className="card" key={p.id} style={{ marginBottom: 16, borderLeft: `4px solid ${p.color}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: 'var(--c-text)', fontWeight: 600, letterSpacing: '-0.2px' }}>
                {p.title}
              </h3>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 24, fontWeight: 600, color: p.color }}>₹{p.y3RevenueINRcr} cr</div>
                <div style={{ fontSize: 11, color: 'var(--c-text-dim)', textTransform: 'uppercase', letterSpacing: 1 }}>Y3 revenue · {p.gmPct}% GM</div>
              </div>
            </div>

            <div className="tbl-wrap" style={{ marginBottom: 12 }}>
              <table className="tbl">
                <thead>
                  <tr><th>Product</th><th>Source</th><th className="num">FOB</th><th className="num">GM</th><th className="num">Y3 MT</th></tr>
                </thead>
                <tbody>
                  {p.products.map((pr, i) => (
                    <tr key={i}>
                      <td><strong>{pr.name}</strong></td>
                      <td style={{ fontSize: 12.5 }}>{pr.source}</td>
                      <td className="num">${pr.fobUSD}</td>
                      <td className="num">{pr.gm}</td>
                      <td className="num">{pr.y3mt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginBottom: 10, fontSize: 13.5, color: 'var(--c-text)' }}>
              <strong style={{ color: p.color }}>Target buyers: </strong>{p.buyers}
            </div>

            <div>
              <strong style={{ fontSize: 12, color: p.color, textTransform: 'uppercase', letterSpacing: 1 }}>Why we win</strong>
              <ul className="bullets" style={{ marginTop: 6 }}>
                {p.whyWin.map((w, i) => <li key={i}>{w}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="section-block grid grid-2">
        <div className="card">
          <h3>Y3 revenue architecture</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueMatrix} layout="vertical" margin={{ top: 5, right: 15, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8" />
              <XAxis type="number" stroke="#5c6272" fontSize={11} />
              <YAxis type="category" dataKey="segment" stroke="#5c6272" fontSize={10} width={180} />
              <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e0d9c8', color: '#1a1f36' }} />
              <Bar dataKey="revINRcr" name="Revenue ₹ cr" radius={[0, 4, 4, 0]}>
                {revenueMatrix.map((r, i) => {
                  const pillar = r.segment.startsWith('Vannamei') ? '#c5a565'
                               : r.segment.startsWith('Live') || r.segment.includes('pomfret') ? '#0d3b66'
                               : '#2d6a4f';
                  return <Cell key={i} fill={pillar} />;
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>v1 vs v2 — what changed</h3>
          <table className="tbl">
            <thead><tr><th>Dimension</th><th>v1</th><th>v2</th></tr></thead>
            <tbody>
              {vsV1.map((r, i) => (
                <tr key={i}>
                  <td><strong>{r.dim}</strong></td>
                  <td style={{ color: 'var(--c-bad)', fontSize: 12.5 }}>{r.v1}</td>
                  <td style={{ color: 'var(--c-good)', fontSize: 12.5, fontWeight: 600 }}>{r.v2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block">
        <h2>Kill conditions</h2>
        <p className="sec-sub" style={{ marginBottom: 16 }}>
          Five explicit triggers that end the thesis. Quarterly board review.
          If any condition fires, execute the mitigation — or exit at breakeven.
        </p>
        {killConditions.map((k, i) => (
          <div className="card" key={i} style={{ marginBottom: 12, borderLeft: '3px solid var(--c-bad)' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 8 }}>
              <span className="pill pill-bad" style={{ flexShrink: 0 }}>#{i + 1}</span>
              <strong style={{ fontSize: 14, color: 'var(--c-text)' }}>{k.trigger}</strong>
            </div>
            <p style={{ fontSize: 13, color: 'var(--c-text)', marginBottom: 6 }}>
              <strong style={{ color: 'var(--c-bad)' }}>Effect: </strong>{k.effect}
            </p>
            <p style={{ fontSize: 13, color: 'var(--c-text)' }}>
              <strong style={{ color: 'var(--c-good)' }}>Mitigation: </strong>{k.mitigation}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
