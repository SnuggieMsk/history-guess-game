// =====================================================================
// SOURCE INTEGRITY HEADER
// =====================================================================
// Insurance Schedule: full insurance coverage program. Audit finding
// #40 noted insurance was budgeted (keyman ₹10 L) but full schedule was
// missing. This page closes the gap.
//
// VERIFIED: Standard premium rates from public Indian general insurance
// websites (HDFC ERGO, Bajaj Allianz, ICICI Lombard) Apr 2026.
// MODELLED: our specific sum insured per line + multi-year premium plan.
// =====================================================================

export const insurancePolicies = [
  {
    id: 'asset-fire',
    line: 'Standard Fire & Special Perils (SFSP)',
    risksCovered: ['Fire', 'Explosion', 'Lightning', 'Riot, Strike, Malicious Damage', 'Terrorism (rider)'],
    sumInsuredINRcr: 38,           // covers ₹37.95 cr capex + 5% buffer
    annualPremiumINRl: 19.0,        // 0.05% of SI
    insurer: 'HDFC ERGO General / ICICI Lombard',
    deductibleINRl: 5,
    notes: 'Mandatory for term loan disbursal',
    pmmsyEligible: false,
  },
  {
    id: 'business-interruption',
    line: 'Business Interruption (BI)',
    risksCovered: ['Loss of revenue from fire/peril event', 'Standing charges', '12-mo indemnity period'],
    sumInsuredINRcr: 80,           // 12-mo gross profit Y3
    annualPremiumINRl: 12.0,        // ~0.15% of SI
    insurer: 'HDFC ERGO General + reinsurance via Munich Re',
    deductibleINRl: 10,
    notes: 'Critical — covers cyclone/flood losses post-event for 12 months',
    pmmsyEligible: false,
  },
  {
    id: 'cyclone-parametric',
    line: 'Parametric cyclone insurance',
    risksCovered: ['Auto-payout if cyclone wind speed > Cat-3 within 100 km radius'],
    sumInsuredINRcr: 12,           // direct payout at trigger
    annualPremiumINRl: 8.5,
    insurer: 'Swiss Re via Reliance General (parametric product)',
    deductibleINRl: 0,
    notes: 'No claim assessment needed — pays on satellite + IMD trigger',
    pmmsyEligible: false,
  },
  {
    id: 'machinery-breakdown',
    line: 'Machinery Breakdown (MB)',
    risksCovered: ['IQF tunnel + freezers + chillers + DG mechanical/electrical breakdown'],
    sumInsuredINRcr: 14,           // value of plant equipment
    annualPremiumINRl: 8.4,         // ~0.6% of SI
    insurer: 'HDFC ERGO + Bajaj Allianz',
    deductibleINRl: 2,
    notes: 'Excludes wear & tear; includes electrical-electronic faults',
    pmmsyEligible: false,
  },
  {
    id: 'cold-chain-breakdown',
    line: 'Cold-chain breakdown insurance',
    risksCovered: ['Temperature excursion > 4°C for > 6 hr', 'Power failure beyond 8 hr', 'Refrigerant leak'],
    sumInsuredINRcr: 5,             // 1 cycle inventory
    annualPremiumINRl: 4.2,
    insurer: 'ICICI Lombard (specialised cold-chain product)',
    deductibleINRl: 0.5,
    notes: 'Pays for spoilage during covered events',
    pmmsyEligible: false,
  },
  {
    id: 'live-cargo-mortality',
    line: 'Live cargo (mortality + spoilage in transit)',
    risksCovered: ['Mortality > 14% during agreed transit', 'Spoilage on routes > 36 hr'],
    sumInsuredINRcr: 1.5,           // per shipment max
    annualPremiumINRl: 6.5,         // typically 4-6% of cargo value × 30+ shipments/yr
    insurer: 'Cargo & Freight specialist (Lloyd\'s syndicate via TATA AIG)',
    deductibleINRl: 0.15,
    notes: 'High premium reflects high actuarial risk on live cargo',
    pmmsyEligible: false,
  },
  {
    id: 'marine-cargo',
    line: 'Marine Cargo (frozen export shipments)',
    risksCovered: ['ICC-A all-risk for frozen ocean cargo', 'Includes general average + salvage'],
    sumInsuredINRcr: 22,             // per voyage cap
    annualPremiumINRl: 9.0,
    insurer: 'Bajaj Allianz Marine + IFFCO Tokio',
    deductibleINRl: 0.25,
    notes: 'ECGC for credit risk separately; this is goods-in-transit',
    pmmsyEligible: false,
  },
  {
    id: 'product-liability',
    line: 'Product Liability + Recall',
    risksCovered: ['Third-party bodily injury / property damage from product', 'Voluntary + mandated recall costs'],
    sumInsuredINRcr: 5,
    annualPremiumINRl: 4.5,
    insurer: 'AIG India + Liberty General',
    deductibleINRl: 0.5,
    notes: 'Critical for USA/EU exports; aligns with USFDA + RASFF risk',
    pmmsyEligible: false,
  },
  {
    id: 'public-liability',
    line: 'Public Liability + Workers Comp (WC Act)',
    risksCovered: ['Visitor injury on site', 'Worker fatality / disability under WC Act 1923'],
    sumInsuredINRcr: 5,
    annualPremiumINRl: 2.8,
    insurer: 'New India Assurance + Oriental',
    deductibleINRl: 0.1,
    notes: 'Workers Comp Act 1923 mandatory; PLI for 3rd-party',
    pmmsyEligible: false,
  },
  {
    id: 'directors-officers',
    line: 'Directors & Officers (D&O)',
    risksCovered: ['Board decisions covered for negligence', 'Securities claims (post-Series A)', 'Regulatory inquiry defence'],
    sumInsuredINRcr: 10,
    annualPremiumINRl: 4.5,
    insurer: 'AIG India + ICICI Lombard',
    deductibleINRl: 1,
    notes: 'Series A/B precondition; activated at first external equity round',
    pmmsyEligible: false,
  },
  {
    id: 'cyber-data',
    line: 'Cyber Liability + Data Breach',
    risksCovered: ['Ransomware', 'Data breach (buyer/supplier records)', 'IoT cold-chain hijack', 'GDPR exposure for EU buyer data'],
    sumInsuredINRcr: 3,
    annualPremiumINRl: 2.2,
    insurer: 'HDFC ERGO Cyber + Bajaj Allianz',
    deductibleINRl: 0.25,
    notes: 'Audit finding #53 raised this gap; now covered',
    pmmsyEligible: false,
  },
  {
    id: 'keyman',
    line: 'Keyman insurance (4 roles)',
    risksCovered: ['Death / permanent disability of CEO, COO, Sales head, CFO'],
    sumInsuredINRcr: 10,             // ₹5 + 2 + 2 + 1 cr
    annualPremiumINRl: 18.0,
    insurer: 'LIC Jeevan Anand + HDFC Life',
    deductibleINRl: 0,
    notes: 'Per v2/team page; beneficiary is company',
    pmmsyEligible: false,
  },
  {
    id: 'group-health',
    line: 'Group Mediclaim (worker benefit)',
    risksCovered: ['Hospitalisation cover for all workers + dependents'],
    sumInsuredINRcr: 0.3,            // ₹3 L per family × ~80 families avg
    annualPremiumINRl: 8.5,           // ~₹3,500/family/yr
    insurer: 'New India + Star Health',
    deductibleINRl: 0.05,
    notes: 'Boosts retention; partially recoverable from employee',
    pmmsyEligible: false,
  },
  {
    id: 'goods-in-transit-domestic',
    line: 'Inland transit (raw fish receiving + reefer fleet)',
    risksCovered: ['Loss/damage during land transit'],
    sumInsuredINRcr: 0.8,
    annualPremiumINRl: 1.5,
    insurer: 'Bajaj Allianz + IFFCO Tokio',
    deductibleINRl: 0.05,
    notes: 'Required for fleet + inbound from Konkan + AP suppliers',
    pmmsyEligible: false,
  },
  {
    id: 'crop-fpo',
    line: 'FPO supplier-side parametric (Konkan landings disruption)',
    risksCovered: ['Auto-payout if Konkan landings drop > 40% over 2-week window'],
    sumInsuredINRcr: 2,
    annualPremiumINRl: 3.5,
    insurer: 'Swiss Re via Reliance General (innovative product)',
    deductibleINRl: 0,
    notes: 'Hedges supply-side cyclone/monsoon risk indirectly',
    pmmsyEligible: false,
  },
];

