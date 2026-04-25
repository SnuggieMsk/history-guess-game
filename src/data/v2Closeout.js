// V2 — Closeout: filling remaining gaps after Critique Pass 3.

export const esg = {
  bycatchPolicy: [
    'Wild-catch sourced only from boats that comply with Maharashtra Marine Fisheries Regulation Act (MMFRA)',
    'Mesh-size compliance: minimum 35mm cod-end for trawl, 25mm for purse-seine',
    'No reef-destructive gear (banned bottom-trawling on coral substrate)',
    'TED (Turtle Excluder Device) compliance for shrimp boats — required for US export',
    'Annual bycatch survey commissioned with CMFRI; published in sustainability report',
  ],
  childLabourSocialAudit: [
    'Sedex SMETA 4-pillar audit of Konkan + AP suppliers within 18 months of MoU',
    'No supply from boat owners with documented child labour incidents',
    'Migrant worker registration discipline (PF + ESI Day 1; no debt-bondage)',
    'SA 8000 by Y3 covering plant + tier-1 suppliers',
  ],
  climateAdaptation: {
    capexBudgetINRl: 220,
    measures: [
      '+50 cm flood-line elevation on civil foundations (vs minimum spec)',
      'Cyclone-rated wind-pressure design (Cat-3 equivalent) for roof + cladding',
      'Rainwater harvest 200 m³/yr buffer storage',
      '12-day finished-goods inventory buffer at all times',
      'Backup supply-corridor MoUs with Karwar (Karnataka) + Mangalore — auto-activate during Konkan disruption',
      'Greenhouse-gas accounting Y2 onwards (Scope 1 + 2)',
      'Carbon-offset roadmap: solar PV avoids ~1,200 MT CO2/yr; balance via verified offsets',
    ],
  },
  dolphinSafe: 'Lakshadweep pole-and-line tuna is inherently dolphin-safe (no FAD-set purse-seine). Documentation per Earth Island Institute standard from Y1.',
};

export const wargame = [
  {
    move: 'Avanti enters live-lobster market via JV with HK importer',
    response30: 'Public PR: highlight our 18-mo head-start, named hotel partners, mortality track record',
    response60: 'Lock 2-3 buyers on 2-yr supply contracts (with volume commits)',
    response90: 'Launch second species (mud crab live to Singapore) to deepen moat',
    likelihood: 'Low-medium (Avanti is shrimp-DNA; live cargo is alien)',
  },
  {
    move: 'Apex extends value-added shrimp into European retail private label, undercutting our pricing',
    response30: 'Buyer transparency call: emphasize multi-species container offer (vs Apex single-species)',
    response60: 'Launch UK CETA-routed cooked SKU — different positioning vs Apex commodity',
    response90: 'Negotiate 2-yr forward contracts with key UK private-label buyers',
    likelihood: 'Medium-high — Apex is actively expanding',
  },
  {
    move: 'Maharashtra incumbent (IFB Agro / Coastal Corp) acquires upstream Konkan aggregator to lock supply',
    response30: 'Boat-owner equity scheme rollout — distribute 5% pool to 100 owners',
    response60: 'Co-op expansion in Sindhudurg + Devgad to broaden alternate sources',
    response90: 'Long-term forward contracts with FPOs in Palghar + AP',
    likelihood: 'Medium',
  },
  {
    move: 'Nueva Pescanova starts direct Indian octopus sourcing through Kerala (bypassing Maharashtra)',
    response30: 'Position Konkan octopus as separate quality category (rocky-reef vs sandy-bottom)',
    response60: 'Develop direct relationships with 2 secondary Spanish importers as competitive option',
    response90: 'Quality-grade certification (origin-of-catch + processing trace) to hold premium',
    likelihood: 'Low (Kerala industry sub-scale)',
  },
  {
    move: 'Vietnam farmed barramundi flooding GCC at $0.50/kg less',
    response30: 'Pivot pomfret retail to chilled-air premium (different category)',
    response60: 'Tighten FOB cost structure on commodity SKUs',
    response90: 'Reduce GCC commodity exposure; shift to Asia premium HoReCa',
    likelihood: 'Medium',
  },
  {
    move: 'PMMSY funding pause due to budget cycle',
    response30: 'Bridge financing via term-loan top-up or promoter equity injection',
    response60: 'PMKSY cushion + state policy + EPCG to backfill',
    response90: 'Reduce capex pace by 6-9 mo; conserve cash',
    likelihood: 'Low-medium',
  },
];

export const additionalJDs = [
  { role: 'CEO', salary: '₹7-9 L/mo + ESOP 2-3%', musts: 'Seafood-export track record 12+ yrs; USFDA + EU export experience; managed P&L >₹100 cr; bilingual EN+Hindi' },
  { role: 'COO', salary: '₹5-7 L/mo + ESOP 1-2%', musts: 'Plant ops 10+ yrs; HACCP+BAP expert; managed >100 workforce' },
  { role: 'CFO', salary: '₹4-6 L/mo + ESOP 1%', musts: 'CA/CMA + 8+ yrs; bank relationship management; export + GST experience' },
  { role: 'Head of Sales + Exports', salary: '₹4-6 L/mo + ESOP 1.5%', musts: 'Existing buyer network across 2+ markets; trade-fair experience' },
  { role: 'Cold-chain Manager', salary: '₹1.5-2 L/mo', musts: 'Reefer logistics 5+ yrs; telematics platform experience' },
  { role: 'Procurement Head (Konkan)', salary: '₹1.6-2.2 L/mo', musts: 'Konkan-coast network (Mirkarwada/Devgad/Malvan); auction experience' },
  { role: 'Procurement Head (AP)', salary: '₹1.6-2.2 L/mo', musts: 'AP shrimp belt network; FPO + KCC familiarity' },
  { role: 'Head of HR', salary: '₹2-3 L/mo', musts: 'Manufacturing HR 8+ yrs; PF/ESI/labour law; 100+ headcount management' },
];

