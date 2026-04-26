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

// V2 — Balance sheet + tax + exit scenarios

export const balanceSheet = [
  // Year ends in ₹ lakh
  { year: 'Y1', cash: 180, debtors: 320, inventory: 220, fixedAssets: 3160, totalAssets: 3880, equity: 1400, debtTerm: 1500, debtWC: 300, payables: 180, provisions: 80, currentPortionTerm: 200, totalLiab: 3880 },
  { year: 'Y2', cash: 120, debtors: 820, inventory: 560, fixedAssets: 2980, totalAssets: 4480, equity: 1470, debtTerm: 1400, debtWC: 700, payables: 380, provisions: 100, currentPortionTerm: 200, totalLiab: 4480 },
  { year: 'Y3', cash: 240, debtors: 1620, inventory: 980, fixedAssets: 2800, totalAssets: 5640, equity: 1760, debtTerm: 1200, debtWC: 1400, payables: 720, provisions: 120, currentPortionTerm: 440, totalLiab: 5640 },
  { year: 'Y4', cash: 380, debtors: 1990, inventory: 1180, fixedAssets: 2640, totalAssets: 6190, equity: 2240, debtTerm: 960, debtWC: 1680, payables: 860, provisions: 130, currentPortionTerm: 320, totalLiab: 6190 },
  { year: 'Y5', cash: 620, debtors: 2330, inventory: 1370, fixedAssets: 2490, totalAssets: 6810, equity: 2890, debtTerm: 720, debtWC: 1960, payables: 950, provisions: 140, currentPortionTerm: 240, totalLiab: 6810 },
];

export const taxStructure = {
  corporate: '22% concessional rate under Sec 115BAA (opt in Y3 onwards, OR 15% under 115BAB for new manufacturers — strict conditions)',
  bab: {
    eligibility: 'New manufacturing company; commenced production before 31 Mar 2024 originally; concession extended — confirm current cutoff. Must not claim certain incentives (SEZ, area-based, investment-based).',
    rate: '15% corporate tax + 10% surcharge + 4% cess = effective 17.16%',
    riskIfFail: 'Falls back to 25.17% under 115BAA'
  },
  baa: {
    eligibility: 'Open to all domestic companies',
    rate: '22% + 10% surcharge + 4% cess = effective 25.17%',
    note: 'Must give up carry-forward losses + MAT credit to opt in'
  },
  jjaa: {
    section: 'Section 80JJAA',
    benefit: '30% deduction on additional employee wages (for 3 years) if employee earns ≤₹25,000/mo',
    ourUseCase: '~150 workforce added; potential ₹3-4 cr cumulative deduction value over 3 yrs'
  },
  gst: {
    outputRate: 'Seafood exports are zero-rated under GST; refund mechanism',
    inputCreditFlows: 'Refund via ICEGATE. ~45-60 day cycle. ~3-5% of turnover continuously in refund pipeline.',
    risk: 'Refund delays in Indian system; plan for buffer'
  },
  rodtep: {
    rate: '0.7-1.7% of FOB depending on species',
    basis: 'Refunds embedded duties/taxes on exports',
    mechanism: 'Electronic scrip via ICEGATE; usable for import duty or transferable'
  },
  transferPricing: {
    threshold: 'If we set up overseas subsidiary for buyer relationships',
    note: 'Must document arm\'s-length pricing under Sec 92. Annual compliance cost ₹3-5 L.'
  },
};

export const exitScenarios = [
  {
    type: 'Strategic trade sale to Indian major',
    likelyBuyer: 'Avanti / Apex / Nekkanti / Devi looking to add non-shrimp capability',
    valuationMultiple: '5-7× Y5 EBITDA',
    timing: 'Y5-Y7',
    valuationRange: '₹97-137 cr at base',
    proceedsAfterDebt: '₹70-110 cr',
    promoterReturn: '₹60-90 cr on ₹14 cr in = 4-6× in 5-7 yrs',
    fit: 'Best fit — AP majors need multi-species + Maharashtra geography',
  },
  {
    type: 'Strategic trade sale to global seafood major',
    likelyBuyer: 'Thai Union / Mowi / Nueva Pescanova / Maruha Nichiro',
    valuationMultiple: '7-10× Y5 EBITDA (premium for India entry)',
    timing: 'Y5-Y8',
    valuationRange: '₹137-195 cr',
    proceedsAfterDebt: '₹105-165 cr',
    promoterReturn: '5-8× in 5-8 yrs',
    fit: 'Possible — they want India scale but execution compliance is gate',
  },
  {
    type: 'PE buyout',
    likelyBuyer: 'Tiger Global / KKR India / Rabo Equity Food Fund',
    valuationMultiple: '1.5-2.2× Y5 revenue (SaaS-lite valuation for branded specialty)',
    timing: 'Y5-Y6',
    valuationRange: '₹290-430 cr (aggressive) or ₹135-195 cr (disciplined)',
    proceedsAfterDebt: '₹105-400 cr',
    promoterReturn: '5-10× depending on growth trajectory',
    fit: 'Conditional on branded SKU portfolio + Pillar B+C execution proof',
  },
  {
    type: 'IPO (BSE SME or NSE SME platform)',
    likelyBuyer: 'Public investors',
    valuationMultiple: '4-6× revenue (premium to Indian seafood comps at 1.2-2.0×) — reflects specialty play',
    timing: 'Y6-Y8',
    valuationRange: '₹500-1,000 cr at base',
    proceedsAfterDebt: '₹380-850 cr',
    promoterReturn: '10-20× depending on market + execution',
    fit: 'Requires ₹150+ cr revenue track record; feasible Y6',
  },
  {
    type: 'Hold + cash-out via dividends',
    likelyBuyer: 'Promoter + minority shareholders',
    valuationMultiple: 'Annual dividend stream',
    timing: 'Y5+',
    valuationRange: 'Cumulative dividend ₹60-120 cr over 10 yrs post Y5',
    proceedsAfterDebt: 'N/A',
    promoterReturn: '5-10× total over 15 yrs',
    fit: 'Legacy business build; not a pure financial play',
  },
];

export const dilutionScenarios = [
  { event: 'Promoter founding', equityRaised: '₹14 cr', dilution: '0%', note: 'Base case; 100% promoter' },
  { event: 'Y1 — bridge seed (if needed)', equityRaised: '₹3 cr', dilution: '7-12%', note: 'Friends + Family; only if WC gap materialises' },
  { event: 'Y3 — Series A', equityRaised: '₹15-25 cr', dilution: '18-25%', note: 'PE / strategic minority; for value-added line expansion' },
  { event: 'Y4 — Series B (optional)', equityRaised: '₹30-50 cr', dilution: '12-18%', note: 'Growth capital for Japan + US scale-up' },
  { event: 'Y5+ — Exit or IPO', equityRaised: 'N/A', dilution: 'N/A', note: 'Liquidity event' },
];
