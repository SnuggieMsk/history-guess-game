// End-to-end value chain stages with cost economics expressed per kg of finished
// vannamei equivalent (HLSO 31/40, IQF, ready for FOB at NMIA/CSMIA air or JNPT sea).
// All numbers in INR/kg unless noted. Site assumption: 3-acre processing plant
// at Purandar (inland, 150-180 km from Konkan / 850 km from AP shrimp belt).

export const valueChainStages = [
  {
    id: 'sourcing',
    name: 'Sourcing & Aggregation',
    location: 'Konkan landing centres + AP shrimp belt + cage culture nodes',
    description: 'Raw material procurement from boat-owners, farm-gate aggregators, and own preferred-supplier network. Field offices at Sassoon Dock (Mumbai), Mirkarwada (Ratnagiri), Malvan (Sindhudurg), and a depot at Bhimavaram (AP).',
    costINRPerKg: 380,        // weighted avg farm-gate (vannamei 50ct mix)
    costRangeINR: [220, 700],
    valueAdded: 0,
    leadTimeHrs: 0,
    moatLevers: [
      'Pre-financed supplier contracts (10-20% advance against catch)',
      'Own ice plants at landing centres reduce opportunistic spot pricing',
      'NaCSA-aligned cluster farming for shrimp traceability',
      'Direct boat-owner equity pool (loyalty pricing in tight years)',
    ],
    risks: ['Spot price spikes', 'Quality inconsistency', 'Antibiotic residue (vannamei)', 'Competing aggregators'],
  },
  {
    id: 'first-mile',
    name: 'First-Mile Cold Chain',
    location: 'Landing centre → reefer truck → plant',
    description: 'Insulated/reefer transport from landing centre or farm gate to processing plant at Purandar. Critical first-4-hour cold-chain window: 0-2°C for shrimp, -1 to 1°C for finfish, oxygenated tanks for live.',
    costINRPerKg: 18,         // reefer truck blended
    costRangeINR: [10, 35],   // 35 = AP -> Purandar long-haul
    valueAdded: 6,            // shelf-life uplift via cold chain
    leadTimeHrs: 14,          // avg
    moatLevers: [
      'Owned reefer fleet for AP (850 km) lane to lock cost',
      'GPS + temp-logger SLA → premium with EU buyers',
      'Crate pooling system (returnable insulated bins)',
    ],
    risks: ['Diesel price', 'Truck breakdowns', 'Highway delays in monsoon', 'Cold-chain breaks → rejection'],
  },
  {
    id: 'receiving',
    name: 'Receiving & Grading',
    location: 'Purandar plant — receiving bay',
    description: 'Quality check, count grading, antibiotic rapid-test (CAP/NFC ELISA), weight verification, batch tagging.',
    costINRPerKg: 6,
    costRangeINR: [4, 9],
    valueAdded: 0,
    leadTimeHrs: 1.5,
    moatLevers: [
      'On-site NABL-equivalent rapid-test lab (24-min CAP screen)',
      'QR-code batch tagging from boat→pack',
      'Reject material auto-routed to fishmeal byproduct stream',
    ],
    risks: ['Antibiotic positive batches', 'Disputed weights', 'Receiving bottlenecks at peak'],
  },
  {
    id: 'processing',
    name: 'Cleaning & Processing',
    location: 'Purandar plant — wet-process hall',
    description: 'De-heading, peeling, deveining, sizing, butterflying. Manual + 1-2 shrimp peeling lines. EU/USFDA-aligned HACCP. Separate halls for shrimp / finfish / cephalopods.',
    costINRPerKg: 32,         // labor + utilities + chemicals
    costRangeINR: [22, 60],   // 60 = cooked PD complex
    valueAdded: 28,
    leadTimeHrs: 4,
    moatLevers: [
      'Trained women workforce from Konkan (300+ at scale, 70% women)',
      'In-house training academy (NETFISH-affiliated)',
      'Mechanised peeler hybrid for cost-floor protection',
    ],
    risks: ['Labor turnover', 'Yield loss (de-shell)', 'Foreign material', 'HACCP non-conformance'],
  },
  {
    id: 'value-add',
    name: 'Value-Addition',
    location: 'Purandar plant — value-add bay',
    description: 'Cooking, IQF coating, marinating, breading, skewering, retail packing. Higher GM products: ring squid, butterfly EZ-peel, breaded shrimp, cooked PUD, sushi-grade tuna saku.',
    costINRPerKg: 38,
    costRangeINR: [25, 80],
    valueAdded: 95,           // big uplift
    leadTimeHrs: 6,
    moatLevers: [
      'Customer-specific co-packing (Costco, Lidl, Aldi private label)',
      'Recipe IP for marinades (tandoori, garlic-butter, schezwan)',
      'Retail-ready packaging design in-house',
    ],
    risks: ['Recipe matching to importer specs', 'Allergen cross-contact', 'Packaging cost volatility'],
  },
  {
    id: 'freezing',
    name: 'IQF & Blast Freezing',
    location: 'Purandar plant — freezer hall',
    description: 'IQF tunnel (1-2 t/h), plate freezers (5 t batch), blast freezer (8 t batch). Core-temp -18°C in <2 hrs (IQF) for premium texture.',
    costINRPerKg: 14,         // power-heavy
    costRangeINR: [10, 22],
    valueAdded: 12,
    leadTimeHrs: 2.5,
    moatLevers: [
      'Solar-PV roof (1.2 MW) cuts power cost 25-30%',
      'Mix of IQF + plate gives flexibility across SKUs',
      'Glazing line for premium retail look',
    ],
    risks: ['Power outage → batch loss', 'Compressor failure', 'Freezer burn from glazing miss'],
  },
  {
    id: 'storage',
    name: 'Cold Storage',
    location: 'Purandar plant — cold store (1500 MT)',
    description: 'Buffer stock at -22°C. Inventory turn target: 12 days. Ammonia + CO2 cascade refrigeration.',
    costINRPerKg: 8,          // amortised power + labor
    costRangeINR: [6, 14],
    valueAdded: 0,
    leadTimeHrs: 24 * 12,     // 12-day turn
    moatLevers: [
      'Buffer = ability to hold for FOB price spikes',
      'PMKSY 35% cold-chain capex subsidy claimed',
    ],
    risks: ['Inventory obsolescence', 'Power tariff hikes', 'Insurance premiums'],
  },
  {
    id: 'packing-export',
    name: 'Pack-out & Export Docs',
    location: 'Purandar plant — packing & docs',
    description: 'Master cartons, container stuffing (40\' reefer or air ULD), MPEDA/EIC inspection, Health Certificate, COO, Bill of Lading. Direct to JNPT (sea) or NMIA/CSMIA (air).',
    costINRPerKg: 12,         // packaging materials + docs + inspection fees
    costRangeINR: [8, 22],
    valueAdded: 6,
    leadTimeHrs: 8,
    moatLevers: [
      'Approved EU/USFDA establishment number (24-month build)',
      'In-house EIC liaison (zero docs delay)',
      'Pre-cleared customs at JNPT (AEO Tier-2)',
    ],
    risks: ['EIC reject', 'BL delays', 'Container shortage', 'Demurrage'],
  },
  {
    id: 'logistics',
    name: 'Outbound Logistics',
    location: 'Purandar → JNPT (180 km) or NMIA/CSMIA (160 km)',
    description: 'Reefer container pre-cooling, drayage to port/airport, ocean freight (sea) or air freight (live + premium). Sea = 18-28 days to USA/EU; Air = 36-48 hrs to GCC/EU.',
    costINRPerKg: 22,         // sea blended; air is 110-180/kg
    costRangeINR: [12, 180],
    valueAdded: 0,
    leadTimeHrs: 24,          // to port
    moatLevers: [
      'Liner contracts (Maersk/CMA/MSC) for guaranteed reefer slots',
      'Air consolidation deals via NMIA cargo terminal',
      'RoDTEP / RoSCTL claim automation',
    ],
    risks: ['Freight rate volatility', 'Reefer plug-in failures', 'Suez/Red Sea disruption', 'Air capacity squeeze'],
  },
];

