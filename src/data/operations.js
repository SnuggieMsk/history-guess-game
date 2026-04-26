// Operations playbook: HR, regulatory, SOPs, buyer profiles, and the
// 36-month implementation roadmap.

export const orgChart = {
  total: 162,           // headcount at Y3
  ceo: { title: 'CEO / Promoter', count: 1, costPerMonthLakh: 4.5 },
  leadership: [
    { title: 'COO (Operations Head)',                      count: 1, costPerMonthLakh: 3.5, role: 'Plant + cold chain + procurement' },
    { title: 'CFO',                                         count: 1, costPerMonthLakh: 3.0, role: 'Finance, treasury, subsidies, audits' },
    { title: 'Head of Sales & BD (Global)',                 count: 1, costPerMonthLakh: 4.0, role: 'EU/US/GCC/Japan buyer relationships' },
    { title: 'Head of QA / QC',                             count: 1, costPerMonthLakh: 2.8, role: 'HACCP, EU/USFDA compliance, lab' },
    { title: 'Head of Sourcing',                            count: 1, costPerMonthLakh: 2.5, role: 'Konkan + AP supplier network' },
    { title: 'Head of HR & Admin',                          count: 1, costPerMonthLakh: 1.8, role: 'Hiring, training, compliance' },
  ],
  middleManagement: [
    { title: 'Plant Manager',                                count: 1, costPerMonthLakh: 1.8 },
    { title: 'Production Supervisors',                       count: 4, costPerMonthLakh: 0.85 },
    { title: 'QC Officers (lab + line)',                     count: 6, costPerMonthLakh: 0.75 },
    { title: 'Cold-chain Manager',                           count: 1, costPerMonthLakh: 1.4 },
    { title: 'Logistics & Customs Manager',                  count: 1, costPerMonthLakh: 1.4 },
    { title: 'Field Sourcing Officers (Konkan, AP)',         count: 5, costPerMonthLakh: 0.85 },
    { title: 'Sales Executives (regional)',                  count: 3, costPerMonthLakh: 1.1 },
    { title: 'Procurement / Vendor Mgmt',                    count: 2, costPerMonthLakh: 0.9 },
    { title: 'Accounts & Finance (incl. GST/RoDTEP)',        count: 4, costPerMonthLakh: 0.8 },
    { title: 'HR Officers',                                  count: 2, costPerMonthLakh: 0.7 },
    { title: 'IT / ERP / Traceability',                      count: 2, costPerMonthLakh: 0.95 },
  ],
  workforce: [
    { title: 'Skilled processing workers (peelers, IQF ops, packers)', count: 90, costPerMonthLakh: 0.22, womenSharePct: 75 },
    { title: 'Helpers / handlers',                                      count: 24, costPerMonthLakh: 0.18, womenSharePct: 40 },
    { title: 'Drivers (reefer + utility)',                              count: 8,  costPerMonthLakh: 0.32, womenSharePct: 0 },
    { title: 'Maintenance technicians (refrigeration, electrical)',     count: 5,  costPerMonthLakh: 0.55, womenSharePct: 0 },
    { title: 'Security & housekeeping (outsourced)',                    count: 0,  costPerMonthLakh: 0,    womenSharePct: 30 },
  ],
};

export const hiringPlaybook = {
  Y1: {
    target: 95,
    recruitmentChannels: [
      'NETFISH (MPEDA training arm) — for processing workers (free certification)',
      'Krishi Vigyan Kendras + ITIs in Pune, Satara, Solapur — helpers + technicians',
      'Konkan-based women SHGs (self-help groups) for processing labor (organised channels)',
      'MIT-WPU, BVB, ICT Mumbai — food-tech / QA graduate hires',
      'LinkedIn + executive search for leadership (sales head, COO)',
    ],
    wages: {
      skilledProcessor: { entry: 14000, year1End: 16500, includesPF: true },
      helper:           { entry: 11000, year1End: 12500, includesPF: true },
      driver:           { entry: 22000, year1End: 25000, includesPF: true },
      qcOfficer:        { entry: 35000, year1End: 42000, includesPF: true },
    },
    benefits: [
      'PF + ESI from Day 1',
      'Onsite mess (subsidised lunch)',
      'Medical insurance (₹2 lakh family floater)',
      'Transport from Pune + nearby villages',
      'Onsite crèche (women workforce retention)',
      'Annual bonus (1 month salary)',
    ],
    trainingInvestmentLakh: 38,
    targetAttritionPct: 18,
  },
  Y3: {
    target: 162,
    expansionFocus: ['Value-add lines (cooking, breading)', 'Sales (3 regional execs)', 'Field sourcing (5 officers)', 'QC scale-up'],
    targetAttritionPct: 12,
  },
};

