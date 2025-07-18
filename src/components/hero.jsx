import React from "react";
import bannerImage from '../assets/study-group-african-people 1.png'; // Ensure this path is correct
import { HeroProperties } from "@/constants/properties";
import AnimateOnScroll from "./AnimateOnScroller";

export default function Hero(){
  return(
    <>
        <section className='lg:mb-25 md:mb-18 mb-10 md:w-auto'>
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
                {HeroProperties.title}
              </h1>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
      <AnimateOnScroll
            animationClasses='opacity-0 translate-y-8' // Title slides up from bottom
            inViewClasses='opacity-100 translate-y-0'
            transition='transition-all duration-1500 ease-out' // Smooth transition
      >
      <div className='flex flex-col items-center justify-center p-4 m-7'>
        <h1 className='Admission-txt text-center text-[25px] md:text-[49px] font-[900] md:font-[700] leading-8 md:leading-[58.8px] normal-case txt font-project'>{HeroProperties.subtitle}</h1>
        <p className='txt text-center font-project text-[19px] md:text-[25px] normal-case font-[600] leading-[30px]'>{HeroProperties.session}</p>
      </div>
      </AnimateOnScroll>
    </section>
    </>
  );
}