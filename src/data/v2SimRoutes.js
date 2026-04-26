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

// V2 — Market Simulator: Route catalog. Each route = (supplier × product × market × distributor × mode)
// 10 sourcing locations × 8 species × 9 markets × 4 distributor types × 3 modes = many possible routes.
// We pre-define 30 high-priority routes that the simulator can analyse.

export const sourcingLocations = [
  { id: 'mirkarwada', name: 'Mirkarwada (Ratnagiri)', state: 'Maharashtra', region: 'Konkan', lat: 17.001, lng: 73.273, baseCostMultiplier: 1.0, monsoonImpact: 0.95 },
  { id: 'harnai',     name: 'Harnai (Dapoli)',        state: 'Maharashtra', region: 'Konkan', lat: 17.811, lng: 73.098, baseCostMultiplier: 0.92, monsoonImpact: 0.95 },
  { id: 'devgad',     name: 'Devgad',                  state: 'Maharashtra', region: 'Konkan', lat: 16.380, lng: 73.378, baseCostMultiplier: 0.95, monsoonImpact: 0.92 },
  { id: 'malvan',     name: 'Malvan',                  state: 'Maharashtra', region: 'Konkan', lat: 16.060, lng: 73.465, baseCostMultiplier: 0.93, monsoonImpact: 0.90 },
  { id: 'karanja',    name: 'Karanja (Uran)',          state: 'Maharashtra', region: 'Konkan', lat: 18.874, lng: 72.935, baseCostMultiplier: 1.05, monsoonImpact: 0.95 },
  { id: 'wg-ap',      name: 'West Godavari (AP)',      state: 'Andhra Pradesh', region: 'AP farm belt', lat: 16.751, lng: 81.679, baseCostMultiplier: 1.0, monsoonImpact: 1.0, diseaseExposure: 0.85 },
  { id: 'eg-ap',      name: 'East Godavari (AP)',      state: 'Andhra Pradesh', region: 'AP farm belt', lat: 16.989, lng: 82.247, baseCostMultiplier: 1.02, monsoonImpact: 1.0, diseaseExposure: 0.88 },
  { id: 'nellore',    name: 'Nellore (AP)',            state: 'Andhra Pradesh', region: 'AP farm belt', lat: 14.443, lng: 79.987, baseCostMultiplier: 0.97, monsoonImpact: 1.0, diseaseExposure: 0.92 },
  { id: 'agatti',     name: 'Agatti (Lakshadweep)',    state: 'Lakshadweep UT', region: 'Islands',       lat: 10.823, lng: 72.176, baseCostMultiplier: 1.15, monsoonImpact: 0.65 },
  { id: 'sundarbans', name: 'Sundarbans (WB)',         state: 'West Bengal', region: 'Eastern',          lat: 22.025, lng: 88.892, baseCostMultiplier: 1.10, monsoonImpact: 0.80, cycloneExposure: 0.65 },
];

export const products = [
  { id: 'vannamei-3140', name: 'Vannamei HLSO 31/40', species: 'vannamei', form: 'HLSO', count: '31/40', defaultBuyPrice: 380, defaultFOB: 6.5, gmTarget: 0.10, perishability: 'frozen-stable', valueAdd: 'commodity' },
  { id: 'vannamei-1620', name: 'Vannamei HLSO 16/20', species: 'vannamei', form: 'HLSO', count: '16/20', defaultBuyPrice: 480, defaultFOB: 9.0, gmTarget: 0.13, perishability: 'frozen-stable', valueAdd: 'premium-shrimp' },
  { id: 'vannamei-cooked', name: 'Vannamei cooked PD', species: 'vannamei', form: 'cooked PD', count: '21/25', defaultBuyPrice: 380, defaultFOB: 9.5, gmTarget: 0.18, perishability: 'frozen-stable', valueAdd: 'value-added' },
  { id: 'pomfret-whole',  name: 'Silver pomfret whole', species: 'pomfret', form: 'whole', count: '500g+', defaultBuyPrice: 720, defaultFOB: 12, gmTarget: 0.20, perishability: 'chilled-3day', valueAdd: 'wild-premium' },
  { id: 'lobster-live',   name: 'Live spiny lobster', species: 'lobster', form: 'live', count: '500-650g', defaultBuyPrice: 1700, defaultFOB: 30, gmTarget: 0.30, perishability: 'live-24hr', valueAdd: 'live-premium' },
  { id: 'mudcrab-live',   name: 'Live mud crab', species: 'mudcrab', form: 'live', count: '1kg+', defaultBuyPrice: 800, defaultFOB: 16.5, gmTarget: 0.26, perishability: 'live-28hr', valueAdd: 'live-premium' },
  { id: 'octopus-cooked', name: 'Octopus cooked + sliced', species: 'octopus', form: 'cooked', count: 'tentacles', defaultBuyPrice: 240, defaultFOB: 9.5, gmTarget: 0.28, perishability: 'frozen-stable', valueAdd: 'cooked-VA' },
  { id: 'tuna-saku',      name: 'Yellowfin saku block', species: 'tuna', form: 'saku', count: '2x3x10cm', defaultBuyPrice: 380, defaultFOB: 17, gmTarget: 0.30, perishability: 'frozen-CO-free', valueAdd: 'MSC-premium' },
];

