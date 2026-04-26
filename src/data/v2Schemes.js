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

// V2 — Government schemes: real capture mechanics

export const centralSchemesV2 = [
  {
    id: 'pmmsy',
    name: 'PMMSY — Pradhan Mantri Matsya Sampada Yojana',
    ministry: 'Dept of Fisheries · MoFAHD',
    mode: '60:40 (CS:State) for Central Sector; 50:50 CSS',
    ourCapture: '₹5.5-6.5 cr',
    disbursalTiming: 'Tranche 1 at foundation, 2 at commissioning, 3 at first commercial ops; full over M10-M28',
    tranches: 3,
    whatPays: ['HACCP-grade civil construction', 'IQF + blast freezing equipment', 'Cold storage', 'Reefer trucks (limited)', 'Laboratory', 'Packaging line'],
    whatDoesnt: ['Land', 'Working capital', 'Pre-op expenses', 'Opex', 'Marketing', 'Most IT/software'],
    applicationSteps: [
      'Hire DPR consultant (PMMSY empanelled; ₹1.5-2.5 L)',
      'DPR to State DoF (Commissioner of Fisheries, Taraporevala Aquarium, Mumbai)',
      'State recommends to Central',
      'Central sanction → tranches flow to state → to us',
      'Each tranche: UC + site visit required',
    ],
    traps: [
      'Must hit correct component codes on DPR (seek experienced consultant)',
      'State must have unspent CS allocation — Maharashtra a medium performer',
      'SC/ST/Women 60% subsidy requires promoter 51%+ and relevant certification',
    ],
  },
  {
    id: 'pmksy',
    name: 'PMKSY — Pradhan Mantri Kisan Sampada Yojana (Integrated Cold Chain)',
    ministry: 'MoFPI',
    mode: '35% general / 50% NE + hilly',
    ourCapture: '₹2.5-3.0 cr',
    disbursalTiming: 'Sanction 8-12 mo; 4 tranches over 18 mo',
    tranches: 4,
    whatPays: ['Cold chain infrastructure', 'Reefer fleet', 'Pack house'],
    whatDoesnt: ['Processing hall (that is PMMSY)', 'Land', 'WC'],
    applicationSteps: [
      'MoFPI portal application',
      'State Nodal (MIDC or MoFPI Area Manager Pune)',
      'DPR linked to PMMSY DPR with partition to avoid double-dip',
    ],
    traps: ['Cannot double-dip PMMSY + PMKSY on same asset line — partition DPR upfront'],
  },
  {
    id: 'mnre',
    name: 'MNRE Rooftop Solar PV',
    ministry: 'MNRE via DISCOM (MSEDCL)',
    mode: '30% up to 3 kW; 20% next 7 kW; beyond 10 kW = net-metering only',
    ourCapture: '₹35-50 L direct + ₹50-80 L AccDep NPV',
    disbursalTiming: 'Through DISCOM rebate post net-metering activation; 6-12 months',
    tranches: 1,
    whatPays: ['Solar PV panels + inverters + BOS for net-metering systems'],
    whatDoesnt: ['Battery storage', 'Captive-only off-grid'],
    applicationSteps: [
      'MNRE-empanelled EPC installs',
      'RE Department inspection',
      'Subsidy flows through DISCOM monthly bill reduction',
    ],
    traps: ['v1 over-stated solar direct subsidy; real capture is via accelerated depreciation + net-metering economics'],
  },
  {
    id: 'nabard-aif',
    name: 'NABARD Agriculture Infrastructure Fund (AIF)',
    ministry: 'NABARD',
    mode: '3% interest subvention + CGTMSE credit guarantee',
    ourCapture: '₹40-50 L NPV over 7 yrs',
    disbursalTiming: 'Automatic monthly subvention paid to lending bank',
    tranches: 'Ongoing',
    whatPays: ['Interest subvention on term loan up to ₹2 cr'],
    whatDoesnt: ['Principal repayment'],
    applicationSteps: [
      'Applied via lending bank (SBI, BoB, PNB etc.)',
      'Bank submits to NABARD',
      'Quarterly reconciliation',
    ],
    traps: ['Cap ₹2 cr term loan; beyond that standard rate'],
  },
  {
    id: 'epcg',
    name: 'EPCG — Export Promotion Capital Goods',
    ministry: 'DGFT',
    mode: 'Zero-duty capital goods import against export obligation (EO)',
    ourCapture: '₹40-60 L duty saving (NPV)',
    disbursalTiming: 'Immediate duty waiver; EO over 6 years',
    tranches: 1,
    whatPays: ['Imported IQF (Frigoscandia/Carnitech)', 'HPLC-MS/MS', 'Plate freezer'],
    whatDoesnt: ['Domestic equipment'],
    applicationSteps: [
      'Apply via DGFT regional office (Mumbai)',
      'Authorization against projected FOB exports',
      '6× duty-saved in EO within 6 years',
    ],
    traps: ['EO non-fulfilment = pay duties + interest', 'Must ensure export growth trajectory'],
  },
  {
    id: 'rodtep',
    name: 'RoDTEP — Remission of Duties & Taxes on Exported Products',
    ministry: 'DGFT',
    mode: '0.7-1.7% of FOB (species-specific)',
    ourCapture: 'Recurring 1.5% weighted avg of FOB',
    disbursalTiming: 'Electronic duty scrip per-shipment; usable/transferable',
    tranches: 'Per shipment',
    whatPays: ['Embedded duties/taxes on exported products'],
    whatDoesnt: ['Income tax', 'Direct tax'],
    applicationSteps: ['Automatic through ICEGATE export portal'],
    traps: ['Rate revised periodically; track DGFT notifications'],
  },
  {
    id: 'mpeda',
    name: 'MPEDA schemes (export infrastructure, cert co-funding, BSM)',
    ministry: 'MPEDA',
    mode: 'Mixed 20-50% co-funding',
    ourCapture: '₹20-40 L across schemes',
    disbursalTiming: 'Per-application basis',
    tranches: 'Ongoing',
    whatPays: ['Pre-shipment cold chain', 'QC equipment', 'BAP/MSC certification co-funding', 'BSM participation'],
    whatDoesnt: ['General capex (use PMMSY/PMKSY)'],
    applicationSteps: ['MPEDA Kochi HQ + Mumbai regional office', 'Scheme-specific application forms'],
    traps: ['Annual budget allocation; first-come-first-served within year'],
  },
];

