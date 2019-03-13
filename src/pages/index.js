import React from "react"
import HeroBanner from './../components/hero-banner'
import About from './../components/about'
import Projects from './../components/projects'
import Modal from './../components/modal'
import Contact from './../components/contact'
import Footer from './../components/footer'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    }
  }
  
  showModal = () => {
    this.setState({
      modalVisible: true
    })
  };
  hideModal = () => {
    this.setState({
      modalVisible: false
    })
  };

  render() {
    return (
      <div>
        <HeroBanner></HeroBanner>
        <About></About>
        <Projects handleOpenModal={this.showModal}></Projects>
        <Modal handleCloseModal={this.hideModal} isOpen={this.state.modalVisible}></Modal>
        <Contact></Contact>
        <Footer></Footer> 
      </div> 
    )    
  }
};

export default App;


  
