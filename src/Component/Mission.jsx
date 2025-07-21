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
        
        <div className="flex flex-col-reverse xl:flex-row md:justify-between items-start w-full mt-5">
          <div className="flex-1 flex justify-start mt-2 md:mt-0 xl:mt-2">
            <AnimateOnScroll>
            <p className='text-sm md:text-2xl'>
              
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque sololu m cum nam iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque solorum cum nam iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit doloremque solorum cum nam iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit doloremque solorum cum nam iure.
            </p>
            </AnimateOnScroll>
          </div>
          <div className="flex-1 flex justify-end">
            <AnimateOnScroll>
            <img src={mission} alt='vission-image' className='md:w-200 xl:w-auto mb-2 xl:mb-8' />
            </AnimateOnScroll>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Mission;
