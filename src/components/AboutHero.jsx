import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { images } from '../constants/images'; // Ensure this path is correct
import AnimateOnScroll from '../components/AnimateOnScroll'; // Adjust path if necessary

export default function AboutHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right'); // 'left' or 'right'
  const [anim, setAnim] = useState(false); // For internal carousel image transition
  const [dotAnim, setDotAnim] = useState(false); // For internal carousel dot transition

  const nextImage = () => {
    setDirection('right');
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };
  const prevImage = () => {
    setDirection('left');
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  // Auto-transition every 5 seconds for the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right');
      setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animation trigger for carousel image transition
  useEffect(() => {
    setAnim(false);
    const timeout = setTimeout(() => setAnim(true), 30);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  // Animation trigger for carousel dot transition
  useEffect(() => {
    setDotAnim(true);
    const timeout = setTimeout(() => setDotAnim(false), 400);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <section className='py-12'>
      {/* Header - Wrapped with AnimateOnScroll */}
      {/* Using different animation for the header to demonstrate customization */}
      <AnimateOnScroll
        threshold={0.5} // Trigger when 50% of the header is in view
        animationClasses='opacity-0 -translate-y-5' // Header comes from slightly above
        inViewClasses='opacity-100 translate-y-0'
        className='text-center mb-10' // Keep existing styling
      >
        <div>
          <h2 className='about-head text-4xl md:text-5xl font-bold mb-3'>
            About Our School
          </h2>
          <p className='about-head text-lg md:text-xl text-gray-600 font-semibold'>
            2025/2026 Session
          </p>
        </div>
      </AnimateOnScroll>

      {/* Main content flex container */}
      <div className='flex flex-col md:flex-row md:space-x-12 items-start'>
        {/* Text content - Wrapped with AnimateOnScroll */}
        <AnimateOnScroll
          className='md:w-1/2 text-gray-700 leading-relaxed mb-8 md:mb-0 text-justify'
          // Default animationClasses and inViewClasses (opacity-0 translate-y-10 and opacity-100 translate-y-0) are used here
          // You can explicitly set them like in the header if you want something different
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In suscipit
            explicabo, omnis officia sint non, asperiores itaque velit veritatis
            iure eius sunt. Tenetur a dicta, debitis numquam ea alias fuga
            cumque maxime magnam obcaecati dolores molestiae fugiat vero dolore
            facere dolorem, doloremque, nisi quisquam assumenda at. Tempore
            minima temporibus nam ut? At qui laboriosam dolores molestias omnis,
            ullam eligendi eos deserunt. Distinctio neque provident cupiditate
            voluptates vitae quibusdam, sint voluptate vel non similique
            obcaecati et veniam, omnis doloribus cum. Natus veniam perferendis
            modi tempora velit quibusdam, ex voluptas quis aspernatur nesciunt
            quaerat autem exercitationem, iusto maiores excepturi tempore eum
            atque.
          </p>
        </AnimateOnScroll>

        {/* Carousel - Wrapped with AnimateOnScroll */}
        <AnimateOnScroll
          className='md:w-1/2 relative'
          delay='delay-200' // Adds a slight delay for staggered animation
        >
          <div className='w-full h-64 md:h-80 lg:h-96 bg-gray-200 rounded-lg overflow-hidden relative'>
            <img
              src={images[currentIndex]}
              alt='School'
              className={`w-full h-full object-cover transition-all duration-700 ease-in-out
                ${
                  anim // This is for the internal carousel image transition
                    ? direction === 'right'
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-100 -translate-x-0'
                    : direction === 'right'
                    ? 'opacity-0 translate-x-16'
                    : 'opacity-0 -translate-x-16'
                }
              `}
            />
            <button onClick={prevImage} className='absolute left-5 chevron'>
              <ChevronLeft className='w-5 h-5' />
            </button>
            <button onClick={nextImage} className='absolute right-5 chevron'>
              <ChevronRight className='w-5 h-5' />
            </button>
          </div>

          {/* Dots */}
          <div className='flex justify-center mt-4 space-x-2'>
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 'right' : 'left');
                  setCurrentIndex(i);
                }}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-500
                  ${
                    i === currentIndex
                      ? `bg-blue-500 scale-125 ${
                          dotAnim ? 'shadow-lg shadow-blue-300' : ''
                        }`
                      : 'bg-gray-300 scale-100'
                  }
                `}
              />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
