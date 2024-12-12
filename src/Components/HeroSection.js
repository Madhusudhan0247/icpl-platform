import React from 'react';
import monkeyImage from '../assets/images/monkey.png'; // Adjust path if needed

const HeroSection = () => {
  return (
    <section style={heroSectionStyle}>
      <div style={leftContentStyle}>
        <h1 style={titleStyle}>THE ULTIMATE FAN TOKEN PLATFORM IS ALMOST HERE</h1>
        <p style={descriptionStyle}>
          ICPL is the ultimate platform for sports fans to earn, play, and own.{' '}
          <span style={{ fontWeight: 'normal' }}>FreeHit</span> is the token
          powering ICPL’s games, NFTs, and merchandise.
        </p>
        <div style={ctaButtonContainerStyle}>
          <button style={learnMoreButtonStyle}>Learn More</button>
          <button style={buyButtonStyle}>Buy FreeHit</button>
        </div>
        <p style={subTextStyle}>
          Buy FreeHit - FHT tokens, explore our NFTs, or jump into the action
          with Sports-themed games. It’s time to bring your sports dreams to
          life.
        </p>
      </div>
      <div style={rightContentStyle}>
        <img src={monkeyImage} alt="Monkey Mascot" style={imageStyle} />
      </div>
    </section>
  );
};

const heroSectionStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'left',
  padding: '80px',
  backgroundColor: '#D0362E',
  color: '#ffffff',
};

const leftContentStyle = {
  flex: 1,
  paddingRight: '30px',
  textAlign: 'left', // Left-align all text
};


const titleStyle = {
  fontSize: '40px',
  fontWeight: 'bold',
  lineHeight: '1.2',
  textTransform: 'uppercase',
  marginBottom: '50px',
  fontFamily: '"Porter Sans Block", sans-serif', // Apply custom font
  color: '#ffffff',
  textAlign: 'left', // Explicitly set to left
};

const descriptionStyle = {
  fontSize: '18px',
  lineHeight: '1.5',
  marginBottom: '40px',
  textAlign: 'left',
};

const ctaButtonContainerStyle = {
  display: 'flex',
  gap: '30px',
  marginBottom: '40px',
  alignItems: 'center',
};

const learnMoreButtonStyle = {
  padding: '16px 20px',
  border: 'none',
  backgroundColor: '#DA625C',
  color: '#fff',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'normal',
  width: '200px'
};

const buyButtonStyle = {
  padding: '16px 20px',
  border: 'none',
  backgroundColor: '#171C2C',
  color: '#fff',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'normal',
  width: '200px'
};

const subTextStyle = {
  fontSize: '15px',
  lineHeight: '1.5',
  opacity: '0.9',
  textAlign: 'left',
  marginBottom: '100px'
};

const rightContentStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageStyle = {
  width: '100%',
  maxWidth: '400px',
};

export default HeroSection;