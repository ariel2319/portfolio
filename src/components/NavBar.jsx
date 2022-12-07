import React from 'react';
import '../styles/navbar-style.css'

const NavBar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-info'>

        <div className='nav-img-profile'>
          <img src="https://raw.githubusercontent.com/ariel2319/portfolio/main/src/assets/foto-portafolio.JPG" alt="foto perfil portfolio" />
        </div>

        <h3>Ariel  <br />  Maldonado</h3>
        <div className='nav-contacts'>
          <a href="https://www.linkedin.com/in/ariel-alejandro-maldonado-68276224b/" target={'_blank'}><i className="fa-brands fa-linkedin-in"></i> </a>
          <a href="https://github.com/ariel2319" target={'_blank'}><i className="fa-brands fa-github"></i> </a>
          <a href=""> <i className="fa-regular fa-id-card"></i></a>

        </div>
      </div>

      <div className='nav-sections'>

        <a href="" id='home'><div>  <i className="fa-sharp fa-solid fa-house"></i> Home</div> </a>

        <a href="" id='about'><div><i className="fa-regular fa-user"></i> About Me</div></a>

        <a href="" id='skills'><div><i className="fa-solid fa-list-check"></i> Skills</div></a>

        <a href="" id='projects'><div><i className="fa-solid fa-diagram-project"></i> Proyectos</div></a>

        <a href="" id='contact'><div><i className="fa-regular fa-envelope"></i> Contacto</div></a>

      </div>
    </div>
  );
};

export default NavBar;