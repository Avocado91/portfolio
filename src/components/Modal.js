import React from 'react';

const Modal = (props) => (
  <div>
    <div className='modal__exit-button' onClick={props.handleHideModal}>
      <i className='modal__exit-icon fas fa-times'></i>
    </div>
    {props.children}
  </div>
);

export default Modal;
