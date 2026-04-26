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

// V2 — Per-competitor supply chain flow nodes for SVG diagrams
// Each competitor: full chain from broodstock → buyer with costs, time, yield at each node

export const supplyFlows = {
  avanti: {
    company: 'Avanti Feeds + Avanti Frozen Foods',
    chain: [
      { stage: 'Broodstock + hatchery', node: 'Own hatchery cluster (WG)', cost: '₹0.50/PL', time: '~25 days', yield: '85% PL viability', detail: 'Vannamei post-larvae (PL) production; some imported broodstock from Hawaii / Thailand' },
      { stage: 'Feed production', node: 'Kovvur + Pamarru + Bandapuram', cost: '₹85-95/kg feed', time: 'continuous', yield: 'FCR 1.4-1.5', detail: 'Largest feed maker in India ~600k MT/yr; sells to own + 3rd party farmers' },
      { stage: 'Farmer advance + supply lock', node: '~3,500 contracted AP farmers', cost: '₹400+ cr advance book', time: '90-120 day grow-out', yield: '5-7 t/ha avg', detail: 'Farmer bound to sell to Avanti at formula price' },
      { stage: 'Pond harvest', node: 'WG + EG + Krishna ponds', cost: '₹360-430/kg', time: 'seasonal peaks Mar-May / Oct-Dec', yield: '-15% disease/mortality risk', detail: 'EHP + WSSV + AHPND outbreaks reduce supply 5-30%' },
      { stage: 'Reefer transit (90 km avg)', node: 'Pond → Processing plant', cost: '₹6-8/kg', time: '4-6 hr', yield: '-2% transit loss', detail: 'Insulated trucks; ice slurry; same-day' },
      { stage: 'Processing', node: 'Visakhapatnam Frozen Foods plant', cost: '₹60-80/kg', time: '8-12 hr', yield: '66% HOSO→HLSO', detail: 'IQF + plate freeze; HACCP + BAP certified' },
      { stage: 'Cold storage', node: 'On-site cold store + 3PL', cost: '₹5-8/kg', time: 'avg 8 days', yield: '-0.5% glaze loss', detail: '-20°C; FIFO; container-load aggregation' },
      { stage: 'Container stuffing + port', node: 'Visakhapatnam Port', cost: '₹4-6/kg', time: '1-2 days clearance', yield: '0%', detail: 'Reefer container -25°C; customs + RoDTEP scrip' },
      { stage: 'Sea freight', node: 'Vizag → US west coast', cost: '$0.80-1.20/kg', time: '28-35 days', yield: '0%', detail: 'Direct service via Maersk / MSC / CMA CGM' },
      { stage: 'US import + distribution', node: 'Long Beach / NY/NJ ports', cost: '$0.30/kg + duties', time: '5-7 days customs', yield: '0%', detail: 'USFDA prior notice + Eastern Fish / PAFCO clearance' },
      { stage: 'End buyer', node: 'Costco / Walmart / Sysco', cost: 'sale ~$7-8/kg', time: '0', yield: '0%', detail: 'Retail / foodservice end-buyer' },
    ],
    keyMetric: '~14 nodes, 35-45 day farm-to-shelf',
    weakLink: 'Disease + tariff at the entry/exit nodes',
  },
  apex: {
    company: 'Apex Frozen Foods',
    chain: [
      { stage: 'Hatchery', node: '3rd party AP hatcheries (~5% own)', cost: '₹0.55-0.60/PL', time: '25 days', yield: '82% viability' },
      { stage: 'Feed sourcing', node: 'Buys from Avanti / CP / Growel', cost: '₹90-100/kg', time: 'continuous', yield: 'FCR 1.45' },
      { stage: 'Contract farmers', node: '~2,500 AP farmers', cost: '₹375-440/kg farm-gate', time: '100 day grow-out', yield: '6 t/ha' },
      { stage: 'Reefer transit', node: 'Pond → Kakinada plant', cost: '₹5-7/kg', time: '3-5 hr', yield: '-2%' },
      { stage: 'Processing + VA', node: 'Kakinada main + TN plant', cost: '₹70-95/kg (VA premium)', time: '12-16 hr (cooked/breaded)', yield: '60% HOSO→cooked PD' },
      { stage: 'Cold storage', node: '3,500 MT integrated', cost: '₹6-9/kg', time: '7 days', yield: '-0.5%' },
      { stage: 'Container + port', node: 'Kakinada Anchorage', cost: '₹4-6/kg', time: '1-2 days', yield: '0%' },
      { stage: 'Sea freight', node: 'Kakinada → US east coast', cost: '$0.85-1.15/kg', time: '32-40 days', yield: '0%' },
      { stage: 'US distribution', node: 'NY/NJ ports → Costco DC', cost: '$0.35/kg', time: '6-8 days', yield: '0%' },
      { stage: 'End buyer', node: 'Costco + Walmart + Sysco', cost: '$7.5-9/kg sale', time: '0', yield: '0%' },
    ],
    keyMetric: '10 nodes; cooked + breaded VA SKUs add 4-6 days',
    weakLink: 'Buyer concentration (3 customers ≥60%)',
  },
  nekkanti: {
    company: 'Nekkanti Sea Foods',
    chain: [
      { stage: 'Mixed sourcing', node: '30% own farms + 70% contracted + deep-sea', cost: '₹385-450/kg shrimp; varied wild', time: 'continuous', yield: '~80%' },
      { stage: 'Deep-sea trawler fleet', node: 'Visakhapatnam-based fleet', cost: '₹120-180/kg wild', time: '10-15 day trips', yield: 'Variable' },
      { stage: 'Reefer to plant', node: 'Pond + dock → Vizag plant', cost: '₹5-8/kg', time: '2-6 hr', yield: '-2%' },
      { stage: 'Processing', node: 'Visakhapatnam plant (own since 1989)', cost: '₹70-90/kg', time: '8-14 hr', yield: '64% HOSO→HLSO' },
      { stage: 'Cold storage', node: '2,500 MT', cost: '₹6-8/kg', time: '8-10 days', yield: '-0.5%' },
      { stage: 'Container + port', node: 'Visakhapatnam Port', cost: '₹4-6/kg', time: '1-2 days', yield: '0%' },
      { stage: 'Sea freight', node: 'Vizag → US', cost: '$0.85-1.20/kg', time: '30-38 days', yield: '0%' },
      { stage: 'End buyer', node: 'Costco + Lighthouse-branded retail', cost: '$7-9/kg', time: '0', yield: '0%' },
    ],
    keyMetric: '8 nodes; mixed wild + farmed differentiation',
    weakLink: 'Lighthouse branded retail flat; USA concentration risk',
  },
  devi: {
    company: 'Devi Sea Foods',
    chain: [
      { stage: 'Own broodstock + hatchery', node: 'WG hatchery cluster', cost: '₹0.45/PL', time: '25 days', yield: '88% viability' },
      { stage: 'Own + contracted feed', node: 'Internal feed mill + 3rd party', cost: '₹80-92/kg', time: 'continuous', yield: 'FCR 1.4' },
      { stage: 'Own + contracted farms', node: 'AP + TN + Odisha', cost: '₹360-430/kg', time: '100 day grow-out', yield: '7-9 t/ha' },
      { stage: 'Multi-state reefer', node: 'Tanuku / Peddapuram / TN / Odisha plants', cost: '₹5-9/kg', time: '3-12 hr', yield: '-1.5% (better than peers)' },
      { stage: 'Processing (4 plants)', node: 'Multi-state', cost: '₹65-85/kg', time: '8-12 hr', yield: '67% (compliance-driven)' },
      { stage: 'Cold storage', node: 'Each plant has own', cost: '₹5-8/kg', time: '6-10 days', yield: '-0.5%' },
      { stage: 'Container + port', node: 'Vizag + Chennai + Paradip', cost: '₹4-6/kg', time: '1-2 days', yield: '0%' },
      { stage: 'Multi-market export', node: 'USA + EU + Japan + GCC', cost: '$0.80-1.20/kg', time: '25-40 days', yield: '0%' },
      { stage: 'End buyers', node: 'Diversified ~15 importers', cost: '$7-10/kg', time: '0', yield: '0%' },
    ],
    keyMetric: '9 nodes; most diversified geo + market',
    weakLink: 'Lower brand profile; not direct-to-retail US',
  },
  ifbAgro: {
    company: 'IFB Agro Industries (Marine)',
    chain: [
      { stage: 'Sourcing', node: '100% contracted; no own farms', cost: '₹385-440/kg shrimp', time: 'continuous', yield: '~78%' },
      { stage: 'Reefer to Vasai', node: 'WG/AP → Vasai (Maharashtra) 800+ km', cost: '₹14-18/kg', time: '14-18 hr', yield: '-2.5%' },
      { stage: 'Processing', node: 'Vasai plant (modern)', cost: '₹65-85/kg', time: '8-12 hr', yield: '65%' },
      { stage: 'Cold storage', node: 'Vasai integrated', cost: '₹5-8/kg', time: '6-8 days', yield: '-0.5%' },
      { stage: 'JNPT export', node: 'Vasai → JNPT (95 km)', cost: '₹4-7/kg', time: '1-2 days', yield: '0%' },
      { stage: 'EU + UK shipping', node: 'JNPT → Felixstowe / Rotterdam', cost: '$0.75-1.00/kg', time: '21-28 days', yield: '0%' },
      { stage: 'EU buyers', node: 'Tesco + UK/EU mid-tier private label', cost: '$8-11/kg', time: '0', yield: '0%' },
    ],
    keyMetric: '7 nodes; shorter chain but inland-cost penalty',
    weakLink: 'Long inland reefer leg; founder transition uncertainty',
  },
  gadre: {
    company: 'Gadre Marine Export (Surimi)',
    chain: [
      { stage: 'Wild raw material sourcing', node: 'Konkan + Karnataka + Gujarat + Odisha landings', cost: '₹40-80/kg ribbonfish/threadfin bream', time: 'seasonal', yield: '50% surimi from raw' },
      { stage: 'Mince + wash + refine', node: 'Multi-stage mechanical', cost: '₹45-65/kg', time: '4-6 hr per batch', yield: '50% (technical)' },
      { stage: 'Surimi block forming', node: '4 plants (Mirkarwada + Veraval + Mangalore + Balasore)', cost: '₹15-25/kg', time: '4-8 hr', yield: '95%' },
      { stage: 'Cold storage', node: 'On-site -25°C', cost: '₹6-9/kg', time: '5-12 days', yield: '-0.5%' },
      { stage: 'Container + sea freight', node: 'Mumbai + Mundra', cost: '₹4-6/kg + freight', time: '25-40 days', yield: '0%' },
      { stage: 'Customers', node: 'Japan/Korea/EU industrial buyers', cost: '$3.5-5/kg', time: '0', yield: '0%' },
    ],
    keyMetric: '6 nodes; surimi-specific economics',
    weakLink: 'Capex-heavy; commodity-priced output',
  },
  coastalCorp: {
    company: 'Coastal Corporation',
    chain: [
      { stage: 'Sourcing', node: 'Multi-state; AP + Maharashtra + Kerala wild + farmed', cost: '₹360-450/kg', time: 'continuous', yield: '~76%' },
      { stage: 'Reefer to plant', node: 'Multi-plant network', cost: '₹6-12/kg', time: '4-12 hr', yield: '-2.5%' },
      { stage: 'Processing (aged plants)', node: '3 plants (Mumbai + Vizag + Cochin)', cost: '₹75-100/kg (efficiency penalty)', time: '12-18 hr', yield: '60% (vs modern 67%)' },
      { stage: 'Cold storage', node: '1990s-era; less efficient', cost: '₹7-10/kg', time: '8-12 days', yield: '-1%' },
      { stage: 'Export', node: 'Mumbai/JNPT + Vizag + Cochin', cost: '₹4-7/kg', time: '1-2 days', yield: '0%' },
      { stage: 'Sea freight', node: 'Multi-route', cost: '$0.80-1.20/kg', time: '25-40 days', yield: '0%' },
      { stage: 'Buyers', node: 'Japan + GCC mid-tier', cost: '$6.5-8/kg', time: '0', yield: '0%' },
    ],
    keyMetric: '7 nodes; structurally sub-efficient',
    weakLink: 'Yield 60% vs modern peers 67%; ~5% gross margin penalty',
  },
  falcon: {
    company: 'Falcon Marine Exports',
    chain: [
      { stage: 'Mixed Odisha sourcing', node: 'WB Sundarbans + Odisha + AP', cost: '₹360-450/kg', time: 'continuous', yield: '78%' },
      { stage: 'Cyclone-risk transit', node: 'Bay of Bengal sourcing → plant', cost: '₹6-12/kg', time: '4-12 hr; cyclone-disrupted', yield: '-3% in cyclone season' },
      { stage: 'Processing', node: 'Paradip + BBSR + AP plant', cost: '₹70-90/kg', time: '8-12 hr', yield: '64%' },
      { stage: 'Cold storage', node: 'Plants', cost: '₹6-9/kg', time: '7-10 days', yield: '-0.5%' },
      { stage: 'Paradip port export', node: 'Paradip + Vizag', cost: '₹4-6/kg', time: '1-2 days', yield: '0%' },
      { stage: 'Sea freight', node: 'Multi-market', cost: '$0.80-1.20/kg', time: '25-40 days', yield: '0%' },
      { stage: 'Buyers', node: 'Japan tuna + GCC + USA', cost: '$6-9/kg', time: '0', yield: '0%' },
    ],
    keyMetric: '7 nodes; cyclone-vulnerable',
    weakLink: 'Cyclone disruption Y1-Y3 every 2-4 years',
  },
  us: {
    company: 'Konkan Seafoods (Us)',
    chain: [
      { stage: 'Konkan + AP + Lakshadweep + WB sourcing', node: 'Multi-source diversified', cost: '₹360-650/kg by species', time: 'continuous', yield: '78-92% by species' },
      { stage: 'First-mile cold chain', node: 'Konkan 150-360 km + AP 800 km + Lakshadweep air', cost: '₹18-22/kg + air', time: '4-42 hr', yield: '-2% target' },
      { stage: 'Receive + grade', node: 'Purandar plant', cost: '₹8/kg', time: '<40 min', yield: '99%' },
      { stage: 'Processing', node: 'Purandar IQF + plate freezer + RAS live tanks', cost: '₹38-95/kg by SKU', time: '6-15 hr', yield: '66-90% by product' },
      { stage: 'NABL lab + QC', node: 'In-house ELISA + HPLC-MS/MS + AAS', cost: '₹3-5/kg blended', time: '4-24 hr', yield: '99.5%' },
      { stage: 'Cold storage', node: '2x150 MT @ -20°C', cost: '₹6-8/kg', time: '6-10 days', yield: '-0.5%' },
      { stage: 'Multi-modal export', node: 'JNPT + CSMIA + future Purandar airport', cost: '₹4-22/kg by mode', time: '1-3 days', yield: '0%' },
      { stage: 'Sea/air freight', node: '7 markets diversified', cost: '$0.40-2.00/kg', time: '18 hr (live air) - 40 days (sea)', yield: '0%' },
      { stage: 'End buyers', node: '40+ named buyers across 7 markets', cost: 'FOB $6-34/kg by SKU', time: '0', yield: '0%' },
    ],
    keyMetric: '9 nodes; multi-modal + multi-product flexibility',
    advantage: 'Live-cargo lane (PNQ-DXB-HKG 18hr) + MSC-tuna saku lane (CCJ-PNQ-NRT 36hr) + commodity sea (JNPT) — 3 distinct lanes none of our competitors run together',
  },
};

