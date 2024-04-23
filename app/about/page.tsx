'use client';
import HeroImg from "@/components/home/fristSection/HeroImg";
import { Fade } from "react-awesome-reveal";
import { RiRidingFill, RiUserHeartFill, RiStarHalfSLine, RiVidiconFill, RiVipCrown2Fill, Ri24HoursFill } from "react-icons/ri";
const infoData = [

  {
    icon: <RiRidingFill size={20} />,
    text: 'Mrs Smith',
  },
  {
    icon: <RiUserHeartFill size={20} />,
    text: '+91 99 787 7761',
  },
  {
    icon: <RiStarHalfSLine size={20} />,
    text: 'photography@gamil.com',
  },
  {
    icon: <RiVidiconFill size={20} />,
    text: 'Bath on 23 jan, 2003',
  },
  {
    icon: <RiVipCrown2Fill size={20} />,
    text: 'Master Degree',
  },

  {
    icon: <Ri24HoursFill size={20} />,
    text: '22, Ella Statu, Texas, US',
  },
]


const About = () => {
  const title = "section-title mb-8 xl:mb-8 text-center mx-auto  ";
  return (
    <section className="pb-12 xl:py-24 min-h-screen  overflow-hidden">
      <div className="container mx-auto">
        <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
          <h2 className={title}>About me</h2>
        </Fade>
        <div className="flex flex-col gap-20 xl:flex-row">
          {/* image */}
          <div className='relative flex-1 xl:flex'>
            <Fade direction='left' delay={600} cascade damping={1e-1} triggerOnce={true}>
              <HeroImg imgSrc='https://res.cloudinary.com/djhjt07rh/image/upload/v1713904914/437585332_976969253793270_3287469938990990648_n_dtckaj.jpg' 
              containerStyles='relative overflow-x-hidden' />
            </Fade>
          </div>
          <div className="flex-1">
            <div className="text-xl mt-12 xl:mt-3">
              <div className="text-center xl:text-left">
                <Fade direction='right' delay={400} cascade damping={1e-1} triggerOnce={true}>
                  <h3 className="h3 mb-4">Let&copy;s plan your perfect photoshoot</h3>
                </Fade>
                <Fade direction='right' delay={600} cascade damping={1e-1} triggerOnce={true}>
                  <p className="subtitle max-w-xl mx-auto xl:mx-0">Our mission is to futher develop the overall excellence of photography and to capture memories that will be cherished for a lifetimem, in the timeless photographs.</p>
                </Fade>
                <Fade direction='right' delay={800} cascade damping={1e-1} triggerOnce={true}>
                  <p className="subtitle max-w-xl mx-auto xl:mx-0">
                    Professional photography services combine the classic knowledge of traditional photographic portraiture and contemparary style.
                  </p>
                </Fade>
                {/* icons */}
                <div className="grid xl:grid-cols-2 gap-4 mb-12">
                  <Fade direction='right' delay={1000} cascade damping={1e-1} triggerOnce={true}>
                    {
                      infoData.map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="text-primary" >{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        )
                      })
                    }
                  </Fade>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About