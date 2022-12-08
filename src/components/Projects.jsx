import React from 'react';
import '../styles/projects-style.css'
import CardProject from './CardProject';

const Projects = () => {
  return (
    <div className='project-container'>
      <h1>Projects</h1>

      <CardProject/>
    </div>
  );
};

export default Projects;