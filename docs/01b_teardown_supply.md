# 01b · Supply-Side Teardown — Where v1 Waves Hands

v1 talks about "Konkan landings" and "AP farm clusters" as if they are
commodities on a shelf. Supply side is actually the most fragile layer of a
fishing business, and v1 says almost nothing operational about it.

## The questions v1 does not answer

1. **Who specifically supplies us?** v1 names no Konkan aggregator, no AP
   pond cooperative, no Lakshadweep boat association, no specific landing
   centre's dockside auction structure. An investor asks: "Give me three
   named suppliers who have committed tonnage at benchmark price."
2. **What is the *actual* dockside price for pomfret at Mirkarwada in
   October?** v1 says ₹450/kg. Real answer: varies ₹320-780/kg by size class
   (count per kg), vessel, quality grade, and whether it's a pre-auction or
   post-auction lot. Price risk is bigger than v1 models.
3. **How much of AP vannamei supply is already locked by the big processors?**
   Avanti owns 22% of AP shrimp farmer advances; Apex, Nekkanti, Devi,
   Sandhya, Falcon together lock another 40-50%. Maharashtra new entrant gets
   residual supply at **3-8% premium to contracted price.** v1 models farm-
   gate flat.
4. **What happens in a disease outbreak?** 2019 EHP + WSSV outbreak in AP
   wiped 35% of crop; farm-gate spiked 50% in 3 weeks. v1 has no supply-
   shock contingency.
5. **What's the cold-chain failure rate first-mile?** Konkan-to-Purandar 150
   km reefer drive has industry-typical temperature excursion incidents on
   4-7% of trips. v1 assumes 0%.
6. **What about the Konkan monsoon trawl ban (June 1 - July 31)?** v1
   mentions it but doesn't model that plant utilisation drops to 30-40%
   during this window. It's 60 days a year, or 16% of capacity.
7. **Who are the existing aggregators we buy through, and what's their
   margin take?** Maharashtra landings go through a 2-3 tier aggregator
   structure (boat owner → wholesale trader → exporter). Every tier takes
   5-12% margin. v1 doesn't account for this.
8. **What's the Lakshadweep tuna supply reality?** v1 says "25 kt annual
   landings". Actual accessible-to-mainland tonnage is ~8-12 kt because of
   island logistics; existing buyers (Accelerated Freeze Drying, Amalgam
   Foods, a few Mangalore exporters) have locked most of it. A new entrant
   gets residual quota.

## What v1 *should* have said but didn't

### Konkan (Ratnagiri + Sindhudurg + Raigad + Palghar)

Real entities we would buy from:

- **Ratnagiri Fisheries Co-operative Society** — operates Mirkarwada
  auction; ~800 registered boats. Aggregator structure: Vasai + Mumbai
  traders dominate post-auction. We'd need a posted-buyer license and a
  physical presence at 4am auctions.
- **Sindhudurg Fish Farmer & Fishworker Co-operative** — Devgad, Malvan
  landings; smaller vessel base; strong lobster + squid + pomfret catch
  profile.
- **Harne Fisheries Market Committee** — Dapoli taluka landing, known for
  small shrimp, pomfret, ribbonfish.
- **Sassoon Dock (Mumbai)** — Brihanmumbai MbPT-run auction, India's largest
  urban fishing harbour. Aggressive aggregator competition; not ideal for a
  new entrant without a Mumbai agent.
- **Karanja (Uran, Raigad)** — JNPT-adjacent landing, good for wild shrimp,
  squid, cuttlefish.

Every one of these we need to build a named relationship with — not just
"source from there."

### Andhra Pradesh vannamei belt

- **Andhra Pradesh Shrimp Seed Producers Association (APSSPA)** — supply
  side of hatchery seed, proxy for farm capacity.
- **Society of Aquaculture Professionals (SAP)** — industry body, maps
  farmer clusters around Bhimavaram, Kakinada, Ongole, Nellore.
- **West Godavari + East Godavari farmer co-ops** — where ~60% of Indian
  vannamei sits.
- Named private aggregators (Growel Feeds, Avanti Feeds farmer-advance
  contracts, CP Aquaculture India, Grobest) dominate this. New entrants buy
  through traders at a 3-8% premium.

### Lakshadweep tuna

- **Lakshadweep Cooperative Marketing Federation (LCMF)** — government-
  backed aggregator for pole-and-line tuna. Offers ~40% of accessible
  tonnage.
- **Agatti, Minicoy, Kavaratti island associations** — boat owners.
- **Existing buyers (Accelerated Freeze Drying, Amalgam Foods, a couple of
  Mangalore exporters)** — have first-call on ~50% of landings via
  long-standing relationships.

### What v1's supply chapter should have contained

A table of the form:

| Supplier | Location | Annual tonnage (accessible) | Species | Historical price band | Lock-in structure |
|---|---|---|---|---|---|

We'll build this in `03_supplier_directory.md`.

---

## Cuts and kills

| v1 claim | Reality |
|---|---|
| "Konkan lands 4-6 kt/yr octopus, we'll aggregate" | Without boat-owner relationships + auction presence, we'd get <20% |
| "AP vannamei at ₹380/kg" | Farm-gate is ₹340-460/kg with 3-8% new-entrant premium |
| "Lakshadweep 25 kt tuna" | ~8-12 kt accessible; 50% locked by incumbents |
| "Reefer first-mile at ₹22/kg" | Correct ₹18-28/kg, but 4-7% failure rate |
| No monsoon model | June-July trawl ban = 16% of annual capacity unavailable |

---

Next: `01c_teardown_ops.md` — operational brochure-speak.
