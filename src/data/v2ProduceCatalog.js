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

// V2 L5 — Produce visual catalog: SVG/ASCII renderings + size grades + processing diagrams

export const produceItems = [
  {
    id: 'vannamei',
    name: 'Vannamei (Litopenaeus vannamei)',
    scientificName: 'Litopenaeus vannamei',
    aliases: 'Whiteleg shrimp, Pacific white shrimp',
    photoCredit: '— (drop a licensed photo at public/species/vannamei.jpg)',
    photoLicense: 'see public/species/README.md',
    avgWeight: '20-35g (farmed Indian standard)',
    color: 'Pale grey-pink (raw); pink-orange (cooked)',
    countGrades: [
      { count: '13/15', sizeG: '~70g', mtToHKG: '$13-15/kg', use: 'Premium HoReCa' },
      { count: '16/20', sizeG: '~55g', mtToHKG: '$11-13/kg', use: 'Premium retail + HoReCa' },
      { count: '21/25', sizeG: '~42g', mtToHKG: '$9-11/kg', use: 'Retail + cooking' },
      { count: '26/30', sizeG: '~35g', mtToHKG: '$7-9/kg', use: 'Standard retail' },
      { count: '31/40', sizeG: '~28g', mtToHKG: '$6-7/kg', use: 'Foodservice + commodity (our default)' },
      { count: '41/50', sizeG: '~22g', mtToHKG: '$5.5-6.5/kg', use: 'Cooked salad + fillers' },
      { count: '51/60', sizeG: '~18g', mtToHKG: '$5-5.8/kg', use: 'Industrial cooking' },
      { count: '71/90', sizeG: '~12g', mtToHKG: '$4-5/kg', use: 'Pet food + canning' },
    ],
    forms: ['HOSO (head-on shell-on) — 100% baseline', 'HLSO (headless shell-on) — 66%', 'EZP (easy-peel) — 87%', 'PD (peeled deveined) — 88%', 'PDTO (peeled deveined tail-on) — 92%', 'Cooked PDTO — 75%', 'Breaded — 70%'],
    seasonality: 'Year-round farmed; peaks Mar-May + Oct-Dec',
    asciiArt: `
       ___()()___
      /  o     o  \\
     |  )    /  )  |
      \\__\\___/__/
        AP vannamei  31/40 count
    `,
    storageTemp: '-18 to -22°C',
    shelfLifeFrozen: '24 months',
  },
  {
    id: 'pomfret-silver',
    name: 'Silver pomfret (Pampus argenteus)',
    scientificName: 'Pampus argenteus',
    aliases: 'White pomfret, Bombay pomfret',
    photoCredit: '— (drop a licensed photo at public/species/pomfret-silver.jpg)',
    photoLicense: 'see public/species/README.md',
    avgWeight: '300g - 1.5kg',
    color: 'Silver-white skin; white flesh',
    countGrades: [
      { count: '500g+', sizeG: '500-700g', mtToHKG: '$15-18/kg', use: 'Premium GCC retail + HoReCa' },
      { count: '300-500g', sizeG: '300-500g', mtToHKG: '$11-14/kg', use: 'Standard retail' },
      { count: '200-300g', sizeG: '200-300g', mtToHKG: '$8-11/kg', use: 'Foodservice' },
      { count: '<200g', sizeG: '<200g', mtToHKG: '$6-8/kg', use: 'Bulk export + canning' },
    ],
    forms: ['Whole gutted (WG) — 92%', 'Whole round (WR) — 100%', 'Fillet skinless — 45%', 'Steak — 60%'],
    seasonality: 'Aug-Feb peak in Konkan landings; June-July trawl ban excludes',
    asciiArt: `
        ____
       /    \\
      | () o |
       \\____/
       <vvv>
       Pomfret 500g+ grade
    `,
    storageTemp: '-25°C (premium air-export); -18°C (commodity)',
    shelfLifeFrozen: '12 months whole; 8 months fillet',
  },
  {
    id: 'lobster-spiny',
    name: 'Spiny lobster (Panulirus homarus / P. polyphagus)',
    scientificName: 'Panulirus homarus',
    aliases: 'Indian rock lobster, Konkan lobster',
    photoCredit: '— (drop a licensed photo at public/species/lobster-spiny.jpg)',
    photoLicense: 'see public/species/README.md',
    avgWeight: '300g - 1.5kg',
    color: 'Brown-green carapace with white spots',
    countGrades: [
      { count: 'A grade', sizeG: '500-650g', mtToHKG: '$28-34/kg live', use: '5-star HoReCa HK/SG/Tokyo' },
      { count: 'B grade', sizeG: '650-850g', mtToHKG: '$30-36/kg live', use: 'Premium HoReCa' },
      { count: 'C grade', sizeG: '850g+', mtToHKG: '$33-40/kg live', use: 'Ultra-premium' },
      { count: 'Frozen tail', sizeG: '120-200g tail', mtToHKG: '$22-26/kg', use: 'When live not feasible' },
    ],
    forms: ['LIVE (premium $28-40/kg)', 'Frozen whole — 95%', 'Frozen tail — 38% recovery', 'Cooked tail — 30% recovery'],
    seasonality: 'Nov-Feb premium catch (spawning excluded); Year-round availability with seasonal premium',
    asciiArt: `
        ()()
       /    \\
      |  __  |
       \\____/
       /||||\\
      | \\__/ |
       \\____/
       Konkan spiny lobster
    `,
    storageTemp: 'Live: 10-14°C oxygenated tank; Frozen: -25°C',
    shelfLifeLive: '24-48 hr door-to-door',
  },
  {
    id: 'mudcrab',
    name: 'Mud crab (Scylla serrata)',
    scientificName: 'Scylla serrata',
    aliases: 'Mangrove crab, Sundarbans crab',
    photoCredit: '— (drop a licensed photo at public/species/mudcrab.jpg)',
    photoLicense: 'see public/species/README.md',
    avgWeight: '500g - 1.5kg',
    color: 'Greyish-green carapace',
    countGrades: [
      { count: '1kg+ female (eggs)', sizeG: '1000-1500g', mtToHKG: '$18-22/kg live', use: 'CNY HK/SG premium' },
      { count: '700-1000g', sizeG: '700-1000g', mtToHKG: '$15-18/kg live', use: 'Standard premium HoReCa' },
      { count: '500-700g', sizeG: '500-700g', mtToHKG: '$12-15/kg live', use: 'Mid-tier' },
    ],
    forms: ['LIVE (only premium)', 'Frozen whole rare — usually live'],
    seasonality: 'CNY (Jan-Feb) is +30% peak; Sundarbans year-round',
    asciiArt: `
       O    O
        \\  /
      <==[]==>
        /  \\
       /    \\
       Sundarbans mud crab female
    `,
    storageTemp: 'Live: 18-22°C circulating saltwater (rubber-banded claws)',
    shelfLifeLive: '22-28 hr door-to-door',
  },
  {
    id: 'octopus',
    name: 'Octopus (Octopus aegina + O. cyanea)',
    scientificName: 'Octopus aegina / O. cyanea',
    aliases: 'Konkan octopus, Lakshadweep octopus',
    photoCredit: '— (drop a licensed photo at public/species/octopus.jpg)',
    photoLicense: 'see public/species/README.md',
    avgWeight: '500g - 3kg',
    color: 'Reddish-brown (live); pale grey-pink (cooked)',
    countGrades: [
      { count: 'T1 large', sizeG: '2-3 kg', mtToHKG: '$10-12/kg cooked', use: 'Spain HoReCa premium' },
      { count: 'T2 medium', sizeG: '1-2 kg', mtToHKG: '$8.5-10/kg cooked', use: 'Standard EU retail' },
      { count: 'T3 small', sizeG: '500-1000g', mtToHKG: '$7-8.5/kg cooked', use: 'Bulk + canning' },
    ],
    forms: ['Whole frozen — 100%', 'Cleaned + cooked + sliced — 78%', 'Tentacles only — 65%'],
    seasonality: 'Year-round Konkan + Lakshadweep; peak Mar-Aug',
    asciiArt: `
        ___
       /   \\
      | o o |
       \\___/
      |/|||\\|
      | | | |
      Octopus (cleaned + cooked + sliced)
    `,
    storageTemp: '-22°C (frozen)',
    shelfLifeFrozen: '18 months',
  },
  {
    id: 'tuna-yellowfin',
    name: 'Yellowfin tuna (Thunnus albacares)',
    scientificName: 'Thunnus albacares',
    aliases: 'Lakshadweep yellowfin, Pole-and-line tuna',
    photoCredit: '— (drop a licensed photo at public/species/tuna-yellowfin.jpg)',
    photoLicense: 'see public/species/README.md',
    avgWeight: '15-80kg',
    color: 'Deep red flesh; iridescent silver skin',
    countGrades: [
      { count: 'Sashimi A', sizeG: '40kg+ whole; saku block 2x3x10cm', mtToHKG: '$22-28/kg saku', use: 'Tokyo Toyosu sashimi' },
      { count: 'Sashimi B', sizeG: '20-40kg', mtToHKG: '$17-22/kg saku', use: 'Japan retail + USA premium poke' },
      { count: 'CO-treated saku', sizeG: 'block', mtToHKG: '$14-18/kg', use: 'USA mass-market sashimi (banned in EU)' },
      { count: 'Skipjack canning grade', sizeG: 'whole', mtToHKG: '$3-4/kg', use: 'Thai canners' },
    ],
    forms: ['Whole round (WR)', 'GG (gilled-gutted)', 'Saku block', 'Loin', 'Steak', 'CO-treated loin'],
    seasonality: 'Lakshadweep year-round; peaks Apr-Sep',
    asciiArt: `
       _____________
      /             \\
      | () |   ====>
      \\_____________/
       v v v v v
       Yellowfin tuna (40kg+ for saku)
    `,
    storageTemp: 'Sashimi: -55 to -60°C; Standard frozen: -25°C',
    shelfLifeFrozen: 'Sashimi 2 yr at -60°C; standard 12 mo',
  },
  {
    id: 'cuttlefish',
    name: 'Cuttlefish (Sepia spp.)',
    scientificName: 'Sepia pharaonis',
    aliases: 'Pharaoh cuttlefish',
    photoCredit: '— (drop a licensed photo at public/species/cuttlefish.jpg)',
    photoLicense: 'see public/species/README.md',
    avgWeight: '300g - 2kg',
    color: 'Mottled brown (live); white (cleaned)',
    countGrades: [
      { count: 'U/5', sizeG: '1.5kg+', mtToHKG: '$8-10/kg', use: 'Spain + Italy HoReCa' },
      { count: '5/8', sizeG: '600-1500g', mtToHKG: '$6.5-8/kg', use: 'Standard EU + Japan' },
      { count: '8/14', sizeG: '300-600g', mtToHKG: '$5-6.5/kg', use: 'Bulk + canning' },
    ],
    forms: ['Whole cleaned (W&G) — 75%', 'Tubes — 65%', 'Tentacles — 25%', 'Rings + tentacles combo — 90%'],
    seasonality: 'Year-round Konkan; peaks Sep-Apr',
    asciiArt: `
        ____
       /    \\__
      |      _>
       \\___/
       /||||\\
       Cuttlefish (cleaned tube + tentacles)
    `,
    storageTemp: '-22°C',
    shelfLifeFrozen: '18 months',
  },
];

