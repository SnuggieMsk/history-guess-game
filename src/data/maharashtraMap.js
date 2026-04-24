// Maharashtra map data — district polygons (stylised), landing centres, cities
// All coordinates projected into a 900x700 SVG viewBox.
// Lat range: 15.5°N (south) to 22.1°N (north)
// Lng range: 72.6°E (west coast) to 80.9°E (east border)
// Note: polygons are simplified for presentation; not survey-grade.

export const mapViewBox = { w: 900, h: 700 };
export const latRange  = [15.5, 22.1];
export const lngRange  = [72.6, 80.9];

export const projectCoord = (lat, lng) => {
  const x = ((lng - lngRange[0]) / (lngRange[1] - lngRange[0])) * mapViewBox.w;
  const y = ((latRange[1] - lat) / (latRange[1] - latRange[0])) * mapViewBox.h;
  return [x, y];
};

// State outline — a stylised polygon based on Maharashtra's approximate shape.
// Drawn clockwise from NW corner: Palghar → Nashik → Dhule → Nandurbar → Amravati →
// Nagpur → Gondia → Gadchiroli → Chandrapur → Yavatmal → Nanded → Osmanabad →
// Latur → Solapur → Pune → Satara → Sangli → Kolhapur → Sindhudurg →
// back up the coast.

export const stateOutline = [
  [20.0, 72.8], [20.3, 72.9], [20.6, 73.3], [20.9, 73.8], [21.2, 74.2],
  [21.4, 74.5], [21.7, 74.9], [22.0, 75.4], [22.1, 76.3], [21.9, 77.1],
  [21.8, 78.0], [21.9, 79.0], [21.6, 79.8], [21.2, 80.2], [20.6, 80.5],
  [20.1, 80.8], [19.5, 80.9], [19.0, 80.6], [18.6, 80.1], [18.2, 79.5],
  [17.8, 78.9], [17.4, 78.2], [17.1, 77.5], [16.8, 76.9], [16.5, 76.2],
  [16.1, 75.6], [15.8, 74.8], [15.7, 74.2], [15.6, 73.7], [15.7, 73.4],
  [16.0, 73.3], [16.5, 73.4], [17.0, 73.2], [17.5, 73.0], [18.2, 72.9],
  [18.9, 72.8], [19.5, 72.8], [20.0, 72.8],
];

// Simplified district polygons — coastal districts only (the ones that matter for us).
// Each polygon is a rough bounding area; purely for visual reference.
export const coastalDistricts = [
  {
    id: 'palghar', name: 'Palghar',
    polygon: [
      [19.7, 72.75], [19.9, 73.0], [20.0, 73.1], [20.0, 72.85], [19.9, 72.75], [19.7, 72.75],
    ],
    color: '#e8dec2',
  },
  {
    id: 'thane', name: 'Thane',
    polygon: [
      [19.2, 72.9], [19.5, 73.2], [19.7, 73.3], [19.7, 73.0], [19.5, 72.85], [19.2, 72.9],
    ],
    color: '#ecdcb8',
  },
  {
    id: 'mumbai', name: 'Mumbai',
    polygon: [
      [19.0, 72.8], [19.2, 72.9], [19.25, 73.0], [19.05, 72.95], [19.0, 72.8],
    ],
    color: '#dbc79b',
  },
  {
    id: 'raigad', name: 'Raigad',
    polygon: [
      [18.2, 72.9], [18.5, 73.1], [18.9, 73.2], [19.0, 73.0], [18.9, 72.85], [18.5, 72.9], [18.2, 72.9],
    ],
    color: '#e8dec2',
  },
  {
    id: 'ratnagiri', name: 'Ratnagiri',
    polygon: [
      [17.0, 73.05], [17.4, 73.3], [17.8, 73.4], [18.2, 73.3], [18.2, 73.0], [17.7, 72.95], [17.0, 73.05],
    ],
    color: '#dbc79b',
  },
  {
    id: 'sindhudurg', name: 'Sindhudurg',
    polygon: [
      [15.7, 73.4], [15.9, 73.6], [16.2, 73.7], [16.6, 73.65], [17.0, 73.4], [17.0, 73.05], [16.5, 73.15], [15.9, 73.35], [15.7, 73.4],
    ],
    color: '#e8dec2',
  },
  // Pune district (where Purandar is)
  {
    id: 'pune', name: 'Pune',
    polygon: [
      [17.8, 73.4], [18.0, 73.8], [18.5, 74.4], [19.0, 74.3], [19.1, 73.7], [18.7, 73.4], [18.2, 73.3], [17.8, 73.4],
    ],
    color: '#f0ead9',
  },
];

// The plant location
export const plant = {
  id: 'purandar-plant',
  name: 'Konkan Seafoods Plant',
  subtitle: '3-acre site · Purandar, Pune district',
  lat: 18.28, lng: 74.05,
  type: 'PLANT',
};

