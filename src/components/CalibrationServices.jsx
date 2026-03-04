// components/CalibrationServices.js
import React from 'react';
import { Gauge, Thermometer, Scale, ArrowRight } from 'lucide-react';

const CalibrationServices = () => {
  const services = [
    {
      title: 'Mechanical pressure Calibration',
      icon: Gauge,
      color: 'from-blue-500 to-cyan-500',
      items: ['Pressure Gauges', 'Pressure Calibrators'],
      image: '/api/placeholder/400/300',
    },
    {
      title: 'Temperature Calibration',
      icon: Thermometer,
      color: 'from-orange-500 to-red-500',
      items: ['Temperature Calibrators', 'Temperature Sensors'],
      image: '/api/placeholder/400/300',
    },
    {
      title: 'Mechanical Mass Calibration',
      icon: Scale,
      color: 'from-emerald-500 to-teal-500',
      items: ['Weighing Machine', 'Weights/Weight Box'],
      image: '/api/placeholder/400/300',
    },
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">Calibration Services</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`}></div>
              <img 
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Icon */}
              <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md p-3 rounded-xl">
                <service.icon className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              
              <ul className="space-y-3 mb-6">
                {service.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center text-slate-600">
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-3`}></span>
                    {item}
                  </li>
                ))}
              </ul>

              <button className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group/btn`}>
                Read more
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Decorative Corner */}
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-bl-[100px] transition-opacity`}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CalibrationServices;