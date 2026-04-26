// V2 L6 — Monte Carlo simulation engine for stochastic risk modeling
// Uses seedable Mulberry32 PRNG so results are deterministic for same (route, year, seed, iterations).

import { hotRoutes } from './v2SimRoutes';
import { simulateRoute } from './v2SimEngine';

// Mulberry32 — fast, good-quality, 32-bit seedable PRNG. Same seed = same sequence.
export function makeRng(seed) {
  let a = seed >>> 0;
  return function rng() {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Triangular distribution sampler — most realistic for business shocks
function triangular(rng, min, mode, max) {
  const u = rng();
  const f = (mode - min) / (max - min);
  if (u < f) return min + Math.sqrt(u * (max - min) * (mode - min));
  return max - Math.sqrt((1 - u) * (max - min) * (max - mode));
}

// Discrete event sampler — cyclone hits with X% probability per quarter
function bernoulli(rng, p) {
  return rng() < p ? 1 : 0;
}

// Sample annual scenario shocks (rng-injected)
export function sampleScenario(rng) {
  return {
    fobShock:        triangular(rng, -0.20, 0, 0.15),
    buyShock:        triangular(rng, -0.10, 0, 0.25),
    fxShock:         triangular(rng, -0.10, 0, 0.10),
    freightShock:    triangular(rng, -0.20, 0, 1.50),
    cycloneEvent:    bernoulli(rng, 0.40),
    diseaseEvent:    bernoulli(rng, 0.30),
    tariffEvent:     bernoulli(rng, 0.20),
    rasffAlert:      bernoulli(rng, 0.05),
    mortalityShock:  triangular(rng, 0.7, 1.0, 2.0),
  };
}

// Run one simulation iteration for a route (rng-injected)
export function runOneIteration(routeConfig, year, rng) {
  const scenario = sampleScenario(rng);
  const months = [];
  for (let m = 0; m < 12; m++) {
    const overrides = {
      fobMultiplier: 1 + scenario.fobShock,
      buyMultiplier: 1 + scenario.buyShock + (scenario.diseaseEvent && [3,4,5].includes(m) ? 0.20 : 0),
      mortalityMultiplier: scenario.mortalityShock,
      tariffPct: scenario.tariffEvent ? Math.max(15, rng() * 30) : null,
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

// Run N iterations and return distribution. Pass `seed` for deterministic results.
export function runMonteCarlo(routeConfig, year, iterations = 1000, seed = 42) {
  const rng = makeRng(seed);
  const results = Array.from({ length: iterations }, () => runOneIteration(routeConfig, year, rng));
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
export function rankRoutesByResilience(year, iterations = 200, seed = 42) {
  return hotRoutes.map((r, idx) => {
    // Different seed per route so they don't share identical shock sequences
    const mc = runMonteCarlo(r, year, iterations, seed + idx);
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