export const markets = [
  { id: 'usa',   name: 'USA',   currency: 'USD', tariffApplies: true, requiresUSFDA: true,  premiumMSC: 1.30, baseShare: 0.30 },
  { id: 'eu',    name: 'EU',    currency: 'EUR', tariffApplies: false, requiresEUestab: true, premiumMSC: 1.25, baseShare: 0.18 },
  { id: 'uk',    name: 'UK',    currency: 'GBP', tariffApplies: false, requiresEUestab: true, premiumMSC: 1.25, baseShare: 0.05 },
  { id: 'japan', name: 'Japan', currency: 'JPY', tariffApplies: false, requiresMHLW: true,    premiumMSC: 1.35, baseShare: 0.12 },
  { id: 'china', name: 'China', currency: 'CNY', tariffApplies: false, requiresGACC: true,    premiumMSC: 1.10, baseShare: 0.15 },
  { id: 'hk',    name: 'Hong Kong', currency: 'HKD', tariffApplies: false, requiresAFCD: true, premiumMSC: 1.15, baseShare: 0.06 },
  { id: 'sg',    name: 'Singapore', currency: 'SGD', tariffApplies: false, requiresSFA: true,  premiumMSC: 1.15, baseShare: 0.04 },
  { id: 'gcc',   name: 'GCC (UAE+Saudi+Qatar)', currency: 'USD', tariffApplies: false, requiresHalal: true, premiumMSC: 1.05, baseShare: 0.08 },
  { id: 'sea',   name: 'Southeast Asia (MY+Thailand+VN)', currency: 'USD', tariffApplies: false, requiresNone: true, premiumMSC: 1.0, baseShare: 0.02 },
];

export const distributors = [
  { id: 'broker',     name: 'Broker / Importer', margin: 0.06, riskAbsorbed: 0.40, paymentDays: 30 },
  { id: 'wholesale',  name: 'Wholesale market',  margin: 0.04, riskAbsorbed: 0.20, paymentDays: 15 },
  { id: 'private-label', name: 'Private label retail', margin: 0.10, riskAbsorbed: 0.65, paymentDays: 60 },
  { id: 'direct-horeca', name: 'Direct HoReCa',  margin: 0.15, riskAbsorbed: 0.80, paymentDays: 21 },
];

export const transportModes = [
  { id: 'sea', name: 'Sea reefer container', baseCostUSDperKg: 0.85, transitDays: 32, mortalityRate: 0, capacityMTcontainer: 22 },
  { id: 'air-frozen', name: 'Air freight (frozen)', baseCostUSDperKg: 4.5, transitDays: 1, mortalityRate: 0, capacityMTflight: 4 },
  { id: 'air-live',   name: 'Air freight (live cargo)', baseCostUSDperKg: 5.0, transitDays: 1, mortalityRate: 0.10, capacityMTflight: 1.5 },
];

