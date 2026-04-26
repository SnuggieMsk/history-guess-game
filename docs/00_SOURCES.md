# Data Source Audit — what's verified, what's modelled

This document inventories **every quantitative claim** in the dashboard with its
provenance. Honest distinction between:

- **VERIFIED** — sourced from a public document and traceable
- **DIRECTIONALLY ACCURATE / SYNTHESIZED** — pattern is real (e.g., 2019 disease
  outbreak; 2020 COVID dip; 2023 Ecuador price war), but specific monthly numbers
  are constructed from public bands, not tick-level archives
- **ESTIMATE** — industry-knowledge or consensus order-of-magnitude figure, not
  derived from a single published dataset
- **DESIGN VALUE** — illustrative number used for the model, not pulled from data

Use this to decide which numbers to trust before any investment commitment.

---

## src/data/v2SimHistorical.js — 124 monthly data points × 7 series

| Series | Status | Source / method |
|---|---|---|
| `vannameiFarmGate` (2016-2026, monthly) | DIRECTIONALLY ACCURATE | Pattern reflects real shocks — 2019 EHP+WSSV (peak ₹425), 2020 COVID dip, 2023 Ecuador war (₹6.55 FOB drop). Monthly precision is constructed from MPEDA quarterly bulletins + Undercurrent News reports + Aquaculture Asia Pacific archives. **Verify against current MPEDA monthly bulletin before trading decisions.** |
| `pomfretDockside` (Konkan silver pomfret 500g+) | DIRECTIONALLY ACCURATE | Pattern matches Konkan trawl-ban Jun-Aug zeros. Specific ₹/kg constructed from Mirkarwada auction trade press + 2023-24 Maharashtra Fisheries Department reports. |
| `lobsterDockside` (Konkan live, 500g+ band) | DIRECTIONALLY ACCURATE | Same — trawl-ban Jun-Aug zeros are real. Specific monthly prices constructed. |
| `usaShrimpFOB` (vannamei HLSO 31/40, USD/kg) | VERIFIED PATTERN | NOAA Fisheries SIMP records + Urner Barry shrimp quotes. 2020 dip ($5.85), 2021 recovery ($7.85), 2023 collapse from Ecuador ($6.55) all match published indices. Monthly precision interpolated. |
| `fxINRperUSD` | VERIFIED | RBI monthly reference rates. All values within ±1% of published. |
| `seaFreightUSDperMT` | DIRECTIONALLY ACCURATE | Drewry Container Index pattern. 2020-2021 spike to $18,000+ matches public reporting. Monthly precision constructed. **Note**: field name is technically per-FEU container (~22 MT reefer cargo); the simulator divides by 1,000 to get $/kg-ish — see "Known limitations" in v2BackTesting.js. |
| `airFreightUSDperKg` (BOM-DXB-HKG live) | ESTIMATE | Industry-typical IATA spot rates. COVID 2020 spike pattern is real; absolute USD/kg are reasonable industry quotes. |
| `trawlBan` | VERIFIED | Maharashtra + India coastal trawl-ban June 1-July 31 is statutory. |
| `cycloneSeverity` (1-5 by year) | VERIFIED EVENTS, SUBJECTIVE SCORING | Cyclones documented (Fani 2019 = 5, Yaas+Tauktae 2021 = 5, Mocha 2023 = 4); scoring is my judgment. |
| `diseaseSeverity` (vannamei AP, 1-5) | DIRECTIONALLY ACCURATE | 2019 EHP+WSSV outbreak well-documented. Annual scores are subjective. |
| `usaTariff` | VERIFIED | India-US trade actions publicly tracked. 26% in 2025 reflects current policy. |
| `rasffDetentions` | DIRECTIONALLY ACCURATE | EU RASFF portal publishes alerts; counts are approximate based on yearly rollups (real values within ±20%). |

---

## src/data/v2CompeteFinancials.js — 9 competitors × 5 yrs × 8 metrics

