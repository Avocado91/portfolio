import React from 'react';
import './../styles/components/about.css';
import './../styles/components/wrapper.css';
import './../styles/components/section.css';
import './../styles/components/flex-container.css';

const About = () => (
  <div className='wrapper'>
    <div className='section' id='about'>
      <h1 className='section__title'>About</h1>
      <hr className='section__hr'/>
      <div className='skills flex-container flex-container--full'>
        <div>
          <i className='fas fa-mobile-alt'></i>
          <h3>Responsive</h3>
          <p>My number one priority is making sure everything looks great on all devices.</p>
        </div>
        <div>
          <i className='fas fa-rocket'></i>
          <h3>Fast</h3>
          <p>Speed is of utmost importance because nobody likes waiting around for load times. </p>
        </div>
        <div>
          <i className='far fa-lightbulb'></i>
          <h3>Intuitive</h3>
          <p>Strong preference for clean, easy to use UI/UX</p>
        </div>
        <div>
          <i className='far fa-check-circle'></i>
          <h3>Dynamic</h3>
          <p>Making boring static sites pop into life is what I live for.</p>
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