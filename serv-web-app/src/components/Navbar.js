import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaTools, FaBars, FaUser, FaTimes, FaInfoCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = () => {
      const loggedInUser = localStorage.getItem('user');
      setUser(loggedInUser ? JSON.parse(loggedInUser) : null);
    };

    fetchUser(); // Initial fetch

    // Listen for storage change events
    window.addEventListener("storage", fetchUser);

    return () => window.removeEventListener("storage", fetchUser);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("storage")); // Force navbar update
    navigate("/");
  };

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
          <a href="/aboutp" onClick={closeMenu}>
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

      <div className="cta-button">
        {user ? (
          <>
            <span className="user-greeting">Hi, {user.fullName.split(" ")[0]}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/signup" onClick={closeMenu}>
            <span>Get Started</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;