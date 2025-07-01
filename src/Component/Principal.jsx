import React from 'react';
import underline from '../Asset/title_shape-underline.jpg';
import principal from '../Asset/principal-img.jpg';

const Principal = () => {
  return (
    <div>
      {/* Official Statement From The Principal Section */}
      <section className='mt-25'>
        <h1 className='text-purple-500 text-3xl text-center font-bold mt-3 font-sans-serif'>
          OFFICIAL STATEMENT FROM THE PRINCIPAL
        </h1>
        <img
          src={underline}
          alt='underline image'
          className='w-120 h-auto mx-auto flex justify-center items-center mt-2'
        />

        <div class="flex justify-between items-start w-full mt-15  text-justify">
                  <div class="flex-1 flex justify-start pr-4">
                   <img src={principal} alt='mission-image'  />
                  </div>
                  <div class="flex-1 flex justify-end ">
                     <p className='text-2xl font-space-grotesk'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque soluta dolorum cum nam iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque soluta dolorum cum nam iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit.
                    </p>
                  </div>
                </div>
      </section>
    </div>
  );
};

export default Principal;