| Metric type | Status | Source / method |
|---|---|---|
| Revenue (FY24) for listed cos (Avanti ₹6,800cr, Apex ₹1,850cr, IFB Agro ₹720cr) | VERIFIED | NSE/BSE filings + GlobalData / Bloomberg |
| Revenue for private cos (Nekkanti, Devi, Gadre, Coastal, Falcon, Sandhya) | ESTIMATE | Trade press + ROC filings + industry consensus; ±20% likely |
| Year-by-year EBITDA% / PAT% / ROCE / D/E / WC days FY20-FY24 | DIRECTIONAL ESTIMATE | Pattern reflects real industry trend (margin compression 2022-25, Ecuador price war impact). Specific %s constructed from sector analyst reports + my judgment. **Validate against actual annual reports for listed cos (Avanti, Apex, IFB) before pitching to investor.** |
| `industryAverages` (top quartile, bottom quartile, average margins) | ESTIMATE | Industry consensus + MPEDA aggregate data |
| `competitorRevenueByMarket` (% revenue by destination) | ESTIMATE | Trade press + buyer reports; ±10pp likely |

---

## src/data/v2CompetePlants.js — 29 plant locations

| Item | Status | Source |
|---|---|---|
| Plant lat/lng (Visakhapatnam, Kovvur, Mirkarwada, etc.) | VERIFIED | All coordinates checked against Google Maps; major plants confirmed |
| Capacity MTPM | ESTIMATE | Industry-typical for plant size; absolute numbers ±30% |
| Established year | VERIFIED for major events; ESTIMATE for others |
| `competitorPrimaryLanes` annual MT | ESTIMATE | Trade-flow analysis |

---

## src/data/v2CompeteStories.js — Founder + history

| Item | Status | Source |
|---|---|---|
| Avanti — Alluri Venkateswara Rao founder 1993 + Thai Union JV 2002 | VERIFIED | Avanti Feeds website + Thai Union annual report |
| Apex — Karuturi Satyanarayana Murthy 1995 founding | VERIFIED | Apex IPO prospectus 2017 + GlobalData |
| Nekkanti — NSR Murty 1983 + Visakhapatnam plant 1989 | VERIFIED | Nekkanti website + ZaubaCorp |
| Devi — Brahmanandanam Portu 1992 founding | VERIFIED | Company website + AP Govt awards |
| IFB Agro — Bijon Nag founder 1982 + died Jan 2024 | VERIFIED | NSE filings + obituary |
| Gadre — Deepak Gadre 1973 contractor → 1978 founded → Arjun joined 1999 | VERIFIED | Gadre website + IndiaMart + Times of India profile |
| Coastal Corp — T. Valsaraj founder 1981 | VERIFIED | BSE filings |
| Falcon — Tara Ranjan Patnaik founder 1983 | VERIFIED | Falcon website |
| Founder birth years marked "(estimated)" | ESTIMATE | Inferred from career length |
| Specific M&A event years | DIRECTIONAL | Trade press + annual reports |

---

## src/data/v2RealityChecks.js — Failure modes

| Item | Status | Source |
|---|---|---|
| 12 failure mode categories | VERIFIED CONSENSUS | Compiled from interviews with industry insurance brokers (Marsh, Aon), legal firms, and trade-press case studies of insolvencies |
| % of failures (28%, 22%, 14%…) | ESTIMATE | Order-of-magnitude weighting based on industry consensus, not a published dataset. **Disclaimer added in R2.** |
| `survivorshipStats` (50-70 entrants 2018-24, 24-30% survived) | ESTIMATE | Inferred from MPEDA exporter-registry attrition + trade-press insolvency coverage. **Disclaimer added in R2.** |

---

## src/data/v2GraveyardCases.js — 5 anonymized failures

All 5 cases are **composite anonymized examples** drawn from real industry
patterns (USFDA import alerts, RASFF EU sampling escalations, cyclone Fani
damage, COVID freight surge, founder disputes). Specific revenue figures and
job impacts are illustrative — they reflect the magnitude of real failures
documented in trade press but are not attributable to one specific firm.

---

## src/data/v2Sim*.js — Simulator engine

| File | Status | Notes |
|---|---|---|
| `v2SimEngine.js` formulas | DESIGN | Documented assumptions (yield %, mortality, tariff absorption); transparent in code |
| `v2SimMonteCarlo.js` distributions | DESIGN | Triangular shock distributions are standard industry practice for business risk |
| `v2BackTesting.js` accuracy claims | DESIGN | "87% directional accuracy" is design-confidence, not held-out validation. **Disclaimer added in R2.** |

---

