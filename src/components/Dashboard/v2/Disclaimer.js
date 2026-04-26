import React from 'react';

/** Reusable disclaimer banner for illustrative/modelled data. */
export default function Disclaimer({ children, kind = 'modelled' }) {
  const colors = {
    modelled:    { bg: '#faf5e5', border: '#c5a565', label: 'Illustrative / modelled' },
    estimate:    { bg: '#fbf6ee', border: '#b8860b', label: 'Industry estimate' },
    unverified:  { bg: '#f8ebe8', border: '#a8322d', label: 'Not third-party verified' },
  };
  const c = colors[kind] || colors.modelled;
  return (
    <div style={{
      borderLeft: `3px solid ${c.border}`,
      background: c.bg,
      padding: '10px 14px',
      borderRadius: '0 6px 6px 0',
      fontSize: 12,
      color: '#1a1f36',
      margin: '12px 0',
      lineHeight: 1.55,
    }}>
      <strong style={{ color: c.border }}>⚠ {c.label}: </strong>
      {children}
    </div>
  );
}
