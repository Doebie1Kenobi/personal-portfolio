import React from 'react'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Title from './components/Title'
import About from './components/About'
import Header from './components/Header'
import Intro from './components/Intro'
import Skills from './components/Skills'
import SideBarGraphic from './components/SideBarGraphic'

function App() {

  return (
    <div className='App bg-black'>
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />     
      <Footer />
    </div>
  )
}

export default App
