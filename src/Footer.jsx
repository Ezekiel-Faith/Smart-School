import React from 'react';
import FooterTop from './Component/FooterTop';
import FooterDwn from './Component/FooterDwn';




const Footer = () => {
  return (
    <footer className='bg-gray-900 '>
      <FooterTop />
      <FooterDwn />
    </footer>
  );
};

export default Footer;