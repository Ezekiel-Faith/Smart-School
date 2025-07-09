// import React from 'react';
// import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
// import pupilImg from '../assets/image/pupils.png';

// export default function Card() {
//   return (
//     <section className='flex items-center justify-center contact-card-bg p-6'>
//       <div className='mx-auto flex flex-col lg:flex-row overflow-hidden'>
//         {/* Image Section */}
//         <div className='w-full lg:w-1/3 h-72 lg:h-auto flex items-center justify-center'>
//           <img
//             src={pupilImg}
//             alt='Students in classroom'
//             className='w-full h-full object-cover rounded-xl'
//           />
//         </div>

//         {/* Contact Info Section */}
//         <div className='w-full lg:w-1/2 p-6 flex flex-col'>
//           <h2 className='text-2xl lg:text-4xl font-bold text-gray-800 mb-10'>
//             Reach Out To Smart School
//           </h2>

//           <div className='space-y-8 text-gray-700 text-[20px]'>
//             <div className='flex items-start gap-3'>
//               <FaMapMarkerAlt className='text-orange-500 text-xl mt-1' />
//               <span>123 Example Street, Victoria Island, Lagos, Nigeria.</span>
//             </div>
//             <div className='flex items-start gap-3'>
//               <FaPhone className='text-orange-500 text-xl mt-1' />
//               <span>07012345677, 07012345677</span>
//             </div>
//             <div className='flex items-start gap-3'>
//               <FaEnvelope className='text-orange-500 text-xl mt-1' />
//               <span>info@example.com</span>
//             </div>
//           </div>
//         </div>

//         {/* Working Hours Section */}
//         <div className='w-full lg:w-1/4 rounded-b-xl working-hour-bg text-white p-6 flex flex-col lg:ml-auto'>
//           <h3 className='text-3xl font-semibold mb-6'>Working Hours</h3>
//           <ul className='space-y-7 text-xl'>
//             {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(
//               (day) => (
//                 <li key={day} className='flex items-center gap-2'>
//                   <span className='text-sm'>●</span> {day}
//                 </li>
//               )
//             )}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import pupilImg from '../assets/image/pupils.png'; // Ensure this path is correct
import AnimateOnScroll from './AnimateOnScroll'; // Adjust path as necessary

export default function Card() {
  return (
    <section className='flex items-center justify-center contact-card-bg p-6'>
      <div className='mx-auto flex flex-col lg:flex-row overflow-hidden'>
        {/* Image Section - Wrapped with AnimateOnScroll */}
        <AnimateOnScroll
          className='w-full lg:w-1/3 h-72 lg:h-auto flex items-center justify-center'
          animationClasses='opacity-0 scale-90' // Starts slightly scaled down and transparent
          inViewClasses='opacity-100 scale-100' // Fades in and scales up
          transition='transition-all duration-700 ease-out'
        >
          <img
            src={pupilImg}
            alt='Students in classroom'
            className='w-full h-full object-cover rounded-xl'
          />
        </AnimateOnScroll>

        {/* Contact Info Section - Wrapped with AnimateOnScroll */}
        <AnimateOnScroll
          className='w-full lg:w-1/2 p-6 flex flex-col'
          delay='delay-150' // Slight delay after the image
          animationClasses='opacity-0 translate-y-10' // Slides up from bottom
          inViewClasses='opacity-100 translate-y-0'
          transition='transition-all duration-700 ease-out'
        >
          <h2 className='text-2xl lg:text-4xl font-bold text-gray-800 mb-10'>
            Reach Out To Smart School
          </h2>

          <div className='space-y-8 text-gray-700 text-[20px]'>
            {/* You could even wrap each contact detail for more granular animation */}
            <div className='flex items-start gap-3'>
              <FaMapMarkerAlt className='text-orange-500 text-xl mt-1' />
              <span>123 Example Street, Victoria Island, Lagos, Nigeria.</span>
            </div>
            <div className='flex items-start gap-3'>
              <FaPhone className='text-orange-500 text-xl mt-1' />
              <span>07012345677, 07012345677</span>
            </div>
            <div className='flex items-start gap-3'>
              <FaEnvelope className='text-orange-500 text-xl mt-1' />
              <span>info@example.com</span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Working Hours Section - Wrapped with AnimateOnScroll */}
        <AnimateOnScroll
          className='w-full lg:w-1/4 rounded-b-xl working-hour-bg text-white p-6 flex flex-col lg:ml-auto'
          delay='delay-300' // Further delay for the working hours
          animationClasses='opacity-0 translate-y-10' // Slides up from bottom
          inViewClasses='opacity-100 translate-y-0'
          transition='transition-all duration-700 ease-out'
        >
          <h3 className='text-3xl font-semibold mb-6'>Working Hours</h3>
          <ul className='space-y-7 text-xl'>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(
              (day) => (
                <li key={day} className='flex items-center gap-2'>
                  <span className='text-sm'>●</span> {day}
                </li>
              )
            )}
          </ul>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
