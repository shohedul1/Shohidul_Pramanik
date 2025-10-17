'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import ProjectCart from "../../components/home/fourSection/ProjectCart";


const projectData = [
  {
    image: '/work/awwwards.png',
    category: 'portraits',
    name: "Landing Page Desing",
    description: 'Shoot Data: 11/01/2017',
    link: 'https://awwwards-six.vercel.app',
    codepen: 'https://awwwards-six.vercel.app',
  },
  {
    image: '/work/travel.png',
    category: 'portraits',
    name: "Travel web app",
    description: 'Shoot Data: 11/01/2017',
    link: 'https://travel-theta-liart.vercel.app',
    codepen: 'https://travel-theta-liart.vercel.app/'
  },
  {
    image: '/work/Food_Web.png',
    category: 'product',
    name: "Food desing lending page",
    description: 'Shoot Data: 08/01/2024',
    link: 'https://mern-food-app-two.vercel.app',
    codepen: 'https://mern-food-app-two.vercel.app'
  },
  {
    image: '/work/Job_web.png',
    category: 'portraits',
    name: "Job desing platfrom",
    description: 'is a long established fact that a reader will be distracted ',
    link: 'https://job-board-tau-ten.vercel.app/find-jobs',
    codepen: 'https://job-board-tau-ten.vercel.app/find-jobs'
  },
  {
    image: '/work/Template.png',
    category: 'portraits',
    name: "Langing page",
    description: 'Shoot Data: 09/03/2024',
    link: 'https://desing.vercel.app',
    codepen: 'https://desing.vercel.app'
  },
  {
    image: '/work/benner.png',
    category: 'portraits',
    name: "Mordan Landing page",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://building-a-responsive-hosting-website.vercel.app',
    codepen: 'https://building-a-responsive-hosting-website.vercel.app'
  },
  {
    image: '/work/Lingo.png',
    category: 'portraits',
    name: "Mordan web code page",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://lingo-lac.vercel.app',
    codepen: 'https://lingo-lac.vercel.app'
  },
  {
    image: '/work/agance.png',
    category: 'Fashion',
    name: "Heart coding",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://agency-website-ebon.vercel.app',
    codepen: 'https://agency-website-ebon.vercel.app/'
  },
  {
    image: '/work/loom.png',
    category: 'Fashion',
    name: "Heighly Web desing",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://loom-three.vercel.app',
    codepen: 'https://loom-three.vercel.app'
  },
  {
    image: '/work/FigmaConvert.png',
    category: 'product',
    name: "Mordan web DESING",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://figma-convert.vercel.app',
    codepen: 'https://figma-convert.vercel.app'
  },
  {
    image: '/work/Job_Template.png',
    category: 'product',
    name: "Mordan Job web",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://jobportalyt.vercel.app',
    codepen: 'https://jobportalyt.vercel.app'
  },
  {
    image: '/work/Blogweb.png',
    category: 'Fashion',
    name: "Mordan Bloging web",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://next-js-blog-mern-application.vercel.app',
    codepen: 'https://next-js-blog-mern-application.vercel.app'
  },
  {
    image: '/work/BlogAPP.png',
    category: 'Fashion',
    name: "Mordan technology",
    description: 'Shoot Data: 13/01/2024',
    link: "https://nft-next-js-shop.vercel.app",
    codepen: 'https://nft-next-js-shop.vercel.app'
  },
  {
    image: '/work/Ecommerce.png',
    category: 'product',
    name: "Ecommerce desing web app",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://ecommer-desing.vercel.app',
    codepen: 'https://ecommer-desing.vercel.app'
  },
  {
    image: '/work/bookStore.png',
    category: 'product',
    name: "Mordan BOOK STORE WEB app",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://vite-mern-stact.vercel.app',
    codepen: 'https://vite-mern-stact.vercel.app'
  },
  {
    image: '/work/Movide.png',
    category: 'Fashion',
    name: "Mordan Movie web app",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://vite-movie-three.vercel.app',
    codepen: 'https://vite-movie-three.vercel.app'
  },
  {
    image: '/work/Tranquind.png',
    category: 'product',
    name: "Mordan Portfolio my app",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://tranquil-alpaca-844f23.netlify.app',
    codepen: 'https://tranquil-alpaca-844f23.netlify.app'
  },

  {
    image: '/work/Ecommerce_web.png',
    category: 'Fashion',
    name: "Mordan Ecommerce web app",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://celebrated-mochi-ef654b.netlify.app',
    codepen: 'https://celebrated-mochi-ef654b.netlify.app'
  },

  {
    image: '/work/shopping.png',
    category: 'Fashion',
    name: "Shopping website",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://symphonious-empanada-b4077e.netlify.app',
    codepen: 'https://symphonious-empanada-b4077e.netlify.app'
  },

  {
    image: '/work/Ecommer_application.png',
    category: 'Fashion',
    name: "Mordan Ecommerce",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://ecommerce-shopping1.netlify.app',
    codepen: 'https://ecommerce-shopping1.netlify.app'
  },

  {
    image: '/work/Protfolio.png',
    category: 'Fashion',
    name: "Mordan Landing page",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://nextjs-portfolio-app.netlify.app',
    codepen: 'https://nextjs-portfolio-app.netlify.app'
  },

  {
    image: '/work/New_commerce.png',
    category: 'Fashion',
    name: "Mordan Ecommerce Template",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://shoppin-website.netlify.app',
    codepen: 'https://shoppin-website.netlify.app'
  },
  {
    image: '/work/myProtfolio.png',
    category: 'Fashion',
    name: "Mordan Portfolio web app",
    description: 'Shoot Data: 13/01/2024',
    link: 'https://netshohidul6.netlify.app',
    codepen: 'https://netshohidul6.netlify.app'
  },
  {

    image: '/work/game.png',
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

  return (
    <section className="min-h-screen mb-40">
      <div className="container mx-auto">
        <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
          <div className="flex items-center justify-center pb-2">
            <div className="text-4xl sm:text-5xl  md:text-6xl lg:text-6xl xl:text-7xl uppercase font-semibold mb-4 tracking-[4px] bg-gradient-to-r text-center from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              My Portfolio
            </div>
          </div>
        </Fade>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
            <TabsList className="w-full grid h-full grid-cols-2 md:grid-cols-4 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none">
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