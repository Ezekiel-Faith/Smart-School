import React from 'react';
import { motion } from 'framer-motion';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import schoolLogo from '../Assets/school-logo2.png';

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
    // Main Container for FooterTop:
    // flex-col on mobile to stack children vertically (logo on top, then the 3-column section).
    // lg:flex-row on large screens and up to lay them out horizontally.
    // items-center for horizontal centering of stacked items on mobile.
    // lg:items-start to align them to the top on desktop.
    <motion.div
      className="flex flex-col lg:flex-row py-5 w-full items-center lg:items-start" // Corrected parent container classes
      variants={easeOutCenter}
      initial="hidden"
      animate="visible"
    >
      {/* First Child Div: School Logo and Name (always visible, on top on mobile) */}
      <motion.div
        className="flex w-full mb-8 lg:mb-0 lg:w-1/3 justify-center items-center lg:pb-15" // Adjusted for mobile visibility, spacing, and width
        variants={easeOutCenter}
      >
        <div className="inline-flex items-center">
          <img
            src={schoolLogo}
            alt="Smart School Logo"
            className="rounded-full h-18 w-18"
          />
          <h1 className="text-purple-500 font-bold text-2xl ml-2">
            Smart School
          </h1>
        </div>
      </motion.div>

      {/* Second Child Div: Quick Links, Navigation, Get in touch */}
      {/*
        - w-full: Takes full width on mobile.
        - flex-wrap: Allows internal columns to wrap onto the next line on mobile.
        - justify-around: Distributes space around items on mobile when they wrap.
        - items-start: Aligns items to the start.
        - gap-y-8: Vertical gap for wrapped items on mobile.
        - lg:w-2/3 lg:flex-row lg:flex-nowrap lg:gap-x-2 lg:justify-center lg:items-start: Revert to desktop layout.
          Note: Changed 'md:' to 'lg:' where 'lg:' was originally intended for desktop.
      */}
      <div className="w-full flex flex-wrap justify-around items-start gap-y-8 lg:w-2/3 lg:flex-row lg:flex-nowrap lg:gap-x-2 lg:justify-center lg:items-start"> {/* Corrected for 2-column mobile layout and lg desktop */}

        {/* Quick Links Column */}
        {/*
          - w-1/2: Takes half width on mobile (to be next to Navigation).
          - text-center: Center text for mobile.
          - lg:min-w-[150px] lg:w-auto lg:text-left: Revert to desktop width and left alignment.
        */}
        <motion.div className="w-1/2 text-center lg:min-w-[150px] lg:w-auto lg:text-left" variants={easeOutCenter}>
          <h1 className="footer-head">Quick Links</h1>
          <p className="quick-link">Contact Us</p>
          <p className="quick-link">FAQs</p>
          <p className="quick-link">Gallery</p>
          <p className="quick-link">Admissions</p>
        </motion.div>

        {/* Navigation Column */}
        {/*
          - w-1/2: Takes half width on mobile (to be next to Quick Links).
          - text-center: Center text for mobile.
          - lg:min-w-[150px] lg:w-auto lg:text-left: Revert to desktop width and left alignment.
        */}
        <motion.div className="w-1/2 text-center lg:min-w-[150px] lg:w-auto lg:text-left" variants={easeOutCenter}>
          <h1 className="footer-head">Navigation</h1>
          <p className="quick-link">Mission</p>
          <p className="quick-link">Vision</p>
          <p className="quick-link">About Us</p>
          <p className="quick-link">Academics</p>
        </motion.div>

        {/* Get in touch Column */}
        {/*
          - w-full: Takes full width on mobile so it goes to the next line.
          - mt-8: Add top margin on mobile to separate it from the two columns above.
          - text-center: Center text for mobile.
          - lg:min-w-[200px] lg:w-auto lg:mt-0 lg:text-left: Revert to desktop width, remove top margin, and left align.
        */}
        <motion.div className="w-full mt-8 text-center lg:min-w-[200px] lg:w-auto lg:mt-0 lg:text-left" variants={easeOutCenter}>
          <h1 className="footer-head">Get in touch</h1>

          {/* Location */}
          <div className="flex mb-5 items-start justify-center lg:justify-start"> {/* Added justify-center for mobile */}
            <div className="mr-2 mt-4">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: 'white', fontSize: '18px' }}
              />
            </div>
            <div>
              <p className="quick-link">
                123 Example Street,
                <br />
                Victoria Island, Lagos,
                <br />
                Nigeria
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex mb-5 items-center justify-center lg:justify-start"> {/* Added justify-center for mobile */}
            <div className="mr-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: 'white', fontSize: '18px' }}
              />
            </div>
            <div>
              <p className="quick-link">info@example.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center lg:justify-start"> {/* Added justify-center for mobile */}
            
            <div className="mr-2">
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: 'white', fontSize: '18px' }}
              />
            </div>
            <div>
              <p className="quick-link">07012345677, 07012345677</p>
            </div>
          </div>
        </motion.div>
      </div> {/* End of Second Child Div */}
    </motion.div> // End of Main FooterTop Container
  );
}