export const stateSchemesV2 = [
  {
    id: 'mip2024',
    name: 'Maharashtra Industrial Policy 2024 (D-zone — Purandar)',
    benefits: ['7-year SGST refund up to 100% of eligible investment', 'Electricity duty exemption (₹0.8-1.2/unit)', 'Stamp duty exemption up to ₹1 cr land/building', 'Power tariff subsidy ₹2/unit × 3 yrs', 'Interest subsidy 5% × 7 yrs (cap ₹50 L/yr)'],
    applicationPath: 'Directorate of Industries / MIDC portal',
    portal: 'https://maitri.mahaonline.gov.in',
    govLink: 'https://di.maharashtra.gov.in',
    referenceGR: 'GR No. PSI-2024/CR-46/Ind-8 (Sept 2024)',
    timeline: '3-6 months',
    ourCapture: '₹3-5 cr cumulative over 7 yrs',
  },
  {
    id: 'mh-fisheries',
    name: 'Maharashtra State Fisheries Policy',
    benefits: ['Capex subsidy top-up (up to ₹40 L per project)', 'Cold chain assistance ₹10-15 L for reefer + ice plant'],
    applicationPath: 'Commissionerate of Fisheries, Taraporevala Aquarium, Mumbai',
    portal: 'https://fisheries.maharashtra.gov.in',
    govLink: 'https://fisheries.maharashtra.gov.in/Site/Home/Index.aspx',
    referenceGR: 'Maharashtra Fisheries Dept GR (annual schemes calendar)',
    timeline: '6-9 months',
    ourCapture: '₹30-40 L',
  },
  {
    id: 'women-scheme',
    name: 'Mahila Udyog / Women Entrepreneur top-ups',
    benefits: ['Additional 10% capex subsidy if ≥51% women-owned', 'Stamp duty further waivers', 'Priority-sector interest rate'],
    applicationPath: 'Maharashtra Small Industries Development Corp (MSSIDC)',
    portal: 'https://msmedi.dcmsme.gov.in',
    govLink: 'https://msme.gov.in/schemes',
    referenceGR: 'Mahila Udyamita Bharosa Yojana (MoMSME)',
    timeline: '3-6 months',
    ourCapture: 'Optional based on cap-table',
  },
  {
    id: 'zp-agri',
    name: 'Pune Zilla Parishad — Agri + Allied',
    benefits: ['Access-road + water pipeline-extension subsidies'],
    applicationPath: 'Pune ZP CEO office',
    portal: 'https://www.punezp.org.in',
    govLink: 'https://www.punezp.org.in',
    referenceGR: 'ZP annual budget allocation (RIDF-linked)',
    timeline: '6-12 months',
    ourCapture: '₹10-20 L',
  },
  {
    id: 'mh-eodb',
    name: 'MAITRI single-window clearance (Maharashtra)',
    benefits: ['90-day deemed approval for all 30+ industrial NOCs (MIDC, MPCB, F&B, Fire, Labour, FSSAI etc.)', 'Online tracking + escalation', 'Joint inspection by all departments'],
    applicationPath: 'MAITRI portal — single application; deemed clearance after 90 days',
    portal: 'https://maitri.mahaonline.gov.in',
    govLink: 'https://maitri.mahaonline.gov.in',
    referenceGR: 'Maharashtra Industries Facilitation Act 2024',
    timeline: '90 days statutory',
    ourCapture: 'Indirect — saves ~₹15-25 L in delay/expediting costs',
  },
];

