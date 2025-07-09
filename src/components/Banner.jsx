// import React from 'react';
// import bannerImage from '../assets/image/image.png';

// export default function Banner() {
//   return (
//     <>
//       <div className='relative'>
//         <img
//           src={bannerImage}
//           alt='Three students studying at desks'
//           className='w-full h-full object-cover'
//         />

//         {/* Overlay with Text */}
//         <div className='absolute inset-0 flex items-center pl-20'>
//           <div className='flex items-center space-x-2'>
//             <div className='w-1.5 h-10 bg-[var(--text-color)]' />
//             <h1 className='text-[var(--text-color)] text-3xl md:text-4xl lg:text-5xl font-bold pb-2'>
//               use param here
//             </h1>
//           </div>
//         </div>
//       </div>

//       <div className='text-center my-10'>
//         <h2 className='about-head text-4xl md:text-5xl font-bold mb-3'>
//           About Our School
//         </h2>
//         <p className='about-head text-lg md:text-xl text-gray-600 font-semibold'>
//           2025/2026 Session
//         </p>
//       </div>
//     </>
//   );
// }

import React from 'react';
import bannerImage from '../assets/image/image.png'; // Make sure this path is correct
import AnimateOnScroll from './AnimateOnScroll'; // Adjust path as necessary

export default function Banner() {
  return (
    <>
      {/* Main Banner Section (Image and Overlay Text) */}
      <AnimateOnScroll
        // You can customize these props for the main banner,
        // e.g., have it fade in slightly from the top.
        animationClasses='opacity-0 -translate-y-5'
        inViewClasses='opacity-100 translate-y-0'
        transition='transition-all duration-700 ease-out'
        // No className prop here, as the div it wraps already has relative positioning etc.
      >
        <div className='relative h-64 md:h-80 lg:h-96'>
          {' '}
          {/* Added height for visibility */}
          <img
            src={bannerImage}
            alt='Three students studying at desks'
            className='w-full h-full object-cover'
          />
          {/* Overlay with Text - The h1 will be part of the AnimateOnScroll effect */}
          <div className='absolute inset-0 flex items-center pl-20'>
            {/* The h1 and its associated div are direct children of AnimateOnScroll */}
            <div className='flex items-center space-x-2'>
              <div className='w-1.5 h-10 bg-[var(--text-color)]' />
              <h1 className='text-[var(--text-color)] text-3xl md:text-4xl lg:text-5xl font-bold pb-2'>
                use param here {/* Or {title} if you re-add the prop */}
              </h1>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* "About Our School" Header Section */}
      <AnimateOnScroll
        className='text-center my-10'
        delay='delay-200' // Add a slight delay for a staggered effect after the banner
        // Default animation (fade in from bottom) should work well here.
        // You can customize if you want a different effect, e.g.,:
        // animationClasses="opacity-0 scale-95" inViewClasses="opacity-100 scale-100"
      >
        <h2 className='about-head text-4xl md:text-5xl font-bold mb-3'>
          About Our School
        </h2>
        <p className='about-head text-lg md:text-xl text-gray-600 font-semibold'>
          2025/2026 Session
        </p>
      </AnimateOnScroll>
    </>
  );
}
