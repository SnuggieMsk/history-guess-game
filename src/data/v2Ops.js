// V2 — Ops & Quality Playbook data

export const ccps = [
  {
    id: 1, name: 'Receiving temperature', hazard: 'Biological (microbial growth)',
    target: 'Core temp ≤ 2°C on arrival', limit: 'Core > 6°C = reject',
    monitoring: 'Per-lot thermocouple probe; 3 readings per consignment',
    action: 'Reject to by-product or supplier credit; blacklist repeat offenders',
  },
  {
    id: 2, name: 'Sanitizer concentration', hazard: 'Chemical residue + biological',
    target: 'Free-chlorine 5-10 ppm; peracetic acid 50-80 ppm',
    limit: 'Outside ±2 ppm band = stop line',
    monitoring: 'DPD colorimetric every 2 hours; log in QC book',
    action: 'Re-dose; retest; if 2 consecutive fails, sanitation audit',
  },
  {
    id: 3, name: 'IQF freezing end-point', hazard: 'Biological (microbial growth)',
    target: 'Product core ≤ -18°C at tunnel exit',
    limit: 'Core > -15°C = cycle back',
    monitoring: 'Exit thermocouple per 15 min sample; weekly data-logger calibration',
    action: 'Recycle lot; investigate belt speed + air temp',
  },
  {
    id: 4, name: 'Metal detection', hazard: 'Physical (Fe/nFe/SS contamination)',
    target: 'Detects Fe 1.2 mm, non-Fe 1.8 mm, SS 2.5 mm',
    limit: 'Any reject > 5/hr triggers investigation',
    monitoring: 'Test cards every 60 min (Fe, nFe, SS); full MD spec daily',
    action: 'Stop line; traceback to inbound lot; magnetic + sieve re-check',
  },
  {
    id: 5, name: 'Container stuffing + seal', hazard: 'Physical + temperature abuse',
    target: 'Container at -25°C pre-cool; stuffed within 30 min; seal applied',
    limit: 'Stuffing > 45 min OR seal missed = hold',
    monitoring: 'Data-logger placed inside; temp + door-open log',
    action: 'Re-cool if >-20°C; re-seal with documented incident',
  },
];

export const antibioticScreen = [
  { analyte: 'Chloramphenicol (CAP)',         method: 'ELISA (Neogen/Euroclone)', lod: '0.1 ppb', action: '0.1 ppb (zero tolerance EU/US)', testPct: 100 },
  { analyte: 'Nitrofuran metabolites (AOZ, AMOZ, SEM, AHD)', method: 'ELISA', lod: '0.5 ppb', action: '0.5 ppb EU / 1 ppb US', testPct: 100 },
  { analyte: 'Oxytetracycline',               method: 'ELISA',                     lod: '25 ppb', action: '100 ppb EU / 200 ppb JP', testPct: 40 },
  { analyte: 'Sulfonamides',                  method: 'ELISA',                     lod: '10 ppb', action: '100 ppb EU',                testPct: 30 },
  { analyte: 'Enrofloxacin / Ciprofloxacin',  method: 'LC-MS/MS',                  lod: '0.5 ppb', action: 'Zero (aquaculture)',        testPct: 100 },
  { analyte: 'Malachite Green / LMG',         method: 'ELISA + LC-MS/MS confirm',  lod: '0.5 ppb', action: 'Zero',                      testPct: 100 },
  { analyte: 'Crystal Violet / LCV',          method: 'ELISA',                     lod: '0.5 ppb', action: 'Zero',                      testPct: 30 },
];

export const microTests = [
  { target: 'Aerobic Plate Count (APC)', method: 'ISO 4833-1', limit: '< 5×10⁵ CFU/g' },
  { target: 'E. coli',                   method: 'ISO 16649-2', limit: '< 10 CFU/g' },
  { target: 'Salmonella',                method: 'ISO 6579-1', limit: 'Absent in 25 g' },
  { target: 'Vibrio parahaemolyticus',   method: 'ISO/TS 21872-1', limit: 'Absent in 25 g' },
  { target: 'Vibrio cholerae',           method: 'ISO/TS 21872-1', limit: 'Absent in 25 g' },
  { target: 'Listeria monocytogenes',    method: 'ISO 11290-1', limit: 'Absent in 25 g (RTE only)' },
  { target: 'Histamine (tuna)',          method: 'HPLC / ELISA', limit: '< 100 ppm EU / < 50 ppm JP' },
];

