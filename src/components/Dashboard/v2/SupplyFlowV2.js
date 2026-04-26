import React, { useState } from 'react';
import { supplyFlows, flowComparison } from '../../../data/v2SupplyFlow';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const STAGE_COLORS = ['#2d6a4f','#0d3b66','#5fb3e3','#7fbcd0','#92c7b6','#cfd76f','#b8860b','#c5a565','#a8322d','#7a5b8c','#5c6272'];

export default function SupplyFlowV2() {
  const [company, setCompany] = useState('us');
  const f = supplyFlows[company];

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Supply Chain Visual Flows</div>
        <h1 className="sec-title">Trace Every Prawn — Pond to Shelf</h1>
        <p className="sec-sub">
          Full node-by-node supply chain for each competitor. Cost, time, and yield at every node.
          Compare structurally where they win, where they bleed. {Object.keys(supplyFlows).length} chains visualised.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 18 }}>
        {Object.keys(supplyFlows).map(c => (
          <button key={c} onClick={() => setCompany(c)} style={{
            padding: '6px 14px', border: '1px solid var(--c-border)', borderRadius: 999,
            cursor: 'pointer', fontSize: 11, fontWeight: 600,
            background: company === c ? (c === 'us' ? '#2d6a4f' : 'var(--c-accent)') : 'var(--c-surface)',
            color: company === c ? '#fff' : 'var(--c-text)',
          }}>{c === 'us' ? '⭐ Us (Konkan SF)' : c}</button>
        ))}
      </div>

      <div className="card" style={{ borderLeft: `4px solid ${company === 'us' ? '#2d6a4f' : 'var(--c-accent)'}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
          <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 20, fontWeight: 600 }}>{f.company}</h3>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 12, color: 'var(--c-text-dim)' }}>{f.keyMetric}</div>
            <div style={{ fontSize: 12, color: company === 'us' ? 'var(--c-good)' : 'var(--c-bad)', marginTop: 4, fontWeight: 600 }}>
              {f.advantage || `Weak link: ${f.weakLink}`}
            </div>
          </div>
        </div>

        {/* Flow diagram — vertical with arrows */}
        <div style={{ marginTop: 24, position: 'relative' }}>
          {f.chain.map((s, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: 12 }}>
              {i < f.chain.length - 1 && (
                <div style={{ position: 'absolute', left: 21, top: 60, height: 24, width: 2, background: STAGE_COLORS[i % STAGE_COLORS.length], opacity: 0.4 }} />
              )}
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{
                  width: 44, height: 44, flexShrink: 0,
                  background: STAGE_COLORS[i % STAGE_COLORS.length],
                  color: '#fff', borderRadius: 4,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Georgia,serif', fontWeight: 700, fontSize: 16,
                }}>{i + 1}</div>
                <div style={{ flex: 1, padding: '8px 14px', background: 'var(--c-surface-2)', borderRadius: 4, border: '1px solid var(--c-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                    <strong style={{ fontFamily: 'Georgia,serif', fontSize: 14 }}>{s.stage}</strong>
                    <div style={{ display: 'flex', gap: 8, fontSize: 11 }}>
                      <span className="pill pill-info">{s.cost}</span>
                      <span className="pill pill-mute">{s.time}</span>
                      <span className="pill pill-good">{s.yield}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--c-text-dim)', marginTop: 4 }}><em>{s.node}</em></div>
                  {s.detail && <div style={{ fontSize: 12, color: 'var(--c-text)', marginTop: 4 }}>{s.detail}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-block">
        <h2>Cross-competitor structural comparison</h2>
        <div className="card">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={flowComparison} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8" />
              <XAxis dataKey="metric" stroke="#5c6272" fontSize={10} interval={0} angle={-15} textAnchor="end" height={70} />
              <YAxis stroke="#5c6272" fontSize={11} />
              <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e0d9c8', color: '#1a1f36' }} />
              <Legend wrapperStyle={{ fontSize: 10 }} />
              <Bar dataKey="avanti" fill="#0d3b66" />
              <Bar dataKey="apex" fill="#a8322d" />
              <Bar dataKey="devi" fill="#c5a565" />
              <Bar dataKey="gadre" fill="#7a5b8c" />
              <Bar dataKey="us" fill="#2d6a4f" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="tbl-wrap" style={{ marginTop: 14 }}>
          <table className="tbl">
            <thead><tr><th>Metric</th><th className="num">Avanti</th><th className="num">Apex</th><th className="num">Nekkanti</th><th className="num">Devi</th><th className="num">IFB</th><th className="num">Gadre</th><th className="num">Coastal</th><th className="num">Falcon</th><th className="num" style={{background:'#faf5e5'}}>Us</th></tr></thead>
            <tbody>
              {flowComparison.map((r, i) => (
                <tr key={i}>
                  <td><strong>{r.metric}</strong></td>
                  <td className="num">{r.avanti}</td>
                  <td className="num">{r.apex}</td>
                  <td className="num">{r.nekkanti}</td>
                  <td className="num">{r.devi}</td>
                  <td className="num">{r.ifbAgro}</td>
                  <td className="num">{r.gadre}</td>
                  <td className="num">{r.coastal}</td>
                  <td className="num">{r.falcon}</td>
                  <td className="num" style={{ color: 'var(--c-good)', fontWeight: 700, background: '#faf5e5' }}>{r.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="callout">
        <strong>Structural insight:</strong> Of all 9 chains, only ours runs three distinct outbound lanes (sea container + air perishable + future inland air). All AP majors run single-lane chains. Gadre and IFB run 1-2. This multi-modal flexibility is a structural moat that takes ₹50+ cr to replicate.
      </div>
    </>
  );
}