export const captureTable = [
  { scheme: 'PMMSY',                    amountINRcr: '5.5-6.5', timing: 'M10-M28',          risk: 'Medium' },
  { scheme: 'PMKSY',                    amountINRcr: '2.5-3.0', timing: 'M10-M24',          risk: 'Low-medium' },
  { scheme: 'MNRE + AccDep',            amountINRcr: '1.0-1.3', timing: 'M6-M18',            risk: 'Low' },
  { scheme: 'NABARD AIF (NPV)',         amountINRcr: '0.4',     timing: 'Ongoing 7 yrs',     risk: 'Low' },
  { scheme: 'EPCG (NPV)',               amountINRcr: '0.5',     timing: '6-yr EO',           risk: 'Medium' },
  { scheme: 'State SGST refund (7 yr cum)', amountINRcr: '3-5', timing: 'Ongoing 7 yrs',     risk: 'Low' },
  { scheme: 'MH State capex top-up',     amountINRcr: '0.3-0.4', timing: 'M10-M14',          risk: 'Low' },
  { scheme: 'MPEDA infra + certs',       amountINRcr: '0.2-0.4', timing: 'Various',           risk: 'Low' },
];

export const applicationTimeline = [
  { month: -8, action: 'Hire PMMSY+PMKSY-empanelled DPR consultant' },
  { month: -5, action: 'DPR drafting + cost estimates + promoter documentation' },
  { month: -3, action: 'Submit PMMSY + PMKSY + MIDC + state policy applications in parallel' },
  { month:  0, action: 'Kick-off — civil work against pre-approval letter (at-risk)' },
  { month:  4, action: 'First PMMSY + state approvals + SGST registration' },
  { month:  8, action: 'PMKSY sanction + reefer + lab equipment commitments' },
  { month: 12, action: 'Commissioning + HACCP + MPEDA + FSSAI approvals' },
  { month: 15, action: 'PMMSY tranche 2 (commissioning)' },
  { month: 18, action: 'EPCG export obligation kicks in' },
  { month: 24, action: 'PMMSY tranche 3 + MPEDA cert co-funding + MSC prep' },
];

