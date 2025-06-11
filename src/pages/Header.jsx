import { useState, useEffect,  } from 'react';
import logo from '../asset/logo.png';
import '../index.css';
import '../header.css';
import { NavLinks } from '@/constants/properties';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  // State to track active link
  const [activeLink, setActiveLink] = useState('home');
  
  useEffect(() => {
    const currentPath = location.pathname;
    const currentLink = NavLinks.find(link => 
      currentPath === link.path
    )?.id || 'home';
    setActiveLink(currentLink);
  }, [location]); // Re-run when location changes

  const handleNavClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <header className="flex justify-between items-center px-12 py-3 bg-SoftWhite  mb-12">
      <Link to="/" onClick={() => handleNavClick('home')}>
        <img src={logo} alt="Logo" className="w-[98px] h-[92.505px]"/>
      </Link>
      
      <nav className='flex items-center gap-2'>
        <ul className='flex items-center gap-12'>
          {NavLinks.map((link) => (
            <li key={link.id} className='mr-1'>
              <Link
                to={`${link.path}`}
                onClick={() => setActiveLink(link.id)}
                className={`
                  text-[16px] font-project transition-all duration-300
                  ${activeLink === link.id 
                    ? 'text-[18px] font-bold underline underline-offset-8 decoration-2 decoration-project text-project'
                    : 'text-project hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-PurpleBlend'
                  }
                `}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <button 
        className='btn mr-3 font-project p-2 rounded-[8px] w-[189px] h-[57px] px-[22px] py-[16px] cursor-pointer relative text-white register-btn transition-all duration-300 hover:bg-gradient-to-[233deg]'
      >
        Register
      </button>
    </header>
  );
}

export default Header;