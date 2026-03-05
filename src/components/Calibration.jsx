import React, { useState } from 'react';
import { Filter, ArrowRight } from 'lucide-react';

const CalibrationServices = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const calibrationData = [
    {
      id: 1,
      category: 'Temperature Calibration',
      categoryId: 'temperature',
      items: [
        { name: 'Temperature Controller / Indicator', image: 'https://images.unsplash.com/photo-1581092056562-40038f70a70e?w=500&h=500&fit=crop' },
        { name: 'Temperature Sensor (RTD, Thermocouple)', image: 'https://images.unsplash.com/photo-1581092162562-40038f70a6de?w=500&h=500&fit=crop' },
        { name: 'Temperature Transmitter', image: 'https://images.unsplash.com/photo-1581092335392-8babe2b548be?w=500&h=500&fit=crop' },
        { name: 'Temperature Calibrator (liquid & dry block)', image: 'https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=500&h=500&fit=crop' },
        { name: 'Temperature Recorder (Analog/Digital)', image: 'https://images.unsplash.com/photo-1581092335397-112652a9aad4?w=500&h=500&fit=crop' },
        { name: 'Thermo Switch / Thermostat', image: 'https://images.unsplash.com/photo-1581092056562-40038f70a70e?w=500&h=500&fit=crop' },
        { name: 'Thermometer (Glass/Digital)', image: 'https://images.unsplash.com/photo-1581092162562-40038f70a6de?w=500&h=500&fit=crop' },
        { name: 'Hot Air Oven', image: 'https://images.unsplash.com/photo-1581092335392-8babe2b548be?w=500&h=500&fit=crop' },
        { name: 'Muffle Furnace', image: 'https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=500&h=500&fit=crop' },
        { name: 'Deep Freezer', image: 'https://images.unsplash.com/photo-1581092335397-112652a9aad4?w=500&h=500&fit=crop' },
        { name: 'Water Bath', image: 'https://images.unsplash.com/photo-1581092056562-40038f70a70e?w=500&h=500&fit=crop' },
        { name: 'Incubator', image: 'https://images.unsplash.com/photo-1581092162562-40038f70a6de?w=500&h=500&fit=crop' },
        { name: 'Refrigerator', image: 'https://images.unsplash.com/photo-1581092335392-8babe2b548be?w=500&h=500&fit=crop' },
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
    orange: { bg: 'bg-orange-50', border: 'border-orange-600', text: 'text-orange-600', button: 'bg-orange-600 hover:bg-orange-700', tag: 'bg-orange-100 text-orange-700' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-600', text: 'text-blue-600', button: 'bg-blue-600 hover:bg-blue-700', tag: 'bg-blue-100 text-blue-700' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-600', text: 'text-purple-600', button: 'bg-purple-600 hover:bg-purple-700', tag: 'bg-purple-100 text-purple-700' },
    green: { bg: 'bg-green-50', border: 'border-green-600', text: 'text-green-600', button: 'bg-green-600 hover:bg-green-700', tag: 'bg-green-100 text-green-700' },
    red: { bg: 'bg-red-50', border: 'border-red-600', text: 'text-red-600', button: 'bg-red-600 hover:bg-red-700', tag: 'bg-red-100 text-red-700' },
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
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gray-50 border-b-2 border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            CALIBRATION<br />SERVICES
          </h1>
          <div className="w-20 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive calibration services across multiple categories to ensure your instruments maintain precision and accuracy.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Category Filter */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Filter className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">FILTER BY CATEGORY</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-sm font-bold text-lg tracking-wide transition-all duration-300 border-2 ${
                activeCategory === 'all'
                  ? 'bg-orange-600 text-white border-orange-600'
                  : 'bg-white text-gray-800 border-gray-200 hover:border-orange-600'
              }`}
            >
              ALL SERVICES
            </button>

            {calibrationData.map((category) => {
              const colors = colorMap[category.color];
              return (
                <button
                  key={category.categoryId}
                  onClick={() => setActiveCategory(category.categoryId)}
                  className={`px-6 py-3 rounded-sm font-bold text-lg tracking-wide transition-all duration-300 border-2 flex items-center gap-2 ${
                    activeCategory === category.categoryId
                      ? `${colors.button} text-white border-${category.color}-600`
                      : `bg-white text-gray-800 border-gray-200 hover:border-${category.color}-600`
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  {category.category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-12">
          <p className="text-lg text-gray-600 font-semibold">
            Showing <span className="text-orange-600 font-black">{filteredItems.length}</span> calibration items
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {filteredItems.map((item, index) => {
            const colors = colorMap[item.color];
            return (
              <div
                key={index}
                className={`relative bg-white border-2 ${colors.border} rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer`}
              >
                {/* Gradient Overlay Background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 ${colors.bg} transition-opacity duration-500 pointer-events-none`}></div>

                {/* Product Image Container */}
                <div className={`relative w-full h-64 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 border-b-3 ${colors.border}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Certified Badge */}
                  <div className={`absolute top-4 right-4 ${colors.button} text-white px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    ✓ Certified
                  </div>

                  {/* Category Icon Badge */}
                  <div className={`absolute bottom-4 left-4 w-14 h-14 ${colors.bg} border-2 ${colors.border} rounded-lg flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    {item.icon}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7 flex flex-col h-full relative z-10">
                  {/* Category Tag */}
                  <div className="mb-5 flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${colors.border.replace('border-', 'bg-')}`}></div>
                    <span className={`${colors.text} text-xs font-black uppercase tracking-widest`}>
                      {item.categoryId.replace(/([A-Z])/g, ' $1')}
                    </span>
                  </div>

                  {/* Title with Enhanced Typography */}
                  <h3 className="text-lg font-black text-gray-900 mb-5 line-clamp-2 leading-tight tracking-tight group-hover:text-orange-600 transition-colors duration-300">
                    {item.name}
                  </h3>

                  {/* Premium Divider */}
                  <div className={`h-1 w-12 ${colors.button} rounded-full mb-5`}></div>

                  {/* Features with Icons */}
                  <div className="space-y-3 mb-7 flex-grow">
                    <div className="flex items-start gap-3">
                      <span className={`w-1 h-1 rounded-full ${colors.button} mt-2 flex-shrink-0`}></span>
                      <span className="text-sm text-gray-700 font-medium">ISO/IEC 17025:2005</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className={`w-1 h-1 rounded-full ${colors.button} mt-2 flex-shrink-0`}></span>
                      <span className="text-sm text-gray-700 font-medium">Expert Team</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className={`w-1 h-1 rounded-full ${colors.button} mt-2 flex-shrink-0`}></span>
                      <span className="text-sm text-gray-700 font-medium">Fast Service</span>
                    </div>
                  </div>

                  {/* CTA Button with Enhanced Styling */}
                  <button className={`w-full ${colors.button} text-white font-black py-4 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-xl transform group-hover:scale-105 text-sm tracking-wider uppercase`}>
                    <span>Inquire</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </button>

                  {/* Bottom Accent Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${colors.button} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Category Overview Section */}
        <div className="border-t-2 border-gray-200 pt-16 mb-20">
          <h2 className="text-4xl font-black text-gray-900 mb-12 tracking-tight">SERVICE CATEGORIES</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {calibrationData.map((category) => {
              const colors = colorMap[category.color];
              return (
                <div
                  key={category.categoryId}
                  className={`bg-white border-2 ${colors.border} rounded-sm p-8 transition-all duration-300 hover:shadow-lg group`}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`text-5xl p-4 rounded-sm ${colors.bg}`}>
                      {category.icon}
                    </div>
                    <div>
                      <div className={`text-4xl font-black ${colors.text}`}>
                        {category.items.length}
                      </div>
                      <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">Items</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className={`h-0.5 ${colors.bg} mb-6`}></div>
                  
                  {/* Content */}
                  <h3 className={`text-xl font-black ${colors.text} mb-3 tracking-tight`}>
                    {category.category}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                    {category.description}
                  </p>

                  {/* Button */}
                  <button className={`w-full ${colors.button} text-white font-bold py-3 px-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn`}>
                    <span>EXPLORE</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border-2 border-gray-200 p-10 rounded-sm text-center group hover:shadow-lg transition-all duration-300">
            <div className="text-5xl font-black text-orange-600 mb-4">
              {allItems.length}+
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">
              Equipment Types
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Comprehensive range of instruments and equipment covering all industrial sectors
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-10 rounded-sm text-center group hover:shadow-lg transition-all duration-300">
            <div className="text-5xl font-black text-orange-600 mb-4">
              5
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">
              Service Categories
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Specialized expertise in all measurement types and calibration standards
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-10 rounded-sm text-center group hover:shadow-lg transition-all duration-300">
            <div className="text-3xl font-black text-orange-600 mb-4">
              ISO/IEC<br />17025:2005
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">
              Internationally Certified
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              All services meet international accreditation and quality standards
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white p-16 rounded-sm text-center">
          <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            READY TO CALIBRATE?
          </h3>
          <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Contact us today to discuss your calibration requirements and get a professional quote from our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-4 bg-orange-600 text-white font-bold rounded-sm hover:bg-orange-700 transition-colors duration-300 text-lg tracking-wide flex items-center justify-center gap-2 group/btn">
              <span>SEND ENQUIRY</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
            <button className="px-12 py-4 border-2 border-white text-white font-bold rounded-sm hover:bg-white hover:text-gray-900 transition-colors duration-300 text-lg tracking-wide flex items-center justify-center gap-2 group/btn">
              <span>CONTACT US</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalibrationServices;