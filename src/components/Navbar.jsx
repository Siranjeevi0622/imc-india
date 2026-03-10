import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import imc_logo from '../assets/imc-logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Calibration Services', path: '/calibration' },
    { name: 'Accreditation', path: '/accreditation' },
    { name: 'Enquiry', path: '/enquiry' },
    { name: 'Feedback', path: '/feedback' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 " style={{ backgroundColor: '#2F5E8F', borderColor: '#1F2933' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Section */}
            <Link
              to="/"
              className="flex items-center gap-3 group transition-opacity duration-300 hover:opacity-80"
            >
              <img
                src={imc_logo}
                alt="IMC Logo"
                className="h-24 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center gap-0">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    className="px-4 py-2 font-semibold text-sm transition-all duration-300 relative group"
                    style={{ color: 'white' }}
                  >
                    {link.name}
                    <span 
                      className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: '#7FB7B1' }}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-sm transition-colors duration-300"
              style={{ color: 'white' }}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 font-bold" />
              ) : (
                <Menu className="w-6 h-6 font-bold" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden border-t-2 animate-in fade-in slide-in-from-top-2 duration-200" style={{ backgroundColor: '#F3F4F6', borderColor: '#E5E7EB' }}>
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={handleLinkClick}
                      className="block px-6 py-4 font-semibold text-sm transition-all duration-200 border-l-4 border-transparent"
                      style={{ color: '#3F78A8' }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'white';
                        e.target.style.borderColor = '#2F5E8F';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.borderColor = 'transparent';
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}