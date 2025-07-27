import React from 'react';
import { motion } from 'framer-motion';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import schoolLogo from '../Asset/school-logo.png';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Animation Variant
const easeOutCenter = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 3, ease: 'easeOut' },
  },
};

export default function FooterTop() {
  return (
    <motion.div
      className="flex flex-col lg:flex-row py-5 w-full items-center lg:items-start "
      variants={easeOutCenter}
      initial="hidden"
      animate="visible"
    >
      {/* Logo Section */}
      <motion.div
        className="flex w-full lg:mb-0 lg:w-1/3 justify-start  xl:justify-center items-center lg:pb-15 "
        variants={easeOutCenter}
      >
        <div className="inline-flex items-center mb-4 lg:mb-0">
          <img
            src={schoolLogo}
            alt="Smart School Logo"
            className="rounded-full h-18 w-18"
          />
          <h1 className="text-purple-500 font-bold text-2xl ml-2 md:text-3xl">
            Smart School
          </h1>
        </div>
      </motion.div>

      {/* Info Sections Container */}
      <div className="w-full flex flex-col lg:flex-row flex-wrap justify-around items-start gap-y-2 lg:gap-y-8 lg:w-2/3 lg:flex-nowrap lg:gap-x-2 lg:justify-center lg:items-start">

        {/* Quick Links Section */}
        <motion.div
          className="w-full px-4 text-start  lg:min-w-[150px] lg:w-auto lg:text-left"
          variants={easeOutCenter}
        >
          {/* Accordion only on mobile/tablet */}
          <div className="lg:hidden">
            <Accordion type="single" collapsible>
              <AccordionItem value="quick-links">
                <AccordionTrigger className="footer-head md:text-lg">Quick Links</AccordionTrigger>
                <AccordionContent className="mt-2">
                  <div className="flex flex-col gap-2">
                    <p className="quick-link md:text-lg">Contact Us</p>
                    <p className="quick-link md:text-lg">FAQs</p>
                    <p className="quick-link md:text-lg">Gallery</p>
                    <p className="quick-link md:text-lg">Admissions</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Static Content - Desktop */}
          <div className="hidden lg:block mt-1">
            <p className='footer-head md:text-lg'>Quick Links</p>
            <p className="quick-link md:text-lg">Contact Us</p>
            <p className="quick-link md:text-lg">FAQs</p>
            <p className="quick-link md:text-lg">Gallery</p>
            <p className="quick-link md:text-lg">Admissions</p>
          </div>
        </motion.div>

        {/* Navigation Section */}
        <motion.div
          className="w-full px-4 xl:px-0 text-start lg:min-w-[150px] lg:w-auto lg:text-left"
          variants={easeOutCenter}
        >
          {/* Accordion only on mobile/tablet */}
          <div className="lg:hidden">
            <Accordion type="single" collapsible>
              <AccordionItem value="navigation">
                <AccordionTrigger className="footer-head md:text-lg">Navigation</AccordionTrigger>
                <AccordionContent className="mt-2">
                  <div className="flex flex-col gap-2">
                    <p className="quick-link md:text-lg">Mission</p>
                    <p className="quick-link md:text-lg">Vision</p>
                    <p className="quick-link md:text-lg">About Us</p>
                    <p className="quick-link md:text-lg">Academics</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Static Content - Desktop */}
          <div className="hidden lg:block mt-1">
            <p className='footer-head md:text-lg'>Navigation</p>
            <p className="quick-link md:text-lg">Mission</p>
            <p className="quick-link md:text-lg">Vision</p>
            <p className="quick-link md:text-lg">About Us</p>
            <p className="quick-link md:text-lg">Academics</p>
          </div>
        </motion.div>

        {/* Get In Touch Section */}
        <motion.div
          className="w-full xl:mt-1 text-center lg:min-w-[200px] lg:w-auto lg:mt-0 lg:text-left"
          variants={easeOutCenter}
        >
          {/* Accordion only on mobile/tablet */}
          <div className="lg:hidden">
            <Accordion type="single" collapsible>
              <AccordionItem value="get-in-touch">
                <AccordionTrigger className="footer-head text-start md:text-center xl:text-start px-4 xl:p-0 md:text-lg">
                  Get in touch
                </AccordionTrigger>
                <AccordionContent className="px-5 mt-2">
                  <div className="flex mb-4 items-start">
                    <div className="mr-2 mt-1">
                      <FontAwesomeIcon icon={faLocationDot} style={{ color: 'white', fontSize: '18px' }} />
                    </div>
                    <p className="quick-link text-start md:text-lg">
                      123 Example Street,<br />
                      Victoria Island, Lagos,<br />
                      Nigeria
                    </p>
                  </div>

                  <div className="flex mb-4 items-center">
                    <div className="mr-2">
                      <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white', fontSize: '18px' }} />
                    </div>
                    <p className="quick-link md:text-lg">info@example.com</p>
                  </div>

                  <div className="flex items-center">
                    <div className="mr-2">
                      <FontAwesomeIcon icon={faPhone} style={{ color: 'white', fontSize: '18px' }} />
                    </div>
                    <p className="quick-link md:text-lg">07012345677, 07012345677</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Static Content - Desktop */}
          <div className="hidden lg:block">
            <h1 className="footer-head text-start md:text-center xl:text-start px-4 xl:p-0">
              Get in touch
            </h1>

            <div className="flex mb-2  items-start px-5 xl:p-0 lg:justify-start md:justify-center">
              <div className="mr-2 mt-4">
                <FontAwesomeIcon icon={faLocationDot} style={{ color: 'white', fontSize: '18px' }} />
              </div>
              <p className="quick-link text-start">
                123 Example Street,<br />
                Victoria Island, Lagos,<br />
                Nigeria
              </p>
            </div>

            <div className="flex mb-2  items-center justify-start lg:justify-start md:justify-center px-4 xl:p-0">
              <div className="mr-2">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white', fontSize: '18px' }} />
              </div>
              <p className="quick-link">info@example.com</p>
            </div>

            <div className="flex items-center justify-start lg:justify-start md:justify-center mb-2 xl:mb-0 px-4 xl:p-0">
              <div className="mr-2">
                <FontAwesomeIcon icon={faPhone} style={{ color: 'white', fontSize: '18px' }} />
              </div>
              <p className="quick-link">07012345677, 07012345677</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
