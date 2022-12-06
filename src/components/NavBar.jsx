import React from 'react';
import '../styles/navbar-style.css'

const NavBar = () => {
  return (
    <div className='nav-container'>
      <h1>NavBar</h1>
      <div className='nav-info'>
        
        <h2>Ariel Maldonado</h2>
        <img src="" alt="" />
        <div className='nav-contacts'>
          <div><i class="fa-brands fa-linkedin-in"></i></div>
          <div><i class="fa-brands fa-github"></i></div>
          <div><i class="fa-regular fa-id-card"></i></div>
        </div>
      </div>

      <div>
        <div>Home</div>
        <div>About Me</div>
        <div>Skills</div>
        <div>Proyectos</div>
        <div>Contacto</div>

      </div>
    </div>
  );
};

export default NavBar;