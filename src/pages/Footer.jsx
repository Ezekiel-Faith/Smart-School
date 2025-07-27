import React from 'react';
import FooterTop from '../components/FooterTop';
import FooterDwn from '../components/FooterDwn';

const Footer = () => {
  return (
    <footer className='bg-gray-900 py-10'>
      <div className='container border-3 border-red-500'>
        <FooterTop />
        <FooterDwn />
      </div>
    </footer>
  );
};

export default Footer;
