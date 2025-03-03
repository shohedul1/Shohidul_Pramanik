'use client';
//react awesome reveal animation
import { Fade } from "react-awesome-reveal";

import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/solid'
const features = [
  {
    name: 'PHOTOGRAPHY',
    description: 'Studio comes with elements mode specifically for photopraphers,including the client list, password protected pages,and the proofing gallery',
    icon: ArrowPathIcon
  },
  {
    name: 'PORTFOLIO LIST',
    description: 'use are portfolio list to create galleries of your work.It is easy intuitive,and most Importan all.You work is sure to command attention',
    icon: CloudArrowUpIcon
  },
  {
    name: 'FULLY CUSTOMISABLE',
    description: 'It is a full siexble theme, all elements page and every other aspect of you website can be effortlessly adopted to fit your specific needs',
    icon: FingerPrintIcon
  },
  {
    name: 'FREE PLUGINS',
    description: 'Studio comes with elements mode specifically for photopraphers,including the client list, password protected pages,and the proofing gallery',
    icon: LockClosedIcon
  }
]
const Features = () => {
  const title = 'section-title mb-2 xl:mb-3 text-center mx-auto';
  const Everything = 'mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-black dark:text-white';
  const grid = 'grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16';
  const desc = 'mt-6 text-lg leading-8 text-black dark:text-white';
  const dtStyle = 'text-base font-semibold leading-7 text-muted-foreground justify-center';
  const iconStyle = 'flex flex-col w-[100px] h-[100px] bg-primary rounded-full items-center justify-center mb-4';

  return (
    <section className='pb-12 xl:py-12 '>
      <div className='container mx-auto '>
        <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
          <h2 className={title}>Key Features</h2>
        </Fade>
        <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>

        </Fade>
        <div className='flex flex-col'>
          <div className='mx-auto max-w-7xl text-center'>
            <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
              <p className={Everything}>
                Everything you need to faster.
              </p>
            </Fade>
            <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
              <p className={desc}>
                It&apos;s wide array of extremely useful & user-friendly elements and features turn website creation into a cakewalk.Get started now & see just how easy it is to make the website you always wanted.
              </p>
            </Fade>
          </div>
        </div>
        {/* features lists */}
        <div className='mx-auto mt-16 max-w-2xl ms:mt-20 lg:mt-24 lg:max-w-4xl'>
            <dl className={grid}>
            <Fade direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true}>

              {
                features.map((feature) => (
                  <div key={feature.name}
                    className='relative hover:scale-110 transition-all'
                  >
                    <dt className={dtStyle}>
                      <div className={iconStyle}>
                        <feature.icon
                          className='h-[36px] w-[36px] text-white'
                          aria-hidden="true"
                        />
                      </div>
                      <div className='text-black dark:text-white'>
                        {feature.name}
                      </div>
                    </dt>
                    <dd className='mt-2 text-base leading-7'>
                      {feature.description}
                    </dd>

                  </div>
                ))
              }
          </Fade>
            </dl>
        </div>
      </div>
    </section>
  )
}

export default Features