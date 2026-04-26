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

// V2 — Jargon cheatsheet. An idiot-proof glossary.

export const jargon = [
  { term: 'HLSO', full: 'Headless Shell-On', what: 'Shrimp processed to remove head but keep shell. 66% yield from HOSO.' },
  { term: 'HOSO', full: 'Head-On Shell-On', what: 'Whole shrimp with head + shell. Highest yield reference.' },
  { term: 'PD',   full: 'Peeled and Deveined', what: 'Shrimp with shell + head + vein removed. 88% yield from HLSO.' },
  { term: 'PDTO', full: 'Peeled Deveined Tail-On', what: 'PD with tail segment kept. Premium retail SKU. 92% yield from PD.' },
  { term: 'IQF',  full: 'Individually Quick-Frozen', what: 'Frozen as individual pieces (not blocks) at -35 to -40°C air-blast.' },
  { term: 'CCP',  full: 'Critical Control Point', what: 'Step in HACCP where a hazard can be controlled. 5 CCPs typical for seafood.' },
  { term: 'HACCP', full: 'Hazard Analysis & Critical Control Points', what: 'Food safety system gating all seafood exports.' },
  { term: 'BAP',  full: 'Best Aquaculture Practices', what: 'Certification scheme for farmed shrimp. Used by Walmart, Costco, Whole Foods.' },
  { term: 'ASC',  full: 'Aquaculture Stewardship Council', what: 'Stricter than BAP — environmental + social. Required by Whole Foods, Aldi, Tesco.' },
  { term: 'MSC',  full: 'Marine Stewardship Council', what: 'Wild-catch sustainability certification. +25-35% price premium typical.' },
  { term: 'MSC CoC', full: 'MSC Chain of Custody', what: 'Processor-side certification. Links labelled product back to a certified fishery.' },
  { term: 'FIP',  full: 'Fishery Improvement Project', what: 'Halfway house to MSC. Signals to buyers that fishery is improving.' },
  { term: 'RTIT', full: 'Receive-to-Ice Time', what: 'Minutes between fish landing and icing. <45 min target.' },
  { term: 'APC',  full: 'Aerobic Plate Count', what: 'Total aerobic bacteria per gram. Seafood target < 5×10⁵ CFU/g.' },
  { term: 'CFU',  full: 'Colony Forming Units', what: 'Standard microbiology count per gram/mL.' },
  { term: 'LOD',  full: 'Limit of Detection', what: 'Lowest concentration a test can reliably detect. ELISA typical 0.1-0.5 ppb.' },
  { term: 'MRL',  full: 'Maximum Residue Limit', what: 'Legal limit for antibiotic or pesticide residue. e.g. OTC 100 ppb EU, 200 ppb Japan.' },
  { term: 'MBL',  full: 'Marine Based Label', what: 'Pricier retail packaging made to buyer specification.' },
  { term: 'FOB',  full: 'Free On Board', what: 'Seller delivers goods onto the ship. Most common Indian export pricing basis.' },
  { term: 'CIF',  full: 'Cost Insurance Freight', what: 'Seller covers shipping + insurance to destination port.' },
  { term: 'LC',   full: 'Letter of Credit', what: 'Bank-guaranteed payment instrument. LC at sight = cash on docs presentation.' },
  { term: 'OA',   full: 'Open Account', what: 'Seller ships without immediate payment guarantee. Typical 30-90 day terms.' },
  { term: 'SPC',  full: 'Special Purpose Contract', what: 'Farmer forward-contract framework; common in aquaculture advances.' },
  { term: 'FPO',  full: 'Farmer Producer Organisation', what: 'Collective of small farmers, legal entity. Preferred sourcing structure for PMMSY + KCC benefits.' },
  { term: 'KCC',  full: 'Kisan Credit Card', what: 'Govt-subsidised working capital for farmers. 7% vs 11-13% market.' },
  { term: 'RoDTEP', full: 'Remission of Duties & Taxes on Exported Products', what: 'Automatic rebate 0.7-1.7% of FOB for duties embedded in exports.' },
  { term: 'EPCG', full: 'Export Promotion Capital Goods', what: 'DGFT scheme: zero-duty import of capex against export obligation.' },
  { term: 'PMMSY', full: 'Pradhan Mantri Matsya Sampada Yojana', what: 'India\'s flagship fisheries subsidy — 40% capex subsidy on modern plants.' },
  { term: 'PMKSY', full: 'Pradhan Mantri Kisan Sampada Yojana', what: 'MoFPI scheme — 35-50% capex subsidy on integrated cold chain.' },
  { term: 'MPEDA', full: 'Marine Products Export Development Authority', what: 'India\'s seafood export regulator + promoter.' },
  { term: 'MoFPI', full: 'Ministry of Food Processing Industries', what: 'Administers PMKSY + PLI schemes.' },
  { term: 'MoFAHD', full: 'Ministry of Fisheries, Animal Husbandry & Dairying', what: 'Administers PMMSY.' },
  { term: 'DGFT', full: 'Directorate General of Foreign Trade', what: 'Administers IEC, EPCG, RoDTEP.' },
  { term: 'DoF',  full: 'Department of Fisheries', what: 'Under MoFAHD. Runs PMMSY state-level.' },
  { term: 'USFDA', full: 'US Food and Drug Administration', what: 'US regulator. Must register establishment + Prior Notice per shipment.' },
  { term: 'LAAF', full: 'Laboratory Accreditation for Analyses of Foods', what: 'USFDA programme for accepting lab results without independent testing.' },
  { term: 'RASFF', full: 'Rapid Alert System for Food and Feed (EU)', what: 'EU alert network. One RASFF alert = 2-3 year market damage.' },
  { term: 'GACC', full: 'General Administration of Customs of China', what: 'China\'s customs + Regulation 248 (seafood facility registration).' },
  { term: 'CETA', full: 'Comprehensive Economic & Trade Agreement (India-UK 2025)', what: 'Duty-free access on processed seafood to UK — major opportunity.' },
  { term: 'SGST', full: 'State Goods & Services Tax', what: 'State portion of GST. Maharashtra Industrial Policy refunds this for 7 years.' },
  { term: 'NABL', full: 'National Accreditation Board for Testing & Calibration Laboratories', what: 'Indian lab accreditation. ISO/IEC 17025 compliant. Required for EU acceptance of lab reports.' },
  { term: 'ZLD',  full: 'Zero Liquid Discharge', what: 'Effluent treatment that recycles 95%+ water. MPCB mandatory for water-stress districts.' },
  { term: 'TEV',  full: 'Techno-Economic Viability', what: 'Bank-engaged study that validates a project\'s technology + returns. Required for term loan.' },
  { term: 'DSCR', full: 'Debt Service Coverage Ratio', what: 'EBITDA ÷ (principal + interest). Bank minimum typically 1.5×.' },
  { term: 'IRR',  full: 'Internal Rate of Return', what: 'Discount rate that makes NPV zero. Project IRR target 17-19% here.' },
  { term: 'NPV',  full: 'Net Present Value', what: 'Sum of discounted future cash flows. Target NPV positive @ 12% hurdle.' },
  { term: 'WC',   full: 'Working Capital', what: 'Inventory + receivables − payables. Our Y3 target 55-70 days cycle.' },
  { term: 'CC',   full: 'Cash Credit', what: 'Revolving bank facility against inventory + receivables. Our ₹10 cr limit target.' },
  { term: 'CGTMSE', full: 'Credit Guarantee Fund for Micro & Small Enterprises', what: 'Govt guarantee on bank loans up to ₹2 cr for MSMEs.' },
  { term: 'AQCS', full: 'Animal Quarantine & Certification Service', what: 'DADF office that issues live-seafood export permits.' },
  { term: 'LHO',  full: 'Live Human Operator / Live Animal Handler', what: 'Airline cargo service tier for live-animal shipments.' },
  { term: 'AWB',  full: 'Air Waybill', what: 'Cargo shipping document. Must include LHO tag for live animals.' },
  { term: 'DPR',  full: 'Detailed Project Report', what: 'Investor-grade document for PMMSY + bank sanction. 18 chapters typical.' },
  { term: 'PESO', full: 'Petroleum and Explosives Safety Organisation', what: 'Licenses ammonia refrigerant use for IQF + cold storage.' },
  { term: 'MPCB', full: 'Maharashtra Pollution Control Board', what: 'State effluent + emissions regulator.' },
  { term: 'MIDC', full: 'Maharashtra Industrial Development Corporation', what: 'State agency for industrial land + infrastructure.' },
  { term: 'LCMF', full: 'Lakshadweep Cooperative Marketing Federation', what: 'Apex body aggregating Lakshadweep pole-and-line tuna.' },
  { term: 'APSSPA', full: 'AP Shrimp Seed Producers Association', what: 'Industry body for AP hatchery + vannamei seed supply.' },
  { term: 'FSSC 22000', full: 'Food Safety System Certification 22000', what: 'ISO 22000 + PAS 220. Preferred by large international retailers.' },
  { term: 'BRC',  full: 'British Retail Consortium', what: 'UK retailer food safety standard. Gates Tesco, Sainsbury\'s, M&S.' },
  { term: 'IFS',  full: 'International Featured Standards', what: 'German/French retailer food safety standard. Gates Rewe, Carrefour, Metro.' },
  { term: 'Sogo shosha', full: 'Japanese integrated trading house', what: 'Mitsubishi, Maruha Nichiro, Nissui, Kyokuyo, Mitsui. Multi-product global traders.' },
];

export const jargonByGroup = {
  'Product & Processing': ['HOSO','HLSO','PD','PDTO','IQF','CCP','HACCP','MBL','RTIT','APC','CFU'],
  'Pricing & Trade':      ['FOB','CIF','LC','OA','SPC','FPO'],
  'Certifications':       ['BAP','ASC','MSC','MSC CoC','FIP','FSSC 22000','BRC','IFS','NABL'],
  'Standards & Residues': ['LOD','MRL'],
  'Government':           ['MPEDA','MoFPI','MoFAHD','DGFT','DoF','PMMSY','PMKSY','RoDTEP','EPCG','KCC','SGST','MIDC','MPCB','PESO'],
  'Foreign Regulators':   ['USFDA','LAAF','RASFF','GACC','CETA'],
  'Aviation & Logistics': ['AQCS','LHO','AWB'],
  'Finance':              ['TEV','DSCR','IRR','NPV','WC','CC','CGTMSE'],
  'Entities':             ['LCMF','APSSPA'],
  'Other':                ['ZLD','Sogo shosha','DPR'],
};
