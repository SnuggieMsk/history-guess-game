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

// V2 — PMMSY DPR Skeleton

export const dprChapters = [
  {
    id: 1, title: 'Executive Summary',
    sections: [
      'Company overview, promoters, entity structure',
      'Project concept (Konkan Seafoods — live seafood + MSC tuna)',
      'Location (3-ac Purandar, Pune dist.)',
      'Total project cost (₹40 cr); means of finance (promoter ₹14 + TL ₹16 + WC ₹10 + subsidy ₹5 cr headline)',
      'Key financials snapshot (5-yr revenue, EBITDA, PAT, IRR range 10-28%)',
      'Risks + mitigations (top 5)',
      'Seeking PMMSY capex subsidy ₹5.5-6.5 cr (component-wise)',
    ],
  },
  {
    id: 2, title: 'Promoters, Legal Structure & Credentials',
    sections: [
      'Promoter(s) profile + CV + past businesses',
      'Company registration (ROC, PAN, TAN, IEC, GST)',
      'Professional team (CEO, COO, CFO) — credentials + roles',
      'Advisors (QC, cert, export-ops); bankers; auditors',
      'Certifications track record, if any',
    ],
  },
  {
    id: 3, title: 'Industry Overview & Market Analysis',
    sections: [
      'India seafood exports FY26 snapshot (₹72,325 cr, ~19 lakh MT)',
      'Species-wise value breakdown (vannamei 62%, tuna, cephalopods, etc.)',
      'Top 10 destinations by value',
      'Maharashtra coastline + Konkan landings context',
      'Global gaps (octopus Morocco crunch, MSC premium, live lobster Asia)',
      'USA tariff + India-UK CETA + India-EU FTA status',
      'Market size projections FY27-FY31',
    ],
  },
  {
    id: 4, title: 'Project Description',
    sections: [
      'Thesis: Option B + C (live-seafood + MSC tuna) with vannamei filler',
      '3-pillar revenue architecture (Pillar B + C + Filler)',
      '16-species portfolio with margin bands',
      'Technology: HACCP-grade plant + IQF + RAS live tanks + NABL lab',
      'Sustainability positioning (MSC Lakshadweep + ZLD + solar)',
      'Site selection justification (Purandar D-zone vs coastal alternatives)',
    ],
  },
  {
    id: 5, title: 'Site, Civil & Building Infrastructure',
    sections: [
      '3-acre site (Purandar taluka, Pune district); lat/lng + cadastral reference',
      'Access roads + utility availability + water source',
      'Site layout drawing (₹-coded zones)',
      'Civil specs: HACCP-grade floor, walls, ceiling, drainage',
      'Building plan approvals (Pune ZP)',
      'Environmental clearance (MSPCB Consent to Establish + Operate)',
      'Statutory building codes',
    ],
  },
  {
    id: 6, title: 'Plant Machinery & Equipment',
    sections: [
      'IQF tunnel (900 kg/hr, air-blast, NH3 refrigerant)',
      'Plate freezer (dedicated for tuna saku)',
      'Cold storage 2×150 MT @ -20°C (NH3)',
      'Grading + conveyor + de-heading + de-shelling lines',
      'Metal detectors (2), weighing, packing',
      'Ammonia plant + safety + PESO compliance',
      'DG sets (350 kVA + 60 kVA dedicated live-hold backup)',
      'Solar PV 1.2 MWp + grid-tied inverters + net-metering',
      'Water: borewell + RO + softening',
      'Effluent: ZLD train (equalisation → DAF → MBR → RO → MEE)',
      'RAS live tanks 6 units + O2 backup',
      'Lab: HPLC-MS/MS + ELISA + AAS + micro (NABL spec)',
      'Reefer trucks 4 + chilled vans 6',
    ],
  },
  {
    id: 7, title: 'Raw Material Sourcing & Value Chain',
    sections: [
      'Konkan landing centres with named aggregators (Mirkarwada, Harnai, Devgad, Malvan, Karanja)',
      'AP farm belt (WG + EG + Nellore) + FPO + KCC structure',
      'Lakshadweep pole-and-line tuna (LCMF MoU + boat-upgrade scheme)',
      'WB Sundarbans mud crab (separate handling)',
      'Y3 tonnage allocation by node (with VERIFY flags)',
      'First-mile cold chain spec + SOPs',
      'Value chain cost stack ₹/kg (vannamei HLSO 31/40 example)',
      'Yield recoveries per species',
    ],
  },
  {
    id: 8, title: 'Buyer Strategy & Export Markets',
    sections: [
      '7 target markets (HK, SG, JP, ES, US, GCC, CN) with named buyers',
      'Entry sequence Y1-Y5 by trade fair and regulatory gate',
      'Concentration discipline (<18% single buyer by Y3)',
      'Credit terms by market',
      'RoDTEP + EPCG + CETA exploitation',
    ],
  },
  {
    id: 9, title: 'Certifications & Compliance',
    sections: [
      'Mandatory (MPEDA, HACCP, FSSAI, Factory Act, MSPCB, PESO)',
      'Destination regulatory (USFDA, EU, JP MHLW, CN GACC, HK AFCD, SG SFA)',
      'Premium (BAP, ASC, MSC CoC + Lakshadweep fishery co-funding, BRC, IFS, FSSC 22000, Halal, Sedex, ISO 14001)',
      'Y1-Y5 certification roadmap',
      'Annual recurring cert cost ₹28-35 L; Y1-Y3 one-off ₹85-120 L',
      'NABL ISO/IEC 17025 lab accreditation path',
    ],
  },
  {
    id: 10, title: 'Quality, SOPs & Food Safety',
    sections: [
      '5 CCPs (receiving temp, sanitizer, IQF endpoint, metal detection, container seal)',
      'Cold chain SOPs stage-by-stage with targets + action limits',
      'Antibiotic screening matrix (7 analytes with LOD + action)',
      'Micro testing (APC, E. coli, Salmonella, Vibrio, Listeria, Histamine)',
      'Pond-/boat-level traceability (RFID + batch ID + QR)',
      'Retention samples (1 kg per lot × 6 months)',
      'Failure-mode response table',
    ],
  },
  {
    id: 11, title: 'Live Cargo Operations',
    sections: [
      'Species-specific handling (lobster, mud crab, pomfret)',
      'Packing protocol (purge + cool-down + EPS + gel-pack + seaweed bedding)',
      'Carrier relationships (Emirates, Qatar, Lufthansa, SG)',
      'AQCS + MPEDA + destination permit 72-hr window',
      'Per-shipment cost structure + insurance',
      'Mortality curves by transit time',
      'Ramp cadence Y1-Y4',
    ],
  },
  {
    id: 12, title: 'Organization & HR',
    sections: [
      'Org chart Y3 (leadership 6, middle mgmt 14, workforce 152)',
      'Monthly payroll ~₹52 L = ₹6.2 cr/yr',
      'Recruitment channels (Mahila Mandals, ITI Pune, Konkan anchor-crew)',
      'Wage bands + benefits (PF+ESI Day 1, canteen, hostel, crèche, ESOP)',
      'Attrition targets (Y1: 28% → Y3: 12%)',
      'Women workforce 70% on line',
      'Training + safety + yield bonuses',
    ],
  },
  {
    id: 13, title: 'Environmental & Social Impact',
    sections: [
      'ZLD effluent treatment (95% water recovery by Y2)',
      'Solar PV cost floor + carbon reduction',
      'Sustainability certifications (MSC + BAP)',
      'Community engagement (Konkan co-op partnerships; Mahila Mandal women workforce)',
      'EIA summary',
      'CSR commitments + Sedex',
    ],
  },
  {
    id: 14, title: 'Financial Projections',
    sections: [
      '5-yr P&L (bear/base/bull scenarios)',
      'Cash flow statement',
      'Balance sheet evolution',
      'Working capital (55-70 day cycle)',
      'DSCR walkthrough Y1-Y5',
      'Sensitivity analysis (combined shock)',
      'Project IRR 10-28%, central 17-19%',
      'Kill conditions',
    ],
  },
  {
    id: 15, title: 'Implementation Schedule & Milestones',
    sections: [
      '36-month phased implementation',
      'Pre-construction (M-6 to M0): DPR, loan, land, permits',
      'Construction (M1-M9): civil, equipment, utilities',
      'Commissioning (M9-M12): trials, HACCP, MPEDA, first trial export',
      'Y1 operations (M13-M24): GCC/CN/SG revenue, USFDA prep',
      'Y2 expansion (M25-M36): value-added, USFDA approval, EU establishment',
      'Critical-path milestones flagged',
    ],
  },
  {
    id: 16, title: 'Subsidy & Incentive Application',
    sections: [
      'PMMSY component-wise subsidy request (₹5.5-6.5 cr)',
      'PMKSY cold-chain infra (₹2.5-3.0 cr) — partition to avoid double-dip',
      'MNRE solar',
      'NABARD AIF interest subvention',
      'EPCG + RoDTEP',
      'Maharashtra Industrial Policy 2024 benefits',
    ],
  },
  {
    id: 17, title: 'Risk Register & Mitigations',
    sections: [
      'Top 12 risks by L×I score',
      'Market, operational, regulatory, financial, ESG risk categories',
      'Mitigation wired into operating plan',
      '5 kill conditions',
      'Insurance coverage (marine, plant, live-cargo, D&O)',
      'Business continuity plan',
    ],
  },
  {
    id: 18, title: 'Appendices',
    sections: [
      'Promoter + team resumes',
      'Market research sources (MPEDA, DGCI&S, FAO, Eurostat, company ARs)',
      'Equipment vendor quotes',
      'Supplier MoUs / LOIs',
      'Buyer LOIs (indicative orders)',
      'Cert body pre-application correspondence',
      'Environmental impact study',
      'Legal opinions',
      'Detailed financial model sheets',
      'Land title + survey',
    ],
  },
];

