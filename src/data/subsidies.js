// Government subsidy and incentive stack relevant to a Maharashtra-Purandar
// seafood processing & export business. All schemes verified for FY26-27 cycle.

export const centralSchemes = [
  {
    scheme: 'Pradhan Mantri Matsya Sampada Yojana (PMMSY)',
    ministry: 'Department of Fisheries, Ministry of FAH&D',
    outlay: '₹20,050 cr (5-yr); ₹2,500 cr FY27',
    benefits: [
      'Capital subsidy 40% (general) / 60% (SC/ST/women) on processing units',
      'Cold storage / ice plants — 35-40% capital subsidy',
      'Reefer transport vehicles — 40% capital subsidy',
      'Seaweed cultivation, ornamental fishery, deep-sea fishing — special slabs',
      'Insurance premium subsidy for fishers',
    ],
    relevance: 'PRIMARY — covers ~₹450 lakh of our planned capex',
    applicationProcess: 'State Fisheries Dept → MPEDA endorsement → DoF sanction',
    typicalTimeline: '6-9 months',
  },
  {
    scheme: 'PMKSY (Pradhan Mantri Kisan Sampada Yojana — Cold Chain component)',
    ministry: 'Ministry of Food Processing Industries (MoFPI)',
    outlay: '₹4,600 cr (current cycle)',
    benefits: [
      'Grant 35% (general areas) / 50% (NE/Hilly/ITDP)',
      'Max grant ₹10 cr per project on integrated cold chain',
      'Components: pre-cooling, IQF, cold storage, reefer trucks, processing',
      'Min 50 MT cold storage + IQF/blast freezer required',
    ],
    relevance: 'PRIMARY — covers cold-chain capex up to ₹10 cr ceiling',
    applicationProcess: 'MoFPI portal → DPR appraisal → grant in 3 tranches',
    typicalTimeline: '8-12 months',
  },
  {
    scheme: 'Mega Food Park / Agri-Processing Cluster (AIF / APEDA)',
    ministry: 'MoFPI / Ministry of Agriculture',
    outlay: 'AIF ₹1 lakh cr (interest subvention)',
    benefits: [
      '3% interest subvention on term loans up to ₹2 cr',
      'Credit guarantee fee covered for MSMEs',
      'Bonus: 25% capital subsidy if located in mega-food park',
    ],
    relevance: 'SECONDARY — interest subvention applies to working capital + first-tranche term loan',
    applicationProcess: 'NABARD-empanelled banks (SBI, ICICI, HDFC, BoB)',
    typicalTimeline: '60-90 days',
  },
  {
    scheme: 'RoDTEP (Remission of Duties and Taxes on Exported Products)',
    ministry: 'Department of Commerce',
    outlay: '₹15,000+ cr/yr',
    benefits: [
      'Refund of embedded central + state duties not refunded under GST',
      'Frozen shrimp HS 030617: 1.7% of FOB',
      'Other frozen seafood HS 0303/0305: 1.0-2.5% of FOB',
      'Credit auto-issued in e-scrip; transferable',
    ],
    relevance: 'PRIMARY — adds ~1.5-2.0% to revenue line as recurring benefit',
    applicationProcess: 'ICEGATE auto-claim at shipping bill level',
    typicalTimeline: 'Issued monthly with shipping data',
  },
  {
    scheme: 'RoSCTL (Rebate of State and Central Taxes and Levies — apparel; not directly applicable)',
    ministry: 'Department of Commerce',
    outlay: '-',
    benefits: ['Not applicable to seafood — listed for completeness'],
    relevance: 'NOT APPLICABLE',
    applicationProcess: '-',
    typicalTimeline: '-',
  },
  {
    scheme: 'Solar Rooftop Subsidy (MNRE)',
    ministry: 'Ministry of New and Renewable Energy',
    outlay: 'PM Surya Ghar + commercial scheme',
    benefits: [
      'Capital subsidy 25% on commercial solar (up to 1 MW)',
      'Net-metering with MSEDCL (Maharashtra) for excess generation',
      'Accelerated depreciation 40% in Year-1 (income-tax)',
    ],
    relevance: 'PRIMARY — saves ₹95 lakh on planned 1.2 MWp solar install',
    applicationProcess: 'MEDA (Maharashtra Energy Development Agency) channel partner',
    typicalTimeline: '4-6 months',
  },
  {
    scheme: 'NABARD AIF Refinance for Cold Chain',
    ministry: 'NABARD',
    outlay: 'Open-ended',
    benefits: [
      'Term loan up to ₹100 cr at concessional rate',
      '8.5-9.5% interest (vs commercial 11-12.5%)',
      '10-year tenor with 2-yr moratorium',
    ],
    relevance: 'PRIMARY — preferred funding source for ₹14 cr term loan',
    applicationProcess: 'NABARD via primary lender',
    typicalTimeline: '90-120 days',
  },
  {
    scheme: 'MPEDA — Establishment & Quality Upgradation Schemes',
    ministry: 'MPEDA (Marine Products Export Development Authority)',
    outlay: 'Various, ~₹150 cr/yr aggregate',
    benefits: [
      'Up to 30% reimbursement on EU/USFDA upgradation costs',
      '50% support on antibiotic-residue testing equipment',
      'Trade-fair participation reimbursement (Boston Seafood Show, Brussels SENA, China Fisheries)',
      'Brand promotion + buyer-seller meets',
      'NETFISH training subsidy for processing workforce',
    ],
    relevance: 'PRIMARY — accelerates EU/USFDA approval + global buyer access',
    applicationProcess: 'Direct via MPEDA Mumbai regional office',
    typicalTimeline: '60-180 days by component',
  },
  {
    scheme: 'EPCG (Export Promotion Capital Goods)',
    ministry: 'DGFT',
    outlay: 'Open',
    benefits: [
      'Zero-duty import of capital equipment with 6× export obligation in 6 yrs',
      'Useful for IQF tunnels, lab equipment imported from EU/Japan',
    ],
    relevance: 'SECONDARY — applies to ~₹300-400 lakh of imported equipment',
    applicationProcess: 'DGFT online; 30-45 days',
    typicalTimeline: '30-45 days',
  },
  {
    scheme: 'AEO (Authorised Economic Operator) — Tier-2',
    ministry: 'CBIC / Customs',
    outlay: '-',
    benefits: [
      'Pre-cleared customs at JNPT (saves 24-48 hrs)',
      'Lower bank guarantee requirement',
      'Direct port delivery (DPD) eligibility',
      'Recognised globally — improves buyer trust',
    ],
    relevance: 'PRIMARY — operational efficiency at port',
    applicationProcess: 'CBIC AEO portal; audit-driven',
    typicalTimeline: '4-6 months',
  },
];

