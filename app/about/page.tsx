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
  const title = "section-title mb-8 xl:mb-8 text-center mx-auto  ";
  return (
    <section className="py-5 min-h-screen mb-2 border-b-2 border-red-400 shadow-xl  overflow-hidden  shadow-blue-600 text-white rounded-t-[25px] rounded-b-[50px]">
      <div className="container">
        <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
          <h2 className={title}>About me</h2>
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
                  <p className="  text-white text-start">
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


