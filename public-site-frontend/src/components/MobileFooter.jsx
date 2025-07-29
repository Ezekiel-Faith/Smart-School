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

const fontSize = '15px';
const marginTop = '3px';

export default function MobileFooterLinks() {
  return (
    <div className='lg:hidden flex flex-col gap-y-2 w-full text-white'>
      {/* Quick Links Section - Mobile/Tablet */}
      <motion.div
        className='w-full px-4'
        variants={easeOutCenter}
        initial='hidden'
        animate='visible'
      >
        <Accordion type='single' collapsible>
          <AccordionItem value='quick-links'>
            <AccordionTrigger className='mobile-footer-head'>
              Quick Links
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li className='mobile-accordion-content'>
                  <a href='/contact'>Contact Us</a>
                </li>
                <li className='mobile-accordion-content'>
                  <a href='/about-us#faq'>FAQs</a>
                </li>
                <li className='mobile-accordion-content'>
                  <a href='/gallery'>Gallery</a>
                </li>
                <li className='mobile-accordion-content'>
                  <a href='/admissions'>Admissions</a>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>

      {/* Navigation Section - Mobile/Tablet */}
      <motion.div
        className='w-full px-4'
        variants={easeOutCenter}
        initial='hidden'
        animate='visible'
      >
        <Accordion type='single' collapsible>
          <AccordionItem value='navigation'>
            <AccordionTrigger className='mobile-footer-head'>
              Navigation
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li className='mobile-accordion-content'>
                  <a href='/contact'>Mission</a>
                </li>
                <li className='mobile-accordion-content'>
                  <a href='/about-us#faq'>Vision</a>
                </li>
                <li className='mobile-accordion-content'>
                  <a href='/gallery'>About Us</a>
                </li>
                <li className='mobile-accordion-content'>
                  <a href='/admissions'>Academics</a>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>

      {/* Get In Touch Section - Mobile/Tablet */}
      <motion.div
        className='w-full px-4'
        variants={easeOutCenter}
        initial='hidden'
        animate='visible'
      >
        <Accordion type='single' collapsible>
          <AccordionItem value='get-in-touch'>
            <AccordionTrigger className='mobile-footer-head'>
              Get in touch
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li className='mobile-accordion-content quick-link-get-in-touch-list'>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{
                      color: 'white',
                      fontSize: fontSize,
                      marginTop: marginTop,
                    }}
                  />
                  <p className='quick-link'>
                    123 Example Street, Victoria Island, Lagos, Nigeria.
                  </p>
                </li>
                <li className='mobile-accordion-content quick-link-get-in-touch-list'>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{
                      color: 'white',
                      fontSize: fontSize,
                      marginTop: marginTop,
                    }}
                  />
                  <p className='quick-link'>info@smartschool.com</p>
                </li>
                <li className='mobile-accordion-content quick-link-get-in-touch-list'>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{
                      color: 'white',
                      fontSize: fontSize,
                      marginTop: marginTop,
                    }}
                  />
                  <p className='quick-link'>07012345677, 07012345677</p>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
}
