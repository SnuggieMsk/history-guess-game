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

// V2 L6 — Weather + climate forecast simulator (IMD-style monthly forecasts)
// Used to overlay weather risk onto Market Simulator outputs

export const monsoonForecast2026 = {
  jun: { rainfallMM: 285, normalMM: 265, deviationPct: 7.5, intensity: 'Above normal', impactOnFishing: 'Trawl ban active; ban severity normal' },
  jul: { rainfallMM: 365, normalMM: 350, deviationPct: 4.3, intensity: 'Normal', impactOnFishing: 'Trawl ban active; AP shrimp pond water quality OK' },
  aug: { rainfallMM: 240, normalMM: 270, deviationPct: -11.1, intensity: 'Below normal', impactOnFishing: 'Trawl resumes Aug 1; early-monsoon end risk' },
  sep: { rainfallMM: 175, normalMM: 195, deviationPct: -10.3, intensity: 'Below normal', impactOnFishing: 'Pond salinity rises; vannamei stress risk' },
};

export const cycloneRiskByQuarter = {
  q1Jan_Mar: { westCoastP: 0.05, eastCoastP: 0.10, severity: 'Low' },
  q2Apr_Jun: { westCoastP: 0.30, eastCoastP: 0.20, severity: 'High - pre-monsoon Arabian Sea spike' },
  q3Jul_Sep: { westCoastP: 0.10, eastCoastP: 0.15, severity: 'Medium - monsoon active' },
  q4Oct_Dec: { westCoastP: 0.20, eastCoastP: 0.45, severity: 'Very high east coast - Bay of Bengal post-monsoon' },
};

export const seaSurfaceTemp2026 = {
  arabian:    { avgC: 27.8, anomaly: 0.6, marineHeatWaveDays: 12, fishImpact: 'Pelagic species shifting deeper; pomfret + mackerel catch -8%' },
  bayOfBengal:{ avgC: 28.5, anomaly: 0.9, marineHeatWaveDays: 18, fishImpact: 'Cyclone fuel; tuna northward shift' },
  lakshadweep:{ avgC: 28.2, anomaly: 0.5, marineHeatWaveDays: 9, fishImpact: 'Yellowfin tuna catch unchanged; coral bleaching risk +' },
};

export const climateAdaptationCosts = [
  { measure: '+50 cm flood-line elevation', capexINRl: 35, recurring: 0, urgency: 'Pre-construction' },
  { measure: 'Cyclone-rated wind-pressure design (Cat-3)', capexINRl: 80, recurring: 0, urgency: 'Pre-construction' },
  { measure: 'Rainwater harvest 200 m³ buffer', capexINRl: 25, recurring: 5, urgency: 'M3-M9' },
  { measure: '12-day FG inventory buffer always', capexINRl: 0, recurring: 'WC tied up', urgency: 'Y1+' },
  { measure: 'Backup supply MoUs (Karwar+Mangalore)', capexINRl: 5, recurring: 12, urgency: 'M6+' },
  { measure: 'Greenhouse-gas accounting (Scope 1+2)', capexINRl: 8, recurring: 4, urgency: 'Y2+' },
  { measure: 'Carbon offset programme', capexINRl: 0, recurring: 25, urgency: 'Y3+' },
  { measure: 'Solar PV 1.2 MWp (climate + cost)', capexINRl: 480, recurring: 0, urgency: 'Pre-commissioning' },
];

export const weatherImpactMatrix = [
  { event: 'Cyclone landfall west coast', supplyImpact: -0.40, costImpact: 0.15, fobImpact: 0.08, recoveryWeeks: 3 },
  { event: 'Cyclone landfall east coast', supplyImpact: -0.30, costImpact: 0.12, fobImpact: 0.05, recoveryWeeks: 4 },
  { event: 'Heatwave (sustained 40°C+)', supplyImpact: -0.10, costImpact: 0.20, fobImpact: 0, recoveryWeeks: 2 },
  { event: 'Late monsoon onset', supplyImpact: -0.05, costImpact: 0.05, fobImpact: 0, recoveryWeeks: 4 },
  { event: 'Marine heatwave (+1.5°C SST)', supplyImpact: -0.15, costImpact: 0.05, fobImpact: 0.03, recoveryWeeks: 8 },
  { event: 'El Niño year (drought + warmer ocean)', supplyImpact: -0.20, costImpact: 0.10, fobImpact: 0.05, recoveryWeeks: 26 },
  { event: 'La Niña year (excess monsoon)', supplyImpact: 0.10, costImpact: -0.03, fobImpact: 0, recoveryWeeks: 12 },
];

export const weatherDataSources = [
  { source: 'IMD (India Meteorological Dept)', url: 'https://mausam.imd.gov.in', use: 'Monthly + seasonal monsoon forecasts; cyclone tracking' },
  { source: 'INCOIS Hyderabad', url: 'https://incois.gov.in', use: 'Sea surface temperature + Potential Fishing Zones (PFZ)' },
  { source: 'NOAA Climate Prediction Center', url: 'https://www.cpc.ncep.noaa.gov', use: 'ENSO forecasts (El Niño/La Niña)' },
  { source: 'Copernicus Marine Service', url: 'https://marine.copernicus.eu', use: 'Global ocean conditions + sea state forecasts' },
  { source: 'Mausam Mobile App', url: 'Play Store / App Store', use: 'Real-time alerts; daily push notifications' },
  { source: 'IMD Cyclone Warning Centre Mumbai', url: 'imd.gov.in/Mausam_Mumbai', use: 'Arabian Sea cyclone tracking' },
  { source: 'IMD Visakhapatnam', url: 'imdvskp.gov.in', use: 'East coast cyclone tracking' },
];
