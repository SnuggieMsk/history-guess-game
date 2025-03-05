// src/data/historicalData.js

export const dynastiesByPeriod = {
  'global': [
    { name: 'Roman Empire', start: 27, end: 476 },
    { name: 'Byzantine Empire', start: 330, end: 1453 },
    { name: 'Mongol Empire', start: 1206, end: 1368 },
    { name: 'Ottoman Empire', start: 1299, end: 1922 },
    { name: 'Ming Dynasty', start: 1368, end: 1644 },
    { name: 'Qing Dynasty', start: 1644, end: 1912 },
    { name: 'British Empire', start: 1583, end: 1997 },
    { name: 'Habsburg Dynasty', start: 1438, end: 1740 },
    { name: 'Spanish Empire', start: 1492, end: 1976 },
    { name: 'Mughal Empire', start: 1526, end: 1857 },
    { name: 'Dutch Empire', start: 1581, end: 1975 },
    { name: 'Russian Empire', start: 1721, end: 1917 },
    { name: 'Soviet Union', start: 1922, end: 1991 },
    { name: 'United States', start: 1776, end: 2023 }
  ],
  'europe': [
    { name: 'Roman Empire', start: 27, end: 476 },
    { name: 'Byzantine Empire', start: 330, end: 1453 },
    { name: 'Carolingian Empire', start: 800, end: 888 },
    { name: 'Holy Roman Empire', start: 962, end: 1806 },
    { name: 'Venetian Republic', start: 697, end: 1797 },
    { name: 'Habsburg Dynasty', start: 1438, end: 1740 },
    { name: 'Spanish Empire', start: 1492, end: 1976 },
    { name: 'Ottoman Empire', start: 1299, end: 1922 },
    { name: 'British Empire', start: 1583, end: 1997 },
    { name: 'French Empire', start: 1534, end: 1980 },
    { name: 'Russian Empire', start: 1721, end: 1917 },
    { name: 'German Empire', start: 1871, end: 1918 },
    { name: 'Soviet Union', start: 1922, end: 1991 },
    { name: 'European Union', start: 1993, end: 2023 }
  ],
  'asia': [
    { name: 'Han Dynasty', start: -206, end: 220 },
    { name: 'Tang Dynasty', start: 618, end: 907 },
    { name: 'Song Dynasty', start: 960, end: 1279 },
    { name: 'Mongol Empire', start: 1206, end: 1368 },
    { name: 'Yuan Dynasty', start: 1271, end: 1368 },
    { name: 'Ming Dynasty', start: 1368, end: 1644 },
    { name: 'Qing Dynasty', start: 1644, end: 1912 },
    { name: 'Mughal Empire', start: 1526, end: 1857 },
    { name: 'Joseon Dynasty (Korea)', start: 1392, end: 1897 },
    { name: 'Tokugawa Shogunate (Japan)', start: 1603, end: 1868 },
    { name: 'Empire of Japan', start: 1868, end: 1947 },
    { name: 'Republic of China', start: 1912, end: 1949 },
    { name: 'Peoples Republic of China', start: 1949, end: 2023 }
  ],
  'middleEast': [
    { name: 'Achaemenid Empire', start: -550, end: -330 },
    { name: 'Sasanian Empire', start: 224, end: 651 },
    { name: 'Umayyad Caliphate', start: 661, end: 750 },
    { name: 'Abbasid Caliphate', start: 750, end: 1258 },
    { name: 'Fatimid Caliphate', start: 909, end: 1171 },
    { name: 'Seljuk Empire', start: 1037, end: 1194 },
    { name: 'Ayyubid Dynasty', start: 1171, end: 1260 },
    { name: 'Mamluk Sultanate', start: 1250, end: 1517 },
    { name: 'Ottoman Empire', start: 1299, end: 1922 },
    { name: 'Safavid Dynasty', start: 1501, end: 1736 },
    { name: 'Qajar Dynasty', start: 1789, end: 1925 },
    { name: 'Modern Middle Eastern States', start: 1920, end: 2023 }
  ],
  'africa': [
    { name: 'Kingdom of Kush', start: -1070, end: 350 },
    { name: 'Kingdom of Aksum', start: 100, end: 940 },
    { name: 'Fatimid Caliphate', start: 909, end: 1171 },
    { name: 'Almoravid Dynasty', start: 1040, end: 1147 },
    { name: 'Almohad Caliphate', start: 1121, end: 1269 },
    { name: 'Mali Empire', start: 1230, end: 1670 },
    { name: 'Songhai Empire', start: 1464, end: 1591 },
    { name: 'Ethiopian Empire', start: 1270, end: 1974 },
    { name: 'Kingdom of Kongo', start: 1390, end: 1857 },
    { name: 'Benin Empire', start: 1180, end: 1897 },
    { name: 'Ashanti Empire', start: 1670, end: 1902 },
    { name: 'Zulu Kingdom', start: 1816, end: 1897 },
    { name: 'European Colonial Powers', start: 1881, end: 1975 },
    { name: 'Modern African States', start: 1957, end: 2023 }
  ],
  'americas': [
    { name: 'Maya Civilization', start: 2000, end: 1697 },
    { name: 'Teotihuacan', start: 100, end: 550 },
    { name: 'Toltec Empire', start: 900, end: 1150 },
    { name: 'Aztec Empire', start: 1428, end: 1521 },
    { name: 'Inca Empire', start: 1438, end: 1533 },
    { name: 'Spanish Colonial Empire', start: 1492, end: 1898 },
    { name: 'Portuguese Brazil', start: 1500, end: 1822 },
    { name: 'British North America', start: 1607, end: 1783 },
    { name: 'United States', start: 1776, end: 2023 },
    { name: 'First Mexican Empire', start: 1821, end: 1823 },
    { name: 'Empire of Brazil', start: 1822, end: 1889 },
    { name: 'Modern Latin American States', start: 1810, end: 2023 }
  ]
};

/**
 * Returns a list of dynasties/powers active during a specific year and region
 * @param {number} year - The year to check
 * @param {string} region - The region to check (default: 'global')
 * @returns {string[]} Array of dynasty/power names
 */
export function getDynastiesForPeriod(year, region = 'global') {
  // Get dynasties for the specified region or fallback to global
  const regionDynasties = dynastiesByPeriod[region] || dynastiesByPeriod['global'];
  
  // Filter dynasties that were active during the specified year
  const activeDynasties = regionDynasties
    .filter(dynasty => year >= dynasty.start && year <= dynasty.end)
    .map(dynasty => dynasty.name);
  
  // If no dynasties found, return a message
  if (activeDynasties.length === 0) {
    return ['No major powers in database for this period'];
  }
  
  return activeDynasties;
}

/**
 * Get all available regions
 * @returns {string[]} Array of region names
 */
export function getAvailableRegions() {
  return Object.keys(dynastiesByPeriod);
}

/**
 * Returns region names with proper formatting for display
 * @returns {Object} Object with region keys and display names
 */
export function getRegionDisplayNames() {
  return {
    'global': 'Global Overview',
    'europe': 'Europe',
    'asia': 'Asia',
    'middleEast': 'Middle East',
    'africa': 'Africa',
    'americas': 'The Americas'
  };
}
