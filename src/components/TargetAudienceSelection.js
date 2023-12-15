
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TargetAudienceSelection.css';

const TargetAudienceSelection = () => {
  const [targetAudience, setTargetAudience] = useState('');
  const navigate = useNavigate();

  const handleNextClick = () => {
    console.log('Selected target audience:', targetAudience);
    navigate('/color-theme-selection');
  };

  return (
    <div className="audience-selection-container">
      <h2>Who is your target audience?</h2>
      <div>
        <label>
          <input
            type="radio"
            name="audience"
            value="Teens"
            checked={targetAudience === "Teens"}
            onChange={(e) => setTargetAudience(e.target.value)}
          />
          Teens
        </label>
        <label>
          <input
            type="radio"
            value="Professionals"
            checked={targetAudience === "Professionals"}
            onChange={(e) => setTargetAudience(e.target.value)}
          />
          Professionals
        </label>
        <label>
          <input
            type="radio"
            value="Kids"
            checked={targetAudience === "Kids"}
            onChange={(e) => setTargetAudience(e.target.value)}
          />
          Kids
        </label>
        <label>
          <input
            type="radio"
            value="Everyone"
            checked={targetAudience === "Everyone"}
            onChange={(e) => setTargetAudience(e.target.value)}
          />
          Everyone
        </label>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default TargetAudienceSelection;
