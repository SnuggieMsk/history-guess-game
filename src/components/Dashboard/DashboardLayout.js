import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './DashboardLayout.css';

const sections = [
  { group: 'V2 · Start Here',     items: [
    { path: '/v2/playbook',  label: 'Operator Playbook (Day 0→Y1)',  icon: '▶' },
    { path: '/v2/thesis',    label: 'Sharpened Thesis',      icon: '◆' },
    { path: '/v2/jargon',    label: 'Jargon Cheatsheet',     icon: 'A' },
  ]},
  { group: 'V2 · Geography & Supply',     items: [
    { path: '/v2/map',       label: 'Maharashtra Map',       icon: '⌖' },
    { path: '/v2/suppliers', label: 'Named Suppliers',       icon: '⇐' },
    { path: '/v2/vendors',   label: 'Vendor Directory',       icon: '⎆' },
  ]},
  { group: 'V2 · Buyers & Markets',     items: [
    { path: '/v2/buyers',    label: 'Named Buyers',           icon: '⇒' },
    { path: '/v2/markets',   label: 'Destination Countries',  icon: '⌘' },
    { path: '/v2/compete',   label: 'Competitor Forensics',   icon: '⚔' },
    { path: '/v2/compete-deep', label: 'Competitor Deep Stories', icon: '🔬' },
    { path: '/v2/supply-flow',  label: 'Supply-Chain Flows',     icon: '⇋' },
  ]},
  { group: 'V2 · Simulator',     items: [
    { path: '/v2/simulator',    label: '★ Market Simulator',     icon: '⚡' },
  ]},
  { group: 'V2 · L3 Contacts',     items: [
    { path: '/v2/contacts',     label: 'Phone/Email Directory',  icon: '☎' },
  ]},
  { group: 'V2 · L4 Regulatory',     items: [
    { path: '/v2/regforms',     label: 'Exact Forms + Portals',  icon: '🗂' },
    { path: '/v2/sim-news',     label: 'Sim News Timeline',      icon: '📰' },
  ]},
  { group: 'V2 · L5 Produce + Portfolio',     items: [
    { path: '/v2/produce',      label: 'Produce Visual Catalog', icon: '🐟' },
    { path: '/v2/portfolio-sim',label: 'Multi-Route Portfolio Sim', icon: '⚖' },
  ]},
  { group: 'V2 · L6 Reality + Monte Carlo',     items: [
    { path: '/v2/reality',      label: 'Reality Checks (12 fail modes)', icon: '☠' },
    { path: '/v2/graveyard',    label: 'Graveyard + Back-test',  icon: '⚰' },
    { path: '/v2/monte-carlo',  label: 'Monte Carlo Sim',        icon: '🎲' },
    { path: '/v2/weather',      label: 'Weather + Climate',      icon: '🌪' },
    { path: '/v2/distributor',  label: 'Distributor Optimizer',  icon: '🔗' },
  ]},
  { group: 'V2 · L7 Global Flows',     items: [
    { path: '/v2/global-flows', label: 'World Trade Flow Map',  icon: '🌐' },
    { path: '/v2/compound-shock', label: 'Compound Shock Sim', icon: '☂' },
  ]},
  { group: 'V2 · L8 DPR + 5-Yr Sim',     items: [
    { path: '/v2/dpr-deep',     label: 'DPR Walkthrough (18-ch)', icon: '📑' },
    { path: '/v2/dpr-finmodel', label: 'DPR Financial Model',     icon: '📊' },
    { path: '/v2/dpr-annex',    label: 'DPR Annexures (10)',      icon: '📎' },
    { path: '/v2/five-year-sim',label: '5-Year Forecast Sim',     icon: '🔮' },
    { path: '/v2/sim-narration',label: 'Sim Narration + Decisions', icon: '🧭' },
  ]},
  { group: 'V2 · Operations',     items: [
    { path: '/v2/ops',       label: 'Ops & Quality',          icon: '⚙' },
    { path: '/v2/live',      label: 'Live-Cargo Calc',        icon: '✈' },
    { path: '/v2/certs',     label: 'Certifications',         icon: '✓' },
    { path: '/v2/nightmares', label: 'Nightmare Playbook',    icon: '☠' },
  ]},
  { group: 'V2 · Finance & Policy',     items: [
    { path: '/v2/schemes',   label: 'Govt Schemes',           icon: '₹' },
    { path: '/v2/stress',    label: 'Stress-Tested Financials', icon: '📈' },
    { path: '/v2/balance',   label: 'Balance Sheet + Exit',   icon: '⊞' },
    { path: '/v2/dpr',       label: 'PMMSY DPR Skeleton',      icon: '📄' },
    { path: '/v2/teardown',  label: 'Investor Teardown',       icon: '⎔' },
  ]},
  { group: 'V2 · Tools & Templates',     items: [
    { path: '/v2/templates', label: 'Document Templates',     icon: '✎' },
    { path: '/v2/tech',      label: 'Software Stack',         icon: '◊' },
    { path: '/v2/insurance', label: 'Insurance Program',      icon: '⛨' },
    { path: '/v2/vendors',   label: 'Vendor Directory',       icon: '⎆' },
    { path: '/v2/jargon',    label: 'Jargon Cheatsheet',      icon: 'A' },
    { path: '/v2/closeout',  label: 'ESG · Wargame · JDs · Outreach', icon: '⊕' },
  ]},
  { group: 'V1 Reference',     items: [
    { path: '/',             label: 'Executive Summary', icon: '◆' },
    { path: '/value-chain',  label: 'Value Chain',       icon: '⇄' },
  ]},
  { group: 'Products',     items: [
    { path: '/species',      label: 'Species Portfolio', icon: '🐟' },
    { path: '/gap-species',  label: 'Gap Species (★)',   icon: '⚑' },
  ]},
  { group: 'Operations',   items: [
    { path: '/sourcing',     label: 'Sourcing & Map',    icon: '⌖' },
    { path: '/operations',   label: 'Ops & HR Playbook', icon: '⚙' },
    { path: '/roadmap',      label: '36-Mo Roadmap',     icon: '⌛' },
  ]},
  { group: 'Finance',      items: [
    { path: '/cost-calc',    label: 'Cost Calculator',   icon: '∑' },
    { path: '/financials',   label: '5-Yr Financials',   icon: '📈' },
    { path: '/subsidies',    label: 'Subsidy Stack',     icon: '₹' },
  ]},
  { group: 'Markets',      items: [
    { path: '/calendar',     label: 'Export Calendar',   icon: '📅' },
    { path: '/competitors',  label: 'Competitors',       icon: '⚔' },
  ]},
  { group: 'Strategy',     items: [
    { path: '/pestel',       label: 'PESTEL',            icon: '◍' },
    { path: '/porter',       label: 'Porter\'s 5F',      icon: '⊕' },
    { path: '/swot',         label: 'SWOT',              icon: '◑' },
    { path: '/moat',         label: 'MOAT Strategy',     icon: '🛡' },
    { path: '/risks',        label: 'Risk Register',     icon: '⚠' },
    { path: '/case-studies', label: 'Case Studies',      icon: '📚' },
    { path: '/references',   label: 'References',        icon: '⌬' },
  ]},
];

