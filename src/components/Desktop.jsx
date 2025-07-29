import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../asset/logo.png';
import { NavLinks } from '@/constants/navlinks';

export default function DesktopNav() {
  const [entryDirection, setEntryDirection] = useState({});
  const [exitDirection, setExitDirection] = useState({});
  const location = useLocation();

  const handleMouseEnter = (e, linkId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const halfWidth = rect.width / 2;
    const direction = mouseX < halfWidth ? 'from-left' : 'from-right';

    // Clear any previous exit class to allow re-entry animation
    setExitDirection((prev) => ({
      ...prev,
      [linkId]: '',
    }));
    setEntryDirection((prev) => ({
      ...prev,
      [linkId]: direction,
    }));
  };

  const handleMouseLeave = (e, linkId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const halfWidth = rect.width / 2;
    const direction = mouseX < halfWidth ? 'leave-left' : 'leave-right';

    // Set the exit direction class
    setExitDirection((prev) => ({
      ...prev,
      [linkId]: direction,
    }));

    // Clear entry direction after a short delay to allow exit animation to complete
    setTimeout(() => {
      setEntryDirection((prev) => ({
        ...prev,
        [linkId]: '',
      }));
    }, 600);
  };

  return (
    <>
      <Link to='/' className='nav-img'>
        <img src={logo} alt='School Logo' className='w-12' />
      </Link>

      <nav className='desktop-nav-menu-container'>
        {NavLinks.map((link) => (
          <Link
            key={link.id}
            to={link.path}
            className={`desktop-nav-menu ${
              location.pathname === link.path
                ? 'underline underline-offset-4 active-link'
                : 'nav-menu-color'
            } ${entryDirection[link.id] || ''} ${exitDirection[link.id] || ''}`}
            onMouseEnter={(e) => handleMouseEnter(e, link.id)}
            onMouseLeave={(e) => handleMouseLeave(e, link.id)}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className='desktop-nav-actions'>
        <button className='desktop-nav-actions-btn'>Login</button>
      </div>
    </>
  );
}
