import React from 'react';
import underline from '../Asset/title_shape-underline.jpg';
import mission from '../Asset/mission-image.png';
import { motion } from 'framer-motion';

const Mission = () => {
  const containerVariants = {
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1.9,
          ease: 'easeOut',
          staggerChildren: 0.2,
        },
      },
    };
  
    const itemVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          ease: 'easeOut',
        },
      },
    };
  
    return (
      <div>
        {/* Our Mision Statement Section */}
        <section className='mt-25'>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // ✅ Enables scroll-up animation
          >
            <motion.h1
              className='text-purple-500 text-xl md:text-4xl text-center font-bold mt-3 font-space-grotesk'
              variants={itemVariants}
            >
              OUR MISSION STATEMENT
            </motion.h1>
  
            <motion.img
              src={underline}
              alt='underline image'
              className='w-60 md:w-120 h-auto mx-auto flex justify-center items-center mt-2'
              variants={itemVariants}
            />
  
            <div className="flex flex-col-reverse xl:flex-row md:justify-between  items-start w-full mt-10">
              <motion.div className="flex-1 flex justify-start mt-2 md:mt-0" variants={itemVariants}>
                <p className='text-sm md:text-2xl'>
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque sololu m cum nam iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque solorum cum nam iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit doloremque solorum cum nam iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit doloremque solorum cum nam iure.
                </p>
              </motion.div>
              <motion.div className="flex-1 flex justify-end" variants={itemVariants}>
                <img src={mission} alt='vission-image'className='md:w-200 xl:w-auto  mb-8' />
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    );
  };

export default Mission;
