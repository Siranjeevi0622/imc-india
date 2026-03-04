// App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SectorsSection from './components/SectorsSection';
import CalibrationServices from './components/CalibrationServices';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <SectorsSection />
        <CalibrationServices />
      </main>
      <Footer />
    </div>
  );
}

export default App;