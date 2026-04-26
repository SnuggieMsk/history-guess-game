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

// V2 — Zero-to-shop playbook. Hour/day/week granularity for a complete first-timer.
// Assumes: promoter has ~₹14 cr in hand (or is raising it) + has read the v2 docs.

export const dayZero = {
  hour: [
    { h: '09:00', action: 'Fix domain: konkanseafoods.in (or your preferred name). Register via BigRock / GoDaddy. ₹900/yr.' },
    { h: '09:30', action: 'Email setup with Google Workspace or Zoho Mail. ₹300-600/user/month.' },
    { h: '10:30', action: 'Call a Pune-based Company Secretary (CS). Tell them: "Private Limited, 2 promoters, seafood export, need MOA/AOA drafted around Objects clauses that allow food processing + export." Budget ₹25-40 k for incorporation + first-year compliance.' },
    { h: '14:00', action: 'Call 2 DPR consultants from our shortlist (Schemes V2 doc). Ask: availability, past 2 PMMSY DPR examples, fee range. Target ₹1.5-2.5 L for DPR + ₹1-2 L/yr for ongoing compliance.' },
    { h: '16:00', action: 'Email MPEDA Mumbai regional office (mpedamum@mpeda.gov.in VERIFY) with intent-to-establish note — ask for their guidance on site-selection advisory if available.' },
    { h: '17:30', action: 'Join 3 WhatsApp groups: (i) AP Aquaculture Farmers, (ii) Ratnagiri Fisher Cooperative, (iii) Seafood Export India — via industry associations / LinkedIn contacts.' },
  ],
};

export const week1 = [
  'Register Private Limited Company (CS delivers). 5-7 days. Cost ₹15-25 k.',
  'Open bank current account (SBI / BoB / HDFC). Bring CoI + PAN + director IDs + board resolution. 2 days.',
  'Apply PAN + TAN (mandatory, CS handles during incorporation).',
  'Apply GST registration. 3-5 days.',
  'Apply IEC (Import Export Code) on DGFT portal. ₹500 fee. 2-3 days.',
  'Execute promoter Shareholder Agreement (SHA) with lawyer. Address ESOP pool (target 6%), vesting, exit rights, drag-along, tag-along, ROFR. ₹40-75 k legal fee.',
  'Net worth certificate from Chartered Accountant for each promoter. Needed for bank + PMMSY. ₹5-10 k.',
  'Incorporation documents uploaded to dedicated shared Drive / DocumentVault folder. Start "virtual data room" (VDR) structure for investor/bank review.',
];

export const week2to4 = [
  'Hire CEO (if not promoter-run) — full-time, ₹7-8 L/mo, equity ESOP 2-3%. Budget 4-6 weeks for right candidate.',
  'Engage PMMSY-empanelled DPR consultant. Sign engagement letter. Kick-off workshop.',
  'Site visit: 3-acre Purandar candidate land. Owner background check + title chain verification (lawyer). Engage local surveyor.',
  'Land lease/purchase negotiation. Register stamp + lease-deed. Budget ₹1.5 cr land cost + ₹5-10 L stamp.',
  'Engage architect + HACCP-experienced process designer. Ask for 3D layout, P&ID (process & instrumentation diagram), utility calcs.',
  'Start equipment vendor RFQ — IQF (Cocoon / Kaytee / Frigoscandia agents), cold store (Danfoss / Bitzer), RO / ZLD (Ion Exchange / Thermax / VA Tech Wabag), solar PV (Tata Solar / Adani / Waaree / Vikram Solar).',
  'Begin PMMSY DPR drafting (consultant). Parallel: PMKSY, MIDC Pune application, state incentive applications.',
  'Hire QC Head + Compliance Lead (early hires; they shape the plant design).',
  'Apply Maharashtra PCB Consent to Establish (CTE) — 90-120 day timeline, so start now.',
  'Apply Factory Act registration, Fire NOC pre-application.',
];

export const month2to3 = [
  'DPR submission to state DoF — pre-approval letter sought. In parallel: PMKSY application to MoFPI state nodal (Pune).',
  'Term loan application to bank. Pre-sanction meeting. DPR + TEV (Techno-Economic Viability) study.',
  'Finalise equipment vendors. Place PO with 10% advance. Delivery schedules aligned to civil completion.',
  'Engage civil contractor. HACCP-grade civil specs: smooth epoxy floors, FRP walls, insulated ceiling, anti-microbial paint.',
  'Site boundary wall + gate + security + temporary office setup.',
  'HACCP + QC manual drafting begins (consultant or in-house Compliance Lead).',
  'First supplier recce trip — Ratnagiri 2 days, Sindhudurg 2 days, AP (Bhimavaram) 3 days. Meet 3-4 aggregators each. Take notes, swap cards.',
  'First buyer outreach — email top 5 Dubai / Singapore importers (from Buyers V2 doc). Introduce company, invite to watch progress.',
];

export const month4to9 = [
  'Civil construction — foundation, columns, walls, roof. Monthly vendor visits.',
  'Equipment delivery + installation (IQF M6-M7, cold store M6-M7, plate freezer M7).',
  'Solar PV installation + net-metering application. Grid connection approval.',
  'ZLD installation + commissioning. MPCB inspection.',
  'Ammonia plant installation + PESO certification.',
  'Lab construction + equipment installation. NABL consultant engaged.',
  'First supplier MoUs signed — 3 Konkan aggregators, 2 AP FPO tie-ups, LCMF MoU for Y2 tuna season.',
  'Pilot live-cargo test — 50 kg lobster shipment to HK buyer-of-record. Measure mortality. Debrief. Iterate.',
  'First full workforce hired — 40 during M8, total 152 by M12.',
  'HACCP + FSSAI + MPEDA + Factory Act inspections.',
];

