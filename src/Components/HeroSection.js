import React from 'react';
import monkeyImage from '../assets/images/hero_token.png'; // Adjust path if needed
import freehitBg from '../assets/images/freehit_bg.png'; // Add your FREEHIT background image here



const HeroSection = () => {
  return (
    <section style={heroSectionStyle}>
      <div style={backgroundImageStyle}></div> {/* Background Image */}
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
  alignItems: 'center',
  position: 'relative', // Position for background layering
  padding: '80px',
  backgroundColor: '#64646C',
  color: '#ffffff',
  overflow: 'hidden',
  backgroundImage: `url(${freehitBg})`, // Set background image
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left bottom',
  backgroundSize: '50%', // Adjust as needed (cover, contain, etc.)
};

const backgroundImageStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundImage: `url(${freehitBg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  width: '100%',
  height: '100%',
  opacity: 0.1, // Light background appearance
  zIndex: 0, // Place behind content
};

const leftContentStyle = {
  flex: 1,
  paddingRight: '30px',
  textAlign: 'left',
  position: 'relative', // Keep content on top
  zIndex: 1, // Ensure content is above background
};

const titleStyle = {
  fontSize: '50px',
  fontWeight: 'bold',
  lineHeight: '1.2',
  textTransform: 'uppercase',
  marginBottom: '50px',
  fontFamily: '"Bungee Shade", sans-serif', 
  color: '#ffffff',
  textAlign: 'left',
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
};

const learnMoreButtonStyle = {
  padding: '16px 20px',
  border: 'none',
  backgroundColor: '#86868C',
  color: '#fff',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'normal',
  width: '200px',
};

const buyButtonStyle = {
  padding: '16px 20px',
  border: 'none',
  backgroundColor: '#D0362E',
  color: '#fff',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'normal',
  width: '200px',
};

const subTextStyle = {
  fontSize: '15px',
  lineHeight: '1.5',
  opacity: '0.9',
  textAlign: 'left',
};

const rightContentStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  zIndex: 1,
};

const imageStyle = {
  width: '100%',
  maxWidth: '500px',
};

export default HeroSection;