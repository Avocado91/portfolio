import React from 'react';
import './../styles/components/footer.css';
import './../styles/components/section.css';
import './../styles/components/wrapper.css';
import './../styles/components/social-link.css';

const Footer = () => (
  <div className='section section--footer'>
    <div className='wrapper'>
      <div className='social'>
        <a className='social__link' href='https://github.com/truggles85' target='_blank'>
          <div className='social__icon'>
            <i className='fab fa-github'></i>
          </div>
        </a>
        <a className='social__link' href='https://www.linkedin.com/in/t-j-ruggles-0a12a1138/' target='_blank'>
          <div className='social__icon'>
            <i className='fab fa-linkedin-in'></i>
          </div>
        </a>
        <a className='social__link' href='https://www.facebook.com/struggs' target='_blank'>
          <div className='social__icon'>
            <i className='fab fa-facebook-f'></i>
          </div>
        </a>
        <a className='social__link' href='mailto:t.ruggles@live.ca'>
          <div className='social__icon'>
            <i className='fas fa-envelope'></i>
          </div>
        </a>
      </div>
      <div className='copyright'>T.J. Ruggles <i className="far fa-copyright"></i> 2018</div>
    </div>
  </div>
);

export default Footer;