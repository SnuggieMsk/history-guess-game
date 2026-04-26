// V2 — Competitor plant locations + supply-chain coordinates
// For map visualization and supply-chain analysis.

export const competitorPlants = [
  // Avanti
  { id: 'avanti-kovvur', company: 'Avanti Feeds', companyId: 'avanti', plant: 'Kovvur Feed Plant', state: 'Andhra Pradesh', district: 'West Godavari', lat: 17.005, lng: 81.748, type: 'Feed plant', capacityMTPM: 60000, established: 1993 },
  { id: 'avanti-pamarru', company: 'Avanti Feeds', companyId: 'avanti', plant: 'Pamarru Feed Plant', state: 'Andhra Pradesh', district: 'Krishna', lat: 16.392, lng: 80.998, type: 'Feed plant', capacityMTPM: 25000, established: 2010 },
  { id: 'avanti-bandapuram', company: 'Avanti Feeds', companyId: 'avanti', plant: 'Bandapuram Feed Plant', state: 'Andhra Pradesh', district: 'West Godavari', lat: 16.748, lng: 81.652, type: 'Feed plant', capacityMTPM: 25000, established: 2014 },
  { id: 'avanti-vsk-frozen', company: 'Avanti Frozen Foods', companyId: 'avanti', plant: 'Visakhapatnam Frozen Foods', state: 'Andhra Pradesh', district: 'Visakhapatnam', lat: 17.728, lng: 83.319, type: 'Processing + export', capacityMTPM: 40, established: 2017 },
  { id: 'avanti-hatchery', company: 'Avanti Feeds', companyId: 'avanti', plant: 'Hatchery Cluster', state: 'Andhra Pradesh', district: 'West Godavari', lat: 16.852, lng: 81.682, type: 'Hatchery', capacityMTPM: null, established: 2008 },

  // Apex
  { id: 'apex-kakinada', company: 'Apex Frozen Foods', companyId: 'apex', plant: 'Kakinada Main Plant', state: 'Andhra Pradesh', district: 'East Godavari', lat: 16.989, lng: 82.247, type: 'Processing + export', capacityMTPM: 60, established: 1995 },
  { id: 'apex-tn', company: 'Apex Frozen Foods', companyId: 'apex', plant: 'Tamil Nadu Plant', state: 'Tamil Nadu', district: 'Nagapattinam', lat: 10.762, lng: 79.838, type: 'Processing', capacityMTPM: 35, established: 2015 },

  // Nekkanti
  { id: 'nekkanti-vsk', company: 'Nekkanti Sea Foods', companyId: 'nekkanti', plant: 'Visakhapatnam Plant', state: 'Andhra Pradesh', district: 'Visakhapatnam', lat: 17.685, lng: 83.221, type: 'Processing + export', capacityMTPM: 50, established: 1989 },
  { id: 'nekkanti-bhimavaram', company: 'Nekkanti Sea Foods', companyId: 'nekkanti', plant: 'Bhimavaram Plant', state: 'Andhra Pradesh', district: 'West Godavari', lat: 16.544, lng: 81.521, type: 'Pre-processing', capacityMTPM: 40, established: 2010 },
  { id: 'nekkanti-fleet', company: 'Nekkanti Sea Foods', companyId: 'nekkanti', plant: 'Deep-Sea Trawling Fleet (Vizag harbour)', state: 'Andhra Pradesh', district: 'Visakhapatnam', lat: 17.704, lng: 83.273, type: 'Fishing fleet', capacityMTPM: null, established: 1990 },

  // Devi
  { id: 'devi-tanuku', company: 'Devi Sea Foods', companyId: 'devi', plant: 'Tanuku HQ Plant', state: 'Andhra Pradesh', district: 'West Godavari', lat: 16.751, lng: 81.679, type: 'Processing + export', capacityMTPM: 55, established: 1992 },
  { id: 'devi-peddapuram', company: 'Devi Sea Foods', companyId: 'devi', plant: 'Peddapuram Plant', state: 'Andhra Pradesh', district: 'East Godavari', lat: 17.083, lng: 82.142, type: 'Processing', capacityMTPM: 35, established: 2005 },
  { id: 'devi-tn', company: 'Devi Sea Foods', companyId: 'devi', plant: 'Tamil Nadu Plant', state: 'Tamil Nadu', district: 'Nagapattinam', lat: 10.770, lng: 79.846, type: 'Processing', capacityMTPM: 30, established: 2010 },
  { id: 'devi-odisha', company: 'Devi Sea Foods', companyId: 'devi', plant: 'Odisha Plant', state: 'Odisha', district: 'Khordha', lat: 20.182, lng: 85.802, type: 'Processing', capacityMTPM: 25, established: 2015 },
  { id: 'devi-hatchery', company: 'Devi Sea Foods', companyId: 'devi', plant: 'Hatchery + Feed Cluster', state: 'Andhra Pradesh', district: 'West Godavari', lat: 16.852, lng: 81.652, type: 'Hatchery + Feed', capacityMTPM: null, established: 2000 },

  // IFB Agro
  { id: 'ifb-vasai', company: 'IFB Agro', companyId: 'ifbAgro', plant: 'Vasai Plant', state: 'Maharashtra', district: 'Palghar', lat: 19.391, lng: 72.832, type: 'Processing + export', capacityMTPM: 30, established: 1995 },
  { id: 'ifb-kolkata', company: 'IFB Agro', companyId: 'ifbAgro', plant: 'Kolkata Plant', state: 'West Bengal', district: 'Kolkata', lat: 22.572, lng: 88.364, type: 'Processing', capacityMTPM: 25, established: 2000 },
  { id: 'ifb-midnapore', company: 'IFB Agro', companyId: 'ifbAgro', plant: 'Midnapore Pre-processing', state: 'West Bengal', district: 'Paschim Medinipur', lat: 22.428, lng: 87.317, type: 'Pre-processing', capacityMTPM: 20, established: 2010 },

  // Gadre
  { id: 'gadre-mirkarwada', company: 'Gadre Marine', companyId: 'gadre', plant: 'Mirkarwada HQ + Original Plant', state: 'Maharashtra', district: 'Ratnagiri', lat: 17.001, lng: 73.273, type: 'Processing + HQ', capacityMTPM: 40, established: 1978 },
  { id: 'gadre-gujarat', company: 'Gadre Marine', companyId: 'gadre', plant: 'Gujarat Surimi Plant', state: 'Gujarat', district: 'Veraval (Gir-Somnath)', lat: 20.901, lng: 70.367, type: 'Surimi', capacityMTPM: 80, established: 2008 },
  { id: 'gadre-karnataka', company: 'Gadre Marine', companyId: 'gadre', plant: 'Karnataka Surimi Plant', state: 'Karnataka', district: 'Mangalore', lat: 12.914, lng: 74.856, type: 'Surimi', capacityMTPM: 70, established: 2012 },
  { id: 'gadre-odisha', company: 'Gadre Marine', companyId: 'gadre', plant: 'Balasore Surimi Plant', state: 'Odisha', district: 'Balasore', lat: 21.495, lng: 86.927, type: 'Surimi', capacityMTPM: 60, established: 2015 },

  // Coastal Corp
  { id: 'coastal-mumbai', company: 'Coastal Corp', companyId: 'coastalCorp', plant: 'Mumbai Plant', state: 'Maharashtra', district: 'Mumbai Suburban', lat: 19.099, lng: 72.836, type: 'Processing', capacityMTPM: 25, established: 1985 },
  { id: 'coastal-vsk', company: 'Coastal Corp', companyId: 'coastalCorp', plant: 'Visakhapatnam Plant', state: 'Andhra Pradesh', district: 'Visakhapatnam', lat: 17.692, lng: 83.215, type: 'Processing', capacityMTPM: 30, established: 1990 },
  { id: 'coastal-cochin', company: 'Coastal Corp', companyId: 'coastalCorp', plant: 'Cochin Plant', state: 'Kerala', district: 'Ernakulam', lat: 9.971, lng: 76.286, type: 'Processing', capacityMTPM: 20, established: 1995 },

  // Falcon
  { id: 'falcon-paradip', company: 'Falcon Marine', companyId: 'falcon', plant: 'Paradip Plant', state: 'Odisha', district: 'Jagatsinghpur', lat: 20.317, lng: 86.611, type: 'Processing + export', capacityMTPM: 35, established: 1990 },
  { id: 'falcon-bbsr', company: 'Falcon Marine', companyId: 'falcon', plant: 'Bhubaneswar Plant', state: 'Odisha', district: 'Khordha', lat: 20.296, lng: 85.824, type: 'Processing', capacityMTPM: 25, established: 1985 },
  { id: 'falcon-ap', company: 'Falcon Marine', companyId: 'falcon', plant: 'AP Plant', state: 'Andhra Pradesh', district: 'East Godavari', lat: 16.989, lng: 82.247, type: 'Processing', capacityMTPM: 20, established: 2005 },

  // Sandhya Aqua
  { id: 'sandhya-bhimavaram', company: 'Sandhya Aqua', companyId: 'sandhyaAqua', plant: 'Bhimavaram Plant', state: 'Andhra Pradesh', district: 'West Godavari', lat: 16.544, lng: 81.521, type: 'Processing + export', capacityMTPM: 25, established: 1995 },

  // Us
  { id: 'us-purandar', company: 'Konkan Seafoods (Us)', companyId: 'us', plant: 'Purandar Plant (planned)', state: 'Maharashtra', district: 'Pune', lat: 18.282, lng: 74.054, type: 'Processing + export (planned)', capacityMTPM: 30, established: 2027 },
];

