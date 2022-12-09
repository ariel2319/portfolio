import React from 'react';
import '../styles/projects-style.css'
import CardProject from './CardProject';

const Projects = () => {
  return (
    <div className='project-container'>
      <div>
        <h1 className='title-sector'> Projects </h1>
      </div>

      <div className='projects'>


        <CardProject
          title={'E-commerce'}
          description={'E-commerce realizado utilizando ReactJs, React Router para rutas protegidas, React Hook Form'}
          img={'https://raw.githubusercontent.com/ariel2319/portfolio/main/src/assets/projects/e-commerceReact.JPG'}
          url={'https://e6-e-commerce-maldonadoaa.netlify.app/'}
        />

        <CardProject
          title={'Pokedex'}
          description={'E-commerce realizado utilizando ReactJs, React Router para rutas protegidas, React Hook Form'}
          img={'https://raw.githubusercontent.com/ariel2319/portfolio/main/src/assets/projects/pokedex.JPG'}
          url={'https://e5-pokedex-maldonadoaa.netlify.app/'}
        />


        <CardProject
          title={'Weather'}
          description={'E-commerce realizado utilizando ReactJs, React Router para rutas protegidas, React Hook Form'}
          img={'https://raw.githubusercontent.com/ariel2319/portfolio/main/src/assets/projects/weather.JPG'}
          url={'https://e2-weather-arry.netlify.app/'}
        />

        <CardProject
          title={'Box-Shadow Generator'}
          description={'E-commerce realizado utilizando ReactJs, React Router para rutas protegidas, React Hook Form'}
          img={'https://raw.githubusercontent.com/ariel2319/portfolio/main/src/assets/projects/box-shadow.JPG'}
          url={'https://maldonadoaa-boxshados-generator.netlify.app/'}
        />

        <CardProject
          title={'Quotes'}
          description={'E-commerce realizado utilizando ReactJs, React Router para rutas protegidas, React Hook Form'}
          img={'https://raw.githubusercontent.com/ariel2319/portfolio/main/src/assets/projects/101-quotes.JPG'}
          url={'https://e1-101inspirationalquotes-maldonado.netlify.app/'}
        />

        <CardProject
          title={'E-commerce JS'}
          description={'E-commerce realizado utilizando ReactJs, React Router para rutas protegidas, React Hook Form'}
          img={'https://raw.githubusercontent.com/ariel2319/portfolio/main/src/assets/projects/e-commerce-JS-HTML-CSS.JPG'}
          url={'https://e-commerce-lapalanca-aam.netlify.app/'}
        />

      </div>
    </div>
  );
};

export default Projects;