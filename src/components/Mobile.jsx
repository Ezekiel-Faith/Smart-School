import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLinks } from '@/constants/properties';

export default function MobileNav({ isOpen, toggleMenu }) {
  const location = useLocation();

  return (
    <nav
      className={`mobile-nav-container ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='flex flex-col items-center justify-center w-full h-[100%] border-5 my-auto space-y-3 md:space-y-7 height-6'>
        {NavLinks.map((link) => (
          <Link
            key={link.id}
            to={link.path}
            className={`mobile-nav-container-menu text-2xl py-3 ${
              location.pathname === link.path
                ? 'underline underline-offset-4 active-link'
                : 'nav-menu-color'
            }`}
            onClick={toggleMenu}
          >
            {link.name}
          </Link>
        ))}
        <button className='desktop-nav-actions-btn mt-8'>Register</button>
      </div>
    </nav>
  );
}
