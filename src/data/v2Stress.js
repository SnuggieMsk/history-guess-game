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

// V2 — Stress-tested financials

export const capexRevised = [
  { cat: 'Land & site',        item: '3-ac lease + dev',                        grossL: 150, subL:  0, netL: 150 },
  { cat: 'Civil',              item: 'HACCP-grade civil + finishes',             grossL: 460, subL: 92, netL: 368 },
  { cat: 'Processing',         item: 'Grading + conveyors',                      grossL: 190, subL: 76, netL: 114 },
  { cat: 'Processing',         item: 'IQF 900 kg/hr + plate freezer (tuna saku)', grossL: 410, subL:164, netL: 246 },
  { cat: 'Processing',         item: 'Cold storage 2×150 MT',                     grossL: 240, subL: 96, netL: 144 },
  { cat: 'Processing',         item: 'Reefer dock',                              grossL:  90, subL: 36, netL:  54 },
  { cat: 'Live holding',       item: '6 RAS tanks + O2 backup',                  grossL:  65, subL:  0, netL:  65 },
  { cat: 'Utilities',          item: '1.2 MWp solar PV',                         grossL: 480, subL: 50, netL: 430 },
  { cat: 'Utilities',          item: 'DG + LT + HT (incl. live-hold DG)',        grossL: 140, subL:  0, netL: 140 },
  { cat: 'Utilities',          item: 'RO + ZLD',                                 grossL: 220, subL: 55, netL: 165 },
  { cat: 'Logistics',          item: '4 reefer trucks',                          grossL: 260, subL:  0, netL: 260 },
  { cat: 'Logistics',          item: '6 chilled vans',                           grossL: 108, subL:  0, netL: 108 },
  { cat: 'QC + lab',           item: 'HPLC-MS/MS + ELISA + AAS + micro (NABL)',  grossL: 120, subL:  0, netL: 120 },
  { cat: 'MSC co-funding',     item: 'Lakshadweep fishery assessment contribution', grossL:  75, subL:  0, netL:  75 },
  { cat: 'Pre-ops',            item: 'Statutory + legal + DPR consultants + cert fees', grossL: 85, subL: 0, netL: 85 },
  { cat: 'Pre-ops',            item: 'Training + pre-commissioning + retention', grossL:  55, subL:  0, netL:  55 },
  { cat: 'Contingency',        item: '9% of hard capex',                         grossL: 210, subL:  0, netL: 210 },
];

export const capexTotals = {
  grossL: capexRevised.reduce((s, c) => s + c.grossL, 0),
  subL:   capexRevised.reduce((s, c) => s + c.subL, 0),
  netL:   capexRevised.reduce((s, c) => s + c.netL, 0),
};

// Funding plan = ₹40 cr (project cost). Subsidies are tranche-timed RECEIPTS
// that offset capex / repay interim debt — NOT a separate funding source.
// Reconciled to v2Constants.PROJECT.totalProjectCostINRcr.
export const fundingPlan = [
  { source: 'Promoter equity',      amountINRcr: 14 },
  { source: 'Term loan (10-yr, 9.25% w/ NABARD AIF subvention, 24-mo moratorium)', amountINRcr: 16 },
  { source: 'Working-capital line (CC + EPC + FBP/FBN)',     amountINRcr: 10 },
];
export const fundingTotal = fundingPlan.reduce((s, f) => s + f.amountINRcr, 0);

// Subsidies are RECEIPTS, not funding — they reduce net capex over time
export const subsidyReceipts = [
  { source: 'PMMSY (tranche-timed M10-M28)', amountINRcr: 6.0 },
  { source: 'PMKSY (tranche-timed M10-M24)', amountINRcr: 2.75 },
  { source: 'MNRE solar direct subsidy',     amountINRcr: 0.45 },
  { source: 'State MIP 2024 (7-yr SGST refund cumulative)', amountINRcr: 4.0 },
  { source: 'NABARD AIF interest subvention NPV',         amountINRcr: 0.4 },
];
export const subsidyTotal = subsidyReceipts.reduce((s, f) => s + f.amountINRcr, 0);

export const scenariosY5 = {
  bear: {
    label: 'Bear', color: '#a8322d',
    revenueINRcr: 175, ebitdaPct: 11,
    assumptions: [
      'Live-cargo mortality avg 14% (vs 10% target)',
      'Lakshadweep MSC slips 12 months (no Y3 MSC premium)',
      'Ecuador vannamei price war → FOB $5.40 → ₹470/kg',
      'USA tariff persists → no US revenue in Y3',
      'INR appreciates to ₹80/USD',
    ],
  },
  base: {
    label: 'Base', color: '#c5a565',
    revenueINRcr: 243, ebitdaPct: 20.1,
    assumptions: [
      'Mortality 10% target achieved',
      'MSC certified Y2 end on schedule',
      'Vannamei stable',
      'FX ₹87-90/USD',
    ],
  },
  bull: {
    label: 'Bull', color: '#2d6a4f',
    revenueINRcr: 315, ebitdaPct: 23,
    assumptions: [
      'Mortality <6%',
      'MSC certified Y2',
      'UK CETA volume kicks in Y3 (+ ₹8-10 cr)',
      'Octopus demand strong (Morocco deeper quota cuts)',
      'FX stable ₹87-90/USD',
    ],
  },
};

