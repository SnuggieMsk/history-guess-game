import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './DashboardLayout.css';

const sections = [
  { group: 'Overview',     items: [
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
