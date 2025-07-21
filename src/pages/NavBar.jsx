import React, { useState } from 'react';
import DesktopNav from '../components/Desktop';
import MobileNav from '../components/Mobile';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='bg-SoftWhite'>
      <header className='nav-container flex items-center justify-between'>
        <DesktopNav />
        <MobileNav
          isOpen={isMobileMenuOpen}
          toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </header>
    </div>
  );
}
