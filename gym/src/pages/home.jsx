import React from 'react'
import Navbar from '../component/navbar.jsx'
import Hero from '../component/hero.jsx'
function Home() {
  return (
    <div className='container mx-auto max-w-7xl' >
      <Navbar />
      <Hero/>
    </div>
  )
}

export default Home