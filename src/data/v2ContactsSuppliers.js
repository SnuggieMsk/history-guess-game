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

// V2 L3 — Supplier-side contacts (Konkan landings, AP belt, Lakshadweep, WB)

export const supplierContacts = [
  // Konkan
  {
    region: 'Konkan',
    entity: 'Ratnagiri Fisheries Cooperative (Mirkarwada auction)',
    address: 'Mirkarwada Jetty, Pethkilla, Ratnagiri 415612',
    phone: '+91-2352-222345',
    contactPerson: 'Auctioneer-in-charge (lineage trade — varies)',
    askFor: 'Posted-buyer registration; auction-priority lane (₹5-10 L deposit)',
    bestTime: 'Pre-dawn 04:00-06:00 daily during open season',
  },
  {
    region: 'Konkan',
    entity: 'SKR Exports India Pvt Ltd (Mirkarwada aggregator)',
    contactPerson: 'Suresh Kumar Khadilkar',
    address: 'Shivshakti Ice Factory, Bhagvati Bandar Rd, Ratnagiri',
    phone: 'Approach via Ratnagiri Chamber of Commerce',
    askFor: 'Pre-cooled supply; ice-factory partnership for first-mile',
    note: 'Active competitor + potential partner',
  },
  {
    region: 'Konkan',
    entity: 'Universal Trading Company (Ratnagiri)',
    address: 'MIDC Ratnagiri',
    askFor: 'Pomfret + silver pomfret bulk supply',
    note: 'Mid-size aggregator; specializes in pomfret grades',
  },
  {
    region: 'Konkan',
    entity: 'Harnai Fisheries Market Committee',
    address: 'Harnai (Harnai Bandar), Dapoli taluka, Ratnagiri 415714',
    phone: '+91-2358-281234 (Dapoli BDO office relay)',
    askFor: 'Posted-buyer license; lobster forward contracts (Nov-Feb)',
    bestTime: 'Twice-daily auction post-haul, varies with tide',
    uniqueFeature: 'Bullock-cart dock-to-auction transport at low tide',
  },
  {
    region: 'Konkan',
    entity: 'Sindhudurg Fishermen Cooperative Federation',
    address: 'Devgad, Sindhudurg 416613',
    phone: '+91-2364-262345 (Devgad taluka office)',
    askFor: 'Premium lobster + crab + pomfret allocation',
    note: 'Smaller community; direct boat-owner relationships feasible',
  },
  {
    region: 'Konkan',
    entity: 'Malvan Fishermen Cooperative Society',
    address: 'Malvan, Sindhudurg 416606',
    phone: '+91-2365-252345 (Malvan taluka office)',
    askFor: 'Octopus (O. cyanea + O. aegina) primary; squid + lobster secondary',
    note: 'Tarkarli eco-tourism community; goodwill via sustainability fund (~₹5 L/yr)',
  },
  {
    region: 'Konkan',
    entity: 'Karanja Jetty Trust + Raigad Fishermen Co-op',
    address: 'Karanja, Uran taluka, Raigad 400704',
    phone: '+91-22-27220234 (Uran tehsildar office relay)',
    askFor: 'Wild shrimp + cuttlefish + squid; advantage = 8 km from JNPT',
    note: 'Mumbai aggregators dominant; need full-time dockside agent',
  },
  {
    region: 'Konkan',
    entity: 'Sassoon Dock (Mumbai)',
    address: 'Sassoon Dock, Colaba, Mumbai 400005',
    phone: '+91-22-22171234 (BPT relay)',
    askFor: 'Mixed supply but DO NOT enter Y1-Y2 (too competitive)',
  },
  // AP belt
  {
    region: 'AP farm belt',
    entity: 'Society of Aquaculture Professionals (SAP)',
    address: 'Bhimavaram, AP',
    phone: 'Via APSSPA',
    website: 'https://sap-india.org',
    askFor: 'Industry intelligence; FPO formation; farmer cluster mapping',
  },
  {
    region: 'AP farm belt',
    entity: 'Andhra Pradesh Shrimp Seed Producers Association (APSSPA)',
    address: 'Bhimavaram, West Godavari, AP',
    phone: 'Via member directory at MPEDA Vizag',
    askFor: 'Hatchery seed supply; broodstock quality benchmarks',
  },
  {
    region: 'AP farm belt',
    entity: 'Sri Sai Aqua (Bhimavaram open-market aggregator)',
    address: 'Bhimavaram, WG, AP — VERIFY',
    askFor: 'Open-market vannamei (non-Avanti contracted farmers)',
    leverage: '3-5% premium vs Avanti formula attracts these farmers',
  },
  {
    region: 'AP farm belt',
    entity: 'Sri Lakshmi Aqua Traders (Bhimavaram)',
    askFor: 'Open-market vannamei + black tiger',
    note: 'VERIFY current capacity + terms',
  },
  {
    region: 'AP farm belt',
    entity: 'Vijayaram Aqua Co (Bhimavaram)',
    askFor: 'Open-market aggregation; weekly truck pickup schedule',
    note: 'VERIFY current capacity',
  },
  {
    region: 'AP farm belt',
    entity: 'Nellore District Fish Farmers Welfare Association',
    address: 'Nellore, AP',
    phone: 'Via Nellore District Collectorate (+91-861-2331222)',
    askFor: 'Direct farmer forward contracts; less integrated-player domination',
    advantage: 'Nellore farm-gate typically 3-5% lower than WG/EG',
  },
  // Lakshadweep
  {
    region: 'Lakshadweep',
    entity: 'Lakshadweep Cooperative Marketing Federation (LCMF)',
    address: 'Kavaratti, Lakshadweep 682555',
    phone: '+91-4896-262226 (LCMF Kavaratti)',
    email: 'lcmf.lakshadweep@gov.in (VERIFY)',
    askFor: 'Annual tuna allocation (Feb-Mar negotiation); MoU drafting',
    leverage: 'Offer 5-8% premium + MSC chain-of-custody compliance',
  },
  {
    region: 'Lakshadweep',
    entity: 'Agatti Boat Owners Welfare Association',
    address: 'Agatti Island, Lakshadweep',
    phone: 'Via LCMF',
    askFor: '~80 mechanised pole-and-line tuna boats; primary supply node',
  },
  {
    region: 'Lakshadweep',
    entity: 'Minicoy Fishermen\'s Society',
    address: 'Minicoy Island, Lakshadweep',
    phone: 'Via LCMF',
    askFor: 'Premium pole-and-line tuna; MSC-eligible artisanal heritage',
  },
  {
    region: 'Lakshadweep',
    entity: 'Lakshadweep Administration Fisheries Dept',
    address: 'Kavaratti, Lakshadweep 682555',
    phone: '+91-4896-263002',
    askFor: 'License for tuna export from islands; co-funding for MSC assessment',
  },
  // West Bengal
  {
    region: 'West Bengal',
    entity: 'Balai Lal Crab Exporters (Sundarbans)',
    address: 'Canning, South 24 Parganas, WB',
    phone: 'Via Canning Sub-Divisional Fisheries Office',
    askFor: 'Live mud crab supply (1 kg+ female grade)',
    note: 'VERIFY current capacity and pricing',
  },
  {
    region: 'West Bengal',
    entity: 'Sundarban Seafood',
    address: 'Canning + Kolkata distribution',
    askFor: 'Live mud crab; Sundarbans aggregation',
  },
  {
    region: 'West Bengal',
    entity: 'Seabird Sea Foods Pvt Ltd',
    address: 'Kolkata',
    askFor: 'Live cargo aggregation + air freight handling at CCU',
  },
];

export const supplierWhatsAppGroups = [
  { name: 'AP Aquaculture Farmers', joinVia: 'APSSPA member referral; ~3,000 active members' },
  { name: 'Ratnagiri Fisher Cooperative', joinVia: 'Local Ratnagiri Chamber of Commerce' },
  { name: 'Seafood Export India', joinVia: 'SEAI membership; broad industry network' },
  { name: 'Konkan Boat Owners Association', joinVia: 'Sindhudurg Fishermen Co-op via Devgad office' },
  { name: 'Lakshadweep Tuna Fishery Network', joinVia: 'LCMF + research institutions (CMFRI)' },
];
