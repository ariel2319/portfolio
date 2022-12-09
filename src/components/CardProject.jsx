import React from 'react';
import '../styles/projects-style.css'

const CardProject = ({ title, description, img }) => {
  return (
    
      <div className="card-proj">

        <div className="card-img-proj">
          <img src={img} alt="" />
          <h3 className='card-title-proj'> {title} </h3>
        </div>

        <div className="card-content-proj">
          {description}
        </div>

      </div>

  );
};

export default CardProject;