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

// V2 L6 — Reality checks: what actually kills new seafood-export entrants

export const failureModes = [
  {
    rank: 1,
    failure: 'USFDA / EU RASFF antibiotic detention',
    pctOfFailures: 28,
    examples: 'At least 12 named Indian exporters have been "import-alert listed" by USFDA since 2015 (full alphabetical list on FDA OASIS). Once listed, every shipment is detained until 5 consecutive clean lots clear automatic sampling.',
    rootCause: 'Outsourced antibiotic screening (slow turnaround) + supplier blacklist not enforced + retention samples missing or <6 months',
    timeToDeath: '12-24 months from first import alert to bankruptcy',
    survivor: 'Only those with in-house ELISA + HPLC-MS/MS + NABL lab + supplier exclusion clauses survive',
    ourMitigation: 'In-house lab from Day 1 (₹85L capex); pond-level traceability; 100% antibiotic screening on every lot; 6-month retention samples',
  },
  {
    rank: 2,
    failure: 'Working capital starvation / bank WC withdrawal',
    pctOfFailures: 22,
    examples: 'During 2020-21 COVID logistics crisis, 8+ Indian exporters had WC limits frozen by SBI/BoB after RASFF events. Inventory pile-up + supplier non-payment cascade.',
    rootCause: 'Single-bank dependency + no DSRA reserve + WC cycle longer than CC limit cover + buyer payment delays compound',
    timeToDeath: '60-90 days from WC freeze to insolvency',
    survivor: 'Multi-bank relationships + 3-month WC reserve + ECGC export credit insurance + factoring backup',
    ourMitigation: 'Multi-bank from Y1 (max 50% any single bank); ECGC on all OA buyers >₹30L; factoring relationship with SBI Global Factors',
  },
  {
    rank: 3,
    failure: 'Buyer concentration crisis (top buyer bankruptcy or churn)',
    pctOfFailures: 14,
    examples: 'In 2019, a major Indian exporter lost 60% of revenue when its top US buyer went bankrupt. ECGC paid 80% but cash flow collapsed before claim settled.',
    rootCause: 'Top buyer >40% of revenue + no ECGC + no diversification cushion + slow buyer-pipeline rebuild',
    timeToDeath: '6-12 months',
    survivor: 'Concentration discipline (top buyer <18% by Y3) + ECGC + 60-day inventory redirect SOP',
    ourMitigation: 'Hard cap 18% top-buyer share by Y3; ECGC on every OA shipment; named secondary-market backup per route',
  },
  {
    rank: 4,
    failure: 'AP disease outbreak supply collapse',
    pctOfFailures: 11,
    examples: 'EHP+WSSV outbreak 2019 killed 30% AP crop. Exporters with 100% AP supply lost 6 months of throughput. 4-5 mid-size exporters did not survive.',
    rootCause: 'Single-region supply concentration + no Konkan/Lakshadweep alternates + farmer advance book exposure',
    timeToDeath: '12-18 months (cascading inventory and contract failures)',
    survivor: 'Geographic diversification + alternate sourcing pipeline + Konkan/Lakshadweep activation',
    ourMitigation: 'Konkan supply 35-40% of mix from Y2; AP diversified across WG + EG + Nellore; Lakshadweep tuna independent',
  },
  {
    rank: 5,
    failure: 'Cyclone landfall + inadequate insurance',
    pctOfFailures: 8,
    examples: 'Cyclone Fani 2019 caused 5+ Odisha exporters to suspend operations 3-6 months. 2 did not reopen.',
    rootCause: 'No Business Interruption insurance + plant in cyclone-prone coastal location + no inventory buffer at inland warehouses',
    timeToDeath: '6-12 months',
    survivor: 'Comprehensive BI insurance + inland warehouse 200km+ from coast + cyclone-rated civil',
    ourMitigation: 'Purandar plant inland 150km from coast; BI insurance ₹6-10L/yr; 12-day FG inventory buffer always',
  },
  {
    rank: 6,
    failure: 'Founder bandwidth + governance failure',
    pctOfFailures: 7,
    examples: 'Anonymized 2022 case: family-run exporter ₹240cr revenue had founder dispute; CFO + Head of Sales quit; 6 months later filed for insolvency.',
    rootCause: 'Founder-only decision making + no independent board + key-person dependency + family disputes',
    timeToDeath: '6-18 months',
    survivor: 'Professional CEO from Day 1 + 2-3 independent directors + ESOP locked retention + key-man insurance',
    ourMitigation: 'CEO hire Day 1 (₹7-8L/mo + ESOP); 2 independent directors; ESOP 6% pool with 4-yr vesting; key-man insurance ₹3-5cr',
  },
  {
    rank: 7,
    failure: 'Tariff / trade-war absorption shock',
    pctOfFailures: 5,
    examples: 'When US escalated tariffs 26% in 2025, several USA-concentrated exporters absorbed 50%+ → margin collapsed → 3 mid-size companies could not service term loan.',
    rootCause: 'USA concentration >50% of revenue + no flexible bill-of-lading + slow secondary-market activation',
    timeToDeath: '12-24 months',
    survivor: 'USA <35% revenue cap + named secondary buyer per order + 60-day WC buffer for redirects',
    ourMitigation: 'USA <15% by Y3; CETA UK + Asia premium + GCC diaspora as primary',
  },
  {
    rank: 8,
    failure: 'Live-cargo mass mortality event chain',
    pctOfFailures: 4,
    examples: 'A 2021 case: Indian exporter shipped 800kg lobster via Qatar; 4-hr DOH transit delay; 60% mortality. Insurance claim disputed; HK importer relationship lost.',
    rootCause: 'Inadequate purge + cool-down protocol + non-named-cargo insurance + unproven carrier',
    timeToDeath: '6-9 months (relationship death is faster than financial death)',
    survivor: 'Best-in-class SOP + named insurance + Y1 small parcel discipline + quarterly mortality review',
    ourMitigation: 'Y1 max 200kg per shipment; 24-hr purge + 6-hr cool-down; Emirates SkyCargo primary + Qatar backup; named-cargo insurance',
  },
  {
    rank: 9,
    failure: 'Aged-asset compounding losses',
    pctOfFailures: 4,
    examples: 'Several 1990s-era plants (Coastal Corp, etc.) running at 60% yield vs modern 67% — 5% gross margin penalty compounds + capex shy due to debt → spiral.',
    rootCause: 'No capex reinvestment + outdated equipment + lower yields + higher labour ratios',
    timeToDeath: '5-10 year slow death; M&A is exit',
    survivor: 'Greenfield modernity + recapitalization every 7-8 years',
    ourMitigation: 'New-build with 7-yr depreciation horizon; reinvestment plan Y6-Y8',
  },
  {
    rank: 10,
    failure: 'PMMSY/PMKSY subsidy non-realization or clawback',
    pctOfFailures: 3,
    examples: 'Several DPRs (~5-7) were clawed back after FY22 audit because plants did not meet BAP/HACCP commitments by milestone date.',
    rootCause: 'Over-promising in DPR + missing milestones + utilization certificate (UC) failures + state DoF disputes',
    timeToDeath: 'Subsidy clawback shocks WC; cascade to insolvency 12-18 months',
    survivor: 'Realistic DPR + on-time milestones + UC discipline + state DoF relationship',
    ourMitigation: 'Conservative DPR submission; consultant-backed UC docs; state DoF quarterly meetings',
  },
  {
    rank: 11,
    failure: 'Dockside cartel / aggregator monopoly squeeze',
    pctOfFailures: 2,
    examples: 'Konkan: 2-3 aggregators have controlled dockside pricing for years; new entrants pay 5-15% premium for inconsistent supply quality.',
    rootCause: 'No direct boat-owner relationships + 100% auction-dependent + no FPO bypass',
    timeToDeath: 'Slow margin erosion 2-4 years',
    survivor: 'Forward contracts 40-50% of volume + boat-owner equity scheme + multiple landings',
    ourMitigation: 'Forward 40% Konkan via 30-40 boat owners; 5% equity pool incentive; FPO via Sindhudurg co-op',
  },
  {
    rank: 12,
    failure: 'EU RASFF cumulative scrutiny escalation',
    pctOfFailures: 2,
    examples: 'Indian shrimp had 14 RASFF detentions in 2019 → EU placed India on enhanced sampling 25%+ for 18 months. 2 mid-size EU-focused exporters could not absorb cost.',
    rootCause: 'Industry-level reputation drag + per-shipment 25%+ test cost + delays + buyer churn',
    timeToDeath: '18-24 months',
    survivor: 'Top-tier internal QC reputation + buyer transparency + MPEDA escalation channel',
    ourMitigation: 'Best-in-class lab; transparent buyer comms; MPEDA partnership',
  },
];

