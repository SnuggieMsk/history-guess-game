// src/components/Game/YearSlider.js
import React from 'react';
import './YearSlider.css';

function YearSlider({ min, max, value, onChange, disabled }) {
  // Format year with BC/AD
  const formatYear = (year) => {
    if (year <= 0) {
      return `${Math.abs(year)} BC`;
    } else {
      return `${year} AD`;
    }
  };

  return (
    <div className="year-slider-container">
      <h3>What year is this from?</h3>
      <div className="slider-with-value">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          disabled={disabled}
          className="year-slider"
        />
        <div className="year-display">{formatYear(value)}</div>
      </div>
      <div className="slider-labels">
        <span>{formatYear(min)}</span>
        <span>{formatYear(max)}</span>
      </div>
    </div>
  );
}

export default YearSlider;
