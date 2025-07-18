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
    // left side
    <motion.section
      className="bg-gray-900"
      variants={easeOutCenter}
      initial="hidden"
      animate="visible"
    >
      {/* Main Container */}
      {/*
        The flex-col class makes items stack vertically on mobile/tablet.
        lg:flex-row keeps them side-by-side on larger screens as per original.
      */}
      <div className="flex p-3 lg:py-4 w-full flex-col lg:flex-row justify-between items-center  m-auto">
        {/* Left Column: Social Media */}
        {/*
          For mobile/tablet (below lg), order-last will push this div to the bottom.
          For lg: and upward, order-first (or no order class if it's the first in source order)
          will ensure it appears on the left as intended.
          Added text-center for mobile alignment.
        */}
        <motion.div
          className="mb-5 lg:mb-0 lg:w-1/2 flex flex-col items-center  order-last lg:order-none" // Added order-last for mobile, lg:order-none to reset for desktop
          variants={easeOutCenter}
        >
          <p className="text-gray-400 text-xs lg:text-xl mb-1 lg:mb-6 text-center">
            Questions or updates? Follow us on social media,
            <br />
            Connect with us!
          </p>
          <div className="flex  items-start justify-center lg:justify-start lg:-ml-25"> {/* Changed justify-start to justify-center for mobile, then back for lg */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300 transform p-7"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-white text-4xl lg:text-5xl" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300 transform p-7"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-white text-4xl lg:text-5xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300 transform p-7"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-white text-4xl lg:text-5xl" />
            </a>
            <a
              href="https://wa.me/2347012345678"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300 transform p-7"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-white text-4xl lg:text-5xl" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Newsletter */}
        {/*
          For mobile/tablet (below lg), order-first will push this div to the top.
          For lg: and upward, order-first will ensure it appears on the right as intended.
          Added text-center for mobile alignment.
        */}
        <motion.div
          className="justify-end lg:w-1/2 flex flex-col items-center lg:items-start  mb-6 lg:mb-0 order-first lg:order-none" // Added order-first for mobile, lg:order-none to reset for desktop
          variants={easeOutCenter}
        >
          <h1 className="text-white text-4xl lg:text-2xl lg:text-5xl pb-4 font-space-grotesk font-bold text-center lg:text-left"> {/* Added text-center for mobile, lg:text-left for desktop */}
            Our Newsletters
          </h1>
          <p className="text-gray-400 text-sm lg:text-base p-6 font-space-grotesk text-start lg:text-center lg:text-left"> {/* Added text-center for mobile, lg:text-left for desktop */}
            Subscribe to our newsletter and get exclusive insights, tips, and the
            <br />
            latest trends delivered straight to your inbox. Don't miss out.
          </p>
          <div className="relative flex w-full max-w-lg px-4 sm:px-0"> {/* Added horizontal padding for small screens */}
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 bg-purple-700 placeholder-white pl-4 pr-32 py-3 rounded-4xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            />
            <button className="absolute inset-y-0 right-4 lg:right-0 bg-purple-900 text-white px-4 py-2 rounded-4xl text-sm font-space-grotesk hover:bg-purple-800 transition-colors duration-200 h-10 mt-1">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom Line */}
      <motion.hr
        className="border-t border-gray-700   lg:mt-10 max-w-6xl mx-auto"
        variants={easeOutCenter}
      />
      <motion.p
        className="text-gray-400 text-sm text-center pt-5"
        variants={easeOutCenter}
      >
        &copy; 2025 Smart School | All rights reserved | Terms and Conditions | Privacy Policy
      </motion.p>
    </motion.section>
  );
}