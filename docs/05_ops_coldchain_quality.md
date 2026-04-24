# 05 · Operations — Cold Chain & Quality Regime

Concrete SOPs, temperatures, times, and failure-mode actions. No brochure-
speak. Every CCP defined.

---

## A. Cold chain — first mile to cold store

### A1. Konkan first-mile (boat / dock → our reefer → plant)

**Objective:** arrival core-temperature in Purandar ≤2°C with <4-hour
cumulative time >4°C. Target yield loss ≤1.8% ice-melt + microbial-growth.

| Stage | Target | Action |
|---|---|---|
| Onboard icing | Shell ice 1:1 w/w; core <4°C within 45 min of catch | Boat-owner SOP + incentive bonus on compliance |
| Dock landing | Insulated food-grade crates pre-chilled to 2°C; not wooden boxes | Our dockside agent provides crates |
| Auction holding | Max 35 min on dock; re-ice every 20 min if >6°C ambient | Dockside agent monitors |
| Truck loading | Reefer pre-cooled to -2°C 60 min before loading | Reefer driver SOP, temperature log |
| Transit | Reefer setpoint -2 to 0°C; data-logger every 5 min | Telematics + cloud upload |
| Plant arrival | Core ≤2°C; straight to receiving bay | Plant QC rejects at >6°C core |

**Reefer fleet spec (4 units for AP lane, 6 chilled vans for Konkan):**
- Insulation: PUF 100 mm, K-factor ≤0.38 W/m²K
- Refrigeration: Thermo King T-1000 or Carrier Supra 950 class (diesel
  + electric standby)
- Capacity: 3.5 MT payload per chilled van; 12 MT per full reefer truck
- Telematics: GPS + temperature logger with 5-min sampling + SIM upload
- Annual maintenance cost budget: ₹1.1-1.3 L per vehicle (incl. PUF
  re-insulation Y3)

### A2. AP lane (farm pond → Purandar, ~800 km, 14-16 hr)

- **Harvest timing:** AP farms harvest pre-dawn (3-5 AM) to catch coldest
  ambient. Trucks loaded by 7-9 AM.
- **Ice slurry protocol:** 0.5:1 shrimp:ice ratio at loading, topped up
  every 300 km transit. Plant arrival shrimp body-temp target -1.0 to
  +1.5°C.
- **Yield-loss benchmark:** our target ≤2.5% from farm-gate to plant
  gate (industry typical 3-5%).

### A3. Lakshadweep lane (island → mainland, then to Purandar)

- **Leg 1:** Agatti/Minicoy island auction → Agatti chilled storage (1-2
  hr) → Agatti airport cargo → Kochi (CCJ) bellyhold 60 min → Kochi cold
  store (receiving agent) → reefer truck to Pune/Purandar (22-26 hr).
- **Or Leg 1 alt:** Direct Agatti → Pune (CCJ-PNQ) via Mumbai BOM 1-stop
  (36-42 hr incl. transit waits). Prefer for yellowfin saku.
- Critical: Lakshadweep air cargo has limited capacity (Agatti airport
  runway 1,500 m, ATR 72 cargo hold ~4 MT max per flight). **Allocation
  pre-booking 48 hr ahead is mandatory; slot pricing is seasonal.**

---

## B. Processing plant — internal flow

### B1. Receiving bay (CCP-1: temperature + visual quality)

- Product arrives: scan QR/RFID → weigh → sample temp → accept/reject
- **Action limit:** core >6°C = reject to by-product or supplier credit
  (not mixed with A-grade inventory)
- **Sensory check:** FDA FFDCA Section 402(a)(4) decomposition check using
  trained grader panel (minimum 2 graders sign off on each 500 kg lot)
- Retention sample: 1 kg frozen at -40°C × 6 months, labelled by lot

### B2. Grading hall (chill zone, 8-10°C, RH <75%)

- **Counts (shrimp):** 16/20, 21/25, 26/30, 31/35, 31/40, 36/40, 41/50,
  51/60, 71/90 — mechanical grader + manual re-check
