import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../jsx/Navbar";


function Homepage() {
  return (
    <div className="Homepage">
         <Router>
      <Navbar />
      
    </Router>
     
    </div>
  );
}

export default Homepage;
