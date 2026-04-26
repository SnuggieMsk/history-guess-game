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

// V2 — Market Simulator: Calculation engine
// Given: route + month/year + scenario overrides → compute profitability + survivability + risk

import {
  vannameiFarmGate, pomfretDockside, lobsterDockside, usaShrimpFOB,
  fxINRperUSD, seaFreightUSDperMT, airFreightUSDperKg,
  trawlBan, cycloneSeverity, diseaseSeverity, usaTariff, rasffDetentions,
} from './v2SimHistorical';
import { sourcingLocations, products, markets, distributors, transportModes, buyingSpikes } from './v2SimRoutes';

const MONTHS = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

// Get historical baseline price for a product in a given year/month
export function getBaselinePrice(productId, year, month) {
  const m = MONTHS[month];
  if (productId.startsWith('vannamei')) {
    const v = vannameiFarmGate[year]?.[m];
    if (productId === 'vannamei-1620') return v ? v * 1.25 : null;  // 16/20 premium
    if (productId === 'vannamei-cooked') return v;  // base same; uplift in FOB
    return v;
  }
  if (productId === 'pomfret-whole') return pomfretDockside[year]?.[m];
  if (productId === 'lobster-live')  return lobsterDockside[year]?.[m];
  if (productId === 'mudcrab-live')  return pomfretDockside[year]?.[m] * 1.15;  // proxy
  if (productId === 'octopus-cooked') return pomfretDockside[year]?.[m] * 0.45;
  if (productId === 'tuna-saku')     return vannameiFarmGate[year]?.[m] * 1.05;
  return null;
}

// Get FOB benchmark
export function getBaselineFOB(productId, year, month) {
  const m = MONTHS[month];
  if (productId.startsWith('vannamei')) {
    const usd = usaShrimpFOB[year]?.[m];
    if (productId === 'vannamei-cooked') return usd ? usd * 1.45 : null;
    if (productId === 'vannamei-1620') return usd ? usd * 1.30 : null;
    return usd;
  }
  if (productId === 'pomfret-whole') return 12 + (year - 2020) * 0.4;
  if (productId === 'lobster-live')  return 30 + (year - 2020) * 0.8;
  if (productId === 'mudcrab-live')  return 16.5 + (year - 2020) * 0.3;
  if (productId === 'octopus-cooked') return 9.5 + (year - 2020) * 0.25;
  if (productId === 'tuna-saku')     return 17 + (year - 2020) * 0.4;
  return null;
}

