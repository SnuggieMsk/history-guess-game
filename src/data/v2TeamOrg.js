// V2 — Team, advisory board, org chart, hiring gaps, succession plan.
// Investor-grade "people layer" — what's missing from most agri/seafood pitches.
//
// MODELLED: this is a TEMPLATE for how the team section should be presented;
// real founder bio + advisory introductions are placeholders pending the
// promoter's actual identity disclosure (which the investor will diligence
// directly). The structure + role-design is the deliverable.

// ============================================================
// FOUNDER + CO-FOUNDER PROFILES
// ============================================================

export const founders = [
  {
    role: 'Founder · CEO',
    nameTemplate: '[Promoter — to be filled per actual cap table]',
    background: 'Family ownership of 3 acres in Purandar (Pune district); first-generation seafood entrepreneur',
    yearsInIndustry: 0,
    yearsInBusiness: 5,
    keyStrengths: ['Land ownership + capital commitment', 'Maharashtra political/relationship access', 'Patient long-cycle thinking'],
    knownGaps: ['No direct seafood operations background', 'No HACCP/MPEDA accreditation history', 'No buyer-side relationships pre-launch'],
    mitigation: 'Hires #1-3 (COO, QC head, export sales) all bring 10+ yr seafood-specific experience',
    timeCommitment: '100% (Day-1)',
    cashCommitmentINRcr: 14.0,
    references: 'Available on request to lead investor',
  },
];

// ============================================================
// CORE TEAM HIRES — by month and role
// ============================================================

export const coreTeamHires = [
  {
    month: -3,
    role: 'COO · Plant Operations',
    sourceProfile: 'Ex-Avanti / Apex / Falcon Plant Manager',
    yearsRequired: 12,
    salaryINRlakh: 28,
    esopBps: 75,            // 0.75% basis points
    keyKpis: ['HACCP compliance score 100%', 'OEE > 78% by Y2', 'Reject rate < 2.5%'],
    candidateSource: 'Specific search via Mascon Seafoods retired execs network + MPEDA referrals',
    hireBy: 'M-3 (pre-civil)',
    fillRisk: 'Medium — Maharashtra outside main shrimp belt; 6-mo search window',
    fallback: 'Retainer consultant + senior production manager from Devi/Nekkanti',
  },
  {
    month: -2,
    role: 'Head of QC + Compliance',
    sourceProfile: 'Ex-Apex / Coastal QC head; FSSAI lead auditor',
    yearsRequired: 10,
    salaryINRlakh: 22,
    esopBps: 50,
    keyKpis: ['Zero buyer rejections', 'EU-LO list within Y1', 'BAP cert by Y2'],
    candidateSource: 'IFFA + GAA seafood network; MPEDA empanelled lab heads',
    hireBy: 'M-2',
    fillRisk: 'Medium-low — wider candidate pool',
    fallback: 'Outsourced QC retainer ₹15 L/yr (less ideal but workable)',
  },
  {
    month: -1,
    role: 'CFO · Finance + Treasury',
    sourceProfile: 'CA with 8+ yr in agri-export company; GST + DGFT + AEO experience',
    yearsRequired: 8,
    salaryINRlakh: 24,
    esopBps: 40,
    keyKpis: ['DSCR > 1.5×', 'GST refund cycle < 90 days', 'AEO-T1 by M18'],
    candidateSource: 'PWC/EY/Deloitte agri practice alumni; mid-cap CFO network',
    hireBy: 'M-1',
    fillRisk: 'Low — large candidate pool',
    fallback: 'Senior manager + retainer CA firm (Lodha/SRBC)',
  },
  {
    month: 0,
    role: 'Head of Export Sales',
    sourceProfile: 'Ex-Devi / Sandhya / Falcon export head; existing Japan/EU/US buyer book',
    yearsRequired: 12,
    salaryINRlakh: 32,
    esopBps: 75,
    keyKpis: ['Y1 revenue ₹12 cr', '4 named buyer relationships closed', 'Y2 ₹45 cr'],
    candidateSource: 'MPEDA Mumbai office referrals + LinkedIn senior search',
    hireBy: 'M0 (commissioning month)',
    fillRisk: 'High — existing buyer book is hard to poach; prepare 9-mo search',
    fallback: 'Hire 2 mid-level (Asia + Europe) instead of one senior',
  },
  {
    month: 0,
    role: 'Head of Procurement / Supplier Network',
    sourceProfile: 'Maharashtra-native with 10+ yr Konkan landings relationships',
    yearsRequired: 10,
    salaryINRlakh: 18,
    esopBps: 30,
    keyKpis: ['250+ supplier panel by M12', 'Avg cost-of-fish discount 4-6% vs spot', 'Zero stock-outs'],
    candidateSource: 'Sassoon Dock / Versova / Ratnagiri trader network; ex-MahaMatsya officials',
    hireBy: 'M0',
    fillRisk: 'Low — strong local pool',
    fallback: 'Retainer arrangement with 2-3 senior aggregators',
  },
  {
    month: 3,
    role: 'Head of HR + Compliance (labour)',
    sourceProfile: 'Senior HR with food-processing + factory-act expertise',
    yearsRequired: 10,
    salaryINRlakh: 16,
    esopBps: 20,
    keyKpis: ['200+ headcount by Y2 with < 8% attrition', 'Zero labour disputes', 'PF/ESI 100% compliance'],
    candidateSource: 'Pune food-processing HR network',
    hireBy: 'M+3 (post-commissioning)',
    fillRisk: 'Low',
    fallback: 'Outsourced HR firm + senior manager',
  },
  {
    month: 6,
    role: 'IT / Tech Lead',
    sourceProfile: 'Mid-level engineer for ERP, traceability, cold-chain monitoring',
    yearsRequired: 6,
    salaryINRlakh: 14,
    esopBps: 15,
    keyKpis: ['Traceability system live by M9', 'GST + ICEGATE auto-filing', 'IoT cold-chain dashboards'],
    candidateSource: 'Pune IT consultant pool; Tata Elxsi / Persistent alumni',
    hireBy: 'M+6',
    fillRisk: 'Low',
    fallback: 'SI partner (Wipro/TCS Pune) with embedded engineer',
  },
];

