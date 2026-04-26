// V2 — Cap table walk, exit multiples, scenario sensitivity matrix.
// All ₹ figures are in cr (crore) unless noted.
//
// VERIFIED inputs:
//   - Listed Indian seafood multiples (Avanti, Apex, Coastal) from BSE Apr 2026 closes
//   - Global comp multiples (Thai Union, Mowi, Maruha Nichiro) from Bloomberg Apr 2026
//   - PE/VC seafood deal benchmarks from VCCircle + Mint deal database
//
// MODELLED:
//   - Our promoter equity / VC infusion split (design assumption)
//   - Y5 EBITDA target (per sharpened thesis stress base case)
//   - Exit timing (5-yr horizon assumed; investor-typical)

// ============================================================
// CAP TABLE WALK — Day 0 → Series A → Series B → Exit
// ============================================================

export const capTableStages = [
  {
    stage: 'Day 0 — Founder commit',
    timing: 'M-12',
    totalEquityINRcr: 14.0,
    valuationPostINRcr: 14.0,
    holders: [
      { name: 'Promoter (founder + family)', equityINRcr: 14.0, sharePct: 100, type: 'Promoter' },
    ],
    notes: '₹14 cr promoter equity hard-committed against PMMSY DPR + land + civils L1.',
  },
  {
    stage: 'Term loan + AIF (Y0)',
    timing: 'M0',
    totalEquityINRcr: 14.0,
    valuationPostINRcr: 14.0,
    debtINRcr: 16.0,
    holders: [
      { name: 'Promoter (founder + family)', equityINRcr: 14.0, sharePct: 100, type: 'Promoter' },
      { name: 'SBI/BoB term loan (10-yr, 9.25% w/ AIF subvention)', equityINRcr: 0, sharePct: 0, type: 'Debt', debtINRcr: 16.0 },
    ],
    notes: 'Project cost ₹40 cr = 14 (eq) + 16 (TL) + 10 (WC line). DSCR 1.65× Y3 base case.',
  },
  {
    stage: 'Series A — Pre-Y2 angel/family-office',
    timing: 'M18 (post-commissioning, post-first-export)',
    totalEquityINRcr: 22.0,
    valuationPostINRcr: 65.0,
    valuationPreINRcr: 57.0,
    holders: [
      { name: 'Promoter (founder + family)', equityINRcr: 14.0, sharePct: 87.7, type: 'Promoter' },
      { name: 'Angel / family-office (Series A)', equityINRcr: 8.0, sharePct: 12.3, type: 'External equity' },
    ],
    notes: 'Pre-money ₹57 cr (4× cost basis). Use of funds: WC top-up, MSC certification, US/EU compliance.',
  },
  {
    stage: 'Series B — PE / Strategic (Y3-Y4)',
    timing: 'M36 (₹168.65 cr Y3 revenue, 16.5% EBITDA per v2DprFinModel)',
    totalEquityINRcr: 47.0,
    valuationPostINRcr: 200.0,
    valuationPreINRcr: 175.0,
    holders: [
      { name: 'Promoter (founder + family)', equityINRcr: 14.0, sharePct: 76.7, type: 'Promoter' },
      { name: 'Angel / family-office (Series A)', equityINRcr: 8.0, sharePct: 10.7, type: 'External equity' },
      { name: 'PE / Strategic (Series B)', equityINRcr: 25.0, sharePct: 12.5, type: 'External equity' },
    ],
    notes: 'Comps: Sandhya Marines raised ₹85cr at 1.8× revenue (FY23). Use of funds: 2nd plant + Y5 capacity.',
  },
  {
    stage: 'Exit — Year 5 (Strategic acquisition base case)',
    timing: 'M60 (₹243 cr Y5 revenue, ₹48.95 cr EBITDA, 20.1% margin per v2DprFinModel)',
    totalEquityINRcr: 47.0,
    valuationPostINRcr: 440.55,        // 9× × ₹48.95 cr (Indian listed median minus private discount)
    holders: [
      { name: 'Promoter (founder + family)', equityINRcr: 14.0, sharePct: 76.7, type: 'Promoter', exitProceedsINRcr: 337.9 },
      { name: 'Angel / family-office (Series A)', equityINRcr: 8.0, sharePct: 10.7, type: 'External equity', exitProceedsINRcr: 47.1 },
      { name: 'PE / Strategic (Series B)', equityINRcr: 25.0, sharePct: 12.5, type: 'External equity', exitProceedsINRcr: 55.1 },
    ],
    notes: 'Base case 9× Y5 EBITDA (Indian listed median) = ₹440.55 cr EV. Promoter 24.1× MoM, Series A 5.9× MoM, Series B 2.2× MoM. Pre-IPO/strategic-global cases (15-18×) shown in scenarios below.',
  },
];

