import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function FooterDwn() {
  return (
    <section>
      <div className='grid grid-cols-2 gap-45 pt-20'>
        <div className='mt-15 mx-5'>
          <p className='text-gray-400 text-xl pl-27 pb-10'>
            Questions or updates? Follow us on social media,
            <br />
            Connect with us!
          </p>
          <div className='grid grid-cols-4 mx-27 gap-4'>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:scale-110 transition-transform duration-300 transform'
            >
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ color: 'white', fontSize: '53px' }}
              />
            </a>

            <a
              href='https://www.twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:scale-110 transition-transform duration-300 transform'
            >
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: 'white', fontSize: '53px' }}
              />
            </a>

            <a
              href='https://www.instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:scale-110 transition-transform duration-300 transform'
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: 'white', fontSize: '53px' }}
              />
            </a>

            <a
              href='https://wa.me/2347012345678'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:scale-110 transition-transform duration-300 transform'
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ color: 'white', fontSize: '53px' }}
              />
            </a>
          </div>
        </div>

        <div className='mr-30'>
          <h1 className='text-white text-5xl pb-9 font-space-grotesk font-bold'>
            Our Newsletters
          </h1>
          <p className='text-gray-400 text-2xs pb-10 font-space-grotesk'>
            Subcribe to our newsletter and get exclusive insights, tips, and the{' '}
            <br />
            latest trends delivered straight to your inbox. Don't miss out.
          </p>
          {/* <button
            placeholder='Enter Your Email Address'
            className='bg-purple-500 placeholder-white w-125 h-15 rounded-4xl'
          >
            <button className='bg-purple-950 text-white w-40 h-14 rounded-4xl text-xl ml-85 font-space-grotesk'>
              Subscribe
            </button>
          </button> */}
        </div>
      </div>

      <hr className='border border-gray-500 w-300 mt-25 ml-33 ' />
      <p className='text-gray-400 text-lg pl-110 pt-8 font-space-grotesk'>
        @ 2025 Smart School | All rights reserved | Tems and Conditions |
        Privacy Policy
      </p>
    </section>
  );
}
