import React from 'react';
import bannerImage from '../assets/image/image.png';
import AnimateOnScroll from './AnimateOnScroll';

// Banner component displays a banner image with an overlaid title and an optional "Our Programs" header.
// It uses the AnimateOnScroll component for smooth entrance animations.
export default function Banner({
  title = 'use param here', // The title text displayed on the banner. Defaults to 'use param here'.
  showProgramsHeader = false, // New prop: if true, the "Our Programs" section will be rendered.
}) {
  return (
    <>
      {/* Main banner container */}
      <div className='banner-container'>
        {/* Banner image */}
        <img
          src={bannerImage}
          alt='Three students studying at desks'
          className='banner-img'
        />

        {/* Overlay for the text content */}
        <div className='banner-overlay-container'>
          {/* AnimateOnScroll for the banner title to animate its entrance */}
          <AnimateOnScroll
            animationClasses='opacity-0 translate-y-8'
            inViewClasses='opacity-100 translate-y-0'
            transition='transition-all duration-700 ease-out'
          >
            {/* Container for the banner title and side bar */}
            <div className='banner-text-container'>
              <div className='banner-side-bar' /> {/* Decorative side bar */}
              <h1 className='banner-title'>{title}</h1>{' '}
              {/* Display the banner title */}
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Conditionally rendered "Our Programs" Header Section */}
      {showProgramsHeader && ( // Only render if showProgramsHeader is true
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
      )}
    </>
  );
}
