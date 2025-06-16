import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import pupilImg from '../assets/image/pupils.png';

export default function Card() {
  return (
    <section>
      <div className='mx-auto flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden'>
        {/* Image Section */}
        <div className='w-full lg:w-1/3 h-72 lg:h-auto flex items-center justify-center'>
          <img
            src={pupilImg}
            alt='Students in classroom'
            className='w-full h-full object-cover'
          />
        </div>

        {/* Contact Info Section */}
        <div className='w-full lg:w-1/3 p-6 flex flex-col justify-center'>
          <h2 className='text-2xl lg:text-3xl font-bold text-gray-800 mb-5'>
            Reach Out To Smart School
          </h2>

          <div className='space-y-5 text-gray-700 text-[15px]'>
            <div className='flex items-start gap-3'>
              <FaMapMarkerAlt className='text-orange-500 text-xl mt-1' />
              <span>123 Example Street, Victoria Island, Lagos, Nigeria.</span>
            </div>
            <div className='flex items-start gap-3'>
              <FaPhone className='text-orange-500 text-xl mt-1' />
              <span>07012345677, 07012345677</span>
            </div>
            <div className='flex items-start gap-3'>
              <FaEnvelope className='text-orange-500 text-xl mt-1' />
              <span>info@example.com</span>
            </div>
          </div>
        </div>

        {/* Working Hours Section */}
        <div className='w-full lg:w-1/3 bg-gradient-to-b from-black to-red-700 text-white p-6 flex flex-col justify-center'>
          <h3 className='text-2xl font-semibold mb-4'>Working Hours</h3>
          <ul className='space-y-3 text-base'>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(
              (day) => (
                <li key={day} className='flex items-center gap-2'>
                  <span className='text-sm'>●</span> {day}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
