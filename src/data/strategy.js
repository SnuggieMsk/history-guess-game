// PESTEL, Porter's Five Forces, SWOT, MOAT — strategy frameworks for the
// Maharashtra-Purandar seafood-export business.

export const pestel = {
  political: [
    { factor: 'PMMSY (₹20,050 cr scheme, ₹2,500 cr FY27 outlay)',                 impact: '+', detail: 'Capex subsidies up to 40% on processing, cold chain, transport' },
    { factor: 'India-UK FTA (CETA, signed 2025)',                                 impact: '+', detail: 'Duty-free access for shrimp, pomfret, cephalopods to UK retail' },
    { factor: 'India-EU FTA negotiations',                                        impact: '+', detail: 'Resumption boosts EU access; potential 4-7% duty cut on shrimp' },
    { factor: 'US Reciprocal tariffs (2025-26)',                                  impact: '-', detail: 'Indian shrimp facing tariff escalation; -14.5% YoY value to USA' },
    { factor: 'Maharashtra Industrial Policy 2024 — food processing incentive',    impact: '+', detail: '5-7 yr SGST refund, electricity duty exemption for new plants' },
    { factor: 'GST refund delays (state level)',                                  impact: '-', detail: 'Working-capital drag of 60-90 days on input GST' },
  ],
  economic: [
    { factor: 'INR weakness vs USD (₹85-90 range)',                                impact: '+', detail: 'Every ₹1 depreciation adds ~1.4% to FOB margins' },
    { factor: 'Diesel + power tariffs (Maharashtra HT)',                          impact: '-', detail: 'Maharashtra HT power 8.5-9.5/kWh — costliest among coastal states' },
    { factor: 'Capital cost (term loan 11-12.5%)',                                impact: '-', detail: 'NABARD/SIDBI lines available at 8.5-9.5% with PMMSY' },
    { factor: 'Global shrimp price cycle (recovering 2026)',                       impact: '+', detail: 'Ecuador production cap + Vietnam disease = price tailwind' },
    { factor: 'Container freight rates (Red Sea volatility)',                      impact: '-', detail: '40\' reefer USA lane $5500-7500 vs $3500 historic' },
    { factor: 'Indian seafood exports CAGR 8-10%',                                 impact: '+', detail: '₹72,325 cr in FY26, target ₹1 lakh cr by FY30' },
  ],
  social: [
    { factor: 'Konkan fishing communities (organised cooperatives)',               impact: '+', detail: 'Long-standing relationships through MFCS; co-op equity model possible' },
    { factor: 'Women workforce availability',                                      impact: '+', detail: 'Pune-Konkan women labor pool; 60-70% of processing labor in industry' },
    { factor: 'Migration of Konkan youth to cities',                               impact: '-', detail: 'Skilled boat-crew shrinking; mechanisation needed' },
    { factor: 'Rising domestic seafood consumption',                               impact: '~', detail: 'Domestic market growing 9% but lower margin than export' },
    { factor: 'Buyer ESG pressure (EU, US retailers)',                             impact: '+/-', detail: 'Drives premium for traceability; cost for non-compliance' },
  ],
  technological: [
    { factor: 'IQF / cryogenic freezing maturity',                                 impact: '+', detail: 'Indian-made tunnels at 60% cost of imports; LN2 cryo expanding' },
    { factor: 'Blockchain traceability (IBM Food Trust, RaftLab)',                 impact: '+', detail: 'EU buyers willing to pay 5-8% premium for QR-verified origin' },
    { factor: 'AI grading (vision-based size & defect detection)',                 impact: '+', detail: 'Reduces manual grading cost 30-40%; pilots from Bengaluru startups' },
    { factor: 'Cage-culture tech for finfish (RGCA, CMFRI)',                       impact: '+', detail: 'Cobia, pompano, seabass commercial-ready' },
    { factor: 'EDI / e-EIC integration',                                            impact: '+', detail: 'Cuts export-doc time from 3 days to 6 hours' },
  ],
  environmental: [
    { factor: 'Closed fishing season (Jun-Aug, west coast)',                       impact: '-', detail: 'Idle plant 2-3 months unless stocked + multi-source' },
    { factor: 'Climate change → fish migration patterns',                          impact: '-', detail: 'Mackerel, sardine moving north; ribbonfish landings volatile' },
    { factor: 'EPR (Extended Producer Responsibility) on packaging',                impact: '-', detail: 'Plastic packaging compliance cost +1.5-2% of opex' },
    { factor: 'Effluent norms (CPCB) on processing',                               impact: '-', detail: 'ZLD mandatory; ETP capex ₹85 lakh' },
    { factor: 'MSC / ASC / BAP certification ecosystem',                           impact: '+', detail: 'Lakshadweep tuna MSC-eligible; ASC certifies vannamei farms' },
    { factor: 'Microplastic & antibiotic residue scrutiny',                        impact: '-', detail: 'EU rejection events 12-18/year industry-wide; QC arms race' },
  ],
  legal: [
    { factor: 'Marine Products Export Development Authority (MPEDA) Act',          impact: '+', detail: 'Mandatory registration; provides export support infrastructure' },
    { factor: 'Export Inspection Council (EIC) Health Certificate regime',         impact: '+/-', detail: 'EU/USFDA Equivalence accepted; document-heavy' },
    { factor: 'Maharashtra Marine Fishing Regulation Act',                         impact: '~', detail: 'Boat licensing, mesh size, fishing-zone rules' },
    { factor: 'FSSAI for value-added products',                                    impact: '+/-', detail: 'Required for retail-ready packs; well-documented' },
    { factor: 'GSP+ / FTAs (EU, UK, ASEAN, GCC)',                                  impact: '+', detail: 'Tariff arbitrage; specific to product HS codes' },
    { factor: 'Coastal Regulation Zone (CRZ) for landing infra',                   impact: '-', detail: 'Field depots near coast need CRZ clearance — Purandar plant unaffected' },
  ],
};

