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

const fontSize = '15px';
const marginTop = '3px';

export default function DesktopFooter() {
  return (
    <div className='text-white hidden lg:flex gap-5'>
      {/* Quick Links Section - Desktop */}
      <motion.div
        className='footer-link-container'
        variants={easeOutCenter}
        initial='hidden'
        animate='visible'
      >
        <p className='footer-head'>Quick Links</p>
        <ul>
          <li>
            <a href='/contact' className='quick-link'>
              Contact Us
            </a>
          </li>
          <li>
            <a href='/about-us#faq' className='quick-link'>
              FAQs
            </a>
          </li>
          <li>
            <a href='/gallery' className='quick-link'>
              Gallery
            </a>
          </li>
          <li>
            <a href='/admissions' className='quick-link'>
              Admissions
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Navigation Section - Desktop */}
      <motion.div
        className='footer-link-container'
        variants={easeOutCenter}
        initial='hidden'
        animate='visible'
      >
        <p className='footer-head'>Navigation</p>

        <ul>
          <li>
            <a href='/' className='quick-link'>
              Mission
            </a>
          </li>
          <li>
            <a href='/' className='quick-link'>
              Vision
            </a>
          </li>
          <li>
            <a href='/about-us' className='quick-link'>
              About Us
            </a>
          </li>
          <li>
            <a href='/academics' className='quick-link'>
              Academics
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Get In Touch Section - Desktop */}
      <motion.div
        className='footer-link-container'
        variants={easeOutCenter}
        initial='hidden'
        animate='visible'
      >
        <p className='footer-head'>Get in touch</p>
        <ul>
          <li className='quick-link-get-in-touch-list'>
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
          <li className='quick-link-get-in-touch-list'>
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
          <li className='quick-link-get-in-touch-list'>
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
      </motion.div>
    </div>
  );
}
