import React from 'react';
import {footerProperties } from '../constants/properties';

export function Footer() {
  return (
    <article className='flex items-center justify-center mt-10 mb-10 px-9'>
      <div className='relative w-full max-w-4xl px-4'>            
        <blockquote className="relative max-w-[90vw] mx-auto font-project font-normal text-center text-sm xs:text-base md:text-lg leading-relaxed mt-10 mb-10 px-4 py-2">
          <p className="relative px-8 md:px-12 mb-4">
            <svg 
              className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 transform -translate-y-1/2"
              fill="#9055FF" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <span className="block">
              {footerProperties.description}
            </span>
            
            <svg 
              className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 transform translate-y-1/2 rotate-180"
              fill="#9055FF" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </p>

          <footer className="text-base md:text-xl font-semibold">
            <span className="block">—      {footerProperties.name}</span>
            <span>{footerProperties.rank}</span>
          </footer>
        </blockquote>
      </div>
    </article>
  );
}