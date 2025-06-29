import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import schoolLogo from '../Asset/school-logo.jpg';

const Footer = () => {
  return (
    <div>
      <footer>
        <section className='bg-gray-900 w-100% h-220'>
          <div className='grid grid-cols-4 pt-25 mx-30'>
            <div className='grid grid-cols-2 col-span-2 mt-5'>
              <img src={schoolLogo} alt="School Logo" className="h-16 rounded-full" />
              <h1 className='text-purple-500 font-bold text-3xl -ml-60 mt-3 font-space-grotesk'>Smart School</h1>
            </div>

            <div className='grid grid-cols-4 gap-15 col-span-2 -mr-15 -ml-35'>
              <div>
                <h1 className='text-white text-2xl font-bold mb-7 mt-2 font-space-grotesk'>Quick Links</h1>
                <p className='quick-link font-space-grotesk'>Contact Us</p>
                <p className='quick-link font-space-grotesk'>FAQs</p>
                <p className='quick-link font-space-grotesk'>Gallery</p>
                <p className='quick-link font-space-grotesk'>Admissions</p>
              </div>

              <div>
                <h1 className='text-white text-2xl mb-6 font-bold font-space-grotesk'>Navigation</h1>
                <p className='text-gray-400 mb-3 text-lg'>Mission</p>
                <p className='text-gray-400 mb-3 text-lg'>Vission</p>
                <p className='text-gray-400 mb-3 text-lg'>About Us</p>
                <p className='text-gray-400 mb-3 text-lg'>Academics</p>
              </div>

              <div>
                <h1 className='text-white text-2xl font-bold mb-7 mt-2 font-space-grotesk'>Get in touch</h1>

                <div className='grid grid-cols-2 mb-5'>
                  <div className='mt-3'>
                    <FontAwesomeIcon icon={faLocationDot} style={{ color: 'white', fontSize: '18px' }} />
                  </div>
                  <div>
                    <p className='text-gray-400 -ml-13 text-xs '>
                      123 Example Street,<br />
                      Victoria Island, Lagos,<br />
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className='grid grid-cols-2 mb-5'>
                  <div>
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white', fontSize: '18px' }} />
                  </div>
                  <div>
                    <p className='text-gray-400 -ml-13 text-sm'>info@example.com</p>
                  </div>
                </div>

                <div className='grid grid-cols-2'>
                  <div>
                    <FontAwesomeIcon icon={faPhone} style={{ color: 'white', fontSize: '18px' }} />
                  </div>
                  <div>
                    <p className='text-gray-400 -ml-14 text-xs'>07012345677,07012345677</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-45 pt-20'>
            <div className='mt-15 mx-5'>
              <p className='text-gray-400 text-xl pl-27 pb-10'>
                Questions or updates? Follow us on social media,<br />
                Connect with us!
              </p>
              <div className='grid grid-cols-4 mx-27 gap-4'>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300 transform"
                >
                  <FontAwesomeIcon icon={faFacebook} style={{ color: 'white', fontSize: '53px' }} />
                </a>

                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300 transform"
                >
                  <FontAwesomeIcon icon={faTwitter} style={{ color: 'white', fontSize: '53px' }} />
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300 transform"
                >
                  <FontAwesomeIcon icon={faInstagram} style={{ color: 'white', fontSize: '53px' }} />
                </a>

                <a
                  href="https://wa.me/2347012345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300 transform"
                >
                  <FontAwesomeIcon icon={faWhatsapp} style={{ color: 'white', fontSize: '53px' }} />
                </a>
              </div>
            </div>

            <div className='mr-30'>
              <h1 className='text-white text-5xl pb-9 font-space-grotesk font-bold'>Our Newsletters</h1>
              <p className='text-gray-400 text-2xs pb-10 font-space-grotesk'>
                Subcribe to our newsletter and get exclusive insights, tips, and the <br />
                latest trends delivered straight to your inbox. Don't miss out.
              </p>
              <button
                placeholder="Enter Your Email Address"
                className='bg-purple-500 placeholder-white w-125 h-15 rounded-4xl'
              >
                <button className='bg-purple-950 text-white w-40 h-14 rounded-4xl text-xl ml-85 font-space-grotesk'>
                  Subscribe
                </button>
              </button>
            </div>
          </div>

          <hr className='border border-gray-500 w-300 mt-25 ml-33 ' />
          <p className='text-gray-400 text-lg pl-110 pt-8 font-space-grotesk'>
            @ 2025 Smart School | All rights reserved | Tems and Conditions | Privacy Policy
          </p>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
