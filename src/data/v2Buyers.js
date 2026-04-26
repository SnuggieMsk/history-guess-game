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

// V2 — named buyer directory per market

export const buyerMarkets = [
  {
    id: 'hk',
    market: 'Hong Kong',
    role: 'Pillar B primary — live seafood',
    shareY3: 14,
    revINRcr: 24,
    buyers: [
      { name: 'Cheung Kee Sea Products (HK) Ltd',  type: 'Importer',         note: '~30% HK mud crab import share (VERIFY)'  },
      { name: 'Cheung Kong Seafood Ltd',            type: 'Importer',         note: '~24% HK mud crab share'                   },
      { name: 'Chi Ho Sea Products Co.',            type: 'Importer',         note: '~18% share; premium species'              },
      { name: 'Fat Kee Seafood Trading',            type: 'Importer',         note: 'Specialty live species; yellow-oil crabs' },
      { name: 'Worldwide Seafood Ltd',              type: 'Hotel supplier',    note: '5-star hotel grade; lobster focus'        },
      { name: 'Synergy Seafood Ltd',                type: 'Importer',         note: 'Mid-size distributor'                     },
    ],
    endBuyers: ['Four Seasons HK (Lobster Bar & Grill)', 'Mandarin Oriental HK', 'Shangri-La HK', 'Peninsula HK', 'Grand Hyatt HK'],
    tradeFair: 'HKTDC Hong Kong Intl Food Expo (Aug); Seafood Expo Asia',
    regulatory: 'AFCD import permit; FEHD clearance; CITES NOC if listed',
    credit: 'LC at sight first 6 months → 30-day sight LC after',
    entryPath: 'Year 1: 3 supply relationships across volume (Cheung Kee/Kong) + quality (Fat Kee) + hotel (Worldwide Seafood). Trial 100-200 kg shipments before term-sheet.',
  },
  {
    id: 'sg',
    market: 'Singapore',
    role: 'Pillar B secondary — live + chilled seafood',
    shareY3: 6,
    revINRcr: 10,
    buyers: [
      { name: 'Song Fish Dealer Pte Ltd',    type: 'Wholesaler',       note: 'Dominant SG live-seafood' },
      { name: 'Tien Wang Seafood',           type: 'Importer',         note: 'Specialty live crab, lobster' },
      { name: 'Quiet Mind Seafood',          type: 'Importer',         note: 'Mid-tier live-seafood' },
    ],
    endBuyers: ['Marina Bay Sands', 'Raffles', 'Capella', 'St. Regis'],
    tradeFair: 'Food & Hotel Asia (FHA) Singapore, April 2027',
    regulatory: 'SFA (Singapore Food Agency) permit',
    credit: '30-60 day LC; faster reliability than HK',
    entryPath: 'SG is lower-friction than HK — Indian origin viewed favourably. Pre-fair meetings with top 4 importers. Booth ₹15-20 L one-off.',
  },
  {
    id: 'jp',
    market: 'Japan',
    role: 'Pillar C primary — MSC tuna + sashimi-grade',
    shareY3: 18,
    revINRcr: 31,
    buyers: [
      { name: 'Mitsubishi Corporation',   type: 'Sogo shosha',      note: 'Seafood div sources worldwide; Seafresh brand' },
      { name: 'Maruha Nichiro Corp',      type: 'Sogo shosha',      note: 'Japan\'s largest seafood co. (¥1.6 tn rev); bluefin farming leader' },
      { name: 'Nissui (Nippon Suisan)',   type: 'Integrated',        note: 'Nippon Access distribution' },
      { name: 'Kyokuyo Co.',              type: 'Specialist',        note: 'Mid-size tuna + pelagic' },
      { name: 'Mitsui & Co.',             type: 'Sogo shosha',      note: 'Canned tuna + frozen imports (skipjack filler)' },
      { name: 'Ricardo Fuentes & Sons JP',type: 'Tuna specialist',   note: 'Bluefin-focused; instructive benchmark' },
      { name: 'True World Foods JP',      type: 'Sashimi distr.',    note: 'US-origin but operates in JP' },
    ],
    endBuyers: ['Toyosu Wholesale Market (Tokyo)', 'Osaka Central Wholesale Market', '7-Eleven Japan (RTE)', 'Aeon supermarket'],
    tradeFair: 'Japan Intl Seafood Show, Tokyo, August',
    regulatory: 'MHLW registration + 2-3 day pre-arrival notification',
    credit: 'First on LC; relationship → 30-45 day open account. Very reliable payers.',
    entryPath: 'MSC is the foot in door. Without MSC = no real conversation. Attend Tokyo fair post-MSC pre-assessment; samples to sogo shosha QC ahead of show. First commercial shipment Q3 of Y2.',
  },
  {
    id: 'es',
    market: 'Spain',
    role: 'Pillar C cephalopod primary',
    shareY3: 14,
    revINRcr: 24,
    buyers: [
      { name: 'Nueva Pescanova SL',     type: 'Vertically integrated', note: 'Redondela, Galicia; world-first octopus captive breeding' },
      { name: 'Freiremar SA',           type: 'Vigo importer',         note: 'Large frozen octopus; Morocco historical source' },
      { name: 'Pereira Group (Pescapuerta)', type: 'Vigo importer',   note: 'Mid-large distributor' },
      { name: 'Grupo Profand',          type: 'Importer',              note: 'Growing octopus line' },
      { name: 'Grupo Iberconsa',        type: 'Importer',              note: 'Hake + octopus + squid; recent ownership change' },
      { name: 'Caladero',               type: 'Retail supply',         note: 'Mercadona exclusive historically; private label' },
    ],
    endBuyers: ['Mercadona supermarkets', 'Carrefour Spain', 'Iberian HoReCa chain'],
    tradeFair: 'Conxemar, Vigo, October',
    regulatory: 'EU establishment number via MPEDA (12-18 month)',
    credit: '60-90 day open account post-relationship; first LC',
    entryPath: 'Start with frozen-whole octopus (raw-material grade) to prove capability. Upgrade to cooked + sliced in Y2. "Reliable Indian alternate to Morocco" is the core pitch.',
  },
  {
    id: 'us',
    market: 'USA',
    role: 'Opportunistic Y2+ only',
    shareY3: 6,
    revINRcr: 10,
    buyers: [
      { name: 'Eastern Fish Company',        type: 'Importer',       note: 'Teaneck NJ; SAIL brand; 40-yr old; best for commodity + future live' },
      { name: 'Pacific American Fish (PAFCO)', type: 'Importer',     note: 'Vernon CA; 3,000+ SKUs; Oceankist, Pacific Surf brands' },
      { name: 'Pacific Seafood Group',       type: 'Integrated',     note: 'Clackamas OR; largest US integrated' },
      { name: 'Tradex Foods Inc',            type: 'MSC distributor',note: 'Canada/US; 40M lbs/yr; MSC + RFM + Ocean Wise certified' },
      { name: 'Slade Gorton & Co.',          type: 'Importer',       note: 'Boston; oldest US seafood importer' },
      { name: 'Lusamerica Foods',            type: 'Distributor',    note: 'California; mid-size' },
      { name: 'North Coast Seafoods',        type: 'Distributor',    note: 'Boston wholesaler' },
    ],
    endBuyers: ['Whole Foods Market (MSC + BAP)', 'Trader Joe\'s (MSC private-label)', 'Costco (MSC premium + commodity)'],
    tradeFair: 'Seafood Expo North America, Boston, March',
    regulatory: 'USFDA Establishment Registration + Prior Notice; LAAF lab recognition',
    credit: 'Open account 30-45 days via broker; letter of credit via principal',
    entryPath: 'DO NOT target USA Y1-Y2. Y2 end soft entry via Eastern Fish (commodity shrimp). Y3 MSC tuna via Tradex/Slade Gorton to Whole Foods / Trader Joe\'s.',
  },
  {
    id: 'gcc',
    market: 'GCC',
    role: 'Y1 easy entry — diaspora + Ramadan',
    shareY3: 7,
    revINRcr: 12,
    buyers: [
      { name: 'Gulf Seafood Ltd',          type: 'Hypermarket supply', note: 'UAE + onward distribution' },
      { name: 'Seafood Souq',              type: 'B2B marketplace',    note: 'Dubai' },
      { name: 'Al Safadi Group',           type: 'Foodservice',        note: 'Hotels + caterers' },
      { name: 'BinZagr Co.',               type: 'Institutional',      note: 'Saudi Arabia' },
    ],
    endBuyers: ['Lulu Hypermarkets', 'Carrefour UAE', 'Union Coop', 'Al Meera (Qatar)', 'Panda (Saudi)'],
    tradeFair: 'Gulfood, Dubai, February',
    regulatory: 'MPEDA HACCP + Halal; no separate facility reg required',
    credit: '30-day OA or LC via diaspora Indian trader',
    entryPath: 'Easiest Y1 entry. Ethnic retail via Dubai-based trader. Ramadan shrimp + pomfret peak. Target ₹7-10 cr Y1 revenue.',
  },
  {
    id: 'cn',
    market: 'Mainland China',
    role: 'Cash-flow filler — commodity LC-at-sight',
    shareY3: 13,
    revINRcr: 22,
    buyers: [
      { name: 'Zhenhaihua Seafood Wholesale (Zhoushan)', type: 'Wholesale market', note: 'Zhejiang pelagic + cephalopod hub' },
      { name: 'Guangzhou Huangsha Aquatic Wholesale',    type: 'Wholesale market', note: 'Southern China' },
      { name: 'Tsingtao Fresh Seafood Group',            type: 'Importer',          note: 'NE China distribution' },
      { name: 'Shanghai Fisheries Group',                type: 'State-linked',      note: 'Large volume' },
      { name: 'Sichuan Haidilao Global Foods',           type: 'Hotpot procurement',note: 'Ribbonfish + squid for hotpot chain' },
    ],
    endBuyers: ['Haidilao (1,500+ outlets)', 'Xiabuxiabu, Coucou, Banu (hotpot)', 'Shanghai/Beijing sashimi restaurants'],
    tradeFair: 'China Fisheries & Seafood Expo, Qingdao, November',
    regulatory: 'GACC Regulation 248 facility registration (6-12 month)',
    credit: '100% LC at sight — zero credit risk',
    entryPath: 'Target commodity vannamei + ribbonfish + squid via Zhoushan/Huangsha wholesale. Y1 revenue ₹6-9 cr. ≤12% of total revenue.',
  },
];
