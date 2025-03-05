// src/data/memeData.js

/**
 * Provides a list of countries for meme origin selection
 * @returns {Object} Object with country codes and display names
 */
export function getCountryOptions() {
  return {
    'us': 'United States',
    'uk': 'United Kingdom',
    'jp': 'Japan',
    'kr': 'South Korea',
    'ru': 'Russia',
    'br': 'Brazil',
    'in': 'India', 
    'au': 'Australia',
    'ca': 'Canada',
    'de': 'Germany',
    'fr': 'France',
    'es': 'Spain',
    'it': 'Italy',
    'cn': 'China',
    'mx': 'Mexico',
    'za': 'South Africa',
    'se': 'Sweden',
    'other': 'Other Countries'
  };
}

/**
 * Get available months for selection
 * @returns {Object} Object with month numbers and names
 */
export function getMonthOptions() {
  return {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  };
}

/**
 * Sample list of famous memes by year and platform
 * This would be expanded with more entries
 */
export const popularMemesByYear = {
  // Early 2000s
  2000: ['Dancing Baby', 'Hampster Dance', 'All Your Base Are Belong To Us'],
  2001: ['Numa Numa Guy', 'Badger Badger Badger'],
  2002: ['Star Wars Kid', 'Salad Fingers'],
  2003: ['Strongbad Email', 'Banana Phone'],
  2004: ['Numa Numa', 'Leeroy Jenkins'],
  2005: ['Chuck Norris Facts', 'Evolution of Dance'],
  2006: ['Chocolate Rain', 'Leave Britney Alone'],
  2007: ['Rickroll', 'I Can Has Cheezburger', 'Dont Tase Me Bro'],
  2008: ['Keyboard Cat', 'Charlie Bit My Finger'],
  2009: ['David After Dentist', 'Nyan Cat', 'Kanye Interrupts Taylor'],
  
  // 2010s
  2010: ['Double Rainbow', 'Bed Intruder', 'Hide Yo Kids'],
  2011: ['Friday (Rebecca Black)', 'Planking', 'Occupy Wall Street'],
  2012: ['Gangnam Style', 'Overly Attached Girlfriend', 'Ermahgerd'],
  2013: ['Harlem Shake', 'Doge', 'What Does The Fox Say'],
  2014: ['Ice Bucket Challenge', 'But Thats None Of My Business', 'Just Do It'],
  2015: ['Left Shark', 'Why You Always Lying', 'Netflix and Chill'],
  2016: ['Damn Daniel', 'Harambe', 'Mannequin Challenge'],
  2017: ['Salt Bae', 'Distracted Boyfriend', 'Cash Me Outside'],
  2018: ['Tide Pods', 'Yanny vs. Laurel', 'Fortnite Dances'],
  2019: ['Area 51 Raid', 'OK Boomer', 'Baby Yoda'],
  
  // 2020s
  2020: ['Bernie Mittens', 'Tiger King', 'Nature is Healing'],
  2021: ['Bernie Chair', 'Ever Given Ship', 'Red Flag', 'Squid Game'],
  2022: ['Wordle', 'Will Smith Slap', 'Corn Kid', 'Letterboxd Guy'],
  2023: ['Barbenheimer', 'Roman Empire', 'Everything Woke', 'Talking Mop'],
  2024: ['Grimace Shake', 'AI-Generated Everything', 'Leap Year']
};

/**
 * Get likely memes based on selected year and month
 * In a real app, this would be more precise with month data
 * @param {number} year - The selected year
 * @param {number} month - The selected month (1-12)
 * @returns {string[]} Array of meme names likely from that period
 */
export function getMemeOptionsForPeriod(year, month = null) {
  // Get memes from selected year
  const memesFromYear = popularMemesByYear[year] || [];
  
  // Get memes from adjacent years for more options
  const previousYearMemes = popularMemesByYear[year - 1] || [];
  const nextYearMemes = popularMemesByYear[year + 1] || [];
  
  // Combine memes, prioritizing the selected year
  let memeOptions = [
    ...memesFromYear,
    ...previousYearMemes.slice(0, 2), // Add a couple from previous year
    ...nextYearMemes.slice(0, 2)      // Add a couple from next year
  ];
  
  // Remove duplicates
  memeOptions = [...new Set(memeOptions)];
  
  // If no memes found, return a default message
  if (memeOptions.length === 0) {
    return ['No memes found for this period'];
  }
  
  return memeOptions;
}
