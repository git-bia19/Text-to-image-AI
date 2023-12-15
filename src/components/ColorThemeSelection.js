import React, { useState } from 'react';
import './ColorThemeSelection.css'; // Make sure to create a corresponding CSS file

const ColorThemeSelection = () => {
  const [color, setColor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected color:', color);
    // Handle the color selection
  };

  return (
    <div className="color-theme-container">
      <h2>What's the primary color you associate with your business?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default ColorThemeSelection;