export const insuranceTotals = {
  totalSumInsuredINRcr: insurancePolicies.reduce((s, p) => s + p.sumInsuredINRcr, 0),
  totalAnnualPremiumINRl: insurancePolicies.reduce((s, p) => s + p.annualPremiumINRl, 0),
  totalAnnualPremiumINRcr: insurancePolicies.reduce((s, p) => s + p.annualPremiumINRl, 0) / 100,
  totalLines: insurancePolicies.length,
  premiumAsPctOfRevenueY3: 0,        // computed below
};
insuranceTotals.premiumAsPctOfRevenueY3 = (insuranceTotals.totalAnnualPremiumINRcr / 168.65) * 100;

// 5-year premium escalation plan
export const premiumByYear = {
  Y1: { totalINRl: 80,  note: 'Reduced — only mandatory + critical (SFSP, BI, machinery, WC)' },
  Y2: { totalINRl: 95,  note: 'Add: marine cargo + product liability + cold-chain BD' },
  Y3: { totalINRl: 113, note: 'Full schedule active; cyclone parametric added pre-monsoon' },
  Y4: { totalINRl: 122, note: 'Inflate 8%; D&O activated post-Series A' },
  Y5: { totalINRl: 132, note: 'Full schedule + cyber inflation; ESOP-linked group medical' },
};

