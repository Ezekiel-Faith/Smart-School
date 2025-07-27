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
  const items = [
    {
      img: why1,
      title: "Nursery School's curriculum",
      desc: 'Lorem ipsum dolor sit, amet consectetur. sed nulla morbi ellefend placerat convallis',
    },
    {
      img: why2,
      title: "Primary School's curriculum",
      desc: 'Lorem ipsum dolor sit, amet consectetur. sed nulla morbi ellefend placerat convallis',
    },
    {
      img: why3,
      title: "Secondary School's curriculum",
      desc: 'Lorem ipsum dolor sit, amet consectetur. sed nulla morbi ellefend placerat convallis',
    },
    {
      img: why4,
      title: 'Modern Facilities',
      desc: 'We provide a safe, tech-enhanced, environment with',
    },
    {
      img: why5,
      title: 'Small Class Size',
      desc: 'Ensuring personalised attention and better student',
    },
    {
      img: why6,
      title: 'Parental Involvement',
      desc: 'We foster strong partnership with parents for support',
    },
  ];

  // No need to animate the container anymore with staggerChildren
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 1.2,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div>
      {/* Why Smart School Section */}
      <section>
        <motion.h1
          className='text-purple-500 text-xl md:text-4xl text-center font-bold mt-3 font-space-grotesk'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.3 }}
          variants={itemVariants}
          custom={0}
        >
          WHY SMART SCHOOL?
        </motion.h1>

        <motion.img
          src={underline}
          alt='underline image'
          className='w-60 md:w-120 h-auto mx-auto flex justify-center items-center mt-2'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.3 }}
          variants={itemVariants}
          custom={1}
        />

        {/* Grid without containerVariants */}
        <div className='grid lg:grid-cols-3 gap-x-10 gap-y-10 py-10 place-items-center'>
          {items.map((item, index) => (
            <motion.div
              key={index}
              // className='grid place-items-center text-center'
              className='flex flex-col items-center text-center'
              variants={itemVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false, amount: 0.3 }}
              custom={index}
            >
              <img
                src={item.img}
                alt={`why-img-${index + 1}`}
                className='mb-5'
              />
              <h2 className='font-space-grotesk text-gray-500 font-bold text-xl md:text-2xl mb-5'>
                {item.title}
              </h2>
              <p className='font-space-grotesk text-gray-500 text-lg md:text-xl lg:text-base'>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhySmartSchool;
