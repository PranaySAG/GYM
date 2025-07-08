import React from 'react'
import {LampDemo , LampContainer} from './Ani.jsx'
import { FlipWords } from './Flip.jsx'
import {motion} from 'motion/react'
function Herotxt() {
     const words = ['Bulk', 'Cut', 'Maintain'];
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };
  return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
        {/* for destop view */}
        <div className="flex-col hidden md:flex c-space">
            <motion.h1 className='text-3xl font-medium'
             variants={variants} 
            initial="hidden" animate="visible" 
            transition={{ delay: 0.2 }} >Hey</motion.h1>
            <div className='flex flex-col items-start'>
                <motion.p 
                variants={variants} 
                initial="hidden"
                 animate="visible" 
                 transition={{ delay: 0.5 }}
                  className='text-5xl font-medium text-neutral-300'>
                    providing the best <br/> fitness experience for you
                </motion.p>
                <motion.div
                 variants={variants} 
                initial="hidden"
                 animate="visible" 
                  
                > <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            /></motion.div>
                
            </div>
        </div>
        {/* for mobile view */}
        <div className='flex-col flex md:hidden space-y-6'>
            <motion.p
             variants={variants} 
                initial="hidden"
                 animate="visible" 
                 transition={{ delay: 0.4 }}
            className="text-4xl font-medium text-neutral-300 text-start">Hey</motion.p>
            <div className='flex flex-col items-start space-y-4'>
                <motion.p 
                 variants={variants} 
                initial="hidden"
                 animate="visible" 
                 transition={{ delay: 0.7 }}
                className="text-5xl font-black text-neutral-300">BodyBulider</motion.p>
                <motion.div><FlipWords words={['Bulk', 'Cut', 'Maintain']} className="text-5xl font-black text-neutral-300"/></motion.div>
                <motion.p 
                 variants={variants} 
                initial="hidden"
                 animate="visible" 
                 transition={{ delay: 1 }}
                className='text-4xl font-black text-neutral-300'>Build your dream body</motion.p>
            </div>
            </div>
        </div>
  )
}

export default Herotxt