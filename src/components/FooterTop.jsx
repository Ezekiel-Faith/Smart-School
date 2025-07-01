import React from 'react';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import schoolLogo from '../Asset/school-logo.jpg';

export default function FooterTop() {
  return (
    // Parent div: Using Flexbox for 1/3 and 2/3 split
    // Added 'gap-x-10' (or your desired gap value) to control space between the two main child divs.
    // Also, corrected 'mx-30' to 'mx-auto' for proper centering if that's the intent.
    <div className='flex py-12 mx-30 w-full max-w-5xl px-4 md:px-8 gap-x-1'> {/* Added gap-x-10 here */}

      {/* First Child Div: School Logo and Name (will take approximately 1/3) */}
      <div className='w-1/3 flex items-start'> {/* Explicitly set width to 1/3 */}
        <div className='inline-flex items-center'>
          <img
            src={schoolLogo}
            alt='Smart School Logo'
            className='rounded-full h-16 w-16'
          />
          <h1 className='text-purple-500 font-bold text-2xl ml-2'>Smart School</h1>
        </div>
      </div>

      {/* Second Child Div: Quick Links, Navigation, Get in touch (will take approximately 2/3) */}
      {/* This gap-x-2 is correct for the sub-columns within this 2/3 section */}
      <div className='w-2/3 flex gap-x-2 justify-end'>
        {/* Quick Links Column */}
        <div className='min-w-[150px]'>
          <h1 className='footer-head'>Quick Links</h1>
          <p className='quick-link'>Contact Us</p>
          <p className='quick-link'>FAQs</p>
          <p className='quick-link'>Gallery</p>
          <p className='quick-link'>Admissions</p>
        </div>

        {/* Navigation Column */}
        <div className='min-w-[150px]'>
          <h1 className='footer-head'>Navigation</h1>
          <p className='quick-link'>Mission</p>
          <p className='quick-link'>Vision</p>
          <p className='quick-link'>About Us</p>
          <p className='quick-link'>Academics</p>
        </div>

        {/* Get in touch Column */}
        <div className='min-w-[200px]'>
          <h1 className='footer-head'>Get in touch</h1>

          {/* Location */}
          <div className='flex mb-5 items-start'>
            <div className='mr-2 mt-4'>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: 'white', fontSize: '18px' }}
              />
            </div>
            <div>
              <p className='quick-link'>
                123 Example Street,
                <br />
                Victoria Island, Lagos,
                <br />
                Nigeria
              </p>
            </div> {/* Corrected closing div tag here */}
          </div>

          {/* Email */}
          <div className='flex mb-5 items-center'>
            <div className='mr-2'>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: 'white', fontSize: '18px' }}
              />
            </div>
            <div>
              <p className='quick-link'>info@example.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className='flex items-center'>
            <div className='mr-2'>
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: 'white', fontSize: '18px' }}
              />
            </div>
            <div>
              <p className='quick-link'>07012345677, 07012345677</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}