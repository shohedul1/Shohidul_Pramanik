'use client';

import ProjectCart from "@/components/home/fourSection/ProjectCart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";


const projectData = [
  {
    image: '/work/3.png',
    category: 'portraits',
    name: "Landing Page Desing",
    description: 'Shoot Data: 11/01/2017',
    link: 'https://awwwards-six.vercel.app',
    codepen: 'https://awwwards-six.vercel.app',
  },
  {
    image: '/work/9.png',
    category: 'portraits',
    name: "Portrait: Mark Adam",
    description: 'Shoot Data: 11/01/2017',
    link: 'https://travel-theta-liart.vercel.app',
    codepen: 'https://travel-theta-liart.vercel.app/'
  },
  {
    image: '/work/2.png',
    category: 'product',
    name: "Food desing lending page",
    description: 'Shoot Data: 08/01/2024',
    link: 'https://mern-food-app-two.vercel.app',
    codepen: 'https://mern-food-app-two.vercel.app'
  },
  {
    image: '/work/4.png',
    category: 'portraits',
    name: "Job desing platfrom",
    description: 'is a long established fact that a reader will be distracted ',
    link: 'https://job-board-tau-ten.vercel.app/find-jobs',
    codepen: 'https://job-board-tau-ten.vercel.app/find-jobs'
  },
  {
    image: '/work/5.png',
    category: 'portraits',
    name: "Langing page",
    description: 'Shoot Data: 09/03/2024',
    link: 'https://desing.vercel.app',
    codepen: 'https://desing.vercel.app'
  },
  {
    image: '/work/11.png',
    category: 'Fashion',
    name: "Mordan Landing page",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://building-a-responsive-hosting-website.vercel.app',
    codepen: 'https://building-a-responsive-hosting-website.vercel.app'
  },
  {
    image: '/work/11.png',
    category: 'Fashion',
    name: "Mordan web code page",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://lingo-lac.vercel.app',
    codepen: 'https://lingo-lac.vercel.app'
  },
  {
    image: '/work/11.png',
    category: 'Fashion',
    name: "Heart coding",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://agency-website-ebon.vercel.app',
    codepen: 'https://agency-website-ebon.vercel.app/'
  },
  {
    image: '/work/11.png',
    category: 'Fashion',
    name: "Heighly Web desing",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://loom-three.vercel.app',
    codepen: 'https://loom-three.vercel.app'
  },
  {
    image: '/work/11.png',
    category: 'Fashion',
    name: "Mordan web DESING",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://figma-convert.vercel.app',
    codepen: 'https://figma-convert.vercel.app'
  },
  {
    image: '/work/11.png',
    category: 'Fashion',
    name: "Mordan Job web",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://jobportalyt.vercel.app',
    codepen: ''
  },
  {
    image: '/work/11.png',
    category: 'Fashion',
    name: "Mordan Bloging web",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://next-js-blog-mern-application.vercel.app',
    codepen: 'https://next-js-blog-mern-application.vercel.app'
  },
  {
    image: '/work/11.png',
    category: 'Fashion',
    name: "Mordan technology",
    description: 'Shoot Data: 13/01/2024',
    link: "https://nft-next-js-shop.vercel.app",
    codepen: 'https://nft-next-js-shop.vercel.app'
  },
  {
    image: '/work/11.png',
    category: 'Fashion',
    name: "Ecommerce desing web app",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://ecommer-desing.vercel.app',
    codepen: 'https://ecommer-desing.vercel.app'
  },
  {
    image: '/work/11.png',
    category: 'Fashion',
    name: "Mordan BOOK STORE WEB app",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://vite-mern-stact.vercel.app',
    codepen: 'https://vite-mern-stact.vercel.app'
  },
  {
    image: '/work/11.png',
    category: 'Fashion',
    name: "Mordan Movie web app",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://vite-movie-three.vercel.app',
    codepen: 'https://vite-movie-three.vercel.app'
  },
  {
    image: '/work/11.png',
    category: 'Fashion',
    name: "Mordan Portfolio my app",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://tranquil-alpaca-844f23.netlify.app',
    codepen: 'https://tranquil-alpaca-844f23.netlify.app'
  },
  
  {
    image: '/work/11.png',
    category: 'Fashion',
    name: "Mordan Ecommerce web app",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://celebrated-mochi-ef654b.netlify.app',
    codepen: 'https://celebrated-mochi-ef654b.netlify.app'
  },
  
  {
    image: '/work/11.png',
    category: 'Fashion',
    name: "Shopping website",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://symphonious-empanada-b4077e.netlify.app',
    codepen: 'https://symphonious-empanada-b4077e.netlify.app'
  },
  
  {
    image: '/work/11.png',
    category: 'Fashion',
    name: "Mordan Ecommerce",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://ecommerce-shopping1.netlify.app',
    codepen: 'https://ecommerce-shopping1.netlify.app'
  },
  
  {
    image: '/work/11.png',
    category: 'Fashion',
    name: "Mordan Landing page",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://nextjs-portfolio-app.netlify.app',
    codepen: 'https://nextjs-portfolio-app.netlify.app'
  },

  {
    image: '/work/11.png',
    category: 'Fashion',
    name: "Mordan Ecommerce Template",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://shoppin-website.netlify.app',
    codepen: 'https://shoppin-website.netlify.app'
  },
  {
    image: '/work/11.png',
    category: 'Fashion',
    name: "Mordan Portfolio web app",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://netshohidul6.netlify.app',
    codepen: 'https://netshohidul6.netlify.app'
  },
  {
    
    image: '/work/11.png',
    category: 'Fashion',
    name: "Mordan gaming web app",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://netshohidul2.netlify.app',
    codepen: 'https://netshohidul2.netlify.app'
  },
  
  
  
]

const uniqueCategories = [
  'all projects',
  ...Array.from(new Set(projectData.map((item) => item.category))),
];



const Portfolio = () => {
  const [categories, SetCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects'
      ? project
      : project.category === category;
  })

  const title = "section-title mb-8 xl:mb-16 text-center mx-auto";
  return (
    <section className=" min-h-screen pt-12 mb-40">
      <div className="container mx-auto">
        <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
          <h2 className={title}>My Portfolio</h2>
        </Fade>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
            <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none">
              {
                categories.map((category, index) => {
                  return (
                    <TabsTrigger
                      value={category}
                      key={index}
                      onClick={() => setCategory(category)}
                    >
                      {category}
                    </TabsTrigger>
                  )
                })
              }
            </TabsList>
          </Fade>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid gap-x-4 gap-y-4 grid-cols-1 lg:grid-cols-3">
            <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
              {
                filteredProjects.map((project, index) => {
                  return (
                    <TabsContent value={category} key={index}>
                      <ProjectCart project={project} />
                    </TabsContent>
                  )
                })
              }
            </Fade>
          </div>
        </Tabs>


      </div>
    </section>
  )
}

export default Portfolio