import React from 'react';

const Contact = () => (
  <div>
    <h1>Get in touch</h1>
    <hr></hr>
    <form name='contact' method="post" data-netlify='true' data-netlify-honeypot='bot-field'>
    {/* netlify anti-spam bot field */}
    <input type='hidden' name='bot-field' /> 
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="6"></textarea>
      </div>
      <input type="submit" value="Send Message" />
    </form>
  </div>
)

export default Contact;


