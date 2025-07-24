import React from 'react';

import { Header } from '@/components/Header';
import { GallerySection } from '@/components/GallerySection';
import { Footer } from '@/components/Footer';

export default function Gallery() {
  return (
    <div className='container'>
      <Header />
      <GallerySection />
      <Footer />
    </div>
  );
}
