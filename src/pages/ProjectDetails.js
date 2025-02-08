import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.all.find(proj => proj.id === parseInt(id));

  if (!project) {
    return <div className="project-details-container">
      <h2>Project not found</h2>
    </div>;
  }

  return (
    <div className="project-details-container">
      <h2>{project.title}</h2>
      <div className="project-details-content">
        <div className="project-details-info">
          <p>{project.description}</p>
          {project.details && <p>{project.details}</p>}
          <p className="project-price">
            {project.price ? `${project.price} INR` : 'Price not available'}
          </p>
        </div>
        {project.image && (
          <div>
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-details-image"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
