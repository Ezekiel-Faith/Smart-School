import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqData } from '../constants/FAQ';
import AnimateOnScroll from './AnimateOnScroll';

export function AboutFAQ() {
  return (
    <section className='faq-container'>
      <AnimateOnScroll className='faq-content-left'>
        <h2 className='faq-content-left-title about-head-title-color'>
          Any question? <br />
          <span>we got you.</span>
        </h2>
        <p className=' text-[var(--color-white)]   about-hero-content-paragraph'>
          Here you'll find quick answers to common questions about our school,
          including admissions, academics, and student life. For more details,
          feel free to contact us.
        </p>
      </AnimateOnScroll>

      {/* Right Section */}
      <AnimateOnScroll className='faq-content-right' delay='delay-200'>
        <Accordion
          type='single'
          collapsible
          className='faq-accordion-container'
        >
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className='faq-accordion-trigger'>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className='faq-accordion-content'>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimateOnScroll>
    </section>
  );
}
