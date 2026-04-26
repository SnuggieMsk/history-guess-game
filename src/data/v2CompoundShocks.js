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

// V2 L7 — Compound shock scenarios — what happens when 2-3 shocks hit simultaneously

export const compoundShockScenarios = [
  {
    id: 'cs1',
    name: 'Base case (no shocks)',
    description: 'Normal operating year',
    fxShock: 0, freightShock: 0, fobShock: 0, buyShock: 0, mortalityMul: 1.0, tariffPct: null, supplyMul: 1.0,
    cycloneEvent: false, diseaseEvent: false, rasffEvent: false,
    color: '#2d6a4f',
  },
  {
    id: 'cs2',
    name: 'Cyclone + Tariff hike',
    description: 'Major cyclone disrupts Konkan + USA tariff escalates to 30%',
    fxShock: 0, freightShock: 0.10, fobShock: -0.05, buyShock: 0.15, mortalityMul: 1.0, tariffPct: 30, supplyMul: 0.65,
    cycloneEvent: true, diseaseEvent: false, rasffEvent: false,
    color: '#c5a565',
  },
  {
    id: 'cs3',
    name: 'Disease outbreak + WC freeze',
    description: 'AP EHP+WSSV outbreak Q2 + bank revokes WC limit',
    fxShock: 0, freightShock: 0, fobShock: 0.05, buyShock: 0.30, mortalityMul: 1.0, tariffPct: null, supplyMul: 0.55,
    cycloneEvent: false, diseaseEvent: true, rasffEvent: false,
    color: '#b8860b',
  },
  {
    id: 'cs4',
    name: 'RASFF alert + buyer churn',
    description: 'Single RASFF event triggers 25% EU sampling + key buyer terminates',
    fxShock: 0, freightShock: 0, fobShock: -0.10, buyShock: 0, mortalityMul: 1.0, tariffPct: null, supplyMul: 0.85,
    cycloneEvent: false, diseaseEvent: false, rasffEvent: true,
    color: '#a8322d',
  },
  {
    id: 'cs5',
    name: 'Triple shock — worst case',
    description: 'Cyclone + Disease + RASFF + Tariff + Freight surge in same year',
    fxShock: -0.05, freightShock: 0.50, fobShock: -0.15, buyShock: 0.30, mortalityMul: 1.5, tariffPct: 30, supplyMul: 0.45,
    cycloneEvent: true, diseaseEvent: true, rasffEvent: true,
    color: '#7a1c1a',
  },
  {
    id: 'cs6',
    name: 'Goldilocks (all favourable)',
    description: 'Stable FX, favorable freight, MSC certified, no shocks',
    fxShock: 0.05, freightShock: -0.20, fobShock: 0.15, buyShock: -0.05, mortalityMul: 0.7, tariffPct: 0, supplyMul: 1.05,
    cycloneEvent: false, diseaseEvent: false, rasffEvent: false,
    color: '#2d6a4f',
  },
  {
    id: 'cs7',
    name: 'Slow grind (chronic margin pressure)',
    description: 'Continuous Ecuador price war + slight freight rise + INR appreciation',
    fxShock: -0.08, freightShock: 0.20, fobShock: -0.20, buyShock: 0.05, mortalityMul: 1.0, tariffPct: null, supplyMul: 0.95,
    cycloneEvent: false, diseaseEvent: false, rasffEvent: false,
    color: '#c5a565',
  },
  {
    id: 'cs8',
    name: 'Black swan - pandemic v2',
    description: 'Global lockdown freezes air freight; sea freight 4x; demand spike domestic',
    fxShock: -0.10, freightShock: 2.50, fobShock: 0.20, buyShock: 0.10, mortalityMul: 2.0, tariffPct: null, supplyMul: 0.75,
    cycloneEvent: false, diseaseEvent: false, rasffEvent: false,
    color: '#7a5b8c',
  },
];

export const survivalThresholds = {
  killZone: 'Y3 PAT < -₹2 cr OR DSCR < 1.0 → existential risk',
  warnZone: 'Y3 PAT < ₹50 L OR DSCR 1.0-1.3 → cash flow stress',
  okZone: 'Y3 PAT ₹50 L - 1 cr OR DSCR 1.3-1.5 → marginal',
  thrivingZone: 'Y3 PAT > ₹1 cr AND DSCR > 1.5 → healthy',
};

export const mitigationLayers = [
  { layer: 'Insurance', recoveryPct: 60, applicable: ['cyclone', 'plant damage', 'product recall', 'buyer default'], coveredBy: 'BI + product recall + ECGC' },
  { layer: 'Diversification', recoveryPct: 40, applicable: ['tariff', 'buyer churn', 'market collapse'], coveredBy: '<18% buyer + 7-market mix' },
  { layer: 'Supply backup', recoveryPct: 30, applicable: ['cyclone', 'disease', 'monsoon'], coveredBy: 'Multi-region (Konkan+AP+LD)' },
  { layer: 'WC reserve', recoveryPct: 20, applicable: ['payment delays', 'inventory pile-up'], coveredBy: '3-month WC reserve' },
  { layer: 'Multi-bank', recoveryPct: 15, applicable: ['WC freeze'], coveredBy: 'Max 50% any single bank' },
  { layer: 'D&O + key-man', recoveryPct: 10, applicable: ['governance', 'key-person'], coveredBy: '₹3-5 cr per person' },
];