export const buyerOutreach = {
  coldEmailTemplate: `Subject: Maharashtra-origin [SPECIES] supply — invitation to qualify

Dear [BUYER NAME],

We are Konkan Seafoods — a new HACCP-grade, MSC-track-certifying processor near Pune, sourcing from Maharashtra's Konkan coast (Ratnagiri / Sindhudurg) and Andhra Pradesh aquaculture clusters.

We are setting up our buyer network ahead of [MONTH/YEAR] commercial start, focused on premium niches: [PILLAR — live-lobster | MSC-tuna saku | cooked octopus].

Why we'd like to qualify with [BUYER COMPANY]:
- We can offer [SPECIES] at [PRICE INDICATION], which we understand is [WHY-DIFFERENTIATED]
- [SPECIFIC HOOK — e.g., MSC certification on Lakshadweep tuna, live air-freight from PNQ, etc.]

We'd value 30 minutes to qualify our offer. We can host you on a virtual tour of our plant at [DATE/TIME], or send sample documentation (HACCP plan, lab capabilities, supplier MoUs).

Best regards,
[NAME], [TITLE]
[EMAIL] · [PHONE] · [WEBSITE]
LinkedIn: [LINK]
`,
  preFairChecklist: [
    'Pre-fair mailshot to top 30 target buyers (60-day lead time)',
    'Booth design + collateral (16 pages bilingual brochure, A4)',
    'Sample products (frozen, vacuum-packed, photographed; courier ready)',
    '90-second pitch in 3 versions (Mandarin / English / Spanish)',
    'Meeting calendar (book 8-12 meetings/day)',
    'CRM updated with each meeting outcome',
    'Post-fair follow-up email + sample courier (within 72 hours of meeting)',
    'Monthly pulse for 90 days post-fair',
  ],
  sampleShipping: [
    '500g vacuum-packed sample of each SKU',
    'EPS box + dry-ice (for frozen) or gel-pack + chilled (for premium chilled)',
    'Lab certificate + HACCP + BAP + traceability data accompanying',
    'AWB with LHO if live; standard if frozen',
    'AQCS / MPEDA certificates issued at-cost from existing reserves',
    'Total cost ~₹3,500-6,000 per sample shipment',
    'Track via courier waybill; confirm receipt within 48 hours',
  ],
};

export const supplierVisitAgenda = [
  '0900 — Arrival; meet local agent + introductions',
  '0930 — Tour landing centre; observe auction process',
  '1100 — Meet 2-3 boat-owner families (NOT just aggregators)',
  '1130 — Discuss fishing patterns, vessels, gear, target species, seasonality',
  '1230 — Lunch (community local; understand kitchen + cultural elements)',
  '1430 — Meet aggregator(s); financial discussion + offers',
  '1530 — Quality grading observation (ice-quality, sorting, holding)',
  '1700 — Wrap-up; follow-up checklist; exchange of cards',
  'Things to observe: ice quality + insulation + hygiene; women workforce; child labour; injuries; gear-type proportion; landing volume vs claim',
  'Things to AVOID: do not promise prices on visit; do not contract on first meeting; do not photograph without permission',
];

export const associations = [
  { name: 'Seafood Exporters Association of India (SEAI)', location: 'Kochi (HQ); Mumbai office', why: 'Industry advocacy + market intelligence; mandatory membership' },
  { name: 'All India Food Processors Association (AIFPA)', location: 'New Delhi', why: 'MoFPI engagement; cross-product advocacy' },
  { name: 'CII Food Processing & Agriculture', location: 'Pune + Mumbai', why: 'Maharashtra industry liaison; trade fair access' },
  { name: 'Mahratta Chamber of Commerce, Industries & Agriculture (MCCIA)', location: 'Pune', why: 'Local political + regulatory liaison' },
  { name: 'Federation of Indian Chambers of Commerce (FICCI) — Agri/Food', location: 'New Delhi', why: 'National policy advocacy; PMMSY consultation' },
  { name: 'Pune Food Cluster (industrial association)', location: 'Pune', why: 'Local cold-chain + utilities co-procurement' },
  { name: 'NACSA (National Centre for Sustainable Aquaculture)', location: 'Bhubaneswar', why: 'AP/aquaculture policy + best-practice exchange' },
  { name: 'Aquaculture Authority of India / NFDB', location: 'Hyderabad', why: 'PMMSY + farmer-FPO bridges' },
];

export const liaisons = [
  { role: 'Liaison Officer (Pune local)', whyNeeded: 'PCB approvals, MIDC engagement, factory inspections, local political relations', costINRMonth: '₹35-50 k', sourcing: 'Industry-association referrals; ex-MIDC official preferred' },
  { role: 'Mumbai Bureaucracy Liaison', whyNeeded: 'MPEDA, state DoF, Commissionerate of Fisheries, customs', costINRMonth: '₹40-60 k', sourcing: 'Senior consultant w/ ex-govt relationships' },
  { role: 'Delhi Liaison (Y3+ for PLI / FTA)', whyNeeded: 'MoFPI, MoFAHD, DGFT escalations', costINRMonth: '₹50-80 k', sourcing: 'Industry-association sponsored' },
];