// ============================================================
// ADVISORY BOARD — recommended composition
// ============================================================

export const advisoryBoard = [
  {
    seat: 'Industry Veteran',
    profileTemplate: 'Retired CEO/COO of mid-tier listed seafood co (Avanti/Apex level)',
    timeCommitment: '1 day/month',
    compensationINRlakh: 6,
    equityBps: 25,
    valueAdd: 'Operational pattern recognition; competitor intel; introductions to Japan/EU buyers',
    candidateExamples: ['Retired Avanti exec circle', 'Ex-Coastal Corp leadership', 'MPEDA former Chairman'],
    seatFilled: false,
  },
  {
    seat: 'Buyer-Side Veteran',
    profileTemplate: 'Ex-buyer at Lulu / Patel Brothers / Marubeni / Sealord',
    timeCommitment: '1 day/quarter',
    compensationINRlakh: 4,
    equityBps: 20,
    valueAdd: 'Buyer expectations on QC; direct intro to category buyers',
    candidateExamples: ['Lulu Group seafood buyer (Singapore office)', 'Marubeni India seafood team', 'US Patel Brothers procurement'],
    seatFilled: false,
  },
  {
    seat: 'Government / Regulatory',
    profileTemplate: 'Retired MPEDA / DoF official; or former IAS in Maharashtra',
    timeCommitment: '1 day/quarter',
    compensationINRlakh: 4,
    equityBps: 15,
    valueAdd: 'PMMSY tranche unblocking; Mantralaya navigation; FSSAI / MPCB shortcuts',
    candidateExamples: ['Retired MPEDA Director', 'Maharashtra ex-Fisheries Commissioner'],
    seatFilled: false,
  },
  {
    seat: 'Finance / Banking',
    profileTemplate: 'Retired SBI/BoB DGM (Agri-Business division) or PE veteran',
    timeCommitment: '1 day/month',
    compensationINRlakh: 6,
    equityBps: 20,
    valueAdd: 'TL/WC negotiation; Series A/B preparation; investor introductions',
    candidateExamples: ['Retired SBI agri-business head', 'Rabobank India alum', 'PE seafood investor'],
    seatFilled: false,
  },
  {
    seat: 'Quality / Certifications',
    profileTemplate: 'BAP/MSC lead auditor; ex-Bureau Veritas seafood',
    timeCommitment: '½ day/month',
    compensationINRlakh: 3,
    equityBps: 10,
    valueAdd: 'Pre-audit readiness; auditor relationship management; cert path acceleration',
    candidateExamples: ['BV India seafood lead', 'SGS India aquaculture'],
    seatFilled: false,
  },
];

// ============================================================
// ORG CHART (Y2 steady-state)
// ============================================================

export const orgChartY2 = {
  ceo: { role: 'CEO', count: 1 },
  reports: [
    { role: 'COO · Plant Ops', count: 1, reports: [
      { role: 'Production Manager', count: 1 },
      { role: 'Cold Chain Manager', count: 1 },
      { role: 'Maintenance Engineer', count: 1 },
      { role: 'Production workers', count: 120 },
    ]},
    { role: 'Head QC', count: 1, reports: [
      { role: 'QC Engineers', count: 4 },
      { role: 'Lab Technicians', count: 3 },
    ]},
    { role: 'CFO', count: 1, reports: [
      { role: 'Finance Manager', count: 1 },
      { role: 'GST/Compliance', count: 1 },
      { role: 'Accounts', count: 2 },
    ]},
    { role: 'Head of Sales', count: 1, reports: [
      { role: 'Asia Sales Manager', count: 1 },
      { role: 'EU/US Sales Manager', count: 1 },
      { role: 'Sales Coordinator', count: 1 },
    ]},
    { role: 'Head of Procurement', count: 1, reports: [
      { role: 'Field Buyers (Konkan)', count: 4 },
      { role: 'AP/Andhra Buyers', count: 2 },
      { role: 'Logistics Coordinator', count: 2 },
    ]},
    { role: 'Head of HR', count: 1, reports: [
      { role: 'HR Officer', count: 1 },
      { role: 'Admin', count: 2 },
    ]},
    { role: 'IT Lead', count: 1, reports: [
      { role: 'IT Support', count: 1 },
    ]},
  ],
};