export const coldChainSops = [
  { stage: 'Dock → ice', target: '<45 min', note: 'Shell ice 1:1 w/w; insulated pre-chilled crate; bonus-linked to boat owner' },
  { stage: 'Dock hold', target: '<35 min post-auction', note: 'Re-ice every 20 min if ambient > 6°C' },
  { stage: 'Truck load', target: 'Reefer -2°C pre-cooled 60 min', note: 'Telematics log every 5 min; cloud upload' },
  { stage: 'Transit', target: '-2 to 0°C core', note: 'Konkan 150 km = 4-6 hr drive; AP 800 km = 14-16 hr' },
  { stage: 'Plant arrival', target: 'Core ≤ 2°C, within 40 min to receiving bay', note: 'QC reject at > 6°C core' },
  { stage: 'Processing hall', target: '8-10°C chest height, RH < 75%', note: 'HVAC monitored continuously; alarm at 12°C' },
  { stage: 'IQF tunnel', target: '-35 to -40°C air', note: '8 min vannamei 31/40; 10 min octopus; 15 min tuna saku' },
  { stage: 'Cold storage', target: '-20°C ± 2°C', note: '9 data loggers per 200 MT room; 4 air changes/hr' },
];

export const labEquipment = [
  { item: 'HPLC-MS/MS (Agilent 1290/6495 or equivalent)', capexL: 45, role: 'Antibiotic confirmation + histamine' },
  { item: 'ELISA reader + washer + incubator',            capexL:  6, role: 'Rapid antibiotic screen' },
  { item: 'Microbiology setup (incubators, laminar flow, autoclave)', capexL: 12, role: 'Micro testing' },
  { item: 'AAS / ICP-MS (for heavy metals)',              capexL: 18, role: 'Hg, Cd, Pb — critical for tuna' },
  { item: 'Glassware, media, consumables (Y1)',           capexL:  4, role: 'Operating' },
];

export const labAccreditation = {
  target: 'NABL ISO/IEC 17025',
  timeline: '12-18 months from start',
  costRange: '₹8-14 L incl. consultants, pre-assessment, documentation',
  note: 'Without NABL, EU importers require external lab re-testing at ₹3,500+/sample — ~100 samples/week in peak season.',
};

export const failureModes = [
  { mode: 'CAP positive on ELISA', trigger: 'Any inbound lot', response: 'Immediate hold; LC-MS/MS confirm <24 hr; if positive, reject + supplier credit + audit the source pond', owner: 'QC Head' },
  { mode: 'Reefer temp excursion > 6°C for > 30 min', trigger: 'Data-logger alert', response: 'Priority reroute; yield test on arrival; book loss if A→B downgrade', owner: 'Cold-chain mgr' },
  { mode: 'APC > 10⁶ CFU/g on exit sample', trigger: 'Lot test', response: 'Reprocess if spec allows; else cooking line; RCA within 48 hr', owner: 'QC + Production' },
  { mode: 'Metal detector rejects > 5/hr', trigger: 'Detector log', response: 'Stop line; trace inbound; magnetic + sieve re-check', owner: 'Production Head' },
  { mode: 'Customer complaint (decomposition / quality)', trigger: 'Post-shipment', response: '48-hr retention sample analysis; RCA; credit negotiation; process change if systemic', owner: 'QC Head + MD' },
  { mode: 'Pre-shipment USFDA / EU rejection risk flag', trigger: 'Internal pre-check', response: 'Hold lot; divert to lower-spec market (GCC / SEA); document rejection in supplier file', owner: 'Compliance lead' },
];

export const waterEffluent = {
  intake: 'Dedicated borewell + Purandar municipal backup',
  useRate: '18-25 L per kg finished product',
  y3DailyDemand: '250 m³/day',
  zldStages: ['Equalisation', 'Primary screen', 'DAF', 'MBR biological', 'RO', 'MEE evaporator', 'Recycled water'],
  zldCapex: '₹2.2 cr',
  zldOpex: '₹0.25/kL recovered',
  recoveryTarget: '95% by Y2',
};