export const regulatoryChecklist = [
  { authority: 'MPEDA',     license: 'Registration as Processor + Exporter',       leadTime: '60 days', critical: true,  cost: '₹50k' },
  { authority: 'MPEDA',     license: 'EU Approved Establishment (EU Number)',      leadTime: '18-24 months', critical: true, cost: '₹35-50 lakh (lab + audits)' },
  { authority: 'EIA/EIC',   license: 'Recognition as Approved Processor (US, EU)', leadTime: '12-18 months', critical: true, cost: 'Bundled with EU' },
  { authority: 'MPCB',      license: 'Consent to Establish (CtE) + CtO',           leadTime: '90 days', critical: true,  cost: '₹2 lakh + ETP capex' },
  { authority: 'MPCB',      license: 'Hazardous waste authorisation',              leadTime: '60 days', critical: true,  cost: '₹25k' },
  { authority: 'CGWA',      license: 'Groundwater extraction NOC',                 leadTime: '60 days', critical: true,  cost: '₹50k' },
  { authority: 'PESO',      license: 'Ammonia + CO2 storage license',              leadTime: '90 days', critical: true,  cost: '₹2 lakh' },
  { authority: 'FSSAI',     license: 'Central Manufacturing License (Cat 12)',     leadTime: '60 days', critical: true,  cost: '₹15k/yr' },
  { authority: 'CBIC',      license: 'Importer-Exporter Code (IEC)',               leadTime: '7 days',  critical: true,  cost: '₹5k' },
  { authority: 'CBIC',      license: 'AEO Tier-1 → Tier-2',                        leadTime: '6 months → 18 months', critical: false, cost: '₹2 lakh' },
  { authority: 'Customs',   license: 'EPCG license (zero-duty capital goods)',     leadTime: '45 days', critical: false, cost: '₹50k filing' },
  { authority: 'DGFT',      license: 'RoDTEP enrolment',                           leadTime: '15 days', critical: true,  cost: 'Nil' },
  { authority: 'GST Dept',  license: 'GST Registration + LUT (Letter of Undertaking)', leadTime: '15 days', critical: true, cost: 'Nil' },
  { authority: 'Local',     license: 'Building plan, fire NOC, factories act',     leadTime: '60-90 days', critical: true, cost: '₹3 lakh' },
  { authority: 'BAP/ASC',   license: 'Voluntary sustainability certifications',     leadTime: '6-12 months', critical: false, cost: '₹15-25 lakh' },
  { authority: 'BRC/SQF',   license: 'British Retail Consortium / Safe Quality Food', leadTime: '9-12 months', critical: false, cost: '₹10-15 lakh' },
  { authority: 'Halal',     license: 'JAKIM / India Halal Trust certification',     leadTime: '4 months', critical: false, cost: '₹3 lakh' },
];