export const headcountByYear = {
  Y1: { management: 8, supervisors: 12, workers: 65, total: 85 },
  Y2: { management: 8, supervisors: 18, workers: 130, total: 156 },
  Y3: { management: 9, supervisors: 22, workers: 195, total: 226 },
  Y4: { management: 10, supervisors: 26, workers: 235, total: 271 },
  Y5: { management: 12, supervisors: 32, workers: 290, total: 334 },
};

// ============================================================
// HIRING GAPS — what we DON'T have and how we'll close
// ============================================================

export const hiringGaps = [
  {
    gap: 'No CEO with seafood-export track record',
    severity: 'High',
    closurePath: 'COO hire (Ex-Avanti/Apex plant manager) carries operational credibility; Head of Sales carries buyer book',
    investorPushback: 'Strong — investors will ask "who runs day 1?" — we answer with COO + Sales head named in cap table',
  },
  {
    gap: 'No previous fundraising / IR experience in promoter',
    severity: 'Medium',
    closurePath: 'CFO hire (PWC/EY agri alumni) handles all IR; advisor (PE veteran) coaches CEO on board interactions',
    investorPushback: 'Medium — seek lead investor from VC partner with seafood pattern recognition',
  },
  {
    gap: 'No existing buyer relationships',
    severity: 'High',
    closurePath: 'Head of Sales must be senior hire with existing buyer book; trade-fair attendance from M0; buyer-side advisor seat',
    investorPushback: 'Critical — need 4 named LOIs from buyers BEFORE Series A close',
  },
  {
    gap: 'No cold-chain operations history',
    severity: 'Medium',
    closurePath: 'COO hire + cold-chain manager hire + IoT monitoring vendor (Snowman/Coldex partnership)',
    investorPushback: 'Medium — handled by named hires + vendor track record',
  },
  {
    gap: 'No MSC certification expertise',
    severity: 'Low (Y1) / Medium (Y3+)',
    closurePath: 'BAP/MSC consultant retainer (Bureau Veritas / SGS India) for Y1-Y2; in-house advisor seat by Y3',
    investorPushback: 'Low — Y3 issue, not Y1',
  },
  {
    gap: 'No founder track record (first-generation entrepreneur)',
    severity: 'Medium',
    closurePath: 'Strong advisory board signals reduces this; co-investor (family office) provides governance maturity',
    investorPushback: 'Medium — manage with structured governance + independent directors by Series A',
  },
];

// ============================================================
// SUCCESSION + KEY-PERSON RISK
// ============================================================

export const successionPlan = [
  {
    keyPerson: 'CEO (Founder)',
    keyPersonRisk: 'High — single point of failure for vision + capital',
    succession: 'COO is named acting-CEO in articles; PE investor has board observer rights at Series A',
    keymanInsuranceINRcr: 5.0,
  },
  {
    keyPerson: 'COO',
    keyPersonRisk: 'High — operational continuity',
    succession: 'Production Manager promotable in 90 days; advisor industry-veteran fills 6-mo gap',
    keymanInsuranceINRcr: 2.0,
  },
  {
    keyPerson: 'Head of Sales',
    keyPersonRisk: 'Critical — buyer relationships personal',
    succession: 'Asia Sales Manager + EU/US Sales Manager run accounts; CEO covers top-3 buyers personally',
    keymanInsuranceINRcr: 2.0,
  },
  {
    keyPerson: 'CFO',
    keyPersonRisk: 'Medium — replaceable',
    succession: 'Finance Manager + outsourced retainer firm during transition',
    keymanInsuranceINRcr: 1.0,
  },
];

export const teamSummaryStats = {
  totalCoreHires: coreTeamHires.length,
  totalSalaryINRcrYr1: coreTeamHires.reduce((s, h) => s + h.salaryINRlakh, 0) / 100,
  totalEsopAllocBps: coreTeamHires.reduce((s, h) => s + h.esopBps, 0) + advisoryBoard.reduce((s, a) => s + a.equityBps, 0),
  advisoryBoardSeats: advisoryBoard.length,
  highSeverityGaps: hiringGaps.filter(g => g.severity === 'High' || g.severity.startsWith('Critical')).length,
  totalKeymanInsuranceINRcr: successionPlan.reduce((s, p) => s + p.keymanInsuranceINRcr, 0),
  y2Headcount: headcountByYear.Y2.total,
  y5Headcount: headcountByYear.Y5.total,
};
