import React from 'react';
import underline from '../Asset/title_shape-underline.jpg';
import vision from '../Asset/vision-image.jpg';

const Vission = () => {
  return (
    <div>
      {/* Our Vision Statement Section */}
      <section className='mt-25'>
        <h1 className='text-purple-500 text-4xl text-center font-bold mt-3 font-space-grotesk'>
          OUR VISSION STATEMENT
        </h1>
        <img
          src={underline}
          alt='underline image'
          className='w-120 h-auto mx-auto flex justify-center items-center mt-2'
        />

        <div class="flex justify-between items-start w-full mt-15  ">
          <div class="flex-1 flex justify-start pr-4">
            <p className='text-2xl'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque soluta dololu m cum nam iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque soluta dolorum cum nam iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit
            </p>
          </div>
          <div class="flex-1 flex justify-end ">
            <img src={ vision } alt='vission-image'  />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vission;
