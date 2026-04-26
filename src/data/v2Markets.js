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

// V2 — destination country deep dive

export const destinationCountries = [
  {
    id: 'jp', name: 'Japan', difficulty: 5, priority: 'Primary · Pillar C',
    ownFleet: '170,000 registered vessels; 4.2 M t annual catch; declining fisher workforce (age 65+)',
    importDependence: '~2.6 M t / year imported (40% of consumption)',
    yellowfinGap: 'Japan imports 180k MT yellowfin/yr (world\'s largest importer); domestic longline catch declining 3-5% pa for 20 years',
    topSuppliers: ['Indonesia', 'Philippines', 'Vietnam', 'Taiwan', 'Sri Lanka', 'Maldives (MSC)', 'Fiji'],
    whyWeWin: [
      'MSC-certified pole-and-line tuna is rare (only Maldives in our region)',
      'Domestic yellowfin ¥2,800-4,200/kg; commodity import ¥1,500-2,200/kg; we target ¥2,000-2,600/kg (MSC-premium, between)',
      'Aging Japanese fisher + processor workforce → domestic processing is expensive; our Purandar processing + air-freight beats it',
      'Sogo shosha explicitly diversify supplier-countries',
      'Maldives precedent: Japanese buyers understand pole-and-line pricing structure',
    ],
    whyWeCouldLose: [
      'Japan wants container-volume commitments; first-time supplier struggles',
      'Grading discipline extreme (flesh colour, fat, freshness); Y1 rejection rate can be 15%',
    ],
    mitigations: [
      'Japanese QC consultant retainer (₹12-15 L Y1)',
      'Trading-house entry (sogo shosha) rather than direct buyer in Y1-Y2',
      'Small commercial parcels (1-3 MT) before scaling',
    ],
  },
  {
    id: 'es', name: 'Spain', difficulty: 3, priority: 'Primary · Pillar C cephalopod',
    ownFleet: '~9,000 vessels; Galicia = 49% of fleet; own octopus catch ~14,000 t/yr (declining)',
    importDependence: '50,000+ MT octopus imported/yr',
    topSuppliers: ['Morocco (40%+)', 'Mauritania (25%+)', 'Senegal', 'Portugal'],
    whyWeWin: [
      'Morocco + Mauritania quotas cut 22% since 2020; buyers actively sourcing alternates',
      'Spain coastal octopus €14-20/kg; Morocco CIF €8-11/kg; us target €7.5-9/kg',
      'No Indian specialist in cooked + sliced octopus today',
      'Galician fleet decentralised — aggregators value reliable wholesale supply',
    ],
    whyWeCouldLose: [
      'Morocco is established and faster-delivery',
      'Spanish buyers exact on cooked/sliced specs',
    ],
    mitigations: [
      'Y1-Y2 frozen-whole raw-material grade; Y2-Y3 cooked+sliced after buyer QC rounds',
      'Conxemar Vigo booth + pre-fair meetings with top 8 importers',
    ],
  },
  {
    id: 'hk', name: 'Hong Kong', difficulty: 4, priority: 'Primary · Pillar B live',
    ownFleet: 'Commercial fishery negligible — essentially 100% import-dependent',
    importDependence: 'Live seafood 100% import',
    topSuppliers: ['Australia (Tasmanian rock lobster)', 'Canada (American lobster)', 'Cuba (spiny)', 'Vietnam (farmed)', 'India (small)'],
    whyWeWin: [
      'Same species as Cuba, closer origin than Australia',
      'Geography: 2nd-fastest transit behind Australia direct',
      'Premium-quality rocky-reef wild-caught; differentiation vs Vietnam farmed',
    ],
    whyWeCouldLose: [
      'Cuba has brand recognition built over decades',
      'Mortality on new India-origin route will exceed established Cuba chain in Y1',
    ],
    mitigations: [
      'Year 1 focus on perfect mortality execution',
      'Year 2+ build "Konkan rocky-reef lobster" story',
    ],
  },
  {
    id: 'sg', name: 'Singapore', difficulty: 3, priority: 'Pillar B secondary',
    ownFleet: '90%+ import-dependent',
    importDependence: 'All live-seafood imported',
    topSuppliers: ['Indonesia', 'Malaysia', 'Australia', 'India (small)'],
    whyWeWin: ['~600K Indian diaspora in SG = anchored demand for pomfret + prawn at Tekka/Mustafa wet markets', 'Lower import competition than HK (no Cheung Kee equivalent gatekeeper)', '30-60 day LC at sight typical for first-tier importers (Song Fish, FairPrice)'],
    whyWeCouldLose: ['Smaller volume ceiling than HK', 'Hotel procurement cycles longer'],
    mitigations: ['FHA Singapore booth Y2', 'Direct 5-star hotel F&B buyer outreach'],
  },
  {
    id: 'us', name: 'USA', difficulty: 5, priority: 'Y2+ Opportunistic',
    ownFleet: '~80,000 commercial vessels; 4.5-5 M t domestic catch',
    importDependence: '5.5-6 M t imports (world\'s largest seafood importer by value)',
    topSuppliers: ['India (shrimp)', 'Ecuador', 'Vietnam', 'Indonesia (tuna)'],
    whyWeWin: [
      'US has zero live spiny lobster domestic (American lobster is different species)',
      'MSC-premium sashimi import growing 6-8%/yr',
      'US shrimp domestic declining → import-dependent',
    ],
    whyWeCouldLose: [
      'Tariff situation unstable',
      'Eastern Fish + PAFCO already have 30-50 suppliers each — we\'re late to queue',
      'USFDA + LAAF accreditation takes 24-30 months',
    ],
    mitigations: ['Deprioritise Y1-Y2; Y2 end soft entry via broker; Y3 MSC premium entry'],
  },
  {
    id: 'gcc', name: 'GCC', difficulty: 2, priority: 'Y1 easy entry',
    ownFleet: 'Small artisanal ~400,000 t total across 6 countries',
    importDependence: '6-8× domestic supply imported',
    topSuppliers: ['India (35-40% of GCC seafood imports historically)', 'Oman', 'Thailand', 'Vietnam'],
    whyWeWin: [
      'Indian-origin strong diaspora preference (~12 M Indian/Pakistani/Bangladeshi/Sri Lankan)',
      'Hypermarket Indian pomfret + silver pomfret + Bombay duck dedicated shelves',
      'Air-freight BOM/DEL → DXB/DOH high-frequency cheap',
      'Halal + MPEDA well-received',
    ],
    whyWeCouldLose: ['Pakistani + Bangladeshi competition in cheaper segments', 'Oman re-export occasionally undercuts'],
    mitigations: ['Focus ethnic retail; Dubai-based trader partner; Ramadan window lock-in'],
  },
  {
    id: 'cn', name: 'Mainland China', difficulty: 3, priority: 'Filler',
    ownFleet: 'World #1 aquaculture producer; 60+ M t annual; own vannamei 2+ M t (Hainan, Fujian)',
    importDependence: 'Wild cephalopod, live lobster, yellowfin tuna — demand >> supply',
    topSuppliers: ['India (some)', 'Vietnam', 'Indonesia', 'Thailand'],
    whyWeWin: ['LC-at-sight credit (zero credit risk)', 'Wild squid/cuttlefish gap', 'Shanghai/Beijing sashimi restaurants'],
    whyWeCouldLose: ['Domestic aquaculture boom-bust pricing', 'GACC regulatory volatility', 'Political headwinds'],
    mitigations: ['Keep ≤12% of total revenue', 'Haidilao hotpot forward contracts'],
  },
  {
    id: 'uk', name: 'UK', difficulty: 4, priority: 'Y2-Y5 CETA window',
    ownFleet: '~12,000 vessels; 0.8 M t annual (post-Brexit volatile)',
    importDependence: 'Majority imports (cod, salmon, tuna, shrimp)',
    topSuppliers: ['Vietnam', 'Thailand', 'Ecuador', 'India'],
    whyWeWin: [
      'India-UK CETA (2025): duty-free processed seafood',
      'UK retail seeking CETA-origin suppliers — cooked shrimp + breaded + fish fingers',
    ],
    whyWeCouldLose: ['BRC cert takes 6-9 mo', 'Annual procurement cycle — miss = next year'],
    mitigations: ['Start BRC prep Y1; entry Y2-Y3', 'Y3-Y5 major growth market'],
  },
];

export const y3AllocationSummary = [
  { market: 'HK+SG', mt: 140, rev: 32, pct: 19, primary: 'Live lobster + mud crab + chilled pomfret' },
  { market: 'Japan', mt: 250, rev: 34, pct: 20, primary: 'MSC yellowfin saku + loin' },
  { market: 'Spain+EU', mt: 450, rev: 40, pct: 23, primary: 'Octopus cooked/sliced + cuttlefish' },
  { market: 'China', mt: 400, rev: 22, pct: 13, primary: 'Commodity shrimp + ribbonfish + squid' },
  { market: 'GCC', mt: 180, rev: 12, pct: 7, primary: 'Pomfret + shrimp diaspora' },
  { market: 'USA', mt: 150, rev: 10, pct: 6, primary: 'Commodity shrimp broker + MSC tuna Y3' },
  { market: 'SEA', mt: 100, rev: 6, pct: 4, primary: 'Commodity LC-at-sight' },
  { market: 'UK', mt: 80, rev: 8, pct: 5, primary: 'Value-added CETA private-label' },
  { market: 'Other EU', mt: 60, rev: 7, pct: 4, primary: 'Spillover' },
];
