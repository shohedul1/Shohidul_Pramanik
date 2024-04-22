import React from 'react'
import { Input } from '../../ui/input'
import { Label } from '../../ui/label'
import Link from 'next/link'
import { RiMenFill, RiBookmark3Fill,RiBodyScanFill,RiServiceFill } from 'react-icons/ri'
import { Button } from '../../ui/button'
import Socials from '../../Socials'
import HeroImg from './HeroImg'
import Badge from './Badge'

const Hero = () => {
  const mainDiv = 'flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left';
  const photography = 'text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]';
  const subtitle = 'subtile max-w-[590px] mt-4 mx-auto xl:mx-0';
  const subcribeButtonDiv = 'flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12 mt-4';
  const containerStyle = "flex gap-x-6 mx-auto xl:mx-0";
  const iconsStyles = 'text-foreground text-[22px] hover:text-primary transition-all';



  return (
    <section className='py-12 xl:py-24 h-[auto] bg-bottom'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          {/* lef side  */}
          <div className={mainDiv}>
            <div className={photography}>Protography</div>
            <h1 className='h1'>Let's make magic !</h1>
            <p className={subtitle}>
              We are fine art, rature & portrait film photographers from Son Frencisco,with a special love for natural light, medium format film cameras & whit freckles.
            </p>
            {/* subcribs button */}
            <div className={subcribeButtonDiv}>
              <div className='flex w-full gap-x-4'>
                <Label className='sr-only'>Email Address</Label>
                <Input type='email' id='email' placeholder='Email' />
                <Link href={'/contact'}>
                  <Button className='gap-x-2 bg-black'>
                    Subscribe <RiMenFill size={18} />
                  </Button>
                </Link>

              </div>
              {/* socials icons */}
            </div>
            <Socials containerStyle={containerStyle} iconsStyles={iconsStyles} />
          </div>
          {/* benner image */}
          <div className='hidden xl:flex relative'>
            <HeroImg imgSrc='/about/photography.svg' containerStyles='w-[475px] bg-no-repeat relative bg-bottom' />
          </div>
        </div>
        {/* badge section */}
        <div className='py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
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
                  <Badge icon={<RiServiceFill/>}
                    endCountNum={79}
                    endCountText='+'
                    badgeText=''
                  />
                </dd>
              </div>

            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero