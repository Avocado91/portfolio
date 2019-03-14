import React from 'react';
import Fade from 'react-reveal/Fade';
import indecision from './../images/projects/indecision-screencap.png';

import './../styles/components/section.css';
import './../styles/components/projects.css';
import './../styles/components/button.css';

const Projects = (props) => {
  const projectDetails = {
    indecision: {
      title: 'Indecision',
      tools: 'React'
    }

  };

  return (
    <div className='section section--off-white'>
      <div className='wrapper wrapper--wide'>
        <Fade left>
          <h1 className='section__title'>Projects</h1>
        </Fade>
        <Fade left big delay={250}>
          <hr className='section__hr'/>
        </Fade>
  
        <Fade bottom cascade big>
          <div className='projects'>
            <div className='project'>
              <img className='project__img' src={indecision} alt='Indecision App' />
              <div className='project__overlay-container'>
                <div className='project__overlay--slidedown'>
                  <h3 className='project__title'>{projectDetails.indecision.title}</h3>
                  <p className='project__tools'>{projectDetails.indecision.tools}</p>
                </div>
                <div className='project__overlay--slideup'>
                  <button className='button' onClick={props.handleOpenModal}>Learn More</button>
                </div>
              </div>
            </div>
            <div className='project'>
              <img className='project__img' src='https://estampasuenos.cl/wp-content/uploads/2017/10/descarga3.png' alt='image of project' />
              <div className='project__overlay-container'>
                <div className='project__overlay--slidedown'>
                  <h3 className='project__title'>Project Name</h3>
                  <p className='project__tools'>Project tools go here</p>
                </div>
                <div className='project__overlay--slideup'>
                  <button className='button' onClick={props.handleOpenModal}>Learn More</button>
                </div>
              </div>
            </div>
            <div className='project'>
              <img className='project__img' src='https://estampasuenos.cl/wp-content/uploads/2017/10/descarga3.png' alt='image of project' />
              <div className='project__overlay-container'>
                <div className='project__overlay--slidedown'>
                  <h3 className='project__title'>Project Name</h3>
                  <p className='project__tools'>Project tools go here</p>
                </div>
                <div className='project__overlay--slideup'>
                  <button className='button' onClick={props.handleOpenModal}>Learn More</button>
                </div>
              </div>
            </div>
            <div className='project'>
              <img className='project__img' src='https://estampasuenos.cl/wp-content/uploads/2017/10/descarga3.png' alt='image of project' />
              <div className='project__overlay-container'>
                <div className='project__overlay--slidedown'>
                  <h3 className='project__title'>Project Name</h3>
                  <p className='project__tools'>Project tools go here</p>
                </div>
                <div className='project__overlay--slideup'>
                  <button className='button' onClick={props.handleOpenModal}>Learn More</button>
                </div>
              </div>
            </div>
            <div className='project'>
              <img className='project__img' src='https://estampasuenos.cl/wp-content/uploads/2017/10/descarga3.png' alt='image of project' />
              <div className='project__overlay-container'>
                <div className='project__overlay--slidedown'>
                  <h3 className='project__title'>Project Name</h3>
                  <p className='project__tools'>Project tools go here</p>
                </div>
                <div className='project__overlay--slideup'>
                  <button className='button' onClick={props.handleOpenModal}>Learn More</button>
                </div>
              </div>
            </div>
            <div className='project'>
              <img className='project__img' src='https://estampasuenos.cl/wp-content/uploads/2017/10/descarga3.png' alt='image of project' />
              <div className='project__overlay-container'>
                <div className='project__overlay--slidedown'>
                  <h3 className='project__title'>Project Name</h3>
                  <p className='project__tools'>Project tools go here</p>
                </div>
                <div className='project__overlay--slideup'>
                  <button className='button' onClick={props.handleOpenModal}>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
};

export default Projects;