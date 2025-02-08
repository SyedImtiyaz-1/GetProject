import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaTrophy, FaAward, FaCode, FaMapMarkerAlt, FaUserPlus } from 'react-icons/fa';
import './OwnerDetails.css';

const OwnerDetails = () => {
  const handleConnect = () => {
    window.location.href = "https://topmate.io/syedimtiyazali";
  };

  return (
    <div className="owner-details">
      <div className="owner-card">
        <h2>Founder Details</h2>
        <div className="owner-info">
          <div className="info-item">
            <FaPhone className="info-icon" />
            <a href="tel:7218404903"><p>+91 7218404903</p></a>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <a href="mailto:gettechthings@gmail.com"><p>gettechthings@gmail.com</p></a>
          </div>
          <div className="info-item">
            <FaLinkedin className="info-icon" />
            <a href="https://linkedin.com/in/imtiyaz-sde" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <p>Nagpur, Maharashtra</p>
          </div>
        </div>

        <div className="achievements-section">
          <h3>Achievements</h3>
          <div className="achievement-item">
            <FaTrophy className="achievement-icon" />
            <div className="achievement-content">
              <h4>Times Square Feature</h4>
              <p>Featured for becoming a top mentor</p>
            </div>
          </div>
          <div className="achievement-item">
            <FaCode className="achievement-icon" />
            <div className="achievement-content">
              <h4>Experienced SDE</h4>
              <p>Professional software development expertise</p>
            </div>
          </div>
          <div className="achievement-item">
            <FaAward className="achievement-icon" />
            <div className="achievement-content">
              <h4>Hackathon Champion</h4>
              <p>5x Hackathon Winner</p>
            </div>
          </div>
        </div>

        <div className="owner-description">
          <h3>About Founder</h3>
          <p>
            I am a passionate software developer with expertise in building high-quality projects. 
            With years of experience in web development, I create solutions that help businesses 
            and individuals achieve their goals. My achievements include being featured in Times Square
            as a top mentor, winning multiple hackathons, and maintaining a strong track record as an
            experienced Software Development Engineer.
          </p>
          <button className="connect-button" onClick={handleConnect}>
            <FaUserPlus className="connect-icon" />
            Let's Connect 1:1 
          </button>
        </div>
      </div>
    </div>
  );
};

export default OwnerDetails;