// =====================================================================
// SOURCE INTEGRITY HEADER (auto-applied across v2 data files)
// =====================================================================
// Cross-page numerical claims (revenue, EBITDA, capex, subsidy, headcount)
// are reconciled to src/data/v2Constants.js — the authoritative single
// source of truth for the v2 dashboard. If you see a financial figure here
// that conflicts with v2Constants, treat v2Constants as truth.
//
// Source classification per item:
//   VERIFIED      — primary public source (BSE, MCA, MPEDA, IMD, RBI, etc.)
//   DIRECTIONAL   — industry-typical or consultant-reported
//   MODELLED      — design/assumption value (forward projection)
//
// Full per-file audit ledger: see src/data/references.js
// (dataVerificationLedger) and docs/00_SOURCES.md.
// Last reconciliation: April 2026.
// =====================================================================

// V2 — Certifications data

export const certCategories = [
  {
    id: 'mandatory-india',
    title: 'Mandatory (India / Day 1)',
    color: '#a8322d',
    items: [
      { cert: 'MPEDA RCMC',           fee: '₹25 k + ₹10 k/yr',    timeline: '30-45 days',  unlocks: 'All seafood exports (without this = no export)' },
      { cert: 'HACCP (MPEDA-recognised)', fee: '₹1-1.5 L initial + ₹40-60 k/yr', timeline: '60-90 days', unlocks: 'MPEDA per-shipment export certificate' },
      { cert: 'FSSAI Central License (high-risk)', fee: '₹7,500/yr',  timeline: '30-60 days', unlocks: 'Legal processing + labelling' },
      { cert: 'Factory Act + Shops & Establishments', fee: '~₹15 k',  timeline: '30-45 days', unlocks: 'Employment compliance' },
      { cert: 'PESO (ammonia refrigerant)', fee: '₹25-50 k', timeline: '90-120 days', unlocks: 'Legal ammonia use in IQF + cold store' },
      { cert: 'MSPCB Consent to Operate',  fee: '₹50 k - 2 L',  timeline: '90-120 days', unlocks: 'Water + air + effluent approval' },
    ],
  },
  {
    id: 'destination',
    title: 'Destination regulatory (gating exports)',
    color: '#0d3b66',
    items: [
      { cert: 'USFDA Establishment + Prior Notice', fee: 'Free',        timeline: '18-24 months for green-lane', unlocks: 'USA access; LAAF for auto-accept lab reports' },
      { cert: 'EU Establishment Number (via MPEDA)', fee: '₹1 L audit',  timeline: '12-18 months', unlocks: '27 EU member states' },
      { cert: 'Japan MHLW registration',   fee: '₹50 k + MPEDA',      timeline: '3-6 months',  unlocks: 'Japan MHLW-gated imports' },
      { cert: 'China GACC (Reg. 248)',     fee: '₹1-2 L',              timeline: '6-12 months', unlocks: 'All PRC imports' },
      { cert: 'Hong Kong AFCD / FEHD',      fee: 'Per-permit ₹2-5 k', timeline: 'Per shipment', unlocks: 'HK imports' },
      { cert: 'Singapore SFA',              fee: 'Per-permit',  timeline: 'Per shipment', unlocks: 'SG imports' },
      { cert: 'Korea MFDS',                 fee: '₹80 k', timeline: '3-6 months', unlocks: 'Korea imports' },
      { cert: 'Halal (GCC)',                 fee: '₹60-80 k/yr', timeline: '2-3 months',  unlocks: 'Muslim-majority markets incl. GCC re-export' },
    ],
  },
  {
    id: 'premium',
    title: 'Voluntary / premium (unlock margin)',
    color: '#c5a565',
    items: [
      { cert: 'BAP 2-star / 3-star',        fee: '₹2-4 L/yr',     timeline: '3-6 months',    unlocks: 'Walmart, Sysco, Costco, some Whole Foods lines' },
      { cert: 'ASC (aquaculture)',           fee: '₹3-5 L/yr',    timeline: '12-18 months', unlocks: 'Whole Foods premium, Aldi, Tesco, German retail' },
      { cert: 'MSC CoC (Chain of Custody)',  fee: '₹2-3 L/yr',    timeline: '3-6 months',    unlocks: 'MSC-labelled wild-catch sale — +25-35% pricing' },
      { cert: 'MSC Fishery assessment (Lakshadweep pole-and-line tuna)', fee: '₹80 L-1.2 cr total; our share ~₹25-30 L', timeline: '24-36 months', unlocks: 'MSC certification of the fishery itself' },
      { cert: 'BRC (British Retail Consortium)', fee: '₹3-5 L/yr', timeline: '6-9 months', unlocks: 'UK Tesco, Sainsbury\'s, M&S, Waitrose' },
      { cert: 'IFS (International Featured Standards)', fee: '₹3-5 L/yr', timeline: '6-9 months', unlocks: 'German / French retail (Rewe, Metro, Carrefour)' },
      { cert: 'SQF (Safe Quality Food)',      fee: '₹3-4 L/yr',    timeline: '6-9 months',    unlocks: 'Some US retail' },
      { cert: 'FSSC 22000 (food safety mgmt)', fee: '₹3-5 L/yr',   timeline: '6-9 months',    unlocks: 'Preferred by large retailers' },
      { cert: 'Sedex / SMETA',               fee: '₹1-2 L/yr',    timeline: '2-3 months',    unlocks: 'Tesco, M&S social compliance' },
      { cert: 'ISO 14001 (environmental)',   fee: '₹1.5-2 L/yr',  timeline: '4-6 months',    unlocks: 'EU buyer preference' },
      { cert: 'SA 8000 (social accountability)', fee: '₹3-4 L/yr', timeline: '6-9 months',   unlocks: 'High-end EU retail' },
    ],
  },
];

export const certRoadmap = [
  { period: 'Pre-commissioning (M-6 to M12)', certs: ['IEC', 'FSSAI', 'MPEDA RCMC', 'Factory Act', 'MSPCB', 'PESO'] },
  { period: 'Commissioning (M12-M15)',        certs: ['HACCP', 'Halal'] },
  { period: 'Y1-Y2 (M15-M36)',                certs: ['BRC', 'BAP 2-star', 'FSSC 22000', 'HK AFCD', 'SG SFA', 'UAE', 'China GACC'] },
  { period: 'Y2-Y3 (M24-M48)',                certs: ['USFDA LAAF', 'EU Establishment', 'ASC', 'Japan MHLW', 'SA 8000'] },
  { period: 'Y3-Y5 (M36-M60)',                certs: ['MSC CoC + Lakshadweep fishery co-funding', 'ISO 14001', 'Sedex'] },
];

export const certRecurringCost = {
  y3AnnualL: '28-35',
  y1Y3OneOffL: '85-120',
  mscFisheryShareL: '20-30',
};
