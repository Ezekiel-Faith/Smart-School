import React from "react";
import { HeroProperties } from "@/constants/properties";

export default function Hero(){
  return(
    <>
        <section className='lg:mb-25 md:mb-18 mb-10 md:w-auto'>
      <div className='relative hero-bg p-20 md:p-45 md:w-auto md:m-10'>
        <h1 className='lg:-mt-20 md:-ml-25 hero-txt font-project text-[25px] font-bold  md:text-[49px] md:normal-case md:font-[700] leading-[58.8px]'>{HeroProperties.title}</h1>
      </div>
      <div className='flex flex-col items-center justify-center p-4 m-7'>
        <h1 className='Admission-txt text-center text-[25px] md:text-[49px] font-[900] md:font-[700] leading-8 md:leading-[58.8px] normal-case txt font-project'>{HeroProperties.subtitle}</h1>
        <p className='txt text-center font-project text-[19px] md:text-[25px] normal-case font-[600] leading-[30px]'>{HeroProperties.session}</p>
      </div>
    </section>
    </>
  );
}