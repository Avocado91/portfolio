import React from 'react';

const Project = (props) => (
  <div>
    <img className='project__img' src={props.projectImg} alt={props.projectImg} />
    <div className='project__overlay-container'>
      <div className='project__overlay--slidedown'>
        <h3 className='project__title'>{props.projectTitle}</h3>
        <p className='project__tools'>{props.projectTools}</p>
      </div>
      <div className='project__overlay--slideup'>
        <button className='button' onClick={() => props.handleShowModal(props.projectId)}>Learn More</button>
      </div>
    </div>  
  </div>
);

export default Project;