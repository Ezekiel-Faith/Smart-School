import React from "react";
import bannerImage from '../assets/study-group-african-people 1.png'; // Ensure this path is correct
import { HeroProperties } from "@/constants/properties";
import AnimateOnScroll from "./AnimateOnScroller";

export default function Banner({ title = 'use param here' }) {
  return(
    <>
        <section className='lg:mb-20 md:mb-13 mb-5 md:w-auto'>
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

            <h1 className='banner-title'>{HeroProperties.title}</h1>
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