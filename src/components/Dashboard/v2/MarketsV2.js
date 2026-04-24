import React from 'react';
import { destinationCountries, y3AllocationSummary } from '../../../data/v2Markets';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

const MARKET_COLOR = {
  'jp':'#a8322d','es':'#c5a565','hk':'#0d3b66','sg':'#2d6a4f',
  'us':'#7a5b8c','gcc':'#b8860b','cn':'#5fb3e3','uk':'#0d3b66',
};

const DIFFICULTY_LABEL = ['', '★', '★★', '★★★', '★★★★', '★★★★★'];

export default function MarketsV2() {
  const topMarkets = [...y3AllocationSummary].sort((a, b) => b.rev - a.rev);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Destination Deep Dive</div>
        <h1 className="sec-title">Why We Still Win Against Their Own Fleets</h1>
        <p className="sec-sub">
          Japan has 170,000 vessels. Spain has Europe's largest fleet. So why would they buy
          Indian seafood? Per-country honest analysis: their own fishing industry, who they
          already import from, why we win, why we could lose, and our mitigation.
        </p>
      </div>

      <div className="card">
        <h3>Y3 revenue allocation by market</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topMarkets} margin={{ top: 5, right: 10, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8" />
            <XAxis dataKey="market" stroke="#5c6272" fontSize={11} />
            <YAxis stroke="#5c6272" fontSize={11} />
            <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e0d9c8', color: '#1a1f36' }}
              formatter={(v, n) => n === 'rev' ? [`₹${v} cr`, 'Revenue'] : n === 'mt' ? [`${v} MT`, 'Tonnage'] : v} />
            <Bar dataKey="rev" name="Revenue ₹ cr">
              {topMarkets.map((e, i) => {
                const id = Object.keys(MARKET_COLOR).find(k => e.market.toLowerCase().includes(k)) || 'hk';
                return <Cell key={i} fill={MARKET_COLOR[id] || '#0d3b66'} />;
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="section-block">
        {destinationCountries.map(c => (
          <div key={c.id} className="card" style={{ marginBottom: 16, borderLeft: `4px solid ${MARKET_COLOR[c.id] || '#0d3b66'}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
              <div>
                <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 22, color: 'var(--c-text)', fontWeight: 600 }}>{c.name}</h3>
                <div style={{ fontSize: 12.5, color: 'var(--c-text-dim)', marginTop: 2, fontStyle: 'italic' }}>{c.priority}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className="pill pill-warn">Difficulty {DIFFICULTY_LABEL[c.difficulty]}</span>
              </div>
            </div>

            <div className="grid grid-2" style={{ marginBottom: 12, fontSize: 13 }}>
              <div>
                <strong style={{ fontSize: 11, color: 'var(--c-accent)', textTransform: 'uppercase', letterSpacing: 1 }}>Their own fishery</strong>
                <p style={{ marginTop: 4 }}>{c.ownFleet}</p>
              </div>
              <div>
                <strong style={{ fontSize: 11, color: 'var(--c-accent)', textTransform: 'uppercase', letterSpacing: 1 }}>Import dependence</strong>
                <p style={{ marginTop: 4 }}>{c.importDependence}</p>
              </div>
            </div>

            {c.yellowfinGap && (
              <div style={{ marginBottom: 10, fontSize: 13 }}>
                <strong style={{ color: 'var(--c-accent)' }}>Yellowfin gap: </strong>{c.yellowfinGap}
              </div>
            )}

            <div style={{ marginBottom: 10 }}>
              <strong style={{ fontSize: 11, color: 'var(--c-text-dim)', textTransform: 'uppercase', letterSpacing: 1 }}>Current top suppliers</strong>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
                {c.topSuppliers.map((s, i) => <span key={i} className="pill pill-mute">{s}</span>)}
              </div>
            </div>

            <div className="grid grid-2">
              <div>
                <strong style={{ fontSize: 11, color: 'var(--c-good)', textTransform: 'uppercase', letterSpacing: 1 }}>Why we win</strong>
                <ul className="bullets" style={{ marginTop: 4, fontSize: 12.5 }}>
                  {c.whyWeWin.map((w, i) => <li key={i}>{w}</li>)}
                </ul>
              </div>
              <div>
                <strong style={{ fontSize: 11, color: 'var(--c-bad)', textTransform: 'uppercase', letterSpacing: 1 }}>Why we could lose</strong>
                <ul className="bullets" style={{ marginTop: 4, fontSize: 12.5 }}>
                  {c.whyWeCouldLose.map((w, i) => <li key={i}>{w}</li>)}
                </ul>
              </div>
            </div>

            <div style={{ marginTop: 12, paddingTop: 10, borderTop: '1px solid var(--c-border)' }}>
              <strong style={{ fontSize: 11, color: 'var(--c-accent-2)', textTransform: 'uppercase', letterSpacing: 1 }}>Mitigations</strong>
              <ul className="bullets" style={{ marginTop: 4, fontSize: 12.5 }}>
                {c.mitigations.map((m, i) => <li key={i}>{m}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
