import React from 'react';
import { motion } from 'framer-motion';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

// Animation Variant
const easeOutCenter = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 3, ease: 'easeOut' },
  },
};

export default function MobileFooterLinks() {
  return (
    <div className='lg:hidden w-full flex flex-col flex-wrap justify-around items-start gap-y-2'>
      {/* Quick Links Section - Mobile/Tablet */}
      <motion.div
        className='w-full px-4 text-start'
        variants={easeOutCenter}
        initial='hidden'
        animate='visible'
      >
        <Accordion type='single' collapsible>
          <AccordionItem value='quick-links'>
            <AccordionTrigger className='footer-head md:text-lg'>
              Quick Links
            </AccordionTrigger>
            <AccordionContent className='mt-2'>
              <div className='flex flex-col gap-2'>
                <p className='quick-link md:text-lg'>Contact Us</p>
                <p className='quick-link md:text-lg'>FAQs</p>
                <p className='quick-link md:text-lg'>Gallery</p>
                <p className='quick-link md:text-lg'>Admissions</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>

      {/* Navigation Section - Mobile/Tablet */}
      <motion.div
        className='w-full px-4 xl:px-0 text-start'
        variants={easeOutCenter}
        initial='hidden'
        animate='visible'
      >
        <Accordion type='single' collapsible>
          <AccordionItem value='navigation'>
            <AccordionTrigger className='footer-head md:text-lg'>
              Navigation
            </AccordionTrigger>
            <AccordionContent className='mt-2'>
              <div className='flex flex-col gap-2'>
                <p className='quick-link md:text-lg'>Mission</p>
                <p className='quick-link md:text-lg'>Vision</p>
                <p className='quick-link md:text-lg'>About Us</p>
                <p className='quick-link md:text-lg'>Academics</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>

      {/* Get In Touch Section - Mobile/Tablet */}
      <motion.div
        className='w-full xl:mt-1 text-center'
        variants={easeOutCenter}
        initial='hidden'
        animate='visible'
      >
        <Accordion type='single' collapsible>
          <AccordionItem value='get-in-touch'>
            <AccordionTrigger className='footer-head text-start md:text-center xl:text-start px-4 xl:p-0 md:text-lg'>
              Get in touch
            </AccordionTrigger>
            <AccordionContent className='px-5 mt-2'>
              <div className='flex mb-4 items-start'>
                <div className='mr-2 mt-1'>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: 'white', fontSize: '18px' }}
                  />
                </div>
                <p className='quick-link text-start md:text-lg'>
                  123 Example Street,
                  <br />
                  Victoria Island, Lagos,
                  <br />
                  Nigeria
                </p>
              </div>

              <div className='flex mb-4 items-center'>
                <div className='mr-2'>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: 'white', fontSize: '18px' }}
                  />
                </div>
                <p className='quick-link md:text-lg'>info@example.com</p>
              </div>

              <div className='flex items-center'>
                <div className='mr-2'>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: 'white', fontSize: '18px' }}
                  />
                </div>
                <p className='quick-link md:text-lg'>
                  07012345677, 07012345677
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
}