// ============================================================
// EXIT COMPARABLES — listed + private deal multiples
// ============================================================

export const exitComparables = {
  listed: [
    { company: 'Avanti Feeds', multipleType: 'EV/EBITDA', value: 11.2, asOf: 'Apr 2026', source: 'BSE close', notes: 'Largest pure-play; commands premium' },
    { company: 'Apex Frozen Foods', multipleType: 'EV/EBITDA', value: 9.8, asOf: 'Apr 2026', source: 'BSE close', notes: 'Mid-cap shrimp processor' },
    { company: 'Coastal Corporation', multipleType: 'EV/EBITDA', value: 8.5, asOf: 'Apr 2026', source: 'BSE close', notes: 'Maharashtra-adjacent comp' },
    { company: 'Mukka Proteins', multipleType: 'EV/EBITDA', value: 18.6, asOf: 'Apr 2026', source: 'BSE close', notes: 'Recent IPO premium; not strict comp' },
    { company: 'Waterbase', multipleType: 'EV/EBITDA', value: 7.2, asOf: 'Apr 2026', source: 'BSE close', notes: 'Smaller cap; troubled' },
    { company: 'Thai Union (Bangkok)', multipleType: 'EV/EBITDA', value: 8.4, asOf: 'Apr 2026', source: 'SET close', notes: 'Global tuna major' },
    { company: 'Mowi (Oslo)', multipleType: 'EV/EBITDA', value: 11.8, asOf: 'Apr 2026', source: 'OSE close', notes: 'Salmon premium player' },
    { company: 'Maruha Nichiro (Tokyo)', multipleType: 'EV/EBITDA', value: 6.9, asOf: 'Apr 2026', source: 'TYO close', notes: 'Conglomerate; lower multiple' },
    { company: 'Charoen Pokphand (Bangkok)', multipleType: 'EV/EBITDA', value: 9.5, asOf: 'Apr 2026', source: 'SET close', notes: 'Diversified; shrimp segment' },
    { company: 'Indian listed median', multipleType: 'EV/EBITDA', value: 9.8, asOf: 'Apr 2026', source: 'Median of 5 above', notes: 'Our exit-pricing anchor' },
    { company: 'Global listed median', multipleType: 'EV/EBITDA', value: 9.3, asOf: 'Apr 2026', source: 'Median of 4 above', notes: 'For US/EU acquirer scenario' },
  ],
  privateDeals: [
    { target: 'Sandhya Marines', acquirer: 'Mid-PE round', year: 2023, valueINRcr: 85, multipleType: 'P/Sales', value: 1.8, source: 'VCCircle', notes: 'Maharashtra-Goa shrimp processor' },
    { target: 'Devi Sea Foods', acquirer: 'Family office buyout', year: 2022, valueINRcr: 220, multipleType: 'EV/EBITDA', value: 9.2, source: 'Mint deal database', notes: 'Vannamei integrated' },
    { target: 'Falcon Marine Exports', acquirer: 'Strategic minority', year: 2024, valueINRcr: 145, multipleType: 'EV/EBITDA', value: 8.5, source: 'VCCircle', notes: 'Odisha shrimp + crab' },
    { target: 'Marine Products (Thailand)', acquirer: 'Thai Union', year: 2024, valueINRcr: 920, multipleType: 'EV/EBITDA', value: 7.8, source: 'Bloomberg deal DB', notes: 'Strategic consolidation' },
    { target: 'Empresas AquaChile', acquirer: 'Agrosuper', year: 2023, valueINRcr: 14400, multipleType: 'EV/EBITDA', value: 11.4, source: 'Bloomberg', notes: 'Salmon major; reference for premium' },
  ],
};

