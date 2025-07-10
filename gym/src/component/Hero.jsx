import React ,{Suspense} from 'react'
import { Canvas , useFrame } from '@react-three/fiber'
import Herotxt from './Herotxt.jsx'
import ParallaxBackground from './parallexBackground.jsx'
import {OrbitControls ,Float } from '@react-three/drei'

import { easing } from "maath";
import Goku from './Goku.jsx'
import Loader from './Loader.jsx'
import { useMediaQuery } from 'react-responsive'
function Hero() {
 const  isMobile = useMediaQuery({ query: '(max-width: 853px)' })
  return (
    <section className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
      <Herotxt />
      <ParallaxBackground />
      <figure className="absolute inset-0" style={{width:"100vw" ,height:"100vh"}}>
        <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
          <Suspense fallback={<Loader/>}>
          <Float>
          <ambientLight intensity={1 } />   
           <Goku scale={isMobile && 0.0006} position={isMobile && [0, -0.6, 0]} />
            </Float>
            </Suspense>
            <Rig />
        </Canvas>
      </figure>
    </section>
  )
}
function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, [state.mouse.x/10,1+state.mouse.y /10 ,3],0.5, delta);
  });
}

export default Hero