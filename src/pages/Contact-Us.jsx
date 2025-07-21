import Banner from '@/components/Banner';
import React from 'react';
import { useParams } from 'react-router-dom';
import SchoolLevelSection from '@/components/SchoolLevelSection';

export default function Contact() {
  const { pageTitle } = useParams();

  const formattedTitle = pageTitle
    ? pageTitle
        .replace(/-/g, ' ')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : '';

  return (
    <div className='about-container'>
      <Banner title={formattedTitle} />
      <SchoolLevelSection />
    </div>
  );
}