export const namedConsultants = [
  { firm: 'AGRUNIVERSE Consulting', location: 'Pune', specialty: 'PMMSY + PMKSY DPR' },
  { firm: 'SFAC-empanelled firms', location: 'Pune / Mumbai', specialty: 'Agri-business DPR' },
  { firm: 'KPMG Agri Food', location: 'Mumbai', specialty: 'Investor-grade DPR + scheme structuring' },
  { firm: 'Rabo Equity Advisors', location: 'Chennai / Bangalore', specialty: 'Higher-end structuring' },
  { firm: 'MPEDA-empanelled consultants', location: 'Per MPEDA website', specialty: 'Fisheries-specific DPRs' },
];

// ============================================================
// GST REFUND MODELLING — exporters get full ITC refund on
// zero-rated supplies. This was a gap in the v1 cash-flow model.
// Mechanics: exports are zero-rated under IGST Act §16; we can
// either pay IGST and claim refund, or export under LUT (no IGST,
// claim ITC accumulated). Most exporters use LUT for cash efficiency.
// ============================================================

export const gstRefundModel = {
  // Inputs based on our DPR: Y3 revenue ₹100 cr fully exported under LUT
  assumption: {
    revenueINRcr: 100,
    domesticSalePct: 0,                  // 100% export
    blendedInputGSTpct: 7.2,             // weighted: 5% (raw fish) + 18% (packaging, utilities, services)
    netInputCostPctRevenue: 78,          // raw + packaging + utilities + outsourced services
    capexInputGSTBalanceINRcr: 1.6,      // residual unutilised ITC from capex
  },
  // Calculation per ₹100 cr export revenue per year
  worked: [
    { item: 'Total export revenue (zero-rated)', valueINRcr: 100.0, note: 'Full LUT route — no IGST charged' },
    { item: 'GST-bearing inputs (78% of revenue)', valueINRcr: 78.0, note: 'Raw materials, packaging, utilities, services' },
    { item: 'Blended input GST collected (7.2%)', valueINRcr: 5.62, note: 'Weighted: 5% (raw fish, ice) + 12% (chemicals, lab) + 18% (packaging, freight, services)' },
    { item: 'Output GST (zero-rated)', valueINRcr: 0.00, note: 'Exports = 0% under §16 IGST Act' },
    { item: 'Refundable accumulated ITC', valueINRcr: 5.62, note: 'Filed monthly via RFD-01A; capped at lower of ITC or invoice value × 0.5%' },
    { item: 'Refund timing avg', valueINRcr: null, note: '60-90 days from RFD-01A; faster (15-30 days) if AEO-LO/T2 status' },
    { item: 'Float impact on WC', valueINRcr: 1.4, note: 'Effective WC tied up = ~3 months × ₹5.62 cr ÷ 12 = ₹1.4 cr blocked' },
  ],
  // Cash-flow impact across 5 years
  refundByYear: {
    Y1: { exportRevINRcr: 12,  refundClaimINRcr: 0.67, blockedWCINRcr: 0.17 },
    Y2: { exportRevINRcr: 45,  refundClaimINRcr: 2.53, blockedWCINRcr: 0.63 },
    Y3: { exportRevINRcr: 100, refundClaimINRcr: 5.62, blockedWCINRcr: 1.40 },
    Y4: { exportRevINRcr: 145, refundClaimINRcr: 8.15, blockedWCINRcr: 2.04 },
    Y5: { exportRevINRcr: 195, refundClaimINRcr: 10.96, blockedWCINRcr: 2.74 },
  },
  // Watch-outs that bite real exporters
  risks: [
    { risk: 'RFD-01A rejection on technical grounds', impact: 'Adds 30-60 days to refund', mitigation: 'Empanelled GST consultant pre-checks every filing' },
    { risk: 'Inverted-duty structure trigger (input rate > output)', impact: 'Some inputs (18% packaging) refund only on monthly accumulation', mitigation: 'Build packaging SPV at 12% rate or buy from EOU' },
    { risk: 'AEO not granted in Y1', impact: '90-day refund instead of 15-day', mitigation: 'Apply AEO-LO at M9; aim for T1 by M18, T2 by M30' },
    { risk: 'Branch transfer of ITC across plants', impact: 'Cross-plant ITC pooling needs ISD registration', mitigation: 'Single-GSTIN model for Y1-Y2; ISD only at multi-plant Y4+' },
    { risk: '0.5% invoice cap on refund', impact: 'Capped if input GST > 0.5% of invoice value', mitigation: 'Not a binding constraint at our 7.2% input rate; only matters at >100% conversion' },
  ],
  totalRefundFiveYearINRcr: 27.93,
  netWCBlockedINRcr: 2.74,
  cashFlowMaterial: 'Yes — ₹28 cr cumulative refund over 5 yrs; AEO-T1 status saves ~₹1 cr in float interest',
};

