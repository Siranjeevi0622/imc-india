// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight, FlaskConical } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/calibration' },
    { name: 'Accreditation', path: '/accreditation' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="text-slate-300" style={{ backgroundColor: '#1F2933' }}>
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-2 rounded-xl group-hover:shadow-lg transition-shadow" style={{ backgroundColor: '#2F5E8F' }}>
                <FlaskConical className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-lg group-hover:opacity-80 transition-opacity">IMC</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Setting the standard in industrial metrology with precision, accuracy, and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="flex items-center group"
                    style={{ color: '#7FB7B1' }}
                  >
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" style={{ color: '#2F5E8F' }} />
                    <span className="group-hover:text-white transition-colors">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#2F5E8F' }} />
                <span className="text-sm">123 Metrology Ave, Industrial Park, City 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#2F5E8F' }} />
                <a 
                  href="tel:+1234567890" 
                  className="text-sm hover:text-white transition-colors"
                >
                  +1 234 567 890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: '#2F5E8F' }} />
                <a 
                  href="mailto:info@imc.com" 
                  className="text-sm hover:text-white transition-colors"
                >
                  info@imc.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm mb-3">Subscribe to our newsletter</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="text-white px-4 py-2 rounded-l-lg flex-1 focus:outline-none focus:ring-2 placeholder-slate-500"
                style={{ 
                  backgroundColor: '#374151',
                  focusRingColor: '#2F5E8F'
                }}
                required
              />
              <button 
                type="submit"
                className="text-white px-4 py-2 rounded-r-lg transition-all font-medium hover:opacity-90"
                style={{ backgroundColor: '#2F5E8F' }}
              >
                Go
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTopColor: '#374151' }} className="border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-slate-400">
            © 2024 Industrial Metrology Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;