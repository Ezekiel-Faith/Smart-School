import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavLinks } from '@/constants/properties';

export default function MobileNav({ isOpen, toggleMenu }) {
  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    toggleMenu();
  };

  const navBtnSize = 42;

  return (
    <>
      <button className={`mobile-nav-btn`} onClick={toggleMenu}>
        {isOpen ? <X size={navBtnSize} /> : <Menu size={navBtnSize} />}
      </button>
      {isOpen && (
        <nav className='mobile-nav'>
          <div className='mobile-nav-container'>
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`desktop-nav-menu ${
                  link.id === 'home'
                    ? 'underline underline-offset-4 active-link'
                    : 'nav-menu-color'
                }`}
                onClick={(e) => handleScroll(e, link.id)}
              >
                {link.name}
              </Link>
            ))}

            <button className='desktop-nav-actions-btn mobile-nav-actions'>
              Register
            </button>
          </div>
        </nav>
      )}
    </>
  );
}
