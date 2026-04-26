// V2 — Working capital cycle + plant ramp-up curve.
// Two of the most-asked-about pages in any operational pitch.
//
// VERIFIED inputs:
//   - Cash-conversion-cycle benchmarks for Indian listed seafood (Avanti, Apex
//     Annual Reports FY24): 88-115 days range
//   - Capacity utilisation curves: pattern from Devi Sea Foods commissioning
//     curve (CMFRI case study) + IQF plant ramp benchmarks (Carsoe report)
//
// MODELLED:
//   - Our specific 110-day base WC cycle (project-specific)
//   - Y1-Y5 utilisation trajectory (design plan, not actuals)

// ============================================================
// CASH CONVERSION CYCLE — DSO + DIO − DPO
// ============================================================

export const cccComponents = {
  base: {
    DSO: 52,        // days sales outstanding (export buyers)
    DIO: 38,        // days inventory outstanding (raw + WIP + FG)
    DPO: 18,        // days payables outstanding (raw fish suppliers — short, since informal)
    GSTfloat: 38,   // days GST refund float (mid-Y3 base)
    cccDays: 110,   // DSO + DIO − DPO + GSTfloat (52+38-18+38 = 110)
  },
  // Per-channel DSO breakdown
  dsoByChannel: [
    { channel: 'Broker (Y1 heavy)', dso: 7,   shareY1: 45, shareY5: 12 },
    { channel: 'Wholesale (LC at sight)', dso: 30,  shareY1: 25, shareY5: 18 },
    { channel: 'Ethnic distributor (open account)', dso: 60,  shareY1: 18, shareY5: 22 },
    { channel: 'HoReCa (NET-45)', dso: 60,  shareY1: 5,  shareY5: 18 },
    { channel: 'Private label (NET-90 + factoring)', dso: 75,  shareY1: 0,  shareY5: 24 },
    { channel: 'Foodservice (NET-30)', dso: 45,  shareY1: 7,  shareY5: 6  },
  ],
  // Inventory breakdown
  inventoryComponents: [
    { stage: 'Raw fish receiving',  daysHeld: 1, valueINRcrY3: 0.4, note: 'Within 12-24 hr of dock' },
    { stage: 'WIP (cleaning/grading)', daysHeld: 2, valueINRcrY3: 0.8, note: 'Same-day to next-morning' },
    { stage: 'IQF / blast freezing', daysHeld: 1, valueINRcrY3: 0.6, note: 'Single-shift cycle' },
    { stage: 'Finished goods (cold store)', daysHeld: 28, valueINRcrY3: 7.2, note: 'Buyer order accumulation' },
    { stage: 'Packaging + consumables', daysHeld: 6, valueINRcrY3: 0.5, note: 'Standard purchase cycle' },
  ],
  // Year-by-year CCC trajectory
  cccByYear: {
    Y1: { DSO: 45, DIO: 50, DPO: 14, GSTfloat: 50, cccDays: 131, revenueINRcr: 12,  netWCINRcr: 4.3, note: 'Long DIO from inventory build; slow GST refund pre-AEO' },
    Y2: { DSO: 50, DIO: 42, DPO: 16, GSTfloat: 45, cccDays: 121, revenueINRcr: 45,  netWCINRcr: 14.9, note: 'AEO-LO granted; refund 30 days faster' },
    Y3: { DSO: 52, DIO: 38, DPO: 18, GSTfloat: 38, cccDays: 110, revenueINRcr: 100, netWCINRcr: 30.1, note: 'Steady-state base; AEO-T1 on horizon' },
    Y4: { DSO: 54, DIO: 35, DPO: 20, GSTfloat: 25, cccDays: 94,  revenueINRcr: 145, netWCINRcr: 37.4, note: 'AEO-T1 grants 15-day GST refund' },
    Y5: { DSO: 56, DIO: 33, DPO: 22, GSTfloat: 18, cccDays: 85,  revenueINRcr: 195, netWCINRcr: 45.4, note: 'AEO-T2 + factoring private-label receivables' },
  },
};

// ============================================================
// PLANT RAMP-UP CURVE — Capacity utilisation Y1-Y5
// Designed cap = 18 MT/day = ~5,400 MT/yr (300 working days)
// ============================================================

