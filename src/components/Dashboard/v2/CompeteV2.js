import React, { useState } from 'react';
import { competitorsV2, globalBenchmarks, whereWePlay } from '../../../data/v2Compete';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import SortableTable from '../SortableTable';

export default function CompeteV2() {
  const [cat, setCat] = useState('ALL');
  const cats = ['ALL', ...Array.from(new Set(competitorsV2.map(c => c.category)))];
  const filtered = cat === 'ALL' ? competitorsV2 : competitorsV2.filter(c => c.category === cat);
  const sorted = [...competitorsV2].sort((a, b) => b.revenueINRcr - a.revenueINRcr);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Competitor Forensics</div>
        <h1 className="sec-title">What They Actually Do, Where They Bleed</h1>
        <p className="sec-sub">
          Not a descriptive table. An operator-grade teardown of 14 competitors:
          strengths, hidden weaknesses, recent strategic moves, what we learn,
          and what we explicitly avoid. Plus global benchmarks (Thai Union, Mowi,
          Minh Phu, Nueva Pescanova, Maruha Nichiro).
        </p>
      </div>

      <div className="card">
        <h3>Scale — revenue ₹ cr</h3>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={sorted} layout="vertical" margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8" />
            <XAxis type="number" stroke="#5c6272" fontSize={11} />
            <YAxis type="category" dataKey="name" stroke="#5c6272" fontSize={10} width={210} />
            <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e0d9c8', color: '#1a1f36' }} />
            <Bar dataKey="revenueINRcr" name="Revenue ₹ cr">
              {sorted.map((c, i) => <Cell key={i} fill={c.color} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ display: 'flex', gap: 8, marginTop: 20, marginBottom: 20, flexWrap: 'wrap' }}>
        {cats.map(c => (
          <button key={c} onClick={() => setCat(c)}
            style={{
              padding: '6px 14px', border: '1px solid var(--c-border)',
              borderRadius: 999, cursor: 'pointer',
              background: cat === c ? 'var(--c-accent)' : 'transparent',
              color: cat === c ? '#fff' : 'var(--c-text)',
              fontSize: 12, fontWeight: 600,
            }}>{c}{c !== 'ALL' ? ` (${competitorsV2.filter(x => x.category === c).length})` : ''}</button>
        ))}
      </div>

      {filtered.map(c => (
        <div key={c.id} className="card" style={{ marginBottom: 14, borderLeft: `4px solid ${c.color}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
            <div>
              <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 18, color: 'var(--c-text)', fontWeight: 600 }}>{c.name}</h3>
              <div style={{ fontSize: 11, color: 'var(--c-text-dim)', marginTop: 2, textTransform: 'uppercase', letterSpacing: 1 }}>{c.category}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'Georgia,serif', fontSize: 22, fontWeight: 600, color: c.color }}>₹{c.revenueINRcr} cr</div>
              <div style={{ fontSize: 11, color: 'var(--c-text-dim)' }}>Margin {c.margin}</div>
            </div>
          </div>

          <div className="grid grid-2" style={{ fontSize: 13, marginBottom: 10 }}>
            <div><strong style={{ color: 'var(--c-good)' }}>Strength: </strong>{c.strength}</div>
            <div><strong style={{ color: 'var(--c-bad)' }}>Weakness: </strong>{c.weakness}</div>
          </div>
          <div style={{ fontSize: 13, marginBottom: 10 }}>
            <strong style={{ color: 'var(--c-accent)' }}>Recent moves: </strong>{c.recentMoves}
          </div>
          <div className="grid grid-2" style={{ fontSize: 13, paddingTop: 10, borderTop: '1px solid var(--c-border)' }}>
            <div><strong style={{ color: 'var(--c-accent-2)' }}>We learn: </strong>{c.weLearn}</div>
            <div><strong style={{ color: 'var(--c-accent-2)' }}>We avoid: </strong>{c.weAvoid}</div>
          </div>
        </div>
      ))}

      <div className="section-block">
        <h2>Global benchmarks — learn from, not beat</h2>
        <SortableTable
          columns={[
            { key:'name', label:'Company', render:(v) => <strong>{v}</strong> },
            { key:'revUSDbn', label:'Revenue $ bn', numeric:true, format:(v) => `$${v}` },
            { key:'note', label:'What we learn', style:{ fontSize: 12.5 } },
          ]}
          rows={globalBenchmarks}
          defaultSort="revUSDbn"
          defaultDir="desc"
        />
      </div>

      <div className="section-block">
        <h2>Where we play vs 4 key rivals</h2>
        <SortableTable
          columns={[
            { key:'axis', label:'Axis', render:(v) => <strong>{v}</strong> },
            { key:'avanti', label:'Avanti', style:{ fontSize: 12 } },
            { key:'apex', label:'Apex', style:{ fontSize: 12 } },
            { key:'gadre', label:'Gadre', style:{ fontSize: 12 } },
            { key:'coastal', label:'Coastal', style:{ fontSize: 12 } },
            { key:'us', label:'Us (B+C)', style:{ fontSize: 12, color: 'var(--c-good)', fontWeight: 600 } },
          ]}
          rows={whereWePlay}
          defaultSort="axis"
          filterable
        />
      </div>
    </>
  );
}
