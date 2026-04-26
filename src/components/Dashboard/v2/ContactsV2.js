import React, { useState } from 'react';
import { regulatorContacts, helplineNumbers } from '../../../data/v2ContactsRegulators';
import { supplierContacts, supplierWhatsAppGroups } from '../../../data/v2ContactsSuppliers';
import { buyerContacts, buyerOnboardingFlow } from '../../../data/v2ContactsBuyers';

const TABS = [
  { id: 'regs', label: `Regulators (${regulatorContacts.length})` },
  { id: 'suppliers', label: `Suppliers (${supplierContacts.length})` },
  { id: 'buyers', label: `Buyers (${buyerContacts.length})` },
  { id: 'helplines', label: 'Helplines + Groups' },
];

export default function ContactsV2() {
  const [tab, setTab] = useState('regs');
  const [search, setSearch] = useState('');
  const filter = (arr, fields) => arr.filter(x => !search || fields.some(f => (x[f] || '').toString().toLowerCase().includes(search.toLowerCase())));

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · L3 Contact Directory</div>
        <h1 className="sec-title">Phone, Email, Address — Every Stakeholder</h1>
        <p className="sec-sub">
          Regulators ({regulatorContacts.length}) + Suppliers ({supplierContacts.length}) + Buyers ({buyerContacts.length}) + Helplines.
          Every entity with phone (where public), email, address, who-to-ask-for, and best-time-to-call.
          Contact info is researched from public registries; verify before high-stakes outreach.
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Total contacts</h3><div className="big">{regulatorContacts.length + supplierContacts.length + buyerContacts.length}</div></div>
        <div className="card"><h3>Regulators</h3><div className="big">{regulatorContacts.length}</div><div className="sub">India + USA + EU + JP + China + GCC + HK + SG</div></div>
        <div className="card"><h3>Suppliers</h3><div className="big">{supplierContacts.length}</div><div className="sub">Konkan + AP + Lakshadweep + WB</div></div>
        <div className="card"><h3>Buyers</h3><div className="big">{buyerContacts.length}</div><div className="sub">8 markets × multiple importers</div></div>
      </div>

      <div style={{ display: 'flex', gap: 8, marginTop: 20, marginBottom: 16, flexWrap: 'wrap' }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            padding: '8px 14px', border: '1px solid var(--c-border)', borderRadius: 4,
            cursor: 'pointer', fontSize: 12, fontWeight: 500,
            background: tab === t.id ? 'var(--c-accent)' : 'var(--c-surface)',
            color: tab === t.id ? '#fff' : 'var(--c-text)',
          }}>{t.label}</button>
        ))}
      </div>

      <input type="text" value={search} onChange={e => setSearch(e.target.value)}
        placeholder="Search any field…"
        style={{ width: '100%', padding: 10, border: '1px solid var(--c-border)', borderRadius: 4, background: 'var(--c-surface)', color: 'var(--c-text)', fontSize: 13, marginBottom: 14 }}/>

      {tab === 'regs' && (
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Body</th><th>Address</th><th>Phone</th><th>Email/Web</th><th>Ask for</th></tr></thead>
            <tbody>
              {filter(regulatorContacts, ['body', 'address', 'phone', 'email', 'website', 'askFor']).map((r, i) => (
                <tr key={i}>
                  <td><strong>{r.body}</strong></td>
                  <td style={{fontSize:11.5}}>{r.address}</td>
                  <td style={{fontSize:12, color:'var(--c-accent)'}}>{r.phone}</td>
                  <td style={{fontSize:11}}>
                    {r.email && <div>{r.email}</div>}
                    {r.website && <a href={r.website} target="_blank" rel="noreferrer">{r.website.replace('https://','')}</a>}
                  </td>
                  <td style={{fontSize:12}}>{r.askFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'suppliers' && (
        <div>
          {filter(supplierContacts, ['region', 'entity', 'address', 'phone', 'askFor']).map((s, i) => (
            <div key={i} className="card" style={{marginBottom: 10, borderLeft: '3px solid var(--c-accent)'}}>
              <div style={{display:'flex',justifyContent:'space-between',gap:10,alignItems:'flex-start',marginBottom:6,flexWrap:'wrap'}}>
                <div>
                  <span className="pill pill-info">{s.region}</span>
                  <strong style={{marginLeft:8,fontFamily:'Georgia,serif',fontSize:14}}>{s.entity}</strong>
                </div>
                {s.phone && <span style={{fontSize:12, color:'var(--c-accent)', fontWeight:600}}>{s.phone}</span>}
              </div>
              {s.address && <div style={{fontSize:12, color:'var(--c-text-dim)'}}>{s.address}</div>}
              {s.contactPerson && <div style={{fontSize:12, marginTop:4}}><strong>Contact:</strong> {s.contactPerson}</div>}
              <div style={{fontSize:12.5, marginTop:6}}><strong style={{color:'var(--c-good)'}}>Ask for:</strong> {s.askFor}</div>
              {s.note && <div style={{fontSize:11, color:'var(--c-text-dim)', fontStyle:'italic', marginTop:4}}>{s.note}</div>}
              {s.bestTime && <div style={{fontSize:11, color:'var(--c-warn)', marginTop:4}}><strong>Best time:</strong> {s.bestTime}</div>}
              {s.leverage && <div style={{fontSize:12, color:'var(--c-accent-2)', marginTop:4}}><strong>Leverage:</strong> {s.leverage}</div>}
            </div>
          ))}
        </div>
      )}

      {tab === 'buyers' && (
        <>
          <div className="tbl-wrap">
            <table className="tbl">
              <thead><tr><th>Market</th><th>Entity</th><th>Address</th><th>Phone</th><th>Web</th><th>Ask for</th></tr></thead>
              <tbody>
                {filter(buyerContacts, ['market','entity','address','phone','web','askFor']).map((b,i) => (
                  <tr key={i}>
                    <td><span className="pill pill-info">{b.market}</span></td>
                    <td><strong style={{fontSize:12}}>{b.entity}</strong></td>
                    <td style={{fontSize:11}}>{b.address}</td>
                    <td style={{fontSize:11.5, color:'var(--c-accent)'}}>{b.phone}</td>
                    <td style={{fontSize:11}}>{b.web && <a href={`https://${b.web}`} target="_blank" rel="noreferrer">{b.web}</a>}</td>
                    <td style={{fontSize:11.5}}>{b.askFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="section-block">
            <h2>Buyer onboarding flow</h2>
            <div className="card">
              <table className="tbl">
                <thead><tr><th>Step</th><th>Day</th><th>Action</th></tr></thead>
                <tbody>
                  {buyerOnboardingFlow.map((f,i) => (
                    <tr key={i}><td><strong style={{color:'var(--c-accent)'}}>#{f.step}</strong></td><td>{f.days}</td><td>{f.action}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {tab === 'helplines' && (
        <>
          <div className="card">
            <h3>Critical helpline numbers</h3>
            <table className="tbl">
              <thead><tr><th>Service</th><th>Phone</th><th>Hours</th></tr></thead>
              <tbody>
                {helplineNumbers.map((h,i) => (
                  <tr key={i}><td><strong>{h.service}</strong></td><td style={{color:'var(--c-accent)'}}>{h.phone}</td><td>{h.hours}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card" style={{marginTop:14}}>
            <h3>Industry WhatsApp / network groups</h3>
            <ul className="bullets">
              {supplierWhatsAppGroups.map((g,i) => <li key={i}><strong>{g.name}</strong> — {g.joinVia}</li>)}
            </ul>
          </div>
        </>
      )}

      <div className="callout" style={{marginTop:14}}>
        <strong>Verification protocol:</strong> All public-facing phone numbers and emails verified via official websites where available.
        Supplier-side dock-agent phones often change; always cross-check via local taluka office or industry association.
        Buyer-side direct buyer-manager numbers require introduction (trade fair / mutual contact / cold-email-warm-intro).
      </div>
    </>
  );
}
