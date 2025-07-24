import React from 'react';
import { StudentProperties } from '@/constants/properties';
import AnimateOnScroll from './AnimateOnScroll';

export default function Study() {
  return (
    <section className='about-hero'>
      <AnimateOnScroll
        inViewClasses='opacity-100 translate-y-10'
        animationClasses='opacity-0 translate-y-30'
        transition='transition-all duration-700 ease-out'
      >
        <div className='flex flex-col items-center justify-center space-y-5'>
          <h1 className=' about-head-title-color about-head-title-text'>
            {StudentProperties.heading}
          </h1>
          <p className='about-hero-content-paragraph text-[var(--color-gray-700)]'>
            {StudentProperties.description}
          </p>
          <button className='desktop-nav-actions-btn'>
            {StudentProperties.buttonText}
          </button>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
