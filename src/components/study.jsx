import React from 'react';
import { StudentProperties } from '@/constants/properties';

export default function Study(){
  return(
    <>
        <section className='mb-20 md:w-auto md:m-10'>
      <div className='font-project flex flex-col items-start'>
        <h1 className='text-[39px] normal-case font-[700] leading-[46.8px] text-black mb-4'>{StudentProperties.heading}</h1>
        <p className='font-project text-[20px] normal-case font-[400] leading-[24px] text-black '>
        {StudentProperties.description}
        </p>
        <button className='apply-btn bg-black text-white self-center rounded-[8px] mt-5 cursor-pointer hover:transform transition-all duration-300 hover:scale-90 '>{StudentProperties.buttonText}</button>
      </div>
    </section>
    </>
  )
}