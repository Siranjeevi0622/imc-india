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
    { name: 'Contact Us', path: '/contact' },
    { name: 'Adobe', path: '/adobe' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-gray-200">
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
                    className="px-4 py-2 text-gray-800 font-semibold text-sm transition-all duration-300 hover:text-orange-600 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-sm hover:bg-gray-100 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-900 font-bold" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900 font-bold" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden border-t-2 border-gray-200 bg-gray-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={handleLinkClick}
                      className="block px-6 py-4 text-gray-800 font-semibold text-sm hover:bg-white hover:text-orange-600 transition-all duration-200 border-l-4 border-transparent hover:border-orange-600"
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