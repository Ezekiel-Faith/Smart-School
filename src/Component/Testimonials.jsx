import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    text: "Since joining Smart School, my daughter has become more engaged with her studies. The learning tools are interactive, and I’ve seen a real boost in her confidence and academic performance.",
    author: "Mrs. Adaobi Okeke"
  },
  {
    text: "What I appreciate most is how Smart School tails learning to fit each child. My son now enjoys subjects he used to avoid, and his results have improved significantly.",
    author: "Mr. Emeka Johnson"
  },
  {
    text: "The school’s use of technology is impressive—from secure entry systems to instant updates. I always know my child is safe and actively learning.",
    author: "Mrs. Fatima Suleiman"
  },
  {
    text: "I love how the teachers at Smart School genuinely care about each student’s progress. My daughter feels supported and valued.",
    author: "Mrs. Chiamaka Umeh"
  },
  {
    text: "The extracurricular activities are fantastic. My son is now passionate about coding and robotics thanks to Smart School.",
    author: "Mr. Tunde Bamidele"
  },
  {
    text: "Smart School has built a great learning environment. My child’s communication and problem-solving skills have improved remarkably.",
    author: "Mrs. Yetunde Balogun"
  },
  {
    text: "The online learning platform is seamless. My child can easily catch up on lessons when absent, which has been a life-saver for us.",
    author: "Mrs. Grace Obi"
  },
  {
    text: "The school’s focus on character development is a big plus. My son has grown to be more respectful and responsible.",
    author: "Mr. Ibrahim Musa"
  },
  {
    text: "The parent-teacher communication at Smart School is outstanding. I always know how my child is doing and where to support.",
    author: "Mrs. Ngozi Eze"
  },
  {
    text: "My daughter used to dread school, but now she wakes up excited every day. Smart School has truly changed her attitude towards learning.",
    author: "Mrs. Amina Bello"
  }
];

const Testimonials = () => {
  return (
    <div>
      <section className="relative mt-20 ">
        <div className='bg-purple-500 h-50 w-full flex flex-col justify-center items-center'>
          <h2 className='text-white text-3xl font-bold text-center -mt-20 font-space-grotesk'>TESTIMONIALS</h2>
          <p className='text-white text-2xl text-center font-space-grotesk'>What parents are saying about us</p>
        </div>

        <div className='bg-purple-100 w-full pb-16 relative h-120'></div>

        <div className="max-w-7xl mx-30 -mt-140 h-100">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={70}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            loop={true}
            className="mySwiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="bg-white p-6 md:p-8 rounded-2xl border-b-[7px] border-purple-500 shadow-lg h-95 flex flex-col justify-between mx-auto"
                >
                  <p className="text-purple-700 text-base md:text-xl font-space-grotesk">
                    “{item.text}”
                  </p>
                  <p className="text-purple-700 font-semibold text-center pl-12 text-xs pt-15 font-space-grotesk">
                    — {item.author}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination-wrapper flex justify-center items-center mt-30">
            {/* Reduced p-2 (from p-4) for smaller buttons */}
            <div className="swiper-button-prev-custom cursor-pointer p-2 rounded-full bg-purple-200 border-2 border-orange-500 text-orange-500 hover:text-white transition duration-300 mr-2">
              {/* Reduced h-5 w-5 (from h-7 w-7) for smaller icons */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>

            <div className="custom-swiper-pagination flex justify-center"></div>

            {/* Reduced p-2 (from p-4) for smaller buttons */}
            <div className="swiper-button-next-custom cursor-pointer p-2 rounded-full bg-purple-200 border-2 border-orange-500 text-orange-500 hover:text-white transition duration-300 ml-2">
              {/* Reduced h-5 w-5 (from h-7 w-7) for smaller icons */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <style jsx>{`
            .custom-pagination-wrapper {
              background-color: transparent;
              border-radius: 9999px;
              /* Reduced padding from 1rem 2rem to 0.5rem 1rem */
              padding: 0.5rem 1rem;
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.0);
              max-width: fit-content;
              margin-left: auto;
              margin-right: auto;
              /* Adjusted margin-top to keep it visually centered after size reduction */
              margin-top: 50px; /* Was 70px, adjusted based on smaller elements */
              z-index: 10;
              position: relative;
            }

            .custom-swiper-pagination .swiper-pagination-bullet {
              background-color: #d1d5db;
              opacity: 1;
              /* Reduced width and height from 1.1rem to 0.7rem */
              width: 0.7rem;
              height: 0.7rem;
              border-radius: 50%;
              transition: background-color 0.3s ease;
              /* Reduced margin from 0 0.3rem to 0 0.2rem */
              margin: 0 0.2rem;
            }

            .custom-swiper-pagination .swiper-pagination-bullet-active {
              background-color: #9333ea;
              /* Adjusted scale slightly if needed, or keep it */
              transform: scale(1.2); /* Was 1.3, slightly reduced for overall smaller look */
            }

            .swiper-button-next,
            .swiper-button-prev {
              display: none !important;
            }
          `}</style>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;