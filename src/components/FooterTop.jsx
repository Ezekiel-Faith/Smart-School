import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../Asset/school-logo.png';
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
      className='flex flex-col lg:flex-row w-full justify-center items-center mb-5'
      variants={easeOutCenter}
      initial='hidden'
      animate='visible'
    >
      {/* Logo Section */}
      <motion.div className='flex w-full items-center' variants={easeOutCenter}>
        <div className='flex items-center mb-4 lg:mb-0 mx-auto lg:mx-0'>
          <a href='/' className='nav-img flex space-x-2'>
            <img src={logo} alt='School Logo' className='w-12 rounded-full' />
            <span className='text-purple-500 font-bold text-xl  md:text-3xl'>
              Smart School
            </span>
          </a>
        </div>
      </motion.div>

      {/* Info Sections Container */}
      <div className='w-full'>
        <MobileFooter />

        <DesktopFooter />
      </div>
    </motion.div>
  );
}
