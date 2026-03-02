import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Menu, X } from 'lucide-react';
import MobileSidebar from './MobileSidebar';

export default function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <>
      {/* Toggle button (Mobile + Tablet) */}
      <button
        className={`fixed top-4  left-4 z-50
                   p-2 sm:p-3 md:p-4 
                   rounded-lg text-white lg:hidden
                   transition-transform duration-300
                   ${isSidebarOpen ? 'rotate-180' : 'rotate-0'} nav-btns`}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <X className='sm:w-8 sm:h-8 md:w-9 md:h-9' />
        ) : (
          <Menu className='sm:w-8 sm:h-8 md:w-9 md:h-9' />
        )}
      </button>

      {ReactDOM.createPortal(
        <MobileSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />,
        document.body,
      )}
    </>
  );
}
