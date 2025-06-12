import React from 'react';
import bannerImage from '../assets/image/image.png';

export default function Banner() {
  return (
    <>
      <div className='relative'>
        <img
          src={bannerImage}
          alt='Three students studying at desks'
          className='w-full h-full object-cover'
        />

        {/* Overlay with Text */}
        <div className='absolute inset-0 flex items-center pl-20'>
          <div className='flex items-center space-x-2'>
            <div className='w-1.5 h-10 bg-[var(--text-color)]' />
            <h1 className='text-[var(--text-color)] text-3xl md:text-4xl lg:text-5xl font-bold pb-2'>
              use param here
            </h1>
          </div>
        </div>
      </div>

      <div className='text-center my-10'>
        <h2 className='about-head text-4xl md:text-5xl font-bold mb-3'>
          About Our School
        </h2>
        <p className='about-head text-lg md:text-xl text-gray-600 font-semibold'>
          2025/2026 Session
        </p>
      </div>
    </>
  );
}
