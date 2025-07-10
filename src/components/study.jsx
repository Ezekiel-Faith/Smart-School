import React from 'react';
import { StudentProperties } from '@/constants/properties';

export default function Study(){
  return(
    <>
        <section className='mb-10 md:w-auto md:m-10'>
      <div className='font-project flex flex-col items-start'>
        <h1 className='text-[39px] normal-case font-[700] leading-[46.8px] text-black mb-4'>{StudentProperties.heading}</h1>
        <p className='font-project text-[20px] normal-case font-[400] leading-[24px] text-black'>
        {StudentProperties.description}
        </p>
        <button className='apply-btn flex w-[189px] h-[57px] py-[12px] px-[24px] justify-center items-center gap-[14.938px] bg-black text-white self-center rounded-[8px] mx-10 cursor-pointer hover:bg-linear-to-tr hover:from-purple-800 hover:to-black transition duration-500 ease-in-out my-20'>{StudentProperties.buttonText}</button>
      </div>
    </section>
    </>
)
}