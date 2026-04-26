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

// V2 L3 — Simulator news event layer (10 years of major shocks affecting simulator)
// Each event has: date, region, type, magnitude, simulator-impact descriptor

export const newsEvents = [
  // 2016
  { date: '2016-08', region: 'AP', type: 'cyclone', headline: 'Cyclone Nada landfall TN/AP coast', impact: 'Mild AP supply disruption 5%', simEffect: 'cycloneAdj +5%' },
  // 2017
  { date: '2017-12', region: 'TN+AP', type: 'cyclone', headline: 'Cyclone Ockhi devastates TN coast', impact: 'TN supply -25% Q4-Q1', simEffect: 'cycloneAdj +12%' },
  // 2018
  { date: '2018-04', region: 'AP', type: 'disease', headline: 'WSSV outbreak West Godavari clusters', impact: 'AP vannamei supply -10% Q2', simEffect: 'diseaseAdj +8%' },
  { date: '2018-09', region: 'India', type: 'fx', headline: 'INR crosses 70/USD first time; sustained depreciation', impact: 'Exporter margins +4-6%', simEffect: 'fx +5%' },
  // 2019
  { date: '2019-04', region: 'AP', type: 'disease', headline: 'Major EHP + WSSV double outbreak; farmer crisis', impact: 'AP supply -35% Apr-Aug; farm-gate spike +25%', simEffect: 'diseaseAdj +25%; supply 0.65' },
  { date: '2019-05', region: 'Odisha', type: 'cyclone', headline: 'Cyclone Fani Cat-4 landfall Puri', impact: 'Odisha plants damaged; Falcon Marine ₹40-60 L damage', simEffect: 'cycloneAdj +30% Odisha' },
  // 2020
  { date: '2020-03', region: 'global', type: 'pandemic', headline: 'COVID-19 lockdown — air freight collapse', impact: 'Sea freight stable initially; air freight 4-6× spike', simEffect: 'airFreight ×3.5; supply 0.5 in Mar-Apr' },
  { date: '2020-06', region: 'global', type: 'freight', headline: 'Container shortages + port congestion begin', impact: 'Sea freight starts climbing $2k → $5k+', simEffect: 'seaFreight ×2.5' },
  { date: '2020-08', region: 'USA', type: 'demand', headline: 'COVID retail-shrimp demand spike (cooking-at-home)', impact: 'USA retail demand +25%', simEffect: 'fobMul +15% retail SKUs' },
  // 2021
  { date: '2021-05', region: 'Maharashtra+Gujarat', type: 'cyclone', headline: 'Cyclone Tauktae Cat-4 Arabian Sea landfall', impact: 'Konkan supply disruption 2 weeks', simEffect: 'monsoonAdj +30%; supply 0.55' },
  { date: '2021-05', region: 'Odisha+WB', type: 'cyclone', headline: 'Cyclone Yaas landfall Odisha-WB', impact: 'Falcon Marine production hit; Sundarbans crab supply -40%', simEffect: 'cycloneAdj +35% east coast' },
  { date: '2021-09', region: 'global', type: 'freight', headline: 'Sea freight peak $18k+/MT to USA', impact: 'Margin compression; some exporters paused USA shipments', simEffect: 'seaFreight peak' },
  // 2022
  { date: '2022-02', region: 'global', type: 'fx', headline: 'Russia-Ukraine war; INR weakens to 78', impact: 'Exporter FX gains +6%', simEffect: 'fx +5%' },
  { date: '2022-08', region: 'global', type: 'freight', headline: 'Sea freight normalizing $7k → $5k', impact: 'Margin recovery starts', simEffect: 'seaFreight stabilizes' },
  // 2023
  { date: '2023-01', region: 'Ecuador+global', type: 'price-war', headline: 'Ecuador vannamei production peaks; flooding global supply', impact: 'Indian vannamei FOB drops $7.95 → $6.55 over 6 months', simEffect: 'fobMul -15%' },
  { date: '2023-05', region: 'Bay of Bengal', type: 'cyclone', headline: 'Cyclone Mocha Cat-5 Myanmar/Bangladesh; spillover east India', impact: 'Marginal east-coast disruption', simEffect: 'cycloneAdj +10%' },
  { date: '2023-11', region: 'Red Sea', type: 'shipping-crisis', headline: 'Houthi attacks on Red Sea shipping; rerouting around Africa', impact: 'EU shipping +14 days, +30% cost', simEffect: 'seaFreight +35% EU routes' },
  // 2024
  { date: '2024-03', region: 'USA', type: 'tariff', headline: 'USA imposes 5% additional tariff on Indian shrimp', impact: 'Indian exporters absorb 50%; margin -3%', simEffect: 'tariffPct 5% Q2' },
  { date: '2024-06', region: 'Spain+Morocco', type: 'supply', headline: 'Morocco octopus quota cut 8%; Spain importers seek India', impact: 'Indian octopus FOB +8%', simEffect: 'fobMul +8% octopus to Spain' },
  { date: '2024-09', region: 'India-UK', type: 'trade-deal', headline: 'India-UK CETA in force; processed seafood duty-free', impact: 'UK route +12% margin upside', simEffect: 'fobMul +12% UK routes' },
  // 2025
  { date: '2025-02', region: 'USA', type: 'tariff', headline: 'USA escalates tariff to 26% on Indian shrimp', impact: 'USA route margin compression -8% to -12%', simEffect: 'tariffPct 26%' },
  { date: '2025-05', region: 'AP', type: 'disease', headline: 'WSSV resurgence; AP farmer protests', impact: 'AP supply -15% Q2-Q3; farm-gate spike', simEffect: 'diseaseAdj +12%' },
  { date: '2025-08', region: 'Lakshadweep', type: 'fishery', headline: 'MSC pre-assessment positive for Lakshadweep pole-and-line tuna', impact: 'Premium tuna access unlocks; +25-35% pricing potential', simEffect: 'mscPremium activated for Lakshadweep tuna' },
  { date: '2025-11', region: 'Maharashtra', type: 'policy', headline: 'Maharashtra Industrial Policy 2024 D-zone implementation begins', impact: 'New plant SGST refunds activated; capex incentives', simEffect: 'state subsidy stack live' },
  // 2026
  { date: '2026-01', region: 'global', type: 'fx', headline: 'INR stable at 86-87/USD', impact: 'Predictable FX environment', simEffect: 'fx baseline' },
  { date: '2026-03', region: 'India', type: 'policy', headline: 'PMMSY FY27 budget ₹2,500 cr announced', impact: 'New project applications surge', simEffect: 'subsidy capture window open' },
];

export const eventTypeColors = {
  cyclone: '#a8322d',
  disease: '#b8860b',
  pandemic: '#7a5b8c',
  freight: '#0d3b66',
  fx: '#2d6a4f',
  tariff: '#a8322d',
  demand: '#c5a565',
  supply: '#5fb3e3',
  'price-war': '#a8322d',
  'shipping-crisis': '#a8322d',
  'trade-deal': '#2d6a4f',
  fishery: '#2d6a4f',
  policy: '#0d3b66',
};

export const eventCategoryRollup = {
  totalEvents: 26,
  cycloneCount: 5,
  diseaseCount: 3,
  policyCount: 4,
  tariffCount: 2,
  freightCount: 3,
  fxCount: 3,
  demandCount: 1,
  supplyCount: 1,
  pandemicCount: 1,
  insight: 'Average ~2.6 major shocks per year. Operator must plan for >1 supply-disruption event annually + >1 demand/policy/freight shock.',
};
