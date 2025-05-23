import React from 'react';
import { SignInButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import './LoginPrompt.css';

const LoginPrompt = () => {
  return (
    <div className="login-prompt">
      <div className="login-prompt-content">
        <h2>Please Login First</h2>
        <p>You need to be logged in to access this page.</p>
        <SignInButton mode="modal">
          <button className="login-button">Login Now</button>
        </SignInButton>
        <Link to="/" className="home-link">
          <p>Return to Home Page</p>
        </Link>
      </div>
    </div>
  );
};

export default LoginPrompt; 