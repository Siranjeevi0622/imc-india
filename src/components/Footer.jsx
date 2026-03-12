// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight, FlaskConical, Facebook, Instagram, Twitter, X, InstagramIcon } from 'lucide-react';
import imc_logo from '../assets/imc-logo.png'
const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/calibration' },
    { name: 'Accreditation', path: '/accreditation' },
    { name: 'Enquiry', path: '/enquiry' },
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: Facebook,
      url: 'https://www.facebook.com/imcindia'
    },
    { 
      name: 'Instagram', 
      icon: InstagramIcon,
      url: 'https://www.instagram.com/imcindia'
    },
    { 
      name: 'Twitter', 
      icon: X,
      url: 'https://www.twitter.com/imcindia'
    },
  ];

  return (
    <footer className="text-slate-300" style={{ backgroundColor: '#1F2933' }}>
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <a 
  href="/" 
  target="" 
  rel="noopener noreferrer" 
  className="flex items-center space-x-2 group"
>
  <img src={imc_logo} alt="imc-logo" className='w-auto h-20' />
</a>
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
                    style={{ color: '#cbd5e1' }}
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
                <MapPin className="w-15 h-15  mt-0.5" style={{ color: '#2F5E8F' }} />
                <span className="text-sm">Industrial Metrology Centre,36,Ist Floor,J.M.Solanki Complex,Ahamed Mohideen Street,Sriperumbudur - 602 105</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 shrink-0" style={{ color: '#2F5E8F' }} />
                <a 
                  href="tel:+91 9498071405" 
                  className="text-sm hover:text-white transition-colors"
                >
                 +91 9498071405, +91 9498071401
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 shrink-0" style={{ color: '#2F5E8F' }} />
                <a 
                  href="mailto:info@imc.com" 
                  className="text-sm hover:text-white transition-colors"
                >
                  info@imc.com
                </a>
              </li>
            </ul>
          </div>

          {/*Social Icons */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <p className="text-sm mb-6">Connect with us on social media</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    style={{ backgroundColor: '#2F5E8F' }}
                    title={social.name}
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
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