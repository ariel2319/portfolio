import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import './styles/style.css/'

function App() {


  return (
    <div className='container-general'>

      <div className='app-navbar'>
        <NavBar />
      </div>

      <div className='app-body'>
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
      
    </div>
  )
}

export default App
