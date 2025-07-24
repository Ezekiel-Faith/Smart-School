import React from 'react';
import { StudentProperties } from '@/constants/properties';
import AnimateOnScroll from './AnimateOnScroll';

export default function Study() {
  return (
    // <section className='mb-10 md:w-auto md:m-10'>
    <AnimateOnScroll
      inViewClasses='opacity-100 translate-y-10'
      animationClasses='opacity-0 translate-y-30'
      transition='transition-all duration-700 ease-out'
    >
      <div className='font-project flex flex-col items-start'>
        <h1 className='text-[39px] normal-case font-[700] leading-[46.8px] text-black mb-4 border'>
          {StudentProperties.heading}
        </h1>
        <p className='about-hero-content-paragraph text-[var(--color-gray-700)]'>
          {StudentProperties.description}
        </p>
        <button className='apply-btn flex w-[189px] h-[57px] py-[12px] px-[24px] justify-center items-center gap-[14.938px] bg-black text-white self-center rounded-[8px] mx-10 cursor-pointer hover:bg-linear-to-tr hover:from-purple-800 hover:to-black transition duration-500 ease-in-out my-20'>
          {StudentProperties.buttonText}
        </button>
      </div>
    </AnimateOnScroll>
    // </section>
  );
}