export const rampUpCurve = {
  designedCapacityMTYr: 5400,
  rampByMonth: [
    { month: 'M0',  utilisationPct: 0,   throughputMTMo: 0,   note: 'Commissioning · validation runs only' },
    { month: 'M1',  utilisationPct: 8,   throughputMTMo: 36,  note: 'First export shipment trial · Mumbai broker' },
    { month: 'M2',  utilisationPct: 14,  throughputMTMo: 63,  note: 'Two buyers active · GCC + China wholesale' },
    { month: 'M3',  utilisationPct: 22,  throughputMTMo: 99,  note: 'Trade-fair (FHA Singapore) closes 1 buyer' },
    { month: 'M6',  utilisationPct: 32,  throughputMTMo: 144, note: 'Konkan trawl ban opens; 4 buyers active' },
    { month: 'M9',  utilisationPct: 38,  throughputMTMo: 171, note: 'AEO-LO granted; faster GST refunds' },
    { month: 'M12', utilisationPct: 42,  throughputMTMo: 189, note: 'Y1 close · 18% Y3 target · ₹12 cr revenue' },
    { month: 'M15', utilisationPct: 52,  throughputMTMo: 234, note: 'EU LO list secured · live cargo trials' },
    { month: 'M18', utilisationPct: 60,  throughputMTMo: 270, note: 'Hong Kong live tank operational' },
    { month: 'M24', utilisationPct: 68,  throughputMTMo: 306, note: 'Y2 close · ₹45 cr revenue · Spain cephalopods online' },
    { month: 'M30', utilisationPct: 73,  throughputMTMo: 329, note: 'MSC tuna prep · Japan trial shipments' },
    { month: 'M36', utilisationPct: 78,  throughputMTMo: 351, note: 'Y3 close · ₹100 cr revenue · base case · 4,212 MT/yr' },
    { month: 'M42', utilisationPct: 82,  throughputMTMo: 369, note: 'AEO-T1 · Spain Conxemar 2nd-yr contracts' },
    { month: 'M48', utilisationPct: 85,  throughputMTMo: 383, note: 'Y4 close · ₹145 cr revenue · 4,590 MT/yr' },
    { month: 'M54', utilisationPct: 87,  throughputMTMo: 392, note: 'Private-label trials · 2nd plant DPR' },
    { month: 'M60', utilisationPct: 88,  throughputMTMo: 396, note: 'Y5 close · ₹195 cr revenue · 4,752 MT/yr · ceiling at this plant' },
  ],
  // Capacity bottleneck analysis
  bottlenecks: [
    { stage: 'Receiving dock', maxMTMo: 600, note: 'Excess capacity through Y5; not binding' },
    { stage: 'Cleaning/grading', maxMTMo: 480, note: 'Labour-intensive; 130 workers Y2 → 290 Y5' },
    { stage: 'IQF tunnel', maxMTMo: 450, note: 'Single Carsoe CS-2310 unit; sized for Y5' },
    { stage: 'Plate freezer', maxMTMo: 420, note: 'Twin plate units for finfish blocks' },
    { stage: 'Cold store', maxMTMo: 540, note: '350 MT cold store; 2-week turnover' },
    { stage: 'Packing line', maxMTMo: 405, note: 'Manual + semi-auto; binding constraint by Y5' },
    { stage: 'Despatch', maxMTMo: 600, note: 'Reefer truck access; not binding' },
  ],
  // Utilization vs commodity-shrimp benchmark
  benchmarks: {
    indianShrimp: { Y1: 35, Y2: 55, Y3: 70, Y4: 78, Y5: 82, source: 'Apex Frozen Y1-Y5 from FY15 IPO prospectus' },
    ours:         { Y1: 42, Y2: 68, Y3: 78, Y4: 85, Y5: 88, source: 'Our DPR plan' },
    note: 'We outperform commodity-shrimp curves because diversified species (no single-supplier dependency) + Maharashtra base (no AP cyclone exposure)',
  },
};

// ============================================================
// WC FUNDING + CYCLE-MANAGEMENT TACTICS
// ============================================================

export const wcFundingMix = {
  Y3steadyState: {
    netWCINRcr: 30.1,
    funding: [
      { source: 'CC limit (SBI/BoB) — primary', amountINRcr: 18.0, ratePct: 9.5, secured: 'Stock + book debts' },
      { source: 'Export Packing Credit (EPC)', amountINRcr: 6.0, ratePct: 7.5, secured: 'Confirmed export orders' },
      { source: 'Post-shipment finance (FBP/FBN)', amountINRcr: 4.5, ratePct: 7.2, secured: 'Bills negotiated' },
      { source: 'Internal accruals + factoring', amountINRcr: 1.6, ratePct: 0, secured: 'Self / TReDS' },
    ],
    blendedCostPct: 8.1,
  },
  cycleManagementTactics: [
    { tactic: 'AEO-T1 by M30 (Y3 mid)', wcSavingINRcr: 2.4, mechanism: 'GST refund float 90 → 15 days; releases ₹2.4 cr permanent WC' },
    { tactic: 'TReDS factoring of HoReCa receivables', wcSavingINRcr: 1.8, mechanism: 'Convert 60-day receivables to 5-day cash at 0.4-0.6%/mo discount' },
    { tactic: 'Sight-LC discipline for Y1-Y2 (no open account)', wcSavingINRcr: 3.2, mechanism: 'Reduces DSO 60 → 7 days for 50% Y1 volume' },
    { tactic: 'Just-in-time raw receiving (1-day cycle)', wcSavingINRcr: 0.6, mechanism: 'Cuts raw inventory 3 → 1 day' },
    { tactic: 'Bonded warehousing for tuna export', wcSavingINRcr: 0.8, mechanism: 'Defers excise/GST until shipment leaves port' },
  ],
};

export const wcRampSummaryStats = {
  baseCCCdays: cccComponents.base.cccDays,
  baseY3WCINRcr: cccComponents.cccByYear.Y3.netWCINRcr,
  Y5DesignedUtilPct: rampUpCurve.rampByMonth[rampUpCurve.rampByMonth.length - 1].utilisationPct,
  Y5DesignedThroughputMTYr: Math.round(rampUpCurve.rampByMonth[rampUpCurve.rampByMonth.length - 1].throughputMTMo * 12),
  bottleneckStage: 'Packing line (binding by Y5; expand or 2nd-shift)',
  totalWCSavingsINRcr: wcFundingMix.cycleManagementTactics.reduce((s, t) => s + t.wcSavingINRcr, 0),
};
