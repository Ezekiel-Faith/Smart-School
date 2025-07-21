import Banner from '@/components/Banner';
import Card from '@/components/Card';
import ContactSection from '@/components/ContactSection';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Contact() {
  const { pageTitle } = useParams();

  const formattedTitle = pageTitle
    ? pageTitle
        .replace(/-/g, ' ')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : 'Contact Us';

  return (
    <div className='container'>
      <Banner title={formattedTitle} />
      <Card />
      <ContactSection />
    </div>
  );
}
