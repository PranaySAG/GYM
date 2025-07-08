import React from 'react'
import Herotxt from './Herotxt.jsx'
import ParallaxBackground from './parallexBackground.jsx'
function Hero() {
  return (
    <section className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
      <Herotxt />
      <ParallaxBackground />
    </section>
  )
}

export default Hero