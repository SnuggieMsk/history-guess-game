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

// V2 L8 - DPR walkthrough chapter 10-18 (compact part 2)

export const dprWalkthroughCh10to18 = [
  {
    ch: 10, title: 'Quality SOPs + Food Safety',
    sampleSections: [
      { sect: '10.1 5 CCPs', sample: 'CCP-1 Receiving temp ≤2°C; CCP-2 Sanitizer 5-10 ppm Cl; CCP-3 IQF endpoint ≤-18°C core; CCP-4 Metal detector Fe1.2/nFe1.8/SS2.5mm; CCP-5 Container seal verification' },
      { sect: '10.2 Antibiotic screen', sample: '7 analytes: CAP (LOD 0.1ppb, action 0.1), Nitrofurans (0.5/0.5), OTC (25/100 EU), Sulfonamides (10/100), Enrofloxacin (0.5/zero), Malachite Green (0.5/zero), Crystal Violet (0.5/zero); 100% lots tested for CAP+nitrofurans+enrofloxacin+MG; ELISA screen <4hr; LC-MS/MS confirmation 24hr' },
      { sect: '10.3 Microbio', sample: 'APC <5×10⁵ CFU/g; E.coli <10; Salmonella absent in 25g; Vibrio para+chol absent; Listeria absent (RTE); Histamine <100ppm tuna' },
      { sect: '10.4 Traceability', sample: 'RFID per crate + batch ID linking to pond/boat + harvest date + feed mill batch (for shrimp); QR on master carton; retention sample 1kg/lot × 6 months' },
      { sect: '10.5 Failure response SOPs', sample: 'CAP positive: hold + LC-MS/MS confirm 24hr + supplier audit + retention review; APC excursion: reprocess if spec allows + RCA 48hr; metal detector reject>5/hr: stop line + traceback + magnetic re-check' },
    ],
  },
  {
    ch: 11, title: 'Live Cargo Operations',
    sampleSections: [
      { sect: '11.1 Spiny lobster SOP', sample: 'Catch→ice 30 min → 24hr purge salt-water 16-18°C → 4-6hr cool to 10-14°C → EPS box 30L wall 35-40mm + 6-8 gel packs + Sargassum bedding → 12 lobsters/box (~10 kg)' },
      { sect: '11.2 Carrier protocol', sample: 'Emirates SkyCargo primary BOM-DXB-HKG (18-24hr); Qatar QR backup BOM-DOH-HKG; Lufthansa for EU; SQ for SG; mortality target <10% with 18-24hr door-to-door' },
      { sect: '11.3 Permits', sample: 'AQCS Mumbai health certificate (24-48hr lead); MPEDA live-export endorsement; destination permit (HK AFCD / SG SFA / JP MHLW / mainland CIQ); insurance all-risks 3-5% cargo value' },
      { sect: '11.4 Cost structure 500kg lobster BOM-HKG', sample: 'Purging+cool+pack ₹6.5k + truck Ratnagiri-BOM ₹18k + airport handle ₹4.5k + air freight ₹110k @₹220/kg + dest handle ₹8k + docs ₹3k + insurance ₹45k = total ₹195k (₹390/kg landed cost)' },
      { sect: '11.5 Y1-Y4 ramp', sample: 'Y1: 2 shipments/wk × 200-400 kg HK only Emirates; Y2: 4×/wk add SG Qatar; Y3: 6×/wk add Tokyo SQ; Y4: 8-10×/wk add KL+Manila+Bangkok' },
    ],
  },
  {
    ch: 12, title: 'Organization + HR',
    sampleSections: [
      { sect: '12.1 Y3 org chart', sample: 'CEO + COO + CFO + Head QC + Head Sales + Head HR (6 leadership ~₹26L/mo); 14 middle mgmt + specialists ~₹20L/mo; 152 workforce ~₹6L/mo; total payroll ₹52L/mo = ₹6.2 cr/yr' },
      { sect: '12.2 Recruitment channels', sample: 'Mahila Mandal SHG networks (processing line ~70% women); ITI Pune + MIT-ADT food tech (cold chain + technical); Bharati Vidyapeeth biotech (QC + lab); Ratnagiri co-op for 12 anchor graders (Konkan-origin mentors)' },
      { sect: '12.3 Wage bands ₹/month', sample: 'Processing line entry ₹18k → ₹22k Y1-end (PF+ESI Day 1); helpers ₹14k; cold-chain ops ₹22k; lab tech ₹28k; supervisor ₹40k; manager ₹85k; head ₹2-5L; CEO ₹8L + ESOP' },
      { sect: '12.4 Benefits stack', sample: 'PF + ESI Day 1 mandatory; bus from 5 pickups; subsidised canteen ₹15/meal; women hostel 60 beds; on-site crèche PMKVY; ESOP 6% pool top 25 employees; quarterly safety+yield bonuses' },
      { sect: '12.5 Attrition targets', sample: 'Y1 28% (industry avg 40-55%); Y3 12% (via anchor-crew + benefits + career path); 70% women workforce on line; 85% local hiring Pune+Satara+Solapur' },
    ],
  },
  {
    ch: 13, title: 'ESG + Environmental Impact',
    sampleSections: [
      { sect: '13.1 ZLD water', sample: '95% recovery target Y2; 250 m³/day intake at Y3 throughput; ₹2.2 cr ZLD capex + ₹0.25/kL recovered opex' },
      { sect: '13.2 Solar PV', sample: '1.2 MWp avoiding ~1,200 MT CO2/yr; net-metering MSEB; AccDep tax shield' },
      { sect: '13.3 Bycatch + sustainability', sample: 'MMFRA-compliant sourcing only; 35mm cod-end mesh trawl + 25mm purse-seine; TED for shrimp boats (US export gate); annual CMFRI bycatch survey publication' },
      { sect: '13.4 Social audit', sample: 'Sedex SMETA 4-pillar audit of Konkan + AP suppliers within 18 months MoU; SA 8000 by Y3; child labour exclusion; migrant worker PF+ESI' },
      { sect: '13.5 Climate adaptation', sample: '+50cm flood-line; cyclone-rated Cat-3; rainwater harvest 200m³ buffer; backup supply MoUs Karwar+Mangalore; GHG accounting Y2+ Scope 1+2' },
    ],
  },
  {
    ch: 14, title: 'Financial Projections',
    sampleSections: [
      { sect: '14.1 Capex breakdown ₹L', sample: 'Land 150 + Civil 460 + Processing (IQF+plate+cold+grading+reefer dock) 1010 + Live tanks 65 + Solar 480 + DG+LT+HT 140 + RO+ZLD 220 + Reefer fleet 368 + Lab 120 + MSC co-fund 75 + Pre-op+contingency 350 + WC injection 800 = ₹4238 L (₹42.4 cr)' },
      { sect: '14.2 Funding plan', sample: 'Promoter equity ₹14 cr + Term loan ₹16 cr (10yr/9.5%/24-mo morat) + WC limit ₹10 cr + Subsidy ₹6-7 cr (PMMSY+PMKSY tranche-timed) - PMMSY claim ₹6 cr (40% on ₹15 cr eligible processing)' },
      { sect: '14.3 5-yr P&L ₹L', sample: 'Y1 rev 2400 EBITDA-240 (-10%) PAT-620; Y2 8500 / 680 (8%) / 190; Y3 16865 / 2790 (16.5%) / 1720 (10.2%); Y4 20800 / 3940 (18.9%) / 2580 (12.4%); Y5 24300 / 4895 (20.1%) / 3300 (13.6%)' },
      { sect: '14.4 DSCR', sample: 'Y1 moratorium; Y2 4.5x (interest only); Y3 7.2x; Y4 10.4x; Y5 13.2x; bank min 1.5x easily met' },
      { sect: '14.5 Sensitivity', sample: 'Single shock IRR range: USA tariff persists 16.2%; +Vannamei -10% 14.5%; +FX 82 12.8%; +MSC 12-mo delay 9.4%; +mortality 15% 7.1%; full-stress 5.2%; bull case 29.5%' },
      { sect: '14.6 Returns', sample: 'Bear Y5 175cr/11% IRR 10% payback 7.2yr; Base 243cr/20.1% IRR 18% payback 5.4yr; Bull 315cr/23% IRR 28% payback 3.8yr' },
      { sect: '14.7 Kill conditions', sample: '5 explicit: MSC fails / live mortality >14% 2Q / vannamei farm-gate >₹520 3 mo / RASFF positive in first 18mo / combined-shock IRR <12%' },
    ],
  },
  {
    ch: 15, title: 'Implementation Schedule',
    sampleSections: [
      { sect: '15.1 Pre-construction M-6 to M0', sample: 'M-8: DPR consultant; M-5: DPR drafting; M-3: PMMSY+PMKSY+MIDC submissions; M0: kick-off + civil starts on at-risk basis' },
      { sect: '15.2 Construction M1-M9', sample: 'M1-M5 civil; M4-M6 HACCP-grade interior; M6-M8 equipment install (IQF + cold store + plate freezer + ZLD); M5-M8 utilities (solar + DG + RO); M8-M9 lab + RAS commissioning' },
      { sect: '15.3 Commissioning M9-M12', sample: 'M9-M10 dry+wet trials yield+temp validation; M10-M11 HACCP audit close-out 5-10 obs; M11 MPEDA per-establishment code; M12 first GCC trial shipment' },
      { sect: '15.4 Y1 ops M13-M24', sample: 'Ramp 600→1100 MT throughput; first GCC+CN+SG contracts; USFDA FFR M14; EU prep audits M18-M24; cooking line DPR for tranche 2 M22' },
      { sect: '15.5 Y2 expansion M25-M36', sample: 'Cooking + breading line commissioning M25-M28; first US retail post-USFDA M28+; EU number live M28; live-lobster route commissioning M27; first MSC tuna saku Q3 M32; cobia cage JV first harvest M32-M36' },
      { sect: '15.6 Critical path', sample: 'M-1 TL sanction + PMMSY DPR; M9 commissioning; M13 first export; M18 USFDA audit; M24 EU number live (unlocks 30%+ revenue); M30 cooking line live; M36 first cage harvest' },
    ],
  },
  {
    ch: 16, title: 'Subsidy + Incentive Application',
    sampleSections: [
      { sect: '16.1 PMMSY claim ₹L', sample: 'Civil 460 × 40% = 184; IQF+plate 410 × 40% = 164; Cold storage 240 × 40% = 96; Grading + conveyors 190 × 40% = 76; Reefer dock 90 × 40% = 36; Lab 120 × 40% = 48; total ₹604 L (₹6 cr) at 40% subsidy on processing-eligible items' },
      { sect: '16.2 PMKSY claim', sample: 'Reefer fleet ₹368 L × 35% = ₹128 L; Cold store separately partition (avoid double-dip with PMMSY); RO+ZLD ₹55 L; Total ₹250-300 L (₹2.5-3 cr)' },
      { sect: '16.3 MNRE solar', sample: 'Direct subsidy ₹35-50 L; AccDep NPV ₹50-80 L over Y1-Y2; net-metering monthly bill credits' },
      { sect: '16.4 NABARD AIF', sample: 'Interest subvention 3% on TL up to ₹2 cr = ₹6 L/yr × 7 yr = ₹42 L (NPV ₹25-30 L); CGTMSE guarantee top-up' },
      { sect: '16.5 EPCG + RoDTEP', sample: 'EPCG: zero-duty import IQF+plate+lab; duty saving ₹40-60 L; export obligation 6× over 6 yr. RoDTEP: 1.5% weighted avg of FOB recurring' },
      { sect: '16.6 MH state', sample: 'Industrial Policy 2024 D-zone: 7-yr SGST refund (₹3-5 cr cumulative), elec duty exemption ₹1/unit, stamp duty exemption ₹6L, interest subsidy 5% × 7 yr (cap ₹50L/yr)' },
    ],
  },
  {
    ch: 17, title: 'Risk Register + Mitigations',
    sampleSections: [
      { sect: '17.1 Top-12 risks', sample: 'Antibiotic detention CAP/nitrofuran (L Med-High × I Critical = score 12); USA tariff (H × H = 9); monsoon trawl ban Jun-Jul (Cert × Med = 8); buyer concentration (M × H = 6); FX (M × H = 6); Ecuador price war (M × H = 6); cyclone (M × H = 6); etc.' },
      { sect: '17.2 Insurance coverage', sample: '12 lines: Marine cargo ₹4-6 L/yr; Live animal cargo ₹3-5 L; Plant+M fire ₹5-8 L; Machinery breakdown ₹2-4 L; BI ₹6-10 L; Product recall ₹8-15 L; Public liability ₹1-2 L; WC/ESI ₹2-3 L; D&O ₹3-5 L; Key-man ₹2-4 L; Cyber ₹1-3 L; ECGC export credit ₹4-7 L' },
      { sect: '17.3 5 kill conditions', sample: 'See ch 14.7 - quarterly board review with explicit triggers' },
      { sect: '17.4 BCP', sample: 'Plant down >7 days: switch to 3PL emergency processing at IFB Vasai or Coastal Mumbai (MoU pre-arranged); supplier disruption: backup MoUs Karwar + Mangalore; key-person loss: succession plan documented + COO redundancy' },
    ],
  },
  {
    ch: 18, title: 'Appendices',
    sampleSections: [
      { sect: 'Annex A', sample: 'Promoter net worth certificate ₹18 cr (CA Anil Mehta dated MM/2026)' },
      { sect: 'Annex B', sample: 'SBI Pune CCD term loan pre-sanction letter ₹16 cr' },
      { sect: 'Annex C', sample: 'Land title clean opinion Khaitan & Co dated MM/2026' },
      { sect: 'Annex D', sample: 'Pune ZP building plan in-process letter' },
      { sect: 'Annex E', sample: 'Equipment vendor quotes (3 per major item) - IQF Cocoon/Kaytee/Frigoscandia; Cold store Rinac/Voltas; Solar Tata/Adani/Waaree' },
      { sect: 'Annex F', sample: 'Buyer LOIs - Cheung Kee HK live lobster MoU intent; Nueva Pescanova Spain octopus expression; Mitsubishi JP MSC tuna interest letter' },
      { sect: 'Annex G', sample: 'Supplier MoUs - Mirkarwada posted-buyer pending; LCMF Lakshadweep MoU draft; AP FPO formation prospectus' },
      { sect: 'Annex H', sample: 'TEV report from SBI-empanelled consultant (₹2 L cost)' },
      { sect: 'Annex I', sample: 'EIA pre-screening + MPCB CTE application receipt' },
      { sect: 'Annex J', sample: 'Detailed financial model (5-yr P&L + cash flow + balance sheet + sensitivity matrix Excel)' },
    ],
  },
];