export const plantTypeColors = {
  'Processing + export': '#a8322d',
  'Processing + HQ': '#a8322d',
  'Processing': '#c5a565',
  'Pre-processing': '#b8860b',
  'Feed plant': '#0d3b66',
  'Hatchery': '#2d6a4f',
  'Hatchery + Feed': '#2d6a4f',
  'Surimi': '#7a5b8c',
  'Fishing fleet': '#5fb3e3',
  'Processing + export (planned)': '#2d6a4f',
};

export const portsAndAirports = [
  // Sea ports
  { id: 'jnpt', name: 'JNPT / Nhava Sheva', type: 'Sea port', state: 'Maharashtra', lat: 18.952, lng: 72.951, role: 'India\'s largest container port; key reefer export node' },
  { id: 'mumbai-port', name: 'Mumbai Port (BPT)', type: 'Sea port', state: 'Maharashtra', lat: 18.949, lng: 72.844, role: 'Legacy seafood export port' },
  { id: 'mundra', name: 'Mundra Port', type: 'Sea port', state: 'Gujarat', lat: 22.834, lng: 69.726, role: 'Largest private port; cyclone-rated infrastructure' },
  { id: 'chennai-port', name: 'Chennai Port', type: 'Sea port', state: 'Tamil Nadu', lat: 13.103, lng: 80.295, role: 'TN seafood export node' },
  { id: 'visakhapatnam-port', name: 'Visakhapatnam Port', type: 'Sea port', state: 'Andhra Pradesh', lat: 17.694, lng: 83.302, role: 'AP shrimp export primary' },
  { id: 'kakinada-port', name: 'Kakinada Anchorage Port', type: 'Sea port', state: 'Andhra Pradesh', lat: 16.989, lng: 82.247, role: 'East Godavari shrimp export' },
  { id: 'paradip-port', name: 'Paradip Port', type: 'Sea port', state: 'Odisha', lat: 20.317, lng: 86.611, role: 'Odisha seafood + bulk cargo' },
  { id: 'kolkata-port', name: 'Kolkata Port', type: 'Sea port', state: 'West Bengal', lat: 22.572, lng: 88.364, role: 'WB exports including Sundarbans crab' },
  { id: 'cochin-port', name: 'Cochin Port', type: 'Sea port', state: 'Kerala', lat: 9.971, lng: 76.286, role: 'Kerala fish + tuna export' },
  { id: 'tuticorin', name: 'Tuticorin (V O Chidambaranar)', type: 'Sea port', state: 'Tamil Nadu', lat: 8.799, lng: 78.151, role: 'Southern shrimp export' },
  // Airports
  { id: 'csmia', name: 'Mumbai CSMIA', type: 'Air cargo', state: 'Maharashtra', lat: 19.089, lng: 72.868, role: 'India\'s #1 perishable air cargo hub' },
  { id: 'pnq', name: 'Pune Lohegaon', type: 'Air cargo', state: 'Maharashtra', lat: 18.582, lng: 73.919, role: 'Limited perishable; secondary' },
  { id: 'purandar', name: 'Purandar Airport (planned)', type: 'Air cargo', state: 'Maharashtra', lat: 18.300, lng: 74.050, role: 'Future ~2028 commissioning' },
  { id: 'blr', name: 'Bengaluru Air Cargo', type: 'Air cargo', state: 'Karnataka', lat: 13.199, lng: 77.711, role: 'Tuna saku air export hub' },
  { id: 'maa', name: 'Chennai Air Cargo', type: 'Air cargo', state: 'Tamil Nadu', lat: 12.989, lng: 80.180, role: 'TN seafood air export' },
  { id: 'ccu', name: 'Kolkata Air Cargo', type: 'Air cargo', state: 'West Bengal', lat: 22.654, lng: 88.447, role: 'Live mud crab to HK/SG' },
  { id: 'agatti', name: 'Agatti (Lakshadweep)', type: 'Air cargo', state: 'Lakshadweep UT', lat: 10.823, lng: 72.176, role: 'Pole-and-line tuna inbound; ATR-72 hold' },
  { id: 'hyd', name: 'Hyderabad Air Cargo', type: 'Air cargo', state: 'Telangana', lat: 17.241, lng: 78.430, role: 'Inland AP shrimp air option' },
];

