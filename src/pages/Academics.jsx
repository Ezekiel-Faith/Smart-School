// import { useParams } from 'react-router-dom';
// import Banner from '@/components/Banner';
// import SchoolLevelSection from '@/components/SchoolLevelSection';
// import React from 'react';

// export default function Academics() {
//   const { pageTitle } = useParams();

//   const formattedTitle = pageTitle
//     ? pageTitle
//         .replace(/-/g, ' ')
//         .split(' ')
//         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ')
//     : 'Academics';

//   return (
//     <div className='academics-container'>
//       <Banner title={formattedTitle} />
//       <SchoolLevelSection />
//     </div>
//   );
// }

import { useParams } from 'react-router-dom';
import Banner from '@/components/Banner';
import SchoolLevelSection from '@/components/SchoolLevelSection';
import React from 'react';

export default function Academics() {
  const { pageTitle } = useParams();

  // Formats the page title from the URL parameter (e.g., "our-academics" becomes "Our Academics")
  const formattedTitle = pageTitle
    ? pageTitle
        .replace(/-/g, ' ')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : 'Academics';

  return (
    <div className='container'>
      <Banner title={formattedTitle} showProgramsHeader={true} />
      <SchoolLevelSection />
    </div>
  );
}
