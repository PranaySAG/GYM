import React from 'react'
import Navbar from '../components/navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from './about.jsx'
import Projects from '../sections/Projects.jsx'

function Home() {
  return (
    <div className='container mx-auto max-w-7xl' >
      <Navbar />
      <Hero/>
      <About />  
      <Projects />
      {/* Add more sections as needed */}
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
    </div>
  )
}

export default Home