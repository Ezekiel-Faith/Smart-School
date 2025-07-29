import React from 'react';

import { Header } from '@/components/Header';
import { GallerySection } from '@/components/GallerySection';
import { GalleryFooter } from '@/components/GalleryFooter';

export default function Gallery() {
  return (
    <div className='container'>
      <Header />
      <GallerySection />
      <GalleryFooter />
    </div>
  );
}
