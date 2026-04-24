// V2 — investor teardown data (what v1 got wrong)

export const teardownSections = [
  {
    id: 'strategic',
    title: 'Strategic hand-waves',
    color: '#a8322d',
    points: [
      {
        claim: '"Multi-species multi-market" is a thesis',
        reality: 'Hedging, not strategy. Every strong processor specialises (Mowi=salmon, Minh Phu=vannamei, Thai Union=tuna). A ₹32 cr first-timer cannot run 16 HACCP SOPs + 6 markets credibly. Buyers prefer specialists.',
        verdict: 'Cut to 3-4 focus species chosen by margin × supply-edge.',
      },
      {
        claim: '"Cost moat from 1.2 MWp solar + subsidy stack = 4-6 ppt EBITDA advantage"',
        reality: '1.2 MWp in Pune = ~₹1.6 cr/yr savings = ~1% of Y5 revenue. PMMSY subsidy improves equity IRR (lower depreciation base) but is not an opex moat — every post-2021 processor claims it. Ecuador is $1.40/kg cheaper on vannamei; solar cannot close 35% input-cost gap.',
        verdict: 'Cost claim is false. Compete on differentiation (live, MSC), not cost.',
      },
      {
        claim: '"Geographic moat at Purandar"',
        reality: 'Inland 150-360 km from Konkan. Every coastal peer (Coastal Corp, IFB Agro, Gadre) has 20-50 km first-mile. On perishables that\'s ₹15-22/kg structural disadvantage = ~₹5 cr/yr cost penalty vs coastal peers.',
        verdict: 'Purandar is a trade-off, not a moat. Pitch it honestly.',
      },
      {
        claim: '"Konkan origin brand premium"',
        reality: 'Alaskan salmon brand took 40 years + $200M marketing. Konkan has zero marketing institution, zero GI tag, zero recognition abroad. Cannot assume a premium in Y1-Y3 revenue.',
        verdict: 'Optionality for Y5+, not revenue assumption for Y1-Y3.',
      },
      {
        claim: '"Tariff diversification"',
        reality: 'Plan targets USA 25-35% + EU 15-25% — both tariff-exposed. Real diversification needs named secondary-market buyers + container redirect SOPs + WC buffer. v1 has none.',
        verdict: 'Named backup buyer per order; 60-day switch buffer.',
      },
    ],
  },
  {
    id: 'supply',
    title: 'Supplier side is vapor',
    color: '#b8860b',
    points: [
      {
        claim: '"Konkan lands 4-6 kt octopus, we aggregate it"',
        reality: 'Without boat-owner relationships + 4am auction presence at Mirkarwada / Malvan, realistic access is <20% of landings. Konkan has 2-3 tier aggregator structure taking 5-12% margin per tier.',
        verdict: 'Name actual aggregators (SKR Exports, Universal Trading); forward contracts.',
      },
      {
        claim: '"AP vannamei at ₹380/kg"',
        reality: 'Farm-gate floats ₹340-460 depending on count/crop. Avanti + CP Aquaculture + Growel lock 60-70% of WG/EG supply via farmer advances. New entrant pays 3-8% premium on open-market balance.',
        verdict: 'Build FPO path via PM-MKSY KCC; target Nellore where less locked.',
      },
      {
        claim: '"Lakshadweep 25 kt tuna available"',
        reality: 'Accessible-to-mainland is 8-12 kt; AFD + Amalgam + Mangalore incumbents lock 50-70%. New entrant gets residual.',
        verdict: 'Offer MSC premium + boat-upgrade financing to win allocation.',
      },
      {
        claim: 'No monsoon model',
        reality: 'June 1 - July 31 trawl ban = 60 idle days = 16% of capacity unavailable. Plant utilisation collapses to 30-40%.',
        verdict: 'Monsoon = farmed shrimp + Lakshadweep tuna run + value-added line load.',
      },
      {
        claim: '"Reefer first-mile at ₹22/kg"',
        reality: '₹18-28/kg actual, but with 4-7% temperature-excursion failure rate on 150 km Konkan drive. v1 assumes 0% failure.',
        verdict: 'Budget 5% failure cost; telematics on every truck.',
      },
    ],
  },
  {
    id: 'ops',
    title: 'Brochure-speak operations',
    color: '#7a5b8c',
    points: [
      {
        claim: '"HACCP-grade plant + IQF freezing + oxygenated tanks"',
        reality: 'No SOP details. No CCPs named. No receive-to-ice time budget. No IQF residence time per product. No glaze protocol. No metal-detector spec.',
        verdict: '5 CCPs defined with temp/time/action limits; 8-analyte antibiotic screen with LODs.',
      },
      {
        claim: '"In-house ELISA + HPLC lab"',
        reality: 'Not NABL accredited. Not named analytes. EU importers require NABL ISO/IEC 17025 — without it our reports are rejected.',
        verdict: 'Budget ₹85 L for NABL-spec lab; 12-18 mo accreditation path.',
      },
      {
        claim: '"Live-cargo mortality 3% target"',
        reality: 'Industry average is 8-15%. 3% requires best-in-class purge + cool-down + packing + carrier. v1 doesn\'t budget the 10%+ realistic mortality cost.',
        verdict: 'Model 10-12% mortality; pack <200 kg/shipment in Y1 to learn.',
      },
      {
        claim: '"Oxygenated tanks + Pune-DXB-HKG 16 hrs"',
        reality: 'PNQ has limited perishable handling. Carrier booking needs LHO tag + 72-hr AQCS + MPEDA + destination permit window. Mumbai CSMIA is actual live-cargo hub until Purandar matures.',
        verdict: 'CSMIA primary; PNQ secondary; carrier = Emirates / Qatar primary.',
      },
    ],
  },
  {
    id: 'financial',
    title: 'Numbers that do not survive stress',
    color: '#0d3b66',
    points: [
      {
        claim: 'Y1 revenue ₹42 cr',
        reality: 'USFDA approval takes 18-24 mo post-first-export. Y1 has no US access. Realistic Y1 = GCC (₹7-10) + China LC (₹6-9) + SEA (₹3-5) + domestic (₹2-4) = ₹20-28 cr.',
        verdict: 'Revenue pushed 6-9 months; break-even Y2→Y3.',
      },
      {
        claim: 'WC cycle 29 days',
        reality: 'US/EU open-account is 45-90 days for new suppliers. Supplier advances required on AP side. Realistic WC = 55-70 days = ₹11-15 cr NWC at Y3.',
        verdict: 'CC limit ₹10 cr, not ₹8 cr.',
      },
      {
        claim: 'Project IRR 24.2%',
        reality: 'Under combined shock (US tariff + vannamei -10% + FX ₹78/USD), IRR drops to 6-9%. Single-variable sensitivity hides this.',
        verdict: 'Realistic IRR range 10-28%; central 17-19%.',
      },
      {
        claim: 'Subsidy ₹5.2 cr booked Y1',
        reality: 'PMMSY 3-tranche disbursal takes 10-28 mo; PMKSY 8-12 mo. MNRE through DISCOM rebate. Real cash receipts: ₹1.8 cr Y1, ₹2.2 cr Y2, ₹1.2 cr Y3.',
        verdict: 'Phase subsidy inflow; don\'t model as Y1 cash.',
      },
      {
        claim: 'Y2 DSCR 1.17',
        reality: 'Below bank minimum 1.5. If realistic Y2 rev ₹40-50 cr (not ₹76), DSCR = 0.6-0.8. Miss debt service.',
        verdict: '24-month moratorium + ₹14 cr promoter equity.',
      },
    ],
  },
];

export const replacementSummary = [
  { v1: 'Project cost ₹32 cr',           v2: 'Project cost ₹40 cr' },
  { v1: 'Promoter equity ₹10 cr',        v2: 'Promoter equity ₹14 cr' },
  { v1: 'Subsidy ₹5.2 cr in Y1',         v2: 'Subsidy ₹12 cr over 7 years' },
  { v1: 'Y5 revenue ₹155 cr',            v2: 'Y5 revenue ₹175-315 cr scenario-dependent' },
  { v1: 'Y5 EBITDA 12.6%',               v2: 'Y5 EBITDA 11-23% scenario-dependent' },
  { v1: 'IRR 24.2%',                     v2: 'IRR 10-28%, central 17-19%' },
  { v1: 'Payback 4.6 yr',                v2: 'Payback 5.4 yr base (7.2 bear / 3.8 bull)' },
  { v1: 'Single-variable sensitivity',   v2: 'Combined-shock + kill conditions' },
];