export default function DashboardLayout() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="dash-shell">
      <aside className={`dash-side ${navOpen ? 'open' : ''}`}>
        <div className="dash-brand">
          <div className="dash-brand-mark">KS</div>
          <div>
            <h1>Konkan Seafoods</h1>
            <p>Maharashtra · Purandar</p>
          </div>
        </div>
        <p className="dash-tag">10-Cr Seafood Export Venture · Investor Dashboard</p>
        {sections.map(g => (
          <div key={g.group} className="dash-nav-group">
            <div className="dash-nav-group-title">{g.group}</div>
            {g.items.map(it => (
              <NavLink
                key={it.path}
                to={it.path}
                end={it.path === '/'}
                className={({isActive}) => `dash-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setNavOpen(false)}
              >
                <span className="dash-nav-icon">{it.icon}</span>
                <span>{it.label}</span>
              </NavLink>
            ))}
          </div>
        ))}
        <div className="dash-foot">
          <p>v1.0 · Apr 2026</p>
          <p>Research-grade · MPEDA-aligned</p>
        </div>
      </aside>

      <button className="dash-burger" onClick={() => setNavOpen(o => !o)}>
        {navOpen ? '×' : '☰'}
      </button>

      <main className="dash-main">
        <Outlet />
      </main>
    </div>
  );
}
