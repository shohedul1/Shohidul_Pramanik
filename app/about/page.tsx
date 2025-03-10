'use client';
import { Fade } from "react-awesome-reveal";
import { RiRidingFill, RiUserHeartFill, RiStarHalfSLine, RiVidiconFill, RiVipCrown2Fill, Ri24HoursFill } from "react-icons/ri";
import Image from "next/image";
const infoData = [

  {
    icon: <RiRidingFill size={20} />,
    text: 'MD:SHOHIDUL PRAMANIK',
    name: 'Name:'
  },
  {
    icon: <RiUserHeartFill size={20} />,
    text: '01758225368',
    name: 'Contact:'

  },
  {
    icon: <RiStarHalfSLine size={20} />,
    text: 'shohidulpramanik94@gmail.com',
    name: 'Email:'
  },
  {
    icon: <RiVidiconFill size={20} />,
    text: 'Bath on 02 jan, 2003',
    name: 'Date of Birth:'
  },
  {
    icon: <RiVipCrown2Fill size={20} />,
    text: '1.Higher Secondary Certificate (HSC) Institution: Gosaibri College, Bogura',
    education: "2.Honours in Zoology",
    name: 'Education:'

  },

  {
    icon: <Ri24HoursFill size={20} />,
    text: 'Sherpur,Dhunat,Bogra',
    name: 'Location:'
  },
]


const About = () => {
  return (
    <section className="container mx-auto">
      <div className="py-5  mb-2 border-b-2 border-red-400 shadow-xl  overflow-hidden  shadow-blue-600 text-black  rounded-t-[25px] rounded-b-[50px]">
        <Fade direction="up" delay={420} cascade damping={0.1} triggerOnce>
          <div className="flex items-center justify-center">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl uppercase font-semibold mb-4 tracking-[4px] bg-gradient-to-r text-center from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              About Me
            </div>
          </div>
        </Fade>
        <div className="flex flex-col gap-20 xl:flex-row">
          {/* image */}
          <div className='relative flex-1 xl:flex'>
            <Fade direction='left' delay={600} cascade damping={1e-1} triggerOnce={true}>
              <Image width={500} alt="Shohidul Pramanik" height={500} src={"https://res.cloudinary.com/djhjt07rh/image/upload/v1738250962/shohidul_u3nbyf.jpg"} />
            </Fade>
          </div>
          <div className="flex-1">
            <div className="text-xl mt-12 xl:mt-3">
              <div className="">
                <Fade direction='right' delay={400} cascade damping={1e-1} triggerOnce={true}>
                  <h3 className="text-3xl mb-4 text-start">
                    Let&copy;s Build Your Perfect Web Project
                  </h3>
                </Fade>
                <Fade direction='right' delay={600} cascade damping={1e-1} triggerOnce={true}>
                  <p className=" text-start">
                    I am MD. Shohidul Pramanik, a passionate web developer dedicated to creating high-performance, user-centric applications. My expertise lies in designing and developing modern, scalable, and responsive web solutions that ensure a seamless user experience.
                  </p>
                </Fade>
                <Fade direction='right' delay={800} cascade damping={1e-1} triggerOnce={true}>
                  <p className="text-lg text-blue-400  text-start">
                    By blending traditional web development best practices with modern design trends and cutting-edge technologies, I build dynamic, engaging user experiences that elevate your brand and business.
                  </p>
                </Fade>
                {/* icons */}
                <div className="pt-5">
                  <Fade direction='right' delay={1000} cascade damping={1e-1} triggerOnce={true}>
                    {
                      infoData.map((item, index) => {
                        return (
                          <div key={index} className="flex mb-3">
                            <div className="flex gap-1">
                              <div className="text-primary">{item.icon}</div>
                              <div className="text-sm">{item.name}</div>
                            </div>
                            <div className="text-start text-sm flex flex-col gap-1">
                              <div>{item.text}</div>
                              <div>{item.education}</div>
                            </div>
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


