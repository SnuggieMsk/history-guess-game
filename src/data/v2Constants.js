// V2 — SINGLE SOURCE OF TRUTH
// All cross-page financial constants. Every other v2 file should import from
// here rather than re-declaring revenue/cost/subsidy figures.
//
// Authoritative source: src/data/v2DprFinModel.js + src/data/v2Stress.js
// Last reconciliation: April 2026.
//
// ============================================================
// HOW TO USE:
//   import { CONST } from './v2Constants';
//   <p>Y3 revenue: ₹{CONST.revenue.Y3} cr</p>
// ============================================================

// PROJECT FINANCING (₹ cr unless noted)
export const PROJECT = {
  totalProjectCostINRcr: 40.0,         // = equity + term loan + WC line
  promoterEquityINRcr: 14.0,
  termLoanINRcr: 16.0,
  workingCapitalLineINRcr: 10.0,
  // CapEx + WC reconciliation
  hardCapexINRcr: 37.95,                // BOQ from v2CapEx (incl. 10% contingency)
  capexPmmsyEligibleINRcr: 28.85,
  // Funding gap = WC line drawn against capex shortfall + opex pre-revenue
  preOperativeINRcr: 0.85,
  contingencyINRcrIncluded: 3.65,       // already inside hardCapex
};

// REVENUE TRAJECTORY — taken directly from v2DprFinModel.js authoritativeIncomeStatement
export const REVENUE = {
  Y1: 24,            // ₹ cr (₹2,400 L)
  Y2: 85,            // ₹ cr (₹8,500 L)
  Y3: 168.65,        // ₹ cr (₹16,865 L)
  Y4: 208,           // ₹ cr (₹20,800 L)
  Y5: 243,           // ₹ cr (₹24,300 L)
};

export const THROUGHPUT_MT = {
  Y1: 600,
  Y2: 1350,
  Y3: 2030,
  Y4: 2550,
  Y5: 2950,
};

export const EBITDA = {
  Y1: -2.4,
  Y2: 6.8,
  Y3: 27.9,
  Y4: 39.4,
  Y5: 48.95,
};

export const EBITDA_PCT = {
  Y1: -10.0,
  Y2: 8.0,
  Y3: 16.5,
  Y4: 18.9,
  Y5: 20.1,
};

export const PAT = {
  Y1: -6.2,
  Y2: 1.9,
  Y3: 17.2,
  Y4: 25.8,
  Y5: 33.0,
};

export const PAT_PCT = {
  Y1: -25.8,
  Y2: 2.2,
  Y3: 10.2,
  Y4: 12.4,
  Y5: 13.6,
};

// SUBSIDY CAPTURE (over Y0-Y7 cumulative, ₹ cr)
// Reconciled from v2Schemes.js captureTable
export const SUBSIDY = {
  pmmsyINRcr: 6.0,                  // mid of 5.5-6.5
  pmksyINRcr: 2.75,                 // mid of 2.5-3.0
  mnreSolarINRcr: 0.45,             // mid of 0.35-0.50 direct
  nabardAifNpvINRcr: 0.4,
  epcgNpvINRcr: 0.5,
  stateMipINRcr: 4.0,               // mid of 3-5 cumulative 7-yr
  stateCapexTopUpINRcr: 0.35,
  mpedaINRcr: 0.3,
  totalCumulativeINRcr: 14.75,      // sum of above
  Y1CaptureINRcr: 6.5,              // tranche 1 + early SGST
  // Active scheme references (for cross-linking)
  primaryScheme: 'PMMSY',
  secondaryScheme: 'PMKSY',
};

// EXIT ECONOMICS (Y5 base case)
// Reconciled from v2CapTableExit.js + v2Balance.js
export const EXIT = {
  Y5revenueINRcr: REVENUE.Y5,        // ₹243 cr
  Y5ebitdaINRcr: EBITDA.Y5,          // ₹48.95 cr
  baseMultipleEvEbitda: 9.0,          // Indian listed median minus private discount
  baseEnterpriseValueINRcr: 9.0 * EBITDA.Y5,    // ₹440.55 cr
  upsideMultiple: 12.0,
  upsideEnterpriseValueINRcr: 12.0 * EBITDA.Y5, // ₹587.4 cr
  downsideMultiple: 7.0,
  downsideEnterpriseValueINRcr: 7.0 * EBITDA.Y5, // ₹342.65 cr
  promoterStakePctAtExit: 76.7,
  promoterProceedsBaseINRcr: 9.0 * EBITDA.Y5 * 0.767,  // ₹337.9 cr
  promoterMoMBase: (9.0 * EBITDA.Y5 * 0.767) / PROJECT.promoterEquityINRcr,  // ~24.1×
};

// HEADCOUNT — reconciled from v2TeamOrg.js
export const HEADCOUNT = {
  Y1: 85,
  Y2: 156,
  Y3: 226,
  Y4: 271,
  Y5: 334,
};

// CAPACITY — reconciled from v2WCRamp.js + v2DprFinModel.js
export const CAPACITY = {
  designedMTYr: 5400,                  // 18 MT/day × 300 days
  Y3UtilisationPct: 78,
  Y5UtilisationPct: 88,
  Y5ThroughputMT: THROUGHPUT_MT.Y5,
};

// WORKING CAPITAL — reconciled from v2WCRamp.js
export const WC = {
  Y1NetWCINRcr: 4.3,
  Y3NetWCINRcr: 30.1,
  Y5NetWCINRcr: 45.4,
  baseCCCdays: 110,
  Y5CCCdays: 85,
};

// CAP TABLE — reconciled from v2CapTableExit.js
// IMPORTANT: Series B trigger fixed — Y3 actual revenue is ₹168.65 cr (not ₹100 cr)
export const CAPTABLE = {
  day0: { promoterINRcr: 14.0, totalINRcr: 14.0, postMoneyINRcr: 14.0 },
  seriesA: { newRaiseINRcr: 8.0, postMoneyINRcr: 65.0, atMonth: 18, atRevenueRunRateINRcr: 24 },
  seriesB: { newRaiseINRcr: 25.0, postMoneyINRcr: 200.0, atMonth: 36, atRevenueRunRateINRcr: REVENUE.Y3 },
  exitYear: 5,
  exitEnterpriseValueBaseINRcr: 440.55,
};

// CONSTANTS LEDGER — unified bundle
export const CONST = {
  PROJECT,
  REVENUE,
  THROUGHPUT_MT,
  EBITDA,
  EBITDA_PCT,
  PAT,
  PAT_PCT,
  SUBSIDY,
  EXIT,
  HEADCOUNT,
  CAPACITY,
  WC,
  CAPTABLE,
};
