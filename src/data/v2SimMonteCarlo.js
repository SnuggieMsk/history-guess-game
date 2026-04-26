// V2 L6 — Monte Carlo simulation engine for stochastic risk modeling

import { hotRoutes } from './v2SimRoutes';
import { simulateRoute } from './v2SimEngine';

// Triangular distribution sampler — most realistic for business shocks
function triangular(min, mode, max) {
  const u = Math.random();
  const f = (mode - min) / (max - min);
  if (u < f) return min + Math.sqrt(u * (max - min) * (mode - min));
  return max - Math.sqrt((1 - u) * (max - min) * (max - mode));
}

// Discrete event sampler — cyclone hits with X% probability per quarter
function bernoulli(p) {
  return Math.random() < p ? 1 : 0;
}

// Sample annual scenario shocks
export function sampleScenario() {
  return {
    fobShock:        triangular(-0.20, 0, 0.15),
    buyShock:        triangular(-0.10, 0, 0.25),
    fxShock:         triangular(-0.10, 0, 0.10),
    freightShock:    triangular(-0.20, 0, 1.50),
    cycloneEvent:    bernoulli(0.40),
    diseaseEvent:    bernoulli(0.30),
    tariffEvent:     bernoulli(0.20),
    rasffAlert:      bernoulli(0.05),
    mortalityShock:  triangular(0.7, 1.0, 2.0),
  };
}

// Run one simulation iteration for a route
export function runOneIteration(routeConfig, year) {
  const scenario = sampleScenario();
  const months = [];
  for (let m = 0; m < 12; m++) {
    const overrides = {
      fobMultiplier: 1 + scenario.fobShock,
      buyMultiplier: 1 + scenario.buyShock + (scenario.diseaseEvent && [3,4,5].includes(m) ? 0.20 : 0),
      mortalityMultiplier: scenario.mortalityShock,
      tariffPct: scenario.tariffEvent ? Math.max(15, Math.random() * 30) : null,
    };
    const r = simulateRoute(routeConfig, year, m, overrides);
    if (scenario.cycloneEvent && [4,5,6,7].includes(m)) {
      r.monthlyMT = r.monthlyMT * 0.6;
      r.monthlyRevenueINR = r.monthlyRevenueINR * 0.6;
      r.monthlyMarginINR = r.monthlyMarginINR * 0.55;
    }
    if (scenario.rasffAlert && m >= 6) {
      r.monthlyMT = r.monthlyMT * 0.4;
      r.monthlyRevenueINR = r.monthlyRevenueINR * 0.4;
      r.monthlyMarginINR = r.monthlyMarginINR * 0.3;
    }
    months.push(r);
  }
  const totalRev = months.reduce((s, m) => s + (m.monthlyRevenueINR || 0), 0);
  const totalMargin = months.reduce((s, m) => s + (m.monthlyMarginINR || 0), 0);
  return {
    annualRevenueINR: totalRev,
    annualMarginINR: totalMargin,
    annualMarginPct: totalRev > 0 ? (totalMargin / totalRev * 100) : 0,
    scenario,
  };
}

// Run N iterations and return distribution
export function runMonteCarlo(routeConfig, year, iterations = 1000) {
  const results = Array.from({ length: iterations }, () => runOneIteration(routeConfig, year));
  const margins = results.map(r => r.annualMarginPct).sort((a, b) => a - b);
  const revenues = results.map(r => r.annualRevenueINR).sort((a, b) => a - b);
  const marginsINR = results.map(r => r.annualMarginINR).sort((a, b) => a - b);

  return {
    iterations,
    marginPct: {
      p5: margins[Math.floor(iterations * 0.05)],
      p25: margins[Math.floor(iterations * 0.25)],
      p50: margins[Math.floor(iterations * 0.50)],
      p75: margins[Math.floor(iterations * 0.75)],
      p95: margins[Math.floor(iterations * 0.95)],
      mean: margins.reduce((s, v) => s + v, 0) / iterations,
      probLoss: margins.filter(m => m < 0).length / iterations,
      probAbove15: margins.filter(m => m > 15).length / iterations,
      probAbove25: margins.filter(m => m > 25).length / iterations,
    },
    revenueINR: {
      p5: revenues[Math.floor(iterations * 0.05)],
      p50: revenues[Math.floor(iterations * 0.50)],
      p95: revenues[Math.floor(iterations * 0.95)],
      mean: revenues.reduce((s, v) => s + v, 0) / iterations,
    },
    marginINR: {
      p5: marginsINR[Math.floor(iterations * 0.05)],
      p50: marginsINR[Math.floor(iterations * 0.50)],
      p95: marginsINR[Math.floor(iterations * 0.95)],
      mean: marginsINR.reduce((s, v) => s + v, 0) / iterations,
    },
    scenarios: results.slice(0, 50),  // sample for visualization
  };
}

// Build histogram bins for visualization
export function buildHistogram(values, bins = 20) {
  if (!values || values.length === 0) return [];
  const min = Math.min(...values);
  const max = Math.max(...values);
  const binWidth = (max - min) / bins;
  const histogram = Array.from({ length: bins }, (_, i) => ({
    bin: `${(min + i * binWidth).toFixed(1)}`,
    binMid: min + (i + 0.5) * binWidth,
    count: 0,
  }));
  values.forEach(v => {
    const idx = Math.min(Math.floor((v - min) / binWidth), bins - 1);
    histogram[idx].count++;
  });
  return histogram;
}

// Cross-route Monte Carlo to identify which routes are most resilient
export function rankRoutesByResilience(year, iterations = 200) {
  return hotRoutes.map(r => {
    const mc = runMonteCarlo(r, year, iterations);
    return {
      route: r.name,
      rid: r.id,
      meanMargin: mc.marginPct.mean,
      p5Margin: mc.marginPct.p5,
      p95Margin: mc.marginPct.p95,
      probLoss: mc.marginPct.probLoss,
      probAbove15: mc.marginPct.probAbove15,
      meanRevenueCr: mc.revenueINR.mean / 10000000,
    };
  }).sort((a, b) => b.meanMargin - a.meanMargin);
}
