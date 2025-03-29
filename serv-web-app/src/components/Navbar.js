import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTools, FaBars, FaUser, FaTimes, FaInfoCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">Serv</div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            <FaHome className="icon" /> Home
          </Link>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            <FaInfoCircle className="icon" /> About
          </a>
        </li>
        <li>
          <Link to="/services" onClick={closeMenu}>
            <FaTools className="icon" /> Services
          </Link>
        </li>
        <li>
          <Link to="/admin" onClick={closeMenu}>
            <FaUser className="icon" /> Admin
          </Link>
        </li>
      </ul>

      <button className='cta-button'>
        <Link to="/signup">
        <a href="/signup" onClick={closeMenu}><span>Get Started</span></a> 
        </Link>
      </button>
    </nav>
  );
};

export default Navbar;