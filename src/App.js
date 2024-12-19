import React, { useState, useEffect } from 'react';
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
import TestFirebase from './Components/TestFirebase';
import AllNFTs from './pages/AllNFTs';
import AirdropPopup from './Components/AirdropPopup';

import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebase';

function App() {
  const [showAirdropPopup, setShowAirdropPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('airdropPopupSeen');
    if (!hasSeenPopup) {
      setShowAirdropPopup(true);
    }
  }, []);

  const handleAirdropSignup = async ({ name, email }) => {
    try {
      // Step 1: Query Firestore to check for duplicate email
      const q = query(collection(db, 'airdropQualifiers'), where('email', '==', email)); // Firestore query
      const querySnapshot = await getDocs(q); // Execute the query
  
      // Step 2: Check if the email already exists
      if (!querySnapshot.empty) {
        console.log('Duplicate email found:', email); // Log duplicate email
        alert('This email has already been registered!'); // Alert user
        return; // Stop execution if duplicate is found
      }
  
      // Step 3: Add the new entry if no duplicate is found
      console.log('No duplicate found. Adding the new entry:', { name, email }); // Log new entry
      await addDoc(collection(db, 'airdropQualifiers'), {
        name,
        email,
        createdAt: serverTimestamp(),
      });
  
      // Step 4: Notify user of successful signup
      alert('Thank you for signing up! You are now qualified for the token airdrop!');
    } catch (error) {
      // Handle errors
      console.error('Error saving user to Firestore:', error); // Log error
      alert('There was an error submitting your information. Please try again.');
    } finally {
      // Step 5: Close the popup after submission or error
      setShowAirdropPopup(false);
      localStorage.setItem('airdropPopupSeen', 'true');
    }
  };

  const handlePopupClose = () => {
    setShowAirdropPopup(false);
    localStorage.setItem('airdropPopupSeen', 'true');
  };

  return (
    <Router>
      <Navbar />
      {showAirdropPopup && (
        <AirdropPopup
          onSubmit={handleAirdropSignup}
          onClose={handlePopupClose}
        />
      )}
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
        <Route path="/all-nfts" element={<AllNFTs />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/test-firestore" element={<TestFirebase />} />
      </Routes>
    </Router>
  );
}

export default App;