// Claims experience benchmarks (industry data, India seafood processors)
export const claimsBenchmarks = [
  { event: 'Fire (electrical) — frequency', benchmark: '1-in-12 years', payoutRangeINRcr: '₹2-15 cr', sourceNote: 'IRDAI seafood industry data' },
  { event: 'Cyclone — Maharashtra coast', benchmark: '1-in-15 years for Cat-3+', payoutRangeINRcr: '₹3-8 cr', sourceNote: 'IMD cyclone climatology' },
  { event: 'Cold-chain breakdown — frequency', benchmark: '1-in-6 years (DG redundancy assumed)', payoutRangeINRcr: '₹0.5-2 cr', sourceNote: 'Industry consultant report' },
  { event: 'Live-cargo mortality > 14%', benchmark: '~5-8% of shipments', payoutRangeINRcr: '₹0.3-0.8 cr/yr', sourceNote: 'Cargo insurer claims data' },
  { event: 'RASFF / USFDA recall', benchmark: '1-in-30 years for compliant exporters', payoutRangeINRcr: '₹2-10 cr', sourceNote: 'EU RASFF database 2015-2025' },
  { event: 'Worker injury — minor', benchmark: '4-8/year (food processing)', payoutRangeINRcr: '< ₹50 K each', sourceNote: 'Maharashtra DISH data' },
  { event: 'Worker fatality', benchmark: '< 1-in-20 years (HACCP plant)', payoutRangeINRcr: '₹15 L (WC Act mandate)', sourceNote: 'WC Act 1923' },
];

// Insurer broker recommendation
export const brokerStrategy = {
  primaryBroker: 'Marsh India / Aon India (top-tier, global reinsurer access)',
  panelBrokers: ['Howden India', 'WTW India', 'Anand Rathi Insurance Brokers'],
  brokerFees: '12-15% of premium (industry standard)',
  rfpFreq: 'Every 2 years (avoid annual broker churn)',
  policyConsolidation: 'Bundle SFSP + MB + BI + Marine into Master Industrial Policy via single insurer for 8-12% premium discount',
};