export const stateSchemes = [
  {
    scheme: 'Maharashtra Industrial Policy 2024 (Food Processing)',
    benefits: [
      'SGST refund 100% for 7 years (D+ zones) / 5 years (D zones)',
      'Electricity duty 100% exemption for 7 years',
      'Stamp duty 100% exemption on land/loan documents',
      'Capital subsidy 5-7% additional for Mega units (>₹100 cr)',
    ],
    relevance: 'Pune district is typically D zone — SGST + electricity benefits significant',
    applicationProcess: 'MIDC registration → DIC sanction → MoIT approval',
  },
  {
    scheme: 'Maharashtra State Fisheries Department schemes',
    benefits: [
      'Subsidy on landing-centre infra at coastal locations',
      'Boat-owner subsidies cascade to supplier ecosystem',
      'Cluster development support for fish-farmers',
    ],
    relevance: 'Indirect — strengthens supplier ecosystem',
    applicationProcess: 'State DoF Pune / Ratnagiri / Sindhudurg offices',
  },
  {
    scheme: 'Konkan-specific incentives (CIDCO + Konkan Vikas Mahamandal)',
    benefits: [
      'Land at concessional rates in coastal industrial zones (alternative location consideration)',
      'Fisheries cluster development funding',
    ],
    relevance: 'Field-depot rationalisation',
    applicationProcess: 'CIDCO/KVM regional offices',
  },
];

export const subsidyCaptureSummary = {
  capexSubsidyINRlakh: 511,        // sum of capex subsidies in financials.js
  recurringRebatePctRevenue: 1.7,  // RoDTEP weighted
  interestSavingPctTermLoan: 2.5,  // PMMSY/NABARD vs commercial
  effectiveCapexReductionPct: 22,  // 511 / 2330 gross
  paybackImpactMonths: 14,         // months earlier vs no-subsidy case
};
