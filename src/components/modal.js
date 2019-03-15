import React from 'react';
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';

const Modal = (props) => {
  const modalCustomStyles = {
    padding: 0,
    width: '700px',
    height: '90%',
    '-webkit-box-shadow': '0px 0px 10px 2px rgba(0,0,0,0.45)',
    '-moz-box-shadow': '0px 0px 10px 2px rgba(0,0,0,0.45)',
    'box-shadow': '0px 0px 10px 2px rgba(0,0,0,0.45)'
  }

  return (
    <Rodal 
      visible={props.isOpen} 
      onClose={props.handleCloseModal} 
      closeOnEsc={true}
      showCloseButton={false}
      customStyles={modalCustomStyles}
    >
      <div className='modal__exit-button' onClick={props.handleCloseModal.bind(this)}>
        <i className='modal__exit-icon fas fa-times'></i>
      </div>     
      <div className='modal__img-container'>
        <img className='modal__img' src='https://i2.wp.com/amergin.net.au/wp-content/uploads/2017/03/image-placeholder.jpg?ssl=1' alt='placeholder image'></img>
      </div>
      <div className='wrapper--modal'>
        <div className='modal__text-container'>
          <h1 className='section__title section__title--modal'>Title Goes Here</h1>
          <h3 className='section__subtitle'>Subtitle Goes Here</h3>
          <hr className='section__hr section__hr--modal' />
          <p className='modal__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue mi id auctor aliquam. Praesent quis purus eros. Integer at massa tempor, tincidunt dolor eu, bibendum arcu. Quisque viverra nibh sit amet felis faucibus, et eleifend enim porta. Fusce quis augue egestas leo tincidunt scelerisque ut convallis diam. Curabitur ut viverra elit.</p>
        </div>
        <div className='modal__button-container'>
          <a className='modal__link' href='#' target='_blank'>
            <button className='button button--modal'>
              <i className='button__icon fab fa-github'></i>
              <span>Github</span>
            </button>
          </a>
          <a className='modal__link' href='#' target='_blank'>
            <button className='button button--modal'>
              <i className='button__icon fas fa-external-link-alt'></i>
              <span>Live Site</span>
            </button>
          </a>
        </div>
      </div>
    </Rodal>
  )
};

export default Modal;
