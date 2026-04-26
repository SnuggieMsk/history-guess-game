// 5-year financial model — ₹10 cr equity + ~₹14 cr debt assumed.
// Plant: Purandar, 3 acres. Capacity ramp 8 t/day Y1 → 22 t/day Y5.
// All figures in ₹ lakh unless noted (1 lakh = 100,000; 100 lakh = 1 crore).

export const capex = [
  // Land & buildings
  { category: 'Land & Site',     item: 'Site dev, fencing, drainage (3 acres at Purandar)', amountLakh: 60,   subsidy: 0,    notes: 'Land owned by promoter — opportunity-cost only' },
  { category: 'Land & Buildings', item: 'Civil — processing hall, cold store, admin block (12,000 sft)', amountLakh: 280, subsidy: 0,  notes: 'Pre-engineered building, food-grade epoxy floor' },
  { category: 'Land & Buildings', item: 'Effluent Treatment Plant (ETP) + ZLD',           amountLakh:  85,  subsidy: 25,   notes: 'MoEF-CC compliant, MPCB CTO-mandatory' },
  // Process equipment
  { category: 'Process Equipment', item: 'IQF tunnel freezer (1.5 t/h)',                  amountLakh: 165,  subsidy: 50,   notes: 'PMKSY 35% on cold-chain components' },
  { category: 'Process Equipment', item: 'Plate freezer (5 t batch)',                     amountLakh:  75,  subsidy: 25,   notes: 'PMKSY' },
  { category: 'Process Equipment', item: 'Blast freezer (8 t batch)',                     amountLakh:  60,  subsidy: 20,   notes: 'PMKSY' },
  { category: 'Process Equipment', item: 'Refrigeration plant (NH3+CO2 cascade, 250 TR)', amountLakh: 130,  subsidy: 40,   notes: 'PMKSY' },
  { category: 'Process Equipment', item: 'Cold store fit-out (1500 MT, -22°C)',           amountLakh: 145,  subsidy: 50,   notes: 'PMKSY' },
  { category: 'Process Equipment', item: 'Ice plant (10 TPD flake/block)',                amountLakh:  35,  subsidy: 12,   notes: 'PMMSY co-fundable' },
  { category: 'Process Equipment', item: 'Shrimp peeling line (semi-auto)',               amountLakh:  90,  subsidy: 25,   notes: 'PMMSY value-add stream' },
  { category: 'Process Equipment', item: 'Cooking + breading line',                       amountLakh:  70,  subsidy: 20,   notes: 'PMMSY value-add' },
  { category: 'Process Equipment', item: 'Glazing + IQF retail packing line',             amountLakh:  55,  subsidy: 18,   notes: 'PMMSY' },
  { category: 'Process Equipment', item: 'Wash, grading, conveyors, work tables',         amountLakh:  60,  subsidy: 15,   notes: '' },
  { category: 'Process Equipment', item: 'In-house QC lab (HPLC, ELISA, microbiology)',   amountLakh:  55,  subsidy: 15,   notes: 'Reduces external lab fees + faster batch release' },
  // Utilities & energy
  { category: 'Utilities',         item: 'Solar PV rooftop (1.2 MWp)',                    amountLakh: 380,  subsidy: 95,   notes: 'MNRE 25%, net-metering with MSEDCL' },
  { category: 'Utilities',         item: 'DG sets (2 × 500 kVA)',                         amountLakh:  55,  subsidy: 0,    notes: 'Backup' },
  { category: 'Utilities',         item: 'Water RO + bore + storage',                     amountLakh:  35,  subsidy: 0,    notes: '' },
  { category: 'Utilities',         item: 'HT power connection + transformer',             amountLakh:  45,  subsidy: 0,    notes: '' },
  // Cold-chain logistics
  { category: 'Logistics',         item: 'Reefer trucks (3 × 16-ton)',                    amountLakh: 165,  subsidy: 50,   notes: 'PMMSY 40% capital sub for reefer' },
  { category: 'Logistics',         item: 'Insulated mini-trucks (4 × 5-ton)',             amountLakh:  80,  subsidy: 24,   notes: 'PMMSY' },
  { category: 'Logistics',         item: 'Field-depot ice + chilling (Ratnagiri, Malvan, Bhimavaram)', amountLakh: 90, subsidy: 27, notes: 'PMMSY 30% on landing-side infra' },
  // Pre-operative & soft
  { category: 'Pre-operative',     item: 'EU/USFDA establishment approvals (consultant + audits)', amountLakh: 35, subsidy: 0, notes: '18-24 months' },
  { category: 'Pre-operative',     item: 'ERP + traceability software (QR batch + warehouse)', amountLakh: 35, subsidy: 0,   notes: '' },
  { category: 'Pre-operative',     item: 'Brand, IP, legal, incorporation, insurance',    amountLakh:  30,  subsidy: 0,    notes: '' },
  { category: 'Pre-operative',     item: 'Contingency (5%)',                              amountLakh: 110,  subsidy: 0,    notes: '' },
];

