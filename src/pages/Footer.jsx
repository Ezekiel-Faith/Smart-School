import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FooterTop from '@/components/FooterTop';
import FooterDwn from '@/components/FooterDwn';

const Footer = () => {
  return (
    <footer className='bg-gray-900'>
      <FooterTop />
      <FooterDwn />
    </footer>
  );
};

export default Footer;
