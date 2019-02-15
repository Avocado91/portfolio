import React from 'react'
import heroBkgImage from './../images/hero-bkg.jpg';
import './../styles/components/hero-banner.css';

const HeroBanner = () => (
  <div className='hero-banner'>
    <img className='hero-banner__image' src={heroBkgImage} alt='teal background' />
    <h1>T.J. Ruggles | Front-End Developer</h1>
    <h3>I'm a Web Developer based out of Ottawa, Canada</h3>
    <p>Learn more about what I do</p>
    <p>arrow down</p>
  </div>
);

export default HeroBanner;