export const dprSubmissionPath = [
  { step: 1, action: 'Engage PMMSY-empanelled DPR consultant (ask MPEDA Kochi for current list)' },
  { step: 2, action: 'Gather inputs: vendor quotes, supplier LOIs, team CVs, land documents, financial model' },
  { step: 3, action: 'DPR drafting (typically 6-10 weeks, ₹1.5-2.5 L consulting fee)' },
  { step: 4, action: 'DPR internal review + financial model validation with CA + bank feedback' },
  { step: 5, action: 'Submit to State DoF (Commissioner of Fisheries, Taraporevala Aquarium, Mumbai)' },
  { step: 6, action: 'State recommends to Central; Central sanction letter received (typically 6-10 mo)' },
  { step: 7, action: 'Tranche 1 disbursement (post foundation + UC)' },
  { step: 8, action: 'Tranche 2 disbursement (post commissioning + UC)' },
  { step: 9, action: 'Tranche 3 disbursement (post first commercial operation + UC)' },
];

export const supportingDocs = [
  'Audited financial statements (3 yrs of promoter entity or promoter IT returns if individual)',
  'Promoter net worth certificate',
  'Project cost break-up with vendor quotes',
  'Land title documents (lease/owned)',
  'State Pollution Control Board NOC',
  'Factory Act NOC',
  'Power connection feasibility letter',
  'Water availability certificate',
  'Buyer Letters of Intent (LOIs) — minimum 3-5',
  'Supplier Letters of Intent / MoUs',
  'Techno-Economic Viability (TEV) report from bank',
  'SWOT + risk register',
  'Environmental impact statement',
];
