import { schoolLevels } from '@/constants/students';
import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

export default function SchoolLevelSection() {
  return (
    <section>
      <div className='academic-level-container'>
        {schoolLevels.map((level, index) => (
          <AnimateOnScroll
            key={level.id}
            delay={`delay-${index * 100}`}
            animationClasses='opacity-0 translate-y-10'
            inViewClasses='opacity-100 translate-y-0'
            transition='transition-all duration-700 ease-out'
            className='overflow-hidden flex flex-col items-center'
          >
            {/* Image */}
            <div className='academic-level-img-container'>
              <img
                src={level.image}
                alt={level.title}
                className='academic-level-img'
              />
            </div>

            {/* Content */}
            <h3 className='academic-level-title'>{level.title}</h3>
            <p className='academic-level-paragraph '>{level.description}</p>

            <button
              href={level.curriculumLink}
              className='academic-level-btn inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-full'
            >
              {/* Icon (SVG) */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 mr-2'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
              {level.buttonText}
            </button>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
