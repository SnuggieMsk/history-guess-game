// src/components/Game/YearMonthSelector.js
import React from 'react';
import './YearMonthSelector.css';

function YearMonthSelector({ 
  minYear, 
  maxYear, 
  selectedYear, 
  selectedMonth, 
  onYearChange, 
  onMonthChange, 
  months, 
  disabled 
}) {
  return (
    <div className="year-month-selector">
      <h3>When did this meme become popular?</h3>
      
      <div className="year-selector">
        <label>Year:</label>
        <div className="slider-with-value">
          <input
            type="range"
            min={minYear}
            max={maxYear}
            value={selectedYear}
            onChange={(e) => onYearChange(parseInt(e.target.value))}
            disabled={disabled}
            className="year-slider"
          />
          <div className="year-display">{selectedYear}</div>
        </div>
        <div className="slider-labels">
          <span>{minYear}</span>
          <span>{maxYear}</span>
        </div>
      </div>
      
      <div className="month-selector">
        <label>Month:</label>
        <select
          value={selectedMonth}
          onChange={(e) => onMonthChange(parseInt(e.target.value))}
          disabled={disabled}
          className="month-select"
        >
          {Object.entries(months).map(([value, name]) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default YearMonthSelector;


