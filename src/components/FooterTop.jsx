import React from 'react';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

import schoolLogo from '../Asset/school-logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FooterTop() {
  return (
    <div class='grid grid-cols-4 gap-10 mx-30 justify-center py-8 border'>
      {/* The main grid container. We'll ensure its children align correctly. */}

      <div class='flex items-start border'>
        {/* *** CHANGE 1: This column's content (logo and text) is aligned to the start (top). Removed space-x-2 and the outer flex on this div as it will be handled by the inner inline-flex. *** */}

        {/* *** CHANGE 2: This inline-flex container ensures the logo and 'Smart School' text are visually centered relative to each other. *** */}
        <div class='inline-flex items-center '>
          <img
            src={schoolLogo}
            alt='School Logo'
            class='rounded-full h-16 w-16'
          />
          <h1 class='text-purple-500 font-bold text-3xl'>Smart School</h1>
        </div>
      </div>

      <div className='flex justify-between border gap-x-20'>
        {/* *** CHANGE 1: Added 'gap-x-10' to create horizontal space between the direct children. *** */}
        {/* Removed 'space-x-5' from children as it was misapplied for column spacing. */}

        {/* Quick Links Column */}
        {/* *** CHANGE 2: Removed 'space-x-5' from here. *** */}
        <div className='border min-w-[350px]'>
          <h1 className='footer-head'>Quick Links</h1>
          <p className='quick-link'>Contact Us</p>
          <p className='quick-link'>FAQs</p>
          <p className='quick-link'>Gallery</p>
          <p className='quick-link'>Admissions</p>
        </div>

        {/* Navigation Column */}
        {/* *** CHANGE 3: Removed 'space-x-5' from here. *** */}
        <div className='border min-w-[350px]'>
          <h1 className='footer-head'>Navigation</h1>
          <p className='quick-link'>Mission</p>
          <p className='quick-link'>Vision</p>
          <p className='quick-link'>About Us</p>
          <p className='quick-link'>Academics</p>
        </div>

        {/* Get in touch Column */}
        {/* *** CHANGE 4: Removed 'space-x-5' from here. *** */}
        <div className='border min-w-[350px] justify-end'>
          <h1 className='footer-head'>Get in touch</h1>

          <div className='flex mb-5 items-start'>
            <div className='mt-3 mr-2'>
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
            </div>
          </div>

          <div className='flex mb-5 items-center'>
            <div className='mr-2'>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: 'white', fontSize: '18px' }}
              />
            </div>
            <div>
              <p className='text-gray-400 text-sm'>info@example.com</p>
            </div>
          </div>

          <div className='flex items-center'>
            <div className='mr-2'>
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: 'white', fontSize: '18px' }}
              />
            </div>
            <div>
              <p className='text-gray-400 text-xs'>07012345677, 07012345677</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
