import React, { useState } from 'react';
import { Filter, ArrowRight, Check, X } from 'lucide-react';
import Banner from './Banner';
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
import pressure1 from '../assets/pressure1.jpg'
import pressure2 from '../assets/pressure2.jpg'
import pressure3 from '../assets/pressure3.jpg'
import pressure4 from '../assets/pressure4.jpg'
import pressure5 from '../assets/pressure5.jpg'
import scale1 from '../assets/scale1.jpeg'
import scale2 from '../assets/scale2.jpeg'
import scale3 from '../assets/scale3.jpeg'
import scale4 from '../assets/scale4.jpeg'
import scale5 from '../assets/scale5.jpeg'
import weight1 from '../assets/weight1.jpg'
import weight2 from '../assets/weight2.jpg'
import ut1 from '../assets/ut1.jpg'
import ut2 from '../assets/ut2.jpg'
import ut3 from '../assets/ut3.jpg'
import ut4 from '../assets/ut4.jpg'

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
      color: '#2F5E8F',
      description: 'Precision temperature measurement and calibration services',
    },
    {
      id: 2,
      category: 'Mechanical - Pressure Calibration',
      categoryId: 'pressure',
      items: [
        { name: 'Pressure, Vacuum, Compound Gauges', image: pressure1 },
        { name: 'Pressure Calibrators', image: pressure2 },
        { name: 'Pressure Switches', image: pressure3 },
        { name: 'Pressure Transmitter, Pressure Transducer', image: pressure4 },
        { name: 'Pressure Recorder (Analog/Digital)', image: pressure5 },
      ],
      color: '#3F78A8',
      description: 'Comprehensive pressure and vacuum measurement calibration',
    },
    {
      id: 3,
      category: 'Mechanical - Dimensional Calibration',
      categoryId: 'dimensional',
      items: [
        { name: 'Measuring Scale', image: scale1 },
        { name: 'Measuring Tape', image: scale2 },
        { name: 'Vernier Caliper', image: scale3 },
        { name: 'Micrometer (External/Internal/Depth)', image: scale4 },
        { name: 'Dial Gauge (Plunger/Lever/Bore)', image: scale5 },
      ],
      color: '#7FB7B1',
      description: 'Accurate dimensional and linear measurement calibration',
    },
    {
      id: 4,
      category: 'Mechanical - Mass Calibration',
      categoryId: 'mass',
      items: [
        { name: 'Weighing Machine', image: weight1 },
        { name: 'Weights/Weight Box', image: weight2 },
      ],
      color: '#2F5E8F',
      description: 'Precision mass and weight calibration services',
    },
    {
      id: 5,
      category: 'NDT Instruments Calibration',
      categoryId: 'ndt',
      items: [
        { name: 'UT Machine', image: ut1 },
        { name: 'UTG Machine', image: ut2 },
        { name: 'MPI Yoke', image: ut3 },
        { name: 'Hardness Tester', image: ut4 },
      ],
      color: '#3F78A8',
      description: 'Non-destructive testing equipment calibration',
    },
  ];

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
    <div style={{ backgroundColor: '#F3F4F6' }}>
      {/* Banner — overlay now lives inside Banner.jsx */}
      <Banner
        type="calibration"
        title="CALIBRATION SERVICES"
      />

      {/* Main Content - Two Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">

          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1">

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden w-full mb-4 px-5 py-3 text-white font-bold rounded-xl flex items-center justify-between text-sm"
              style={{ backgroundColor: '#2F5E8F' }}
            >
              <span className="flex items-center gap-2">
                <Filter className="w-4 h-4 sm:w-5 sm:h-5" /> Filters
              </span>
              <X className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${mobileFilterOpen ? '' :'rotate-45' }`} />
            </button>

            {/* Filter Panel */}
            <div
              className={`rounded-2xl border p-4 sm:p-6 shadow-sm lg:sticky lg:top-20 ${!mobileFilterOpen && 'hidden lg:block'}`}
              style={{ backgroundColor: 'white', borderColor: '#E5E7EB' }}
            >
              {/* Filter Header */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 rounded-xl" style={{ backgroundColor: '#F0F4F8' }}>
                  <Filter className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#2F5E8F' }} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black" style={{ color: '#1F2933' }}>CATEGORIES</h3>
                  <p className="text-xs font-medium" style={{ color: '#9CA3AF' }}>{filteredItems.length} items</p>
                </div>
              </div>

              {/* All Services Button */}
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setMobileFilterOpen(false);
                }}
                className={`w-full mb-3 sm:mb-4 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl font-bold tracking-wide transition-all duration-300 text-sm sm:text-base ${
                  activeCategory === 'all' ? 'text-white shadow-lg' : 'text-gray-700'
                }`}
                style={{
                  backgroundColor: activeCategory === 'all' ? '#2F5E8F' : '#F3F4F6',
                  color: activeCategory === 'all' ? 'white' : '#1F2933',
                }}
              >
                All Services
              </button>

              {/* Category Divider */}
              <div className="h-px mb-3 sm:mb-4" style={{ backgroundColor: '#E5E7EB' }}></div>

              {/* Category Buttons */}
              <div className="space-y-2 sm:space-y-2.5">
                {calibrationData.map((category) => {
                  const isActive = activeCategory === category.categoryId;
                  return (
                    <button
                      key={category.categoryId}
                      onClick={() => {
                        setActiveCategory(category.categoryId);
                        setMobileFilterOpen(false);
                      }}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 sm:gap-3 text-left ${
                        isActive ? 'text-white shadow-md' : 'text-gray-700'
                      }`}
                      style={{
                        backgroundColor: isActive ? category.color : '#F9FAFB',
                        border: isActive ? 'none' : '1px solid #E5E7EB',
                        color: isActive ? 'white' : '#1F2933',
                      }}
                    >
                      <span className="text-base">{category.icon}</span>
                      <span className="text-xs sm:text-sm leading-snug flex-1">{category.category}</span>
                    </button>
                  );
                })}
              </div>

              {/* Stats Card */}
              <div
                className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-xl border"
                style={{ backgroundColor: '#F0F4F8', borderColor: '#E0E9F5' }}
              >
                <div className="text-3xl sm:text-4xl font-black mb-1 sm:mb-2" style={{ color: '#2F5E8F' }}>
                  {filteredItems.length}
                </div>
                <p className="text-sm font-semibold" style={{ color: '#1F2933' }}>Available Items</p>
                <p className="text-xs mt-1" style={{ color: '#6B7280' }}>in this category</p>
              </div>
            </div>
          </div>

          {/* Right Content - Products Grid */}
          <div className="lg:col-span-4">
            {/* Results Header */}
            <div className="mb-6 sm:mb-10">
              <h2
                className="font-black tracking-tight mb-2"
                style={{ color: '#1F2933', fontSize: 'clamp(1.3rem, 3vw, 1.875rem)' }}
              >
                {activeCategory === 'all'
                  ? 'All Calibration Services'
                  : calibrationData.find((c) => c.categoryId === activeCategory)?.category}
              </h2>
              <p className="font-medium text-sm" style={{ color: '#6B7280' }}>
                Showing{' '}
                <span className="font-black text-base" style={{ color: '#2F5E8F' }}>
                  {filteredItems.length}
                </span>{' '}
                items
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-20">
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full"
                  style={{ backgroundColor: 'white', borderColor: '#E5E7EB' }}
                >
                  {/* Image Container */}
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ height: 'clamp(100px, 18vw, 192px)', backgroundColor: '#F3F4F6' }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-3 sm:p-6 flex flex-col grow">
                    {/* Category Tag */}
                    <div className="mb-2 sm:mb-4 inline-flex items-center gap-1.5 sm:gap-2 w-fit">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span
                        className="font-black uppercase tracking-widest"
                        style={{ color: item.color, fontSize: 'clamp(0.6rem, 1.2vw, 0.75rem)' }}
                      >
                        {item.categoryId}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-black mb-2 sm:mb-4 line-clamp-2 leading-tight transition-colors duration-300"
                      style={{ color: '#1F2933', fontSize: 'clamp(0.75rem, 1.8vw, 1.125rem)' }}
                    >
                      {item.name}
                    </h3>

                    {/* Features with Dots — hidden on small mobile to keep cards compact */}
                    <div className="hidden sm:block space-y-2.5 mb-6 grow">
                      <div className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full shrink-0 mt-2" style={{ backgroundColor: item.color }}></div>
                        <span className="text-xs font-medium leading-snug" style={{ color: '#1F2933' }}>ISO/IEC 17025:2005 Certified</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full shrink-0 mt-2" style={{ backgroundColor: item.color }}></div>
                        <span className="text-xs font-medium leading-snug" style={{ color: '#1F2933' }}>NPL Traceable</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full shrink-0 mt-2" style={{ backgroundColor: item.color }}></div>
                        <span className="text-xs font-medium leading-snug" style={{ color: '#1F2933' }}>Expert Support</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent Border */}
                  <div
                    className="h-1.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ backgroundColor: item.color }}
                  ></div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <div className="text-center py-20">
                <p className="text-lg font-medium" style={{ color: '#6B7280' }}>No items found in this category</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div
            className="p-6 sm:p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
            style={{ backgroundColor: '#F0F4F8', border: '1px solid #E0E9F5' }}
          >
            <div className="text-4xl sm:text-5xl font-black mb-2 sm:mb-3" style={{ color: '#2F5E8F' }}>
              {allItems.length}+
            </div>
            <h3 className="text-base sm:text-lg font-black mb-1 sm:mb-2 tracking-tight" style={{ color: '#1F2933' }}>
              Equipment Types
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#3F78A8' }}>
              Complete range covering all industrial measurement needs
            </p>
          </div>

          <div
            className="p-6 sm:p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
            style={{ backgroundColor: '#F0F7FF', border: '1px solid #E0EFFF' }}
          >
            <div className="text-4xl sm:text-5xl font-black mb-2 sm:mb-3" style={{ color: '#3F78A8' }}>
              5+
            </div>
            <h3 className="text-base sm:text-lg font-black mb-1 sm:mb-2 tracking-tight" style={{ color: '#1F2933' }}>
              Categories
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#3F78A8' }}>
              Specialized expertise across all measurement types
            </p>
          </div>

          <div
            className="p-6 sm:p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
            style={{ backgroundColor: '#F0F9F7', border: '1px solid #E0F2ED' }}
          >
            <div
              className="font-black mb-2 sm:mb-3"
              style={{ color: '#7FB7B1', fontSize: 'clamp(1.2rem, 3vw, 1.875rem)' }}
            >
              ISO/IEC 17025
            </div>
            <h3 className="text-base sm:text-lg font-black mb-1 sm:mb-2 tracking-tight" style={{ color: '#1F2933' }}>
              Certified
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#3F78A8' }}>
              International accreditation standards
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalibrationServices;