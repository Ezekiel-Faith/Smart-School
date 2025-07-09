// import { schoolLevels } from '@/constants/students';
// import React from 'react';

// export default function SchoolLevelSection() {
//   return (
//     <section>
//       <div className=' mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
//         {schoolLevels.map((level) => (
//           <div
//             key={level.id}
//             className='overflow-hidden flex flex-col items-center'
//           >
//             {/* Image */}
//             <div className='w-full  mb-4'>
//               <img
//                 src={level.image}
//                 alt={level.title}
//                 className='w-full h-[350px] object-cover rounded-lg'
//               />
//             </div>

//             {/* Content */}
//             <h3 className='text-xl font-bold text-gray-800 mb-2'>
//               {level.title}
//             </h3>
//             <p className='text-gray-600 text-lg mb-6 text-center'>
//               {level.description}
//             </p>

//             {/* Button */}
//             <button
//               href={level.curriculumLink}
//               className='level-btn inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-full'
//             >
//               {/* Icon (SVG) */}
//               <svg
//                 xmlns='http://www.w3.org/2000/svg'
//                 className='h-5 w-5 mr-2'
//                 viewBox='0 0 20 20'
//                 fill='currentColor'
//               >
//                 <path
//                   fillRule='evenodd'
//                   d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
//                   clipRule='evenodd'
//                 />
//               </svg>
//               {level.buttonText}
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { schoolLevels } from '@/constants/students'; // Ensure this path is correct for your project
import React from 'react';
import AnimateOnScroll from './AnimateOnScroll'; // Adjust path if necessary, e.g., '../components/AnimateOnScroll'

export default function SchoolLevelSection() {
  return (
    <section className='py-12 px-4'>
      {' '}
      {/* Added vertical and horizontal padding for better spacing */}
      <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {schoolLevels.map((level, index) => (
          // Wrap each individual school level div with AnimateOnScroll
          <AnimateOnScroll
            key={level.id} // Keep the key on the outermost mapped element
            delay={`delay-${index * 100}`} // Staggered delay: 0ms, 100ms, 200ms, etc.
            // Cards will slide up and fade in
            animationClasses='opacity-0 translate-y-10'
            inViewClasses='opacity-100 translate-y-0'
            transition='transition-all duration-700 ease-out' // Smooth animation duration
            // Apply original styling to the AnimateOnScroll wrapper div
            className='overflow-hidden flex flex-col items-center'
          >
            {/* Image */}
            <div className='w-full mb-4'>
              <img
                src={level.image}
                alt={level.title}
                className='w-full h-[350px] object-cover rounded-lg'
              />
            </div>

            {/* Content */}
            <h3 className='text-xl font-bold text-gray-800 mb-2'>
              {level.title}
            </h3>
            <p className='text-gray-600 text-lg mb-6 text-center'>
              {level.description}
            </p>

            {/* Button - Consider using an <a> tag if it navigates to a new page/section */}
            <button
              // Note: An `href` attribute on a `<button>` tag is not standard HTML.
              // If this button is meant for navigation, an `<a>` tag styled as a button is more appropriate.
              href={level.curriculumLink}
              className='level-btn inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-full'
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
