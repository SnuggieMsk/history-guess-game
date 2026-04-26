// V2 L7 — Global trade flow data: India seafood exports by destination + lane economics

export const indiaPortFlows = [
  { port: 'JNPT (Nhava Sheva)', state: 'Maharashtra', lat: 18.952, lng: 72.951, mtFY24: 280000, valueINRcr: 21500, exportShare: 32, primaryRoutes: ['USA west coast', 'Europe', 'Middle East'] },
  { port: 'Visakhapatnam', state: 'Andhra Pradesh', lat: 17.694, lng: 83.302, mtFY24: 410000, valueINRcr: 26800, exportShare: 38, primaryRoutes: ['USA east coast', 'East Asia', 'GCC'] },
  { port: 'Chennai', state: 'Tamil Nadu', lat: 13.103, lng: 80.295, mtFY24: 95000, valueINRcr: 6200, exportShare: 9, primaryRoutes: ['Southeast Asia', 'Japan'] },
  { port: 'Kakinada Anchorage', state: 'Andhra Pradesh', lat: 16.989, lng: 82.247, mtFY24: 85000, valueINRcr: 5400, exportShare: 8, primaryRoutes: ['East Asia', 'Bangladesh'] },
  { port: 'Mundra', state: 'Gujarat', lat: 22.834, lng: 69.726, mtFY24: 60000, valueINRcr: 4200, exportShare: 6, primaryRoutes: ['Europe', 'Middle East', 'East Africa'] },
  { port: 'Cochin', state: 'Kerala', lat: 9.971, lng: 76.286, mtFY24: 35000, valueINRcr: 2800, exportShare: 4, primaryRoutes: ['Japan tuna', 'Europe'] },
  { port: 'Paradip', state: 'Odisha', lat: 20.317, lng: 86.611, mtFY24: 18000, valueINRcr: 1100, exportShare: 2, primaryRoutes: ['East Asia'] },
  { port: 'Kolkata', state: 'West Bengal', lat: 22.572, lng: 88.364, mtFY24: 12000, valueINRcr: 850, exportShare: 1, primaryRoutes: ['East Asia', 'Bangladesh'] },
];

export const destinationCountries = [
  { country: 'USA', code: 'US', lat: 39.5, lng: -98.5, importMTFY24: 580000, importValueUSDmn: 4800, indianShare: 31, growth: -8 },
  { country: 'China', code: 'CN', lat: 35.0, lng: 104.0, importMTFY24: 320000, importValueUSDmn: 1850, indianShare: 18, growth: 12 },
  { country: 'European Union', code: 'EU', lat: 50.0, lng: 10.0, importMTFY24: 280000, importValueUSDmn: 2100, indianShare: 16, growth: 5 },
  { country: 'Japan', code: 'JP', lat: 36.0, lng: 138.0, importMTFY24: 180000, importValueUSDmn: 1450, indianShare: 8, growth: 3 },
  { country: 'Vietnam', code: 'VN', lat: 14.0, lng: 108.0, importMTFY24: 120000, importValueUSDmn: 720, indianShare: 7, growth: 4 },
  { country: 'GCC (UAE+Saudi+Qatar)', code: 'GCC', lat: 24.0, lng: 47.0, importMTFY24: 95000, importValueUSDmn: 580, indianShare: 5, growth: 8 },
  { country: 'United Kingdom', code: 'UK', lat: 54.0, lng: -2.0, importMTFY24: 65000, importValueUSDmn: 480, indianShare: 4, growth: 22 },
  { country: 'Singapore', code: 'SG', lat: 1.3, lng: 103.8, importMTFY24: 42000, importValueUSDmn: 320, indianShare: 2, growth: 6 },
  { country: 'Hong Kong', code: 'HK', lat: 22.3, lng: 114.2, importMTFY24: 38000, importValueUSDmn: 290, indianShare: 2, growth: 4 },
  { country: 'South Korea', code: 'KR', lat: 36.0, lng: 128.0, importMTFY24: 35000, importValueUSDmn: 250, indianShare: 2, growth: 7 },
  { country: 'Thailand', code: 'TH', lat: 15.0, lng: 100.0, importMTFY24: 28000, importValueUSDmn: 180, indianShare: 2, growth: 3 },
  { country: 'Other SEA + ROW', code: 'OTH', lat: 20.0, lng: 130.0, importMTFY24: 50000, importValueUSDmn: 350, indianShare: 3, growth: 5 },
];

