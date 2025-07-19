import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { images } from '../constants/images';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function AboutHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const [anim, setAnim] = useState(false);
  const [dotAnim, setDotAnim] = useState(false);

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
    <section className='about-hero'>
      <AnimateOnScroll
        threshold={0.5}
        animationClasses='opacity-0 -translate-y-5'
        inViewClasses='opacity-100 translate-y-0'
        className='about-hero-text-container'
      >
        <div>
          <h2 className='about-head-title-color about-head-title-text'>
            About Our School
          </h2>
          <p className='about-head-title-color about-head-title-paragraph'>
            2025/2026 Session
          </p>
        </div>
      </AnimateOnScroll>

      {/* Main content flex container */}
      <div className='about-hero-container'>
        <AnimateOnScroll className='about-hero-content'>
          <p className='about-hero-content-paragraph text-[var(--color-gray-700)]'>
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
          className='relative about-hero-content'
          delay='delay-200'
        >
          <div className='w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden relative'>
            <img
              src={images[currentIndex]}
              alt='School'
              className={`w-full h-full object-cover transition-all duration-700 ease-in-out
                ${
                  anim
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
