import React from 'react';
import Modal from './Modal';
import Project from './Project';
import Fade from 'react-reveal/Fade';
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';
import indecision from './../images/projects/indecision-screencap.png';
import indecisionModal from './../images/projects/indecision-modal-screencap.png';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openedModal: false,
      projects: [{
        id: 1,
        img: `${indecision}`,
        modalImg: `${indecisionModal}`,
        imgAlt: 'Indecision App',
        title: 'Indecision',
        tools: 'React',
        subtitle: 'Put your life in the hands of a computer',
        description: "This app is your every-day, standard to-do app with a twist. Built with React this app will actually              randomly select one of your options that you've added when clicking the button. The app has some                   basic validation making sure you actually have something typed before adding the option, as well as                making sure there are options to choose from before actually making a selection. Feel free to check                out this app on Github or see the live demo.",
        githubLink: 'https://github.com/truggles85/Indecision',
        siteLink:  'https://elastic-engelbart-c8fb32.netlify.com'
      }, {
        id: 2,
        img: `${indecision}`,
        modalImg: `${indecisionModal}`,
        imgAlt: 'Indecision App',
        title: 'Indecision 2',
        tools: 'React',
        subtitle: 'Put your life in the hands of a computer',
        description: "This app is your every-day, standard to-do app with a twist. Built with React this app will actually              randomly select one of your options that you've added when clicking the button. The app has some                   basic validation making sure you actually have something typed before adding the  option, as well as               making sure there are options to choose from before actually making a selection. Feel free to check                out this app on Github or see the live demo.",

        githubLink: 'https://github.com/truggles85/Indecision',
        siteLink:  'https://elastic-engelbart-c8fb32.netlify.com'
      }, {
        id: 3,
        img: `${indecision}`,
        modalImg: `${indecisionModal}`,
        imgAlt: 'Indecision App',
        title: 'Indecision 3',
        tools: 'React',
        subtitle: 'Put your life in the hands of a computer',
        description: "This app is your every-day, standard to-do app with a twist. Built with React this app will actually              randomly select one of your options that you've added when clicking the button. The app has some                   basic validation making sure you actually have something typed before adding the option, as well as                making sure there are options to choose from before actually making a selection. Feel free to check                out this app on Github or see the live demo.",
        githubLink: 'https://github.com/truggles85/Indecision',
        siteLink:  'https://elastic-engelbart-c8fb32.netlify.com'
      }, {
        id: 4,
        img: `${indecision}`,
        modalImg: `${indecisionModal}`,
        imgAlt: 'Indecision App',
        title: 'Indecision 4',
        tools: 'React',
        subtitle: 'Put your life in the hands of a computer',
        description: "This app is your every-day, standard to-do app with a twist. Built with React this app will actually              randomly select one of your options that you've added when clicking the button. The app has some                   basic validation making sure you actually have something typed before adding the option, as well as                making sure there are options to choose from before actually making a selection. Feel free to check                out this app on Github or see the live demo.",
        githubLink: 'https://github.com/truggles85/Indecision',
        siteLink:  'https://elastic-engelbart-c8fb32.netlify.com'
      }, {
        id: 5,
        img: `${indecision}`,
        modalImg: `${indecisionModal}`,
        imgAlt: 'Indecision App',
        title: 'Indecision 5',
        tools: 'React',
        subtitle: 'Put your life in the hands of a computer',
        description: "This app is your every-day, standard to-do app with a twist. Built with React this app will actually              randomly select one of your options that you've added when clicking the button. The app has some                   basic validation making sure you actually have something typed before adding the option, as well as                making sure there are options to choose from before actually making a selection. Feel free to check                out this app on Github or see the live demo.",
        githubLink: 'https://github.com/truggles85/Indecision',
        siteLink:  'https://elastic-engelbart-c8fb32.netlify.com'
      }, {
        id: 6,
        img: `${indecision}`,
        modalImg: `${indecisionModal}`,
        imgAlt: 'Indecision App',
        title: 'Indecision 6',
        tools: 'React',
        subtitle: 'Put your life in the hands of a computer',
        description: "This app is your every-day, standard to-do app with a twist. Built with React this app will actually              randomly select one of your options that you've added when clicking the button. The app has some                   basic validation making sure you actually have something typed before adding the option, as well as                making sure there are options to choose from before actually making a selection. Feel free to check                out this app on Github or see the live demo.",
        githubLink: 'https://github.com/truggles85/Indecision',
        siteLink:  'https://elastic-engelbart-c8fb32.netlify.com'
      }]
    };
  }

  showModal = id => {
    this.setState({
      openedModal: id
    })
  };

  hideModal = () => {
    this.setState({
      openedModal: false
    })
  };

  render() {
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

         <div className='projects'>
            {this.state.projects.map((project) => (
              <div key={project.id} className='project'>  
                <Project 
                  projectImg={project.img}
                  projectImgAlt={project.imgAlt}
                  projectTitle={project.title}
                  projectTools={project.tools}
                  projectId={project.id}
                  handleShowModal={this.showModal}
                />

                <Rodal 
                  visible={this.state.openedModal === project.id} 
                  onClose={this.hideModal} 
                  closeOnEsc={true}
                  showCloseButton={false}
                  customStyles={modalCustomStyles}
                >
                  <Modal handleHideModal={this.hideModal}>
                    <div className='modal__img-container'>
                      <img className='modal__img' src={project.modalImg} alt={project.imgAlt}></img>
                    </div>
                    <div className='wrapper--modal'>
                      <div className='modal__text-container'>
                        <h1 className='section__title section__title--modal'>{project.title}</h1>
                        <h3 className='section__subtitle'>{project.subtitle}</h3>
                        <hr className='section__hr section__hr--modal' />
                        <p className='modal__description'>{project.description}</p>
                      </div>
                      <div className='modal__button-container'>
                        <a className='modal__link' href={project.githubLink} target='_blank'>
                          <button className='button button--modal'>
                            <i className='button__icon fab fa-github'></i>
                            <span>Github</span>
                          </button>
                        </a>
                        <a className='modal__link' href={project.siteLink} target='_blank'>
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
            ))}            
          </div>
        </div>
      </div>
    )
  }
};

export default Projects;