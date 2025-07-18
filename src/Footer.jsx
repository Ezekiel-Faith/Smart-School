import React from 'react';
import FooterTop from './Component/FooterTop';
import FooterDwn from './Component/FooterDwn';




const Footer = () => {
  return (
   <footer className="bg-gray-900 ">
  <div className="max-w-9xl  px-4 scale-80 ">
    <FooterTop />
    <FooterDwn />
  </div>
</footer>

  );
};

export default Footer;