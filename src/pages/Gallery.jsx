import React, { useState, useRef, useEffect } from 'react';

import { Header } from '@/components/Header';
import { GallerySection } from '@/components/GallerySection';
import { Footer } from '@/components/Footer';

export default function GalleryPage() {
  return (
    <div className='container'>
      <Header />
      <GallerySection />
      <Footer />
    </div>
  );
}
