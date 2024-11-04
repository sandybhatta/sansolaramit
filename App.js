import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';
import SolarSavingCalculator from './pages/SolarSavingCalculator';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
 // Import the Popup component

import './App.css';
import mainLogo from "./cropped-logo-1.png";
import Popup from './pages/Popup';

function App() {
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const [showPopup, setShowPopup] = useState(false); // State to control the popup

  useEffect(() => {
    // Simulate loading time (e.g., waiting for API or assets)
    const timer = setTimeout(() => {
      setIsLoading(false); // After 2 seconds, hide the preloader
    }, 1000); // Adjust time based on your use case (or use real data fetching logic)

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  useEffect(() => {
    // Show the popup after 20 seconds
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 20000); // 20 seconds

    return () => clearTimeout(popupTimer); // Cleanup on unmount
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <img src={mainLogo} className='mainLogo' alt="Main Logo"/>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/solar-saving-calculator" element={<SolarSavingCalculator />} />
          </Routes>

          {showPopup && <Popup onClose={() => setShowPopup(false)} />} {/* Show Popup */}
        </>
      )}
    </>
  );
}

export default App;