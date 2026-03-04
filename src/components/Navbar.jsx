
import React, { useState } from 'react';
import { Menu, X, FlaskConical } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About Us', 'Calibration Services', 'Accreditation', 'Enquiry', 'Feedback', 'Contact Us'];

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-xl shadow-lg">
              <FlaskConical className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Industrial Metrology Centre
            </span>
          </div>

          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-slate-600 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 animate-slideDown">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 px-4 rounded-lg transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;