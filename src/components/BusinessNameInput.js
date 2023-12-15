import React, { useState } from 'react';
import '../components/BusinessNameInput.css';
import { useNavigate } from 'react-router-dom';

const BusinessNameInput = () => {
  const [businessName, setBusinessName] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setBusinessName(event.target.value);
  };

  const handleSubmit = () => {
    sessionStorage.setItem('businessName', businessName); // Save to sessionStorage
    navigate('/describe-business'); // Navigate to the "Describe Your Business" page
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your business name"
        value={businessName}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Get Started</button>
    </div>
  );
};

export default BusinessNameInput;
