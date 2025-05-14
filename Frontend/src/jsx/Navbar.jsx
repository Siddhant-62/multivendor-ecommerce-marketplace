import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import '../AuthModal/AuthModal.css';
// import AuthModal from './AuthModal'; // 👈 Create this next
import AuthModal from '../AuthModal/AuthModal';


const Navbar = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">магазин</Link>

          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <button className="login-btn" onClick={() => setShowAuthModal(true)}>
              Login
            </button>
          </div>
        </div>
      </nav>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
  );
};

export default Navbar;
