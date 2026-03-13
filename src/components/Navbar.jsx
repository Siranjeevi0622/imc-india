import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import imc_logo from '../assets/imc-logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Calibration Services', path: '/calibration' },
    { name: 'Accreditation', path: '/accreditation' },
    { name: 'Feedback', path: '/feedback' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full shadow-md" style={{ backgroundColor: '#2F5E8F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">

          {/* Logo */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="flex items-center gap-3 shrink-0 transition-opacity duration-300 hover:opacity-80"
          >
            <img
              src={imc_logo}
              alt="IMC Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="px-3 py-2 font-semibold text-sm transition-all duration-300 relative group whitespace-nowrap block"
                  style={{ color: 'white' }}
                >
                  {link.name}
                  <span
                    className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 group-hover:w-full"
                    style={{
                      backgroundColor: '#7FB7B1',
                      width: isActive(link.path) ? '100%' : '0%',
                    }}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Enquiry Button */}
          <Link
            to="/enquiry"
            className="hidden lg:flex items-center px-6 py-2 font-semibold text-sm text-white rounded-lg transition-all duration-300 hover:opacity-90 hover:shadow-lg shrink-0"
            style={{ backgroundColor: '#FF6B35' }}
          >
            Enquiry
          </Link>

          {/* Mobile: Enquiry + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            {/* <Link
              to="/enquiry"
              onClick={handleLinkClick}
              className="flex items-center px-4 py-1.5 font-semibold text-xs text-white rounded-lg transition-all duration-300 hover:opacity-90 shrink-0"
              style={{ backgroundColor: '#FF6B35' }}
            >
              Enquiry
            </Link> */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-sm transition-colors duration-300"
              style={{ color: 'white' }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className="lg:hidden border-t w-full overflow-y-auto max-h-[calc(100vh-64px)]"
          style={{ backgroundColor: '#F3F4F6', borderColor: '#E5E7EB' }}
        >
          <ul className="flex flex-col w-full">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full">
                <Link
                  to={link.path}
                  onClick={handleLinkClick}
                  className="flex items-center w-full px-6 py-3 font-semibold text-sm transition-all duration-200 border-l-4"
                  style={{
                    color: isActive(link.path) ? '#2F5E8F' : '#3F78A8',
                    borderColor: isActive(link.path) ? '#2F5E8F' : 'transparent',
                    backgroundColor: isActive(link.path) ? 'white' : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(link.path)) {
                      e.currentTarget.style.backgroundColor = 'white';
                      e.currentTarget.style.borderColor = '#2F5E8F';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(link.path)) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderColor = 'transparent';
                    }
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Enquiry inside mobile menu as well (larger tap target) */}
            <li className="w-full px-6 py-4 border-t" style={{ borderColor: '#E5E7EB' }}>
              <Link
                to="/enquiry"
                onClick={handleLinkClick}
                className="flex items-center justify-center w-full py-3 font-bold text-sm text-white rounded-lg transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: '#FF6B35' }}
              >
                Enquiry
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}