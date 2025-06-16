import React, { useState, useEffect } from 'react';
import schoolLogo from '../Asset/school-logo.jpg';
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
import principal from '../Asset/principal-img.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';





const NavbarList = [
  { name: "Home", link: "#" },
  { name: "About Us", link: "#" },
  { name: "Gallery", link: "#" },
  { name: "Admission", link: "#" },
  { name: "Academy", link: "#" },
  { name: "Contact Us", link: "#" }
];

const testimonials = [
  {
    text: "Since joining Smart School, my daughter has become more engaged with her studies. The learning tools are interactive, and I’ve seen a real boost in her confidence and academic performance.",
    author: "Mrs. Adaobi Okeke"
  },
  {
    text: "What I appreciate most is how Smart School tailors learning to fit each child. My son now enjoys subjects he used to avoid, and his results have improved significantly.",
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

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  

  const text = "Apply Now! We are now accepting applications for the New Academic Session. Don't miss this prime opportunity to give your child the foundation for a brilliant future. Our school offers a holistic learning environment, state-of-the-art facilities, and a curriculum that builds not just academic excellence but also strong moral character.";


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // Cycles 0, 1, 2, 0, 1, 2...
    }, 7000); // Changes every 5 seconds (matches marquee duration)

    return () => clearInterval(interval);
  }, []);

  // Image Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // when you scroll down more than 50px
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className={`h-20 w-full fixed top-0 z-50 flex items-center justify-between px-4 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        {/* Logo */}
        <div className="flex items-center">
          <img src={schoolLogo} alt="School Logo" className="h-16 ml-10 rounded-full" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-9">
          {NavbarList.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="text-purple-900 hover:text-purple-500 font-medium text-xl">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Register Button */}
        <div className="hidden md:block">
          <button className="bg-purple-700 text-white rounded-lg h-10 w-36 px-4 py-2 hover:bg-purple-600 mr-2">
            Register
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
               <div className="md:hidden bg-white shadow-md absolute top-20 left-0 w-full z-40">          <ul className="flex flex-col items-center space-y-4 py-4">
            {NavbarList.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="text-purple-700 hover:text-purple-500 font-medium" onClick={toggleMenu}>
                  {item.name}
                </a>
              </li>
            ))}
            <button className="bg-purple-700 text-white rounded-lg px-4 py-2 hover:bg-purple-600" onClick={toggleMenu}>
              Register
            </button>
          </ul>
        </div>
      )}

      {/* Image Slider */}
      <div className="w-full h-[500px] sm:h-[500px] md:h-[600px] lg:h-[730px] overflow-hidden relative">
        <img
          src={images[currentIndex]}
          alt="Slider"
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
      </div>
      
  {/* Buttons */}
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
      <section className='bg-purple-950 w-full h-18 mb-20 overflow-hidden'>
        <div
          className='whitespace-nowrap flex'
          style={{
            animation: 'marquee 21s linear infinite'
          }}
        >
          <p className='text-white text-3xl mx-10 mt-4'>
            {text}
          </p>
        </div>

        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </section>

      <section>
        <h1 className='text-purple-500 text-4xl text-center font-bold mt-3 font-sans-serif '>WHY SMART SCHOOL?</h1>
        <img src={underline} alt='underline image' className='w-120 h-auto mx-auto flex justify-center items-center mt-2'></img>
       <div className='grid grid-cols-3 gap-28 py-20 px-60 ' >
        <div >
          <img src={why1} alt='why-img-1' className='w-auto h-auto mx-24  '></img>
          <h2 className='text-2xl text-gray-650 font-bold ml-6 mb-2.5 pb-0 mt-5'>Nursery School's curriculum</h2>
          <p className='text-xl mt-5'>Lorem ipsum dolor sit, amet consectetur. sed nulla morbi ellefend placerat convallis</p>
        </div>
         <div>
          <img src={why2} alt='why-img-1' className='w-auto h-auto mx-24 '></img>
          <h2 className='text-2xl text-gray-650 font-bold ml-6 mb-2.5 pb-0 mt-5'>Primary School's curriculum</h2>
          <p className='text-xl mt-5'>Lorem ipsum dolor sit, amet consectetur. sed nulla morbi ellefend placerat convallis</p>
        </div>
        <div>
          <img src={why3} alt='why-img-1' className='w-auto h-auto mx-24 '></img>
          <h2 className='text-2xl text-gray-650 font-bold ml-6 mb-2.5 pb-0 mt-5'>Secondary School's curriculum</h2>
          <p className='text-xl mt-5'>Lorem ipsum dolor sit, amet consectetur. sed nulla morbi ellefend placerat convallis</p>
        </div>
        <div>
          <img src={why4} alt='why-img-1' className='w-auto h-auto mx-24 '></img>
          <h2 className='text-2xl text-gray-650 font-bold ml-6 mb-2.5 pb-0 mt-5'>Modern Facilities</h2>
          <p className='text-xl mt-5'>We provide a safe,tech enhanced,environment with</p>
        </div>
        <div>
          <img src={why5} alt='why-img-1' className='w-auto h-auto mx-24 '></img>
          <h2 className='text-2xl text-gray-650 font-bold ml-6 mb-2.5 pb-0 mt-5'>Small Class Size</h2>
          <p className='text-xl mt-5'>Ensuring personalised attention and better student</p>
        </div>
        <div>
          <img src={why6} alt='why-img-1' className='w-auto h-auto mx-24'></img>
          <h2 className='text-2xl text-gray-650 font-bold ml-6 mb-2.5 pb-0 mt-5'>Parental Involvement</h2>
          <p className='text-xl mt-5'>we fooster strong partnership with parent for support</p>
        </div>
      </div>
    </section>

    <section className='mt-20'>
        <h1 className='text-purple-500 text-4xl text-center font-bold mt-3 font-sans-serif '>OUR MISSION STATEMENT</h1>
        <img src={underline} alt='underline image' className='w-120 h-auto mx-auto flex justify-center items-center mt-2'></img>

        <div className='grid grid-cols-2 gap-25 mt-15 ml-10'>
          <div className='ml-15'>
            <p className='text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque soluta dolorum cum nam iure.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque soluta dolorum cum nam iure.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque soluta dolorum cum nam iure.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit,</p>
          </div>
          <div >
            <img src={mission} alt='mission-image ' className='w-145 ml-12'></img>
          </div>
        </div>

    </section>

     <section className='mt-25'>
        <h1 className='text-purple-500 text-4xl text-center font-bold mt-3 font-sans-serif '>OUR VISSION STATEMENT</h1>
        <img src={underline} alt='underline image' className='w-120 h-auto mx-auto flex justify-center items-center mt-2'></img>

        <div className='grid grid-cols-2 gap-25 mt-15 ml-10'>
          <div className='ml-15'>
            <p className='text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque soluta dolorum cum nam iure.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque soluta dolorum cum nam iure.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque soluta dolorum cum nam iure.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit,</p>
          </div>
          <div >
            <img src={vision} alt='vission-image ' className='w-145 ml-12'></img>
          </div>
        </div>

    </section>

    <section className='mt-25'>
        <h1 className='text-purple-500 text-4xl text-center font-bold mt-3 font-sans-serif '>OFFICIAL STATEMENT FROM THE PRINCIPAL</h1>
        <img src={underline} alt='underline image' className='w-120 h-auto mx-auto flex justify-center items-center mt-2'></img>

        <div className='grid grid-cols-2  mt-15 ml-10'>
          <div >
            <img src={principal} alt='principal-image ' className='w-145 ml-12'></img>
          </div>
          <div className=''>
            <p className='text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque soluta dolorum cum nam iure.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque soluta dolorum cum nam iure.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit, praesentium porro culpa sequi magnam, doloremque soluta dolorum cum nam iure.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam. Reprehenderit assumenda adipisci, odit,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde suscipit optio labore consequatur facere ullam.doloremque soluta dolorum cum nam iure.Lorem ipsum, dolor sit </p>
          </div>
        </div>

    </section>

 <section className="relative mt-20">
  {/* Top Purple Section */}
  <div className='bg-purple-500 h-70 w-full flex flex-col justify-center items-center'>
    <h2 className='text-white text-3xl font-semibold text-center -mt-40'>TESTIMONIALS</h2>
    <p className='text-white text-2xl text-center'>What parents are saying about us</p>
  </div>

  {/* Testimonial Slider Section */}
  <div className='bg-purple-150 w-full pb-16 relative h-130'></div>

  <div className='max-w-7xl mx-auto -mt-150 h-150'>
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      pagination={{ clickable: true, el: '.custom-swiper-pagination' }} // link to external container
      loop={true}
      className="mySwiper"
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white p-6 md:p-8 rounded-2xl border-b-[7px] border-purple-500 shadow-lg h-100 flex flex-col justify-between mx-auto"
          >
            <p className="text-purple-700 text-base md:text-2xl mb-6">“{item.text}”</p>
            <p className="text-purple-700 font-semibold text-center pl-12 text-xl pt-15">— {item.author}</p>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* Only ONE pagination container outside the slides */}
  <div className="custom-swiper-pagination flex justify-center -mt-25 mb-15 "></div>
</section>

    <footer>
      <section className='bg-gray-900 w-100% h-250'>
  
        <div className='grid grid-cols-4  pt-25 mx-20'>
            <div className='grid grid-cols-2 col-span-2 mt-5 '>
              <img src={schoolLogo} alt="School Logo" className="h-16  rounded-full  " />
              <h1 className='text-purple-500 text-4xl -ml-65 mt-3 font-bold '>Smart School</h1>
             </div>
          <div className='grid grid-cols-4 gap-15 col-span-2 -mr-15 -ml-35 '>
            <div>
              <h1 className='text-white text-3xl font-semibold mb-7 mt-2'>Quick Links</h1>
              <p className='text-gray-400 mb-3 text-lg'>Contact Us</p>
              <p className='text-gray-400 mb-3 text-lg'>FAQs</p>
              <p className='text-gray-400 mb-3 text-lg'>Gallery</p>
              <p className='text-gray-400 mb-3 text-lg'>Admissions</p>
            </div>

            <div>
              <h1 className='text-white text-3xl mb-6 font-semibold'>Navigation</h1>
              <p className='text-gray-400 mb-3 text-lg'>Mission</p>
              <p className='text-gray-400 mb-3 text-lg'>Vission</p>
              <p className='text-gray-400 mb-3 text-lg'>About Us</p>
              <p className='text-gray-400 mb-3 text-lg'>Academics</p>
            </div>

            <div>
              <h1 className='text-white text-3xl font-semibold mb-7 mt-2'>Get in touch</h1>

              <div className='grid grid-cols-2 mb-7'>
                <div className='mt-8' >
                  <FontAwesomeIcon icon={faLocationDot} style={{ color: 'white', fontSize: '24px' }} />
                </div>
                <div>
                  <p className='text-gray-400 -ml-13 '>123 Example Street,<br />Victoria Island, Lagos,<br />Nigeria</p>
                </div>
              </div>

              <div className='grid grid-cols-2 mb-7' >
                <div>
                  <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white', fontSize: '24px' }} />
                </div>
                <div>
                  <p className='text-gray-400 -ml-13 text-lg' >info@example.com</p>
                </div>
              </div>

              <div className='grid grid-cols-2'> 
                <div>
                  <FontAwesomeIcon icon={faPhone} style={{ color: 'white', fontSize: '24px' }} />
                </div>
                <div>
                  <p className='text-gray-400 -ml-13 '>07012345677, 07012345677</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-45 pt-20'>
         <div className='mt-15' > 
            <p className='text-gray-400 text-xl pl-27 pb-10'>Questions or updates? Follow us on social media,<br/>Connect with us!</p>
            <div className='grid grid-cols-4 mx-27 '>
              <FontAwesomeIcon icon={faFacebook} style={{ color: 'white', fontSize: '60px' }} />
              <FontAwesomeIcon icon={faTwitter} style={{ color: 'white', fontSize: '60px' }} />
              <FontAwesomeIcon icon={faInstagram} style={{ color: 'white', fontSize: '60px' }} /> 
              <FontAwesomeIcon icon={faWhatsapp} style={{ color: 'white', fontSize: '60px' }} />
            </div>
          </div>

          <div>
             <h1 className='text-white text-5xl  pb-9 '>Our Newsletters</h1>
             <p className='text-gray-400 text-xl pb-10'>Subcribe to our newsletter and get exclusive insights,tips,and the <br/>latest trends delivered straight to your inbox.Don't miss out.</p>
             <button placeholder="Enter Your Email Address " className='bg-purple-500 placeholder-white w-135 h-17 rounded-4xl '><button className='bg-purple-950 text-white w-45 h-16 rounded-4xl  text-xl ml-90'>Subscribe</button></button>
          </div>
        </div>
        <hr className='border border-gray-500 w-335 mt-25 ml-27'></hr>
        <p className='text-gray-400 text-lg pl-120 pt-8'>@ 2025 Smart School | All rights reserved |Tems and Conditions | Privacy Policy</p>
      </section>

    </footer>

</div>

  );
}

export default Home;
