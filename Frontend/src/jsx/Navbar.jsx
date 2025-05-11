import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">MyApp</Link>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </div>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