- **Species separation (finfish):** size class + weight class + quality
  grade A/B/C
- **Cephalopod:** tentacle length + weight + colour check

### B3. De-heading / de-shelling (chill zone)

- **Vannamei HOSO → HLSO:** 66-68% yield target; manual de-heading
  knives; 2-person teams (head-puller + trimmer); ₹42 daily target 120 kg
  processed per team
- **Shell removal (PD / PDTO):** mechanised or manual; yield 87-89%
- **Water use:** 3-4 L per kg throughput; recirculated through 1 µm
  sediment + UV + chlorine 1 ppm

### B4. Sanitising + IQF pre-freezing

- **CCP-2: Sanitizer concentration** 
  - Chlorine free-residual 5-10 ppm at processing stage; test every 2 hr
    with DPD method
  - Peracetic acid alternate: 50-80 ppm at 5-8°C, 30-60 sec contact
- **Glaze water:** chlorinated ≤2 ppm, temperature ≤2°C, treated water
  only

### B5. IQF tunnel (CCP-3: freezing end-point)

- Air-blast IQF tunnel, -35 to -40°C air temp
- Belt speed calibrated per product:
  - Vannamei 31/40: **belt residence 8 min** (target core -18°C)
  - Vannamei 16/20: **residence 12 min**
  - Octopus tentacle segments: **residence 10 min**
  - Tuna saku block (2×3×10 cm): **residence 15 min** (or dedicated
    plate freezer)
- **Action limit:** exit core >-15°C = recycle through tunnel; do not
  pack

### B6. Glazing + packing (chill zone)

- Water spray glazing (8-12% glaze for shrimp; 6-8% for octopus; 3-5% for
  tuna)
- Inner polybag (food-grade LDPE), master carton (corrugated, wet-strength
  treated)
- **Metal detector (CCP-4):** Fe 1.2 mm, non-Fe 1.8 mm, SS 2.5 mm
  sensitivity; reject conveyor; every 1-hr calibration check

### B7. Cold storage (-20°C with <±2°C variance)

- Two 150-MT capacity cold rooms (modular, with backup cooling)
- Data logger grid: 9 sensors per room, continuous logging + cloud
- Air-flow design 4-6 air changes/hour
- Inventory FIFO via WMS (warehouse management system integrated with
  ERP)

### B8. Container stuffing (CCP-5: temperature + seal)

- Reefer container pre-cooled to -25°C 4 hr before stuffing
- Stuffing completed within 30 min to prevent warming
- Data logger placed inside container before doors closed
- Customs seal number recorded on shipping docs

---

## C. Quality lab — in-house screening matrix

### C1. Antibiotic + banned-substance screening

**Required for export shrimp + tuna to EU/US/Japan:**

| Analyte | Screening method | LOD | Action limit | % lots tested |
|---|---|---|---|---|
| Chloramphenicol (CAP) | ELISA (Neogen/Euroclone) | 0.1 ppb | 0.1 ppb (zero tolerance) | 100% |
| Nitrofuran AOZ/AMOZ/SEM/AHD | ELISA | 0.5 ppb | 0.5 ppb (EU); 1 ppb (US) | 100% |
| Oxytetracycline | ELISA | 25 ppb | EU 100 ppb / JP 200 ppb | Risk-based 30-50% |
| Sulfonamides | ELISA | 10 ppb | EU 100 ppb | Risk-based 30% |
| Enrofloxacin / Ciprofloxacin | LC-MS/MS | 0.5 ppb | Zero (aquaculture) | 100% |
| Malachite Green / LMG | ELISA + LC-MS/MS | 0.5 ppb | Zero | 100% |
| Crystal Violet / LCV | ELISA | 0.5 ppb | Zero | Risk-based |

**Confirmation (LC-MS/MS) mandatory for any positive ELISA.**

### C2. Microbiological

