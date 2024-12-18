// Updated Tabs.js
import React, { useState } from 'react';
import Token from '../pages/Token';
import NFTs from '../pages/NFTs';
import Merchandise from '../pages/Merchandise';
import Playground from '../pages/Playground';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Token');
  const [hoveredTab, setHoveredTab] = useState(null);

  const tabs = [
    { name: 'Token', component: <Token /> },
    { name: "NFT's", component: <NFTs /> },
    { name: 'Merchandise', component: <Merchandise /> },
    { name: 'Playground', component: <Playground /> },
  ];

  const activeComponent = tabs.find((tab) => tab.name === activeTab)?.component;

  return (
    <div style={mainContainerStyle}>
      {/* Tabs */}
      <div style={tabsContainerStyle}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.name;
          const isHovered = hoveredTab === tab.name;

          return (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              onMouseEnter={() => setHoveredTab(tab.name)}
              onMouseLeave={() => setHoveredTab(null)}
              style={
                isActive
                  ? activeTabStyle
                  : isHovered
                  ? { ...tabStyle, backgroundColor: '#767679' }
                  : tabStyle
              }
            >
              {tab.name}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content */}
      <div style={contentContainerStyle}>
        {activeComponent}
      </div>
    </div>
  );
};

// Styles
const mainContainerStyle = {
  minHeight: '100vh', // Full viewport height
  backgroundColor: '#171C2C', // Fill the entire background
  margin: '0', // Remove margin
  padding: '0',
  display: 'flex',
  flexDirection: 'column',
};

const tabsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#86868C',
};

const tabStyle = {
  flex: 1,
  padding: '24px 20px',
  backgroundColor: '#86868C',
  color: '#000',
  border: 'none',
  textAlign: 'center',
  fontSize: '16px',
  cursor: 'pointer',
  outline: 'none',
  transition: 'background-color 0.3s ease',
};

const activeTabStyle = {
  ...tabStyle,
  backgroundColor: '#171C2C',
  color: '#fff',
};

const contentContainerStyle = {
  flex: 1, // Fills remaining space
  padding: '40px',
  backgroundColor: '#171C2C', // Same as the background
  color: '#ffffff', // Ensure text is visible
};

export default Tabs;