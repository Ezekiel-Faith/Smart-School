import React, { useState, useRef, useEffect } from 'react';

import { Header } from '@/components/Header';
import { Gallery } from '@/components/Gallery';
import { Footer } from '@/components/Footer';

export default function GalleryPage() {

  return (
   <div className='lg:mx-30 sm:mx-7 mx-5 px-4 sm:px-6 lg:px-8'>
  <Header />
  <Gallery />
  <Footer />
</div>
  );
}