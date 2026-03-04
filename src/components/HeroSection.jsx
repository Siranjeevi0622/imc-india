// components/HeroSection.js
import React from 'react';
import { ArrowRight, Award, Shield, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
            <span className="text-sm font-medium text-blue-600">ISO 17025 Accredited</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Welcome to
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              IMC
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Precision calibration services with unmatched accuracy and reliability. 
            Your trusted partner in industrial metrology since 1995.
          </p>

          {/* Flash Player Message */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-2 rounded-lg">
                <Shield className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-amber-800 font-medium">Update Required</p>
                <p className="text-amber-600 text-sm">
                  El contenido de esta página requiere una versión más reciente de Adobe Flash Player.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-4">
            {[
              { icon: Award, label: 'Accredited', value: 'ISO 17025' },
              { icon: Clock, label: 'Experience', value: '25+ Years' },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-3 rounded-xl">
                  <stat.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image - Modern Abstract */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-3xl opacity-20"></div>
          <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
            <img 
              src="/api/placeholder/600/400" 
              alt="Modern Metrology Lab"
              className="rounded-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Accuracy: ±0.001%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;