import React from 'react';
import { motion } from 'framer-motion';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Animation Variant
const easeOutCenter = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 3, ease: 'easeOut' },
  },
};

export default function DesktopFooter() {
  return (
    <div className='hidden w-full lg:flex flex-col lg:flex-row flex-wrap justify-around items-start gap-y-8 lg:w-2/3 lg:flex-nowrap lg:gap-x-2 lg:justify-center lg:items-start'>
      {/* Quick Links Section - Desktop */}
      <motion.div
        className='w-full px-4 text-start lg:min-w-[150px] lg:w-auto lg:text-left'
        variants={easeOutCenter}
        initial='hidden'
        animate='visible'
      >
        <p className='footer-head md:text-lg'>Quick Links</p>
        <p className='quick-link md:text-lg'>Contact Us</p>
        <p className='quick-link md:text-lg'>FAQs</p>
        <p className='quick-link md:text-lg'>Gallery</p>
        <p className='quick-link md:text-lg'>Admissions</p>
      </motion.div>

      {/* Navigation Section - Desktop */}
      <motion.div
        className='w-full px-4 xl:px-0 text-start lg:min-w-[150px] lg:w-auto lg:text-left'
        variants={easeOutCenter}
        initial='hidden'
        animate='visible'
      >
        <p className='footer-head md:text-lg'>Navigation</p>
        <p className='quick-link md:text-lg'>Mission</p>
        <p className='quick-link md:text-lg'>Vision</p>
        <p className='quick-link md:text-lg'>About Us</p>
        <p className='quick-link md:text-lg'>Academics</p>
      </motion.div>

      {/* Get In Touch Section - Desktop */}
      <motion.div
        className='w-full xl:mt-1 text-center lg:min-w-[200px] lg:w-auto lg:mt-0 lg:text-left'
        variants={easeOutCenter}
        initial='hidden'
        animate='visible'
      >
        <h1 className='footer-head text-start md:text-center xl:text-start px-4 xl:p-0'>
          Get in touch
        </h1>

        <div className='flex mb-2 items-start px-5 xl:p-0 lg:justify-start md:justify-center'>
          <div className='mr-2 mt-4'>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: 'white', fontSize: '18px' }}
            />
          </div>
          <p className='quick-link text-start'>
            123 Example Street,
            <br />
            Victoria Island, Lagos,
            <br />
            Nigeria
          </p>
        </div>

        <div className='flex mb-2 items-center justify-start lg:justify-start md:justify-center px-4 xl:p-0'>
          <div className='mr-2'>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: 'white', fontSize: '18px' }}
            />
          </div>
          <p className='quick-link'>info@example.com</p>
        </div>

        <div className='flex items-center justify-start lg:justify-start md:justify-center mb-2 xl:mb-0 px-4 xl:p-0'>
          <div className='mr-2'>
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: 'white', fontSize: '18px' }}
            />
          </div>
          <p className='quick-link'>07012345677, 07012345677</p>
        </div>
      </motion.div>
    </div>
  );
}
