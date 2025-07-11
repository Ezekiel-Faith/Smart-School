import React from 'react';
import underline from '../Asset/title_shape-underline.jpg';
import principal from '../Asset/principal-img.jpg';
import { motion } from 'framer-motion'; // Import motion

const Principal = () => {
  // Define variants for the animation (consistent with Mission and Vission)
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 }, // Start slightly smaller and invisible for the whole section
    visible: {
      opacity: 1,
      scale: 1, // Scale to normal size
      transition: {
        duration: 1.9, // Long duration for a slow ease out
        ease: 'easeOut', // Easing function
        staggerChildren: 0.2, // Stagger children for a subtle delay
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Start slightly below and invisible
    visible: {
      opacity: 1,
      y: 0, // Move to original position
      transition: {
        duration: 1, // Duration for individual items
        ease: 'easeOut', // Easing for individual items
      },
    },
  };

  return (
    <div>
      {/* Official Statement From The Principal Section */}
      <section className='mt-25 '>
        {/* Wrap the entire section content that you want to animate */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Animate when it enters the viewport
          viewport={{ once: true, amount: 0.3 }} // Animate once when 30% visible
        >
          {/* Apply itemVariants to the h1 */}
          <motion.h1
            className='text-purple-500 text-xl md:text-3xl text-center font-bold mt-3 font-sans-serif'
            variants={itemVariants} // Apply itemVariants here
          >
            OFFICIAL STATEMENT FROM THE PRINCIPALss
          </motion.h1>
          {/* Apply itemVariants to the img */}
          <motion.img
            src={underline}
            alt='underline image'
            className='w-60 md:w-120 h-auto mx-auto flex justify-center items-center mt-2'
            variants={itemVariants} // Apply itemVariants here
          />

          <div className="flex flex-col-reverse md:flex-row md:justify-between items-start w-full mt-5 md:mt-15">
            {/* Apply motion to the principal image container */}
            <motion.div className="flex-1 flex justify-start mt-4 md:mt-0" variants={itemVariants}>
              <img src={principal} alt='principal-image' />
            </motion.div>
            {/* Apply motion to the paragraph container */}
            <motion.div className="flex-1 flex justify-end " variants={itemVariants}>
              <p className='text-sm md:text-2xl font-space-grotesk'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque soluta dolorum cum nam iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque soluta dolorum cum nam iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Principal;