import React from "react"
import HeroBanner from './../components/hero-banner'
import About from './../components/about'
import Projects from '../components/Projects'
import Contact from './../components/contact'
import Footer from './../components/footer'

import 'normalize.css'
import '../styles/styles.scss'

const App = () => (
  <div>
    <HeroBanner />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div> 
)    
  
export default App;


  
