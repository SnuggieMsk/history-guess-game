// 12-month export-destination calendar.
// Cell value 0-3: 0 = off-season / not shipping, 1 = light, 2 = normal, 3 = peak.
// Built from buyer purchasing rhythms (Lent, Ramadan, Chinese New Year, US holidays,
// EU summer, Japan O-Bon/year-end), India catch seasons, and tariff windows.

export const months = ['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'];

export const calendarHeatmap = [
  // Vannamei is sold ~constantly; peaks tied to retailer promo cycles.
  { product: 'Vannamei (USA retail)',         data: [3,3,2,2,2,2,3,3,3,2,2,2], notes: 'US summer grilling + Thanksgiving + Lent' },
  { product: 'Vannamei (China)',              data: [2,2,1,1,2,3,3,3,2,3,3,2], notes: 'Mid-Autumn, CNY pre-buy Nov-Jan' },
  { product: 'Vannamei (EU retail PL)',       data: [2,2,3,3,2,2,2,2,2,2,3,3], notes: 'EU summer BBQ + Lent' },
  { product: 'Black Tiger HOSO (Japan)',      data: [1,1,1,1,2,3,3,3,2,2,1,1], notes: 'Japan year-end + sushi-grade premium' },
  { product: 'Silver Pomfret (UAE/GCC)',      data: [0,0,0,0,0,2,3,3,3,3,3,2], notes: 'Closed season Jun-Aug; peak winter fish-fry season' },
  { product: 'Silver Pomfret (Singapore/HK)', data: [0,0,0,0,0,2,3,3,3,3,3,2], notes: 'Konkan-origin premium' },
  { product: 'Squid + Cuttlefish (EU)',       data: [1,1,1,0,1,2,3,3,3,3,2,1], notes: 'Italy/Spain HoReCa Sep-Mar' },
  { product: 'Octopus (Spain/Italy)',         data: [1,1,1,1,1,2,3,3,3,3,2,2], notes: 'Year-end + Lent' },
  { product: 'Ribbonfish (China)',            data: [1,1,1,1,1,2,3,3,2,2,2,1], notes: 'Bulk shipments Oct-Feb' },
  { product: 'Mackerel (SEA + Africa)',       data: [1,1,1,1,1,2,3,3,2,2,2,1], notes: 'Canning factory feed' },
  { product: 'Live Lobster (HK/China)',       data: [1,1,1,1,1,2,3,3,3,3,2,2], notes: 'CNY blow-out Jan-Feb' },
  { product: 'Live Mud Crab (SG/MY)',         data: [2,2,1,1,2,2,3,3,3,3,2,2], notes: 'Mid-Autumn + CNY' },
  { product: 'Yellowfin Tuna (Japan/USA)',    data: [1,1,1,1,1,2,2,2,3,3,3,3], notes: 'Lakshadweep season Nov-May' },
  { product: 'Cooked PD shrimp (USA Costco)', data: [3,3,2,2,2,3,3,3,3,2,2,3], notes: 'Continuous; spike pre-Thanksgiving + Easter' },
];

// Religious/cultural buying spikes
export const buyingSpikes = [
  { window: 'Jan-Feb',     event: 'Chinese New Year',      markets: ['China','HK','SG','MY','Vietnam'], surchargePct: '15-25', species: ['Live lobster','Mud crab','Vannamei','Tiger HOSO'] },
  { window: 'Feb-Apr',     event: 'Lent (Catholic)',       markets: ['USA','EU','LATAM'], surchargePct: '8-15', species: ['Vannamei cooked','Cod alternates','Tilapia'] },
  { window: 'Mar-Apr',     event: 'Ramadan + Eid',         markets: ['GCC','MENA','SEA Muslim'], surchargePct: '10-20', species: ['Pomfret','Vannamei','Mackerel'] },
  { window: 'May-Aug',     event: 'EU/USA summer grilling', markets: ['EU','USA'], surchargePct: '5-12', species: ['Shrimp skewers','Squid rings','Cooked PD'] },
  { window: 'Aug-Sep',     event: 'Mid-Autumn / Korean Chuseok', markets: ['China','HK','Korea'], surchargePct: '8-15', species: ['Live shellfish','Premium frozen'] },
  { window: 'Nov-Dec',     event: 'US Thanksgiving + Christmas', markets: ['USA','EU','UK'], surchargePct: '12-22', species: ['Cooked shrimp ring','Premium retail'] },
  { window: 'Dec-Jan',     event: 'Japan year-end Osechi',  markets: ['Japan'], surchargePct: '15-25', species: ['Black tiger HOSO','Sashimi tuna'] },
];
