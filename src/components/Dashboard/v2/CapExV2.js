import React, { useState } from 'react';
import { capexCategories, capexSummary, quoteVarianceMethodology, milestonePayments } from '../../../data/v2CapEx';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import SortableTable from '../SortableTable';
import Disclaimer from './Disclaimer';

const CAT_COLOR = {
  'land': '#c5a565',
  'building': '#0d3b66',
  'iqf': '#a8322d',
  'coldstore': '#5fb3e3',
  'lab': '#7a5b8c',
  'reefer': '#2d6a4f',
  'utilities': '#b8860b',
  'it_misc': '#5c6272',
};

export default function CapExV2() {
  const [selCat, setSelCat] = useState('all');

  const allItems = capexCategories.flatMap(c => c.items.map(i => ({ ...i, categoryId: c.id, categoryLabel: c.category })));
  const filtered = selCat === 'all' ? allItems : allItems.filter(i => i.categoryId === selCat);

  const catTotals = capexCategories.map(c => ({
    cat: c.category.length > 30 ? c.category.slice(0, 28) + '…' : c.category,
    catId: c.id,
    total: c.items.reduce((s, i) => s + i.amountINRcr, 0),
    color: CAT_COLOR[c.id] || '#5c6272',
  })).sort((a, b) => b.total - a.total);

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Capital Expenditure BOQ</div>
        <h1 className="sec-title">Line-Item CapEx · Vendor Quotes · 3-Quote Discipline</h1>
        <p className="sec-sub">
          Total project CapEx <strong>₹{capexSummary.totalCapexINRcr} cr</strong> across {capexSummary.totalLineItems} line items
          in {capexSummary.categoryCount} categories. Each item ≥ ₹25 L carries L1/L2/L3 vendor quotes
          per Maharashtra IP 2024 + PMMSY DPR Annexure 7 discipline. PMMSY-eligible base
          ₹{capexSummary.pmmsyEligibleINRcr} cr → estimated capture ₹{capexSummary.estimatedPmmsyCaptureINRcr} cr (30% blended).
        </p>
      </div>

      <Disclaimer kind="estimate">
        Vendor list (L1/L2/L3) per line item is based on published list prices + standard Indian SI margins
        (Apr 2026). Actual final selection depends on negotiation. Quotes ≥ ₹25 L will be re-validated via
        formal RFQ at DPR stage. {quoteVarianceMethodology.expectedVariance}.
      </Disclaimer>

      <div className="kpi-grid">
        <div className="card"><h3>Total CapEx</h3><div className="big">₹{capexSummary.totalCapexINRcr} cr</div></div>
        <div className="card"><h3>PMMSY-eligible</h3><div className="big">₹{capexSummary.pmmsyEligibleINRcr} cr</div></div>
        <div className="card"><h3>PMMSY capture (30%)</h3><div className="big" style={{color:'var(--c-good)'}}>₹{capexSummary.estimatedPmmsyCaptureINRcr} cr</div></div>
        <div className="card"><h3>Line items</h3><div className="big">{capexSummary.totalLineItems}</div></div>
      </div>

      {/* CAPEX BY CATEGORY CHART */}
      <div className="section-block">
        <h2>CapEx by category</h2>
        <div className="card">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={catTotals} layout="vertical" margin={{top:5, right:30, left:10, bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis type="number" stroke="#5c6272" fontSize={11}/>
              <YAxis type="category" dataKey="cat" stroke="#5c6272" fontSize={11} width={220}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}
                formatter={(v) => [`₹${v.toFixed(2)} cr`, 'CapEx']}/>
              <Bar dataKey="total" name="₹ cr" radius={[0, 4, 4, 0]}>
                {catTotals.map((c, i) => <Cell key={i} fill={c.color}/>)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* CATEGORY FILTER + LINE-ITEM TABLE */}
      <div className="section-block">
        <h2>Line-item BOQ — {filtered.length} items</h2>
        <div style={{display:'flex', gap:8, marginBottom:14, flexWrap:'wrap'}}>
          <button onClick={() => setSelCat('all')} style={{
            padding:'6px 12px', border:'1px solid var(--c-border)', borderRadius:999,
            cursor:'pointer', fontSize:12, fontWeight:600,
            background: selCat === 'all' ? 'var(--c-accent)' : 'var(--c-surface)',
            color: selCat === 'all' ? '#fff' : 'var(--c-text)',
          }}>All ({allItems.length})</button>
          {capexCategories.map(c => (
            <button key={c.id} onClick={() => setSelCat(c.id)} style={{
              padding:'6px 12px', border:'1px solid var(--c-border)', borderRadius:999,
              cursor:'pointer', fontSize:12, fontWeight:600,
              background: selCat === c.id ? CAT_COLOR[c.id] : 'var(--c-surface)',
              color: selCat === c.id ? '#fff' : 'var(--c-text)',
            }}>{c.category.split(' ')[0]} ({c.items.length})</button>
          ))}
        </div>

        <div className="card">
          <SortableTable
            columns={[
              { key:'line', label:'Line item', render:(v) => <strong style={{fontSize:12.5}}>{v}</strong> },
              { key:'qty', label:'Qty', style:{fontSize:11} },
              { key:'amountINRcr', label:'₹ cr', numeric:true, format:(v) => `₹${v.toFixed(2)} cr` },
              { key:'vendorL1', label:'L1 vendor', style:{fontSize:11.5} },
              { key:'vendorL2', label:'L2 vendor', style:{fontSize:11, color:'var(--c-text-dim)'} },
              { key:'vendorL3', label:'L3 vendor', style:{fontSize:11, color:'var(--c-text-dim)'} },
              { key:'pmmsyEligible', label:'PMMSY?', render:(v) => v ? <span className="pill pill-good">Yes</span> : <span className="pill pill-mute">No</span> },
              { key:'notes', label:'Notes', style:{fontSize:11} },
            ]}
            rows={filtered}
            defaultSort="amountINRcr"
            defaultDir="desc"
            filterable
          />
        </div>
      </div>

      {/* QUOTE METHODOLOGY */}
      <div className="section-block">
        <h2>3-quote discipline + audit trail</h2>
        <div className="card">
          <p style={{fontSize:13.5, color:'var(--c-text)', marginBottom:12, lineHeight:1.65}}>
            {quoteVarianceMethodology.description}
          </p>
          <div className="grid grid-2">
            <div>
              <strong style={{fontSize:11, color:'var(--c-accent)', textTransform:'uppercase', letterSpacing:1}}>Expected variance</strong>
              <p style={{fontSize:12.5, marginTop:4}}>{quoteVarianceMethodology.expectedVariance}</p>
            </div>
            <div>
              <strong style={{fontSize:11, color:'var(--c-accent)', textTransform:'uppercase', letterSpacing:1}}>Approval rule</strong>
              <p style={{fontSize:12.5, marginTop:4}}>{quoteVarianceMethodology.approvalRule}</p>
            </div>
          </div>
          <div className="callout" style={{marginTop:12}}>
            <strong>Record keeping: </strong>{quoteVarianceMethodology.recordKeeping}
          </div>
        </div>
      </div>

      {/* MILESTONE PAYMENT SCHEDULE */}
      <div className="section-block">
        <h2>Milestone payment schedule (industry-typical)</h2>
        <div className="card">
          <SortableTable
            columns={[
              { key:'milestone', label:'Milestone', render:(v) => <strong>{v}</strong> },
              { key:'percentOfPo', label:'% of PO', numeric:true, format:(v) => `${v}%` },
              { key:'timing', label:'Timing', style:{fontSize:12} },
              { key:'secured', label:'Secured by', style:{fontSize:12} },
              { key:'notes', label:'Notes', style:{fontSize:11.5, color:'var(--c-text-dim)'} },
            ]}
            rows={milestonePayments}
          />
          <div className="callout" style={{marginTop:12, borderLeftColor:'var(--c-good)'}}>
            <strong>Cash flow benefit: </strong>BG-secured milestones means we hold ~40-50% of PO value
            until commissioning + DLP end. This is a ₹6-8 cr WC effective benefit through Y1-Y2 ramp.
          </div>
        </div>
      </div>
    </>
  );
}
