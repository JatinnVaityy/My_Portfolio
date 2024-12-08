import { useState } from 'react'
import Navbar from './components/Navbar'
import Aboutme from './pages/Aboutme'
import Contact from './pages/Contact'
import LandingPage from './pages/LandingPage'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Timeline from './pages/Timeline'

function App() {
  return (
    <>
      <Navbar/>
      <LandingPage/>
      <Aboutme/>
      <Skills/>
      <Timeline/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
