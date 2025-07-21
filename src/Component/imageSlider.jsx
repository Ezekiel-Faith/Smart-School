import React, { useEffect, useState } from 'react';

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

// Image Slider Data
const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Image Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Changes every 7 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[300px] sm:h-[500px] md:h-[600px] lg:h-[730px] overflow-hidden relative">
      <img
        src={images[currentIndex]}
        alt="Slider"
        className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
      />
    </div>
  );
};

export default ImageSlider;
