import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      © ICPL 2024
    </footer>
  );
};

// Styles
const footerStyle = {
  backgroundColor: '#000', // Black background
  color: '#fff', // White text color
  textAlign: 'center', // Center align the text
  padding: '30px 0', // Add some padding
  fontSize: '14px', // Adjust font size
  position: 'relative', // Ensure footer stays in place
  bottom: 0,
  width: '100%',
  height: '40px',

};

export default Footer;