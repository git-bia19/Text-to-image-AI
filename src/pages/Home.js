import React from 'react';
import Header from '../components/Header';
import BusinessNameInput from '../components/BusinessNameInput';
import '../pages/Home.css';
const Home = () => {
  return (
    <div>
      <Header />
      {/* Content of your home page */}
      <h1>Launch your business in just a few clicks</h1>
      <p>All tools in one place for your business to look professional and unique.</p>
      <BusinessNameInput />
    </div>
  );
};

export default Home;
