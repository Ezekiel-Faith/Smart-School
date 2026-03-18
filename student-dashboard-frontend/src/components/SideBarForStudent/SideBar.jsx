import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Menu, X } from 'lucide-react';
import MobileSidebar from './MobileSidebar';

export default function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [isScrolling, setIsScrolling] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false); // scrolling stopped
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Toggle button (Mobile + Tablet) */}
      <button
        className={`fixed top-2 right-5 md:right-10 z-50
                   p-2 sm:p-3 md:p-4  lg:mb-0
                   rounded-lg text-white lg:hidden
                   transition-transform duration-300
                   ${isSidebarOpen ? 'rotate-180' : 'rotate-0'}
                  nav-btns`}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <X className='w-8 h-8' />
        ) : (
          <Menu className='w-8 h-8' />
        )}
      </button>

      {ReactDOM.createPortal(
        <MobileSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />,
        document.body,
      )}
    </>
  );
}
