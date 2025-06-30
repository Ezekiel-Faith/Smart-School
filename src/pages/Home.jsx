import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Navigation module
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // <-- Import Swiper Navigation styles

// Import Assets
import image1 from '../Asset/main-image-1.jpg';
import image2 from '../Asset/main-image-2.jpg';
import image3 from '../Asset/main-image-3.jpg';
import image4 from '../Asset/main-image-4.jpg';
import image5 from '../Asset/main-image-5.jpg';
import image6 from '../Asset/main-image-6.jpg';
import image7 from '../Asset/main-image-7.jpg';
import image8 from '../Asset/main-image-8.jpg';
import image9 from '../Asset/main-image-9.jpg';
import underline from '../Asset/title_shape-underline.jpg';
import why1 from '../Asset/why-img-1.jpg';
import why2 from '../Asset/why-img-1.jpg';
import why3 from '../Asset/why-img-2.jpg';
import why4 from '../Asset/why-img-3.jpg';
import why5 from '../Asset/why-img-4.jpg';
import why6 from '../Asset/why-img-5.jpg';
import mission from '../Asset/mission-image.png';
import vision from '../Asset/vision-image.jpg';
import principal from '../Asset/principal-img.jpg';

// Testimonials Data
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

// Image Slider Data
const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const text = "Apply Now! We are now accepting applications for the New Academic Session. Don't miss this prime opportunity to give your child the foundation for a brilliant future. Our school offers a holistic learning environment, state-of-the-art facilities, and a curriculum that builds not just academic excellence but also strong moral character.";

  // Toggle Menu Function (declared but not used in the provided JSX)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Marquee Button Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // Cycles 0, 1, 2, 0, 1, 2...
    }, 7000); // Changes every 7 seconds (matches marquee duration based on provided style)

    return () => clearInterval(interval);
  }, []);

  // Image Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Changes every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Image Slider */}
      <div className="w-full h-[500px] sm:h-[500px] md:h-[600px] lg:h-[730px] overflow-hidden relative">
        <img
          src={images[currentIndex]}
          alt="Slider"
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
      </div>

      {/* Slider Indicator Buttons */}
      <div className='w-full bg-white h-18 flex justify-center items-center gap-2 p-4'>
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            className={`relative w-20 rounded-4xl h-2 w-35 overflow-hidden
              ${activeIndex === index ? 'bg-gray-600' : 'bg-gray-400'}`}
          />
        ))}
      </div>

      {/* Marquee Section */}
      <section className='bg-purple-950 w-full h-12 mb-20 overflow-hidden'>
        <div
          className='whitespace-nowrap flex'
          style={{
            animation: 'marquee 30s linear infinite'
          }}
        >
          <p className='text-white text-2xl mt-2 font-space-grotesk'>
            {text}
          </p>
        </div>

        {/* Marquee Keyframe Styling */}
        <style>
          {`
            @keyframes marquee {
              100% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </section>

      {/* Why Smart School Section */}
      <section className=''>
        <h1 className='text-purple-500 text-4xl text-center font-bold mt-3 font-space-grotesk '>WHY SMART SCHOOL?</h1>
        <img src={underline} alt='underline image' className='w-120 h-auto mx-auto flex justify-center items-center mt-2'></img>
        <div className='grid grid-cols-3 gap-28 py-20 px-65'>
          <div className='grid place-items-center text-center '>
            <img src={why1} alt='why-img-1' className="mb-5"></img>
            <h2 className='font-space-grotesk font-bold text-2xl mb-5'>Nursery School's curriculum</h2>
            <p className='font-space-grotesk'>Lorem ipsum dolor sit, amet consectetur. sed nulla morbi ellefend placerat convallis</p>
          </div>
          <div className='grid place-items-center text-center'>
            <img src={why2} alt='why-img-1' className="mb-5" ></img>
            <h2 className='font-space-grotesk font-bold text-2xl mb-5'>Primary School's curriculum</h2>
            <p >Lorem ipsum dolor sit, amet consectetur. sed nulla morbi ellefend placerat convallis</p>
          </div>
          <div className='grid place-items-center text-center' >
            <img src={why3} alt='why-img-1' className="mb-5" ></img>
            <h2 className='font-space-grotesk font-bold text-2xl mb-5'>Secondary School's curriculum</h2>
            <p >Lorem ipsum dolor sit, amet consectetur. sed nulla morbi ellefend placerat convallis</p>
          </div>
          <div className='grid place-items-center text-center'>
            <img src={why4} alt='why-img-1' className="mb-5"></img>
            <h2 className='font-space-grotesk font-bold text-2xl mb-5'>Modern Facilities</h2>
            <p >We provide a safe,tech enhanced,environment with</p>
          </div>
          <div className='grid place-items-center text-center'>
            <img src={why5} alt='why-img-1' className="mb-5"></img>
            <h2 className='font-space-grotesk font-bold text-2xl mb-5 '>Small Class Size</h2>
            <p >Ensuring personalised attention and better student</p>
          </div>
          <div className='grid place-items-center text-center'>
            <img src={why6} alt='why-img-1' className="mb-5"></img>
            <h2 className='font-space-grotesk font-bold text-2xl mb-5 '>Parental Involvement</h2>
            <p >we fooster strong partnership with parent for support</p>
          </div>
        </div>
      </section>

      {/* Our Mission Statement Section */}
      <section className='mt-20 mx-30'>
        <h1 className='text-purple-500 text-4xl text-center font-bold mt-3 font-space-grotesk '>OUR MISSION STATEMENT</h1>
        <img src={underline} alt='underline image' className='w-120 h-auto mx-auto flex justify-center items-center mt-2'></img>

        <div className='grid grid-cols-2 gap-10 mt-15'>
          <div >
            <p className='text-2xl font-space-grotesk'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque soluta dolorum cum nam iure.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque soluta dolorum cum nam iure.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit .</p>
          </div>
          <div>
            <img src={mission} alt='mission-image ' className='w-145 '></img>
          </div>
        </div>
      </section>

      {/* Our Vision Statement Section */}
      <section className='mt-25 mx-30'>
        <h1 className='text-purple-500 text-4xl text-center font-bold mt-3 font-space-grotesk '>OUR VISSION STATEMENT</h1>
        <img src={underline} alt='underline image' className='w-120 h-auto mx-auto flex justify-center items-center mt-2'></img>

        <div className='grid grid-cols-2 gap-10 mt-15 '>
          <div >
            <p className='text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque soluta dololu m cum nam iure.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque soluta dolorum cum nam iure.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit </p>
          </div>
          <div>
            <img src={vision} alt='vission-image ' className='w-145 '></img>
          </div>
        </div>
      </section>

      {/* Official Statement From The Principal Section */}
      <section className='mt-25 mx-30'>
        <h1 className='text-purple-500 text-4xl text-center font-bold mt-3 font-sans-serif '>OFFICIAL STATEMENT FROM THE PRINCIPAL</h1>
        <img src={underline} alt='underline image' className='w-120 h-auto mx-auto flex justify-center items-center mt-2'></img>

        <div className='grid grid-cols-2 gap-10 mt-15 '>
          <div>
            <img src={principal} alt='principal-image ' className='w-145 '></img>
          </div>
          <div>
            <p className='text-2xl '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque soluta dolorum cum nam iure.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque soluta dolorum cum nam iure.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
            <div className="swiper-button-prev-custom cursor-pointer p-4 rounded-full bg-purple-200 border-2 border-orange-500 text-orange-500  hover:text-white transition duration-300 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>

            <div className="custom-swiper-pagination flex justify-center"></div>

            <div className="swiper-button-next-custom cursor-pointer p-4 rounded-full bg-purple-200 border-2 border-orange-500 text-orange-500  hover:text-white transition duration-300 ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <style jsx>{`
            .custom-pagination-wrapper {
          background-color: transparent; /* Changed to transparent */
          border-radius: 9999px;
          padding: 1rem 2rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.0); /* You might want to remove or adjust the box-shadow if the background is gone */
          max-width: fit-content;
          margin-left: auto;
          margin-right: auto;
          margin-top: 70px;
          z-index: 10;
          position: relative;
        }

            .custom-swiper-pagination .swiper-pagination-bullet {
              background-color: #d1d5db;
              opacity: 1;
              width: 1.1rem;
              height: 1.1rem;
              border-radius: 50%;
              transition: background-color 0.3s ease;
              margin: 0 0.3rem;
            }

            .custom-swiper-pagination .swiper-pagination-bullet-active {
              background-color: #9333ea;
              transform: scale(1.3);
            }

            .swiper-button-next,
            .swiper-button-prev {
              display: none !important;
            }
          `}</style>
        </div>
      </section>
      <div>
        <p>hdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdh</p>
        <p>gdgdgdgdgdgdgdgdgdgdgdgdgdgdgdgdgddg</p>
      </div>
    </div>
  );
}

export default Home;