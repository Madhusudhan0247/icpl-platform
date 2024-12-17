import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import News from './Components/News';
import Token from './pages/Token';
import NFTs from './pages/NFTs';
import Merchandise from './pages/Merchandise';
import Playground from './pages/Playground';
import HeroSection from './Components/HeroSection';
import Tabs from './Components/Tabs';
import HowToGetFreeHit from './Components/HowToGetFreeHit';
import FAQ from './Components/FAQ';

function App() {
  return (
    <Router>
      {/* Always display Navbar */}
      <Navbar />

      {/* Page Content */}
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Tabs />
            <HowToGetFreeHit />
            <FAQ />
            <Footer />
          </>
        } />
        <Route path="/news" element={<News />} />
        <Route path="/token" element={<Token />} />
        <Route path="/nfts" element={<NFTs />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </Router>
  );
}

export default App;
