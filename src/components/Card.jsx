import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import pupilImg from '../assets/image/pupils.png';
import AnimateOnScroll from './AnimateOnScroll';

export default function Card() {
  return (
    <section className='contact-card-container'>
      <div className='contact-card-content'>
        {/* Image Section */}
        <AnimateOnScroll
          className='contact-card-image-container'
          animationClasses='opacity-0 scale-90'
          inViewClasses='opacity-100 scale-100'
          transition='transition-all duration-700 ease-out'
        >
          <img
            src={pupilImg}
            alt='Students in classroom'
            className='contact-card-image'
          />
        </AnimateOnScroll>

        {/* Contact Info Section */}
        <AnimateOnScroll
          className='contact-card-info'
          delay='delay-150'
          animationClasses='opacity-0 translate-y-10'
          inViewClasses='opacity-100 translate-y-0'
          transition='transition-all duration-700 ease-out'
        >
          <h2 className='contact-card-into-title'>Reach Out To Smart School</h2>

          <div className='contact-card-info-container'>
            <div className='contact-card-info-content'>
              <FaMapMarkerAlt className='contact-card-info-icon' />
              <span>123 Example Street, Victoria Island, Lagos, Nigeria.</span>
            </div>
            <div className='contact-card-info-content'>
              <FaPhone className=' contact-card-info-icon ' />
              <span>07012345677, 07012345677</span>
            </div>
            <div className='contact-card-info-content'>
              <FaEnvelope className=' contact-card-info-icon' />
              <span>info@example.com</span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Working Hours Section */}
        <AnimateOnScroll
          className=' working-hour-bg contact-card-working-hours'
          delay='delay-300'
          animationClasses='opacity-0 translate-y-10'
          inViewClasses='opacity-100 translate-y-0'
          transition='transition-all duration-700 ease-out'
        >
          <h3 className='working-hour-title'>Working Hours</h3>
          <ul className='working-hour-days'>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(
              (day) => (
                <li key={day} className='working-hour-day'>
                  <span className='text-sm'>●</span> {day}
                </li>
              )
            )}
          </ul>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
