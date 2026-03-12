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
  const bannerImages = {
    default: Home_img,
    home: Home_img,
    aboutus: About_img,
    calibration: Calib_img,
    accreditation: Accreditation_img,
    feedback: Home_img,
  };

  const backgroundImage = bannerImages[type] || bannerImages.default;

  return (
    <div 
      className="border-b-2 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center" 
      style={{ 
        backgroundColor: '#F3F4F6', 
        borderColor: '#E5E7EB', 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed',
        minHeight: 'clamp(180px, 35vw, 320px)',
      }}
    >
      {/* Dark overlay - change rgba last value (0.0 to 1.0) to adjust darkness */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}></div>

      <div className="max-w-7xl mx-auto text-center w-full relative z-10">
        {badge && (
          <div
            className="inline-block text-white font-bold px-4 sm:px-6 py-1.5 sm:py-2 rounded-sm mb-4 sm:mb-6 tracking-wide"
            style={{ backgroundColor: '#2F5E8F', fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)' }}
          >
            {badge}
          </div>
        )}
        
        {/* Responsive title using clamp — scales smoothly on ALL screen sizes */}
        <h1
          className="font-black mb-4 sm:mb-6 tracking-tight text-white leading-tight"
          style={{ fontSize: 'clamp(1.6rem, 5vw, 4.5rem)' }}
        >
          {title}
        </h1>
        
        <div className="w-12 sm:w-20 h-1 mx-auto mb-4 sm:mb-8" style={{ backgroundColor: '#2F5E8F' }}></div>
        
        {subtitle && (
          <p
            className="max-w-3xl mx-auto font-light leading-relaxed text-white"
            style={{ fontSize: 'clamp(0.875rem, 2vw, 1.25rem)' }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Banner;