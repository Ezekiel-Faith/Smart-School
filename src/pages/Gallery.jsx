import React, { useState, useRef, useEffect } from 'react';

import { Header } from '@/components/Header';
import { Gallery } from '@/components/Gallery';
import { Footer } from '@/components/Footer';

export default function GalleryPage() {

  return (
   <div className={` mx-30 px-4 sm:px-6 lg:px-8`}>
  <Header />
  <Gallery />
  <Footer />
</div>
  );
}