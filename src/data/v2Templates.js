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

// V2 — Templates: LOIs, MoUs, term sheets, pitch deck, JDs

export const templates = [
  {
    id: 'buyer-loi',
    title: 'Buyer Letter of Intent (LOI)',
    use: 'First serious buyer expressing interest. Non-binding indication of volume + price.',
    keyClauses: [
      'Parties + addresses',
      'Product description (species, count/grade, packing spec)',
      'Target volume (MT/year) and tentative shipment cadence',
      'Price formula or band ($/kg FOB)',
      'Quality + certification requirements (HACCP, BAP/MSC, antibiotic limits)',
      'Currency + payment terms (LC at sight / OA 30/60/90)',
      'Validity (typically 90 days)',
      'Non-binding language (no liability for failure to execute)',
      'Confidentiality clause',
      'Governing law + jurisdiction',
      'Signatures + designations',
    ],
    redFlags: ['Buyer asking for exclusivity without commitment', 'Vague volume', 'Unilateral price-revision rights'],
  },
  {
    id: 'supplier-moa',
    title: 'Supplier MoU / Forward Contract',
    use: 'Lock in tonnage with a Konkan aggregator or AP FPO. Binding on minimum volumes + pricing formula.',
    keyClauses: [
      'Parties + supplier KYC (PAN, GST, address proof, beneficiary bank details)',
      'Species + grade specifications',
      'Volume commitment (minimum MT/season + target)',
      'Pricing formula (e.g., MPEDA published index ± X%)',
      'Quality acceptance criteria + grading procedure (with arbitration clause)',
      'Delivery schedule + truck collection logistics',
      'Payment terms (advance %, on-delivery %, credit days)',
      'Quality rejection process (returnable, by-product, supplier credit)',
      'Antibiotic / banned-substance exclusion clause (zero tolerance, blacklist on positive)',
      'Force majeure (cyclone, ban, disease outbreak, govt action)',
      'Confidentiality + non-circumvention',
      'Renewal + termination (60-90 day notice)',
      'Dispute resolution (mediation → arbitration → courts)',
      'Governing law (typically Maharashtra)',
    ],
    redFlags: ['No KYC verification', 'No quality rejection mechanism', 'Verbal-only commitments'],
  },
  {
    id: 'bank-termsheet',
    title: 'Term Loan Term-Sheet (₹16 cr)',
    use: 'Bank pre-approval for term loan. Signed before final sanction; sets boundaries of negotiation.',
    keyClauses: [
      'Borrower + co-borrower / personal guarantor names',
      'Loan amount: ₹16 cr',
      'Interest rate (linked to MCLR / EBLR + spread; e.g., MCLR + 1.50%)',
      'Tenor: 10 years',
      'Moratorium: 24 months (interest payable; principal deferred)',
      'Repayment: monthly EMI post-moratorium',
      'Security: hypothecation of plant + machinery + first charge on land + second charge on stock',
      'Personal guarantee from promoters',
      'Margin: 25% of project cost',
      'Disbursement schedule: tranche-linked to civil + equipment milestones',
      'Stipulated DSCR maintenance: 1.5× minimum',
      'Insurance: full plant + business interruption insurance assigned to bank',
      'Default events: payment delay, RASFF/USFDA alert, environment violation, change in control',
      'Pre-payment penalty (typically 2% on prepay before Y5)',
      'Reporting: quarterly stock + book-debt + CMA financials',
      'Subsidy assignment: PMMSY tranches to flow through escrow',
    ],
    redFlags: ['Floating rate without cap', 'Unilateral rate-revision clause', 'Excessive penal interest'],
  },
  {
    id: 'sha',
    title: 'Shareholders Agreement (SHA)',
    use: 'Promoter and co-investor governance, pre-money equity raise.',
    keyClauses: [
      'Equity ownership and class of shares (Equity, CCPS, etc.)',
      'Board composition (right to nominate, observer rights)',
      'Reserved matters (decisions requiring majority of all shareholders)',
      'Affirmative voting items (typically 12-15)',
      'ESOP pool size (target 6%)',
      'Anti-dilution rights (broad-based weighted average preferred)',
      'Tag-along, drag-along, ROFR / ROFO rights',
      'Vesting schedule for promoters (typically 4 yr with 1 yr cliff)',
      'Lock-in period (3-5 years)',
      'Exit: IPO, trade sale, secondary, dividend',
      'Liquidation preference (1× non-participating preferred)',
      'Information rights (monthly MIS, audited financials, budgets)',
      'Confidentiality + non-compete (5-year radius)',
      'Dispute resolution (arbitration; LCIA / SIAC / Mumbai)',
      'Governing law',
    ],
    redFlags: ['Founder vesting without cliff', 'Unrestricted dilution rights', 'Excessive lock-in for minority investors'],
  },
  {
    id: 'pitchdeck',
    title: 'Investor Pitch Deck (15 slides)',
    use: 'Bank, PE investors, strategic partners. Standard structure.',
    keyClauses: [
      '1. Title — company + tagline + funding ask',
      '2. Problem — Indian seafood export commoditization + opportunity gap',
      '3. Solution — Konkan Seafoods thesis (Pillar B+C)',
      '4. Market — India seafood ₹72k cr; B+C addressable ₹6-8k cr',
      '5. Product — species portfolio + value-add roadmap',
      '6. Traction — supplier MoUs signed, buyer LOIs, PMMSY DPR submitted',
      '7. Business model — revenue mix + margin profile per pillar',
      '8. Competition — vs AP majors + Maharashtra incumbents (positioning matrix)',
      '9. Why now — PMMSY window + CETA + Morocco octopus crunch',
      '10. Team — promoters + key hires + advisors',
      '11. Go-to-market — Y1-Y5 market entry sequence',
      '12. Financials — 5-yr P&L, cash flow, returns (bear/base/bull)',
      '13. Use of funds — capex breakdown + working capital',
      '14. Ask — ₹14 cr equity + co-investor terms (pre-money valuation)',
      '15. Roadmap — 36-month milestones',
    ],
    redFlags: ['No competitive analysis', 'Hockey-stick projections without supporting drivers', 'Unrealistic exit timing'],
  },
  {
    id: 'jd-qchead',
    title: 'Job Description: QC + Compliance Head (sample)',
    use: 'Hire #2-3 for the company. Make sure you get the right person.',
    keyClauses: [
      'Reports to: COO / CEO',
      'Direct reports: 2 chemists + 2 microbiologists + 1 lab supervisor + line QC inspectors',
      'Qualifications: M.Sc. Food Tech / Microbiology / Biochemistry; 8+ years seafood QC',
      'Mandatory: HACCP certification (BV/SGS/DNV); experience with USFDA + EU exports',
      'Preferred: NABL ISO 17025 lead-auditor experience; familiarity with PMMSY DPR',
      'Responsibilities: HACCP plan + audits, all CCP monitoring, lab operations, antibiotic + micro testing, retention samples, traceability oversight, regulatory liaison (MPEDA + USFDA + EU + AQCS), audit coordination, supplier qualification audits, customer complaint root cause',
      'KPIs: zero RASFF / USFDA alerts, ≥99.5% batch-level traceability, lab turnaround <24 hr standard / <4 hr antibiotic, audit pass rate ≥98%',
      'Compensation: ₹3.5-5 L/month + ESOP 0.5-1% + performance bonus',
      'Travel: 15-20% (supplier audits, fairs, certification body visits)',
    ],
  },
];

export const downloadable = [
  'Buyer LOI template (.docx) — coming Q2',
  'Supplier MoU template (.docx)',
  'Bank term sheet template (.docx)',
  'SHA template (.docx)',
  'Investor pitch deck template (.pptx)',
  'JD pack: 12 roles (.zip)',
  'Financial model (.xlsx)',
  'Board pack template (.pptx)',
  'HR manual + Employee handbook (.docx)',
];
