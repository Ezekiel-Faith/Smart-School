import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { SubscribeProperties } from '@/constants/properties';

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
    <motion.section variants={easeOutCenter} initial='hidden' animate='visible'>
      {/* Main Container */}
      <div className='footer-down-main-container'>
        {/* Left Column: Social Media */}
        <motion.div className='columns' variants={easeOutCenter}>
          <p className='mb-5 columns-paragraph'>
            Questions or updates? Follow us on social media, Connect with us!
          </p>

          <div className='flex items-center justify-center w-full text-center space-x-5 md:space-x-10'>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:scale-110 transition-transform duration-300 transform'
            >
              <FontAwesomeIcon icon={faFacebook} className='left-column-icon' />
            </a>

            <a
              href='https://www.twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:scale-110 transition-transform duration-300 transform'
            >
              <FontAwesomeIcon icon={faTwitter} className='left-column-icon' />
            </a>

            <a
              href='https://www.instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:scale-110 transition-transform duration-300 transform'
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className='left-column-icon'
              />
            </a>

            <a
              href='https://wa.me/2347012345678'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:scale-110 transition-transform duration-300 transform'
            >
              <FontAwesomeIcon icon={faWhatsapp} className='left-column-icon' />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Newsletter */}
        <motion.div
          className='columns px-4 md:px-10 lg:px-0'
          variants={easeOutCenter}
        >
          <h1 className='text-3xl md:text-4xl text-center font-bold mb-3'>
            Our Newsletters
          </h1>

          <p className='columns-paragraph mb-3'>
            Subscribe to our newsletter and get exclusive insights, tips, and
            the latest trends delivered straight to your inbox. Don't miss out.
          </p>

          <div className='sub-form md:self-start lg:self-center w-[90%] md:w-p80%] mx-auto'>
            <form className='subscribe-form flex justify-center items-center md:gap-[10px] gap-[5px] rounded-[32px] z-10'>
              <input
                type='email'
                placeholder={SubscribeProperties.emailPlaceholder}
                className='email-input text-[16px] font-[600] px-4 py-2 rounded-[32px] flex-1 min-w-0 focus:outline-none focus:ring-0 invalid:text-red-400 focus:invalid:outline-red-500 focus:invalid:border-red-400'
                required
              />

              <button
                type='submit'
                className='submit-btn text-white font-semibold cursor-pointer
                    px-[12px] py-[8px] text-[14px]
                    md:px-[24px] md:py-[14px] md:text-[16px]
                    rounded-[32px] whitespace-nowrap'
              >
                {SubscribeProperties.subscribeButtonText}
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom Line */}
      <motion.hr
        className='border-t border-gray-700 lg:mt-5 max-w-6xl mx-auto '
        // className='border-2 border-red-500'
        variants={easeOutCenter}
      />
      <motion.p
        className='text-gray-400 text-sm text-center px-10 mt-5'
        // className='text-white'
        variants={easeOutCenter}
      >
        &copy; 2025 Smart School | All rights reserved | Terms and Conditions |
        Privacy Policy
      </motion.p>
    </motion.section>
  );
}
