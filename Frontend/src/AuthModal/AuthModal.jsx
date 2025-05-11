import React, { useState } from 'react';
import '../AuthModal/AuthModal';
import { FaTimes } from 'react-icons/fa';

const AuthModal = ({ onClose }) => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSwitch = () => setIsSignup(!isSignup);

  return (
    <div className="auth-backdrop">
      <div className="auth-modal">
        <button className="close-btn" onClick={onClose}><FaTimes /></button>
        <h2>{isSignup ? 'Create Account' : 'Sign In'}</h2>

        <form className="auth-form">
          {isSignup && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isSignup ? 'Sign Up' : 'Sign In'}</button>
        </form>

        <p onClick={handleSwitch} className="switch-text">
          {isSignup ? 'Already have an account? Sign In' : 'New user? Create an account'}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