export const lanes = [
  // From JNPT
  { from: 'JNPT', to: 'USA', mode: 'Sea', distanceNM: 9800, transitDays: 28, fobUSDperKg: 6.50, freightUSDperKg: 0.85, peakSeasonMonths: 'Sep-Mar' },
  { from: 'JNPT', to: 'EU', mode: 'Sea', distanceNM: 6400, transitDays: 22, fobUSDperKg: 7.20, freightUSDperKg: 0.75, peakSeasonMonths: 'Mar-May, Sep-Nov' },
  { from: 'JNPT', to: 'GCC', mode: 'Sea', distanceNM: 1800, transitDays: 8, fobUSDperKg: 6.80, freightUSDperKg: 0.40, peakSeasonMonths: 'Feb-Apr (Ramadan)' },
  { from: 'JNPT', to: 'UK', mode: 'Sea', distanceNM: 6800, transitDays: 23, fobUSDperKg: 7.80, freightUSDperKg: 0.78, peakSeasonMonths: 'Year-round' },
  // From Visakhapatnam
  { from: 'Visakhapatnam', to: 'USA', mode: 'Sea', distanceNM: 11200, transitDays: 32, fobUSDperKg: 6.30, freightUSDperKg: 0.90, peakSeasonMonths: 'Sep-Mar' },
  { from: 'Visakhapatnam', to: 'China', mode: 'Sea', distanceNM: 4200, transitDays: 14, fobUSDperKg: 5.80, freightUSDperKg: 0.60, peakSeasonMonths: 'Year-round' },
  { from: 'Visakhapatnam', to: 'Japan', mode: 'Sea', distanceNM: 5600, transitDays: 18, fobUSDperKg: 8.50, freightUSDperKg: 0.70, peakSeasonMonths: 'Year-round' },
  { from: 'Visakhapatnam', to: 'Vietnam', mode: 'Sea', distanceNM: 3200, transitDays: 11, fobUSDperKg: 5.20, freightUSDperKg: 0.50, peakSeasonMonths: 'Year-round' },
  // From Chennai
  { from: 'Chennai', to: 'SEA', mode: 'Sea', distanceNM: 2800, transitDays: 10, fobUSDperKg: 5.40, freightUSDperKg: 0.45, peakSeasonMonths: 'Year-round' },
  { from: 'Chennai', to: 'Japan', mode: 'Sea', distanceNM: 5200, transitDays: 17, fobUSDperKg: 8.20, freightUSDperKg: 0.65, peakSeasonMonths: 'Year-round' },
  // Air lanes
  { from: 'Mumbai CSMIA', to: 'HK', mode: 'Air', distanceNM: 4000, transitDays: 1, fobUSDperKg: 28, freightUSDperKg: 5.0, peakSeasonMonths: 'Year-round live' },
  { from: 'Mumbai CSMIA', to: 'SG', mode: 'Air', distanceNM: 3800, transitDays: 1, fobUSDperKg: 24, freightUSDperKg: 4.8, peakSeasonMonths: 'Year-round live' },
  { from: 'Mumbai CSMIA', to: 'Tokyo', mode: 'Air', distanceNM: 5800, transitDays: 1, fobUSDperKg: 18, freightUSDperKg: 6.2, peakSeasonMonths: 'Year-round MSC tuna' },
  { from: 'Cochin', to: 'Tokyo', mode: 'Air', distanceNM: 6000, transitDays: 1, fobUSDperKg: 22, freightUSDperKg: 6.5, peakSeasonMonths: 'Year-round Lakshadweep tuna' },
  { from: 'Kolkata', to: 'HK', mode: 'Air', distanceNM: 2800, transitDays: 1, fobUSDperKg: 16.5, freightUSDperKg: 4.5, peakSeasonMonths: 'Year-round mud crab' },
];

