import React from 'react';
import Fade from 'react-reveal/Fade';
import Modal from './Modal';
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';
import indecision from './../images/projects/indecision-screencap.png';
import indecisionModal from './../images/projects/indecision-modal-screencap.png';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalImg: undefined,
      modalImgAlt: undefined,
      modalTitle: undefined,
      modalSubtitle: undefined,
      modalDescription: undefined,
      modalGithubLink: undefined,
      modalSiteLink: undefined,
      modalVisible: false
    }
  }
  
  showIndecisionModal = () => {
    this.setState({
      modalImg: `${indecisionModal}`,
      modalImgAlt: 'Indecision App',
      modalTitle: 'Indecision',
      modalSubtitle: 'Put your life in the hands of a computer',
      modalDescription: "This app is your every-day, standard to-do app with a twist. Built with React this app will                          actually randomly select one of your options that you've added when clicking the button. The app                     has some basic validation making sure you actually have something typed before adding the option,                    as well as making sure there are options to choose from before actually making a selection. Feel                     free to check out this app on Github or see the live demo.",
      modalGithubLink: 'https://github.com/truggles85/Indecision',
      modalSiteLink:  'https://elastic-engelbart-c8fb32.netlify.com',
      modalVisible: true
    })
  };

  showModal = () => {
    this.setState({
      modalVisible: true
    })
  };
  hideModal = () => {
    this.setState({
      modalImg: undefined,
      modalImgAlt: undefined,
      modalTitle: undefined,
      modalSubtitle: undefined,
      modalDescription: undefined,
      modalGithubLink: undefined,
      modalSiteLink: undefined,
      modalVisible: false
    })
  };

  render() {
    const projectDetails = {
      indecision: {
        title: 'Indecision',
        tools: 'React'
      }
    };

    const modalCustomStyles = {
      padding: 0,
      width: '700px',
      height: '90%',
      '-webkit-box-shadow': '0px 0px 10px 2px rgba(0,0,0,0.45)',
      '-moz-box-shadow': '0px 0px 10px 2px rgba(0,0,0,0.45)',
      'box-shadow': '0px 0px 10px 2px rgba(0,0,0,0.45)'
    }

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
                    <button className='button' onClick={this.showIndecisionModal}>Learn More</button>
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
                    <button className='button' onClick={this.showModal}>Learn More</button>
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
                    <button className='button' onClick={this.showModal}>Learn More</button>
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
                    <button className='button' onClick={this.showModal}>Learn More</button>
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
                    <button className='button' onClick={this.showModal}>Learn More</button>
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
                    <button className='button' onClick={this.showModal}>Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <Rodal 
          visible={this.state.modalVisible} 
          onClose={this.hideModal} 
          closeOnEsc={true}
          showCloseButton={false}
          customStyles={modalCustomStyles}
        >
          <Modal handleHideModal={this.hideModal}>
            <div className='modal__img-container'>
              <img className='modal__img' src={this.state.modalImg} alt={this.state.modalImgAlt}></img>
            </div>
            <div className='wrapper--modal'>
              <div className='modal__text-container'>
                <h1 className='section__title section__title--modal'>{this.state.modalTitle}</h1>
                <h3 className='section__subtitle'>{this.state.modalSubtitle}</h3>
                <hr className='section__hr section__hr--modal' />
                <p className='modal__description'>{this.state.modalDescription}</p>
              </div>
              <div className='modal__button-container'>
                <a className='modal__link' href={this.state.modalGithubLink} target='_blank'>
                  <button className='button button--modal'>
                    <i className='button__icon fab fa-github'></i>
                    <span>Github</span>
                  </button>
                </a>
                <a className='modal__link' href={this.state.modalSiteLink} target='_blank'>
                  <button className='button button--modal'>
                    <i className='button__icon fas fa-external-link-alt'></i>
                    <span>Live Site</span>
                  </button>
                </a>
              </div>
            </div>
          </Modal>
        </Rodal>
      </div>
    )
  }
};

export default Projects;