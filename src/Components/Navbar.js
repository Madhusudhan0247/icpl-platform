import React from 'react';
import logo from '../assets/images/logo.png'; // Adjust the path based on the component's location

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={leftSectionStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
        <h1 style={titleStyle}>ICPL</h1>
      </div>
      <div style={rightSectionStyle}>
        <a href="#freehit" style={linkStyle}>What is FreeHit?</a>
        <a href="#community" style={linkStyle}>Community</a>
        <a href="#faq" style={linkStyle}>FAQ</a>
      </div>
    </nav>
  );
};


// Styles
const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const leftSectionStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoStyle = {
  width: '40px',
  height: '40px',
  marginRight: '10px',
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  margin: 0,
};

const rightSectionStyle = {
  display: 'flex',
  gap: '20px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontSize: '16px',
  fontWeight: '500',
};

export default Navbar;