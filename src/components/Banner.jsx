import React from 'react';
import Home_img from '../assets/factory_img.jpg';
import Calib_img from '../assets/imc-image2.jpg'
import About_img from '../assets/imc-image1.jpg'
import Accreditation_img from '../assets/imc-image3.jpg'
import Feedback_img from '../assets/imc-image5.jpg' 

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
    feedback: Feedback_img,
  };

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
      {/* Dark overlay - change rgba last value (0.0 to 1.0) to adjust darkness */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}></div>

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