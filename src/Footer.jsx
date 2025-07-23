import React from 'react';
import FooterTop from './Component/FooterTop';
import FooterDwn from './Component/FooterDwn';

const Footer = () => {
  return (
   <footer className="bg-gray-900 ">
  <div className="max-w-9xl  px-4 md:px-0 scale-95 ">
    <FooterTop />
    <FooterDwn />
  </div>
</footer>

  );
};

export default Footer;
