import React, { useState } from 'react';
import { vendorCategories } from '../../../data/v2Vendors';

export default function VendorsV2() {
  const [cat, setCat] = useState(vendorCategories[0].id);
  const current = vendorCategories.find(c => c.id === cat);
  const total = vendorCategories.reduce((s, c) => s + c.vendors.length, 0);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Who to Call</div>
        <h1 className="sec-title">Named Vendor Directory — Every Category</h1>
        <p className="sec-sub">
          {total} named vendors across {vendorCategories.length} categories — IQF, cold
          storage, solar, ZLD, ammonia, reefer trucks, lab equipment, packing, insurance,
          consultants, legal, banking. Who to call, where they are, what they specialise in.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {vendorCategories.map(c => (
          <button key={c.id} onClick={() => setCat(c.id)} style={{
            padding: '7px 14px', border: '1px solid var(--c-border)', borderRadius: 4,
            cursor: 'pointer', fontSize: 12, fontWeight: 500,
            background: cat === c.id ? 'var(--c-accent)' : 'var(--c-surface)',
            color: cat === c.id ? '#fff' : 'var(--c-text)',
          }}>{c.title.split('(')[0].trim()}</button>
        ))}
      </div>

      <div className="card">
        <h3>{current.title}</h3>
        <div className="tbl-wrap" style={{ marginTop: 12 }}>
          <table className="tbl">
            <thead><tr><th>Vendor</th><th>Location</th><th>Speciality</th></tr></thead>
            <tbody>
              {current.vendors.map((v, i) => (
                <tr key={i}>
                  <td><strong>{v.name}</strong></td>
                  <td style={{ fontSize: 12, color: 'var(--c-text-dim)' }}>{v.location}</td>
                  <td style={{ fontSize: 12.5 }}>{v.speciality}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="callout" style={{ marginTop: 16 }}>
        <strong>Vendor selection rule:</strong> For every line item ≥ ₹25 L, get 3 quotes.
        For every strategic relationship (IQF, cold store, ZLD, solar, banking, insurance,
        DPR consultant), prefer a vendor with 5+ years of seafood-specific track record
        over a generalist.
      </div>
    </>
  );
}
