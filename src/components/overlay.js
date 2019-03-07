import React from 'react'

import './../styles/components/overlay.css';
import './../styles/components/wrapper.css';
import './../styles/components/button.css';

const Overlay = () => (
  <div className='overlay'>
    <div className='overlay__container'>     
      <img className='overlay__img' src='https://i2.wp.com/amergin.net.au/wp-content/uploads/2017/03/image-placeholder.jpg?ssl=1' alt='placeholder image'></img>
      <div className='wrapper--overlay'>
        <div className='overlay__text-container'>
          <h1 className='section__title section__title--overlay'>Title Goes Here</h1>
          <h3 className='section__subtitle'>Subtitle Goes Here</h3>
          <hr className='section__hr section__hr--overlay' />
          <p className='overlay__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue mi id auctor aliquam. Praesent quis purus eros. Integer at massa tempor, tincidunt dolor eu, bibendum arcu. Quisque viverra nibh sit amet felis faucibus, et eleifend enim porta. Fusce quis augue egestas leo tincidunt scelerisque ut convallis diam. Curabitur ut viverra elit.</p>
        </div>
        <div className='overlay__button-container'>
          <a className='overlay__link' href='#' target='_blank'>
            <button className='button button--overlay'>
              <i className='button__icon fab fa-github'></i>
              <span>Github</span>
            </button>
          </a>
          <a className='overlay__link' href='#' target='_blank'>
            <button className='button button--overlay'>
              <i className='button__icon fas fa-external-link-alt'></i>
              <span>Live Site</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Overlay;
