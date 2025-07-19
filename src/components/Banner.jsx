import React from 'react';
import bannerImage from '../assets/image/image.png';
import AnimateOnScroll from './AnimateOnScroll';

export default function Banner({ title = 'use param here' }) {
  return (
    <>
      <div className='banner-container'>
        <img
          src={bannerImage}
          alt='Three students studying at desks'
          className='banner-img'
        />

        {/* Overlay with Text */}
        <div className='banner-overlay-container'>
          <AnimateOnScroll
            animationClasses='opacity-0 translate-y-8'
            inViewClasses='opacity-100 translate-y-0'
            transition='transition-all duration-700 ease-out'
          >
            <div className='banner-text-container'>
              <div className='banner-side-bar' />

              <h1 className='banner-title'>{title}</h1>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* "Our Programs" Header Section */}
      <AnimateOnScroll className='text-center about-hero' delay='delay-200'>
        <div>
          <h2 className='about-head-title-color about-head-title-text'>
            Our Programs
          </h2>
          <p className='about-head-title-color about-head-title-paragraph'>
            2025/2026 Session
          </p>
        </div>
      </AnimateOnScroll>
    </>
  );
}
