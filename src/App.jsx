import { useState } from 'react'
import Hero from "./Components/Hero/Hero.jsx"
import Projects from "./Components/Projects/Projects.jsx"
import Skills from "./Components/Skills/Skills.jsx"
import Contact from './Components/Contact/Contact.jsx'
import AppBar from "./Components/AppBar/AppBar.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import './App.css'

function App() {

  return (
    <>
  <AppBar />
  <Hero />
  <Projects />
  <Skills />
  <Contact />
  <Footer />
    </>
  )
}

export default App
