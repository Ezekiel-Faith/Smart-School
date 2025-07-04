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
    <section className="bg-gray-900 py-12"> {/* Dark background, vertical padding */}
      <div className="flex flex-col  md:flex-row justify-between items-start max-w-7xl mx-30 px-4 sm:px-6 lg:px-8">
        {/* Left Column: Social Media */}
        <div className="mb-8 md:mb-0 md:w-1/2 lg:w-2/5"> {/* Responsive width: 1/2 on md, 2/5 on lg */}
          <p className="text-gray-400 text-xs md:text-xl mb-6">
            Questions or updates? Follow us on social media,
            <br />
            Connect with us!
          </p>
          <div className="flex gap-x-15 items-center"> {/* Flex for social icons with consistent gap */}
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:scale-110 transition-transform duration-300 transform'
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white text-4xl" // Matches icon size in image
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
                // The image shows an 'X' icon for Twitter, not the bird.
                // If you want the 'X', you'll need the faXmark from '@fortawesome/free-solid-svg-icons'
                // or if it's a brand icon, faXTwitter from '@fortawesome/free-brands-svg-icons' (check if available)
                // For now, keeping faTwitter as per your import, but be aware.
                className="text-white text-4xl"
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
                className="text-white text-4xl"
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
                className="text-white text-4xl"
              />
            </a>
          </div>
        </div>

        {/* Right Column: Newsletter */}
        <div className="md:w-1/2 lg:w-3/5 md:pl-12"> {/* Responsive width: 1/2 on md, 3/5 on lg, with left padding */}
          <h1 className='text-white text-3xl md:text-2xl lg:text-5xl pb-4 font-space-grotesk font-bold'>
            Our Newsletters
          </h1>
          <p className="text-gray-400 text-sm md:text-base pb-6 font-space-grotesk">
            Subscribe to our newsletter and get exclusive insights, tips, and the
            <br />
            latest trends delivered straight to your inbox. Don't miss out.
          </p>
              <div className="relative flex w-full max-w-md"> {/* Parent for input and button, made relative */}
            <input
              type="email"
              placeholder='Enter Your Email Address'
              className='flex-1 bg-purple-700 placeholder-white pl-4 pr-32 py-3 rounded-4xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white' // Added pr-32 for button space, added text-white
            />
            <button className='absolute inset-y-0 right-0 bg-purple-900 text-white px-4 py-2 rounded-4xl text-sm font-space-grotesk hover:bg-purple-800 transition-colors duration-200 h-10 mt-1'> {/* Positioning classes */}
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Line and Copyright */}
      <hr className='border-t border-gray-700 my-10 max-w-5xl mx-auto px-8 sm:px-6 lg:px-8' />
      <p className='text-gray-400 text-sm text-center  px-4 sm:px-6 lg:px-8'>
        &copy; 2025 Smart School | All rights reserved | Terms and Conditions | Privacy Policy 
      </p>
    </section>
  );
}