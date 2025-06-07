import { useState, useEffect,  } from 'react';
import logo from '../asset/logo.png';
import '../index.css';
import '../header.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  // State to track active link
  const [activeLink, setActiveLink] = useState('home');
  
  useEffect(() => {
    const currentPath = location.pathname;
    console.log("Current Path:", currentPath);
    const currentLink = navLinks.find(link => 
      currentPath === link.path
    )?.id || 'home';
    setActiveLink(currentLink);
  }, [location]); // Re-run when location changes

  const handleNavClick = (linkName) => {
    setActiveLink(linkName);
    // Navigation will be handled by the anchor tag's href
  };

    const handleClick = (e) => {
    // Your existing ripple effect
    const button = e.currentTarget;
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  // Navigation data
  const navLinks = [
    { id: 'home', name: 'Home', path: '/Home' },
    { id: 'about', name: 'About Us', path: '/About-Us' },
    { id: 'gallery', name: 'Gallery', path: '/Gallery' },
    { id: 'admissions', name: 'Admissions', path: '/Admission' },
    { id: 'academics', name: 'Academics', path: '/Academics' },
    { id: 'contact', name: 'Contact Us', path: '/Contact-Us' }
  ];


  return (
    <header className="flex justify-between items-center px-12 py-3 bg-white border-2 border-amber-500 mb-12">
      <Link to="/" onClick={() => handleNavClick('home')}>
        <img src={logo} alt="Logo" className="w-[98px] h-[92.505px]"/>
      </Link>
      
      <nav className='flex items-center gap-2'>
        <ul className='flex items-center gap-12'>
          {navLinks.map((link) => (
            <li key={link.id} className='mr-1'>
              <Link
                to={`${link.path}`}
                onClick={() => setActiveLink(link.id)}
                className={`
                  text-[16px] font-project transition-all duration-300
                  ${activeLink === link.id 
                    ? 'text-[18px] font-bold underline decoration-2 decoration-[#171652] text-[#111881]'
                    : 'text-[#14085a] hover:underline hover:text-[18px]'
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
        className='mr-3 font-project p-2 bg-gradient-to-r from-[#ED7882] to-[#9055ff] rounded-[8px] w-[189px] h-[57px] px-[22px] py-[16px] cursor-pointer relative text-white register-btn transition-all duration-300 hover:shadow-lg hover:shadow-[#9055ff]/30'
        onClick={handleClick}
      >
        Register
      </button>
    </header>
  );
}

export default Header;