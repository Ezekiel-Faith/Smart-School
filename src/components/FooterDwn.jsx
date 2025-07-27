import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

// Animation Variant
const easeOutCenter = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 3.5, ease: 'easeOut' },
  },
};

export default function FooterDwn() {
  return (
    <motion.section
      className='bg-gray-900'
      variants={easeOutCenter}
      initial='hidden'
      animate='visible'
    >
      {/* Main Container */}
      <div className="flex p-3 lg:py-4 w-full flex-col lg:flex-row justify-between md:items-start xl:items-center m-auto">

        {/* Left Column: Social Media */}
        <motion.div
          className="mb-5 lg:mb-0 lg:w-1/2 flex flex-col items-center order-last lg:order-none"
          variants={easeOutCenter}
        >
          <p className="text-gray-400 text-base md:text-2xl lg:text-xl  lg:px-0 mb-1 lg:mb-6 text-start">
            Questions or updates? Follow us on social media,
            <br />
            Connect with us!
          </p>
          <div className="flex items-start justify-center lg:justify-start lg:-ml-25 pr-10 md:pr-45 lg:pr-0 ">
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:scale-110 transition-transform duration-300 transform p-7'
            >
              <FontAwesomeIcon icon={faFacebook} className="text-white text-4xl md:text-5xl lg:text-5xl" />
            </a>
            <a
              href='https://www.twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:scale-110 transition-transform duration-300 transform p-7'
            >
              <FontAwesomeIcon icon={faTwitter} className="text-white text-4xl md:text-5xl lg:text-5xl" />
            </a>
            <a
              href='https://www.instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:scale-110 transition-transform duration-300 transform p-7'
            >
              <FontAwesomeIcon icon={faInstagram} className="text-white text-4xl md:text-5xl lg:text-5xl" />
            </a>
            <a
              href='https://wa.me/2347012345678'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:scale-110 transition-transform duration-300 transform p-7'
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-white text-4xl md:text-5xl lg:text-5xl" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Newsletter */}
        <motion.div
          className="justify-end lg:w-1/2 flex flex-col items-center lg:items-start mb-6 lg:mb-0 order-first lg:order-none"
          variants={easeOutCenter}
        >
          <h1 className="text-white text-3xl md:text-4xl lg:text-3xl pb-2 font-space-grotesk font-bold text-start pr-20 md:mr-70 xl:mr-0 lg:pr-0">
            Our Newsletters
          </h1>
          <p className="text-gray-400 text-base md:text-2xl lg:text-base py-6 font-space-grotesk text-start">
            Subscribe to our newsletter and get exclusive insights, tips, and the
            <br />
            latest trends delivered straight to your inbox. Don't miss out.
          </p>
          <div className="relative flex w-full max-w-lg md:max-w-2xl xl:max-w-lg">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 bg-purple-700 placeholder-white pl-4  pr-32  py-3 rounded-4xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            />
            <button className="absolute inset-y-0 right-0 bg-purple-900 text-white px-4 py-2 rounded-4xl text-sm font-space-grotesk hover:bg-purple-800 transition-colors duration-200 h-10 mt-1">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom Line */}
      <motion.hr
        className="border-t border-gray-700 lg:mt-5 max-w-6xl mx-auto "
        variants={easeOutCenter}
      />
      <motion.p
        className="text-gray-400 text-sm md:text-lg xl:text-sm text-center pt-5"
        variants={easeOutCenter}
      >
        &copy; 2025 Smart School | All rights reserved | Terms and Conditions |
        Privacy Policy
      </motion.p>
    </motion.section>
  );
}
