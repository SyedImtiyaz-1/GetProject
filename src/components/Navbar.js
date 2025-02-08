import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaProjectDiagram, FaUser, FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <FaProjectDiagram className="nav-icon" />
        <h1>Get Project</h1>
      </div>
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <FaBars />
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to='/' className="nav-link" onClick={closeMenu}>Home</Link></li>
        <li><Link to='/projects' className="nav-link" onClick={closeMenu}>Projects</Link></li>
        <li><Link to='/customized' className="nav-link" onClick={closeMenu}>Customized Project</Link></li>
        <li><Link to='/owner' className="nav-link" onClick={closeMenu}><FaUser /> Owner Details</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
