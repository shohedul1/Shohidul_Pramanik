

'use client';
//react awesome reveal animation
import { Fade } from "react-awesome-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

const Faq = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='w-full pt-12 mb-6 xl:mb-24'>
          <Fade direction="up" delay={420} cascade damping={0.1} triggerOnce>
            <div className="flex items-center justify-center">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl uppercase font-semibold mb-4 tracking-[4px] bg-gradient-to-r text-center from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
                Our Studio
              </div>
            </div>
          </Fade>
          <div>
            <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
              <Accordion type='single' collapsible className='w-full text-black'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger>
                    <div className='ms-3'>
                      01.What technologies and tools do you use for development?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    But I Must explain to your how all this mistaken idea of denoucing pleasure and praising pain was born and I will give you. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-2'>
                  <AccordionTrigger>
                    <div className='ms-3'>
                      0.2 Do I need to come to your office to view my project?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Let me explain how the concept of streamlining communication and delivering high-quality results was developed. I’ll provide you with a complete overview of the systems and processes I use to ensure the best outcome for your project.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-3'>
                  <AccordionTrigger>
                    <div className='ms-3'>
                      03. How long have you been working as a web developer?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Let me explain how the idea of mastering coding practices and building efficient systems evolved. I will provide you with a detailed account of the process I follow to create reliable and innovative web solutions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq;
