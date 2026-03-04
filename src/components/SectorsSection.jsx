// components/SectorsSection.js
import React from 'react';
import { Building2, Factory, Microscope, ChevronRight } from 'lucide-react';

const SectorsSection = () => {
  const sectors = [
    { name: 'Aerospace', icon: Building2, color: 'from-blue-500 to-blue-600' },
    { name: 'Automotive', icon: Factory, color: 'from-cyan-500 to-cyan-600' },
    { name: 'Medical', icon: Microscope, color: 'from-emerald-500 to-emerald-600' },
    { name: 'Manufacturing', icon: Factory, color: 'from-purple-500 to-purple-600' },
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">Our Sectors</h2>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
          IMC provide Calibration services to the following sectors
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {sectors.map((sector, idx) => (
          <div
            key={idx}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            <div className="p-6 text-center">
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${sector.color} text-white mb-4 shadow-lg`}>
                <sector.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-900">{sector.name}</h3>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-5 h-5 text-blue-600 mx-auto" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectorsSection;