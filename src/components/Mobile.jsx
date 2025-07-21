import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavLinks } from '@/constants/properties';

export default function MobileNav({ isOpen, toggleMenu }) {
  // Handle smooth scrolling to section and close menu
  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    toggleMenu();
  };

  // Size for nav button icons
  const navBtnSize = 42;

  return (
    <>
      {/* Mobile nav button with spin animation */}
      <button
        className={`mobile-nav-btn ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        onClick={toggleMenu}
      >
        {isOpen ? <X size={navBtnSize} /> : <Menu size={navBtnSize} />}
      </button>

      {/* Mobile nav menu with slide-in/out transition */}
      <nav
        className={`mobile-nav ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='mobile-nav-container'>
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`mobile-nav-container-menu ${
                link.id === 'home'
                  ? 'underline underline-offset-4 active-link'
                  : 'nav-menu-color'
              }`}
              onClick={(e) => handleScroll(e, link.id)}
            >
              {link.name}
            </Link>
          ))}

          {/* Register button with gradient styling */}
          <button className='desktop-nav-actions-btn'>Register</button>
        </div>
      </nav>
    </>
  );
}
