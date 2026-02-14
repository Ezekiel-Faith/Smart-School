import React, { useState } from 'react';
import SmartSchoolLogo from '../../Asset/smart-school-logo.png';
import {
  LayoutDashboard,
  Calendar,
  FileText,
  BookOpen,
  BarChart,
  ClipboardCheck,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  //  Main navigation items
  const MAIN_NAV = [
    { label: 'Dashboard', icon: LayoutDashboard, to: '/dashboard' },
    { label: 'Timetable', icon: Calendar, to: '/timetable' },
    { label: 'Assignments', icon: FileText, to: '/assignments' },
    { label: 'Curriculum', icon: BookOpen, to: '/curriculum' },
    { label: 'Grades', icon: BarChart, to: '/grades' },
    { label: 'Take Quiz', icon: ClipboardCheck, to: '/quiz' },
  ];

  //  Bottom navigation items
  const bottomItems = [
    { icon: Settings, label: 'Settings' },
    { icon: LogOut, label: 'Logout', extra: 'text-red-700 hover:bg-red-100' },
  ];

  return (
    <div className='flex'>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[100%] md:w-90 lg:w-65 
          flex flex-col text-white
          bg-[linear-gradient(to_top,rgba(100,30,230,0.7),#222222)]
          transition-transform duration-300 z-50 rounded-tr-4xl
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        {/* Logo */}
        <div className=' mb-8 pl-10 md:pl-8 lg:pl-6'>
          <img
            src={SmartSchoolLogo}
            alt='Smart school logo'
            className='pl-7 h-12 md:h-20 lg:h-14'
          />
          <h1 className='text-lg md:text-2xl lg:text-lg font-bold'>
            Smart School
          </h1>
          <hr />
        </div>

        {/* Navigation */}
        <div className='px-10 md:px-4 py-4  md:py-15 lg:py-4'>
          <nav className='flex flex-col flex-1'>
            {MAIN_NAV.map(({ icon: Icon, label, to }) => (
              <NavLink
                className={({
                  isActive,
                }) => `flex items-center gap-3 py-2 md:p-4 lg:p-2
                 rounded-lg text-lg md:text-2xl lg:text-sm ${isActive ? 'nav-btns' : ''}`}
                key={label}
                to={to}
              >
                <Icon />
                {label}
              </NavLink>
            ))}

            <button
              className='mt-[7px] mb-[92px] sm:mb-[90px] md:mb-[190px] lg:mb-[90px] 
                         py-4 md:py-6 lg:py-1
                         font-semibold rounded-lg
                         md:text-2xl lg:text-sm
                         hover:bg-purple-400
                         border-2 border-[#a58a1c]'
            >
              Study with Smart A.I
            </button>
          </nav>

          {/* Settings & Logout */}
          <div className='flex flex-col gap-0 mt-auto  md:mt-8 lg:mt-6 xl:mt-40'>
            <p
              className='px-2 py-1 md:px-4 md:py-0 lg:px-2 lg:py-1 
                          md:text-2xl lg:text-sm'
            >
              SETTINGS
            </p>

            {bottomItems.map(({ icon: Icon, label, extra }) => (
              <a
                key={label}
                href='#'
                className={`flex items-center gap-2 md:gap-2 lg:gap-1 
                           px-2 py-1 sm:px-1 md:px-5 md:py-2 lg:px-2 lg:py-1
                           text-lg md:text-2xl lg:text-sm
                           hover:bg-purple-600 ${extra || ''}`}
              >
                <Icon
                  size={15}
                  className='sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-4 lg:h-4 pl-2'
                />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Toggle button (Mobile + Tablet) */}
      <button
        className='fixed top-4 left-4 z-50 bg-gray-700 
                   p-2 sm:p-3 md:p-4 
                   rounded-lg text-white lg:hidden'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className='sm:w-8 sm:h-8 md:w-9 md:h-9' />
        ) : (
          <Menu className='sm:w-8 sm:h-8 md:w-9 md:h-9' />
        )}
      </button>
    </div>
  );
}
