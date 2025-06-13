import React, { useState, useRef, useEffect } from 'react';

import { Header } from '@/components/Header';
import { Gallery } from '@/components/Gallery';
import { Footer } from '@/components/Footer';

export default function GalleryPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
   <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8`}>
  <Header />
  <Gallery />
  <Footer />
</div>
  );
}