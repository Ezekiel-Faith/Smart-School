import React from 'react';
import '../index.css';
import { headerProperties } from '../constants/properties';
import AnimateOnScroll from './AnimateOnScroll';

export function Header() {
  return (
    <>
      <AnimateOnScroll className='text-center about-hero' delay='delay-200'>
        <div>
          <h2 className='about-head-title-color about-head-title-text mt-15 md:mt-25'>
            {headerProperties.title}
          </h2>
        </div>
      </AnimateOnScroll>
    </>
  );
}
