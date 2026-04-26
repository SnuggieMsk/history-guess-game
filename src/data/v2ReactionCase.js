// =====================================================================
// SOURCE INTEGRITY HEADER
// =====================================================================
// Reaction Case: what happens if Adani / Reliance / Thai Union /
// Charoen Pokphand acquires an Indian seafood major in Y1-Y3, OR
// builds greenfield capacity in Maharashtra. Audit finding #26+#34
// flagged this as missing scenario.
//
// VERIFIED: Adani Wilmar FY24 revenue ₹54,000 cr, Reliance Retail
// 700+ JioMart Fresh stores, FDI cap raised 2024 (DPIIT FDI Policy 2024).
// MODELLED: probability bands, time-to-impact, our revised exit multiples.
// =====================================================================

export const reactionScenarios = [
  {
    id: 'adani-buys-avanti',
    trigger: 'Adani Wilmar acquires Avanti Feeds (₹6,800 cr revenue)',
    probabilityPct: 18,
    timeToImpactMonths: 12,
    immediateImpact: [
      'Adani sets benchmark pricing for Indian shrimp + finfish (volume buyer)',
      'Konkan supplier pricing pressured 5-8% upward (suppliers see Adani as new bid)',
      'Reefer + cold-chain capacity tightens; rates rise 10-15%',
      'Banks de-risk seafood lending toward Adani-affiliated borrowers',
    ],
    yearlyImpactToUs: {
      revenueImpactPct: -12,        // 12% revenue softening over 24 mo
      ebitdaImpactPct: -3.5,         // margin compression
      Y3RevenueRevisedINRcr: 148,    // ~12% off ₹168.65 cr
      Y5RevenueRevisedINRcr: 218,    // ~10% off ₹243 cr
      Y5EbitdaRevisedINRcr: 35.0,    // 16% margin instead of 20.1%
    },
    exitMultipleAtRiskOf: 7.0,        // vs base 9× — strategic acquirer set narrows
    revisedExitEvINRcr: 245.0,        // 7× × ₹35 cr
    ourCounter: [
      'Lock 3-yr reefer-truck rate cards with Snowman + ColdEx BEFORE any Adani entry',
      'Diversify cold-store relationships across 3 vendors (CWC + Snowman + Coastal) — no single vendor > 40%',
      'Build personal founder-led buyer relationships that Adani cannot replicate via volume play',
      'Seek strategic buyer from outside India early (Thai Union, Mowi) to remove Adani as monopsony',
    ],
    earlyWarningSignals: [
      'Adani Wilmar Q-on-Q seafood revenue jumps > 25%',
      'Adani Agri Logistics announces Mumbai/Pune cold-chain expansion',
      'Adani-Avanti talks reported in Mint or Bloomberg',
    ],
  },
  {
    id: 'reliance-greenfield',
    trigger: 'Reliance builds greenfield seafood plant in Maharashtra/AP',
    probabilityPct: 12,
    timeToImpactMonths: 18,
    immediateImpact: [
      'Reliance builds 10-20× our scale plant (₹400-800 cr)',
      'Domestic retail benchmark prices anchored 25% below export FOB',
      'Workforce attractive offer (₹35-40 K/mo vs our ₹22-25 K) — wage inflation',
      'PMMSY budget reallocated toward Reliance flagship project (DoF prefers headline)',
    ],
    yearlyImpactToUs: {
      revenueImpactPct: -8,
      ebitdaImpactPct: -2.5,
      Y3RevenueRevisedINRcr: 155,
      Y5RevenueRevisedINRcr: 224,
      Y5EbitdaRevisedINRcr: 38.6,
    },
    exitMultipleAtRiskOf: 8.0,
    revisedExitEvINRcr: 308.8,
    ourCounter: [
      'Stay export-only — explicitly REFUSE Indian metro retail (Reliance dominates)',
      'Offer to be Reliance private-label supplier (SKU-locked, 3-yr contract) for premium niche',
      'Lobby Maharashtra DoF for early-mover PMMSY allocation (file DPR M-3 ahead)',
      'Lock workforce via housing subsidy + structured ESOP for production supervisors',
    ],
    earlyWarningSignals: [
      'Reliance Industries FY26 capex guidance includes "specialty foods"',
      'Reliance Foods Ltd announces Maharashtra/AP land acquisition',
      'Reliance Retail JioMart Fresh expands to 1,000+ stores',
    ],
  },
  {
    id: 'thai-union-india',
    trigger: 'Thai Union or Charoen Pokphand sets up India arm (FDI 100% post-2024)',
    probabilityPct: 22,
    timeToImpactMonths: 24,
    immediateImpact: [
      'Foreign processing capacity expansion: ₹1,500-3,000 cr greenfield',
      'Commodity vannamei margin further compressed (already Pillar Filler stress)',
      'Indian premium niche (MSC tuna, octopus, Konkan species) less affected if we are first-mover',
      'Banks pivot to FDI partner co-financing, opens Series B path for us',
    ],
    yearlyImpactToUs: {
      revenueImpactPct: -4,         // Filler segment hit; premium not affected
      ebitdaImpactPct: -1.0,         // mostly Filler vannamei impact
      Y3RevenueRevisedINRcr: 162,
      Y5RevenueRevisedINRcr: 233,
      Y5EbitdaRevisedINRcr: 46.7,
    },
    exitMultipleAtRiskOf: 9.0,        // could even be UP to 11× (strategic acquirer interest)
    revisedExitEvINRcr: 420.3,
    ourCounter: [
      'Position as POTENTIAL ACQUISITION TARGET rather than competitor',
      'Hold 2-3 face-to-face meetings with Thai Union India MD by Y3',
      'Demonstrate MSC + premium niche metrics they cannot replicate quickly',
      'Quote example acquisition: Thai Union acquired Marine Products Thailand at 7.8× FY24',
    ],
    earlyWarningSignals: [
      'Thai Union announces India entry in earnings call',
      'CP Foods opens Indian aquaculture farm (already rumoured in AP)',
      'DPIIT receives FDI application for marine processing',
    ],
  },
  {
    id: 'gst-tightening',
    trigger: 'GST regime change: zero-rate on exports replaced with 0.5% upfront',
    probabilityPct: 8,
    timeToImpactMonths: 6,
    immediateImpact: [
      'Effectively raises export cost by 0.5% on FOB',
      'WC blocked permanently (no monthly refund cycle)',
      'Indian exports fall 4-6% nationally; everyone affected equally',
    ],
    yearlyImpactToUs: {
      revenueImpactPct: 0,
      ebitdaImpactPct: -0.4,
      Y3RevenueRevisedINRcr: 168.65,
      Y5RevenueRevisedINRcr: 243,
      Y5EbitdaRevisedINRcr: 47.0,    // -0.4% margin
    },
    exitMultipleAtRiskOf: 9.0,
    revisedExitEvINRcr: 423.0,
    ourCounter: [
      'Immediate price-pass-through with quarterly buyer review',
      'Switch all eligible inputs to 5% GST suppliers (raw fish 5% only)',
      'Lobby through MPEDA Exporters Association',
    ],
    earlyWarningSignals: [
      'Finance Ministry pre-budget consultations include export tax review',
      'DGFT circular drafts on input tax structure',
    ],
  },
  {
    id: 'china-demand-collapse',
    trigger: 'China seafood demand drops 30% (post-2026 reform / aquaculture supply glut)',
    probabilityPct: 18,
    timeToImpactMonths: 9,
    immediateImpact: [
      'China imports of Indian commodity vannamei drop 40%',
      'Filler segment (₹41.65 cr Y3) collapses to ₹25 cr',
      'Vannamei farm-gate prices in AP drop 25-30% (cascade)',
    ],
    yearlyImpactToUs: {
      revenueImpactPct: -10,
      ebitdaImpactPct: -3.0,
      Y3RevenueRevisedINRcr: 152,
      Y5RevenueRevisedINRcr: 220,
      Y5EbitdaRevisedINRcr: 36.3,
    },
    exitMultipleAtRiskOf: 8.0,
    revisedExitEvINRcr: 290.4,
    ourCounter: [
      'Pivot Filler segment to GCC + Vietnam alternative buyers (lower price but stable)',
      'Use cheaper raw vannamei to lift Pillar B/C margin (input deflation flows through)',
      'Accelerate MSC tuna + octopus push to fill revenue gap',
    ],
    earlyWarningSignals: [
      'China Q-on-Q seafood imports drop > 15%',
      'Zhoushan + Huangsha wholesale prices fall > 20%',
      'AP farm-gate prices drop > 15%',
    ],
  },
];

export const reactionAggregate = {
  // Probability-weighted Y5 EBITDA impact across all scenarios
  baseY5EbitdaINRcr: 48.95,
  expectedY5EbitdaINRcr:
    reactionScenarios.reduce((sum, s) => sum + (s.yearlyImpactToUs.Y5EbitdaRevisedINRcr * s.probabilityPct / 100), 0)
    + (1 - reactionScenarios.reduce((sum, s) => sum + s.probabilityPct, 0) / 100) * 48.95,
  expectedExitEvINRcr:
    reactionScenarios.reduce((sum, s) => sum + (s.revisedExitEvINRcr * s.probabilityPct / 100), 0)
    + (1 - reactionScenarios.reduce((sum, s) => sum + s.probabilityPct, 0) / 100) * 440.55,
  baseExitEvINRcr: 440.55,
  totalScenarios: reactionScenarios.length,
  highProbScenarios: reactionScenarios.filter(s => s.probabilityPct >= 18).length,
};
