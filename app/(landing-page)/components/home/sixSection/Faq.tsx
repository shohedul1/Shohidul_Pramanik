'use client';

// React Awesome Reveal animation
import { Fade } from "react-awesome-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';

const faqItems = [
  {
    id: "item-1",
    question: "01. What technologies and tools do you use for development?",
    answer:
      "But I must explain to you how this mistaken idea of denouncing pleasure and praising pain was born. I will give you a complete account of the system.",
  },
  {
    id: "item-2",
    question: "02. Do I need to come to your office to view my project?",
    answer:
      "Let me explain how the concept of streamlining communication and delivering high-quality results was developed. I’ll provide you with a complete overview of the systems and processes I use.",
  },
  {
    id: "item-3",
    question: "03. How long have you been working as a web developer?",
    answer:
      "Let me explain how the idea of mastering coding practices and building efficient systems evolved. I will provide you with a detailed account of the process I follow to create reliable web solutions.",
  },
];

const Faq = () => {
  return (
    <section>
      <div className="w-full pt-12 mb-6 xl:mb-24">
        <div className="container mx-auto">
          {/* Title */}
          <Fade direction="up" delay={420} cascade damping={0.1} triggerOnce>
            <div className="flex items-center justify-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl uppercase font-semibold mb-4 tracking-[4px] bg-gradient-to-r text-center from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                My Studio
              </h2>
            </div>
          </Fade>

          {/* FAQ Section */}
          <Fade direction="up" delay={600} cascade damping={0.1} triggerOnce>
            <Accordion type="single" collapsible className="w-full text-black">
              {faqItems.map((faq) => (
                <AccordionItem className="border-b" key={faq.id} value={faq.id}>
                  <AccordionTrigger>
                    <div className="ms-3">{faq.question}</div>
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Faq;
