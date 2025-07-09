import React from 'react';
import bannerImage from '../assets/image/image.png'; // Make sure this path is correct
import AnimateOnScroll from './AnimateOnScroll'; // Adjust path if necessary

export default function Banner({ title = 'use param here' }) {
  return (
    <>
      {/* Main Banner Section (Image and Overlay Text) */}
      <div className='relative h-64 md:h-80 lg:h-96'>
        <img
          src={bannerImage}
          alt='Three students studying at desks'
          className='w-full h-full object-cover'
        />
        {/* Overlay with Text */}
        <div className='absolute inset-0 flex items-center pl-20'>
          {/* AnimateOnScroll wraps ONLY the specific div containing the h1 and line */}
          <AnimateOnScroll
            animationClasses='opacity-0 translate-y-8' // Title slides up from bottom
            inViewClasses='opacity-100 translate-y-0'
            transition='transition-all duration-700 ease-out' // Smooth transition
          >
            <div className='flex items-center space-x-2'>
              <div className='w-1.5 h-10 bg-[var(--text-color)]' />
              <h1 className='text-[var(--text-color)] text-3xl md:text-4xl lg:text-5xl font-bold pb-2'>
                {title}
              </h1>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* "Our Programs" Header Section - NOW WITH AnimateOnScroll */}
      <AnimateOnScroll
        className='text-center my-10'
        delay='delay-200' // Add a slight delay for a staggered effect after the banner
        // Default animation (fade in from bottom) works well here.
      >
        <h2 className='about-head text-4xl md:text-5xl font-bold mb-3'>
          Our Programs
        </h2>
        <p className='about-head text-lg md:text-xl text-gray-600 font-semibold'>
          2025/2026 Session
        </p>
      </AnimateOnScroll>
    </>
  );
}
