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
    link: '/',
    codepen: '/'
  },
  {
    image: '/work/2.png',
    category: 'product',
    name: "Portrait: Cosmetics",
    description: 'Shoot Data: 08/01/2024',
    link: '/',
    codepen: '/'
  },
  {
    image: '/work/4.png',
    category: 'portraits',
    name: "Canteen Website",
    description: ' is a long established fact that a reader will be distracted ',
    link: '/',
    codepen: '/'
  },
  {
    image: '/work/5.png',
    category: 'portraits',
    name: "Portrait: Elase Liv",
    description: 'Shoot Data: 09/03/2024',
    link: '/',
    codepen: '/'
  },
  {
    image: '/work/11.png',
    category: 'Fashion',
    name: "Fashion: Adom",
    description: 'Shoot Data: 13/01/2024',
    link: '/',
    codepen: '/'
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
    <section className="min-h-screen pt-12">
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