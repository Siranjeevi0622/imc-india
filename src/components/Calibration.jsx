import React, { useState } from 'react';
import { Filter, ArrowRight, Check, X } from 'lucide-react';
import temp1 from '../assets/temp-1.jpeg'
import temp2 from '../assets/temp-2.jpeg'
import temp3 from '../assets/temp-3.jpeg'
import temp4 from '../assets/temp-4.jpeg'
import temp5 from '../assets/temp-5.jpeg'
import temp6 from '../assets/temp-6.jpeg'
import temp7 from '../assets/temp-7.jpeg'
import temp8 from '../assets/temp-8.jpeg'
import temp9 from '../assets/temp-9.jpeg'
import temp10 from '../assets/temp-10.jpeg'
import temp11 from '../assets/temp-11.jpeg'
import temp12 from '../assets/temp-12.jpeg'
import temp13 from '../assets/temp-13.jpeg'

const CalibrationServices = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const calibrationData = [
    {
      id: 1,
      category: 'Temperature Calibration',
      categoryId: 'temperature',
      items: [
        { name: 'Temperature Controller / Indicator', image: temp1 },
        { name: 'Temperature Sensor (RTD, Thermocouple)', image: temp2 },
        { name: 'Temperature Transmitter', image: temp3 },
        { name: 'Temperature Calibrator (liquid & dry block)', image: temp4 },
        { name: 'Temperature Recorder (Analog/Digital)', image: temp5 },
        { name: 'Thermo Switch / Thermostat', image: temp6 },
        { name: 'Thermometer (Glass/Digital)', image: temp7 },
        { name: 'Hot Air Oven', image: temp8 },
        { name: 'Muffle Furnace', image: temp9 },
        { name: 'Deep Freezer', image: temp10 },
        { name: 'Water Bath', image: temp11 },
        { name: 'Incubator', image: temp12 },
        { name: 'Refrigerator', image: temp13 },
      ],
      icon: '🌡️',
      color: 'orange',
      description: 'Precision temperature measurement and calibration services',
    },
    {
      id: 2,
      category: 'Mechanical - Pressure Calibration',
      categoryId: 'pressure',
      items: [
        { name: 'Pressure, Vacuum, Compound Gauges', image: 'https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=500&h=500&fit=crop' },
        { name: 'Pressure Calibrators', image: 'https://images.unsplash.com/photo-1581092335397-112652a9aad4?w=500&h=500&fit=crop' },
        { name: 'Pressure Switches', image: 'https://images.unsplash.com/photo-1581092056562-40038f70a70e?w=500&h=500&fit=crop' },
        { name: 'Pressure Transmitter, Pressure Transducer', image: 'https://images.unsplash.com/photo-1581092162562-40038f70a6de?w=500&h=500&fit=crop' },
        { name: 'Pressure Recorder (Analog/Digital)', image: 'https://images.unsplash.com/photo-1581092335392-8babe2b548be?w=500&h=500&fit=crop' },
      ],
      icon: '⚙️',
      color: 'blue',
      description: 'Comprehensive pressure and vacuum measurement calibration',
    },
    {
      id: 3,
      category: 'Mechanical - Dimensional Calibration',
      categoryId: 'dimensional',
      items: [
        { name: 'Measuring Scale', image: 'https://images.unsplash.com/photo-1581092335397-112652a9aad4?w=500&h=500&fit=crop' },
        { name: 'Measuring Tape', image: 'https://images.unsplash.com/photo-1581092056562-40038f70a70e?w=500&h=500&fit=crop' },
        { name: 'Vernier Caliper', image: 'https://images.unsplash.com/photo-1581092162562-40038f70a6de?w=500&h=500&fit=crop' },
        { name: 'Micrometer (External/Internal/Depth)', image: 'https://images.unsplash.com/photo-1581092335392-8babe2b548be?w=500&h=500&fit=crop' },
        { name: 'Dial Gauge (Plunger/Lever/Bore)', image: 'https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=500&h=500&fit=crop' },
      ],
      icon: '📏',
      color: 'purple',
      description: 'Accurate dimensional and linear measurement calibration',
    },
    {
      id: 4,
      category: 'Mechanical - Mass Calibration',
      categoryId: 'mass',
      items: [
        { name: 'Weighing Machine', image: 'https://images.unsplash.com/photo-1581092335397-112652a9aad4?w=500&h=500&fit=crop' },
        { name: 'Weights/Weight Box', image: 'https://images.unsplash.com/photo-1581092056562-40038f70a70e?w=500&h=500&fit=crop' },
      ],
      icon: '⚖️',
      color: 'green',
      description: 'Precision mass and weight calibration services',
    },
    {
      id: 5,
      category: 'NDT Instruments Calibration',
      categoryId: 'ndt',
      items: [
        { name: 'UT Machine', image: 'https://images.unsplash.com/photo-1581092162562-40038f70a6de?w=500&h=500&fit=crop' },
        { name: 'UTG Machine', image: 'https://images.unsplash.com/photo-1581092335392-8babe2b548be?w=500&h=500&fit=crop' },
        { name: 'MPI Yoke', image: 'https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=500&h=500&fit=crop' },
        { name: 'Hardness Tester', image: 'https://images.unsplash.com/photo-1581092335397-112652a9aad4?w=500&h=500&fit=crop' },
      ],
      icon: '🔍',
      color: 'red',
      description: 'Non-destructive testing equipment calibration',
    },
  ];

  const colorMap = {
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', button: 'bg-orange-600 hover:bg-orange-700', accent: 'from-orange-400 to-orange-600' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', button: 'bg-blue-600 hover:bg-blue-700', accent: 'from-blue-400 to-blue-600' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', button: 'bg-purple-600 hover:bg-purple-700', accent: 'from-purple-400 to-purple-600' },
    green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600', button: 'bg-green-600 hover:bg-green-700', accent: 'from-green-400 to-green-600' },
    red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-600', button: 'bg-red-600 hover:bg-red-700', accent: 'from-red-400 to-red-600' },
  };

  const allItems = calibrationData.flatMap((cat) =>
    cat.items.map((item) => ({
      name: typeof item === 'string' ? item : item.name,
      image: typeof item === 'string' ? '' : item.image,
      category: cat.category,
      categoryId: cat.categoryId,
      icon: cat.icon,
      color: cat.color,
    }))
  );

  const filteredItems =
    activeCategory === 'all'
      ? allItems
      : allItems.filter((item) => item.categoryId === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            CALIBRATION<br />SERVICES
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Discover our comprehensive range of precision calibration services designed for industrial excellence.
          </p>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden w-full mb-6 px-6 py-3 bg-orange-600 text-white font-bold rounded-xl flex items-center justify-between"
            >
              <span className="flex items-center gap-2"><Filter className="w-5 h-5" /> Filters</span>
              <X className={`w-5 h-5 transition-transform ${mobileFilterOpen ? 'rotate-45' : ''}`} />
            </button>

            {/* Filter Panel */}
            <div className={`bg-white rounded-2xl border border-gray-200 p-6 shadow-sm sticky top-20 ${!mobileFilterOpen && 'hidden lg:block'}`}>
              {/* Filter Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl">
                  <Filter className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900">CATEGORIES</h3>
                  <p className="text-xs text-gray-500 font-medium">{filteredItems.length} items</p>
                </div>
              </div>

              {/* All Services Button */}
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setMobileFilterOpen(false);
                }}
                className={`w-full mb-4 px-5 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 ${
                  activeCategory === 'all'
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Services
              </button>

              {/* Category Divider */}
              <div className="h-px bg-gray-200 mb-4"></div>

              {/* Category Buttons */}
              <div className="space-y-2.5">
                {calibrationData.map((category) => {
                  const colors = colorMap[category.color];
                  const isActive = activeCategory === category.categoryId;
                  return (
                    <button
                      key={category.categoryId}
                      onClick={() => {
                        setActiveCategory(category.categoryId);
                        setMobileFilterOpen(false);
                      }}
                      className={`w-full px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-3 text-left group ${
                        isActive
                          ? `bg-gradient-to-r ${colors.accent} text-white shadow-md`
                          : `bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200`
                      }`}
                    >
                      <span className="text-base">{category.icon}</span>
                      <span className="text-xs leading-snug flex-1">{category.category}</span>
                      {isActive && <Check className="w-4 h-4 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Stats Card */}
              <div className="mt-8 p-5 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                <div className="text-4xl font-black text-orange-600 mb-2">
                  {filteredItems.length}
                </div>
                <p className="text-sm font-semibold text-gray-700">Available Items</p>
                <p className="text-xs text-gray-600 mt-1">in this category</p>
              </div>
            </div>
          </div>

          {/* Right Content - Products Grid */}
          <div className="lg:col-span-4">
            {/* Results Header */}
            <div className="mb-10">
              <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                {activeCategory === 'all' 
                  ? 'All Calibration Services' 
                  : calibrationData.find(c => c.categoryId === activeCategory)?.category}
              </h2>
              <p className="text-gray-600 font-medium text-sm">
                Showing <span className="text-orange-600 font-black text-base">{filteredItems.length}</span> items
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {filteredItems.map((item, index) => {
                const colors = colorMap[item.color];
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-orange-300 hover:-translate-y-1 flex flex-col h-full"
                  >
                    {/* Image Container with Gradient Overlay */}
                    <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-120 transition-transform duration-700"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Badge Container - Top Right */}
                      <div className="absolute top-4 right-4 flex gap-2">
                       
                      </div>

                      {/* Icon Badge - Bottom Left */}
                      <div className={`absolute bottom-4 left-4 w-14 h-14 ${colors.bg} border-2 ${colors.border} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-125 transition-transform duration-300 backdrop-blur-sm`}>
                        {item.icon}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Category Tag */}
                      <div className="mb-4 inline-flex items-center gap-2 w-fit">
                        <div className={`w-2 h-2 rounded-full ${colors.text.replace('text-', 'bg-')}`}></div>
                        <span className={`${colors.text} text-xs font-black uppercase tracking-widest`}>
                          {item.categoryId}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-black text-gray-900 mb-4 line-clamp-2 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                        {item.name}
                      </h3>

                      {/* Features with Dots */}
                      <div className="space-y-2.5 mb-6 flex-grow">
                        <div className="flex items-start gap-3">
                          <div className={`w-1 h-1 rounded-full ${colors.text} flex-shrink-0 mt-2`}></div>
                          <span className="text-xs text-gray-700 font-medium leading-snug">ISO/IEC 17025:2005 Certified</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className={`w-1 h-1 rounded-full ${colors.text} flex-shrink-0 mt-2`}></div>
                          <span className="text-xs text-gray-700 font-medium leading-snug">NPL Traceable</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className={`w-1 h-1 rounded-full ${colors.text} flex-shrink-0 mt-2`}></div>
                          <span className="text-xs text-gray-700 font-medium leading-snug">Expert Support</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                     
                    </div>

                    {/* Top Accent Border */}
                    <div className={`h-1.5 bg-gradient-to-r ${colors.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                );
              })}
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-600 text-lg font-medium">No items found in this category</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Service Categories Overview */}
      <div className="bg-white border-t border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-12 tracking-tight text-center">SERVICE CATEGORIES</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {calibrationData.map((category) => {
              const colors = colorMap[category.color];
              return (
                <div
                  key={category.categoryId}
                  className={`bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group`}
                >
                  {/* Icon */}
                  <div className={`text-4xl mb-4 p-4 rounded-xl w-fit ${colors.bg}`}>
                    {category.icon}
                  </div>

                  {/* Count */}
                  <div className={`text-3xl font-black ${colors.text} mb-1`}>
                    {category.items.length}
                  </div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-4">Services</p>
                  
                  {/* Divider */}
                  <div className={`h-0.5 bg-gradient-to-r ${colors.accent} mb-4`}></div>
                  
                  {/* Content */}
                  <h3 className={`text-sm font-black ${colors.text} mb-2 line-clamp-2`}>
                    {category.category}
                  </h3>
                  
                  <p className="text-gray-600 mb-5 leading-relaxed text-xs">
                    {category.description}
                  </p>

                  {/* Button */}
                  <button className={`w-full ${colors.button} text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn text-xs tracking-wide uppercase hover:shadow-lg`}>
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
            <div className="text-5xl font-black text-orange-600 mb-3">
              {allItems.length}+
            </div>
            <h3 className="text-lg font-black text-gray-900 mb-2 tracking-tight">
              Equipment Types
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Complete range covering all industrial measurement needs
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
            <div className="text-5xl font-black text-blue-600 mb-3">
              5
            </div>
            <h3 className="text-lg font-black text-gray-900 mb-2 tracking-tight">
              Categories
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Specialized expertise across all measurement types
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
            <div className="text-3xl font-black text-purple-600 mb-3">
              ISO/IEC<br />17025
            </div>
            <h3 className="text-lg font-black text-gray-900 mb-2 tracking-tight">
              Certified
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              International accreditation standards
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            READY TO CALIBRATE?
          </h3>
          <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Contact our expert team today to discuss your calibration requirements and receive a professional quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg tracking-wide flex items-center justify-center gap-2 group/btn shadow-lg">
              <span>SEND ENQUIRY</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg tracking-wide flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-xl hover:-translate-y-1">
              <span>CONTACT US</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CalibrationServices;