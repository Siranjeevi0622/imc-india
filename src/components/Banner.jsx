import React from 'react';
import Home_img from '../assets/factory_img.jpg';
import Calib_img from '../assets/calib.jpeg'
import About_img from '../assets/about.jpeg'
import Accreditation_img  from '../assets/accreditation.jpeg'

const Banner = ({ 
  title, 
  subtitle = null, 
  badge = null, 
  type = 'default'
}) => {
  // Store all banner images for different pages
  // Add your custom images here - just import and replace
  const bannerImages = {
    default: Home_img,           // Home page
    home: Home_img,               // Home page
    aboutus: About_img,            // About Us page - REPLACE with your about image
    calibration: Calib_img,          // Calibration Services page - REPLACE with your calibration image
    accreditation: Accreditation_img,      // Accreditation page - REPLACE with your accreditation image           // Contact page
    feedback: Home_img,           // Feedback page
  };

  // Get the image based on type, fallback to default
  const backgroundImage = bannerImages[type] || bannerImages.default;

  return (
    <div 
      className="border-b-2 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-280px flex items-center justify-center" 
      style={{ 
        backgroundColor: '#F3F4F6', 
        borderColor: '#E5E7EB', 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed' 
      }}
    >
      <div className="max-w-7xl mx-auto text-center w-full relative z-10">
        {badge && (
          <div className="inline-block text-white text-sm font-bold px-6 py-2 rounded-sm mb-6 tracking-wide" style={{ backgroundColor: '#2F5E8F' }}>
            {badge}
          </div>
        )}
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-white">
          {title}
        </h1>
        
        <div className="w-20 h-1 mx-auto mb-8" style={{ backgroundColor: '#2F5E8F' }}></div>
        
        {subtitle && (
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed text-white">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Banner;