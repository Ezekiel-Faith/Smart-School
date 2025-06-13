import React from 'react';
import '../index.css';
import {headerProperties} from '../constants/properties';

export function Header() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <section className='flex items-center flex-col gap-2 bg-SoftLight'>
        <div>
          <h1 className='text-center text-3xl font-project text-[32px] md:text-[49px] font-[700] leading-[1.2] my-10 bg-linear-to-bl from-PurpleBlend to-PurpleBlend2 bg-clip-text text-transparent'>
            {headerProperties.title}
          </h1>
        </div>
      </section>
    </div>
  );
}