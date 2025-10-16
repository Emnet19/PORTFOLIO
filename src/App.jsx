import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import  About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
function App() {
  return(
    <div className='bg-[#0b1120] scroll-smooth'>
    
          <section id='home'><Home/></section>
          <section id='about'><About/></section>
          <secton id='skills'><Skills/></secton>
          <section id='projects'><Projects/></section>
          {/* <section id='projects'><Projects/></section> */}
          <section id='contact'><Contact/></section> 
      
    </div>
  )
}

export default App
