import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

export default function TopBar() {
  return (
    // Hide on mobile and tablet, show on desktop (lg and above)
    <div className="hidden lg:block" style={{ backgroundColor: 'white', borderBottomColor: '#E5E7EB', borderBottomWidth: '1px' }}>
      {/* Top Bar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 gap-8">
          
          {/* Left - Contact Info */}
          <div className="flex items-center gap-8">
            {/* Phone India */}
            <div className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap" style={{ color: '#2F5E8F' }}>
              <span>🇮🇳</span>
              <span>+91 82700 99990</span>
            </div>
            
            {/* Phone UK */}
            <div className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap" style={{ color: '#2F5E8F' }}>
              <span>🇬🇧</span>
              <span>+44 7446936883</span>
            </div>
          </div>

          {/* Right - Social Icons */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Social Media Icons */}
            <a 
              href="https://www.facebook.com/imcindia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-70 flex items-center justify-center"
              style={{ color: '#2F5E8F' }}
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            
            <a 
              href="https://www.instagram.com/imcindia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-70 flex items-center justify-center"
              style={{ color: '#2F5E8F' }}
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            
            <a 
              href="https://www.youtube.com/imcindia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-70 flex items-center justify-center"
              style={{ color: '#2F5E8F' }}
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            
            <a 
              href="https://www.twitter.com/imcindia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-70 flex items-center justify-center"
              style={{ color: '#2F5E8F' }}
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            
            <a 
              href="https://www.linkedin.com/company/imcindia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-70 flex items-center justify-center"
              style={{ color: '#2F5E8F' }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}