// Landing centres — real coordinates on Maharashtra coast
export const landingCentres = [
  // Palghar
  { id: 'satpati',    name: 'Satpati',     district: 'Palghar',     lat: 19.718, lng: 72.725, size: 'mid',   species: 'Pomfret, Bombay duck, mackerel', tpd: 8 },
  { id: 'arnala',     name: 'Arnala',      district: 'Palghar',     lat: 19.469, lng: 72.791, size: 'small', species: 'Pomfret, mackerel',              tpd: 5 },
  { id: 'dahanu',     name: 'Dahanu',      district: 'Palghar',     lat: 19.968, lng: 72.738, size: 'mid',   species: 'Pomfret, ribbonfish, bomb duck', tpd: 10 },
  // Thane / Mumbai
  { id: 'versova',    name: 'Versova',     district: 'Mumbai',      lat: 19.134, lng: 72.814, size: 'mid',   species: 'Mixed coastal; Mumbai hub',      tpd: 15 },
  { id: 'sassoon',    name: 'Sassoon Dock',district: 'Mumbai',      lat: 18.917, lng: 72.832, size: 'major', species: 'Tuna longline, pomfret, mixed',  tpd: 100 },
  // Raigad
  { id: 'karanja',    name: 'Karanja',     district: 'Raigad',      lat: 18.874, lng: 72.935, size: 'mid',   species: 'Wild shrimp, squid, cuttlefish', tpd: 25 },
  { id: 'alibag',     name: 'Alibag',      district: 'Raigad',      lat: 18.647, lng: 72.879, size: 'small', species: 'Mixed coastal',                  tpd: 6 },
  { id: 'mora',       name: 'Mora',        district: 'Raigad',      lat: 18.898, lng: 72.936, size: 'small', species: 'Mixed',                          tpd: 5 },
  // Ratnagiri
  { id: 'jaigad',     name: 'Jaigad',      district: 'Ratnagiri',   lat: 17.281, lng: 73.228, size: 'small', species: 'Pomfret, squid',                 tpd: 5 },
  { id: 'dabhol',     name: 'Dabhol',      district: 'Ratnagiri',   lat: 17.583, lng: 73.178, size: 'small', species: 'Pomfret, mixed',                 tpd: 6 },
  { id: 'harnai',     name: 'Harnai',      district: 'Ratnagiri',   lat: 17.811, lng: 73.098, size: 'mid',   species: 'Lobster, pomfret, ribbonfish',   tpd: 15 },
  { id: 'mirkarwada', name: 'Mirkarwada',  district: 'Ratnagiri',   lat: 17.001, lng: 73.273, size: 'major', species: 'Pomfret, lobster, squid, mackerel', tpd: 30 },
  // Sindhudurg
  { id: 'vijaydurg',  name: 'Vijaydurg',   district: 'Sindhudurg',  lat: 16.560, lng: 73.338, size: 'small', species: 'Lobster, crab, mixed',           tpd: 4 },
  { id: 'devgad',     name: 'Devgad',      district: 'Sindhudurg',  lat: 16.380, lng: 73.378, size: 'mid',   species: 'Lobster, octopus, pomfret',      tpd: 12 },
  { id: 'achara',     name: 'Achara',      district: 'Sindhudurg',  lat: 16.187, lng: 73.459, size: 'small', species: 'Mixed',                          tpd: 4 },
  { id: 'malvan',     name: 'Malvan',      district: 'Sindhudurg',  lat: 16.060, lng: 73.465, size: 'mid',   species: 'Octopus, squid, lobster',        tpd: 12 },
  { id: 'vengurla',   name: 'Vengurla',    district: 'Sindhudurg',  lat: 15.865, lng: 73.633, size: 'small', species: 'Mixed',                          tpd: 4 },
];

// Outbound infrastructure
export const outbound = [
  { id: 'jnpt',       name: 'JNPT / Nhava Sheva',  type: 'Sea port',      lat: 18.950, lng: 72.950, role: 'Reefer containers, 70%+ of exports' },
  { id: 'csmia',      name: 'Mumbai CSMIA',        type: 'Air cargo',     lat: 19.089, lng: 72.868, role: 'Perishable hub, live seafood primary airport' },
  { id: 'pnq',        name: 'Pune Lohegaon (PNQ)', type: 'Air cargo',     lat: 18.582, lng: 73.919, role: 'Limited perishable; secondary air hub' },
  { id: 'purandar',   name: 'Purandar Airport',    type: 'Air cargo',     lat: 18.300, lng: 74.050, role: 'Under construction; ~2028 target' },
];

// Label placement offsets for crowded clusters (in SVG units after projection)
export const labelOffsets = {
  sassoon:    { dx: 10, dy: 4 },
  versova:    { dx: 10, dy: -8 },
  karanja:    { dx: 10, dy: 10 },
  mora:       { dx: 10, dy: 22 },
  csmia:      { dx: 10, dy: -20 },
  jnpt:       { dx: 10, dy: 18 },
  harnai:     { dx: -8, dy: -8 },
  mirkarwada: { dx: -10, dy: 8 },
  devgad:     { dx: -8, dy: -8 },
  malvan:     { dx: -8, dy: 12 },
};

// Cities (context markers)
export const cities = [
  { id: 'nashik',    name: 'Nashik',    lat: 19.997, lng: 73.790 },
  { id: 'aurangabad',name: 'Aurangabad',lat: 19.876, lng: 75.343 },
  { id: 'nagpur',    name: 'Nagpur',    lat: 21.146, lng: 79.088 },
  { id: 'kolhapur',  name: 'Kolhapur',  lat: 16.705, lng: 74.243 },
  { id: 'satara',    name: 'Satara',    lat: 17.685, lng: 73.989 },
  { id: 'pune',      name: 'Pune',      lat: 18.520, lng: 73.856 },
  { id: 'mumbai',    name: 'Mumbai',    lat: 19.076, lng: 72.878 },
];