export const survivorshipStats = {
  totalNewEntrants_2018_2024: 'Estimated 50-70 new seafood-export incorporations',
  estimatedSurvived: '12-18 (24-30%)',
  estimatedFailed: '32-50 (65-75%)',
  estimatedAcquired: '6-10 (12-15%)',
  insight: 'Brutal industry. ~70% mortality rate on new entrants in 5-7 years. The 24-30% who survive are disproportionately those who: (a) had in-house QC lab Day 1, (b) avoided buyer concentration, (c) built supplier relationships beyond auction, (d) maintained low debt-equity, (e) had professional CEO from Day 1.',
};

export const survivorPlaybook = [
  'Spend money on QC lab BEFORE you spend on second processing line. Compliance failures kill faster than capacity shortages.',
  'Hire a real CEO from Day 1 even if it costs ₹8L/month. Founder-only operation = founder-bandwidth ceiling.',
  'Sign ECGC export credit insurance on ALL open-account buyers > ₹30L exposure. Non-negotiable.',
  'Multi-bank from Day 1 (max 50% any single bank). Single bank = single point of failure.',
  'Top buyer must NEVER exceed 18% of revenue by Y3. Diversify even when one buyer wants all the volume.',
  'Build supplier relationships beyond auction-only. Forward contracts 30-50% of volume; boat-owner equity scheme.',
  'No commodity-only single-species play. Mix at least 3 product categories.',
  'No single-region geography. Konkan + AP + Lakshadweep + WB diversification.',
  '12-day finished-goods inventory buffer minimum. Cyclone, strike, port congestion all consume this.',
  'Real Business Interruption insurance + product recall insurance + key-man + D&O. Insurance discipline.',
  'Quarterly board reviews with kill-condition tracking. Pre-defined exit triggers, not reactive panic.',
  'Document everything. SOPs, retention samples, training records. RASFF response window is 48 hours; preparation is everything.',
];

export const investorRedFlags = [
  '> 35% of revenue from single buyer',
  '> 50% of revenue from single market',
  '> 80% of revenue from single species',
  'D/E > 1.6×',
  'WC days > 80',
  'No in-house antibiotic screening lab',
  'No NABL accreditation by Y2',
  'No professional CEO',
  'No independent directors',
  'No ECGC insurance',
  'Single-bank concentration > 60%',
  'Plant on coast with no BI insurance',
  'PMMSY DPR over-promises (utilization commitments)',
  'No retention samples for 6 months',
  'Outsourced QC lab',
];