export const month10to12 = [
  'Pre-commissioning wet + dry trials. Yield + temp validation.',
  'HACCP certification audit. Expect 5-10 observations; close-out in 2-4 weeks.',
  'MPEDA per-establishment code issued.',
  'First commercial shipment to GCC buyer (Dubai trader). 1 reefer container. Celebrated.',
  'Apply USFDA Establishment Registration.',
  'China GACC Regulation 248 application filed.',
  'Ramp: first month of multi-container shipments. AR cycle begins.',
];

export const dailyRhythm = {
  monday: [
    '05:30 — Konkan reefer truck arrival checkpoint. QC Head + shift supervisor at dock.',
    '06:30 — Daily supply huddle (CEO / COO / QC Head / Procurement). 15 min.',
    '08:00 — Line start. Hourly yield + temperature checks.',
    '12:00 — Shift changeover + QC sample collection for antibiotic screen.',
    '14:00 — Procurement planning call: next-day AP reefer dispatches, landing-day commits with Konkan aggregators.',
    '16:00 — Weekly sales review (Head Exports + CEO). Pipeline, sample shipments, buyer queries.',
    '17:00 — Finance review: AR ageing, cash position, LC status.',
    '18:00 — Close-out of Day 1 production; A-grade inventory moved to cold store.',
  ],
  thursday: [
    'Wet morning + dry afternoon structure, with additional focus:',
    '10:00 — USFDA/EU/GACC compliance weekly check — any new notifications, regulatory updates, import alerts.',
    '14:00 — Cold-chain telematics review — excursion count, reefer service schedule, fuel costs.',
    '15:30 — Cert + audit calendar review — upcoming external audits, internal audit schedule, corrective actions.',
  ],
  friday: [
    'Normal operations + weekly close:',
    '11:00 — Department heads weekly report (7 metrics each): yield, mortality (live), AR days, throughput, RASFF/import-alert status, employee safety incidents, cash position.',
    '16:00 — Department heads meeting with CEO. 60 min. Priority setting for next week.',
    '17:30 — Weekly review email to board.',
  ],
};

export const monthlyCadence = [
  { day: 1, action: 'Monthly MIS close by Finance. By day 7 → P&L, CF, WC, KPI dashboard out to board.' },
  { day: 3, action: 'Monthly supplier review — top 10 suppliers by volume + quality score + payment status.' },
  { day: 5, action: 'Monthly buyer review — top 10 buyers by revenue + satisfaction + AR ageing + NPS.' },
  { day: 10, action: 'Monthly employee pulse survey. Quick 3-question SMS / app survey.' },
  { day: 15, action: 'Monthly safety + compliance review — incidents, CCP breaches, regulatory notifications.' },
  { day: 20, action: 'Monthly technology audit — telematics uptime, traceability system, lab LIMS.' },
  { day: 25, action: 'Monthly marketing / trade-fair / buyer-acquisition pipeline review.' },
  { day: 28, action: 'Monthly board meeting (by Zoom) OR board-preparation finalisation for quarterly meeting.' },
];

export const quarterlyReview = [
  'KPIs: throughput, utilisation, yield, mortality, receivables, EBITDA, PAT — actual vs plan.',
  'Customer concentration (top 3, top 5, top 10).',
  'Supplier concentration (top 3 by volume).',
  'Regulatory + compliance status — any outstanding notices, audit findings, corrective actions.',
  'Cert timeline — what\'s progressing, what\'s stalled.',
  'Strategic initiatives review — MSC assessment, value-added line rollout, new market entry.',
  'Competitive intel — any major moves by Avanti / Apex / IFB / etc.',
  'Financial reforecast for remainder of year.',
  'Risk register update — new risks, mitigated risks, escalations.',
  'Action items from last quarter — status.',
];

export const annualReview = [
  'Full-year P&L vs plan — attribution analysis.',
  'Full-year return on equity + IRR recompute.',
  'Strategic plan refresh for next 3 years.',
  'Compensation review + ESOP refresh.',
  'Board size + composition review.',
  'Succession planning (key roles).',
  'Long-term capex roadmap (Y3+ expansion).',
  'Liquidity + funding runway check.',
  'Material-weakness audit (SOPs that broke down).',
  'Certification roadmap — what\'s overdue, what\'s coming up.',
];

export const firstYearMilestoneSummary = [
  { month: 1, milestone: 'Company incorporated; DPR kicked off; bank + equipment RFQ started' },
  { month: 3, milestone: 'PMMSY + PMKSY DPR submitted; term loan pre-approved; civil contractor on board' },
  { month: 6, milestone: 'Civil 50% complete; equipment POs placed; QC Head + Compliance onboarded' },
  { month: 9, milestone: 'Plant commissioning begins; HACCP audit; MPEDA code issued' },
  { month: 10, milestone: 'First trial shipments; USFDA establishment registration applied' },
  { month: 12, milestone: 'Steady production; 3 export markets live (GCC, China, SEA); Y1 revenue ₹20-28 cr' },
];
