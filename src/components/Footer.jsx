// components/Footer.js
import React from 'react';
import { MapPin, Phone, Mail, ChevronRight, FlaskConical } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-xl">
                <FlaskConical className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-lg">IMC</span>
            </div>
            <p className="text-sm leading-relaxed">
              Setting the standard in industrial metrology with precision, accuracy, and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Accreditation', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-500 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:text-white transition-colors">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm">123 Metrology Ave, Industrial Park, City 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-sm">+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span className="text-sm">info@imc.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm mb-3">Subscribe to our newsletter</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-slate-800 text-white px-4 py-2 rounded-l-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-r-lg hover:from-blue-700 hover:to-cyan-600 transition-all">
                Go
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
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