// ============================================================
// LARGE NEW ENTRANTS — Adani, Reliance, ITC moves
// User-flagged gap: industry has been visited by big-corp consolidation
// since 2022. Even rumoured entry shifts buyer expectations + cap-table
// of competitors. Map what's known + what's rumoured + our response.
// ============================================================

export const largeEntrantsV2 = [
  {
    id: 'adani-agri',
    entrant: 'Adani Wilmar / Adani Agri Logistics',
    status: 'ACTIVE — adjacent',
    moves: [
      'Adani Agri Logistics: 2.0 MT silos + handling at JNPT/Mundra',
      'Adani Wilmar: ₹54,000 cr revenue base, FMCG distribution into 2.5 M outlets',
      'No direct seafood announcement (as of Apr 2026), but cold-chain infra building blocks in place',
    ],
    threatLevel: 'High latent',
    timeToImpact: '24-36 months if greenfield seafood',
    whatChangesForUs: [
      'Cold-chain rates may compress 8-12% on JNPT lanes if Adani enters reefer trucking at scale',
      'If Adani buys an existing seafood player (Avanti? Apex?), brand stack shifts overnight',
      'Banks may de-risk towards Adani-affiliated borrowers — slight crowding-out risk on AIF caps',
    ],
    ourCounter: [
      'Lock 3-yr reefer-truck rate cards with Snowman/ColdEx before any Adani entry',
      'Diversify cold-store relationships across CWC + Snowman + Coastal — never single-vendor',
      'Build buyer relationships that are personal (founder-led) and species-specific (Konkan only) — Adani is national, we are local; that is our moat',
    ],
    sourceLinks: ['https://www.adaniagri.com', 'Adani Wilmar Q3 FY24 investor presentation'],
  },
  {
    id: 'reliance-retail',
    entrant: 'Reliance Retail (JioMart Fresh + Smart Bazaar)',
    status: 'ACTIVE — domestic',
    moves: [
      'JioMart Fresh: 700+ stores serving fish/seafood; sources from Coastal Corp + regional',
      'Reliance Industries: oil-to-chemicals → consumer pivot since 2020',
      'Reliance Foods Ltd (RFL) ₹3,500 cr revenue; expanding cold storage in Mumbai, Pune, Bangalore',
      'Reported FY26 expansion: ₹1,200 cr in cold-chain capex (Smart Bazaar private label launch)',
    ],
    threatLevel: 'Medium — domestic only',
    timeToImpact: '12-24 months for private-label seafood SKUs',
    whatChangesForUs: [
      'Domestic ethnic + organised retail buyers (HoReCa channel) face new gatekeeper',
      'Reliance volume buys could compress wholesale benchmark by 10-15% on shrimp/finfish',
      'If Reliance demands HACCP-certified suppliers, our food-safety stance becomes table-stakes',
    ],
    ourCounter: [
      'Position as export-only — explicitly NOT competing for domestic Reliance shelf',
      'Sell to ethnic distributors who buy retail-pack imports (Lulu HK, Patel Brothers US)',
      'If Reliance opens RFP for premium grouper/lobster supply, evaluate as 3-5% revenue stream',
    ],
    sourceLinks: ['https://www.relianceretail.com', 'RIL FY24 annual report'],
  },
  {
    id: 'itc-foods',
    entrant: 'ITC Foods (Master Chef Frozen)',
    status: 'ACTIVE — direct competitor in retail',
    moves: [
      'ITC Master Chef brand: frozen prawns, breaded fish, ready-to-cook',
      'Bengaluru + Hyderabad metro retail penetration',
      '5,000 MT/yr frozen seafood capacity (Cochin + Vizag co-processing)',
      'Aggressive promotional pricing in 2024-2026',
    ],
    threatLevel: 'Medium — domestic retail only',
    timeToImpact: 'Already happening',
    whatChangesForUs: [
      'Domestic frozen retail benchmark prices anchored 20-30% below export FOB',
      'Indian retail buyers hesitant to pay export-grade prices (we explicitly avoid this channel)',
    ],
    ourCounter: [
      'Refuse to enter Indian metro retail (low-margin trap) — only HoReCa premium',
      'For HoReCa: differentiate via species-specific (Konkan grouper, lobster) that ITC Master Chef does NOT carry',
      'Revisit decision in Y4 if ITC offers ₹X-cr private-label deal with margin floor',
    ],
    sourceLinks: ['https://www.itcfoods.com'],
  },
  {
    id: 'tata-consumer',
    entrant: 'Tata Consumer Products + Tata 1mg cold chain',
    status: 'WATCHING',
    moves: [
      'Tata Salt cold-chain partnership with Snowman',
      '1mg pharma cold chain = repurposable for seafood',
      'No seafood-specific announcement Apr 2026',
    ],
    threatLevel: 'Low-medium latent',
    timeToImpact: '36+ months',
    whatChangesForUs: ['Watch for pharma-grade cold-chain reuse signals in Tata earnings calls'],
    ourCounter: ['Maintain optionality — could become acquirer in Y5 exit scenario'],
    sourceLinks: ['Tata Consumer FY24 investor presentation'],
  },
  {
    id: 'fdi-shrimp',
    entrant: 'Foreign FDI (Thai Union, Mowi, Charoen Pokphand)',
    status: 'WATCHING — sectoral cap relaxed 2024',
    moves: [
      'FDI cap raised to 100% under automatic route for marine processing (2024)',
      'Charoen Pokphand: rumoured AP shrimp farm acquisitions',
      'Mowi: salmon-only globally, India entry unlikely',
      'Thai Union: South East Asia + global tuna footprint; India entry probable for tuna processing',
    ],
    threatLevel: 'Medium long-term',
    timeToImpact: '24-48 months',
    whatChangesForUs: [
      'Foreign processing capacity expansion compresses commodity vannamei margins further',
      'Premium niche (Konkan grouper, lobster, MSC-tuna) less affected',
    ],
    ourCounter: [
      'Stay out of vannamei commodity — our Y3 mix is 0% AP shrimp',
      'For tuna: pole-and-line MSC certification creates a defensible niche even vs Thai Union scale',
    ],
    sourceLinks: ['DGFT FDI policy 2024', 'FAO commodity outlook 2025'],
  },
];

export const entrantSummaryStats = {
  totalNamedEntrants: 5,
  activeNow: 3,
  watching: 2,
  highThreat: 1,        // Adani latent
  mediumThreat: 2,      // Reliance, FDI
  lowThreat: 2,         // ITC, Tata
  ourPostureWord: 'Watchful, not reactive — we differentiate on species + geography, not scale',
};