export const competitorPrimaryLanes = [
  { competitor: 'Avanti', from: 'Visakhapatnam', to: 'USA', annualMT: 120000, fobUSDperKg: 6.40 },
  { competitor: 'Apex', from: 'Kakinada', to: 'USA', annualMT: 35000, fobUSDperKg: 7.80 },
  { competitor: 'Nekkanti', from: 'Visakhapatnam', to: 'USA', annualMT: 28000, fobUSDperKg: 7.20 },
  { competitor: 'Devi', from: 'Visakhapatnam+Paradip', to: 'USA+EU+Japan', annualMT: 45000, fobUSDperKg: 7.50 },
  { competitor: 'IFB Agro', from: 'JNPT', to: 'EU+UK', annualMT: 12000, fobUSDperKg: 8.20 },
  { competitor: 'Gadre', from: 'JNPT+Mundra', to: 'Japan+Korea+EU (surimi)', annualMT: 18000, fobUSDperKg: 4.50 },
  { competitor: 'Coastal Corp', from: 'JNPT+Cochin', to: 'Japan+GCC', annualMT: 9500, fobUSDperKg: 7.80 },
  { competitor: 'Falcon', from: 'Paradip', to: 'Japan+SEA', annualMT: 8500, fobUSDperKg: 7.40 },
  { competitor: 'Konkan Seafoods (Us Y3)', from: 'JNPT+CSMIA+Cochin', to: 'HK+SG+JP+Spain+China', annualMT: 2030, fobUSDperKg: 8.30 },
];

export const monthlyExportPattern = {
  jan: 165, feb: 158, mar: 175, apr: 168, may: 152,
  jun: 95, jul: 82, aug: 142, sep: 168, oct: 195, nov: 218, dec: 228,
};

export const shippingLineMarketShare = [
  { line: 'Maersk Line', share: 28, refeerCapacityShare: 35 },
  { line: 'MSC', share: 22, refeerCapacityShare: 24 },
  { line: 'CMA CGM', share: 14, refeerCapacityShare: 18 },
  { line: 'ONE (Ocean Network Express)', share: 9, refeerCapacityShare: 8 },
  { line: 'Hapag-Lloyd', share: 8, refeerCapacityShare: 7 },
  { line: 'Evergreen', share: 6, refeerCapacityShare: 4 },
  { line: 'COSCO', share: 5, refeerCapacityShare: 2 },
  { line: 'Other', share: 8, refeerCapacityShare: 2 },
];

export const refrigeratedAirCarriers = [
  { carrier: 'Emirates SkyCargo', strength: '#1 perishable globally; "Emirates Fresh" tier; LHO certified', useCase: 'Live cargo to HK/SG/JP via DXB' },
  { carrier: 'Qatar Airways Cargo', strength: 'Strong cool-chain; DOH hub; price-competitive', useCase: 'Backup live cargo + frozen perishable' },
  { carrier: 'Lufthansa Cargo', strength: 'Best for EU; FRA hub temperature-control', useCase: 'EU sashimi tuna + premium chilled' },
  { carrier: 'Singapore Airlines Cargo', strength: 'Strong SG presence; "Coolchain"', useCase: 'SG market live + chilled' },
  { carrier: 'Cathay Pacific Cargo', strength: 'HK home; cool-chain HKIA', useCase: 'HK direct (less Indian capacity)' },
  { carrier: 'Air India Cargo', strength: 'Direct India routes; limited live-animal infra', useCase: 'Backup; volume not premium' },
  { carrier: 'Etihad Cargo', strength: 'AUH hub; growing perishable', useCase: 'GCC + onward' },
];
