import React from 'react';
import underline from '../Asset/title_shape-underline.jpg';
import mission from '../Asset/mission-image.png';
import AnimateOnScroll from './AnimateOnScroll';

const Mission = () => {
  return (
    <div>
      {/* Our Mission Statement Section */}
      <section className='mt-5 xl:mt-10'>
        <AnimateOnScroll>
          <h1 className='text-purple-500 text-xl md:text-4xl text-center font-bold mt-3 font-space-grotesk'>
            OUR MISSION STATEMENT
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <img
            src={underline}
            alt='underline image'
            className='w-60 md:w-120 h-auto mx-auto flex justify-center items-center mt-2'
          />
        </AnimateOnScroll>

        <div className='flex flex-col lg:flex-row w-[100%] lg:space-x-12 space-y-5 items-center justify-center'>
          <AnimateOnScroll className='w-full lg:w-1/2'>
            <p className='about-hero-content-paragraph text-[var(--color-gray-700)]'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              suscipit optio labore consequatur facere ullam. Reprehenderit
              assumenda adipisci, odit, praesentium porro culpa sequi magnam,
              doloremque sololu m cum nam iure. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Unde suscipit optio labore
              consequatur facere ullam. Reprehenderit assumenda adipisci, odit,
              praesentium porro culpa sequi magnam, doloremque solorum cum nam
              iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Unde suscipit optio labore consequatur facere ullam. Reprehenderit
              doloremque solorum cum nam iure. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Unde suscipit optio labore
              consequatur facere ullam. Reprehenderit doloremque solorum cum
              nam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Unde suscipit optio labore consequatur facere ullam. Reprehenderit
              doloremque solorum cum nam. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Unde suscipit optio labore
              consequatur facere ullam. Reprehenderit doloremque solorum cum
              nam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Unde suscipit optio labore consequatur facere ullam. Reprehenderit
              doloremque solorum cum nam.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll className='w-full lg:w-1/2'>
            <div className='w-full h-80 md:h-120 lg:h-120'>
              <img
                src={mission}
                alt='Principal'
                className='w-full h-full rounded-lg pt-7'
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Mission;