export const supplyChainLanes = [
  { from: 'avanti-kovvur',     to: 'avanti-vsk-frozen',     mode: 'Reefer truck', distanceKm: 510, hours: 11, freq: 'Daily' },
  { from: 'avanti-vsk-frozen', to: 'visakhapatnam-port',    mode: 'Reefer container', distanceKm: 8, hours: 0.5, freq: 'Daily' },
  { from: 'avanti-pamarru',    to: 'avanti-vsk-frozen',     mode: 'Reefer truck', distanceKm: 410, hours: 9, freq: 'Daily' },
  { from: 'apex-kakinada',     to: 'kakinada-port',         mode: 'Reefer container', distanceKm: 12, hours: 0.5, freq: 'Daily' },
  { from: 'nekkanti-vsk',      to: 'visakhapatnam-port',    mode: 'Reefer container', distanceKm: 5, hours: 0.3, freq: 'Daily' },
  { from: 'devi-tanuku',       to: 'visakhapatnam-port',    mode: 'Reefer truck', distanceKm: 380, hours: 8, freq: 'Daily' },
  { from: 'ifb-vasai',         to: 'jnpt',                  mode: 'Reefer container', distanceKm: 95, hours: 2.5, freq: 'Daily' },
  { from: 'gadre-mirkarwada',  to: 'jnpt',                  mode: 'Reefer truck', distanceKm: 280, hours: 6, freq: '5x/week' },
  { from: 'coastal-mumbai',    to: 'jnpt',                  mode: 'Reefer container', distanceKm: 25, hours: 1, freq: 'Daily' },
  { from: 'falcon-paradip',    to: 'paradip-port',          mode: 'Reefer container', distanceKm: 5, hours: 0.3, freq: 'Daily' },
  // Our planned lanes
  { from: 'us-purandar',       to: 'jnpt',                  mode: 'Reefer container', distanceKm: 170, hours: 3.5, freq: 'Daily', us: true },
  { from: 'us-purandar',       to: 'csmia',                 mode: 'Refrigerated van', distanceKm: 170, hours: 3.5, freq: '4x/week', us: true },
  { from: 'us-purandar',       to: 'purandar',              mode: 'Local trucking', distanceKm: 15, hours: 0.4, freq: 'Future', us: true },
];
