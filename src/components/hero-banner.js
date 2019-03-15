import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const HeroBanner = () => (
  <div className='hero-banner' id='landing-page'>
    <div className='hero-banner-text'>
      <h1 className='hero-banner-text__title'>Hello, I'm <span className='hero-banner-text__name'>T.J. Ruggles</span>.</h1>
      <h3 className='hero-banner-text__subtitle'>I'm a Front End Developer.</h3>
      <p className='hero-banner-text__paragraph'>Learn more about what I do</p>
      <AnchorLink href='#about'><div className="hero-banner-text__arrow"></div></AnchorLink>
    </div>
  </div>
);

export default HeroBanner;