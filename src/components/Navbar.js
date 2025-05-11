import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaProjectDiagram, FaUser, FaBars } from 'react-icons/fa';
import { SignedIn, SignedOut, UserButton, SignInButton, useAuth } from '@clerk/clerk-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleProjectsClick = (e) => {
    if (!isSignedIn) {
      e.preventDefault();
      const signInButton = document.querySelector('.cl-signInButton');
      if (signInButton) {
        signInButton.click();
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-link">
          <FaProjectDiagram className="nav-icon" />
          <h1>Get Project</h1>
        </Link>
      </div>
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <FaBars />
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to='/' className="nav-link" onClick={closeMenu}>Home</Link></li>
        <li>
          <Link 
            to='/projects' 
            className="nav-link" 
            onClick={(e) => {
              handleProjectsClick(e);
              closeMenu();
            }}
          >
            Projects
          </Link>
        </li>
        <li><Link to='/customized' className="nav-link" onClick={closeMenu}>Customized Project</Link></li>
        <li><Link to='/owner' className="nav-link" onClick={closeMenu}><FaUser /> Owner Details</Link></li>
        <SignedIn>
          <li className="user-button-container">
            <UserButton afterSignOutUrl="/" />
          </li>
        </SignedIn>
        <SignedOut>
          <li>
            <SignInButton mode="modal">
              <button className="login-button">Login</button>
            </SignInButton>
          </li>
        </SignedOut>
      </ul>
    </nav>
  );
};

export default Navbar;
