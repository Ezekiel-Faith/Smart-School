import React from 'react';
import { motion } from 'framer-motion';
import schoolLogo from '../Asset/school-logo.png';
import MobileFooter from './MobileFooter';
import DesktopFooter from './DesktopFooter';

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
      className='flex flex-col lg:flex-row py-5 w-full items-center lg:items-start '
      variants={easeOutCenter}
      initial='hidden'
      animate='visible'
    >
      {/* Logo Section */}
      <motion.div
        className='flex w-full lg:mb-0 lg:w-1/3 justify-start xl:justify-center items-center lg:pb-15 '
        variants={easeOutCenter}
      >
        <div className='inline-flex items-center mb-4 lg:mb-0'>
          <img
            src={schoolLogo}
            alt='Smart School Logo'
            className='rounded-full h-18 w-18'
          />
          <h1 className='text-purple-500 font-bold text-2xl ml-2 md:text-3xl'>
            Smart School
          </h1>
        </div>
      </motion.div>

      {/* Info Sections Container */}
      <div className='w-full lg:w-2/3'>
        {/* Render Mobile Version */}
        <MobileFooter />

        {/* Render Desktop Version */}
        <DesktopFooter />
      </div>
    </motion.div>
  );
}