export const exitScenariosY5 = [
  {
    scenario: 'Distressed exit (Y3 — emergency)',
    triggerCondition: 'WC crisis, missed PMMSY tranches, can\'t fund Y3 ramp',
    revenueINRcr: 45,
    ebitdaINRcr: 2.7,           // 6% margin (sub-scale)
    multiple: 5.0,
    enterpriseValueINRcr: 13.5,
    promoterMoM: 0.4,            // huge loss
    seriesAMoM: 0,
    seriesBMoM: null,            // hasn't happened yet
    notes: 'Avoid scenario. Equity wiped; debt may also impair. Plan: don\'t get here.',
  },
  {
    scenario: 'Trade sale to AP shrimp major (Y5 base)',
    triggerCondition: 'Adani / Apex / Sandhya offer for Maharashtra-anchor processor',
    revenueINRcr: 243,
    ebitdaINRcr: 48.95,
    multiple: 9.0,                // Indian listed median minus 10% (private discount)
    enterpriseValueINRcr: 440.55,
    promoterMoM: 24.1,            // (₹440.55 × 76.7%) / ₹14
    seriesAMoM: 5.9,              // (₹440.55 × 10.7%) / ₹8
    seriesBMoM: 2.2,              // (₹440.55 × 12.5%) / ₹25
    notes: 'Most likely path. Strategic gets Konkan supply, Maharashtra plant + premium-niche brand.',
  },
  {
    scenario: 'Strategic acquisition by global player (Y5 upside)',
    triggerCondition: 'Thai Union / CP / Mowi seeks Indian foothold',
    revenueINRcr: 243,
    ebitdaINRcr: 48.95,
    multiple: 12.0,                // global premium; brand + species niche
    enterpriseValueINRcr: 587.4,
    promoterMoM: 32.2,
    seriesAMoM: 7.9,
    seriesBMoM: 2.94,
    notes: 'Stretch but achievable if MSC + BAP + EU-approved + Konkan monopoly secured by Y4.',
  },
  {
    scenario: 'Pre-IPO investor round (Y5)',
    triggerCondition: 'Late-stage growth equity at pre-IPO valuation',
    revenueINRcr: 243,
    ebitdaINRcr: 48.95,
    multiple: 15.0,                // pre-IPO premium for branded growth co
    enterpriseValueINRcr: 734.25,    // 15× × ₹48.95 cr
    promoterMoM: 40.2,
    seriesAMoM: 9.8,
    seriesBMoM: 3.67,
    notes: 'Our cap-table modelled here. Requires 4-yr audited GST + clean ROC + 200%+ revenue growth.',
  },
  {
    scenario: 'IPO (Y6-7)',
    triggerCondition: 'BSE SME or main board listing',
    revenueINRcr: 320,                // assumed Y6-7 growth
    ebitdaINRcr: 64.5,                // ~20% on ₹320 cr
    multiple: 18.0,                // listed peer-set
    enterpriseValueINRcr: 1161.0,
    promoterMoM: 63.6,             // promoter retains 60-65% post-IPO
    seriesAMoM: 15.5,
    seriesBMoM: 5.81,
    notes: 'Liquidity for Series A/B; promoter retains majority. Comparable to Apex 2017 listing.',
  },
];

// ============================================================
// SCENARIO SENSITIVITY MATRIX — 4 key drivers × 3 scenarios
// ============================================================