// Roll-up: cost per kg of finished vannamei HLSO 31/40 ready for FOB
export const vannameiCostStack = [
  { stage: 'Raw shrimp (50ct mix)',     inrPerKg: 380, share: 73.0 },
  { stage: 'First-mile cold chain',     inrPerKg:  18, share:  3.5 },
  { stage: 'Receiving & grading',       inrPerKg:   6, share:  1.2 },
  { stage: 'Processing labor',          inrPerKg:  32, share:  6.2 },
  { stage: 'IQF freezing',              inrPerKg:  14, share:  2.7 },
  { stage: 'Cold storage (12d turn)',   inrPerKg:   8, share:  1.5 },
  { stage: 'Packaging & export docs',   inrPerKg:  12, share:  2.3 },
  { stage: 'Outbound to port (sea)',    inrPerKg:  22, share:  4.2 },
  { stage: 'Overheads & SG&A',          inrPerKg:  18, share:  3.5 },
  { stage: 'Finance cost (WC)',         inrPerKg:  10, share:  1.9 },
];
// Total landed FOB cost ~520 INR/kg = ~$5.97/kg.  FOB price band $6.20-7.20 = INR 540-625.
// Gross margin/kg: INR 20-105, blended ~60 INR/kg → 11.5% on conservative side.

export const yieldRecoveries = {
  vannameiHLSOFromHOSO: 0.66,        // head-on shell-on → headless shell-on
  vannameiPDFromHOSO:   0.55,
  vannameiCookedPDFromHOSO: 0.50,
  pomfretGuttedScaledFromWhole: 0.84,
  squidTubeFromWhole: 0.62,
  cuttlefishCleanedFromWhole: 0.58,
  octopusCleanedFromWhole: 0.78,
  tunaSakuFromRound: 0.36,
  lobsterTailFromWhole: 0.38,
};
