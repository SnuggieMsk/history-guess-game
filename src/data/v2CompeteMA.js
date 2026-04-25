// V2 — Competitor M&A timeline + cap table + founder events. Industry intel for our wargame.

export const competitorMAevents = [
  // Avanti
  { year: 2002, company: 'Avanti Feeds', event: 'Thai Union Frozen Products acquires 14.99% strategic stake', impact: 'Tilapia + tuna processing know-how + global market access' },
  { year: 2010, company: 'Avanti Feeds', event: 'Capacity expansion in Kovvur + Pamarru (₹150 cr capex)', impact: 'Doubles feed capacity to 600k MT/yr' },
  { year: 2016, company: 'Avanti Feeds', event: 'Frozen foods division spun off as Avanti Frozen Foods Pvt Ltd', impact: 'Allows TUF to take 40% directly in frozen foods' },
  { year: 2018, company: 'Avanti Frozen Foods', event: 'Thai Union acquires 40% of Avanti Frozen Foods', impact: 'Cement long-term commitment; access TUF buyer network globally' },
  { year: 2025, company: 'Avanti Group', event: 'JV with R&B Food Supply + Thai Union for India domestic market', impact: 'First major branded retail entry; targeting Indian consumer market' },
  // Apex
  { year: 1995, company: 'Apex Frozen Foods', event: 'Founded as partnership "Apex Exports"', impact: 'Lease processing facility model' },
  { year: 2012, company: 'Apex Frozen Foods', event: 'Converted to private limited', impact: 'Corporate structure for institutional finance' },
  { year: 2014, company: 'Apex Frozen Foods', event: 'Aggressive value-added line capex (₹120 cr)', impact: 'Cooked + breaded shrimp lines; ~38% VA share achieved' },
  { year: 2017, company: 'Apex Frozen Foods', event: 'NSE/BSE IPO', impact: 'Public listing; ₹152 cr raised; institutional shareholders enter' },
  { year: 2018, company: 'Apex Frozen Foods', event: 'Aggressive capacity doubling on US tariff window', impact: 'D/E rises to 1.4-1.8x; long-tail risk' },
  { year: 2024, company: 'Apex Frozen Foods', event: 'BRC certification + UK CETA pivot', impact: 'New EU + UK private label pipeline' },
  // Nekkanti
  { year: 1983, company: 'Nekkanti Sea Foods', event: 'NSR Murty incorporates company', impact: 'AP shrimp pioneer' },
  { year: 1989, company: 'Nekkanti Sea Foods', event: 'Own Visakhapatnam plant commissioned', impact: 'Departed from leased model' },
  { year: 1995, company: 'Nekkanti Sea Foods', event: 'Backward integration into deep-sea trawling', impact: 'Wild + farmed mix' },
  { year: 2008, company: 'Nekkanti Sea Foods', event: 'BAP certification', impact: 'Walmart + Costco unlock' },
  { year: 2014, company: 'Nekkanti Sea Foods', event: 'Lighthouse brand US retail launch', impact: 'Branded shelf presence (small)' },
  // Devi
  { year: 1992, company: 'Devi Sea Foods', event: 'Brahmanandanam Portu founds company', impact: 'AP shrimp; first-gen entrepreneur' },
  { year: 2002, company: 'Devi Sea Foods', event: 'Own hatchery + feed mill operational', impact: 'Most vertically integrated AP player' },
  { year: 2015, company: 'Devi Sea Foods', event: 'Best Aqua Exporter award by Govt of AP', impact: 'Industry recognition + reputation' },
  { year: 2017, company: 'Devi Sea Foods', event: 'India\'s highest seafood + shrimp exporter (FY16-17)', impact: 'Peak market share moment' },
  { year: 2019, company: 'Devi Sea Foods', event: 'Multi-state expansion (TN + Odisha)', impact: 'Geographic diversification' },
  // IFB Agro
  { year: 1982, company: 'IFB Agro', event: 'Bijon Nag incorporates as Nag Bottling and Packaging', impact: 'Initial bottling business' },
  { year: 1986, company: 'IFB Agro', event: 'Public Ltd; renamed IFB Agro Industries Limited', impact: 'Diversification into spirits + IMFL' },
  { year: 2005, company: 'IFB Agro', event: 'Marine division formalised; Vasai (Maharashtra) plant commissioned', impact: 'Entry into seafood export' },
  { year: 2024, company: 'IFB Agro', event: 'Founder Bijon Nag dies (Jan 2024)', impact: 'Strategic uncertainty; succession ongoing' },
  // Gadre
  { year: 1973, company: 'Gadre Marine', event: 'Deepak Gadre starts as Tata Oil Mills processing contractor', impact: 'Industry entry as service provider' },
  { year: 1978, company: 'Gadre Marine', event: 'Formally founded; Mirkarwada plant', impact: 'Frozen shrimp under Meena brand' },
  { year: 1999, company: 'Gadre Marine', event: 'Arjun Gadre joins family business', impact: 'Generational transition; surimi pivot begins' },
  { year: 2004, company: 'Gadre Marine', event: 'India\'s largest surimi value-added plant (Mirkarwada)', impact: 'Surimi monopoly in India' },
  { year: 2013, company: 'Gadre Marine', event: 'Acquired marine division of Hindustan Unilever (₹140 cr)', impact: 'Became 3rd largest surimi producer globally' },
  { year: 2020, company: 'Gadre Marine', event: 'B2C retail brand launch (Gadre Premium Seafood)', impact: 'Direct-to-consumer pivot; nascent but promising' },
  // Coastal Corp
  { year: 1981, company: 'Coastal Corp', event: 'T. Valsaraj founds company', impact: 'TN-Mumbai-AP plant network' },
  { year: 2008, company: 'Coastal Corp', event: 'Capacity expansion to ₹500+ cr revenue', impact: 'Peak operating scale' },
  { year: 2020, company: 'Coastal Corp', event: 'Margin compression begins (asset aging)', impact: 'Capex shy due to debt overhang' },
  // Falcon
  { year: 1983, company: 'Falcon Marine', event: 'Tara Ranjan Patnaik founds company in Bhubaneswar', impact: 'Odisha shrimp pioneer' },
  { year: 2010, company: 'Falcon Marine', event: 'Paradip port plant + Japan tuna market entry', impact: 'Diversification beyond shrimp' },
  { year: 2019, company: 'Falcon Marine', event: 'Cyclone Fani devastates plant (₹40-60 L damage)', impact: 'Insurance + ZLD upgrade' },
  { year: 2021, company: 'Falcon Marine', event: 'Cyclone Yaas damage', impact: 'Y2 revenue hit -15%' },
  // Sandhya Aqua
  { year: 1995, company: 'Sandhya Aqua', event: 'V. Vijay Kumar founds company in Bhimavaram, AP', impact: 'AP shrimp + value-added entry' },
  { year: 2018, company: 'Sandhya Aqua', event: 'Domestic retail entry — Metro Cash & Carry', impact: 'Dual-channel model' },
  { year: 2020, company: 'Sandhya Aqua', event: 'Reliance Stores + Nature\'s Basket distribution', impact: 'Premium domestic shelf' },
];

