import React, { useState, useEffect, useRef } from 'react';
import '../Gallery.css';
import { Images } from '../constants/properties';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const galleryRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const { target } = entry;
        if (entry.isIntersecting) {
          // Remove and re-add to retrigger animation
          target.classList.remove('animate-fadeInUp');
          void target.offsetWidth; // Force reflow
          target.classList.add('animate-fadeInUp');
        } else {
          target.classList.remove('animate-fadeInUp');
        }
      });
    },
    { threshold: 0.1 }
  );

  const galleryItems = galleryRef.current.querySelectorAll('.gallery-item');
  galleryItems.forEach((item) => observer.observe(item));

  return () => {
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
    <div ref={galleryRef}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  gallery">
        {Images.map((image, index) => (
          <div 
            key={image.id} 
            className="gallery-item w-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer opacity-0"
            onClick={() => handleImageClick(image)}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className='w-full h-auto object-cover transition-transform duration-500 hover:scale-105'
              style={{ aspectRatio: 'full' }}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className={`fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isZoomed ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeZoom}
        >
          <div className="relative max-w-auto w-fit max-h-auto overflow-hidden">
            <button 
              className="absolute top-4 right-4 text-white text-3xl z-50 hover:text-gray-300 transition-colors"
              onClick={closeZoom}
            >
              &times;
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className={`mx-auto max-h-auto max-w-auto object-contain transition-transform duration-300 ${isZoomed ? 'scale-100' : 'scale-90'}`}
            />
            <p className="text-white text-center mt-2 text-lg">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}