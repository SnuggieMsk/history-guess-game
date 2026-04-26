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

// V2 L8 sim v7 - 5-year compounded forecast simulator

import { hotRoutes } from './v2SimRoutes';
import { simulateRoute, aggregateAnnual } from './v2SimEngine';

// 5-year scenarios: each year has different shock profile
export const fiveYearScenarios = {
  bear: {
    label: 'Bear (5-yr)', color: '#a8322d',
    yearShocks: {
      Y1: { fobMul: -0.10, buyMul: 0.05, mortalityMul: 1.3, tariffPct: 26, cyclone: false, supply: 0.85 },
      Y2: { fobMul: -0.10, buyMul: 0.10, mortalityMul: 1.4, tariffPct: 26, cyclone: true,  supply: 0.70 },
      Y3: { fobMul: -0.05, buyMul: 0.05, mortalityMul: 1.3, tariffPct: 26, cyclone: false, supply: 0.80 },
      Y4: { fobMul: 0,     buyMul: 0,    mortalityMul: 1.2, tariffPct: 20, cyclone: false, supply: 0.90 },
      Y5: { fobMul: 0,     buyMul: 0,    mortalityMul: 1.0, tariffPct: 15, cyclone: true,  supply: 0.85 },
    },
    descrip: 'Persistent USA tariff + 2 cyclones in 5 yrs + chronic Ecuador price war + slow MSC + elevated mortality',
  },
  base: {
    label: 'Base (5-yr)', color: '#c5a565',
    yearShocks: {
      Y1: { fobMul: 0, buyMul: 0, mortalityMul: 1.1, tariffPct: 26, cyclone: false, supply: 0.95 },
      Y2: { fobMul: 0, buyMul: 0.05, mortalityMul: 1.0, tariffPct: 20, cyclone: false, supply: 0.95 },
      Y3: { fobMul: 0.05, buyMul: 0, mortalityMul: 1.0, tariffPct: 15, cyclone: false, supply: 1.0 },
      Y4: { fobMul: 0.05, buyMul: -0.02, mortalityMul: 0.95, tariffPct: 10, cyclone: false, supply: 1.0 },
      Y5: { fobMul: 0.10, buyMul: -0.05, mortalityMul: 0.90, tariffPct: 5, cyclone: false, supply: 1.0 },
    },
    descrip: 'USA tariff de-escalation gradual + MSC certification on schedule Y2-Y3 + stable supply chain',
  },
  bull: {
    label: 'Bull (5-yr)', color: '#2d6a4f',
    yearShocks: {
      Y1: { fobMul: 0.05, buyMul: -0.05, mortalityMul: 0.9, tariffPct: 20, cyclone: false, supply: 1.0 },
      Y2: { fobMul: 0.10, buyMul: -0.05, mortalityMul: 0.85, tariffPct: 10, cyclone: false, supply: 1.05 },
      Y3: { fobMul: 0.15, buyMul: -0.10, mortalityMul: 0.80, tariffPct: 5, cyclone: false, supply: 1.05 },
      Y4: { fobMul: 0.15, buyMul: -0.10, mortalityMul: 0.75, tariffPct: 0, cyclone: false, supply: 1.10 },
      Y5: { fobMul: 0.20, buyMul: -0.15, mortalityMul: 0.70, tariffPct: 0, cyclone: false, supply: 1.10 },
    },
    descrip: 'USA tariff resolved Y3 + MSC premium captured + UK CETA volume ramp + favorable FX + low mortality',
  },
};

// Run 5-year forecast for a given scenario + portfolio
export function run5YearForecast(scenarioId, portfolioRouteIds, allocations, baseYear = 2026) {
  const scn = fiveYearScenarios[scenarioId];
  const yearKeys = ['Y1','Y2','Y3','Y4','Y5'];
  const results = [];

  for (let yi = 0; yi < 5; yi++) {
    const yk = yearKeys[yi];
    const shock = scn.yearShocks[yk];
    const year = baseYear + yi;
    let yearRev = 0, yearMargin = 0, yearMT = 0;

    portfolioRouteIds.forEach(rid => {
      const route = hotRoutes.find(r => r.id === rid);
      if (!route) return;
      const alloc = allocations[rid] || 0;
      if (alloc === 0) return;

      const scaled = { ...route, targetMT: route.targetMT * (alloc / 100) * (1 + yi * 0.18) };

      const monthlyResults = Array.from({length:12}, (_, m) => {
        const overrides = {
          fobMultiplier: 1 + (shock.fobMul || 0),
          buyMultiplier: 1 + (shock.buyMul || 0),
          mortalityMultiplier: shock.mortalityMul || 1.0,
          tariffPct: shock.tariffPct,
        };
        const r = simulateRoute(scaled, year, m, overrides);
        if (shock.cyclone && [4,5,6,7].includes(m)) {
          r.monthlyMT *= 0.55; r.monthlyRevenueINR *= 0.55; r.monthlyMarginINR *= 0.45;
        }
        if (shock.supply && shock.supply < 1) {
          r.monthlyMT *= shock.supply; r.monthlyRevenueINR *= shock.supply; r.monthlyMarginINR *= shock.supply;
        }
        return r;
      });
      const ag = aggregateAnnual(monthlyResults);
      yearRev += ag.totalRevenueINR;
      yearMargin += ag.totalMarginINR;
      yearMT += ag.totalMT;
    });

    results.push({
      year: yk,
      yearLabel: `${year}`,
      revenueINRcr: yearRev / 10000000,
      marginINRcr: yearMargin / 10000000,
      marginPct: yearRev > 0 ? (yearMargin / yearRev * 100) : 0,
      mt: yearMT,
      ebitdaProxy: yearMargin / 10000000,  // approximation
      shockProfile: shock,
    });
  }

  // Compute compounded metrics
  const cumRev = results.reduce((s, r) => s + r.revenueINRcr, 0);
  const cumMargin = results.reduce((s, r) => s + r.marginINRcr, 0);
  const cumMT = results.reduce((s, r) => s + r.mt, 0);
  const blendedMargin = cumRev > 0 ? (cumMargin / cumRev * 100) : 0;

  // Working capital evolution (simplified — 60-day cycle of revenue)
  const wcINRcr = results.map(r => r.revenueINRcr * (60 / 365));

  // Cash flow proxy (Margin - WC delta)
  let prevWC = 8;  // initial CC of ₹8 cr
  const cashFlow = results.map(r => {
    const newWC = r.revenueINRcr * (60 / 365);
    const wcDelta = newWC - prevWC;
    prevWC = newWC;
    return r.marginINRcr - wcDelta;
  });

  // Cumulative cash position
  let cumCash = 14;  // promoter equity ₹14 cr
  const cashPosition = cashFlow.map(cf => {
    cumCash += cf - 4;  // -4 = annual debt service approximation
    return cumCash;
  });

  return {
    scenario: scn.label,
    color: scn.color,
    description: scn.descrip,
    yearly: results,
    summary: {
      cumRevINRcr: cumRev,
      cumMarginINRcr: cumMargin,
      cumMT: cumMT,
      blendedMargin: blendedMargin,
      y5RevINRcr: results[4].revenueINRcr,
      y5MarginPct: results[4].marginPct,
    },
    wcINRcr,
    cashFlow,
    cashPosition,
  };
}
