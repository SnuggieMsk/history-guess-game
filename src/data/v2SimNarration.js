// V2 L8 - Simulator narration log: human-readable explanation of sim outputs

export const narrationTemplates = {
  highSurvivability: 'High survivability ({pct}%) indicates resilience to typical shock combinations. Consider scaling allocation.',
  mediumSurvivability: 'Medium survivability ({pct}%) — route is viable but vulnerable to compound shocks. Maintain insurance + WC reserve.',
  lowSurvivability: 'Low survivability ({pct}%) — route is fragile. Consider reducing allocation or adding redundancy.',
  highMargin: 'Margin {pct}% is in top quartile. Premium pricing strategy validated.',
  mediumMargin: 'Margin {pct}% is industry-average. Acceptable for capacity-filler routes.',
  lowMargin: 'Margin {pct}% is loss zone. Either price increase OR cost reduction OR exit.',
  cycloneEvent: 'Cyclone event modeled — {month} supply -45%; recovery 3-4 weeks.',
  diseaseEvent: 'Disease outbreak — Q{q} farm-gate +20-30%; 6-8 week duration.',
  rasffAlert: 'RASFF alert — H2 EU sampling 25%+; revenue -30% Q3-Q4.',
  goldilocks: 'Best-case scenario — all favourable. Plan for base-or-worse, never bull.',
  tripleStress: 'Triple-stress year — survival depends on insurance + WC reserve + cost-down agility.',
};

export const insightLibrary = [
  {
    pattern: 'Multi-shock year + portfolio approach',
    insight: 'Diversified 5-route portfolio survives shocks because shocks rarely hit all routes simultaneously. Cyclone hits Konkan supply but tariff hits USA route — different routes.',
    actionItem: 'Maintain at least 3 routes across geographies + buyer types.',
  },
  {
    pattern: 'Single-route concentration',
    insight: 'Single-route plays are fragile. ₹500 cr single-route business has higher mortality than ₹200 cr 5-route business.',
    actionItem: 'Cap single route at 35% of revenue.',
  },
  {
    pattern: 'Premium routes (live + MSC) margin contribution',
    insight: 'Pillar B (live) and C (MSC tuna) carry the margin upside. Pillar Filler (commodity vannamei) provides cash-flow ballast at thin margin.',
    actionItem: 'Y3+ filler should be ≤30% of revenue but funds the WC for premium routes.',
  },
  {
    pattern: 'WC sensitivity to growth',
    insight: 'For every ₹1 cr revenue growth, WC absorbs ~₹18 L (110-day base cycle). Y3 ₹168.65 cr revenue = ₹30.1 cr WC tied up (matches v2/wc-ramp page).',
    actionItem: 'CC limit must scale with revenue. Negotiate 1.5x revenue cap with bank.',
  },
  {
    pattern: 'Tariff escalation impact asymmetry',
    insight: '5% USA tariff = -1.5 to -2 ppt margin. 26% USA tariff = -8 to -12 ppt. Non-linear escalation hurts more.',
    actionItem: 'Cap USA exposure at 15% of revenue by Y3 to limit tariff sensitivity.',
  },
  {
    pattern: 'Cyclone insurance ROI',
    insight: 'BI insurance ₹6-10 L/yr × 7 yr = ₹42-70 L cumulative. Single Cat-3 cyclone = ₹1.5-3 cr loss avoided. ROI 4-6x.',
    actionItem: 'Comprehensive BI insurance is non-negotiable.',
  },
  {
    pattern: 'Mortality discipline',
    insight: 'Each ppt mortality on live cargo = ₹0.7 cr/yr at Y3 scale. 10% target vs 14% actual = ₹2.8 cr revenue gap.',
    actionItem: 'Quarterly mortality review with carrier + supplier; SOP enforcement.',
  },
  {
    pattern: 'MSC certification pricing power',
    insight: 'MSC tuna commands +25-35% premium. ₹6-8 cr/yr Y3 incremental margin. Co-funding ₹25-30 L is best ROI in the project.',
    actionItem: 'Prioritize MSC fishery assessment Y1; do not let it slip.',
  },
  {
    pattern: 'Compound shock survival',
    insight: 'Triple-stress scenarios (cyclone+tariff+RASFF) reduce margin to break-even. Survival depends on insurance recoveries + cost-down within 6 weeks.',
    actionItem: 'Stress-test portfolio quarterly; rehearse cost-down playbook annually.',
  },
  {
    pattern: 'Working capital cushion vs growth',
    insight: 'Aggressive growth without WC headroom kills more companies than slow growth. Y2 is the cash-flow pinch year.',
    actionItem: '3-month WC reserve maintained always; growth rate ≤ WC funding capacity.',
  },
];

export const decisionFlowchart = [
  {
    decision: 'Should we increase live cargo allocation?',
    inputs: ['Current mortality trailing 6 months', 'Carrier reliability score', 'HK/SG buyer relationship strength', 'Plant RAS tank utilization'],
    threshold: 'Mortality < 12% AND carrier reliability > 90% AND buyer relationship 12+ months',
    decision_yes: 'Increase 25-50% step',
    decision_no: 'Maintain or reduce',
  },
  {
    decision: 'Should we accept new buyer at OA terms?',
    inputs: ['Buyer credit rating', 'Volume offered', 'Concentration impact', 'ECGC coverage availability'],
    threshold: 'Buyer rating BBB+ OR ECGC covers 80%+ AND <15% of revenue',
    decision_yes: 'Accept with ECGC',
    decision_no: 'Require LC at sight or reduce volume',
  },
  {
    decision: 'Should we expand to new market?',
    inputs: ['Compliance gates assessed', 'Trade fair attended', 'Initial buyer pipeline', 'Resource bandwidth'],
    threshold: '3+ qualified buyers AND compliance pathway clear AND CEO bandwidth available',
    decision_yes: 'Phase entry over 2 years',
    decision_no: 'Defer; focus on existing markets',
  },
  {
    decision: 'Should we add new species to portfolio?',
    inputs: ['Existing species margin > 18%', 'Supply-side capability', 'Buyer demand validated', 'Capex requirement'],
    threshold: 'All existing species at target margin AND new species capex < ₹50 L AND demand validated',
    decision_yes: 'Phase in over 6-9 months',
    decision_no: 'Maintain focus',
  },
];

export const operatorDailyPrompts = [
  '🌊 Check IMD weather forecast — any cyclone alerts west or east coast?',
  '💰 USD-INR rate — any >1% move overnight?',
  '🚢 Shipping line capacity — any reefer container shortages on key routes?',
  '🏭 Plant utilization yesterday — actual vs target?',
  '🦐 Konkan + AP + Lakshadweep landings yesterday — supply OK?',
  '✈️ Air cargo bookings next 7 days — confirmed?',
  '🧪 Lab tests pending — any antibiotic positives or APC excursions?',
  '🧾 AR ageing — any buyers >45 days OA?',
  '🏥 Workforce attendance — any shortage critical?',
  '🚨 RASFF / USFDA notifications today — any alerts requiring response?',
];
