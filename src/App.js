import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Tabs from './Components/Tabs';
import HowToGetFreeHit from './Components/HowToGetFreeHit';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer'; // Import Footer
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Token from './pages/Token';
import NFTs from './pages/NFTs';
import Merchandise from './pages/Merchandise';
import Playground from './pages/Playground';

function App() {
  return (
    <Router>
      {/* Always display Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Tabs Section (Moved below Hero Section) */}
      <Tabs />
      
       {/* Add the HowToGetFreeHit Section */}
       <HowToGetFreeHit />

       <FAQ /> {/* Add FAQ Section */}

       <Footer /> {/* Add Footer here */}

      {/* Page Content */}
      <Routes>
        <Route path="/token" element={<Token />} />
        <Route path="/nfts" element={<NFTs />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </Router>
  );
}

export default App;
