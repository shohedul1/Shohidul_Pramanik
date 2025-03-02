'use client';
import React, { useState } from 'react'
import { Input } from '../../ui/input'
import { Label } from '../../ui/label'
import { RiMenFill, RiBookmark3Fill, RiBodyScanFill, RiServiceFill } from 'react-icons/ri'
import { Button } from '../../ui/button'
import Socials from '../../Socials'
import Badge from './Badge'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
//react awesome reveal animation
import { Fade } from "react-awesome-reveal";
import Notification from '@/components/Notification/Notification';
import TypeWriter from './TypeWriter';
import { motion } from "framer-motion";
import Link from 'next/link';






const Hero = () => {

  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error('Please enter an email address.', {
        position: 'top-right',
      });
      return;
    }

    // If email is provided, show success toast
    toast.success('Subscription successful!', {
      position: 'top-right',
    });

    // Clear input after successful submission
    setEmail('');
  };


  const mainDiv = 'flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left';
  const photography = 'text-6xl uppercase font-semibold mb-4 text-primary tracking-[4px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ';
  const subtitle = 'subtile max-w-[590px] text-xl mt-4 mx-auto xl:mx-0';
  const subcribeButtonDiv = 'flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12 mt-4';
  const iconsStyles = 'text-foreground text-[22px] hover:text-primary transition-all';


  return (
    <>
      <section className='h-[auto] bg-bottom'>
        <div className='container mx-auto'>
          {
            <TypeWriter />
          }

          <div className='flex flex-col md:flex-row justify-between gap-x-8 '>
            {/* lef side  */}
            <div className={mainDiv}>
              <Fade direction='up' delay={420} cascade damping={1e-1} triggerOnce={true}>
                <div className={photography}>Web Coder</div>
              </Fade>
              <Fade direction='up' delay={620} cascade damping={1e-1} triggerOnce={true}>
                <h1 className='text-3xl'>Let&apos;s make web Application !</h1>
              </Fade>

              <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
                <div className='flex flex-col gap-5'>
                  <p className={subtitle}>
                    Get a Live Preview Before Delivery  Order Now and Grow Your Business!
                    {/* We are passionate MERN stack web developers from San Francisco, with a special love for clean code, intuitive user experiences, and building dynamic full-stack applications with modern tools like React, Node.js, and MongoDB */}
                  </p>
                  <div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                    >
                      <Link href={"/contact"} className='hover:bg-black hover:text-white dark:hover:bg-lime-500 dark:hover:text-white dark:bg-blue-600 px-4 py-2 bg-red-300 rounded-md '>
                        Contact Now
                      </Link>
                    </motion.button>
                  </div>

                </div>
              </Fade>
              {/* subcribs input and button section  */}
              <Fade direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true}>
                <form onSubmit={handleSubmit}>
                  <div className={subcribeButtonDiv}>
                    <div className='flex w-full gap-x-4'>
                      <Label className='sr-only'>Email Address</Label>
                      <Input
                        type='email'
                        name='email'
                        className='dark:placeholder:text-white'
                        placeholder='Enter Your Email ...'
                        value={email}
                        onChange={(e) => {
                          console.log('Current Email:', e.target.value);
                          setEmail(e.target.value);
                        }}
                      />
                      <Button type='submit' className='gap-x-2 bg-black'>
                        Subscribe <RiMenFill size={18} />
                      </Button>

                    </div>
                    {/* socials icons */}
                  </div>
                </form>
              </Fade>
              {/* social icon section */}
              <div className='flex justify-center gap-5 mt-20 xl:mt-0 relative '>
                <Fade direction='up' delay={620} cascade damping={1e-1} triggerOnce={true}>
                  <Socials containerStyle={"flex gap-x-6 mx-auto xl:mx-0 "} iconsStyles={iconsStyles} />
                </Fade>
                <div className='xl:hidden flex translate-x-[10%] -translate-y-1/2 '>

                  <Fade direction="up" delay={420} cascade damping={0.1} triggerOnce={true}>
                    <div className="w-40 h-40 rounded-full overflow-hidden">
                      <video
                        src="/about/Shohidul_Pramanick.mp4"
                        className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                        autoPlay
                        loop
                        muted
                      />
                    </div>
                  </Fade>
                </div>
              </div>

            </div>
            {/* benner image */}

            <Fade direction="right" delay={600} cascade damping={0.1} triggerOnce={true}>
              <div className="xl:flex hidden relative">
                <video
                  src="/about/Shohidul_Pramanick.mp4"
                  width={500}
                  height={500}
                  className="rounded-xl"
                  loop
                  controls
                />
              </div>
            </Fade>


          </div>
          {/* badge section */}
          {/* py-24 sm:py-32 xl:translate-y-0 -translate-y-20 */}
          <div className='py-24 sm:py-32 xl:translate-y-0 -translate-y-20'>
            {/* mx-auto max-w-7xl px-6 lg:px-8 */}
            <div className='flex items-center justify-center'>
              <div className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
                <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
                  {/* badge 1 */}
                  <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
                    <dt className='text-base leading-7 text-muted-foreground'>Years of Experience</dt>
                    <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                      <Badge icon={<RiBookmark3Fill />}
                        endCountNum={12}
                        endCountText='+'
                        badgeText=''
                      />
                    </dd>
                  </div>
                  {/* badge 2 */}
                  <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
                    <dt className='text-base leading-7 text-muted-foreground'>Followers</dt>
                    <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                      <Badge icon={<RiBodyScanFill />}
                        endCountNum={976}
                        endCountText=''
                        badgeText='k'
                      />
                    </dd>
                  </div>
                  {/* badge 3 */}
                  <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
                    <dt className='text-base leading-7 text-muted-foreground'>Project</dt>
                    <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                      <Badge icon={<RiServiceFill />}
                        endCountNum={79}
                        endCountText='+'
                        badgeText=''
                      />
                    </dd>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Notification />

    </>
  )
}

export default Hero