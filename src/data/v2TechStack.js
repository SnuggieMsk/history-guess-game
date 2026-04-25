// V2 — Tech stack: ERP, CRM, LIMS, telematics, traceability, QMS

export const techCategories = [
  {
    id: 'erp',
    title: 'ERP / Accounting',
    options: [
      { name: 'Tally Prime', tier: 'Entry', monthlyINR: '8-12 k', fit: 'Y1 only — low cost, India-standard, weak inventory + multi-location' },
      { name: 'Zoho Books + Inventory + Books', tier: 'Mid', monthlyINR: '15-30 k', fit: 'Recommended Y1-Y3 — cloud, integrates with bank + GST + e-invoicing' },
      { name: 'SAP Business One', tier: 'Premium', monthlyINR: '40-80 k', fit: 'Y3+ — full ERP, batch-level traceability, multi-location, audit-grade' },
      { name: 'Microsoft Dynamics 365 Business Central', tier: 'Premium', monthlyINR: '50-100 k', fit: 'Y3+ alternative; better for export-heavy businesses' },
      { name: 'Focus ERP', tier: 'Mid-premium', monthlyINR: '25-50 k', fit: 'India SME niche; food + processing modules' },
    ],
    recommendation: 'Start with Zoho Books in Y1 (₹20-25 k/month). Migrate to SAP B1 in Y3 when revenue crosses ₹100 cr.',
  },
  {
    id: 'crm',
    title: 'CRM / Buyer Pipeline',
    options: [
      { name: 'Zoho CRM', tier: 'Entry', monthlyINR: '10-20 k', fit: 'Y1 — integrates with Zoho Books + Mail; sufficient for 50-buyer pipeline' },
      { name: 'HubSpot CRM', tier: 'Mid', monthlyINR: '25-50 k', fit: 'Y2+ — better marketing automation; strong free tier' },
      { name: 'Salesforce Essentials', tier: 'Premium', monthlyINR: '50-100 k', fit: 'Y3+ — full enterprise CRM' },
      { name: 'Custom + Notion', tier: 'Bootstrap', monthlyINR: '< 5 k', fit: 'Y1 only if small team — does not scale' },
    ],
    recommendation: 'Zoho CRM Y1 (paired with Books); HubSpot Y2 for marketing depth.',
  },
  {
    id: 'lims',
    title: 'LIMS (Laboratory Information Management)',
    options: [
      { name: 'LabWare LIMS', tier: 'Premium', monthlyINR: '60-120 k', fit: 'Industry-standard for NABL labs; complex implementation' },
      { name: 'Thermo SampleManager', tier: 'Premium', monthlyINR: '50-100 k', fit: 'Strong food-safety LIMS' },
      { name: 'STARLIMS', tier: 'Premium', monthlyINR: '60-120 k', fit: 'Big-pharma alternative' },
      { name: 'Custom + Excel + LIMS-lite', tier: 'Bootstrap', monthlyINR: '5-15 k', fit: 'Y1-Y2 only; rebuild in Y3' },
    ],
    recommendation: 'LabWare LIMS from Y2 (synced with NABL accreditation timeline). Y1 can run on structured Excel + retention sample log.',
  },
  {
    id: 'telematics',
    title: 'Reefer Telematics + Cold Chain Monitoring',
    options: [
      { name: 'Teletrac Navman', tier: 'Premium', monthlyINR: '25-40 k for fleet of 10', fit: 'Live temp + GPS + driver behaviour' },
      { name: 'Trimble Fleet Pulse', tier: 'Premium', monthlyINR: '20-40 k', fit: 'Strong India presence' },
      { name: 'Bosch IoT Reefer Suite', tier: 'Premium', monthlyINR: '30-50 k', fit: 'OEM-grade telematics' },
      { name: 'Locus IT (Indian)', tier: 'Mid', monthlyINR: '15-25 k', fit: 'India SME-focused; works on most reefer makes' },
      { name: 'Carrier ReeferSelect (OEM)', tier: 'Bundle', monthlyINR: '5-10 k/truck', fit: 'If reefer units are Carrier-fitted' },
      { name: 'Thermo King TracKing (OEM)', tier: 'Bundle', monthlyINR: '5-10 k/truck', fit: 'If TK-fitted reefers' },
    ],
    recommendation: 'OEM telematics (Carrier or TK) bundled with reefer purchase + Locus IT for unified dashboard. Total ~₹10-15 k/truck/month.',
  },
  {
    id: 'traceability',
    title: 'Pond + Boat Traceability + RFID',
    options: [
      { name: 'Impinj RFID readers + tags', tier: 'Equipment', monthlyINR: 'One-off ₹15-25 L', fit: 'Industry-standard hardware' },
      { name: 'Zebra Technologies', tier: 'Equipment', monthlyINR: 'One-off ₹12-20 L', fit: 'Alternative hardware' },
      { name: 'TraceX (India)', tier: 'Software', monthlyINR: '20-40 k', fit: 'Indian SaaS for agri/seafood traceability' },
      { name: 'Aqua-Spark Traceability', tier: 'SaaS', monthlyINR: '30-60 k', fit: 'Aquaculture-specific' },
      { name: 'Custom Salesforce + RFID', tier: 'DIY', monthlyINR: '50-100 k', fit: 'For larger scale Y3+' },
    ],
    recommendation: 'Impinj hardware + TraceX software. Total Y1 capex ₹20-25 L + ₹30 k/month software.',
  },
  {
    id: 'qms',
    title: 'QMS / Document Management',
    options: [
      { name: 'MasterControl', tier: 'Premium', monthlyINR: '60-120 k', fit: 'Industry-standard for FDA-regulated environments' },
      { name: 'EtQ (Hexagon)', tier: 'Premium', monthlyINR: '50-100 k', fit: 'Quality + audit management' },
      { name: 'iAuditor (SafetyCulture)', tier: 'Mid', monthlyINR: '15-30 k', fit: 'Audit checklists + mobile-first; great Y1-Y3' },
      { name: 'SharePoint + custom', tier: 'Bootstrap', monthlyINR: '5-10 k', fit: 'Y1 if Microsoft 365 is in use' },
    ],
    recommendation: 'iAuditor Y1-Y2 (₹15-25 k/month); migrate to MasterControl pre-USFDA audit Y2 end.',
  },
  {
    id: 'communication',
    title: 'Communication + Collaboration',
    options: [
      { name: 'Google Workspace', tier: 'Standard', monthlyINR: '8-15 k for 50 users', fit: 'Default for SMEs' },
      { name: 'Microsoft 365', tier: 'Standard', monthlyINR: '10-18 k for 50 users', fit: 'If SAP B1 is chosen' },
      { name: 'Slack', tier: 'Add-on', monthlyINR: '8-15 k for 50 users', fit: 'Internal communication + buyer channels' },
      { name: 'Zoom', tier: 'Add-on', monthlyINR: '4-8 k for 20 users', fit: 'Video conferencing — buyer calls' },
    ],
    recommendation: 'Google Workspace + Slack + Zoom from Day 1.',
  },
];

export const totalTechCostMonthly = {
  Y1: '90-120 k/month',
  Y3: '180-280 k/month',
  Y5: '300-450 k/month',
};
