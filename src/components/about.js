import React from 'react';
import './../styles/components/about.css';
import './../styles/components/wrapper.css';
import './../styles/components/section.css';
import './../styles/components/flex-container.css';
import './../styles/components/logo-layout.css';

const About = () => (
  <div className='wrapper'>
    <div className='section' id='about'>
      <h1 className='section__title'>About</h1>
      <hr className='section__hr'/>
      <div className='skills flex-container flex-container--full'>
        <div className='skill'>
          <div className='logo-layout__bkg'>
            <i className='fas fa-mobile-alt logo-layout__icon'></i>
          </div>
          <h3 className='skills__title'>Responsive</h3>
          <p className='skills__description'>Always striving to make sure everything looks great on all devices.</p>
        </div>
        <div className='skill'>
        <div className='logo-layout__bkg'>
          <i className='fas fa-rocket logo-layout__icon logo-layout__icon--rocket'></i>
        </div>
        <h3 className='skills__title'>Fast</h3>
          <p className='skills__description'>Committed to speed because nobody likes long load times.</p>
        </div>
        <div className='skill'>
        <div className='logo-layout__bkg'>
          <i className='far fa-check-circle logo-layout__icon'></i>
        </div>
        <h3 className='skills__title'>Dynamic</h3>
          <p className='skills__description'>Making boring static sites pop into life with dynamic interactivity.</p>
        </div>
        <div className='skill'>
        <div className='logo-layout__bkg'>
          <i className='far fa-lightbulb logo-layout__icon'></i>
        </div>
        <h3 className='skills__title'>Intuitive</h3>
          <p className='skills__description'>Strong preference for clean, easy to use UI/UX.</p>
        </div>
      </div>
      <div className='flex-container'>
        <div className='bio'>
          <p>
            Hi, I'm T.J., a front-end developer that loves building web applications, usually with React. I'm passionate about learning new technologies, as well as focused on constantly working to improve my current skill set. Outside of web development I also love playing video games, chilling out watching movies, jamming on the guitar, or playing and watching hockey. In this section you can preview some of the tools that I'm familiar with. Down below you can view some of the things I've worked on as well as fill out a form to get in contact with me.
          </p>
        </div>
        <div className='tools'>
          <img src='#' alt='logo'/>
          <img src='#' alt='logo'/>
          <img src='#' alt='logo'/>
          <img src='#' alt='logo'/>
          <img src='#' alt='logo'/>
          <img src='#' alt='logo'/>
          <img src='#' alt='logo'/>
          <img src='#' alt='logo'/>
          <img src='#' alt='logo'/>
          <img src='#' alt='logo'/>
          <img src='#' alt='logo'/>
          <img src='#' alt='logo'/>
        </div>
      </div>
    </div>
  </div>
);

export default About;