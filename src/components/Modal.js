// Modal.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css';

const Modal = ({ project, onClose }) => {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    navigate('/projects');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">{project.title}</h2>
        <img src={project.image} alt={project.title} className="modal-image" />
        <p className="modal-description">{project.description}</p>
        <div className="modal-buttons">
          <button onClick={handleViewProjects} className="view-projects-button">
            View Projects
          </button>
          <button onClick={onClose} className="close-button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