// Pre-defined hot routes
export const hotRoutes = [
  { id: 'r1',  name: 'WG-AP vannamei → USA broker',         supplier: 'wg-ap',     product: 'vannamei-3140',   market: 'usa',   distributor: 'broker',         mode: 'sea',       targetMT: 600 },
  { id: 'r2',  name: 'WG-AP vannamei cooked → UK retail',   supplier: 'wg-ap',     product: 'vannamei-cooked', market: 'uk',    distributor: 'private-label',  mode: 'sea',       targetMT: 200 },
  { id: 'r3',  name: 'Mirkarwada pomfret → GCC retail',     supplier: 'mirkarwada', product: 'pomfret-whole',   market: 'gcc',   distributor: 'broker',         mode: 'air-frozen',targetMT: 80 },
  { id: 'r4',  name: 'Devgad live lobster → HK 5-star',     supplier: 'devgad',    product: 'lobster-live',    market: 'hk',    distributor: 'direct-horeca',  mode: 'air-live',  targetMT: 30 },
  { id: 'r5',  name: 'Sundarbans live crab → SG wholesale', supplier: 'sundarbans', product: 'mudcrab-live',    market: 'sg',    distributor: 'wholesale',      mode: 'air-live',  targetMT: 50 },
  { id: 'r6',  name: 'Malvan octopus cooked → Spain',       supplier: 'malvan',    product: 'octopus-cooked',  market: 'eu',    distributor: 'private-label',  mode: 'sea',       targetMT: 250 },
  { id: 'r7',  name: 'Lakshadweep MSC tuna → Japan',        supplier: 'agatti',    product: 'tuna-saku',       market: 'japan', distributor: 'broker',         mode: 'air-frozen',targetMT: 150 },
  { id: 'r8',  name: 'WG-AP vannamei → China wholesale',    supplier: 'wg-ap',     product: 'vannamei-3140',   market: 'china', distributor: 'wholesale',      mode: 'sea',       targetMT: 400 },
  { id: 'r9',  name: 'Karanja vannamei 16/20 → Japan',      supplier: 'karanja',   product: 'vannamei-1620',   market: 'japan', distributor: 'broker',         mode: 'sea',       targetMT: 100 },
  { id: 'r10', name: 'Harnai pomfret → Singapore HoReCa',   supplier: 'harnai',    product: 'pomfret-whole',   market: 'sg',    distributor: 'direct-horeca',  mode: 'air-frozen',targetMT: 40 },
  { id: 'r11', name: 'Nellore vannamei → SEA wholesale',    supplier: 'nellore',   product: 'vannamei-3140',   market: 'sea',   distributor: 'wholesale',      mode: 'sea',       targetMT: 100 },
  { id: 'r12', name: 'Mirkarwada lobster → Tokyo',          supplier: 'mirkarwada', product: 'lobster-live',    market: 'japan', distributor: 'direct-horeca',  mode: 'air-live',  targetMT: 25 },
  { id: 'r13', name: 'WG-AP vannamei cooked → USA Whole Foods', supplier: 'wg-ap', product: 'vannamei-cooked', market: 'usa',   distributor: 'private-label',  mode: 'sea',       targetMT: 150 },
  { id: 'r14', name: 'Devgad lobster → SG hotels',          supplier: 'devgad',    product: 'lobster-live',    market: 'sg',    distributor: 'direct-horeca',  mode: 'air-live',  targetMT: 20 },
  { id: 'r15', name: 'EG-AP vannamei → EU mid-tier',        supplier: 'eg-ap',     product: 'vannamei-3140',   market: 'eu',    distributor: 'broker',         mode: 'sea',       targetMT: 200 },
  { id: 'r16', name: 'Malvan octopus → Italy HoReCa',       supplier: 'malvan',    product: 'octopus-cooked',  market: 'eu',    distributor: 'direct-horeca',  mode: 'sea',       targetMT: 100 },
  { id: 'r17', name: 'Agatti tuna → US sashimi distr',      supplier: 'agatti',    product: 'tuna-saku',       market: 'usa',   distributor: 'broker',         mode: 'air-frozen',targetMT: 80 },
  { id: 'r18', name: 'Karanja pomfret → Mumbai domestic',   supplier: 'karanja',   product: 'pomfret-whole',   market: 'sea',   distributor: 'wholesale',      mode: 'sea',       targetMT: 60 },
  { id: 'r19', name: 'Harnai lobster → HK wet markets',     supplier: 'harnai',    product: 'lobster-live',    market: 'hk',    distributor: 'wholesale',      mode: 'air-live',  targetMT: 15 },
  { id: 'r20', name: 'Sundarbans crab → Tokyo sashimi',     supplier: 'sundarbans', product: 'mudcrab-live',    market: 'japan', distributor: 'direct-horeca',  mode: 'air-live',  targetMT: 30 },
  { id: 'r21', name: 'WG-AP black tiger → Japan premium',   supplier: 'wg-ap',     product: 'vannamei-1620',   market: 'japan', distributor: 'private-label',  mode: 'sea',       targetMT: 80 },
  { id: 'r22', name: 'Mirkarwada cuttlefish → Spain',       supplier: 'mirkarwada', product: 'octopus-cooked',  market: 'eu',    distributor: 'broker',         mode: 'sea',       targetMT: 150 },
  { id: 'r23', name: 'Agatti skipjack → Thai canners',      supplier: 'agatti',    product: 'tuna-saku',       market: 'sea',   distributor: 'wholesale',      mode: 'sea',       targetMT: 200 },
  { id: 'r24', name: 'Devgad lobster → KL HoReCa',          supplier: 'devgad',    product: 'lobster-live',    market: 'sea',   distributor: 'direct-horeca',  mode: 'air-live',  targetMT: 12 },
  { id: 'r25', name: 'Malvan squid → Korea',                supplier: 'malvan',    product: 'octopus-cooked',  market: 'china', distributor: 'wholesale',      mode: 'sea',       targetMT: 80 },
  { id: 'r26', name: 'Eastern WG vannamei → Costco',        supplier: 'eg-ap',     product: 'vannamei-cooked', market: 'usa',   distributor: 'private-label',  mode: 'sea',       targetMT: 250 },
  { id: 'r27', name: 'Nellore vannamei BAP → Tesco',        supplier: 'nellore',   product: 'vannamei-cooked', market: 'uk',    distributor: 'private-label',  mode: 'sea',       targetMT: 120 },
  { id: 'r28', name: 'Karanja wild shrimp → Dubai',         supplier: 'karanja',   product: 'vannamei-1620',   market: 'gcc',   distributor: 'broker',         mode: 'sea',       targetMT: 50 },
  { id: 'r29', name: 'Harnai pomfret diaspora → Lulu',      supplier: 'harnai',    product: 'pomfret-whole',   market: 'gcc',   distributor: 'broker',         mode: 'air-frozen',targetMT: 60 },
  { id: 'r30', name: 'Agatti tuna MSC → Maruha Nichiro',    supplier: 'agatti',    product: 'tuna-saku',       market: 'japan', distributor: 'broker',         mode: 'air-frozen',targetMT: 100 },
];

