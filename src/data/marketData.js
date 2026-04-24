// Research-backed Indian seafood export market data, FY2025-26
// Sources: MPEDA provisional FY26 release (Apr 2026), PIB, IBEF, Shrimp Insights,
// Business Standard, S&P Global, MoFPI/PMMSY scheme docs.

export const marketSnapshot = {
  fy: 'FY 2025-26 (provisional)',
  totalValueINR: 72325.82, // crores
  totalValueUSD: 8.28, // billion
  totalVolumeMT: 1932000, // 19.32 lakh MT
  shrimpValueINR: 47973.13, // crores
  shrimpShareValue: 66.3, // %
  shrimpShareVolume: 40.2,
  yoyValueGrowth: 6.35, // %
  yoyVolumeGrowth: 4.6,
  valueAddedShare: 11.0, // up from 2.5%
  fxAssumed: 87.0, // INR/USD used for cross-checks
};

export const marketDestinations = [
  { country: 'USA',          shareValue: 28.0, valueUSDmn: 2320, volumeMT: 312000, yoyValue: -14.5, status: 'Tariff-pressured but #1'  },
  { country: 'China',        shareValue: 16.7, valueUSDmn: 1385, volumeMT: 451363, yoyValue:  22.7, status: 'Fastest-growing major'    },
  { country: 'EU-27',        shareValue: 14.2, valueUSDmn: 1175, volumeMT: 207976, yoyValue:   8.0, status: 'Premium, EU-approved units only' },
  { country: 'Japan',        shareValue:  5.4, valueUSDmn:  448, volumeMT: 117000, yoyValue:   3.0, status: 'Premium black tiger, value-add' },
  { country: 'Vietnam',      shareValue:  6.2, valueUSDmn:  513, volumeMT: 168000, yoyValue:  18.0, status: 'Re-processing hub'        },
  { country: 'South Korea',  shareValue:  3.1, valueUSDmn:  257, volumeMT:  62000, yoyValue:  12.0, status: 'Growing value-add'        },
  { country: 'UK',           shareValue:  2.4, valueUSDmn:  199, volumeMT:  31000, yoyValue:   6.0, status: 'Post-Brexit FTA upside'   },
  { country: 'UAE/GCC',      shareValue:  4.6, valueUSDmn:  381, volumeMT:  84000, yoyValue:  14.0, status: 'Wild-catch fish, premium' },
  { country: 'Russia & CIS', shareValue:  2.8, valueUSDmn:  232, volumeMT:  61000, yoyValue:  20.0, status: 'Sanctions-driven gain'    },
  { country: 'Others',       shareValue: 16.6, valueUSDmn: 1374, volumeMT: 438661, yoyValue:   7.0, status: 'SEA, Africa, LATAM'      },
];

// Quick reference: USD pricing bands (FOB Indian ports), April 2026
export const fobPriceBands = {
  vannameiHLSO_31_40: [6.20, 7.20],
  vannameiHLSO_41_50: [5.40, 6.30],
  vannameiCookedPD:   [9.00, 11.50],
  blackTigerHOSO_U10: [14.00, 18.00],
  pomfretWhole:       [9.00, 14.00],
  ribbonfish:         [3.20, 4.50],
  squidWhole:         [4.50, 6.20],
  cuttlefishWhole:    [5.00, 7.00],
  octopusWhole:       [7.50, 10.00],
  lobsterWholeFrozen: [22.00, 32.00],
  yellowfinTunaLoin:  [12.00, 18.00],
  seabassWhole:       [6.00, 9.00],
  cobiaWhole:         [7.00, 10.00],
  pompanoWhole:       [6.50, 9.00],
  mudCrabLive:        [12.00, 22.00],
  seaweedDried:       [2.50, 4.50],
};
