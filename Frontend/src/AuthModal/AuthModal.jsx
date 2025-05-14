import React, { useState } from 'react';
import './AuthModal.css';
import { FaTimes } from 'react-icons/fa';

const AuthModal = ({ onClose }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isVendor: false,
    gstNumber: '',
    securityQuestion: '',
    securityAnswer: ''
  });

  const [errors, setErrors] = useState({});

  const handleSwitch = () => {
    setIsSignup(!isSignup);
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'radio' ? value === 'true' : value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (isSignup) {
      if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters.';
      }
      if ((formData.isVendor === true || formData.isVendor === 'true') && formData.gstNumber.trim() === '') {
  newErrors.gstNumber = 'GST Number is required for vendors.';
}


      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match.';
      }

      if (formData.isVendor === true || formData.isVendor === 'true') {
        if (!formData.securityQuestion) {
          newErrors.securityQuestion = 'Please select a security question.';
        }
        if (!formData.securityAnswer) {
          newErrors.securityAnswer = 'Please provide an answer.';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log('Form Submitted:', formData);
    // TODO: Connect to backend or store logic
  };

  return (
    <div className="auth-backdrop">
      <div className="auth-modal">
        <button className="close-btn" onClick={onClose}><FaTimes /></button>
        <h2>{isSignup ? 'Create Account' : 'Sign In'}</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          {isSignup ? (
            <>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <p className="error">{errors.password}</p>}

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

              {/* Vendor Option */}
              {/* Vendor Option with GST input shown only if "Yes" is selected */}
<div className="vendor-option">
  <label>Are you a Vendor?</label>
  <div>
    <label>
      <input
        type="radio"
        name="isVendor"
        value="true"
        checked={formData.isVendor === true || formData.isVendor === 'true'}
        onChange={handleChange}
      />
      Yes
    </label>
    <label>
      <input
        type="radio"
        name="isVendor"
        value="false"
        checked={formData.isVendor === false || formData.isVendor === 'false'}
        onChange={handleChange}
      />
      No
    </label>
  </div>
</div>

{/* Show GST Number input only if Vendor is true */}
{(formData.isVendor === true || formData.isVendor === 'true') && (
  <input
    type="text"
    name="gstNumber"
    placeholder="GST Number"
    value={formData.gstNumber}
    onChange={handleChange}
    required
  />
)}

{/* Always Show Security Question + Answer */}
<select
  name="securityQuestion"
  value={formData.securityQuestion}
  onChange={handleChange}
  required
>
  <option value="">Select Security Question</option>
  <option value="pet">What is your pet's name?</option>
  <option value="school">What is your school name?</option>
  <option value="city">In which city were you born?</option>
</select>
{errors.securityQuestion && <p className="error">{errors.securityQuestion}</p>}

<input
  type="text"
  name="securityAnswer"
  placeholder="Your Answer"
  value={formData.securityAnswer}
  onChange={handleChange}
  required
/>
{errors.securityAnswer && <p className="error">{errors.securityAnswer}</p>}

              
                    

              
             

              <button type="submit">Sign Up</button>
            </>
          ) : (
            <>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button type="submit">Sign In</button>
            </>
          )}
        </form>

        <p onClick={handleSwitch} className="switch-text">
          {isSignup ? 'Already have an account? Sign In' : 'New user? Create an account'}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
