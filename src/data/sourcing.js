// Sourcing geography: Konkan landings, AP shrimp belt, brackish-water nodes,
// distance/time from Purandar (3-acre plant site).

// Distance to Purandar (3-acre plant) — road km, typical reefer drive time
export const sourcingNodes = [
  // Konkan coastal landing centres
  { id: 'sassoon',     name: 'Sassoon Dock',          state: 'Maharashtra', district: 'Mumbai',     km: 165, hrs: 4.0,  type: 'Major fish market',  primarySpecies: ['Pomfret','Mackerel','Bombay duck','Squid','Mixed'], throughputTPD: 200, lat: 18.91, lng: 72.81 },
  { id: 'mirkarwada',  name: 'Mirkarwada (Ratnagiri)', state: 'Maharashtra', district: 'Ratnagiri', km: 320, hrs: 7.5,  type: 'Major landing',      primarySpecies: ['Pomfret','Squid','Cuttlefish','Lobster','Black tiger wild'], throughputTPD: 80, lat: 16.99, lng: 73.30 },
  { id: 'malvan',      name: 'Malvan Jetty',          state: 'Maharashtra', district: 'Sindhudurg', km: 460, hrs: 10.0, type: 'Mid landing',        primarySpecies: ['Lobster','Pomfret','Cephalopods'], throughputTPD: 35, lat: 16.06, lng: 73.46 },
  { id: 'devgad',      name: 'Devgad',                state: 'Maharashtra', district: 'Sindhudurg', km: 410, hrs: 9.0,  type: 'Mid landing',        primarySpecies: ['Pomfret','Mackerel','Squid'], throughputTPD: 40, lat: 16.37, lng: 73.37 },
  { id: 'harne',       name: 'Harne',                 state: 'Maharashtra', district: 'Ratnagiri',  km: 270, hrs: 6.5,  type: 'Mid landing',        primarySpecies: ['Pomfret','Mackerel','Ribbonfish'], throughputTPD: 50, lat: 17.81, lng: 73.09 },
  { id: 'arnala',      name: 'Arnala (Vasai)',        state: 'Maharashtra', district: 'Palghar',    km: 220, hrs: 5.5,  type: 'Mid landing',        primarySpecies: ['Bombay duck','Pomfret','Mackerel'], throughputTPD: 45, lat: 19.47, lng: 72.79 },
  { id: 'satpati',     name: 'Satpati',               state: 'Maharashtra', district: 'Palghar',    km: 240, hrs: 5.5,  type: 'Mid landing',        primarySpecies: ['Bombay duck','Pomfret'], throughputTPD: 30, lat: 19.71, lng: 72.71 },
  { id: 'karanja',     name: 'Karanja',               state: 'Maharashtra', district: 'Raigad',     km: 175, hrs: 4.5,  type: 'Mid landing',        primarySpecies: ['Pomfret','Squid','Mixed'], throughputTPD: 35, lat: 18.89, lng: 72.93 },
  // Andhra shrimp belt
  { id: 'bhimavaram',  name: 'Bhimavaram',            state: 'Andhra Pradesh', district: 'W. Godavari', km: 850, hrs: 18, type: 'Vannamei farm cluster', primarySpecies: ['Vannamei'], throughputTPD: 600, lat: 16.54, lng: 81.52 },
  { id: 'nellore',     name: 'Nellore',               state: 'Andhra Pradesh', district: 'Nellore',   km: 920, hrs: 19, type: 'Vannamei farm cluster',   primarySpecies: ['Vannamei','Tiger'], throughputTPD: 450, lat: 14.44, lng: 79.99 },
  { id: 'ongole',      name: 'Ongole / Chirala',      state: 'Andhra Pradesh', district: 'Prakasam',  km: 880, hrs: 18, type: 'Vannamei farm cluster',   primarySpecies: ['Vannamei'], throughputTPD: 380, lat: 15.50, lng: 80.05 },
  { id: 'kakinada',    name: 'Kakinada',              state: 'Andhra Pradesh', district: 'E. Godavari', km: 980, hrs: 20, type: 'Mixed shrimp + wild', primarySpecies: ['Vannamei','Tiger','Wild marine'], throughputTPD: 420, lat: 16.99, lng: 82.25 },
  // Lakshadweep tuna (air-link)
  { id: 'lakshadweep', name: 'Agatti / Minicoy',      state: 'Lakshadweep',    district: 'Lakshadweep', km: 1100, hrs: 'air', type: 'Pole-and-line tuna', primarySpecies: ['Yellowfin tuna'], throughputTPD: 25, lat: 10.85, lng: 72.19 },
  // West Bengal black tiger (air-link)
  { id: 'sundarbans',  name: 'Sundarbans + Diamond H', state: 'West Bengal',  district: 'S. 24 Parganas', km: 1900, hrs: 'rail+air', type: 'Wild black tiger', primarySpecies: ['Black tiger wild'], throughputTPD: 60, lat: 21.95, lng: 88.42 },
];

// Outbound nodes (where finished cargo goes)
export const outboundNodes = [
  { id: 'jnpt',  name: 'JNPT (Nhava Sheva)',  type: 'Sea port', km: 180, hrs: 4.5, role: '70% volume — reefer container ocean export to USA, EU, Far East' },
  { id: 'csmia', name: 'Mumbai CSMIA Cargo',  type: 'Air cargo', km: 160, hrs: 4.0, role: '20% volume — premium fresh / live to GCC, Singapore, Japan' },
  { id: 'nmia',  name: 'Navi Mumbai NMIA',    type: 'Air cargo', km: 150, hrs: 3.8, role: 'New air cargo terminal — perishables specialist (post-Phase II)' },
  { id: 'pnq',   name: 'Pune Lohegaon',       type: 'Air cargo', km:  35, hrs: 1.0, role: 'Live lobster + small premium air shipments to Dubai' },
  { id: 'mundra',name: 'Mundra (Adani)',      type: 'Sea port',  km: 1050,hrs: 24,  role: '10% volume — alt port for EU lanes when JNPT is congested' },
];

export const purandarPlant = {
  name: 'Purandar Processing Plant (proposed)',
  area: '3 acres',
  district: 'Pune',
  state: 'Maharashtra',
  lat: 18.28,
  lng: 73.97,
  remarksPro: [
    'Inland location → all-weather operations (no monsoon disruption)',
    '<200 km to JNPT, NMIA, and CSMIA — covers sea + air',
    'Pune labor pool (skilled QA, food-tech graduates from MIT-WPU, BVB)',
    'Cooler micro-climate vs Konkan reduces refrigeration load 8-12%',
    'Adjacent to upcoming Purandar airport (cargo-ready)',
    'Land cost 1/8th of Mumbai industrial — capex efficiency',
  ],
  remarksCon: [
    '+150-200 km first-mile cold-chain leg from Konkan (₹18-25/kg overhead)',
    'AP shrimp transit 850 km (18+ hrs) needs owned reefer',
    'Far from boat-owners — relationship-building through field offices',
    'No coastal incentive zone benefits (vs Ratnagiri SEZ)',
  ],
  mitigations: [
    'Field depots with ice + chilling at Ratnagiri, Malvan, Bhimavaram',
    'Owned 16-ton reefer fleet (3 trucks) for AP lane',
    'Crate-pool returnable insulated bin system to Konkan boats',
    'Pre-financed supplier contracts with Konkan boat-owner clusters',
  ],
};
