import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import schoolLogo from '../Asset/school-logo.jpg';

const Footer = () => {
  return (
    <div>
      <footer>
        <section className='bg-gray-900 w-100% h-250'>
          <div className='grid grid-cols-4 pt-25 mx-20'>
            <div className='grid grid-cols-2 col-span-2 mt-5'>
              <img src={schoolLogo} alt="School Logo" className="h-16 rounded-full" />
              <h1 className='text-purple-500 text-4xl -ml-65 mt-3 font-bold'>Smart School</h1>
            </div>

            <div className='grid grid-cols-4 gap-15 col-span-2 -mr-15 -ml-35'>
              <div>
                <h1 className='text-white text-3xl font-semibold mb-7 mt-2'>Quick Links</h1>
                <p className='text-gray-400 mb-3 text-lg'>Contact Us</p>
                <p className='text-gray-400 mb-3 text-lg'>FAQs</p>
                <p className='text-gray-400 mb-3 text-lg'>Gallery</p>
                <p className='text-gray-400 mb-3 text-lg'>Admissions</p>
              </div>

              <div>
                <h1 className='text-white text-3xl mb-6 font-semibold'>Navigation</h1>
                <p className='text-gray-400 mb-3 text-lg'>Mission</p>
                <p className='text-gray-400 mb-3 text-lg'>Vission</p>
                <p className='text-gray-400 mb-3 text-lg'>About Us</p>
                <p className='text-gray-400 mb-3 text-lg'>Academics</p>
              </div>

              <div>
                <h1 className='text-white text-3xl font-semibold mb-7 mt-2'>Get in touch</h1>

                <div className='grid grid-cols-2 mb-7'>
                  <div className='mt-8'>
                    <FontAwesomeIcon icon={faLocationDot} style={{ color: 'white', fontSize: '24px' }} />
                  </div>
                  <div>
                    <p className='text-gray-400 -ml-13'>
                      123 Example Street,<br />
                      Victoria Island, Lagos,<br />
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className='grid grid-cols-2 mb-7'>
                  <div>
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white', fontSize: '24px' }} />
                  </div>
                  <div>
                    <p className='text-gray-400 -ml-13 text-lg'>info@example.com</p>
                  </div>
                </div>

                <div className='grid grid-cols-2'>
                  <div>
                    <FontAwesomeIcon icon={faPhone} style={{ color: 'white', fontSize: '24px' }} />
                  </div>
                  <div>
                    <p className='text-gray-400 -ml-13'>07012345677, 07012345677</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-45 pt-20'>
            <div className='mt-15'>
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
                  <FontAwesomeIcon icon={faFacebook} style={{ color: 'white', fontSize: '60px' }} />
                </a>

                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300 transform"
                >
                  <FontAwesomeIcon icon={faTwitter} style={{ color: 'white', fontSize: '60px' }} />
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300 transform"
                >
                  <FontAwesomeIcon icon={faInstagram} style={{ color: 'white', fontSize: '60px' }} />
                </a>

                <a
                  href="https://wa.me/2347012345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300 transform"
                >
                  <FontAwesomeIcon icon={faWhatsapp} style={{ color: 'white', fontSize: '60px' }} />
                </a>
              </div>
            </div>

            <div>
              <h1 className='text-white text-5xl pb-9'>Our Newsletters</h1>
              <p className='text-gray-400 text-xl pb-10'>
                Subcribe to our newsletter and get exclusive insights, tips, and the <br />
                latest trends delivered straight to your inbox. Don't miss out.
              </p>
              <button
                placeholder="Enter Your Email Address"
                className='bg-purple-500 placeholder-white w-135 h-17 rounded-4xl'
              >
                <button className='bg-purple-950 text-white w-45 h-16 rounded-4xl text-xl ml-90'>
                  Subscribe
                </button>
              </button>
            </div>
          </div>

          <hr className='border border-gray-500 w-335 mt-25 ml-27' />
          <p className='text-gray-400 text-lg pl-120 pt-8'>
            @ 2025 Smart School | All rights reserved | Tems and Conditions | Privacy Policy
          </p>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