// Cultural/religious buying spikes (price multipliers per market by month)
export const buyingSpikes = {
  usa:   { jan:1.0, feb:1.05, mar:1.15, apr:1.10, may:1.0, jun:1.0, jul:1.0, aug:1.0, sep:1.0,  oct:1.0,  nov:1.20, dec:1.15 },
  eu:    { jan:1.0, feb:1.05, mar:1.10, apr:1.05, may:1.0, jun:1.05, jul:1.10, aug:1.05, sep:1.0,  oct:1.0,  nov:1.10, dec:1.10 },
  uk:    { jan:1.0, feb:1.0,  mar:1.10, apr:1.0,  may:1.0, jun:1.0,  jul:1.0,  aug:1.0,  sep:1.0,  oct:1.0,  nov:1.10, dec:1.20 },
  japan: { jan:1.0, feb:1.0,  mar:1.0,  apr:1.05, may:1.0, jun:1.0,  jul:1.20, aug:1.10, sep:1.0,  oct:1.0,  nov:1.0,  dec:1.20 },
  china: { jan:1.20, feb:1.30, mar:1.0,  apr:1.0,  may:1.0, jun:1.0,  jul:1.0,  aug:1.0,  sep:1.05, oct:1.10, nov:1.0,  dec:1.05 },
  hk:    { jan:1.20, feb:1.30, mar:1.0,  apr:1.0,  may:1.0, jun:1.0,  jul:1.0,  aug:1.0,  sep:1.05, oct:1.05, nov:1.0,  dec:1.10 },
  sg:    { jan:1.15, feb:1.25, mar:1.0,  apr:1.0,  may:1.0, jun:1.0,  jul:1.0,  aug:1.0,  sep:1.0,  oct:1.0,  nov:1.0,  dec:1.10 },
  gcc:   { jan:1.0, feb:1.20, mar:1.30, apr:1.10, may:1.0, jun:1.0,  jul:1.0,  aug:1.0,  sep:1.0,  oct:1.0,  nov:1.0,  dec:1.0 },
  sea:   { jan:1.10, feb:1.15, mar:1.0,  apr:1.0,  may:1.0, jun:1.0,  jul:1.0,  aug:1.0,  sep:1.0,  oct:1.0,  nov:1.0,  dec:1.0 },
};