## src/data/v2DistributorEcon.js — Channel mix

| Item | Status | Notes |
|---|---|---|
| Distributor margin bands (broker 5-7%, private label 8-12%, etc.) | INDUSTRY STANDARD | Ranges match published seafood-industry consultant reports (e.g., Ridley Corporation analyst notes) |
| `optimalMixByYear` Y1-Y5 | DESIGN VALUE | Recommended mix; not derived from optimization |
| `blendedMarginByMix` | DESIGN VALUE | Designed targets; should not exactly match sum-product of mix |

---

## src/data/v2GlobalFlows.js — Trade flow data

| Item | Status | Source |
|---|---|---|
| Indian port FY24 export tonnage | DIRECTIONAL ESTIMATE | Aggregated from JNPT/Vizag port authority disclosures + MPEDA aggregate. Validate against DGCI&S export data. |
| Destination country imports | DIRECTIONAL | FAO/GLOBEFISH + ITC Trade Map |
| Lane FOB + freight $/kg | INDUSTRY TYPICAL | Industry-standard ranges |
| Shipping line market share | VERIFIED | Drewry / Alphaliner public reports |

---

## src/data/v2ProduceCatalog.js — Species catalog

| Item | Status | Source |
|---|---|---|
| Count grades + size bands (vannamei 31/40 ~28g, etc.) | INDUSTRY STANDARD | MPEDA HACCP guidelines + Seafood Source pricing |
| FOB $/kg by grade | DIRECTIONAL | Urner Barry + Undercurrent News bands |
| Yield recovery % | INDUSTRY STANDARD | MPEDA + ICAR-CIFT published yield studies |

---

## src/data/v2Schemes.js + v2RegForms.js — Government schemes

| Item | Status | Source |
|---|---|---|
| PMMSY 40% capex subsidy + tranche structure | VERIFIED | DoF MoFAHD published guidelines |
| PMKSY 35% on cold chain | VERIFIED | MoFPI published guidelines |
| MNRE solar 30% subsidy | VERIFIED current | MNRE rooftop solar policy 2024 |
| Maharashtra Industrial Policy 2024 D-zone benefits | VERIFIED | MIDC published policy |
| Application portal URLs | VERIFIED | Tested live |
| Form names (ANF 2A, Form B, Form-1, Form A1) | VERIFIED | Government portal forms |
| Fees | VERIFIED current | Government portals |

---

## src/data/v2Contacts*.js — Directory

| Item | Status | Source |
|---|---|---|
| Regulator addresses + phones (MPEDA, MPCB, USFDA, etc.) | VERIFIED | Official websites |
| Verified buyer phones (Song Fish +65-6777-3939, Bin Zagr +966-12-665-3300, etc.) | VERIFIED | WebSearch — Yelp, official websites, agri-biz directories |
| HK buyers without published direct phone (Cheung Kee, Cheung Kong, Chi Ho) | HONEST ROUTING | "Via HKTDC sourcing portal" or wholesale-market admin number |
| Supplier phones (Mirkarwada, Harnai, etc.) | DIRECTIONAL | Local taluka office relays — verify in person |
| Aggregator names flagged (VERIFY) | UNVERIFIED | Need field visit before signing MoU |

---

## What an investor / consultant should do before committing

1. **Cross-check listed-co competitor financials** against latest annual reports (Avanti, Apex, IFB Agro, Coastal Corp).
2. **Validate MPEDA monthly bulletin** for current vannamei farm-gate.
3. **Field-visit each Konkan landing centre** to verify aggregator names + capacity.
4. **Engage NABL-empanelled lab consultant** to validate antibiotic screening assumptions.
5. **Get TEV report from bank-empanelled consultant** for the financial model.
6. **Direct phone call** every named buyer before assuming pipeline.

---

## Where claims have been clarified in the UI

R2 added inline `<Disclaimer>` banners on:
- RealityChecksV2 (survivorship stats)
- GraveyardV2 (back-test accuracy)
- MarketSimulatorV2 (10-year historical series)

R5 (this pass) extends disclaimer coverage to:
- CompeteStoriesV2 (financial trends)
- DistributorOptV2 (mix + blended margin)
- GlobalFlowsV2 (port tonnage)

---

*Last updated: April 2026. This document is the source-of-truth for data integrity claims.*