export const buyerProfilesByMarket = [
  {
    market: 'USA',
    buyerTypes: [
      { segment: 'Club retail (Costco, Sam\'s, BJ\'s)',     value: 'Cooked PD shrimp ring, breaded',    annualVolMT: 'Targets: 200-400 each', pricingPower: 'High' },
      { segment: 'Mass retail (Walmart, Kroger)',           value: 'IQF raw + value-add private label', annualVolMT: 'Targets: 100-300',       pricingPower: 'Very high' },
      { segment: 'Foodservice distributors (Sysco, US Foods)', value: 'Restaurant-spec sizes',          annualVolMT: 'Targets: 50-200',        pricingPower: 'Medium' },
      { segment: 'Importers/traders (Eastern Fish, Pacific Surimi)', value: 'Mixed bulk',               annualVolMT: 'Targets: 100-400',       pricingPower: 'Low (we have leverage)' },
    ],
    paymentTerms: 'L/C 30-60 days, or open account 45-60 days for vetted buyers',
    keyContact: 'Boston Seafood Show (March) is the must-attend trade fair',
  },
  {
    market: 'EU',
    buyerTypes: [
      { segment: 'Discount retail (Lidl, Aldi)',             value: 'Private-label IQF + cooked',        annualVolMT: 'Targets: 100-300', pricingPower: 'Very high' },
      { segment: 'Premium retail (Carrefour, Tesco UK)',     value: 'Branded + private-label premium',   annualVolMT: 'Targets: 80-200',  pricingPower: 'High' },
      { segment: 'HoReCa distributors (Metro, Brakes)',      value: 'Squid rings, octopus, pomfret',     annualVolMT: 'Targets: 50-150',  pricingPower: 'Medium' },
      { segment: 'Spanish cephalopod traders',                value: 'Squid + cuttlefish + octopus',      annualVolMT: 'Targets: 100-250', pricingPower: 'Medium' },
    ],
    paymentTerms: 'Mostly open account 45-60 days; ECGC cover recommended',
    keyContact: 'Brussels Seafood Expo Global (April-May) + Conxemar (Vigo, October)',
  },
  {
    market: 'China',
    buyerTypes: [
      { segment: 'State-owned import enterprises',           value: 'Bulk frozen ribbonfish, vannamei',  annualVolMT: 'Targets: 200-600', pricingPower: 'Very high' },
      { segment: 'Wholesale market players (Guangzhou)',     value: 'Mixed wild + farmed',               annualVolMT: 'Targets: 150-400', pricingPower: 'High' },
      { segment: 'Re-processors',                            value: 'Raw vannamei for further processing', annualVolMT: 'Targets: 200-500', pricingPower: 'Medium' },
    ],
    paymentTerms: 'L/C at sight or 30 days; cautious about credit risk',
    keyContact: 'China Fisheries & Seafood Expo (Qingdao, October) + Shanghai SIFSE',
  },
  {
    market: 'Japan',
    buyerTypes: [
      { segment: 'Trading houses (Mitsui, Mitsubishi, Marubeni)', value: 'Premium black tiger, sashimi tuna', annualVolMT: 'Targets: 30-100', pricingPower: 'Medium' },
      { segment: 'Sushi-grade specialists',                  value: 'CO-treated tuna saku, tiger shrimp',   annualVolMT: 'Targets: 20-60',  pricingPower: 'Low (premium)' },
      { segment: 'Convenience-store suppliers (CVS chain)',   value: 'Cooked shrimp + tempura formats',     annualVolMT: 'Targets: 40-120', pricingPower: 'High' },
    ],
    paymentTerms: 'L/C 30-60 days; Japanese trading houses very reliable',
    keyContact: 'JapanSeafood Show (Tokyo, August)',
  },
  {
    market: 'GCC / Middle East',
    buyerTypes: [
      { segment: 'Premium retail (Spinneys, Carrefour, LuLu)', value: 'Whole pomfret, vannamei retail packs', annualVolMT: 'Targets: 50-150', pricingPower: 'Medium' },
      { segment: 'Hotel suppliers',                            value: 'Live lobster, premium frozen',         annualVolMT: 'Targets: 30-80',  pricingPower: 'Low' },
      { segment: 'Halal certified value-add traders',          value: 'Cooked shrimp, breaded, marinated',    annualVolMT: 'Targets: 40-120', pricingPower: 'Medium' },
    ],
    paymentTerms: 'L/C at sight (UAE/Saudi); avoid open account in tier-2 markets',
    keyContact: 'Gulfood (Dubai, February) + SeafoodEx (Dubai, May)',
  },
  {
    market: 'Singapore + SE Asia',
    buyerTypes: [
      { segment: 'Wholesale markets (Jurong)',                value: 'Live mud crab, vannamei',           annualVolMT: 'Targets: 30-100', pricingPower: 'Medium' },
      { segment: 'Indian-ethnic retail (FairPrice)',          value: 'Fish curry-cut, prawn',             annualVolMT: 'Targets: 20-60',  pricingPower: 'Low' },
      { segment: 'Re-export hub traders',                     value: 'Mixed bulk for SE Asia onward',     annualVolMT: 'Targets: 40-150', pricingPower: 'High' },
    ],
    paymentTerms: 'L/C or DA 30 days',
    keyContact: 'Asia Seafood Expo (Singapore, August)',
  },
];