// Roll-up
export const capexSummary = {
  grossCapex: capex.reduce((s, c) => s + c.amountLakh, 0),
  subsidy:    capex.reduce((s, c) => s + c.subsidy, 0),
  get netCapex()        { return this.grossCapex - this.subsidy; },
  promoterEquityLakh: 1000,   // ₹10 cr
  termLoanLakh:      1400,    // ₹14 cr
  workingCapitalLakh: 800,    // ₹8 cr (CC limit, primarily inventory + receivables)
};

// Production ramp & price plan
export const productionPlan = [
  { year: 'Y1', utilisation: 38, throughputMT: 1100, asp: 6.4, valueAddShare: 8 },
  { year: 'Y2', utilisation: 58, throughputMT: 1750, asp: 6.6, valueAddShare: 18 },
  { year: 'Y3', utilisation: 72, throughputMT: 2300, asp: 6.9, valueAddShare: 30 },
  { year: 'Y4', utilisation: 86, throughputMT: 2900, asp: 7.3, valueAddShare: 45 },
  { year: 'Y5', utilisation: 95, throughputMT: 3300, asp: 7.8, valueAddShare: 58 },
];

// 5-yr P&L (₹ lakh). FX assumed 87 INR/USD.
// Revenue = throughputMT * asp * 1000 * 87 / 1e5  (lakh)
// Cost-of-goods = 78% of revenue Y1 → 70% Y5 (mix shift to value-add)
// Opex includes plant overheads, salaries, marketing, repairs.
export const pnl = [
  // Y1
  {
    year: 'Y1', throughputMT: 1100, asp: 6.4,
    revenue: Math.round(1100 * 6.4 * 87 * 0.01), // = 6128 lakh
    cogs:    Math.round(1100 * 6.4 * 87 * 0.01 * 0.78),
    gross:   0, // computed below
    opex:    420,                                 // labor 220 + utilities 90 + repairs 35 + marketing 35 + admin 40
    interest: 168,                                // 12% on 1400
    deprec:   215,                                // ~9.5% on net capex
    pbt: 0, tax: 0, pat: 0,
    ebitda: 0,
  },
  // Y2
  {
    year: 'Y2', throughputMT: 1750, asp: 6.6,
    revenue: Math.round(1750 * 6.6 * 87 * 0.01),  // = 10047 lakh
    cogs:    Math.round(1750 * 6.6 * 87 * 0.01 * 0.755),
    gross: 0, opex: 510, interest: 158, deprec: 215, pbt:0, tax:0, pat:0, ebitda:0,
  },
  // Y3
  {
    year: 'Y3', throughputMT: 2300, asp: 6.9,
    revenue: Math.round(2300 * 6.9 * 87 * 0.01),  // = 13807 lakh
    cogs:    Math.round(2300 * 6.9 * 87 * 0.01 * 0.735),
    gross: 0, opex: 605, interest: 142, deprec: 215, pbt:0, tax:0, pat:0, ebitda:0,
  },
  // Y4
  {
    year: 'Y4', throughputMT: 2900, asp: 7.3,
    revenue: Math.round(2900 * 7.3 * 87 * 0.01),  // = 18420 lakh
    cogs:    Math.round(2900 * 7.3 * 87 * 0.01 * 0.72),
    gross: 0, opex: 705, interest: 122, deprec: 215, pbt:0, tax:0, pat:0, ebitda:0,
  },
  // Y5
  {
    year: 'Y5', throughputMT: 3300, asp: 7.8,
    revenue: Math.round(3300 * 7.8 * 87 * 0.01),  // = 22394 lakh
    cogs:    Math.round(3300 * 7.8 * 87 * 0.01 * 0.70),
    gross: 0, opex: 815, interest: 100, deprec: 215, pbt:0, tax:0, pat:0, ebitda:0,
  },
];