export const flowComparison = [
  { metric: 'Nodes in chain', avanti: 11, apex: 10, nekkanti: 8, devi: 9, ifbAgro: 7, gadre: 6, coastal: 7, falcon: 7, us: 9 },
  { metric: 'Farm-to-shelf days', avanti: 38, apex: 42, nekkanti: 36, devi: 40, ifbAgro: 35, gadre: 30, coastal: 38, falcon: 35, us: 'varies 0.75-42' },
  { metric: 'Yield (HOSO→sellable)', avanti: 66, apex: 60, nekkanti: 64, devi: 67, ifbAgro: 65, gadre: 50, coastal: 60, falcon: 64, us: 66 },
  { metric: 'First-mile cost ₹/kg', avanti: 7, apex: 6, nekkanti: 7, devi: 7, ifbAgro: 16, gadre: 8, coastal: 9, falcon: 9, us: 20 },
  { metric: 'Plant cost ₹/kg', avanti: 70, apex: 82, nekkanti: 80, devi: 75, ifbAgro: 75, gadre: 25, coastal: 88, falcon: 80, us: 65 },
  { metric: 'Outbound modes', avanti: 1, apex: 1, nekkanti: 1, devi: 2, ifbAgro: 1, gadre: 2, coastal: 2, falcon: 2, us: 3 },
];
