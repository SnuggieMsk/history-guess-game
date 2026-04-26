import React, { useState } from 'react';
import { supplierNodes, y3AllocationTarget } from '../../../data/v2Suppliers';

const REGION_COLOR = { 'Konkan': '#0d3b66', 'AP farm belt': '#c5a565', 'Islands': '#2d6a4f', 'Eastern': '#7a5b8c' };

export default function SuppliersV2() {
  const [filter, setFilter] = useState('ALL');
  const regions = ['ALL', ...Array.from(new Set(supplierNodes.map(n => n.region)))];
  const filtered = filter === 'ALL' ? supplierNodes : supplierNodes.filter(n => n.region === filter);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Named Supply Directory</div>
        <h1 className="sec-title">Where We Actually Buy From</h1>
        <p className="sec-sub">
          Every sourcing node named, with known aggregators, access mechanics, species,
          pricing range, and realistic volume. {supplierNodes.length} nodes across
          Konkan, Andhra farm belt, Lakshadweep islands, and West Bengal (for mud crab).
          Target Y3 tonnage {y3AllocationTarget.toLocaleString()} MT.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {regions.map(r => (
          <button key={r} onClick={() => setFilter(r)}
            style={{
              padding: '6px 14px',
              border: `1px solid ${REGION_COLOR[r] || '#cdc4ae'}`,
              borderRadius: 999, cursor: 'pointer',
              background: filter === r ? (REGION_COLOR[r] || '#1a1f36') : 'transparent',
              color: filter === r ? '#fff' : (REGION_COLOR[r] || '#1a1f36'),
              fontSize: 12, fontWeight: 600,
            }}>
            {r}{r !== 'ALL' ? ` (${supplierNodes.filter(n => n.region === r).length})` : ''}
          </button>
        ))}
      </div>

      {filtered.map(n => (
        <div key={n.id} className="card" style={{ marginBottom: 14, borderLeft: `3px solid ${REGION_COLOR[n.region]}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 11, color: 'var(--c-text-dim)', textTransform: 'uppercase', letterSpacing: 1.5 }}>{n.region} · {n.state}</div>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: 'var(--c-text)', fontWeight: 600, marginTop: 2 }}>{n.name}</h3>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className={`pill ${n.size === 'major' ? 'pill-good' : n.size === 'mid' ? 'pill-info' : 'pill-mute'}`}>{n.size}</span>
              <div style={{ fontSize: 12, color: 'var(--c-text-dim)', marginTop: 4 }}>{n.dailyMT} MT/day · Y3 target {n.y3MT} MT</div>
            </div>
          </div>

          <div style={{ marginBottom: 10 }}>
            <strong style={{ fontSize: 11, color: 'var(--c-accent)', textTransform: 'uppercase', letterSpacing: 1 }}>Species</strong>
            <p style={{ fontSize: 13, color: 'var(--c-text)', marginTop: 3 }}>{n.species}</p>
          </div>

          <div className="grid grid-2" style={{ marginTop: 12 }}>
            <div>
              <strong style={{ fontSize: 11, color: 'var(--c-accent)', textTransform: 'uppercase', letterSpacing: 1 }}>Aggregators / structure</strong>
              <ul className="bullets" style={{ marginTop: 4, fontSize: 12.5 }}>
                {n.aggregators.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
            <div>
              <strong style={{ fontSize: 11, color: 'var(--c-good)', textTransform: 'uppercase', letterSpacing: 1 }}>Access path</strong>
              <ul className="bullets" style={{ marginTop: 4, fontSize: 12.5 }}>
                {n.accessPath.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          </div>

          {n.notes && (
            <div style={{ marginTop: 12, paddingTop: 10, borderTop: '1px solid var(--c-border)', fontSize: 12, color: 'var(--c-text-dim)', fontStyle: 'italic' }}>
              {n.notes}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
