import React from 'react';
import '../styles/skills-style.css'

const Skills = () => {
  return (
    <div className='skills-container'>
      <h1 className='title-sector'>Skills</h1>

      <h3 className='sub-title'>Technology</h3>
      <div className='technology-container'>

        <div className='card js'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src="https://raw.githubusercontent.com/ariel2319/portfolio/bd8ea2baa8d474aba72893ee9913d282cdd5450c/src/assets/technology/javascript.svg" alt="" />
          </div>
          <h5>Java Script</h5>
        </div>

        <div href="" className='card html'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src="https://raw.githubusercontent.com/ariel2319/portfolio/bd8ea2baa8d474aba72893ee9913d282cdd5450c/src/assets/technology/html.svg" alt="" />
          </div>
          <h5>HTML 5</h5>
        </div>

        <div href="" className='card css'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png" alt="" />
          </div>
          <h5>CSS</h5>
        </div>

        <div href="" className='card react'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src="https://raw.githubusercontent.com/ariel2319/portfolio/bd8ea2baa8d474aba72893ee9913d282cdd5450c/src/assets/technology/react.svg" alt="" />
          </div>
          <h5>React</h5>
        </div>

        <div href="" className='card redux'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src="https://raw.githubusercontent.com/ariel2319/portfolio/bd8ea2baa8d474aba72893ee9913d282cdd5450c/src/assets/technology/redux.svg" alt="" />
          </div>
          <h5>Redux</h5>
        </div>

        <div href="" className='card router'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src="https://raw.githubusercontent.com/ariel2319/portfolio/bd8ea2baa8d474aba72893ee9913d282cdd5450c/src/assets/technology/router.svg" alt="" />
          </div>
          <h5>Router</h5>
        </div>

        <div href="" className='card git'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src="https://raw.githubusercontent.com/ariel2319/portfolio/bd8ea2baa8d474aba72893ee9913d282cdd5450c/src/assets/technology/git.svg" alt="" />
          </div>
          <h5>Git</h5>
        </div>

        <div href="" className='card bs'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src="https://raw.githubusercontent.com/ariel2319/portfolio/bd8ea2baa8d474aba72893ee9913d282cdd5450c/src/assets/technology/bootstrap.svg" alt="" />
          </div>
          <h5>BootStrap</h5>
        </div>

        <div href="" className='card github'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src="https://raw.githubusercontent.com/ariel2319/portfolio/bd8ea2baa8d474aba72893ee9913d282cdd5450c/src/assets/technology/github.svg" alt="" />
          </div>
          <h5>Git Hub</h5>
        </div>

      </div>



      <h3 className='sub-title'>Habilidades</h3>


      <h3 className='sub-title'>Resumen Académico</h3>

      <ul>

        <li>
          <h5>Desarrollador Front END</h5>
          <p>Institución: <b> ACADEMLO </b></p>
        </li>

        <li>
          <h5>Fundamento en HTML, CSS and JavaScript</h5>
          <p>Institución: <b> ACADEMLO </b></p>
        </li>

        <li>
          <h5>Profesorado para Técnicos <br /> en Base al Título de Procedencia <br />(en proceso)</h5>
          <p>Institución: <b> IES 9-007 </b></p>
        </li>

      </ul>

    </div>
  );
};

export default Skills;  