export const portersFiveForces = [
  {
    force: 'Buyer Power',
    rating: 'High',
    score: 4,
    drivers: [
      'Top 10 US importers control 60% of vannamei volume',
      'EU retail chains (Lidl, Aldi, Carrefour) dictate spec, price, packaging',
      'Switching costs low — buyers swap suppliers within a quarter',
      'Costco/Walmart audits annually — non-pass = delisting',
    ],
    mitigation: [
      'Diversify across 8-10 anchor buyers per market',
      'Build retail private-label co-pack relationships (sticky)',
      'Direct foodservice (HoReCa) channel for premium species',
    ],
  },
  {
    force: 'Supplier Power',
    rating: 'Medium',
    score: 3,
    drivers: [
      'Vannamei farmers can sell to multiple processors (esp. AP)',
      'Boat-owners in Konkan auction catch at landing — spot pricing',
      'Hatcheries (CP, BMR, Avanti) concentrated',
    ],
    mitigation: [
      'Pre-financed contracts with farmers (10-20% advance)',
      'Field depots with ice = first-right-of-purchase',
      'Equity-share model with key boat-owner cluster',
    ],
  },
  {
    force: 'Threat of New Entrants',
    rating: 'Medium-Low',
    score: 2,
    drivers: [
      'Capex barrier ₹20-30 cr minimum',
      '24-month EU/USFDA approval timeline',
      'Buyer relationships take 3-5 years to mature',
    ],
    mitigation: [
      'Early certification investment (Y1-Y2)',
      'Lock-in long-term buyer MOUs',
      'PMMSY subsidy moat shrinks as policy expands — speed matters',
    ],
  },
  {
    force: 'Threat of Substitutes',
    rating: 'Medium',
    score: 3,
    drivers: [
      'Plant-based shrimp (US: New Wave, Konscious) — niche but growing',
      'Ecuadorian vannamei substitutable for Indian',
      'Vietnam value-added pangasius substitutes for white fish',
    ],
    mitigation: [
      'Differentiate via origin storytelling (Konkan wild, MSC tuna)',
      'Premium niche species (lobster, tiger, octopus) low-substitute',
      'Build private-label cost-leadership for commodity SKUs',
    ],
  },
  {
    force: 'Industry Rivalry',
    rating: 'High',
    score: 5,
    drivers: [
      '600+ MPEDA-registered exporters',
      'AP majors (Avanti, Apex, Devi) operate at 10x our scale',
      'Maharashtra incumbents (Gadre, Jeelani) hold buyer relationships',
      'Global Ecuador/Indonesia/Vietnam competition',
    ],
    mitigation: [
      'Compete on multi-species mixed-container value (vs single-SKU AP)',
      'Maharashtra-origin premium for pomfret, lobster',
      'Live air-export niche — few competitors from this region',
    ],
  },
];

