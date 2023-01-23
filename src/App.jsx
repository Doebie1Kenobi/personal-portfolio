import React from 'react'
import Contact from './components/Contact'
import SoftwarePortfolio from './components/SoftwarePortfolio'
import Footer from './components/Footer'
import Title from './components/Title'
import About from './components/About'
import Header from './components/Header'
import Intro from './components/Intro'

function App() {

  return (
    <div className='App'>
      <Header />
      <About />
      <SoftwarePortfolio />
      <Contact />      
      <Footer />
    </div>
  )
}

export default App