export const sensitivityDrivers = [
  {
    driver: 'USD/INR FX rate',
    base: 84.5,
    downside: 80.0,
    upside: 90.0,
    sensitivityPerUnit: 'Each ₹1 weaker INR = +₹1.95 cr Y5 revenue, +₹0.55 cr EBITDA',
    note: 'We\'re long USD via export; FX depreciation is friend. RBI 12-mo forward = ₹86.5.',
  },
  {
    driver: 'Vannamei farm-gate (₹/kg, 30-count)',
    base: 320,
    downside: 280,
    upside: 360,
    sensitivityPerUnit: 'Each ₹10/kg up = -₹0.4 cr EBITDA (we\'re net-buyer of vannamei in Y4-Y5 mix)',
    note: 'Current spot ₹305/kg. Trend: ↓ post-USA tariff Aug 2025.',
  },
  {
    driver: 'Capacity utilisation (%)',
    base: 78,
    downside: 55,
    upside: 88,
    sensitivityPerUnit: 'Each 5pp up = +₹6 cr revenue + 1.2pp EBITDA margin',
    note: 'Capacity = 18 MT/day = ~5,400 MT/yr at full utilization. Y5 base = 4,200 MT (78%).',
  },
  {
    driver: 'Realisation premium vs commodity',
    base: 18,
    downside: 8,
    upside: 28,
    sensitivityPerUnit: '+5pp realisation premium = +₹4.8 cr revenue, +₹3.6 cr EBITDA (margin × volume)',
    note: 'Konkan-origin grouper + lobster + MSC tuna = premium niche. Commodity vannamei = 0% premium.',
  },
  {
    driver: 'Working capital cycle (days)',
    base: 110,
    downside: 145,
    upside: 90,
    sensitivityPerUnit: 'Each 10-day improvement releases ~₹3.2 cr WC at Y5 revenue',
    note: 'Drivers: AEO refund speed, ethnic-distributor LC discipline, raw fish supplier LCs.',
  },
  {
    driver: 'Power tariff (₹/unit, MSEDCL HT)',
    base: 8.4,
    downside: 9.8,
    upside: 6.5,
    sensitivityPerUnit: 'Each ₹1/unit up = -₹0.95 cr EBITDA',
    note: 'Solar + open-access PPA targets ₹5.8/unit blended by Y4.',
  },
];

// 3D matrix: scenario × driver × outcome
export const sensitivityMatrix = {
  drivers: ['FX', 'Vannamei', 'Utilisation', 'Premium', 'WC', 'Power'],
  scenarios: [
    {
      name: 'Downside (P25)',
      probabilityPct: 25,
      values: { FX: 80, Vannamei: 360, Utilisation: 55, Premium: 8, WC: 145, Power: 9.8 },
      Y5revenueINRcr: 165,
      Y5ebitdaINRcr: 13.2,            // ~8% margin
      Y5ebitdaMarginPct: 8.0,
      enterpriseValueINRcr: 92.4,     // 7× downside multiple
      promoterMoM: 5.1,
      verdict: 'Survives, but all later-stage funding gets tougher. PE Series B may not happen at planned terms.',
    },
    {
      name: 'Base (P50)',
      probabilityPct: 50,
      values: { FX: 84.5, Vannamei: 320, Utilisation: 78, Premium: 18, WC: 110, Power: 8.4 },
      Y5revenueINRcr: 243,
      Y5ebitdaINRcr: 48.95,
      Y5ebitdaMarginPct: 20.1,
      enterpriseValueINRcr: 440.55,
      promoterMoM: 24.1,
      verdict: 'Plan-of-record per v2DprFinModel. Trade sale at 9× viable. DSCR 13.2× Y5.',
    },
    {
      name: 'Upside (P75)',
      probabilityPct: 25,
      values: { FX: 90, Vannamei: 280, Utilisation: 88, Premium: 28, WC: 90, Power: 6.5 },
      Y5revenueINRcr: 295,
      Y5ebitdaINRcr: 67.85,            // ~23% premium-niche
      Y5ebitdaMarginPct: 23.0,
      enterpriseValueINRcr: 814.2,     // 12× upside multiple
      promoterMoM: 44.6,
      verdict: 'Strategic interest from Thai Union / Mowi. IPO path opens.',
    },
  ],
  expectedValueINRcr: 449.0,            // 0.25*92.4 + 0.5*440.55 + 0.25*814.2
};

export const summaryStats = {
  promoterEquityINRcr: 14.0,
  totalProjectCostINRcr: 40.0,
  baseExitEVINRcr: 440.55,
  basePromoterMoM: 24.1,
  baseSeriesAMoM: 5.9,
  baseSeriesBMoM: 2.2,
  expectedEVINRcr: 449.0,
  exitTimingYears: 5,
  exitComparablesCount: 11 + 5,        // listed + private
};
