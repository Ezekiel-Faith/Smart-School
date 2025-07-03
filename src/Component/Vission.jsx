import React from 'react';
import underline from '../Asset/title_shape-underline.jpg';
import vision from '../Asset/vision-image.jpg';
import { motion } from 'framer-motion'; // Import motion

const Vission = () => {
  // Define variants for the animation
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 }, // Slightly less scale for the whole section
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.9,
        ease: 'easeOut',
        staggerChildren: 0.2, // Stagger children for a subtle delay
      },
    },
  };

  // Variants for individual items within the staggered animation
  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Start slightly below and invisible
    visible: {
      opacity: 1,
      y: 0, // Move to original position
      transition: {
        duration: 1, // Shorter duration for individual items to keep flow
        ease: 'easeOut',
      },
    },
  };

  return (
    <div>
      {/* Our Vision Statement Section */}
      <section className='mt-25 '>
        {/* Wrap the entire section content that you want to animate */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Apply itemVariants to the h1 */}
          <motion.h1
            className='text-purple-500 text-4xl text-center font-bold mt-3 font-space-grotesk'
            variants={itemVariants} // Apply itemVariants here
          >
            OUR VISSION STATEMENT
          </motion.h1>
          {/* Apply itemVariants to the img */}
          <motion.img
            src={underline}
            alt='underline image'
            className='w-120 h-auto mx-auto flex justify-center items-center mt-2'
            variants={itemVariants} // Apply itemVariants here
          />

          {/* This div is already a motion.div and its children are also motion.divs */}
          <div className="flex justify-between items-start w-full mt-15">
            <motion.div className="flex-1 flex justify-start" variants={itemVariants}>
              <p className='text-2xl'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque sololu m cum nam iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque solorum cum nam iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit
              </p>
            </motion.div>
            <motion.div className="flex-1 flex justify-end" variants={itemVariants}>
              <img src={vision} alt='vission-image' />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Vission;