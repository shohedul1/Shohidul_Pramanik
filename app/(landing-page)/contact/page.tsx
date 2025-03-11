
'use client';

import React from 'react'
import Form from './Form';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
  return (
    <section className='min-h-screen overflow-hidden'>
      <div className='container mx-auto text-black'>
        <div className='grid xl:grid-cols-2 pt-12 mb-6 xl:mb-24'>
          {/* left content */}
          <div className='flex flex-col justify-center'>
            <Fade direction='left' delay={600} cascade damping={1e-1} triggerOnce={true}>
              <h1 className='h1 max-w-md mb-8'>Let&copy;s work together.</h1>
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
          <div className='lg:mt-24'>
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;