import React from 'react';
import underline from '../Asset/title_shape-underline.jpg';
import vision from '../Asset/vision-image.jpg';
import AnimateOnScroll from './AnimateOnScroll';

const Vission = () => {
  return (
    <div>
      {/* Our Vision Statement Section */}
      <section className='mt-10 xl:mt-15'>
        <div>
          <AnimateOnScroll>
          <h1 className='text-purple-500 text-xl md:text-4xl text-center font-bold mt-3 font-space-grotesk'>
            OUR VISSION STATEMENT
          </h1>

          <img
            src={underline}
            alt='underline image'
            className='w-60 md:w-120 h-auto mx-auto flex justify-center items-center mt-2'
          />
          </AnimateOnScroll>
          
          
          <div className="flex flex-col-reverse xl:flex-row md:justify-between items-start w-full mt-10">
            <div className="flex-1 flex justify-start mt-5 md:mt-0">
              <AnimateOnScroll>
              <p className='text-sm md:text-2xl'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque sololu m cum nam iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque solorum cum nam iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit doloremque solorum cum nam iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit doloremque solorum cum nam iure.
              </p>
              </AnimateOnScroll>
            </div>
            <div className="flex-1 flex justify-end">
              <AnimateOnScroll>
              <img
                src={vision}
                alt='vission-image'
                className='md:w-200 xl:w-auto mb-2'
              />
              </AnimateOnScroll>
            </div>
          </div>
         
        </div>
      </section>
    </div>
  );
};

export default Vission;
