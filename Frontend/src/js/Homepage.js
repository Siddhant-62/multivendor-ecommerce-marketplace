import React, { useState, useEffect } from 'react';
import '../css/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "../jsx/Navbar";
import AuthModal from "../AuthModal/AuthModal";
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import Box from '../Cssgrid/Box';

function Homepage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 15000); // 15 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="Homepage">
      <Router>
        <Navbar />
      </Router>
      <ImageCarousel />
          <Box />


      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Homepage;
