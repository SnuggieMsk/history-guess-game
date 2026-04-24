// Competitor landscape — Indian seafood exporters relevant for benchmarking
// and a Maharashtra-state focused view.
// Sources: Dollar Business top-10, Expert Market Research, MPEDA exporter directory.

export const nationalCompetitors = [
  { name: 'Avanti Frozen Foods (Devi group)', revenueINRcr: 4000, share: 10.0, focus: 'Vannamei, integrated feed→farm→processing', plantStates: ['AP', 'TN'], strength: 'Largest scale, Thai Union JV',     weakness: 'USA tariff exposure'  },
  { name: 'Apex Frozen Foods',                revenueINRcr: 1450, share:  4.0, focus: 'Vannamei integrated, value-add cooked',  plantStates: ['AP'], strength: 'High value-add %, listed company', weakness: 'Single-state sourcing'},
  { name: 'Devi Sea Foods',                   revenueINRcr: 1100, share:  3.0, focus: 'Vannamei, EU markets',                   plantStates: ['AP'], strength: 'EU establishment numbers',        weakness: 'Limited species mix'  },
  { name: 'Devi Fisheries',                   revenueINRcr:  950, share:  2.9, focus: 'Vannamei + black tiger',                 plantStates: ['AP'], strength: 'Tiger-shrimp niche',              weakness: 'Volume-second to peers'},
  { name: 'Nekkanti Sea Foods',               revenueINRcr:  720, share:  2.5, focus: 'Vannamei premium retail-ready',          plantStates: ['AP'], strength: 'Sustainability cert + retail',    weakness: 'Capacity ceiling'      },
  { name: 'Sandhya Aqua',                     revenueINRcr:  650, share:  2.0, focus: 'Vannamei + value-add',                   plantStates: ['AP'], strength: 'Integrated hatchery',             weakness: 'AP-only'              },
  { name: 'Forstar Frozen Foods',             revenueINRcr:  580, share:  1.6, focus: 'Vannamei + finfish',                     plantStates: ['Gujarat'], strength: 'Western India base',          weakness: 'Scale gap to AP majors'},
  { name: 'Falcon Marine Exports',            revenueINRcr:  520, share:  1.5, focus: 'Mixed species, EU/Japan',                plantStates: ['Odisha'], strength: 'EU/Japan relationships',        weakness: 'East-coast cyclones'  },
  { name: 'Kader Exports',                    revenueINRcr:  480, share:  1.4, focus: 'Wild caught marine fish',                plantStates: ['Kerala'], strength: 'Wild-catch network',           weakness: 'Volatile supply'       },
  { name: 'BMR Industries',                   revenueINRcr:  410, share:  1.2, focus: 'Vannamei + RTH retail',                  plantStates: ['AP'], strength: 'Retail RTH packs',                weakness: 'Brand thin in EU'      },
  { name: 'Waterbase (RKB Aqua)',             revenueINRcr:  380, share:  1.1, focus: 'Feed + farming',                         plantStates: ['TN'], strength: 'Feed integration',                weakness: 'Processing minor stream'},
];

export const maharashtraCompetitors = [
  { name: 'Jeelani Marine Products',  HQ: 'Mumbai',     plant: 'Taloja',    species: 'Mixed wild + farmed', edge: 'Old EU/USFDA approvals; Sassoon Dock buyer'  },
  { name: 'Gadre Marine Exports',     HQ: 'Ratnagiri',  plant: 'Ratnagiri', species: 'Surimi + crab stick',   edge: 'Surimi monopoly in India; Konkan-rooted'   },
  { name: 'Castlerock Fisheries',     HQ: 'Mumbai',     plant: 'JNPT zone', species: 'Pomfret + cephalopods', edge: 'GCC pomfret specialist'                    },
  { name: 'IFB Agro (seafood arm)',   HQ: 'Kolkata',    plant: 'Maharashtra leased', species: 'Black tiger + vannamei', edge: 'Multi-region sourcing'         },
  { name: 'West Coast Frozen Foods',  HQ: 'Mumbai',     plant: 'Bhiwandi',  species: 'Cephalopods + finfish', edge: 'EU mixed-container expert'                  },
  { name: 'Coastal Corporation',      HQ: 'Vizag',      plant: 'Maharashtra depot', species: 'Vannamei',      edge: 'Cross-state arbitrage'                      },
];

// Where we win/lose vs each competitor type
export const competitivePositioning = [
  {
    competitorType: 'AP shrimp majors (Avanti, Apex, Devi)',
    theyWin: ['Scale (10x our throughput)', 'Vertical hatchery integration', 'AP feed cost advantage', 'Container-load economics'],
    weWin: ['Konkan wild-catch species mix they don\'t process', 'Maharashtra-origin pomfret/lobster/black tiger premium', 'Live-export from PNQ/NMIA', 'Multi-species reefer container value (mixed loads sell at premium)'],
  },
  {
    competitorType: 'Maharashtra incumbents (Gadre, Jeelani, Castlerock)',
    theyWin: ['Decade-old EU buyer relationships', 'Surimi/specialty product moats', 'Coastal plant proximity'],
    weWin: ['Greenfield modern HACCP plant (vs aging facilities)', 'Solar-powered cost floor', 'PMMSY + PMKSY subsidy stack on new capex', 'Air-cargo proximity (Purandar)', 'Younger, traceability-native ops'],
  },
  {
    competitorType: 'Global rivals (Ecuador, Vietnam, Indonesia)',
    theyWin: ['Lower farm-gate cost (Ecuador shrimp)', 'Vietnam re-processing scale', 'Indonesia tuna fleet'],
    weWin: ['Indian PMMSY + RoDTEP subsidy stack', 'Closer to GCC/Africa than SE Asia', 'EU GSP+ access (vs Vietnam)', 'India-UK FTA upside on 0% pomfret/shrimp duties'],
  },
];
