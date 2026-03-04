import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
// import logo from '../assets/logo.png'
import imc_logo from '../assets/imc_logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Calibration Services', path: '/calibration' },
    { name: 'Accreditation', path: '/accreditation' },
    { name: 'Enquiry', path: '/enquiry' },
    { name: 'Feedback', path: '/feedback' },
    { name: 'Contact Us', path: '/contact' },
    {name: 'Adobe', path: '/adobe'}
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Section */}
            <Link
              to="/"
              className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105"
            >
              <img
                src={imc_logo}
                alt="IMC Logo"
                className="h-18 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    className="relative px-4 py-2 text-gray-700 font-medium text-sm transition-colors duration-300 hover:text-blue-600 group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-3/4 group-hover:left-1/4"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
              <ul className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={handleLinkClick}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium text-sm transition-colors duration-200 border-l-4 border-transparent hover:border-blue-600"
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