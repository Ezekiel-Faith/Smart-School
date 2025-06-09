import React, { useState, useEffect, useRef } from 'react';
import '../Gallery.css'; 
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
import image7 from '../assets/7.png';
import image8 from '../assets/8.png';
import image9 from '../assets/9.png';
import image10 from '../assets/10.png';
import image11 from '../assets/11.png';
import image12 from '../assets/12.png';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  const images = [
    { id: "1", src: image1, alt: 'Image 1' },
    { id: "2", src: image2, alt: 'Image 2' },
    { id: "3", src: image3, alt: 'Image 3' },
    { id: "4", src: image4, alt: 'Image 4' },
    { id: "5", src: image5, alt: 'Image 5' },
    { id: "6", src: image6, alt: 'Image 6' },
    { id: "7", src: image7, alt: 'Image 7' },
    { id: "8", src: image8, alt: 'Image 8' },
    { id: "9", src: image9, alt: 'Image 9' },
    { id: "10", src: image10, alt: 'Image 10' },
    { id: "11", src: image11, alt: 'Image 11' },
    { id: "12", src: image12, alt: 'Image 12' },
  ];

  useEffect(() => {
    // Slide-in animation trigger
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    // Scroll animation for individual images
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item) => observer.observe(item));

    return () => {
      clearTimeout(timer);
      galleryItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <>
      <div className={`px-4 sm:px-6 lg:px-8 py-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <section className='flex items-center flex-col gap-2 bg-[#FEFFFB]' ref={galleryRef}> 
          <div>
            <h1 className='text-center text-3xl font-project text-[32px] md:text-[49px] font-[700] leading-[1.2] my-10 bg-linear-to-bl from-[#ED7884] to-[#9055FF] bg-clip-text text-transparent'>
              Explore Our Gallery
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[1240px] gallery">
            {images.map((image, index) => (
              <div 
                key={image.id} 
                className="gallery-item w-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer opacity-0"
                onClick={() => handleImageClick(image)}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <img 
                  src={`${image.src}`} 
                  alt={image.alt} 
                  className='w-full h-auto object-cover transition-transform duration-500 hover:scale-105'
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
            ))}
          </div>
        </section>
        
        {/* Lightbox/Modal for zoomed image */}
        {selectedImage && (
          <div 
            className={`fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isZoomed ? 'opacity-100' : 'opacity-0'}`}
            onClick={closeZoom}
          >
            <div className="relative max-w-6xl w-full max-h-screen">
              <button 
                className="absolute top-4 right-4 text-white text-3xl z-50 hover:text-gray-300 transition-colors"
                onClick={closeZoom}
              >
                &times;
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className={`mx-auto max-h-[90vh] max-w-full object-contain transition-transform duration-300 ${isZoomed ? 'scale-100' : 'scale-90'}`}
              />
              <p className="text-white text-center mt-2 text-lg">{selectedImage.alt}</p>
            </div>
          </div>
        )}
        
        <article className='flex items-center justify-center mt-10 mb-10'>
          <div className='relative w-full max-w-4xl px-4'>
            <svg 
              className="absolute -top-8 -left-4 w-12 h-12 text-gray-300 mt-9" 
              fill="#ED7884" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <blockquote className='relative text-center w-[1053px] font-project font-[400] leading-[1.2] mt-10 mb-10 md:text-2xl md:w-full text-[31px] px-5 py-2 self-center'>
              <p className='mb-4'>
                At Smart School, we believe that every moment captured tells a story of growth, learning, and achievement. This gallery is a reflection of our vibrant school community—our students' creativity, the dedication of our staff, and the joyful atmosphere that defines our everyday experience. I invite you to explore these moments and celebrate the incredible journey we share together.
              </p>
              <footer className='text-lg md:text-xl font-[600]'>
                <span className='block'>— XYZ</span>
                <span>Principal, Smart School</span>
              </footer>
            </blockquote>
            
            <svg 
              className="absolute -bottom-7 -right-3 w-12 h-12 mb-7 text-gray-300 transform rotate-180" 
              fill="#ED7884" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </article>
      </div>
    </>
  )
}