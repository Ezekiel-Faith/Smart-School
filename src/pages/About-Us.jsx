// import Banner from '@/components/Banner';
// import { AboutFAQ } from '@/components/AboutFAQ';
// import AboutHero from '@/components/AboutHero';
// import { useParams } from 'react-router-dom';

// export default function About() {
//   const { pageTitle } = useParams();

//   const formattedTitle = pageTitle
//     ? pageTitle
//         .replace(/-/g, ' ')
//         .split(' ')
//         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ')
//     : 'About Us';

//   return (
//     <>
//       <div className='about-container'>
//         <Banner title={formattedTitle} />
//         <AboutHero />
//         <AboutFAQ />
//       </div>
//     </>
//   );
// }

import Banner from '@/components/Banner';
import { AboutFAQ } from '@/components/AboutFAQ';
import AboutHero from '@/components/AboutHero';
import { useParams } from 'react-router-dom';
import React from 'react';

export default function About() {
  const { pageTitle } = useParams();

  const formattedTitle = pageTitle
    ? pageTitle
        .replace(/-/g, ' ')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : 'About Us';

  return (
    <>
      <div className='container'>
        <Banner title={formattedTitle} />

        <AboutHero />

        <AboutFAQ />
      </div>
    </>
  );
}
