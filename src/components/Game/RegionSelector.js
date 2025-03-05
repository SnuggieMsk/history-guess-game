// src/components/Game/RegionSelector.js
import React from 'react';
import './RegionSelector.css';

function RegionSelector({ regions, regionNames, selectedRegion, onChange, disabled }) {
  return (
    <div className="region-selector">
      <h3>Select a Region</h3>
      <div className="region-buttons">
        {regions.map(region => (
          <button
            key={region}
            className={`region-button ${selectedRegion === region ? 'active' : ''}`}
            onClick={() => onChange(region)}
            disabled={disabled}
          >
            {regionNames[region]}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RegionSelector;
