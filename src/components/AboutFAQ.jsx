import React from 'react'; // React is implicitly imported in newer React versions for JSX, but good practice to keep
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'; // Assuming this path is correct for your shadcn/ui components
import { faqData } from '../constants/FAQ'; // Ensure this path is correct
import AnimateOnScroll from './AnimateOnScroll'; // Adjust path as necessary, e.g., '../components/AnimateOnScroll' if AboutFAQ is also in 'src'

export function AboutFAQ() {
  return (
    <section className='bg-[var(--primary)] text-white py-16 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-start lg:items-center justify-between'>
      {/* Left Section: Text Content - Wrapped with AnimateOnScroll */}
      <AnimateOnScroll
        className='lg:w-1/2 mb-12 lg:mb-0 lg:pr-12'
        // Using default animation (fade-in from bottom) which works well here
      >
        <h2 className='text-4xl md:text-5xl font-bold mb-4 about-head'>
          Any question? <br />
          <span className='text-white'>we got you.</span>
        </h2>
        <p className='text-lg leading-relaxed text-gray-300'>
          Here you'll find quick answers to common questions about our school,
          including admissions, academics, and student life. For more details,
          feel free to contact us.
        </p>
      </AnimateOnScroll>

      {/* Right Section: Accordion - Wrapped with AnimateOnScroll */}
      <AnimateOnScroll
        className='lg:w-1/2 w-full'
        delay='delay-200' // Adds a slight delay to this section
        // Optionally, you could make it slide from the right for a different effect:
        // animationClasses="opacity-0 translate-x-10"
        // inViewClasses="opacity-100 translate-x-0"
      >
        <Accordion type='single' collapsible className='w-full space-y-5'>
          {faqData.map((item, index) => (
            // You could even wrap each AccordionItem individually with AnimateOnScroll
            // and apply further delays for a very staggered effect, but this might be overkill.
            // For now, the whole accordion animates in as one block.
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className='cursor-pointer text-lg md:text-xl text-left py-4 px-6 duration-200'>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className='text-gray-300 px-6 py-4'>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimateOnScroll>
    </section>
  );
}
