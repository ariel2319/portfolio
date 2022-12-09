import React from 'react';
import '../styles/projects-style.css'
import CardProject from './CardProject';

const Projects = () => {
  return (
    <div className='project-container'>
      <h1>Projects</h1>

      <CardProject
        title={'E-commerce'}
        description={'E-commerce realizado utilizando ReactJs, React Router para rutas protegidas, React Hook Form'}
        img={'https://raw.githubusercontent.com/ariel2319/portfolio/main/src/assets/projects/e-commerceReact.JPG'}
      />



    </div>
  );
};

export default Projects;