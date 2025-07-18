import { useState, useEffect } from 'react';
import logo from '../asset/logo.png';
import '../index.css';
import '../header.css';
import { NavLinks } from '@/constants/properties';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: icon lib for hamburger

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname;
    const currentLink = NavLinks.find(link => currentPath === link.path)?.id || 'home';
    setActiveLink(currentLink);
    setMenuOpen(false); // Close menu on route change
  }, [location]);

  const handleNavClick = (linkName) => {
    setActiveLink(linkName);
    setMenuOpen(false);
  };

  return (
    <section className="px-6 py-3 bg-SoftWhite border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center md:mx-30 mx-15">
        {/* Logo */}
        <Link to="/" onClick={() => handleNavClick('home')}>
          <img src={logo} alt="Logo" className="w-[80px] sm:w-[90px] h-auto" />
        </Link>

        {/* Hamburger Button - Mobile & Tablet */}
        <div className="lg:hidden z-50">
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="p-2 text-PurpleBlend focus:outline-none"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {NavLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  onClick={() => handleNavClick(link.id)}
                  className={`
                    text-[15px] font-[600] font-project transition-all text-PurpleBlend duration-300
                    ${activeLink === link.id
                      ? 'text-[16px] underline underline-offset-4 text-blue-900 decoration-2'
                      : 'text-project links'
                    }
                  `}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="ml-6 font-project px-6 py-2 rounded-[8px] w-[180px] h-[50px] bg-PurpleBlend text-white hover:bg-purple-700 transition-all"
          >
            Register
          </button>
        </nav>

        {/* Mobile/Tablet Nav Overlay */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md text-center z-40 px-6 pt-24 pb-6 lg:hidden shadow-md">
            <ul className="flex flex-col gap-6">
              {NavLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    onClick={() => handleNavClick(link.id)}
                    className={`
                      text-[16px] font-[600] font-project transition-all text-PurpleBlend duration-300
                      ${activeLink === link.id
                        ? 'underline underline-offset-4 text-blue-900 decoration-2'
                        : 'text-project'
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  className="w-full mt-4 font-project px-4 py-2 rounded-[8px] bg-PurpleBlend text-white hover:bg-purple-700 transition-all"
                >
                  Register
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </section>
  );
}

export default Header;
