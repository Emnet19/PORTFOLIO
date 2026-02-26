import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import  About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Services from './pages/Service'
import Certificate from './pages/Certificate'
function App() {
  return(
    <div className='bg-[#0b1120] scroll-smooth'>
    
          <section id='home'><Home/></section>
          <section id='about'><About/></section>
          <secton id='skills'><Skills/></secton>
          <section id='services'><Services/></section>
          <section id='projects'><Projects/></section>
          <section id='Certificate'><Certificate/></section>
          <section id='contact'><Contact/></section> 
      
    </div>
  )
}

export default App