export const pnlBase = [
  { year: 'Y1', throughput: 600,  revenueL:  2400, cogsL:  2160, grossL:  240, opexL: 480, ebitdaL: -240, ebitdaPct: -10,   depL: 260, intL: 120, pbtL:  -620, taxL:   0, patL:  -620, patPct: -25.8 },
  { year: 'Y2', throughput: 1350, revenueL:  8500, cogsL:  7140, grossL: 1360, opexL: 680, ebitdaL:  680, ebitdaPct:   8,   depL: 290, intL: 150, pbtL:   240, taxL:  50, patL:   190, patPct:   2.2 },
  { year: 'Y3', throughput: 2030, revenueL: 16865, cogsL: 13155, grossL: 3710, opexL: 920, ebitdaL: 2790, ebitdaPct:16.5,  depL: 310, intL: 185, pbtL:  2295, taxL: 575, patL:  1720, patPct:  10.2 },
  { year: 'Y4', throughput: 2550, revenueL: 20800, cogsL: 15810, grossL: 4990, opexL:1050, ebitdaL: 3940, ebitdaPct:18.9,  depL: 320, intL: 170, pbtL:  3450, taxL: 870, patL:  2580, patPct:  12.4 },
  { year: 'Y5', throughput: 2950, revenueL: 24300, cogsL: 18225, grossL: 6075, opexL:1180, ebitdaL: 4895, ebitdaPct:20.1,  depL: 330, intL: 150, pbtL:  4415, taxL:1115, patL:  3300, patPct:  13.6 },
];

export const dscrTable = [
  { year: 'Y1', ebitdaL:  -240, dsL: 120, dscr: 'moratorium' },
  { year: 'Y2', ebitdaL:   680, dsL: 150, dscr: '4.5× (interest only)' },
  { year: 'Y3', ebitdaL:  2790, dsL: 390, dscr: '7.2×' },
  { year: 'Y4', ebitdaL:  3940, dsL: 380, dscr: '10.4×' },
  { year: 'Y5', ebitdaL:  4895, dsL: 370, dscr: '13.2×' },
];

export const combinedShock = [
  { scenario: 'Base',                       y3PatL: 1720, projectIRR: 17.8 },
  { scenario: 'USA tariff persists',       y3PatL: 1470, projectIRR: 16.2 },
  { scenario: '+ Vannamei -10%',           y3PatL: 1180, projectIRR: 14.5 },
  { scenario: '+ FX to ₹82/USD',           y3PatL:  870, projectIRR: 12.8 },
  { scenario: '+ MSC 12-month delay',      y3PatL:  420, projectIRR:  9.4 },
  { scenario: '+ Live mortality 15% avg',  y3PatL:  120, projectIRR:  7.1 },
  { scenario: 'Full-stress combined',      y3PatL: -390, projectIRR:  5.2 },
  { scenario: 'Bull (all favourable)',     y3PatL: 3800, projectIRR: 29.5 },
];

export const returnsSummary = {
  bear: { y5rev: 175, y5ebitda: 11, projectIRR: 10, equityIRR: 15, paybackY: 7.2, y5EVcr: 116, promoterEquityIRR: '8-12%' },
  base: { y5rev: 243, y5ebitda: 20.1, projectIRR: 18, equityIRR: 25, paybackY: 5.4, y5EVcr: 293, promoterEquityIRR: '22-28%' },
  bull: { y5rev: 315, y5ebitda: 23, projectIRR: 28, equityIRR: 38, paybackY: 3.8, y5EVcr: 435, promoterEquityIRR: '35-42%' },
};

export const monitorKPIs = [
  { cadence: 'Monthly', items: ['Receive-to-ice time (RTIT) by dock', 'Reefer temp excursions count', 'APC + E. coli failure rate', 'Mortality % by live shipment', 'AR aging'] },
  { cadence: 'Quarterly', items: ['Yield % per species', 'Customer concentration (top 3)', 'Market mix % by destination', 'Buyer-delinquency list', 'Cash flow vs plan'] },
  { cadence: 'Annually', items: ['Project IRR recompute', 'DSCR with bank', 'Stress test update', 'Kill-condition review', 'Subsidy utilisation certificate'] },
];
