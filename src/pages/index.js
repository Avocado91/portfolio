import React from "react"
import HeroBanner from '../components/HeroBanner'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

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


  