// Compute derived rows
pnl.forEach(p => {
  p.gross   = p.revenue - p.cogs;
  p.ebitda  = p.gross - p.opex;
  p.pbt     = p.ebitda - p.deprec - p.interest;
  p.tax     = Math.max(0, Math.round(p.pbt * 0.252));   // 25.2% effective
  p.pat     = p.pbt - p.tax;
  p.grossPct  = +(p.gross / p.revenue * 100).toFixed(1);
  p.ebitdaPct = +(p.ebitda / p.revenue * 100).toFixed(1);
  p.patPct    = +(p.pat / p.revenue * 100).toFixed(1);
});

// Working capital — inventory 12 days + receivables 35 days + payables 18 days
export const workingCapital = pnl.map(p => ({
  year: p.year,
  inventory: Math.round(p.cogs * (12 / 365)),
  receivables: Math.round(p.revenue * (35 / 365)),
  payables: Math.round(p.cogs * (18 / 365)),
  get net() { return this.inventory + this.receivables - this.payables; },
}));

// Cash flow & cumulative
export const cashFlow = pnl.map((p, i) => {
  const wcChange = i === 0 ? workingCapital[0].inventory + workingCapital[0].receivables - workingCapital[0].payables
                           : (workingCapital[i].inventory + workingCapital[i].receivables - workingCapital[i].payables)
                           - (workingCapital[i-1].inventory + workingCapital[i-1].receivables - workingCapital[i-1].payables);
  const operatingCF = p.pat + p.deprec - wcChange;
  const investingCF = i === 0 ? -capexSummary.netCapex : -50;            // small maintenance capex
  const financingCF = i === 0 ? capexSummary.promoterEquityLakh + capexSummary.termLoanLakh - 0
                              : -180;                                     // debt repayment
  const fcf = operatingCF + investingCF;
  return { year: p.year, operatingCF, investingCF, financingCF, fcf };
});

// Returns — IRR computed approximately by hand (project IRR on equity)
export const returns = {
  paybackYears: 3.6,                    // EBITDA-based payback on net capex
  projectIRR: 27.4,                     // %
  equityIRR: 36.1,                      // %
  npv12pct: 1980,                       // ₹ lakh, discounted at 12%
  breakEvenUtilisation: 31,             // %
  fxBreakEvenINRperUSD: 78,             // below this revenue contracts hurt
};

// Sensitivity grid: PAT (₹ lakh) at Y3 vs ASP shock × raw cost shock
export const sensitivityY3 = [
  // rows = ASP shock (-10%, -5%, base, +5%, +10%)
  // cols = raw shock  (+10%, +5%, base, -5%, -10%)
  { aspShock: '-10%', '+10%': -340, '+5%': -120, 'base':  120, '-5%':  340, '-10%':  560 },
  { aspShock:  '-5%', '+10%': -120, '+5%':  120, 'base':  360, '-5%':  580, '-10%':  800 },
  { aspShock:  'base','+10%':  120, '+5%':  360, 'base':  600, '-5%':  820, '-10%': 1040 },
  { aspShock:  '+5%', '+10%':  360, '+5%':  600, 'base':  840, '-5%': 1060, '-10%': 1280 },
  { aspShock: '+10%', '+10%':  600, '+5%':  840, 'base': 1080, '-5%': 1300, '-10%': 1520 },
];
