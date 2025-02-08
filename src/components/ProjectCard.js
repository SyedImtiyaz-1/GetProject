import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='project-card'>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-footer">
          <span className="price">Details ➡️</span>
          <button onClick={openModal} className="contact-btn">
            Contact
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <h3>Contact Information</h3>
            <div className="contact-info">
              <p>
                <i className="fas fa-phone"></i> 
                Call: <a href="tel:+917218404903">+91 7218404903</a>
              </p>
              <p>
                <i className="fas fa-whatsapp"></i> 
                WhatsApp: <a href="https://wa.me/917249545778" target="_blank" rel="noopener noreferrer">+91 7249545778</a>
              </p>
              <p>
                <i className="fas fa-envelope"></i> 
                Email: <a href="mailto:gettechthings@email.com">gettechthings@email.com</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;