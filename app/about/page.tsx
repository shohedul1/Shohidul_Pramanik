import HeroImg from "@/components/home/fristSection/HeroImg";
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
  const title = "section-title mb-8 xl:mb-8 text-center mx-auto";
  return (
    <section className="pb-12 xl:py-24 min-h-screen">
      <div className="container mx-auto">
        <h2 className={title}>About me</h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className='relative flex-1 xl:flex'>
            <HeroImg imgSrc='/about/profile.png' containerStyles='relative' />
          </div>
          <div className="flex-1">
            <div className="text-xl mt-12 xl:mt-3">
              <div className="text-center xl:text-left">
                <h3 className="h3 mb-4">Let&copy;s plan your perfect photoshoot</h3>
                <p className="subtitle max-w-xl mx-auto xl:mx-0">Our mission is to futher develop the overall excellence of photography and to capture memories that will be cherished for a lifetimem, in the timeless photographs.</p>
                <p className="subtitle max-w-xl mx-auto xl:mx-0">
                  Professional photography services combine the classic knowledge of traditional photographic portraiture and contemparary style.
                </p>
                {/* icons */}
                <div className="grid xl:grid-cols-2 gap-4 mb-12">
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