export const founderTimelines = {
  alluri: {
    name: 'Alluri Venkateswara Rao (founder, Avanti)',
    born: '1940s',
    journey: [
      '1972 — Background in fisheries; Andhra Pradesh aquaculture pioneer',
      '1993 — Founded Avanti Feeds with Pingtai (Taiwan) collaboration',
      '2000s — Built largest shrimp feed company in India',
      'd. ~2010 — Son Indra Kumar takes over leadership',
      '2017 — Indra Kumar engineers Thai Union frozen foods JV',
      'Today — Indra Kumar = listed-co Chairman; family ownership ~30% of Avanti Feeds',
    ],
  },
  karuturi: {
    name: 'Karuturi Satyanarayana Murthy (Apex)',
    born: '1965 (estimated)',
    journey: [
      '1995 — Started Apex Exports partnership (age ~30)',
      '2010s — Aggressive value-added shift',
      '2017 — Took company public on NSE/BSE',
      'Today — Aged 61; CMD; family owns ~50% of Apex Frozen Foods',
    ],
  },
  nsrMurty: {
    name: 'NSR Murty (Nekkanti)',
    born: 'Late 1940s',
    journey: [
      '1983 — Founded Nekkanti Sea Foods at age ~35',
      '1989 — Built own plant',
      '1990s — Backward integration into trawling',
      '2010s — Lighthouse brand US retail experiments',
      'Today — Family business; second generation Murty active',
    ],
  },
  brahmanandanam: {
    name: 'Brahmanandanam Portu (Devi Sea Foods)',
    born: '1960s (estimated)',
    journey: [
      '1992 — First-generation entrepreneur founds Devi Sea Foods',
      '2000s — Vertically integrated supply chain (hatchery + feed + farms + processing)',
      '2015 — Best Aqua Exporter award',
      'Today — Active CMD; growing 3,500+ employee organization',
    ],
  },
  bijonNag: {
    name: 'Bijon Bhushan Nag (founder, IFB)',
    born: '1933 (estimated)',
    journey: [
      '1957 — Mechanical engineer training',
      '1974 — Founded IFB Industries (home appliances)',
      '1982 — Founded IFB Agro (Nag Bottling)',
      '1986 — IFB Agro public listing',
      '1990s-2010s — Built diversified IFB group ($500+ mn revenue across companies)',
      'Jan 28, 2024 — Died at age ~91; family succession process initiated',
    ],
  },
  deepakGadre: {
    name: 'Deepak Gadre (founder, Gadre Marine)',
    born: '1940s (estimated)',
    journey: [
      '1973 — Started as Tata Oil Mills processing contractor',
      '1978 — Founded Gadre Marine; Mirkarwada plant',
      '1990s — Built export book on shrimp + cephalopod',
      '1999 — Son Arjun joins; surimi pivot',
      'Today — Senior Gadre semi-retired; Arjun Gadre = MD',
    ],
  },
  arjunGadre: {
    name: 'Arjun Gadre (Gadre Marine MD; second-generation)',
    born: '1970s (estimated)',
    journey: [
      '1999 — Joined family business after foreign education',
      '2004 — Engineered surimi pivot — first-mover advantage in India',
      '2013 — Acquired HUL marine division',
      '2020 — B2C brand launch',
      'Today — Active MD; positioned as industry thought-leader',
    ],
  },
  valsaraj: {
    name: 'T. Valsaraj (founder, Coastal Corp)',
    born: '1940s (estimated)',
    journey: [
      '1981 — Founded Coastal Corporation in Chennai',
      '1985-2000 — Built TN-AP-Maharashtra plant network',
      '2010 — Peak operations',
      'Today — Senior CMD; family succession unresolved',
    ],
  },
  taraPatnaik: {
    name: 'Tara Ranjan Patnaik (founder, Falcon Marine)',
    born: '1950s (estimated)',
    journey: [
      '1983 — Founded Falcon Marine in Bhubaneswar',
      '1990s-2000s — Built Odisha-coast operations',
      '2010s — Japan tuna market entry',
      'Today — Active CMD; coastal Odisha resilience builder',
    ],
  },
};

