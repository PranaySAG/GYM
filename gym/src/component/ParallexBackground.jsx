import { motion,useScroll, useSpring, useTransform } from 'motion/react';
import React, { use } from 'react'

function ParallaxBackground() {
  const {scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, {
    damping: 100,
  });
  const mountain3y = useTransform(x, [0, 1], ['0%', '100%']);
  const planetY = useTransform(x, [0, 1], ['0%', '-20%']);
  const mountain2y = useTransform(x, [0, 1], ['0%', '60%']);
  const mountain1y = useTransform(x, [0, 1], ['0%', '30%']);
  return (
    <section  className='absolute inset-0 bg-black/40'>
      <div className='relative h-screen overflow-y-hidden'>
        {/* background */}
        <motion.div className='absolute inset-0 w-full h-screen -z-50'
        style={{
            backgroundImage:  "url(/assets/bro.jpg)",
            backgroundSize: 'contain',
            backgroundPosition: 'bottom',
      
        }}
        ></motion.div>
        {/* moutain */}
        <motion.div 
        className='absolute inset-0 -z-40 '
        style={{
            backgroundImage: "url(/assets/name.png)",
            backgroundSize: 'contain',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
            y: mountain3y,
        }}
        ></motion.div>
        {/* planet */}
        <motion.div className='absolute inset-0 w-full  -z-30'
        style={{
            backgroundImage: "url(/assets/bgless.png)",
            backgroundSize: 'contain',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgba(0, 0, 0, 0.1 )',
            backgroundBlendMode: 'overlay',
            y: planetY,
        }}
        ></motion.div>
        {/* moutain-layer-2 */}
        <motion.div className='absolute inset-0 w-full h-screen -z-20'
        style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat', 
            y: mountain2y,
        }}
        ></motion.div>
        {/* moutain-layer-1 */}
        <motion.div
         className='absolute inset-0 w-full h-screen -z-10'
        style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
            y: mountain1y,
        }}
        ></motion.div>
      </div>
  </section>
  )
}

export default ParallaxBackground