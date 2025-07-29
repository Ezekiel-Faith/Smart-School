import rec from '../assets/Rectangle.png';
import {
  DownloadProperties,
  SubscribeProperties,
} from '@/constants/properties';
import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

export default function DownloadNews() {
  return (
    <>
      <AnimateOnScroll
        inViewClasses='opacity-100 translate-y-10'
        animationClasses='opacity-0 translate-y-30'
        transition='transition-all duration-700 ease-out'
      >
        <section>
          <AnimateOnScroll
            inViewClasses='opacity-100 translate-y-10'
            animationClasses='opacity-0 translate-y-30'
            transition='transition-all duration-700 ease-out'
            className='form-container p-10 flex flex-col items-center justify-center'
          >
            <h1 className='text-center text-white font-[600] text-[31px] normal-case leading-[37.2px] font-project md:mb-20 mb-10'>
              {DownloadProperties.title}
            </h1>

            <button className='text-center text-white font-project cursor-pointer inline-flex px-5 py-5 text-[13px] md:text-xl justify-center items-center gap-[10px] rounded-[24px] bg-gradient-to-r from-[#D30000] to-[#222] download-btn'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='17'
                viewBox='0 0 16 17'
                fill='none'
              >
                <path
                  d='M8 12.075C7.86667 12.075 7.74167 12.0543 7.625 12.013C7.50833 11.9717 7.4 11.9007 7.3 11.8L3.7 8.2C3.5 8 3.404 7.76667 3.412 7.5C3.42 7.23334 3.516 7 3.7 6.8C3.9 6.6 4.13767 6.496 4.413 6.488C4.68833 6.48 4.92567 6.57567 5.125 6.775L7 8.65V1.5C7 1.21667 7.096 0.979337 7.288 0.788004C7.48 0.59667 7.71733 0.50067 8 0.500003C8.28267 0.499337 8.52033 0.595337 8.713 0.788004C8.90567 0.98067 9.00133 1.218 9 1.5V8.65L10.875 6.775C11.075 6.575 11.3127 6.479 11.588 6.487C11.8633 6.495 12.1007 6.59934 12.3 6.8C12.4833 7 12.5793 7.23334 12.588 7.5C12.5967 7.76667 12.5007 8 12.3 8.2L8.7 11.8C8.6 11.9 8.49167 11.971 8.375 12.013C8.25833 12.055 8.13333 12.0757 8 12.075ZM2 16.5C1.45 16.5 0.979333 16.3043 0.588 15.913C0.196666 15.5217 0.000666667 15.0507 0 14.5V12.5C0 12.2167 0.0960001 11.9793 0.288 11.788C0.48 11.5967 0.717333 11.5007 1 11.5C1.28267 11.4993 1.52033 11.5953 1.713 11.788C1.90567 11.9807 2.00133 12.218 2 12.5V14.5H14V12.5C14 12.2167 14.096 11.9793 14.288 11.788C14.48 11.5967 14.7173 11.5007 15 11.5C15.2827 11.4993 15.5203 11.5953 15.713 11.788C15.9057 11.9807 16.0013 12.218 16 12.5V14.5C16 15.05 15.8043 15.521 15.413 15.913C15.0217 16.305 14.5507 16.5007 14 16.5H2Z'
                  fill='#F1F1F1'
                />
              </svg>
              {DownloadProperties.buttonText}
            </button>
          </AnimateOnScroll>

          {/* Newsletter Section */}
          <div className='w-full mb-10 relative md:flex lg:flex-row flex-col items-center faq-container py-10 px-5 md:px-10 mt-20 justify-between rounded-[8px] bg-black'>
            <div className='subscribe-header mx-5 mb-10 lg:w-1/2'>
              <h1 className='self-stretch md:text-[29px] text-2xl text-white normal-case font-[700] leading-[30px] font-project mb-5 md:mb-10'>
                {SubscribeProperties.header}
              </h1>
              <p className='md:text-[18px] normal-case font-[400] font-project self-stretch text-white leading-[19.2px] w-full description'>
                {SubscribeProperties.description}
              </p>
            </div>

            <div className='sub-form lg:w-1/2 z-10 md:self-start lg:self-center w-full '>
              <form className='subscribe-form flex justify-center items-center md:gap-[10px] gap-[5px] rounded-[32px] z-10'>
                <input
                  type='email'
                  placeholder={SubscribeProperties.emailPlaceholder}
                  className='email-input text-[16px] font-[600] px-4 py-2 rounded-[32px] flex-1 min-w-0 focus:outline-none focus:ring-0 invalid:text-red-400 focus:invalid:outline-red-500 focus:invalid:border-red-400'
                  required
                />

                <button
                  type='submit'
                  className='submit-btn text-white font-semibold cursor-pointer
                    px-[12px] py-[8px] text-[14px]
                    md:px-[24px] md:py-[14px] md:text-[16px]
                    rounded-[32px] whitespace-nowrap'
                >
                  {SubscribeProperties.subscribeButtonText}
                </button>
              </form>
            </div>
            <img
              src={rec}
              alt=''
              className='rec absolute z-0 bottom-0 right-0 w-full '
            />
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
