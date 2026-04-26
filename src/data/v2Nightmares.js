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

// V2 — "What can go wrong" nightmare playbook. Detailed response SOPs for each.

export const nightmares = [
  {
    id: 'usfda-import-alert',
    title: 'USFDA Import Alert / Detention (CAP, nitrofuran, decomposition)',
    frequency: 'Industry: ~5-10 Indian exporters/year get caught',
    immediateDamage: '1 container detained (value $150-250k). Hold for 30-90 days. Destruction or re-export. Direct loss: 2-4% of annual rev.',
    cascadingDamage: '2-3 year import-alert listing; every shipment auto-detained until 5 consecutive clean shipments. Loss of USA market.',
    day1Response: [
      '08:00 — Compliance Lead checks CBP/USFDA portal + email. Downloads notification.',
      '09:00 — Convene war-room: CEO, COO, QC Head, Compliance Lead, MPEDA liaison.',
      '10:00 — Pull retention sample from our vault. Ship to NABL-accredited lab for independent confirmation.',
      '11:00 — Traceback: identify the pond / boat / aggregator. Freeze all related inbound inventory.',
      '14:00 — Legal counsel consultation. Notify insurance (product recall + marine cargo policies).',
      '16:00 — Draft transparent response to USFDA. Do not argue; acknowledge, describe CAPA (Corrective And Preventive Action).',
    ],
    week1Response: [
      'Contract third-party food safety consultant (SGS / BV / FoodCert)',
      'Detailed root-cause analysis report',
      'Revamp screening SOP — increase test frequency for affected species to 150% of action limit',
      'Supplier action: blacklist or extensive re-verification',
      'Buyer transparency communication',
    ],
    month1Response: [
      'Submit CAPA to USFDA with evidence (logs, audit trails, enhanced screening)',
      'Implement weekly third-party audits of lab processes',
      'Quarterly internal audits of CCP compliance',
      'Buyer recovery: offer discounted samples from new "clean" lots',
    ],
    prevention: [
      'In-house ELISA + HPLC-MS/MS from Day 1 (not outsourced)',
      'Pond-level traceability with RFID + batch ID',
      'Supplier exclusion clauses (90-day suspension after any positive)',
      '100% CAP + nitrofuran screening (not risk-based)',
      'Retention samples for 6 months',
      'Annual third-party audit of QC lab',
    ],
    escapeValue: 'Net revenue loss if well-handled: 3-5% annual revenue impact over 2 years. If poorly-handled: 15-30% of annual rev over 3 years.',
  },
  {
    id: 'eu-rasff-alert',
    title: 'EU RASFF Alert (Rapid Alert System)',
    frequency: 'Industry: ~8-12 Indian exporters/year',
    immediateDamage: 'Border rejection at EU port. Container returns or destruction. €80-120k loss per container.',
    cascadingDamage: 'EU establishment number review; increased border sampling of next 10 containers.',
    day1Response: [
      '08:00 — RASFF portal check. Identify product + pathogen + consignment.',
      '09:30 — MPEDA EU helpdesk notification.',
      '10:00 — Traceback. Retention sample pull. Independent lab test.',
      '14:00 — Buyer-side coordination (inform before EU does). Offer replacement container or credit.',
    ],
    week1Response: [
      'Submit preliminary root-cause to MPEDA',
      'Temporary divert EU-destined shipments to other markets until cleared',
      'Tighten SOP',
    ],
    month1Response: [
      'Submit formal CAPA via MPEDA to EU Commission',
      'Pass 10 consecutive clean shipments for exit from enhanced sampling',
    ],
    prevention: 'Same as USFDA — plus EU establishment number renewal discipline, MPEDA regular inspections.',
    escapeValue: '2-4% annual revenue impact if isolated incident.',
  },
  {
    id: 'live-cargo-mass-mortality',
    title: 'Live Cargo Mass Mortality (lobster / mud crab)',
    frequency: 'Industry: 3-5% of shipments hit >20% mortality',
    immediateDamage: '1 cargo loss ₹12-18 L. Buyer credit note potentially 50-100% of invoice.',
    cascadingDamage: 'HK importer relationship damage; subsequent shipments on probation.',
    day1Response: [
      'Arrival call from importer within 2 hrs. Request photos + video documentation.',
      'File insurance claim with all-risks cargo policy.',
      'Review in-transit temperature + movement log (telematics on carrier).',
      'Root cause: purge + cool-down + pack + transit + ground handling. Identify node that failed.',
    ],
    week1Response: [
      'Buyer transparency call; offer 100% refund + next-cargo bonus',
      'Pause shipments to this buyer for 2 weeks; rebuild SOP',
      'Carrier post-mortem',
    ],
    month1Response: [
      'Restart with small <100 kg test cargos',
      'Revise mortality assumption; update insurance premium',
    ],
    prevention: [
      'Y1 all shipments <200 kg; Y2 <500 kg; Y3 routine 500-800 kg',
      'Mortality quarterly review; 12% trailing triggers process review',
      'Carrier audit before scaling',
      'Redundant O2 sensors + temperature logger',
    ],
    escapeValue: 'One cargo loss recoverable; 2-3 consecutive failures = relationship termination.',
  },
  {
    id: 'cyclone-landfall',
    title: 'Cyclone Landfall Hitting Ratnagiri / Sindhudurg',
    frequency: 'Every 2-4 years in modern climate',
    immediateDamage: '2-4 week supply disruption from Konkan. Raw material loss; plant running at 30-40% utilisation.',
    cascadingDamage: 'Customer backorder; potential penalty clauses; buyer switches to secondary supplier.',
    day1Response: [
      '72 hrs pre-landfall: IMD alert trigger. Evacuate dockside agents from coast.',
      'Pre-purchase excess inventory from AP to cover 2-3 weeks.',
      'Pre-book reefer vans for emergency supply runs.',
      'Insurance activation; business interruption policy review.',
    ],
    week1Response: [
      'Switch supply to AP entirely',
      'Slow down processing lines to 60-70%',
      'Re-time commitments to buyers (transparency)',
    ],
    month1Response: [
      'Support coastal communities recovery (PR goodwill)',
      'Activate backup plans on alternate landings (Karwar, Mangalore)',
      'Book insurance claim processing',
    ],
    prevention: [
      'Diversify landing centres geographically',
      'Maintain 15-day finished-goods inventory buffer',
      'Business interruption insurance',
      'Cyclone-season supply contract flexibility clauses',
    ],
    escapeValue: 'Net impact 8-12% of quarterly revenue if well-managed.',
  },
  {
    id: 'labour-strike',
    title: 'Labour Strike During Peak Export Season',
    frequency: '1-2x per year across Indian seafood industry',
    immediateDamage: 'Production stops. 5-10 day lost shifts = ₹50-80 L revenue loss.',
    cascadingDamage: 'Buyer commitment delays; concession demands in subsequent contracts.',
    day1Response: [
      '06:00 — HR + security at gate. Understand demand.',
      '08:00 — Dialog with union / informal leader group.',
      '10:00 — Engage independent labour-consultant / mediator.',
      '14:00 — Activate contingency workers (temp agency or retained standby roster).',
    ],
    week1Response: [
      'Mediation + negotiation with documented SLAs',
      'Signed revised employment terms',
      'Return-to-work with no reprisal agreement',
    ],
    month1Response: [
      'HR audit: what signals were missed?',
      'Implement pulse survey + grievance committee',
      'Review supervisor training',
    ],
    prevention: [
      'Anchor-crew from Konkan (cultural alignment with processing work)',
      'PF + ESI + benefits stack Day 1',
      'ESOP pool for top 25 employees',
      'Women\'s hostel + crèche + transport',
      'Quarterly pulse surveys + grievance committee',
      'Avoid peak-season wage renegotiation timing',
    ],
    escapeValue: 'Recoverable; but brand damage with buyers can linger 1-2 seasons.',
  },
  {
    id: 'power-outage-freezer-fail',
    title: 'Extended Power Outage + Generator Failure Hitting Cold Store',
    frequency: 'Every 5-7 years',
    immediateDamage: '6-8 hour temperature breach = 30-50 MT finished goods loss = ₹60-120 L.',
    cascadingDamage: 'Insurance claim; product recall; buyer trust.',
    day1Response: [
      'Emergency diesel fill + backup generator from adjacent plant or rental.',
      'Open cold-store doors minimally; use wet-bulb / dry-bulb tracking.',
      'Identify priority inventory (premium buyers\' orders first).',
      'Insurance notification.',
    ],
    week1Response: [
      'Audit power infrastructure; add second DG redundancy',
      'Install grid + solar + DG 3-way auto-changeover',
      'Secondary cold-storage contract',
    ],
    month1Response: [
      'Full DG maintenance contract',
      'Power-failure drill quarterly',
    ],
    prevention: [
      'Primary DG + secondary DG (parallel start capability)',
      'Cold-store thermal inertia calc — we should have 8+ hours buffer',
      'Weekly generator test runs',
      'Diesel tank minimum 48-hr reserve',
      'MSEB tariff rider for priority restoration',
    ],
    escapeValue: 'Significant impact; preventable with infrastructure investment.',
  },
  {
    id: 'bank-revokes-wc-limit',
    title: 'Bank Revokes / Reduces Working Capital Limit',
    frequency: 'Every 3-5 years industry-wide',
    immediateDamage: '₹3-5 cr cash crunch within 30 days. Supplier payments delayed. Reputation damage.',
    cascadingDamage: 'Supplier defections; lost discounts; spiral.',
    day1Response: [
      'Meet Branch Head + Circle Head with full financial picture.',
      'Emergency CA-validated revised financials.',
      'Collect receivables aggressively.',
    ],
    week1Response: [
      'Switch to LC-at-sight with key buyers temporarily',
      'Alternative bank conversations (SBI, BoB, Axis) — compare offers',
      'Promoter loan / ECB / NCD alternatives review',
    ],
    month1Response: [
      'Re-bid banking relationship with 2-3 banks',
      'Diversify banking (max 50% with any single bank)',
      'Improve MIS reporting to bank',
    ],
    prevention: [
      'Quarterly bank reviews with transparent reporting',
      'Multi-bank relationship (never single bank dependency)',
      'Debt-equity discipline (< 1.4x)',
      'Reserve account 3 months WC',
    ],
    escapeValue: 'If survived, strengthens banking relationship discipline.',
  },
  {
    id: 'aggregator-cartel',
    title: 'Aggregator Cartel / Dockside Cash-Mafia Price Gouging',
    frequency: 'Chronic in some Konkan landings',
    immediateDamage: '5-15% price premium on auction lots; inconsistent quality.',
    cascadingDamage: 'Margin compression; quality issues; yield loss.',
    day1Response: [
      'Document pricing patterns across 2-3 landings.',
      'Engage ethical aggregator partners, pay them above-market to break cartel.',
      'Direct-boat-owner forward contracts with premium deposit.',
    ],
    week1Response: [
      'File complaint with District Fisheries Office (optional, slow)',
      'Coalition with other exporters to share intelligence',
      'Diversify landings geographically',
    ],
    month1Response: [
      'Long-term FPO-style cooperative formation with selected boat owners',
      'Boat-upgrade program (GPS + ice holds) to formalise relationships',
      'Block-chain traceability (if budget allows) to signal transparency',
    ],
    prevention: [
      'Forward-contract 40-50% of volume (not 100% auction-dependent)',
      'Multiple landing centres (spread cartel risk)',
      'Strong community engagement (Sindhudurg Tarkarli model)',
      'Fair-trade narrative for buyers who value origin transparency',
    ],
    escapeValue: 'Ongoing; tolerable with diversification; worsens if ignored.',
  },
  {
    id: 'buyer-bankruptcy',
    title: 'Major Buyer Bankruptcy / Payment Default',
    frequency: '1 in 20 US/EU importers hits payment issues over 3 years',
    immediateDamage: '₹1-3 cr receivables default (if buyer is 20% of revenue).',
    cascadingDamage: 'Cash-flow crunch; WC pressure.',
    day1Response: [
      'ECGC (Export Credit Guarantee Corp) policy activation.',
      'Legal notice + international trade dispute process.',
      'Alternative buyer outreach for redirected inventory.',
    ],
    week1Response: [
      'File ECGC claim with all documentation',
      'Receivables factoring/discounting alternative',
      'Re-size production for remaining buyers',
    ],
    month1Response: [
      'Credit insurance discipline on all new buyers > ₹50 L exposure',
      'Diversification KPI re-enforcement',
    ],
    prevention: [
      'ECGC insurance on all open-account buyers over ₹30 L exposure',
      'Concentration limit ≤18% single buyer',
      'Credit check at onboarding (Dun & Bradstreet or equivalent)',
      'LC at sight for first 6 months with any new buyer',
    ],
    escapeValue: 'ECGC covers 80-95% of default; remainder is our working loss.',
  },
  {
    id: 'regulatory-shock-tariff',
    title: 'Sudden Regulatory / Tariff Shock (USA, EU, etc.)',
    frequency: 'Every 18-36 months',
    immediateDamage: '15-25% tariff increase = margin compression or lost market access.',
    cascadingDamage: 'Buyer pressure; inventory redirection needed.',
    day1Response: [
      'Industry association (SEAI, MPEDA) lobby engagement.',
      'Legal counsel on tariff-saving structures (EPCG, Advance Authorisation).',
      'Buyer price-share negotiation (each absorb 50%).',
    ],
    week1Response: [
      'Divert container to alternate market',
      'Activate secondary-market buyer list',
    ],
    month1Response: [
      'Accelerate non-tariff-exposed market entry',
      'Update pricing to reflect new tariff structure',
      'Review India-EU FTA, CETA benefits',
    ],
    prevention: [
      '<15% exposure to any single tariff-volatile market (USA) by Y3',
      'Named secondary buyer per order',
      'Flexible bill-of-lading for redirect',
      '60-day WC buffer',
    ],
    escapeValue: '5-10% margin impact if diversified; existential if concentrated.',
  },
  {
    id: 'disease-outbreak-ap',
    title: 'EHP / WSSV / AHPND Disease Outbreak in AP Ponds',
    frequency: 'Major outbreaks every 3-5 years',
    immediateDamage: 'Farm-gate spike 30-50% in 3 weeks; supply shortage.',
    cascadingDamage: '2-3 month production disruption; yield pressure.',
    day1Response: [
      'Monitor APSSPA + ICAR-CIBA disease bulletins',
      'Diversify to Nellore / Odisha ponds',
      'Buyer transparency on supply',
    ],
    week1Response: [
      'Pre-purchase at higher prices to secure supply',
      'Pivot mix to wild-catch Konkan temporarily',
      'Pass 50% of cost to buyer (contractual floating clause)',
    ],
    month1Response: [
      'Build longer-term relationship with 3-4 geographic clusters (not just WG)',
      'Include disease-clause in supplier advances',
    ],
    prevention: [
      'Geographic diversification across AP + Nellore + Odisha',
      'FPO-level biosecurity + advance relationship',
      'Feed-supplier (Avanti/CP) disease monitoring intel subscription',
    ],
    escapeValue: '10-20% margin compression during outbreak; recoverable in 3-4 months.',
  },
  {
    id: 'msc-delay',
    title: 'MSC Fishery Certification Delay / Failure',
    frequency: 'Real risk for novel assessments (Lakshadweep)',
    immediateDamage: 'Pillar C premium pricing (+25-35%) unavailable until certified',
    cascadingDamage: 'Japan + US premium strategy delayed 12-24 months',
    day1Response: [
      'Transparent communication with Japanese buyers — "MSC delayed, same product without label available"',
      'Commodity-grade tuna export to China + SEA as fallback',
      'Re-engage MSC consultants on root cause of delay',
    ],
    week1Response: [
      'Accelerate FIP (Fishery Improvement Project) participation to demonstrate progress',
      'BAP / ASC alternatives for farmed where relevant',
    ],
    month1Response: [
      'Revenue forecast adjustment',
      'Buyer pipeline refocus on non-MSC-gated opportunities',
    ],
    prevention: [
      'Start MSC assessment M0 (do not wait for Y2)',
      'Co-fund with industry body + MPEDA to share costs',
      'Parallel FIP participation as interim',
    ],
    escapeValue: 'Kill-condition — triggers thesis review. Recoverable only with FIP bridge.',
  },
];
