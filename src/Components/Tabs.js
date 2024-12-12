import React, { useState } from 'react';
import Token from '../pages/Token'; // Token Component
import NFTs from '../pages/NFTs'; // Placeholder for NFT component
import Merchandise from '../pages/Merchandise'; // Placeholder for Merchandise component
import Playground from '../pages/Playground'; // Placeholder for Playground component

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Token'); // Default to Token tab
  const [hoveredTab, setHoveredTab] = useState(null); // Track hovered tab

  // Map tabs to their corresponding components
  const tabs = [
    { name: 'Token', component: <Token /> },
    { name: 'NFT\'s', component: <NFTs /> },
    { name: 'Merchandise', component: <Merchandise /> },
    { name: 'Playground', component: <Playground /> },
  ];

  // Find the active tab's component
  const activeComponent = tabs.find((tab) => tab.name === activeTab)?.component;

  return (
    <div>
      {/* Tabs */}
      <div style={tabsContainerStyle}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.name;
          const isHovered = hoveredTab === tab.name;

          return (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)} // Set active tab
              onMouseEnter={() => setHoveredTab(tab.name)} // Set hovered tab
              onMouseLeave={() => setHoveredTab(null)} // Clear hovered tab
              style={
                isActive
                  ? activeTabStyle
                  : isHovered
                  ? { ...tabStyle, backgroundColor: '#DA625C' } // Hover effect
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
const tabsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#D0362E',
  margin: '0px 80px',
};

const tabStyle = {
  flex: 1,
  padding: '24px 20px',
  backgroundColor: '#D0362E', // Inactive tab background
  color: '#000', // Text color for inactive tabs
  border: 'none',
  borderBottom: 'none',
  textAlign: 'center',
  fontSize: '16px',
  cursor: 'pointer',
  outline: 'none',
  transition: 'background-color 0.3s ease',
};

const activeTabStyle = {
  ...tabStyle,
  backgroundColor: '#171C2C', // Active tab background
  color: '#fff', // Text color for active tabs
};

const contentContainerStyle = {
  padding: '40px',
  backgroundColor: '#ffffff',
};

export default Tabs;