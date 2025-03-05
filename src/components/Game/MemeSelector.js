// src/components/Game/MemeSelector.js
import React from 'react';
import './MemeSelector.css';

function MemeSelector({ memes, selectedMeme, onChange, disabled }) {
  return (
    <div className="meme-selector">
      <h3>Which meme is this?</h3>
      <select 
        value={selectedMeme} 
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="meme-select"
      >
        <option value="">-- Select the meme --</option>
        {memes.map(meme => (
          <option key={meme} value={meme}>
            {meme}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MemeSelector;
