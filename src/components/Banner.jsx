import React from 'react'; // No need for useEffect or useState here for the main animation
import bannerImage from '../assets/images/image.png'; // Adjust path if necessary
import AnimateOnScroll from './AnimateOnScroll'; // Adjust path if necessary

export default function Banner({ title = 'use param here' }) {
  return (
    <div className='relative h-64 md:h-80 lg:h-96'>
      {' '}
      {/* Added a height for better visibility */}
      <img
        src={bannerImage}
        alt='Three students studying at desks'
        className='w-full h-full object-cover'
      />
      {/* Overlay with Text */}
      <div className='absolute inset-0 flex items-center pl-20'>
        {/* Wrap the content you want to animate with AnimateOnScroll */}
        <AnimateOnScroll
          // Default threshold (0.2) is fine, or adjust if you want it to appear sooner/later
          // Default animationClasses (opacity-0 translate-y-10) is also a good starting point
          // Default inViewClasses (opacity-100 translate-y-0) is also good
          // You can customize these props if you want a different animation for the banner title
          animationClasses='opacity-0 translate-y-8' // Matches your original slide-up effect
          inViewClasses='opacity-100 translate-y-0'
          transition='transition-all duration-700 ease-out' // Matches your original transition
        >
          <div className='flex items-center space-x-2'>
            <div className='w-1.5 h-10 bg-[var(--text-color)]' />
            <h1
              className={`text-[var(--text-color)] text-3xl md:text-4xl lg:text-5xl font-bold pb-2`}
              // The transition classes and opacity/transform are now managed by AnimateOnScroll's wrapper
              // So, we remove them from here.
            >
              {title}
            </h1>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