export const competitorAdvisorsAndAuditors = [
  { company: 'Avanti Feeds', auditor: 'Karvy Auditors / SR Batliboi', commercialBank: 'SBI + HDFC', merchantBanker: 'ICICI Securities (IPO)', advisors: 'Thai Union strategic + KPMG' },
  { company: 'Apex Frozen Foods', auditor: 'Karvy', commercialBank: 'Bank of Baroda + SBI', merchantBanker: 'Karvy Investor Services', advisors: 'CRISIL ratings' },
  { company: 'Nekkanti Sea Foods', auditor: 'Local AP CA firm', commercialBank: 'BoB + SBI', merchantBanker: 'N/A (private)', advisors: 'Family CFO' },
  { company: 'Devi Sea Foods', auditor: 'Local AP CA firm', commercialBank: 'SBI + Andhra Bank', merchantBanker: 'N/A', advisors: 'In-house team' },
  { company: 'IFB Agro', auditor: 'B Chhawchharia & Co', commercialBank: 'SBI + Axis', merchantBanker: 'IL&FS (historical)', advisors: 'Group internal' },
  { company: 'Gadre Marine', auditor: 'Local Maharashtra CA firm', commercialBank: 'BoB + ICICI', merchantBanker: 'N/A (private)', advisors: 'Family CFO + external' },
  { company: 'Coastal Corp', auditor: 'Local CA firm', commercialBank: 'SBI', merchantBanker: 'N/A', advisors: 'In-house' },
  { company: 'Falcon Marine', auditor: 'Local Odisha CA firm', commercialBank: 'BoB + SBI', merchantBanker: 'N/A', advisors: 'In-house' },
];

export const competitorPotentialMA = [
  { target: 'Coastal Corp', whyTarget: 'Aging assets + high debt + family succession unclear; likely M&A target by Y3-Y5', whoMightBuy: 'Devi Sea Foods (geographic expansion) or Apex (Maharashtra entry)', estValuationINRcr: '450-650 (1.3x revenue + asset value)' },
  { target: 'Sandhya Aqua', whyTarget: 'Sub-scale; could be PE roll-up target', whoMightBuy: 'Mid-size PE fund + private aggregator', estValuationINRcr: '380-500' },
  { target: 'Falcon Marine', whyTarget: 'Cyclone risk + sub-scale; family willing to exit', whoMightBuy: 'Devi or Apex or international Asian seafood major', estValuationINRcr: '500-700' },
  { target: 'IFB Agro Marine division', whyTarget: 'Founder transition + flat revenue; could be carved out', whoMightBuy: 'Gadre Marine (Maharashtra geographic synergy) or PE', estValuationINRcr: '600-900 (carve-out)' },
];
