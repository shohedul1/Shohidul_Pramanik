'use client';
//react awesome reveal animation
import { Fade } from "react-awesome-reveal";

import ProjectCart from "./ProjectCart"

const projectData = [
  {
    image: '/work/3.png',
    category: 'Portraits',
    name: "February 11, 2024",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,moi',
    link: '/',
    codepen: '/'
  },
  {
    image: '/work/5.png',
    category: 'Models',
    name: "April 22, 2023",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,moi',
    link: '/',
    codepen: '/'
  },
  {
    image: '/work/6.png',
    category: 'Places',
    name: "Nav 22, 2023",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,moi',
    link: '/',
    codepen: '/'
  },
  {
    image: '/work/7.png',
    category: 'Carporate',
    name: "Jan 14, 2021",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,moi',
    link: '/',
    codepen: '/'
  },
  {
    image: '/work/8.png',
    category: 'fashion',
    name: "Jan 31, 2023",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,moi',
    link: '/',
    codepen: '/'
  },
  {
    image: '/work/9.png',
    category: 'fashion',
    name: "Aug 31, 2022",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,moi',
    link: '/',
    codepen: '/'
  },
  {
    image: '/work/9.png',
    category: 'Corporate',
    name: "Mar 11, 2023",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,moi',
    link: '/',
    codepen: '/'
  },
  {
    image: '/work/1.png',
    category: 'Models',
    name: "Oct 23, 2019",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,moi',
    link: '/',
    codepen: '/'
  }
]
const Gallery = () => {
  const title = "section-title mb-8 xl:mb-16 text-center mx-auto";
  const gridDive = "grid xl:grid-cols-3 grid-cols-1 gap-x-2 gap-y-2";
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <Fade direction="up" delay={420} cascade damping={0.1} triggerOnce>
          <div className="flex items-center justify-center">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl uppercase font-semibold mb-4 tracking-[4px] bg-gradient-to-r text-center from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
              My Gallery
            </div>
          </div>
        </Fade>
        <div className={gridDive}>
          <Fade direction='up' delay={100} cascade damping={1e-1} triggerOnce={true}>
            {
              projectData.map((project, index) => {
                return (
                  <ProjectCart project={project} key={index} />
                )
              })
            }
          </Fade>

        </div>
      </div>
    </section>
  )
}

export default Gallery