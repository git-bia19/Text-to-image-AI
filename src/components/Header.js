import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Header.css';
import image from '../images/logo.jpg';

const Header = () => {
  return (
    <header>
    <img src={image} alt="Logo" style={{ float: 'left' }} /> 
      <nav>
        <Link to="/">Home</Link>
        <Link to="/our-tool">Our Tool</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