export const swot = {
  strengths: [
    '₹10 cr promoter equity — adequate for Phase-1 capex with PMMSY/PMKSY stack',
    'Greenfield plant — modern HACCP design from day-one (vs incumbent retrofits)',
    '3 acres at Purandar — solar-PV viable, expansion headroom',
    'Pune-Konkan labor pool combines technical (QA, food-tech) + manual (processing) skills',
    'Promoter\'s land already secured — saves ₹3-5 cr opportunity cost vs competitors',
    'Multi-species sourcing access (Konkan wild + AP farmed)',
  ],
  weaknesses: [
    'Inland plant adds ₹18-25/kg first-mile cold-chain cost vs coastal competitors',
    'No existing buyer relationships → 18-24 month sales ramp',
    'No EU/USFDA establishment number on day 1',
    'Brand-new traceability vs incumbents\' decade-old buyer trust',
    'No own farming/hatchery (must buy raw, exposes to price spot)',
    'Smaller scale vs AP majors — container economics weaker initially',
  ],
  opportunities: [
    'GAP species (lobster live, octopus, yellowfin tuna, cobia, mud crab) where India under-supplies',
    'India-UK CETA: 0% duty on processed seafood from FY26',
    'Maharashtra-origin pomfret/lobster premium positioning to GCC and EU ethnic',
    'PMMSY scheme runway through FY30 — capex stack still attractive',
    'US tariff diversification → buyers actively scouting non-AP alternates',
    'NMIA / Purandar airport future cargo capacity for live + premium air',
    'Cage-culture JV with Konkan fishers — cobia/seabass/pompano vertical integration',
    'Private-label co-pack demand growing 14% pa among EU retailers',
  ],
  threats: [
    'Antibiotic residue rejections (EU RASFF events) — single batch can blacklist plant for 3-6 months',
    'Climate-driven shifts in Konkan fish migration',
    'Container freight volatility (Red Sea, Suez)',
    'AP shrimp majors entering Maharashtra via leased capacity',
    'Vietnam/Ecuador price wars in low-spec vannamei',
    'PMMSY subsidies could be pared if fiscal pressure rises',
    'Power tariff escalation in Maharashtra',
    'Buyer concentration risk (top-3 buyers > 50% of revenue in early years)',
  ],
};

export const moatLayers = [
  {
    layer: 'Geographic Moat — "Maharashtra-origin" multi-species',
    description: 'AP majors do vannamei. Coastal Maharashtra incumbents do mixed but at sub-scale. We position as the only modern integrated player offering Konkan wild (pomfret, lobster, squid) + AP farmed (vannamei) in mixed reefer containers — a value combination buyers pay 6-10% premium for.',
    timeToBuild: '18-24 months',
    defensibility: 'Medium-high — geography is unique, replication needs ₹25 cr+ and similar relationships',
  },
  {
    layer: 'Cost Moat — Solar + scheme stack + own reefers',
    description: '1.2 MWp rooftop solar cuts power cost 25-30% (single-largest opex line). PMMSY+PMKSY+MNRE subsidy stack reduces effective capex 22%. Owned reefer fleet on AP lane locks the long-haul cost. Combined effect: 4-6 ppt EBITDA margin advantage over peers by Y3.',
    timeToBuild: '12-18 months (capex install)',
    defensibility: 'Medium — others can copy, but PMMSY window is closing; first-mover wins',
  },
  {
    layer: 'Trust & Traceability Moat',
    description: 'Day-1 QR-code batch tagging from boat→pack. NABL-equivalent in-house lab. EU/USFDA approval as Year-1 milestone. Blockchain pilot with one anchor EU retailer for premium. This becomes the "tell" buyers cite when justifying our 5-8% premium.',
    timeToBuild: '24-36 months (cert + reputation)',
    defensibility: 'High — reputation compounds; EU rejections are catastrophic for competitors',
  },
  {
    layer: 'Channel Moat — Live + Premium Air-Export',
    description: 'Few Maharashtra exporters do live lobster + live mud crab via PNQ/CSMIA. Build daily air-cargo consolidation with 2-3 specialty importers in Hong Kong, Singapore, Dubai. Margins 25-30% vs frozen 12-18%. Volumes small (50-100 MT/yr) but high $/kg locks in relationships.',
    timeToBuild: '6-12 months',
    defensibility: 'High — niche air logistics is operationally hard',
  },
  {
    layer: 'Supplier Moat — Konkan Boat-Owner Equity Pool',
    description: 'Offer 5-10% equity in a Konkan landing-cooperative SPV to a cluster of 30-50 boat-owners in Mirkarwada, Malvan, Devgad. Pre-financing + first-right-to-buy + transparent grading + faster payment cycles vs traditional commission agents (3-5 days vs 15-30 days). Locks supply during peak premium-season Oct-Mar.',
    timeToBuild: '12-18 months',
    defensibility: 'Very high — switching cost for boat-owners is real',
  },
  {
    layer: 'Product Moat — GAP-species portfolio',
    description: 'Build expertise in 4-5 GAP species (octopus, yellowfin tuna, cobia, mud crab, live lobster) where Indian supply is fragmented and global demand is firm. Each becomes a $3-8 mn niche by Y5; combined ~25% of revenue at >20% gross margin.',
    timeToBuild: '24-48 months',
    defensibility: 'High — needs species-by-species sourcing know-how',
  },
  {
    layer: 'Brand Moat — Private-label specialist',
    description: 'Not an FMCG brand. Position as a co-pack manufacturing partner to EU retail (Lidl, Aldi, Carrefour, Tesco) and US club (Costco, Sam\'s). Their recipe IP, our execution. Sticky 3-5 year contracts; recipe specifications create switching cost.',
    timeToBuild: '24-36 months',
    defensibility: 'Medium-high — once embedded in buyer SKU portfolio, very hard to displace',
  },
];
