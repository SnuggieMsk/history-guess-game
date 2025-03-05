// src/components/Game/DynastySelector.js
import React from 'react';
import './DynastySelector.css';

function DynastySelector({ dynasties, selectedDynasty, onChange, disabled }) {
  return (
    <div className="dynasty-selector">
      <h3>Which power/dynasty was ruling?</h3>
      <select 
        value={selectedDynasty} 
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="dynasty-select"
      >
        <option value="">-- Select a dynasty/power --</option>
        {dynasties.map(dynasty => (
          <option key={dynasty} value={dynasty}>
            {dynasty}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DynastySelector;
