import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../asset/logo.png';
import { NavLinks } from '@/constants/properties';

export default function DesktopNav() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const links = document.querySelectorAll('.desktop-nav-menu');
    links.forEach((link) => {
      link.addEventListener('mouseenter', (e) => {
        const rect = link.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const halfWidth = rect.width / 2;
        link.classList.remove('from-left', 'from-right');
        link.classList.add(mouseX < halfWidth ? 'from-left' : 'from-right');
      });
    });
  }, []);

  return (
    <>
      <Link to='/' onClick={(e) => handleScroll(e, 'home')} className='nav-img'>
        <img src={logo} alt='School Logo' className='w-12' />
      </Link>

      <nav className='desktop-nav-menu-container'>
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
      </nav>

      <div className='desktop-nav-actions'>
        <button className='desktop-nav-actions-btn'>Register</button>
      </div>
    </>
  );
}
