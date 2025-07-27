import React from 'react';
import FooterTop from './components/FooterTop';
import FooterDwn from './components/FooterDwn';

const Footer = () => {
  return (
    <footer className='bg-gray-900 '>
      <div className='max-w-9xl  px-4 md:px-0 scale-95 md:mx-15 xl:mx-0 '>
        <FooterTop />
        <FooterDwn />
      </div>
    </footer>
  );
};

export default Footer;
