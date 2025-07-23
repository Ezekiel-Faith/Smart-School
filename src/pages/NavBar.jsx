import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ReactDOM from 'react-dom';
import DesktopNav from '../components/Desktop';
import MobileNav from '../components/Mobile';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navBtnSize = 42;

  return (
    <>
      <div
        ref={ref}
        className={`bg-SoftWhite transition-all duration-700 ease-in-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        } fixed w-full z-[1000]`}
      >
        <header className='nav-container'>
          <DesktopNav />
          <button
            className={`mobile-nav-btn ${
              isMobileMenuOpen ? 'rotate-180' : 'rotate-0'
            } z-[1000]`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={navBtnSize} />
            ) : (
              <Menu size={navBtnSize} />
            )}
          </button>
        </header>
      </div>

      {/* Render MobileNav using a Portal */}
      {ReactDOM.createPortal(
        <MobileNav
          isOpen={isMobileMenuOpen}
          toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />,
        document.body
      )}
    </>
  );
}
