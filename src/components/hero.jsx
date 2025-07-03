import React from "react";
import { HeroProperties } from "@/constants/properties";

export default function Hero(){
  return(
    <>
        <section className='mb-25 md:w-auto'>
      <div className='relative hero-bg p-45 md:w-auto md:m-10'>
        <h1 className='-mt-20 hero-txt font-project text-[49px] normal-case font-[700] leading-[58.8px]'>{HeroProperties.title}</h1>
      </div>
      <div className='flex flex-col items-center justify-center p-4 m-7'>
        <h1 className='Admission-txt txt'>{HeroProperties.subtitle}</h1>
        <p className='txt text-center font-project text-[25px] normal-case font-[600] leading-[30px]'>{HeroProperties.session}</p>
      </div>
    </section>
    </>
  );
}