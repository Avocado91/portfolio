import React from 'react';
import './../styles/components/contact.css';
import './../styles/components/button.css';

const Contact = () => (
  <div className='section section--dark'>
    <div className='wrapper'>
      <h1 className='section__title section__title--white'>Contact</h1>
      <hr className='section__hr section__hr--contact'></hr>
      <p className='contact__blurb'>Have any questions or want to work together?</p>
      <div className='form'>
        <form name='contact' method="post" data-netlify='true' data-netlify-honeypot='bot-field'>
        {/* netlify anti-spam bot field */}
        <input type='hidden' name='bot-field' /> 
          <div>
            <input className='form__input' placeholder='Name' type="text" name="name" id="name" />
          </div>
          <div>
            <input className='form__input' placeholder='Email' type="text" name="email" id="email" />
          </div>
          <div>
            <textarea className='form__input' placeholder='Message' name="message" id="message" rows="6"></textarea>
          </div>
          <input className='button button--contact' type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  </div>
)

export default Contact;


