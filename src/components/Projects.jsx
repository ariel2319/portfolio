import React from 'react';
import '../styles/projects-style.css'
import CardProject from './CardProject';

const Projects = () => {
  return (
    <div className='project-container'>
      <div>
        <h1> Projects </h1>
      </div>

      <div className='projects'>


        <CardProject
          title={'E-commerce'}
          description={'E-commerce realizado utilizando ReactJs, React Router para rutas protegidas, React Hook Form'}
          img={'https://raw.githubusercontent.com/ariel2319/portfolio/main/src/assets/projects/e-commerceReact.JPG'}
        />

        <CardProject
          title={'Pokedex'}
          description={'E-commerce realizado utilizando ReactJs, React Router para rutas protegidas, React Hook Form'}
          img={'https://raw.githubusercontent.com/ariel2319/portfolio/main/src/assets/projects/pokedex.JPG'}
        />


        <CardProject
          title={'Weather'}
          description={'E-commerce realizado utilizando ReactJs, React Router para rutas protegidas, React Hook Form'}
          img={'https://raw.githubusercontent.com/ariel2319/portfolio/main/src/assets/projects/weather.JPG'}
        />

        <CardProject
          title={'E-commerce JS'}
          description={'E-commerce realizado utilizando ReactJs, React Router para rutas protegidas, React Hook Form'}
          img={'https://raw.githubusercontent.com/ariel2319/portfolio/main/src/assets/projects/e-commerce-JS-HTML-CSS.JPG'}
        />

        <CardProject
          title={'Box-Shadow Generator'}
          description={'E-commerce realizado utilizando ReactJs, React Router para rutas protegidas, React Hook Form'}
          img={'https://raw.githubusercontent.com/ariel2319/portfolio/main/src/assets/projects/box-shadow.JPG'}
        />

        <CardProject
          title={'Quotes'}
          description={'E-commerce realizado utilizando ReactJs, React Router para rutas protegidas, React Hook Form'}
          img={'https://raw.githubusercontent.com/ariel2319/portfolio/main/src/assets/projects/101-quotes.JPG'}
        />
      </div>
    </div>
  );
};

export default Projects;