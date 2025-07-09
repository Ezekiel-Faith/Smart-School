import React from 'react';
import bannerImage from '../assets/image/image.png';
import AnimateOnScroll from './AnimateOnScroll';
// import { title } from 'process';

export default function Banner({ title = 'use param here' }) {
  return (
    <>
      <div className='relative mb-5'>
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
    </>
  );
}
