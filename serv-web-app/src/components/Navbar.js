import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTools, FaBars, FaTimes, FaInfoCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">Serv</div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/">
            <FaHome className="icon" /> Home
          </Link>
        </li>
        <li>
          <a href="#about">
            <FaInfoCircle className="icon" /> About
          </a>
        </li>
        <li>
          <Link to="/services">
            <FaTools className="icon" /> Services
          </Link>
        </li>
      </ul>

      <button className='cta-button'>
        <a href="#cta-section"><span>Get Started</span></a> 
      </button>
    </nav>
  );
};

export default Navbar;