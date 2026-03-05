import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';

const CalibrationServices = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const calibrationData = [
    {
      id: 1,
      category: 'Temperature Calibration',
      categoryId: 'temperature',
      items: [
        'Temperature Controller / Indicator',
        'Temperature Sensor (RTD, Thermocouple)',
        'Temperature Transmitter',
        'Temperature Calibrator (liquid & dry block)',
        'Temperature Recorder (Analog/Digital)',
        'Thermo Switch / Thermostat',
        'Thermometer (Glass/Digital)',
        'Hot Air Oven',
        'Muffle Furnace',
        'Deep Freezer',
        'Water Bath',
        'Incubator',
        'Refrigerator',
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
        'Pressure, Vacuum, Compound Gauges',
        'Pressure Calibrators',
        'Pressure Switches',
        'Pressure Transmitter, Pressure Transducer',
        'Pressure Recorder (Analog/Digital)',
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
        'Measuring Scale',
        'Measuring Tape',
        'Vernier Caliper',
        'Micrometer (External/Internal/Depth)',
        'Dial Gauge (Plunger/Lever/Bore)',
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
        'Weighing Machine',
        'Weights/Weight Box',
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
        'UT Machine',
        'UTG Machine',
        'MPI Yoke',
        'Hardness Tester',
      ],
      icon: '🔍',
      color: 'red',
      description: 'Non-destructive testing equipment calibration',
    },
  ];

  const colorMap = {
    orange: { bg: 'bg-orange-50', border: 'border-orange-600', text: 'text-orange-600', button: 'bg-orange-600 hover:bg-orange-700' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-600', text: 'text-blue-600', button: 'bg-blue-600 hover:bg-blue-700' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-600', text: 'text-purple-600', button: 'bg-purple-600 hover:bg-purple-700' },
    green: { bg: 'bg-green-50', border: 'border-green-600', text: 'text-green-600', button: 'bg-green-600 hover:bg-green-700' },
    red: { bg: 'bg-red-50', border: 'border-red-600', text: 'text-red-600', button: 'bg-red-600 hover:bg-red-700' },
  };

  const allItems = calibrationData.flatMap((cat) =>
    cat.items.map((item) => ({
      name: item,
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
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-6 h-6 text-orange-600 font-bold" />
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
                      : `bg-white text-gray-800 border-gray-200 hover:border-orange-600`
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
        <div className="mb-8">
          <p className="text-lg text-gray-600 font-semibold">
            Showing <span className="text-orange-600 font-black">{filteredItems.length}</span> calibration items
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item, index) => {
            const colors = colorMap[item.color];
            return (
              <div
                key={index}
                className={`border-2 ${colors.border} rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300 bg-white group cursor-pointer`}
              >
                {/* Card Header */}
                <div className={`${colors.bg} p-6 text-center border-b-2 ${colors.border}`}>
                  <div className="text-6xl mb-3">{item.icon}</div>
                  <p className={`text-sm font-semibold ${colors.text} uppercase tracking-wider`}>
                    {item.categoryId.replace(/([A-Z])/g, ' $1').toUpperCase()}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-3 min-h-16">
                    {item.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                    <span className={`inline-block w-2 h-2 rounded-full ${colors.bg}`}></span>
                    Certified Service
                  </div>

                  {/* Badge */}
                  <div className={`${colors.bg} ${colors.text} px-4 py-2 rounded-sm text-center font-semibold text-sm mb-4`}>
                    ISO/IEC 17025:2005
                  </div>

                  {/* Hover Button */}
                  <button className={`w-full ${colors.button} text-white font-bold py-2 rounded-sm transition-colors duration-300`}>
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Category Info Cards */}
        <div className="border-t-2 border-gray-200 pt-16 mb-16">
          <h2 className="text-3xl font-black text-gray-900 mb-12 tracking-tight">SERVICE CATEGORIES</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {calibrationData.map((category) => {
              const colors = colorMap[category.color];
              return (
                <div
                  key={category.categoryId}
                  className={`border-2 ${colors.border} rounded-sm p-8 hover:shadow-lg transition-all duration-300 group cursor-pointer`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`text-5xl p-4 rounded-sm ${colors.bg}`}>
                      {category.icon}
                    </div>
                    <div>
                      <div className={`text-3xl font-black ${colors.text}`}>
                        {category.items.length}
                      </div>
                      <p className="text-sm text-gray-600 font-semibold">ITEMS</p>
                    </div>
                  </div>
                  
                  <h3 className={`text-xl font-bold ${colors.text} mb-3`}>
                    {category.category}
                  </h3>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  <button className={`w-full ${colors.button} text-white font-bold py-2 rounded-sm transition-colors duration-300`}>
                    EXPLORE CATEGORY
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-sm text-center">
            <div className="text-5xl font-black text-orange-600 mb-3">
              {allItems.length}+
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Equipment Types
            </h3>
            <p className="text-gray-700">
              Comprehensive range of instruments and equipment
            </p>
          </div>

          <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-sm text-center">
            <div className="text-5xl font-black text-orange-600 mb-3">
              5
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Service Categories
            </h3>
            <p className="text-gray-700">
              Specialized expertise in all measurement types
            </p>
          </div>

          <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-sm text-center">
            <div className="text-3xl font-black text-orange-600 mb-3">
              ISO/IEC<br />17025:2005
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Certified
            </h3>
            <p className="text-gray-700">
              Internationally accredited services
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white p-12 rounded-sm text-center">
          <h3 className="text-4xl font-black mb-4 tracking-tight">
            READY TO CALIBRATE?
          </h3>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Contact us today to discuss your calibration requirements and get a professional quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-orange-600 text-white font-bold rounded-sm hover:bg-orange-700 transition-colors duration-300 text-lg tracking-wide">
              SEND ENQUIRY
            </button>
            <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-sm hover:bg-white hover:text-gray-900 transition-colors duration-300 text-lg tracking-wide">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalibrationServices;