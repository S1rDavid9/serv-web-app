// import React from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">Serv</div>
//       <ul className="nav-links">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#services">Services</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { FaHome, FaTools } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Serv</div>
      <ul className="nav-links">
      <li>
          <a href="#home">
            <FaHome className="icon" /> Home
          </a>
        </li>
        <li>
          <a href="#services">
            <FaTools className="icon" /> Services
          </a>
        </li>
      </ul>
      <button className="cta-button">Get Started</button>
    </nav>
  );
};

export default Navbar;


