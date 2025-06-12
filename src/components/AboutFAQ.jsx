import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqData } from '../constants/FAQ';

export function AboutFAQ() {
  return (
    <section className='bg-[var(--primary)] text-white py-16 mb-200 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-start lg:items-center justify-between'>
      {/* Left Section: Text Content */}
      <div className='lg:w-1/2 mb-12 lg:mb-0 lg:pr-12'>
        <h2 className='text-4xl md:text-5xl font-bold mb-4 about-head'>
          Any question? <br />
          <span className='text-white'>we got you.</span>
        </h2>
        <p className='text-lg leading-relaxed text-gray-300'>
          Here you'll find quick answers to common questions about our school,
          including admissions, academics, and student life. For more details,
          feel free to contact us.
        </p>
      </div>

      {/* Right Section: Accordion */}
      <div className='lg:w-1/2 w-full'>
        <Accordion type='single' collapsible className='w-full space-y-5'>
          {faqData.map((item, index) => (
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
      </div>
    </section>
  );
}
