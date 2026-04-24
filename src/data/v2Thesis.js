// V2 — sharpened thesis data (Option B + C)

export const thesisOneLiner = `India's first investor-grade live-seafood and MSC-certified pole-and-line tuna specialist — selling to premium Asian HoReCa and Japanese/European sashimi buyers. Commodity vannamei is cash-flow plumbing, not strategy.`;

export const pillars = [
  {
    id: 'B',
    title: 'Pillar B — Live Seafood to Asia Premium HoReCa',
    color: '#0d3b66',
    products: [
      { name: 'Live spiny lobster',     source: 'Konkan rocky reefs (Panulirus homarus + P. polyphagus)', fobUSD: '28-34/kg', gm: '28-34%', y3mt: 60 },
      { name: 'Live mud crab',          source: 'Sundarbans WB + Konkan creek',                            fobUSD: '15-18/kg', gm: '24-30%', y3mt: 80 },
      { name: 'Chilled whole pomfret',  source: 'Konkan air-freight',                                      fobUSD: '12-15/kg', gm: '18-22%', y3mt: 140 },
    ],
    buyers: 'HK + SG + Tokyo 5-star hotels; HK Sai Ying Pun specialty market; Toyosu distributors',
    whyWin: [
      'Geography: PNQ/BOM → DXB → HKG in 18-24 hr door-to-door',
      'Konkan rocky-reef lobster is high-quality; currently exported frozen-tail at ₹1,100-1,300/kg — live gets ₹2,400-2,900',
      'No Indian peer does live air-export from Maharashtra at investor-grade scale',
    ],
    y3RevenueINRcr: 44,
    gmPct: 26,
  },
  {
    id: 'C',
    title: 'Pillar C — MSC-Certified Pole-and-Line Tuna + Premium Cephalopods',
    color: '#2d6a4f',
    products: [
      { name: 'Yellowfin saku / CO-free loin', source: 'Lakshadweep pole-and-line',             fobUSD: '14-22/kg', gm: '28-35%', y3mt: 250 },
      { name: 'Octopus cooked + sliced',       source: 'Konkan + Lakshadweep (O. aegina, cyanea)', fobUSD: '8.5-11.5/kg', gm: '26-32%', y3mt: 450 },
      { name: 'Cuttlefish + skipjack',         source: 'Konkan landings',                         fobUSD: '4.5-7/kg',   gm: '17%',   y3mt: 250 },
    ],
    buyers: 'Mitsubishi, Maruha Nichiro, Nissui, Kyokuyo (Japan); Nueva Pescanova, Freiremar, Iberconsa (Spain); Whole Foods, Trader Joe\'s via Tradex/Slade Gorton (US post-MSC)',
    whyWin: [
      'MSC-premium is +25-35% pricing; Lakshadweep pole-and-line is eligible, India\'s commodity tuna peers aren\'t',
      'Morocco + Mauritania octopus supply down 22%; Spain actively scouting alternates',
      'Air freight Agatti → Kochi → PNQ feasible in 36-42 hrs for CO-free sashimi loin',
    ],
    y3RevenueINRcr: 83,
    gmPct: 26,
  },
  {
    id: 'Filler',
    title: 'Filler — Vannamei 31/40 Commodity (Cash-Flow Plumbing)',
    color: '#c5a565',
    products: [
      { name: 'Vannamei HLSO 31/40', source: 'AP West Godavari + Nellore belts', fobUSD: '5.9-6.5/kg', gm: '6-9%', y3mt: 800 },
    ],
    buyers: 'China wholesale (Zhenhaihua, Huangsha), SEA LC-at-sight traders',
    whyWin: [
      'Purely capacity-filler; do not chase US retail on this',
      'Zero credit risk (LC at sight)',
      'Fills IQF off-peak, turns WC, keeps power factor high',
    ],
    y3RevenueINRcr: 44,
    gmPct: 8,
  },
];

export const revenueMatrix = [
  { segment: 'Live lobster to HK/SG/JP',   mt: 60,  revINRcr: 17, gm: 30 },
  { segment: 'Live mud crab',              mt: 80,  revINRcr: 12, gm: 26 },
  { segment: 'Chilled whole pomfret air',  mt: 140, revINRcr: 15, gm: 20 },
  { segment: 'Yellowfin MSC saku/loin',    mt: 250, revINRcr: 34, gm: 30 },
  { segment: 'Octopus cooked/sliced',      mt: 450, revINRcr: 37, gm: 28 },
  { segment: 'Cuttlefish + skipjack',      mt: 250, revINRcr: 12, gm: 17 },
  { segment: 'Vannamei 31/40 China/SEA',   mt: 800, revINRcr: 44, gm:  8 },
];

export const killConditions = [
  {
    trigger: 'MSC pre-assessment fails for Lakshadweep fishery',
    effect: 'Pillar C premium collapses; thesis reverts to commodity tuna. 25-35% price premium lost.',
    mitigation: 'Co-fund MSC assessment early (₹20-30 L over Y1-Y3); diversify C mix toward octopus.',
  },
  {
    trigger: 'Live-cargo mortality averages >14% for 2 consecutive quarters',
    effect: 'HK relationship permanently damaged; Pillar B unit economics break.',
    mitigation: 'Phase 1 shipments <200 kg; carrier A/B test; quarterly mortality review with SOP revision.',
  },
  {
    trigger: 'Farm-gate vannamei >₹520/kg for 3+ months (Ecuador price war intensifies)',
    effect: 'Filler flips from cash-flow positive to drag; need to mothball vannamei line.',
    mitigation: 'Contract-float hedge with FPO; flex to 100% Pillar B+C if required.',
  },
  {
    trigger: 'Any RASFF / USFDA antibiotic positive event in first 18 months',
    effect: 'EU / US access compromised for 2-3 years.',
    mitigation: 'In-house ELISA + HPLC + NABL Y1; pond-level traceability; supplier exclusion clauses.',
  },
  {
    trigger: 'Combined-shock Y3 IRR < 12%',
    effect: 'Thesis materially damaged; consider strategic exit at breakeven.',
    mitigation: 'Quarterly stress-test; scenario review with board.',
  },
];

export const vsV1 = [
  { dim: 'Blended GM Y3',   v1: '11.5%',  v2: '22%' },
  { dim: 'Moat count',      v1: '1 (weak)', v2: '3 strong (MSC · live-cargo · Lakshadweep supply)' },
  { dim: 'Time to first revenue', v1: 'M13', v2: 'M10 (live GCC + China filler earlier)' },
  { dim: 'Vannamei share',  v1: '45%',    v2: '25% (filler only)' },
  { dim: 'US tariff exposure', v1: '30%+', v2: '<15%' },
  { dim: 'Subsidy capture', v1: '₹5.2 cr', v2: '₹6-7 cr (incl. MSC marine cert scheme)' },
];
