import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';
import projects from '../data/projects';

const Projects = () => {
  const [category, setCategory] = useState('all');

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const categories = {
    all: 'All Projects',
    webDevelopment: 'Web Development',
    aiMl: 'AI & ML Projects',
    dataScience: 'Data Science',
    cloudComputing: 'Cloud Computing'
  };

  // Filter projects based on selected category
  const filteredProjects = projects.all.filter(project => 
    category === 'all' ? true : project.category === category
  );

  return (
    <div className="projects-container">
      <h2>Our Projects</h2>
      
      {/* Dropdown for Mobile */}
      <select
        className="category-dropdown"
        value={category}
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        {Object.entries(categories).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>

      {/* Category Buttons for Desktop */}
      <div className="button-group">
        {Object.entries(categories).map(([key, value]) => (
          <button 
            key={key}
            className={category === key ? 'active' : ''} 
            onClick={() => handleCategoryChange(key)}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Project List */}
      <div className="project-list">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;