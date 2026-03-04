import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="hidden sm:inline font-bold text-2xl text-gray-900 tracking-tight">
                Logo
              </span>
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
     

     {/* starting +
     
     
     here -After coding all components remove this section */}
      {/* Hero Section - Demo Content */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight">
              Welcome to Your Site
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Navigate using the menu above to explore our services. This navbar is fully responsive and features smooth animations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Demo Sections */}
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            {[
              { id: 'home', title: 'Home', desc: 'Welcome to our professional services platform.' },
              { id: 'about', title: 'About Us', desc: 'We are a dedicated team committed to excellence.' },
              { id: 'calibration', title: 'Calibration Services', desc: 'Comprehensive calibration ensuring industry standards.' },
              { id: 'accreditation', title: 'Accreditation', desc: 'Maintaining accreditation from leading bodies.' },
              { id: 'enquiry', title: 'Enquiry', desc: 'Submit your inquiry for prompt assistance.' },
              { id: 'feedback', title: 'Feedback', desc: 'Your feedback helps us improve our services.' },
              { id: 'contact', title: 'Contact Us', desc: 'Reach out to our team anytime.' },
              { id: 'support', title: 'Support', desc: 'Professional support available 24/7.' },
            ].map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl p-8 transition-all duration-300 hover:scale-105 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ending here */}
    </>
  );
}