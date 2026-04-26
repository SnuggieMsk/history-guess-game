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

// V2 L3 — Regulator contacts (MPEDA, USFDA, EU, AQCS, MPCB, MoFPI, DGFT)

export const regulatorContacts = [
  {
    body: 'MPEDA HQ',
    address: 'MPEDA House, Panampilly Avenue, Cochin 682036',
    phone: '+91-484-2311979 / 2311901',
    email: 'mpeda@mpeda.gov.in',
    website: 'https://mpeda.gov.in',
    askFor: 'RCMC + HACCP cert + per-shipment certificate of origin',
  },
  {
    body: 'MPEDA Mumbai Regional',
    address: '5th Floor, Sahyadri Bhavan, Tilak Marg, Mumbai 400001',
    phone: '+91-22-22618501 / 22618502',
    email: 'mpedamum@mpeda.gov.in',
    askFor: 'Maharashtra exporter onboarding; RCMC pre-application guidance',
  },
  {
    body: 'MPEDA Vizag Regional',
    address: 'D.No. 9-1-129/4, Sarada Nagar, Visakhapatnam 530016',
    phone: '+91-891-2549041',
    email: 'mpedavzg@mpeda.gov.in',
    askFor: 'AP shrimp + tuna exports; per-shipment endorsements',
  },
  {
    body: 'AQCS Mumbai',
    address: 'Animal Quarantine & Certification Service, Sahar, Mumbai 400099',
    phone: '+91-22-26828043',
    email: 'aqcsmumbai@nic.in',
    askFor: 'Live animal export permit (lobster, mud crab); 24-48 hr lead time',
    departure: 'AQCS-issued health certificate must be in shipment docs',
  },
  {
    body: 'AQCS Kolkata',
    address: 'Animal Quarantine, Netaji Subhas Chandra Bose Intl Airport',
    phone: '+91-33-25113232',
    email: 'aqcskolkata@nic.in',
    askFor: 'Sundarbans live mud crab — alternative AQCS office',
  },
  {
    body: 'USFDA India Office',
    address: 'US Embassy, Shantipath, Chanakyapuri, New Delhi 110021',
    phone: '+91-11-2419-8000',
    email: 'fda.indiaoffice@fda.hhs.gov',
    website: 'https://www.fda.gov/about-fda/india-office',
    askFor: 'Establishment Registration; Prior Notice; Import Refusal queries',
  },
  {
    body: 'USFDA Online Registration',
    website: 'https://www.access.fda.gov/oaa/',
    process: 'Create account → Food Facility Registration → Biennial renewal',
    fee: 'Free',
    timeline: 'Immediate registration; audit may take 12-24 months',
  },
  {
    body: 'EU Commission DG SANTE (RASFF)',
    website: 'https://webgate.ec.europa.eu/rasff-window/',
    askFor: 'RASFF alert search; tracking detentions',
    note: 'No direct phone; queries via India Mission EU',
  },
  {
    body: 'India Mission to EU',
    address: 'Embassy of India, Chaussée de Vleurgat 217, 1050 Brussels',
    phone: '+32-2-640-9802',
    email: 'amb.brussels@mea.gov.in',
    askFor: 'EU establishment number escalation; trade dispute support',
  },
  {
    body: 'GACC China',
    website: 'https://ciferquery.singlewindow.cn',
    process: 'CIFER online portal; submit facility documents in Chinese',
    askFor: 'GACC Reg. 248 facility registration',
    timeline: '6-12 months',
    note: 'Recommend hiring Beijing-based agent (₹2-3 L/year)',
  },
  {
    body: 'Maharashtra Pollution Control Board',
    address: 'Kalpataru Point, 3rd Floor, Sion Circle, Mumbai 400022',
    phone: '+91-22-24010437',
    email: 'mscb@mpcb.gov.in',
    website: 'https://mpcb.gov.in',
    askFor: 'Consent to Establish + Operate; ZLD approvals',
  },
  {
    body: 'MPCB Pune Regional',
    address: 'Solitaire Building, 5th Floor, ICC Trade Tower, S.B. Rd, Pune 411016',
    phone: '+91-20-25697390',
    email: 'mpcbpune@mpcb.gov.in',
    askFor: 'Purandar plant CTE/CTO; pre-application meeting',
  },
  {
    body: 'PESO (Petroleum & Explosives Safety Org)',
    address: 'A Block, 5th Floor, CGO Complex, Seminary Hills, Nagpur 440006',
    phone: '+91-712-2510248',
    email: 'cce.peso@gov.in',
    website: 'https://peso.gov.in',
    askFor: 'Ammonia refrigerant licence (Form A1)',
    timeline: '90-120 days',
  },
  {
    body: 'MoFPI (Food Processing Industries)',
    address: 'Panchsheel Bhavan, Khel Gaon Marg, New Delhi 110049',
    phone: '+91-11-26492216',
    email: 'secy-mofpi@nic.in',
    website: 'https://mofpi.gov.in',
    askFor: 'PMKSY scheme application; cold-chain integrated infrastructure',
  },
  {
    body: 'DGFT HQ',
    address: 'Udyog Bhawan, New Delhi 110011',
    phone: '+91-11-23062777',
    email: 'dgft@nic.in',
    website: 'https://dgft.gov.in',
    askFor: 'IEC code; EPCG; RoDTEP scrip claims',
  },
  {
    body: 'DGFT Pune Regional',
    address: 'Anuvrut, 1st Floor, Pune-Satara Rd, Pune 411037',
    phone: '+91-20-24262191',
    email: 'rapun@dgft.gov.in',
    askFor: 'EPCG authorization; AEO status; export obligation tracking',
  },
  {
    body: 'NABARD Maharashtra',
    address: 'NABARD Tower, Bandra-Kurla Complex, Mumbai 400051',
    phone: '+91-22-26539895',
    email: 'rommh@nabard.org',
    askFor: 'AIF interest subvention; CGTMSE; agri-infra schemes',
  },
  {
    body: 'Commissionerate of Fisheries Maharashtra',
    address: 'Taraporevala Aquarium, Marine Drive, Mumbai 400002',
    phone: '+91-22-22822401',
    email: 'commissioner.fisheries@maharashtra.gov.in',
    askFor: 'PMMSY state-level DPR submission; state subsidy top-up',
  },
  {
    body: 'FSSAI HQ',
    address: 'FDA Bhawan, Kotla Rd, New Delhi 110002',
    phone: '+91-11-23220994',
    email: 'fssai@fssai.gov.in',
    website: 'https://fssai.gov.in',
    askFor: 'Central Manufacturer License (high-risk food)',
  },
  {
    body: 'FDA Maharashtra (FSSAI state)',
    address: 'Survey No 341, Bandra-Kurla Complex, Mumbai 400051',
    phone: '+91-22-26592361',
    email: 'commissioner-fda@maharashtra.gov.in',
    askFor: 'State-level FSSAI license (preferred over central where eligible)',
  },
];

export const helplineNumbers = [
  { service: 'MPEDA RCMC helpdesk', phone: '+91-484-2311901', hours: '10:00-18:00 IST Mon-Fri' },
  { service: 'AQCS Mumbai live cargo permit', phone: '+91-22-26828043', hours: '09:00-17:00 IST Mon-Sat' },
  { service: 'USFDA Inquiry Hotline', phone: '+1-301-796-3300', hours: '24/7' },
  { service: 'DGFT EPCG queries', phone: '+91-11-23062777', hours: '10:00-17:30 IST Mon-Fri' },
  { service: 'MPCB Maharashtra emergency', phone: '+91-22-24011337', hours: '24/7' },
  { service: 'NABARD AIF helpdesk', phone: '+91-22-26539895', hours: '10:00-17:30 IST Mon-Fri' },
];
