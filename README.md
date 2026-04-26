# Konkan Seafoods — Investor Dashboard & Business Plan

An investor-grade planning artifact for a **₹40 cr seafood-export venture** based at
Purandar (Pune district, Maharashtra). Sources from Konkan coast wild catch + Andhra
Pradesh farmed shrimp + Lakshadweep MSC pole-and-line tuna. Exports to USA, EU,
Japan, China, GCC, Hong Kong, Singapore, UK.

This repository contains:

1. **Interactive React Dashboard** (`src/`) — 60+ navigable sections with named
   suppliers/buyers, charts, sortable tables, an interactive cost calculator, monte
   carlo simulator, 5-yr forecast, and competitor maps. Built with React 18 + Recharts
   + React Router.

2. **`BUSINESS_PLAN.md`** (~1,000 lines, repo root) — investor-grade narrative.

3. **`docs/`** (~3,000 lines, 14 files) — V2 deep-dive markdown docs with named
   entities, SOPs, certification paths, government schemes, destination-country
   analysis, competitor forensics, stress-tested financials.

## Quick start

```bash
npm install
npm start
# open http://localhost:3000
```

## Try the dashboard live

GitHub Pages URL: `https://<your-username>.github.io/history-guess-game/` (after
running `npm run deploy` and pointing Pages → `gh-pages` branch). Or use the
GitHub Actions workflow that auto-deploys on push.

## How the 60-route dashboard is organised

The sidebar is grouped into **13 sections**. Hit `⌘K` (Mac) or `Ctrl+K`
(Win/Linux) to open a global search across all routes — type "lobster", "PMMSY",
"tariff" to find sections fast.

| Group | Sections |
|---|---|
| **V2 · Start Here** | Operator Playbook (Day 0 → Y1) · Sharpened Thesis · Jargon Cheatsheet (55 terms) |
| **V2 · Geography & Supply** | Maharashtra Map · Named Suppliers (12 nodes) · Vendor Directory (60+) |
| **V2 · Buyers & Markets** | Named Buyers (40+) · Destination Countries · Competitor Forensics |
| **V2 · Operations** | Ops & Quality (5 CCPs) · Live-Cargo Calc · Certifications · Nightmare Playbook |
| **V2 · Finance & Policy** | Govt Schemes · Stress-Tested Financials · Balance Sheet + Tax · DPR · Investor Teardown |
| **V2 · Tools & Templates** | Document Templates · Software Stack · Insurance Program · Vendors · Jargon · ESG/Wargame |
| **V2 · L1 Investor Build** | Competitor Deep Stories (founders, M&A, financials, plants) · Supply-Chain Flows |
| **V2 · L2 Simulator** | ★ Market Simulator (10-yr historical + scenario overrides) |
| **V2 · L3 Contacts** | Phone/Email Directory (regulators · suppliers · buyers · helplines) |
| **V2 · L4 Regulatory** | Exact Forms + Portals (13 certs with URL/fields/fees) · Sim News Timeline |
| **V2 · L5 Produce + Portfolio** | Produce Visual Catalog · Multi-Route Portfolio Sim |
| **V2 · L6 Reality + Monte Carlo** | Reality Checks (12 fail modes) · Graveyard + Back-test · Monte Carlo Sim · Weather + Climate · Distributor Optimizer |
| **V2 · L7 Global Flows** | World Trade Flow Map · Compound Shock Sim |
| **V2 · L8 DPR + 5-Yr Sim** | DPR Walkthrough (18-ch) · DPR Financial Model · DPR Annexures (10) · 5-Year Forecast Sim · Sim Narration + Decisions |
| **V1 Reference** | Earlier framework-style sections (Executive Summary, Value Chain, etc.) — kept for diff against V2 |

## The Market Simulator

7 simulator modules (sim v1 → v7):
- **v1 — Market Simulator**: single-route 10-yr historical engine (124 months × 14 variables × 30 routes)
- **v2 — Sim News Timeline**: 26 major news events 2016-2026 driving sim outputs
- **v4 — Portfolio Sim**: multi-route allocation sliders + blended margin
- **v5 — Monte Carlo**: seedable Mulberry32 PRNG; 1000 stochastic scenarios; deterministic same-seed reproducibility
- **v6 — Compound Shock**: 8 stress scenarios (cyclone+tariff+RASFF combos)
- **v7 — 5-Year Forecast**: bear/base/bull compounded with WC + cash-position evolution
- **Sim Narration + Decisions**: 10 insight patterns + 4 decision flowcharts + 10 daily prompts

## Build

```bash
npm run build       # production bundle
npm run deploy      # builds + injects 404.html SPA fallback + pushes to gh-pages branch
```

## Tech stack

- React 18 + React Router 6 (BrowserRouter; SPA-style)
- Recharts 2 for all charts
- No backend — fully static, deploys to GitHub Pages
- Premium off-white editorial theme (FT/Economist inspired)
- Section-scoped ErrorBoundary so any throwing component doesn't kill the dashboard

## Disclaimer

Numbers are sourced from publicly available data (MPEDA, DGCI&S, MoFPI, FAO/GLOBEFISH,
company annual reports, trade press) through April 2026. Some figures (competitor
financials, founder details, supplier capacities, simulator historical series) are
**modelled or estimated** where exact public data is unavailable — those views carry
explicit ⚠ disclaimers in the UI. Validate against primary supplier quotes, current
MPEDA monthly bulletins, and direct buyer outreach before any investment commitment.

Subsidy quantum and timelines depend on PMMSY / PMKSY / state policy guidelines as
updated periodically.

## Contributing

Open issues / PRs against the `claude/seafood-export-business-VbWaF` branch.
The repo's default `main` branch is reserved for the original (unrelated)
"history-guess-game" project; the seafood dashboard lives entirely on the
feature branch.
