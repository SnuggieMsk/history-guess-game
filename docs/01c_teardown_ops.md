# 01c · Operational Teardown — Brochure-Speak Out, SOPs In

v1 talks about operations in marketing language ("HACCP-grade", "modern IQF",
"oxygenated tanks"). That's what a trade-show brochure says. An operator
wants temperatures, times, CCPs, action thresholds, and failure-mode responses.

## 1. Cold chain — v1 says nothing real

**What v1 says:** "reefer trucks, cold storage at -20°C, IQF freezing"

**What the operator needs to know:**

- **Receive-to-ice time (RTIT):** on wild catch, every hour >4°C = 3-5% loss
  of A-grade yield. Target: landing → ice within 20 min. SOP: pre-chilled
  insulated crates at the dock, not post-transit icing.
- **Reefer setpoints:** Konkan wild going to IQF needs body-core 0-2°C, not
  -2°C (freezes + damages flesh on thaw). For shrimp in slurry ice, salt-
  adjusted setpoint is -1.5°C. Must be logged per-haul via telematics.
- **Plant arrival hold:** <40 min between truck dock and grading. Longer and
  yield drops 1-2%.
- **Processing line temperature:** processing hall must be 8-10°C at chest
  height. Not "cool" — 8-10°C with humidity <75%. Any warmer and Aerobic
  Plate Count (APC) spikes.
- **IQF tunnel residence time:** vannamei 31/40 at -40°C air temp needs 7-9
  minutes to achieve -18°C core. v1 doesn't specify this. Under-freezing
  causes glaze separation and ice crystal damage on thaw.
- **Glaze thickness:** export standard 8-12% by weight for shrimp, 6-8% for
  octopus/squid. Too much = buyer discount for "wet weight cheat"; too
  little = freezer burn in 60 days.
- **Cold storage thermal stratification:** -20°C nominal has ±4°C variance
  in a typical warehouse, worse if <4 daily air changes. We'd need data
  logger grid (9 sensors per 200 MT room) with daily audit log.

## 2. Quality / food safety — v1 names a lab but not a regime

**What v1 says:** "in-house ELISA + HPLC + micro lab"

**What the operator needs to know:**

- **What antibiotics are we screening for?**
  - **Chloramphenicol** (CAP) — banned globally. USFDA action limit = LOQ,
    effectively zero. ELISA LOD ~0.1 ppb; HPLC-MS/MS confirms.
  - **Nitrofurans** (AOZ, AMOZ, SEM, AHD metabolites) — also banned. EU LOQ
    0.5 ppb; USFDA action 1 ppb.
  - **Oxytetracycline** — allowed with MRL 100 ppb (EU); screen ELISA.
  - **Sulfonamides** — EU MRL 100 ppb. ELISA screen.
  - **Enrofloxacin / Ciprofloxacin** (fluoroquinolones) — banned for
    aquaculture in USA/EU. Zero tolerance. HPLC-MS/MS confirmation.
  - **Malachite Green / Leucomalachite Green** — banned antiparasitic. ELISA
    LOD 0.2 ppb.

  v1 named the lab equipment but no screening matrix. Bad.

- **Sampling plan:** ICMSF 2-class plan for each microbiological. Per-lot
  sampling: 5 samples per 2-ton shrimp lot for APC, E. coli, Salmonella,
  V. parahaemolyticus, V. cholerae.

- **In-house lab certification:** NABL ISO/IEC 17025 accreditation, not just
  "in-house." Without NABL accreditation, our lab reports won't be accepted
  by EU importers or auditors. Capex adds ~₹40 L + ongoing.

- **Pond-level traceability:** for BAP/ASC, we need 100% pond-ID and feed
  batch traceability. RFID tags on crates are insufficient — need pond
  registration with supplier + harvest date + feed mill batch + probiotic
  batch. v1 hand-waves this.

- **Retention samples:** every export lot retains 1 kg frozen for 6 months.
  USFDA can and does recall-audit back to retention.

## 3. Live-cargo operations — v1 writes poetry, reality is engineering

**What v1 says:** "oxygenated live tanks + Pune-DXB-HKG 16 hours
door-to-door."

**What the operator needs to know:**

- **Lobster mortality in air freight is 8-15% industry average.** A 3%
  target is aspirational; possible only with best-in-class packing. v1
  doesn't budget 8-15% mortality cost.
- **Packing protocol for spiny lobster:**
  1. Purge in chilled salt-water tank (18°C, 24 hr) to void gut.
  2. Cool to metabolic-low (10-14°C) over 4-6 hrs (shock kills).
  3. Pack in gel-pack-insulated polystyrene with moist seaweed bedding; 12
     pcs per carton max.
  4. Max transit time at temp 24 hrs. Anything longer = mortality spike.
- **Airline booking:** Emirates SkyCargo has strong live-seafood protocol;
  Qatar Cargo, Air India, Lufthansa Cargo are alternatives. Need signed
  per-lot AWB with "LHO" (live animal handling officer) notification and
  "perishable goods" service tag. v1 doesn't map to specific carriers.
- **Ground handling at PNQ:** Pune Lohegaon has limited perishable cargo
  handling. Mumbai CSMIA has Celebi and Bird Group terminals with cold-room
  holding. Practical reality: **Mumbai is our live-cargo port until
  Purandar or PNQ's perishable terminal matures**, not the other way around.
- **Customs + export docs:** live-cargo needs a Live Animal Export Permit
  from AQCS (Animal Quarantine & Certification Service), MPEDA live-export
  endorsement, and destination country import permit. Per-cargo docs lead-
  time: 72 hours. v1 doesn't plan the permit window.
- **Insurance:** all-risks marine insurance on live cargo costs 3-5% of
  cargo value. Many insurers refuse or require named-air-waybill. A $15,000
  HK lobster cargo is insurable; a $150,000 cargo needs specialty
  underwriter. v1 has no insurance line.

## 4. Processing line — v1 is generic

- **Line count + capacity:** 2 de-heading lines, 1 de-shelling line, 1 IQF
  tunnel, 1 glazing line, 2 packing lines. v1 names equipment types but not
  counts or throughput.
- **Water use:** HACCP-grade plant uses 18-25 L water per kg finished
  product. Our 10 TPD Y1 throughput = 180-250 kL/day water. Purandar is
  water-stress — feasibility check needed.
- **Effluent:** ZLD is ₹2.2 cr capex plus ₹0.25/kL opex. v1 mentions ZLD
  but doesn't cost it.
- **Refrigerant:** ammonia (R717) is preferred for IQF/cold store due to
  efficiency; requires PESO licence, trained operators (24/7 on-site
  certified operator mandatory during operation).

---

## Cuts and kills

| v1 claim | Real detail needed |
|---|---|
| "HACCP-grade plant" | Name the CCPs: temperature, pH, water activity, metal detection, weight |
| "IQF freezing" | Tunnel type, air temp, residence time, glaze protocol |
| "Lobster air-freight 3% mortality" | 8-15% industry typical; packing SOP detailed; mortality cost budgeted |
| "In-house ELISA + HPLC" | Screening matrix with 8 named analytes + LOD + action limits |
| "Oxygenated tanks" | Purge + cool + pack SOP, named carrier, AQCS permit window |

---

Next: `01d_teardown_financials.md` — where numbers don't survive stress.
