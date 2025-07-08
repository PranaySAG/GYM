import React from 'react'

function ParallaxBackground() {
  
  return (
    <section  className='absolute inset-0 bg-black/40'>
      <div className='relative h-screen overflow-y-hidden'>
        {/* background */}
        <div className='absolute inset-0 w-full h-screen -z-50'
        style={{
            backgroundImage:  "url(/assets/bro.jpg)",
            backgroundSize: 'contain',
            backgroundPosition: 'bottom',
        }}
        ></div>
        {/* moutain */}
        <div 
        className='absolute inset-0 -z-40 '
        style={{
            backgroundImage: "url(/assets/name.png)",
            backgroundSize: 'contain',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            backgroundBlendMode: 'overlay',
        }}
        ></div>
        {/* planet */}
        <div className='absolute inset-0 w-full  -z-30'
        style={{
            backgroundImage: "url(/assets/bgless.png)",
            backgroundSize: 'contain',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundColor: 'rgba(0, 0, 0, 0.1 )',
            backgroundBlendMode: 'overlay',
        }}
        ></div>
        {/* moutain-layer-2 */}
        <div className='absolute inset-0 w-full h-screen -z-20'
        style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',  

        }}
        ></div>
        {/* moutain-layer-1 */}
        <div
         className='absolute inset-0 w-full h-screen -z-10'
        style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
        }}
        ></div>
      </div>
  </section>
  )
}

export default ParallaxBackground