export const implementationRoadmap = [
  // Pre-construction (M-3 to M0)
  { month: 'M-3', phase: 'Pre-construction', activity: 'Land due diligence, soil test, layout finalisation' },
  { month: 'M-2', phase: 'Pre-construction', activity: 'Incorporation, IEC, MPEDA registration, FSSAI base' },
  { month: 'M-1', phase: 'Pre-construction', activity: 'Term loan sanction (NABARD), PMMSY DPR submission' },
  { month: 'M0',  phase: 'Pre-construction', activity: 'Ground-breaking; place orders for long-lead equipment (IQF, refrigeration)' },
  // Construction (M1-M9)
  { month: 'M1-M3',  phase: 'Construction',  activity: 'Site dev, foundation, ETP construction, civil shell' },
  { month: 'M4-M6',  phase: 'Construction',  activity: 'Cold store fit-out, ammonia plant install, electrical' },
  { month: 'M7-M8',  phase: 'Construction',  activity: 'IQF tunnel + plate freezers commissioning' },
  { month: 'M9',     phase: 'Construction',  activity: 'Solar PV installation; water + utility commissioning' },
  // Commissioning + soft launch (M9-M12)
  { month: 'M9-M10', phase: 'Commissioning', activity: 'Trial runs with frozen vannamei; QC lab calibration' },
  { month: 'M10-M11',phase: 'Commissioning', activity: 'Recruit + train 95 workers; NETFISH training in batches' },
  { month: 'M11-M12',phase: 'Commissioning', activity: 'First domestic sales (B2B traders); EIC pre-audit' },
  // Year 1 (M13-M24)
  { month: 'M13-M15', phase: 'Y1 Operations', activity: 'EIC formal audit; first export shipments to non-EU non-US markets (GCC, SEA)' },
  { month: 'M15-M18', phase: 'Y1 Operations', activity: 'USFDA establishment audit + approval' },
  { month: 'M18-M24', phase: 'Y1 Operations', activity: 'EU establishment audit + approval; ramp to 38% utilisation' },
  // Year 2 (M25-M36)
  { month: 'M25-M30', phase: 'Y2 Expansion',  activity: 'Cooking + breading line install; BAP certification' },
  { month: 'M30-M36', phase: 'Y2 Expansion',  activity: 'EU buyer onboarding; first private-label co-pack contracts' },
];

export const sopHighlights = [
  {
    sop: 'SOP-001 — Receiving & Antibiotic Screening',
    summary: 'Every truckload screened by ELISA (CAP/NFC) within 25 minutes of arrival. Failed batches isolated, returned with audit trail. Pass-rate target: 99.7%.',
    criticality: 'Critical',
  },
  {
    sop: 'SOP-007 — Cold-Chain Temperature Logger Audit',
    summary: 'Every reefer arrival has GPS + temp log downloaded. Excursions >2°C triggers QC review before unloading.',
    criticality: 'Critical',
  },
  {
    sop: 'SOP-014 — IQF Process Validation',
    summary: 'Daily core-temperature spot-check: IQF must achieve -18°C in <2 hours from input. Out-of-spec batches reprocessed.',
    criticality: 'High',
  },
  {
    sop: 'SOP-022 — EU Export Documentation Pack',
    summary: 'Health Certificate, Cat Cert, COO, EU establishment number on every BL. EIC pre-clearance via online portal.',
    criticality: 'High',
  },
  {
    sop: 'SOP-031 — Foreign Material Detection',
    summary: 'Metal detector + X-ray on every packed master carton. Reject + investigation log per incident.',
    criticality: 'High',
  },
  {
    sop: 'SOP-041 — Pest & Sanitation Daily Log',
    summary: 'Daily 5S check + weekly pest control audit. Hourly chemical sanitation in wet-process zones.',
    criticality: 'Medium',
  },
  {
    sop: 'SOP-048 — Recall Procedure',
    summary: 'Mock recall biannually. Trace from buyer → batch → farm in <4 hours.',
    criticality: 'Critical',
  },
];
