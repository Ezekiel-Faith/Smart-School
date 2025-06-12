import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { images } from '@/constants/images';

export default function AboutHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () =>
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  const prevImage = () =>
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  // Auto-transition every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval); // cleanup
  }, [currentIndex]);

  return (
    <section className='py-12'>
      {/* Header */}
      <div className='text-center mb-10'>
        <h2 className='about-head text-4xl md:text-5xl font-bold mb-3'>
          About Our School
        </h2>
        <p className='text-lg md:text-xl text-gray-600 font-semibold'>
          2025/2026 Session
        </p>
      </div>

      {/* Content */}
      <div className='flex flex-col md:flex-row md:space-x-12 items-start'>
        {/* Text */}
        <div className='md:w-1/2 text-gray-700 leading-relaxed mb-8 md:mb-0 text-justify'>
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
        </div>

        {/* Carousel */}
        <div className='md:w-1/2 relative'>
          <div className='w-full h-64 md:h-80 lg:h-96 bg-gray-200 rounded-lg overflow-hidden relative'>
            <img
              src={images[currentIndex]}
              alt='School'
              className='w-full h-full object-cover transition duration-500'
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
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  i === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
