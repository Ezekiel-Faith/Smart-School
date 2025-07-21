import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    text: "Since joining Smart School, my daughter has become more engaged with her studies...",
    author: "Mrs. Adaobi Okeke"
  },
  {
    text: "What I appreciate most is how Smart School tails learning to fit each child...",
    author: "Mr. Emeka Johnson"
  },
  {
    text: "The school’s use of technology is impressive—from secure entry systems...",
    author: "Mrs. Fatima Suleiman"
  },
  {
    text: "I love how the teachers at Smart School genuinely care...",
    author: "Mrs. Chiamaka Umeh"
  },
  {
    text: "The extracurricular activities are fantastic. My son is now passionate about coding...",
    author: "Mr. Tunde Bamidele"
  },
  {
    text: "Smart School has built a great learning environment...",
    author: "Mrs. Yetunde Balogun"
  },
  {
    text: "The online learning platform is seamless...",
    author: "Mrs. Grace Obi"
  },
  {
    text: "The school’s focus on character development is a big plus...",
    author: "Mr. Ibrahim Musa"
  },
  {
    text: "The parent-teacher communication at Smart School is outstanding...",
    author: "Mrs. Ngozi Eze"
  },
  {
    text: "My daughter used to dread school, but now she wakes up excited every day...",
    author: "Mrs. Amina Bello"
  }
];

const Testimonials = () => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  // Ensure Swiper navigation works with refs
  useEffect(() => {
    const swiper = document.querySelector('.mySwiper')?.swiper;
    if (swiper && prevButtonRef.current && nextButtonRef.current) {
      swiper.params.navigation.prevEl = prevButtonRef.current;
      swiper.params.navigation.nextEl = nextButtonRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div>
      <section className="relative mt-5 xl:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          {/* HEADER SECTION */}
          <div className='bg-purple-500 h-50 w-full flex flex-col justify-center items-center'>
            <h2 className='text-white text-2xl md:text-3xl font-bold text-center -mt-20 font-space-grotesk'>TESTIMONIALS</h2>
            <p className='text-white text-xl md:text-2xl text-center font-space-grotesk'>What parents are saying about us</p>
          </div>

          <div className='bg-purple-100 w-full pb-16 relative h-120'></div>

          <div className="max-w-6xl mx-auto -mt-140 h-100">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
              navigation={{
                prevEl: prevButtonRef.current,
                nextEl: nextButtonRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevButtonRef.current;
                swiper.params.navigation.nextEl = nextButtonRef.current;
              }}
              className="mySwiper"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl border-b-[5px] sm:border-b-[6px] md:border-b-[7px] border-purple-500 shadow-lg h-65 mx-12 md:h-85 flex flex-col justify-between"
                  >
                    <p className="text-purple-700 text-sm sm:text-base md:text-base font-space-grotesk">
                      “{item.text}”
                    </p>
                    <p className="text-purple-700 font-semibold text-center pl-4 sm:pl-8 text-xs sm:text-sm pt-10 font-space-grotesk">
                      — {item.author}
                    </p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* CUSTOM PAGINATION AND NAVIGATION */}
            <div className="custom-pagination-wrapper flex justify-center items-center mt-30">
              <div
                className="swiper-button-prev-custom cursor-pointer p-1 sm:p-2 rounded-full bg-purple-200 border-2 border-orange-500 text-orange-500 hover:text-white transition duration-300 mr-2"
                ref={prevButtonRef}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>

              <div className="custom-swiper-pagination flex justify-center"></div>

              <div
                className="swiper-button-next-custom cursor-pointer p-1 sm:p-2 rounded-full bg-purple-200 border-2 border-orange-500 text-orange-500 hover:text-white transition duration-300 ml-2"
                ref={nextButtonRef}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 md:w-4 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* STYLES */}
            <style jsx>{`
              .custom-pagination-wrapper {
                background-color: transparent;
                border-radius: 9999px;
                padding: 0.5rem 1rem;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.0);
                max-width: fit-content;
                margin-left: auto;
                margin-right: auto;
                margin-top: 50px;
                z-index: 10;
                position: relative;
              }

              .custom-swiper-pagination .swiper-pagination-bullet {
                background-color: #d1d5db;
                opacity: 1;
                width: 0.7rem;
                height: 0.7rem;
                border-radius: 50%;
                transition: background-color 0.3s ease;
                margin: 0 0.2rem;
              }

              .custom-swiper-pagination .swiper-pagination-bullet-active {
                background-color: #9333ea;
                transform: scale(1.2);
              }

              .swiper-button-next,
              .swiper-button-prev {
                display: none !important;
              }
            `}</style>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Testimonials;