| Target | Method | Action limit |
|---|---|---|
| Aerobic Plate Count (APC) | ISO 4833-1 | <5×10⁵ CFU/g |
| E. coli | ISO 16649-2 | <10 CFU/g |
| Salmonella | ISO 6579-1 | Absent in 25 g |
| Vibrio parahaemolyticus | ISO/TS 21872-1 | Absent in 25 g |
| Vibrio cholerae | ISO/TS 21872-1 | Absent in 25 g |
| Listeria monocytogenes | ISO 11290-1 | Absent in 25 g (RTE only) |
| Histamine (tuna) | HPLC or ELISA | <100 ppm (EU); <50 ppm (JP avg) |

### C3. Heavy metals + contaminants

| Analyte | Method | Limit |
|---|---|---|
| Mercury (tuna especially) | AAS / ICP-MS | 1.0 ppm (EU) / 0.5 (JP high-grade) |
| Cadmium | AAS / ICP-MS | 0.1-0.5 ppm by species |
| Lead | AAS | 0.3 ppm |
| Benzo[a]pyrene (smoked) | HPLC | 2.0 μg/kg |

### C4. Lab accreditation path

- **NABL ISO/IEC 17025** accreditation — timeline 12-18 months from start;
  critical for EU export credibility. Without NABL, EU importers require
  external-lab re-testing at ~₹3,500/sample × 100+ samples/week.
- Lab equipment capex: ₹85 L (v1's budget is retained; itemised below)
  - HPLC-MS/MS system: ₹45 L (Agilent 1290/6495 or equivalent)
  - ELISA reader + washer + incubator: ₹6 L
  - Microbiology setup (incubators, laminar flow, autoclave, media): ₹12 L
  - AAS / ICP-MS (shared or outsourced initially): ₹18 L
  - Glassware + consumables Y1: ₹4 L
- Operator staff: 2 analytical chemists (M.Sc., ₹55-70 k/month each) + 2
  microbiologists + 1 lab supervisor. Y1 lab opex ₹32-38 L.

### C5. Pond-/boat-level traceability

- **RFID tag** on every crate at receiving (100% traceability)
- **Batch ID** links back to:
  - Pond ID + harvest date + feed mill + probiotic batch (shrimp)
  - Boat ID + landing date + gear type (wild)
  - Aggregator + crate ID for cephalopods
- **QR code on master carton** → buyer scans → sees full chain
- Required for BAP 3-star, ASC, MSC CoC. Non-negotiable for EU/US premium.

---

## D. Water & effluent

### D1. Water sourcing

- Borewell (dedicated) with quality testing every quarter (FSSAI + IS 10500)
- Backup: Purandar local water-supply connection
- RO treatment for process water: 80 m³/day
- Total peak water need (Y3, 3 TPD Y3): ~250 m³/day

### D2. ZLD effluent treatment

- Stages: equalisation → primary screen → dissolved-air-flotation (DAF) →
  biological (MBR) → RO → multi-effect evaporator (MEE) → recycled water
- Capex ₹2.2 cr; opex ₹0.25/kL recovered
- 95% water recovery target by Y2
- TDS, BOD, COD, E. coli, oil & grease monitored daily

---

## E. Failure-mode responses

| Mode | Trigger | Response | Owner |
|---|---|---|---|
| CAP positive in ELISA | Any lot | Immediate hold; LC-MS/MS confirm in 24 hr; if positive, reject to by-product + supplier credit + blacklist review | QC Head |
| Reefer temp excursion >6°C for >30 min | Data logger alert | Reroute to plant priority; yield test at receive; book loss if A→B downgrade | Cold-chain manager |
| APC >10⁶ CFU/g on exit sample | Lot test | Reprocess if allowed by product spec; else divert to cooking line; RCA within 48 hr | QC + Production |
| Metal detector reject >5 in 1 hr | Detector log | Stop line; trace-back to inbound lot; magnetic/sieve check | Production Head |
| Customer complaint (decomposition / quality) | Post-shipment | 48-hr retention sample analysis; root-cause report; credit negotiated; process change if systemic | QC Head + MD |

---

Next: `05b_ops_live_cargo.md` — lobster + crab + air freight reality.