export const processingFlow = [
  { stage: '1. Receive at dock', activity: 'Boat → ice within 20 min; QC reject visible damage' },
  { stage: '2. Wash + grade', activity: 'Cold water rinse; manual + mechanical grading by count' },
  { stage: '3. De-head (shrimp)', activity: 'Manual or mechanical; yield 66% HOSO→HLSO' },
  { stage: '4. De-shell (PD/PDTO)', activity: 'Manual; yield 88% HLSO→PD' },
  { stage: '5. Antibiotic + micro test', activity: 'ELISA screen <4 hr; LC-MS/MS confirmation if positive' },
  { stage: '6. IQF freeze', activity: 'Air-blast tunnel -35°C; 8-15 min residence by product' },
  { stage: '7. Glaze + pack', activity: 'Water spray glaze 8-12%; LDPE inner + corrugate outer' },
  { stage: '8. Metal detect', activity: 'Fe 1.2mm / nFe 1.8mm / SS 2.5mm sensitivity' },
  { stage: '9. Cold storage', activity: '-20°C ±2°C; FIFO; 9 sensors per 200MT room' },
  { stage: '10. Container stuff', activity: 'Reefer pre-cooled -25°C; stuffed within 30 min; sealed' },
];

export const yieldChart = [
  { product: 'Vannamei HOSO → HLSO', yieldPct: 66 },
  { product: 'Vannamei HLSO → PD', yieldPct: 88 },
  { product: 'Vannamei PD → PDTO', yieldPct: 92 },
  { product: 'Vannamei → Cooked PDTO', yieldPct: 55 },
  { product: 'Pomfret whole → Fillet', yieldPct: 45 },
  { product: 'Pomfret whole → Steak', yieldPct: 60 },
  { product: 'Lobster live → Frozen tail', yieldPct: 38 },
  { product: 'Lobster → Cooked tail', yieldPct: 30 },
  { product: 'Octopus raw → Cleaned cooked', yieldPct: 78 },
  { product: 'Squid raw → Tubes+tentacles', yieldPct: 90 },
  { product: 'Cuttlefish raw → Whole cleaned', yieldPct: 75 },
  { product: 'Tuna whole → Saku block', yieldPct: 62 },
];
