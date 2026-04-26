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

// V2 — expanded supplier directory (named entities)

export const supplierNodes = [
  // Konkan
  {
    id: 'mirkarwada', name: 'Mirkarwada, Ratnagiri', state: 'Maharashtra', region: 'Konkan',
    size: 'major', dailyMT: '20-40', y3MT: 400,
    species: 'Pomfret, lobster, squid, cuttlefish, mackerel, ribbonfish',
    aggregators: ['SKR Exports India (Suresh Khadilkar) — Shivshakti Ice Factory, Bhagvati Bandar Rd', 'Universal Trading Company — pomfret specialist', '6-10 family aggregator-traders at 4-7% margin'],
    accessPath: [
      'Register posted-buyer with Ratnagiri District Fisheries Office',
      'Hire dedicated dock agent on 2-3% commission',
      'Pre-auction standing orders with 3-4 boat-owner families',
      'Deposit ₹5-10 L with market committee for auction-priority lane',
    ],
    notes: 'Dawn 4:30 AM auction; auctioneer lineage; 800 registered boats',
  },
  {
    id: 'harnai', name: 'Harnai (Dapoli)', state: 'Maharashtra', region: 'Konkan',
    size: 'mid', dailyMT: '10-18', y3MT: 80,
    species: 'Lobster (rocky-reef premium), pomfret, ribbonfish, crab',
    aggregators: ['Limited aggregator presence; direct boat-owner contracts feasible'],
    accessPath: [
      'Posted-buyer license via Dapoli taluka fisheries office',
      'Lock 30-40% of lobster landings via boat-owner forward contracts',
      '₹150/kg advance payable against Nov-Feb season catch',
    ],
    notes: '400 small craft; bullock-cart dock transport (cultural feature); twice-daily auction',
  },
  {
    id: 'devgad', name: 'Devgad', state: 'Maharashtra', region: 'Konkan',
    size: 'mid', dailyMT: '8-15', y3MT: 120,
    species: 'Lobster (premium), octopus, squid, pomfret',
    aggregators: ['Sindhudurg District Fishermen\'s Co-operative Federation', 'Direct boat-owner access feasible'],
    accessPath: [
      'Partner with co-op federation for annual allocation',
      'Direct relationships with 20-30 small-boat owners',
      'Retention bonus scheme for consistent delivery',
    ],
    notes: '300 boats; gillnet + handline dominant',
  },
  {
    id: 'malvan', name: 'Malvan', state: 'Maharashtra', region: 'Konkan',
    size: 'mid', dailyMT: '8-15', y3MT: 120,
    species: 'Octopus (O. cyanea + O. aegina), squid, lobster',
    aggregators: ['Malvan Fishermen\'s Co-operative Society (community-minded; Tarkarli eco-tourism alignment)'],
    accessPath: [
      'Co-op MOU with octopus allocation guarantee',
      'Fund eco-sustainability programme (~₹5 L/yr) as community goodwill',
      'Direct 4am auction buyer presence',
    ],
    notes: 'Best Konkan source for octopus; artisanal + small-mechanised',
  },
  {
    id: 'karanja', name: 'Karanja (Uran)', state: 'Maharashtra', region: 'Konkan',
    size: 'mid', dailyMT: '20-35', y3MT: 180,
    species: 'Wild shrimp, cuttlefish, squid, pomfret, mackerel',
    aggregators: ['Raigad Fishermen\'s Co-op', 'Karanja Jetty Trust', 'Mumbai aggregators dominant'],
    accessPath: [
      'Full-time Mumbai-based dockside agent (Raigad has Mumbai aggregator competition)',
      'Direct container-load forward contracts',
    ],
    notes: '8 km from JNPT — dual advantage for export + receiving',
  },
  // Smaller Konkan
  {
    id: 'satpati-palghar', name: 'Satpati, Arnala, Dahanu (Palghar cluster)', state: 'Maharashtra', region: 'Konkan',
    size: 'small', dailyMT: '5-12', y3MT: 60,
    species: 'Pomfret, Indian mackerel, Bombay duck',
    aggregators: ['Palghar District Fisheries Co-op'],
    accessPath: ['Aggregate via 2-3 small aggregators on weekly pickup truck'],
    notes: '250 km from Purandar; use only for Pomfret + mackerel specialties',
  },
  {
    id: 'sassoon-mumbai', name: 'Sassoon Dock, Mumbai', state: 'Maharashtra', region: 'Konkan',
    size: 'major', dailyMT: '80-150', y3MT: 0,
    species: 'All Konkan + Gujarat catch, tuna longline',
    aggregators: ['15-20 established Mumbai traders dominate'],
    accessPath: ['Do not enter Y1-Y2; revisit Y3+ when established'],
    notes: 'Margin compression; too competitive for new entrant',
  },
  // AP farm belts
  {
    id: 'west-godavari', name: 'West Godavari (Bhimavaram, Undi, Narsapur)', state: 'Andhra Pradesh', region: 'AP farm belt',
    size: 'major', dailyMT: '250-400', y3MT: 400,
    species: 'Vannamei (30g count standard)',
    aggregators: [
      'Avanti Feeds — farmer advances lock 20-25% of supply',
      'CP Aquaculture India — ~15% supply lock',
      'Growel Feeds, BMR / Nava-Fishrr — 20-25% combined',
      'Sri Sai Aqua, Sri Lakshmi Aqua Traders, Vijayaram Aqua Co. — open-market aggregators (VERIFY capacity)',
    ],
    accessPath: [
      'Partner with 2-3 licensed open-market aggregators',
      'Offer 3-5% premium vs integrated-player formula to attract non-contracted farmers',
      'FPO structure with 200-300 small farmers via MPEDA',
      'PM-MKSY KCC working-capital advances at 7% (partial govt subvention)',
    ],
    notes: '~60,000 ha of ponds. Farm-gate ₹360-430 (Mar 2026 VERIFY); widens ₹310-480 on crop shock',
  },
  {
    id: 'east-godavari', name: 'East Godavari (Kakinada, Razole)', state: 'Andhra Pradesh', region: 'AP farm belt',
    size: 'major', dailyMT: '180-300', y3MT: 200,
    species: 'Vannamei, wild black tiger',
    aggregators: ['Kakinada Port-adjacent aggregators', 'Andhra Pradesh Shrimp Seed Producers Association (APSSPA)'],
    accessPath: ['Similar to WG; backup for WG supply disruption; Kakinada port alternative'],
    notes: '35,000 ha; second-largest cluster; port-adjacent logistics',
  },
  {
    id: 'nellore', name: 'Nellore + Ongole + Prakasam', state: 'Andhra Pradesh', region: 'AP farm belt',
    size: 'mid', dailyMT: '100-200', y3MT: 250,
    species: 'Vannamei',
    aggregators: ['Nellore District Fish Farmers Welfare Association', 'Less integrated-player dominance'],
    accessPath: [
      'Direct farmer forward contracts with FPO',
      '30-40% of our Y2-Y3 vannamei from here',
      'Farm-gate typically 3-5% lower than Godavari',
    ],
    notes: 'Best opportunity for supplier-side moat via FPO + KCC',
  },
  // Lakshadweep
  {
    id: 'lakshadweep', name: 'Lakshadweep Islands (Agatti, Minicoy, Kavaratti, Kadmat)', state: 'Lakshadweep UT', region: 'Islands',
    size: 'major', dailyMT: '30-50', y3MT: 280,
    species: 'Yellowfin tuna (pole-and-line), skipjack',
    aggregators: [
      'Lakshadweep Cooperative Marketing Federation (LCMF) — apex body, 40% of accessible tonnage',
      'Agatti Boat Owners Welfare Association',
      'Minicoy Fishermen\'s Society',
      'Kavaratti Central Co-op',
    ],
    accessPath: [
      'LCMF MoU — negotiated Feb-Mar for following season',
      'Offer 5-8% premium over blended rate in exchange for MSC CoC compliance',
      'Boat-upgrade revolving scheme: ₹50-80 L advance for GPS + ice holds + MSC-compliant gear on 20-30 boats',
      'Direct Agatti → Kochi → Pune air chain',
    ],
    notes: '8-12 kt accessible; AFD + Amalgam + Mangalore incumbents lock 50-70%. MSC premium is the opening',
  },
  // West Bengal
  {
    id: 'sundarbans', name: 'West Bengal Sundarbans (Canning)', state: 'West Bengal', region: 'Eastern',
    size: 'mid', dailyMT: '8-15', y3MT: 80,
    species: 'Live mud crab (S. serrata, 1kg+ females premium)',
    aggregators: ['Balai Lal Crab Exporters', 'Sundarban Seafood', 'Seabird Sea Foods Pvt Ltd (VERIFY current)'],
    accessPath: [
      'BOM-based office with direct trader relationships',
      'Air-cargo CCU → HKG/SIN (not via Purandar — 36 hr total transit)',
      'Live mud crab handled OUT of our Mumbai presence, not Purandar plant',
    ],
    notes: 'Live mud crab originates separately from our Purandar operations',
  },
];

export const y3AllocationTarget = supplierNodes.reduce((acc, s) => acc + s.y3MT, 0);
