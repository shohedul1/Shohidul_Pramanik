import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

const Faq = () => {
  return (
   <section>
    <div className='container mx-auto'>
      <div className='w-full pt-12 mb-6 xl:mb-24'>
        <h2 className='section-title mb-12 text-center mx-auto'>Our Studio</h2>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>
              <div className='ms-3'>
                0.1 What kind of photography equipment do you use?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              But I Must explain to your how all this mistaken idea of denoucing pleasure and praising pain was born and I will give you.But I must explain to you how all this mistakenn idea of denounicng pleasure and praising pain was born and I will give you a complete accout of the system.
            </AccordionContent>

          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>
              <div className='ms-3'>
                0.2 Do I hove to come your studio ot view my photos?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              But I Must explain to your how all this mistaken idea of denoucing pleasure and praising pain was born and I will give you.But I must explain to you how all this mistakenn idea of denounicng pleasure and praising pain was born and I will give you a complete accout of the system.
            </AccordionContent>

          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>
              <div className='ms-3'>
                03. How long have you been in business
              </div>
            </AccordionTrigger>
            <AccordionContent>
              But I Must explain to your how all this mistaken idea of denoucing pleasure and praising pain was born and I will give you.But I must explain to you how all this mistakenn idea of denounicng pleasure and praising pain was born and I will give you a complete accout of the system.
            </AccordionContent>

          </AccordionItem>
        </Accordion>
      </div>
    </div>
   </section>
  )
}

export default Faq