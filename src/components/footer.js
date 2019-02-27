import React from 'react';
import './../styles/components/footer.css';
import './../styles/components/section.css';
import './../styles/components/wrapper.css';
import './../styles/components/social-link.css';

const Footer = () => (
  <div className='section section--footer'>
    <div className='wrapper'>
      <div className='social-container'>
        <div className='social-link'>
          <a href='#'><i className='fab fa-github'></i></a>
        </div>
        <div className='social-link'>
          <a href='#'><i className='fab fa-linkedin-in'></i></a>
        </div>
        <div className='social-link'>
          <a href='#'><i className='fab fa-facebook-f'></i></a>
        </div>
        <div className='social-link'>
          <a href='mailto:t.ruggles@live.ca'><i className='fas fa-envelope'></i></a>
        </div>
      </div>
      <div>T.J. Ruggles <i class="far fa-copyright"></i> 2018</div>
    </div>
  </div>
);

export default Footer;