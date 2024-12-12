import React from 'react';

const HowToGetFreeHit = () => {
  const items = [
    {
      title: 'Buy on DEX',
      description: 'Buy FreeHit on Raydium by creating an account and start earning',
      link: 'https://raydium.io/swap/',
      linkText: 'Raydium',
    },
    {
      title: 'Earn in Games',
      description: 'Play games or complete challenges to earn FreeHit tokens',
    },
    {
      title: 'Join Airdrops',
      description: 'Stay Connected to get updates on upcoming or ongoing airdrop campaigns.',
    },
    {
      title: 'Referrals',
      description: 'Bring your friends and get rewarded',
    },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>
        <span style={lineStyle}>—</span> How to Get FreeHit <span style={lineStyle}>—</span>
      </h2>
      <div style={gridContainerStyle}>
        {items.map((item, index) => (
          <div key={index} style={cardStyle}>
            <h3 style={cardTitleStyle}>{item.title}</h3>
            <p style={cardDescriptionStyle}>
              {item.description}{' '}
              {item.link && (
                <a href={item.link} style={linkStyle} target="_blank" rel="noopener noreferrer">
                  {item.linkText}
                </a>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  backgroundColor: '#ffffff',
  padding: '60px 20px',
  textAlign: 'center',
};

const headingStyle = {
  fontSize: '44px',
  fontWeight: 'bold',
  marginBottom: '40px',
  fontFamily: 'inherit',
};

const lineStyle = {
  color: '#DA625C',
  fontSize: '36px',
  fontWeight: 'bold',
};

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Automatically adjust columns
  gap: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
};

const cardStyle = {
  backgroundColor: '#f9f9f9',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
};

const cardTitleStyle = {
  fontSize: '30px',
  fontWeight: 'bold',
  marginBottom: '10px',
  fontFamily: 'inherit',
};

const cardDescriptionStyle = {
  fontSize: '16px',
  color: '#333',
  fontFamily: 'inherit',
};

const linkStyle = {
  color: '#DA625C',
  textDecoration: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default HowToGetFreeHit;