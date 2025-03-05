// src/components/Game/CountrySelector.js
import React from 'react';
import './CountrySelector.css';

function CountrySelector({ countries, selectedCountry, onChange, disabled }) {
  // Get top countries to show as buttons, rest will be in dropdown
  const popularCountries = ['us', 'uk', 'jp', 'kr', 'in'];
  
  return (
    <div className="country-selector">
      <h3>Country of Origin</h3>
      <div className="country-buttons">
        {popularCountries.map(code => (
          <button
            key={code}
            className={`country-button ${selectedCountry === code ? 'active' : ''}`}
            onClick={() => onChange(code)}
            disabled={disabled}
          >
            {countries[code]}
          </button>
        ))}
        
        <select 
          value={selectedCountry}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="country-select"
        >
          <option value="" disabled>-- More Countries --</option>
          {Object.entries(countries)
            .filter(([code]) => !popularCountries.includes(code))
            .map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))
          }
        </select>
      </div>
    </div>
  );
}

export default CountrySelector;
