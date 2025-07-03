import React from 'react';
import underline from '../Asset/title_shape-underline.jpg';
import why1 from '../Asset/why-img-1.jpg';
import why2 from '../Asset/why-img-1.jpg'; // Note: why2 and why1 are the same image, as per your code
import why3 from '../Asset/why-img-2.jpg';
import why4 from '../Asset/why-img-3.jpg';
import why5 from '../Asset/why-img-4.jpg';
import why6 from '../Asset/why-img-5.jpg';
import { motion } from 'framer-motion'; // Import motion

const WhySmartSchool = () => {
  // Define animation variants for a staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Each child animates 0.2 seconds after the previous
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5, // Longer duration for a slower animation
        ease: 'easeOut', // Slow ease-out effect
      },
    },
  };

  return (
    <div>
      {/* Why Smart School Section */}
      <section>
        <h1 className='text-purple-500 text-4xl text-center font-bold mt-3 font-space-grotesk'>WHY SMART SCHOOL?</h1>
        <img
          src={underline}
          alt='underline image'
          className='w-120 h-auto mx-auto flex justify-center items-center mt-2'
        />
        {/* Apply motion to the grid container */}
        <motion.div
          className='grid grid-cols-3 gap-28 py-20 px-65'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Animates when the element comes into view
          viewport={{ once: true, amount: 0.3 }} // Only animate once, when 30% of the element is visible
        >
          {/* Apply motion to each individual item */}
          <motion.div className='grid place-items-center text-center' variants={itemVariants}>
            <img src={why1} alt='why-img-1' className="mb-5" />
            <h2 className='font-space-grotesk font-bold text-2xl mb-5'>Nursery School's curriculum</h2>
            <p className='font-space-grotesk'>Lorem ipsum dolor sit, amet consectetur. sed nulla morbi ellefend placerat convallis</p>
          </motion.div>
          <motion.div className='grid place-items-center text-center' variants={itemVariants}>
            <img src={why2} alt='why-img-2' className="mb-5" />
            <h2 className='font-space-grotesk font-bold text-2xl mb-5'>Primary School's curriculum</h2>
            <p>Lorem ipsum dolor sit, amet consectetur. sed nulla morbi ellefend placerat convallis</p>
          </motion.div>
          <motion.div className='grid place-items-center text-center' variants={itemVariants}>
            <img src={why3} alt='why-img-3' className="mb-5" />
            <h2 className='font-space-grotesk font-bold text-2xl mb-5'>Secondary School's curriculum</h2>
            <p>Lorem ipsum dolor sit, amet consectetur. sed nulla morbi ellefend placerat convallis</p>
          </motion.div>
          <motion.div className='grid place-items-center text-center' variants={itemVariants}>
            <img src={why4} alt='why-img-4' className="mb-5" />
            <h2 className='font-space-grotesk font-bold text-2xl mb-5'>Modern Facilities</h2>
            <p>We provide a safe, tech-enhanced, environment with</p>
          </motion.div>
          <motion.div className='grid place-items-center text-center' variants={itemVariants}>
            <img src={why5} alt='why-img-5' className="mb-5" />
            <h2 className='font-space-grotesk font-bold text-2xl mb-5'>Small Class Size</h2>
            <p>Ensuring personalised attention and better student</p>
          </motion.div>
          <motion.div className='grid place-items-center text-center' variants={itemVariants}>
            <img src={why6} alt='why-img-6' className="mb-5" />
            <h2 className='font-space-grotesk font-bold text-2xl mb-5'>Parental Involvement</h2>
            <p>We foster strong partnership with parents for support</p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default WhySmartSchool;