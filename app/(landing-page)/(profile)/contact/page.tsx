
'use client';

import React from 'react'
import Form from './Form';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
  return (
    <section className=' w-full h-full relative overflow-hidden'>
      <div className='container mx-auto text-black'>
        <div className='grid md:grid-cols-2 gap-5 p-1'>
          {/* left content */}
          <div className='flex flex-col items-center'>
            <Fade direction='left' delay={600} cascade damping={1e-1} triggerOnce={true}>
              <div className='flex items-center justify-center'>
                <div className="text-xl  sm:text-3xl md:text-2xl lg:text-4xl uppercase font-semibold mb-4 tracking-[4px] bg-gradient-to-r text-center from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                  Let&copy;s work together.
                </div>
              </div>
            </Fade>
            <Fade direction='left' delay={400} cascade damping={1e-1} triggerOnce={true}>
              <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
                <span className='w-[30px] h-[2px] bg-primary'></span>
                We&copy;d love to hear from you! Reach out to us anytime.
              </div>
            </Fade>

            <Fade direction='left' delay={800} cascade damping={1e-1} triggerOnce={true}>
              <p className='subtitle max-w-[400px]'>
                Fill out the form below and we&copy;ll get back to you soon.
              </p>
            </Fade>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;