// Main simulation function: returns profitability + survivability for one route × month × year
export function simulateRoute(routeConfig, year, month, overrides = {}) {
  const supplier = sourcingLocations.find(s => s.id === routeConfig.supplier);
  const product  = products.find(p => p.id === routeConfig.product);
  const market   = markets.find(m => m.id === routeConfig.market);
  const distributor = distributors.find(d => d.id === routeConfig.distributor);
  const mode = transportModes.find(t => t.id === routeConfig.mode);
  if (!supplier || !product || !market || !distributor || !mode) {
    return { error: 'Invalid route config' };
  }

  const m = MONTHS[month];

  // === BUY-SIDE ===
  const baselineBuyPrice = getBaselinePrice(product.id, year, month) || product.defaultBuyPrice;
  const monsoonAdj  = trawlBan.default[m] === 1 && supplier.region === 'Konkan' ? 1.40 : 1.0;
  const cycloneAdj  = supplier.cycloneExposure ? (1 + (cycloneSeverity[year] || 2) * 0.05 * (1 - supplier.cycloneExposure)) : 1.0;
  const diseaseAdj  = supplier.diseaseExposure ? (1 + (diseaseSeverity[year] || 1) * 0.06 * (1 - supplier.diseaseExposure)) : 1.0;
  const buyPriceINR = baselineBuyPrice * (overrides.buyMultiplier || 1) * monsoonAdj * cycloneAdj * diseaseAdj * supplier.baseCostMultiplier;

  // Supply availability (0-1)
  const supplyAvailability = trawlBan.default[m] === 1 && supplier.region === 'Konkan' ? 0.20 :
                             cycloneAdj > 1.05 ? 0.65 :
                             diseaseAdj > 1.10 ? 0.55 :
                             1.0;

  // === PROCESSING ===
  const processCostINR = product.id === 'lobster-live' ? 80 :
                         product.id === 'mudcrab-live' ? 60 :
                         product.id === 'tuna-saku' ? 95 :
                         product.id === 'octopus-cooked' ? 75 :
                         product.id === 'vannamei-cooked' ? 90 :
                         product.id === 'pomfret-whole' ? 35 :
                         62;

  // Yield depends on product
  const yieldRate = product.id === 'vannamei-cooked' ? 0.55 :
                    product.id === 'octopus-cooked' ? 0.78 :
                    product.id === 'tuna-saku' ? 0.62 :
                    product.id === 'lobster-live' ? 0.92 :  // mortality factored later
                    product.id === 'mudcrab-live' ? 0.94 :
                    product.id === 'pomfret-whole' ? 0.95 :
                    0.66;

  const yieldAdjustedRawINR = buyPriceINR / yieldRate;

  // === COLD CHAIN + LOGISTICS ===
  const distanceFactor = supplier.region === 'AP farm belt' ? 22 :
                         supplier.region === 'Islands' ? 35 :
                         supplier.region === 'Eastern' ? 28 :
                         supplier.region === 'Konkan' ? 18 : 18;

  // === OUTBOUND ===
  const fx = fxINRperUSD[year]?.[m] || 87;
  const seaFreight = seaFreightUSDperMT[year]?.[m] || 4000;
  const airFreight = airFreightUSDperKg[year]?.[m] || 5;
  const outboundUSD = mode.id === 'sea' ? seaFreight / 1000 :
                      mode.id === 'air-frozen' ? airFreight :
                      mode.id === 'air-live' ? airFreight * 1.1 : 1;
  const outboundINR = outboundUSD * fx;

  // === FOB ===
  const baselineFOB = getBaselineFOB(product.id, year, month) || product.defaultFOB;
  const tariff = (market.id === 'usa' && (overrides.tariffPct ?? usaTariff[year])) || 0;
  const buyingSpike = buyingSpikes[market.id]?.[m] || 1.0;
  const mscPremium = product.valueAdd === 'MSC-premium' ? market.premiumMSC : 1.0;
  const fobUSD = baselineFOB * buyingSpike * mscPremium * (1 - tariff/100) * (overrides.fobMultiplier || 1);
  const fobINR = fobUSD * fx;

  // === MORTALITY (live cargo) ===
  const mortality = mode.id === 'air-live' ? mode.mortalityRate * (overrides.mortalityMultiplier || 1) : 0;
  const effectiveFOB_INR = fobINR * (1 - mortality * 0.85);  // 85% buyer absorption of mortality

  // === COSTS ===
  const totalCostINR = yieldAdjustedRawINR + distanceFactor + processCostINR + outboundINR + 38 /* overheads */;

  // === MARGIN ===
  const grossMargin = effectiveFOB_INR - totalCostINR;
  const grossMarginPct = effectiveFOB_INR > 0 ? grossMargin / effectiveFOB_INR : 0;

  // === SURVIVABILITY (probability of successful shipment) ===
  let survivability = 1.0;
  survivability *= supplyAvailability;
  if (mode.id === 'air-live') survivability *= (1 - mortality);
  if ((rasffDetentions[year] || 8) > 10) survivability *= 0.98;  // increased EU scrutiny
  if (cycloneSeverity[year] >= 4 && supplier.region !== 'Islands') survivability *= 0.92;

  // === REVENUE / VOLUME ===
  const targetMT = routeConfig.targetMT || 100;
  const monthlyMT = targetMT / 12 * supplyAvailability;
  const monthlyRevenueINR = monthlyMT * 1000 * effectiveFOB_INR;
  const monthlyMarginINR  = monthlyMT * 1000 * grossMargin;

  return {
    year, month: m,
    buyPriceINR: Math.round(buyPriceINR),
    yieldAdjustedRawINR: Math.round(yieldAdjustedRawINR),
    processCostINR,
    outboundINR: Math.round(outboundINR),
    totalCostINR: Math.round(totalCostINR),
    fobUSD: +fobUSD.toFixed(2),
    fobINR: Math.round(fobINR),
    effectiveFOB_INR: Math.round(effectiveFOB_INR),
    grossMargin: Math.round(grossMargin),
    grossMarginPct: +(grossMarginPct * 100).toFixed(1),
    monthlyMT: +monthlyMT.toFixed(1),
    monthlyRevenueINR: Math.round(monthlyRevenueINR),
    monthlyMarginINR: Math.round(monthlyMarginINR),
    supplyAvailability: +supplyAvailability.toFixed(2),
    survivability: +survivability.toFixed(3),
    fx: +fx.toFixed(2),
    tariff,
    monsoonAdj: +monsoonAdj.toFixed(2),
    cycloneAdj: +cycloneAdj.toFixed(2),
    diseaseAdj: +diseaseAdj.toFixed(2),
    buyingSpike: +buyingSpike.toFixed(2),
    mortality: +mortality.toFixed(3),
  };
}

// Run a route across all months of a year
export function simulateYear(routeConfig, year, overrides = {}) {
  return Array.from({ length: 12 }, (_, m) => simulateRoute(routeConfig, year, m, overrides));
}

// Run a route across multiple years
export function simulateMultiYear(routeConfig, fromYear, toYear, overrides = {}) {
  const results = [];
  for (let y = fromYear; y <= toYear; y++) {
    for (let m = 0; m < 12; m++) {
      results.push({ ...simulateRoute(routeConfig, y, m, overrides), label: `${y}-${MONTHS[m]}` });
    }
  }
  return results;
}

// Aggregate annual outcomes
export function aggregateAnnual(yearResults) {
  const totalRev = yearResults.reduce((s, r) => s + (r.monthlyRevenueINR || 0), 0);
  const totalMargin = yearResults.reduce((s, r) => s + (r.monthlyMarginINR || 0), 0);
  const totalMT = yearResults.reduce((s, r) => s + (r.monthlyMT || 0), 0);
  const avgMarginPct = totalRev > 0 ? (totalMargin / totalRev) * 100 : 0;
  const avgSurvivability = yearResults.reduce((s, r) => s + (r.survivability || 0), 0) / 12;
  return {
    totalRevenueINR: Math.round(totalRev),
    totalMarginINR: Math.round(totalMargin),
    totalMT: +totalMT.toFixed(1),
    avgMarginPct: +avgMarginPct.toFixed(1),
    avgSurvivability: +avgSurvivability.toFixed(3),
  };
}
