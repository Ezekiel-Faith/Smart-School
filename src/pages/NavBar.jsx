import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import DesktopNav from '../components/Desktop';
import MobileNav from '../components/Mobile';

export default function NavBar() {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hook to detect when navbar enters viewport
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    // Container with fade-in and slide-down animation
    <div
      ref={ref}
      className={`bg-SoftWhite transition-all duration-700 ease-in-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}
    >
      {/* Header with flex layout for desktop and mobile nav */}
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
