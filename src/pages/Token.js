import React from 'react';
import monkeyVideo from '../assets/videos/monkey-video.mp4';

const Token = () => {
  return (
    <div style={containerStyle}>
      {/* Left Section: Video */}
      <div style={leftSectionStyle}>
        <div style={videoWrapperStyle}>
          <video
            src={monkeyVideo}
            autoPlay
            loop
            muted
            playsInline
            style={videoStyle}
          />
        </div>
      </div>

      {/* Right Section: Token Details */}
      <div style={rightSectionStyle}>
        <h2 style={headingStyle}>
          Token: FreeHit Coin (FHT) - <span style={highlightStyle}>Coming soon...</span>
        </h2>
        <p style={textStyle}>Current Price: $0.0000</p>
        <p style={textStyle}>Market Cap: $000,000</p>
        <p style={textStyle}>Total Transactions: 00,000</p>
        <p style={textStyle}>Circulating Supply: 000,000,000 FHT</p>
        <div style={buttonContainerStyle}>
          <button style={buyButtonStyle}>Buy FreeHit - FHT</button>
          <button style={viewButtonStyle}>View on Blockchain</button>
        </div>
        <p style={rewardsStyle}>Rewards Distributed: 0,000,000 FHT.</p>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '40px',
  backgroundColor: '#171C2C',
  color: '#fff',
};

const leftSectionStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const videoWrapperStyle = {
  borderRadius: '50%',
  overflow: 'hidden',
  width: '500px',
  height: '500px',
};

const videoStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const rightSectionStyle = {
  flex: 1,
  paddingLeft: '20px',
  textAlign: 'left', // Align text to the left
};

const headingStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '36px',
  textAlign: 'left',
};

const highlightStyle = {
  color: '#DA625C',
};

const textStyle = {
  marginBottom: '24px',
  fontSize: '18px',
  textAlign: 'left', // Fixed typo
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '20px',
  marginTop: '20px',
};

const buttonStyle = {
  padding: '15px 30px', // Matches Hero Section button padding
  fontSize: '15px', // Matches Hero Section font size
  backgroundColor: '#DA625C',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'normal',
  transition: 'background-color 0.3s ease',
};

const buyButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#D0362E',
};

const viewButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#86868C',
};

const rewardsStyle = {
  marginTop: '20px',
  fontSize: '16px',
  opacity: '0.8',
  textAlign: 'left', // Fixed typo
};

export default Token;