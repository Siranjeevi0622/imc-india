import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Zap, Factory, Droplets, Wind, Leaf, Wrench } from 'lucide-react';
import Factory_img from '../assets/factory_img.jpg';
import img2 from '../assets/imc-t1.jpeg'
// import industrial_img from '../assets/industrial_img.jpg';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const calibrationServices = [
    {
      title: 'Mechanical Pressure Calibration',
      items: ['Pressure Gauges', 'Pressure Calibrators'],
      link: '/calibration',
    },
    {
      title: 'Temperature Calibration',
      items: ['Temperature Calibrators', 'Temperature Sensors'],
      link: '/calibration',
    },
    {
      title: 'Mechanical Mass Calibration',
      items: ['Weighing Machine', 'Weights/Weight Box'],
      link: '/calibration',
    },
    {
      title: 'NDT Instruments Calibration',
      items: ['UT machine', 'UTG machine'],
      link: '/calibration',
    },
    {
      title: 'Mechanical - Linear Calibration',
      items: ['Vernier Caliper', 'Micrometer'],
      link: '/calibration',
    },
  ];

  const sectors = [
    { name: 'Power Plant', icon: Zap },
    { name: 'Petrochemicals', icon: Droplets },
    { name: 'Refineries', icon: Factory },
    { name: 'Oil and gas', icon: Wind },
    { name: 'Cement Plants', icon: Wrench },
    { name: 'Steel Plants', icon: Factory },
    { name: 'Sugar Plants', icon: Leaf },
    { name: 'Bio - Tech Industries', icon: Leaf },
  ];

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#F3F4F6' }}>
      {/* Hero Banner Section */}
      <section className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden group">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 "
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.35) 100%), url(${Factory_img})`,
            backgroundAttachment: 'fixed'
          }}
        />

        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(#fff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Content */}
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
              PRECISION IN EVERY<br />
              <span style={{ color: '#7FB7B1' }}>MEASUREMENT</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-light mb-10 drop-shadow-md leading-relaxed">
              Trusted calibration services for industrial excellence across multiple sectors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/calibration"
                className="px-8 py-3 text-white font-bold rounded-sm hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
                style={{ backgroundColor: '#2F5E8F' }}
              >
                EXPLORE SERVICES
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border-2 text-white font-bold rounded-sm hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ borderColor: 'white', color: 'white' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#2F5E8F';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                }}
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>

        {/* Accent Line Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{
          backgroundImage: 'linear-gradient(90deg, transparent, #7FB7B1, transparent)'
        }} />
      </section>

      {/* Welcome Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b-2" style={{ backgroundColor: 'white', borderColor: '#E5E7EB' }}>
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-16 tracking-tight"
            data-aos="fade-down"
            style={{ color: '#1F2933' }}
          >
            INDUSTRIAL<br />
            <span style={{ color: '#2F5E8F' }}>METROLOGY</span><br />
            CENTRE
          </h1>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Image */}
            <div data-aos="fade-right" className="lg:col-span-1">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={img2}
                  alt="Industrial Metrology Centre"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content */}
            <div data-aos="fade-left" className="lg:col-span-2 space-y-8">
              <p className="text-xl leading-relaxed text-justify font-light" style={{ color: '#3F78A8' }}>
                <span className="font-bold text-2xl block mb-4" style={{ color: '#1F2933' }}>
                  Industrial Metrology Centre (IMC)
                </span>
                provides the calibration requirements of various kinds of organizations. The
                Laboratory is equipped with elite Calibration equipments both Primary and
                Working / Transfer standards. The Calibration uncertainty of these Master
                Equipments is traceable to National Physical Laboratory (India) & other National
                recognized accredited laboratories. IMC is maintaining quality management system 
                as per ISO/IEC 17025:2005.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-sm transition-opacity duration-300 font-bold text-lg tracking-wide hover:opacity-90"
                style={{ backgroundColor: '#2F5E8F' }}
              >
                LEARN MORE
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Sectors Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b-2" style={{ backgroundColor: '#F3F4F6', borderColor: '#E5E7EB' }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight"
            data-aos="fade-down"
            style={{ color: '#1F2933' }}
          >
            OUR <span style={{ color: '#2F5E8F' }}>SECTORS</span>
          </h2>

          <p
            className="text-xl font-semibold mb-16"
            data-aos="fade-up"
            style={{ color: '#3F78A8' }}
          >
            IMC provide Calibration services to the following sectors
          </p>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Sectors List */}
            <div data-aos="fade-right" className="lg:col-span-1">
              <ul className="space-y-0 border-l-4" style={{ borderColor: '#2F5E8F' }}>
                {sectors.map((sector, index) => {
                  const IconComponent = sector.icon;
                  return (
                    <li
                      key={sector.name}
                      className="flex items-center gap-4 px-6 py-4 border-b transition-colors duration-300 cursor-pointer group"
                      style={{ borderColor: '#E5E7EB' }}
                      data-aos="fade-up"
                      data-aos-delay={index * 80}
                    >
                      <div className="p-3 rounded-sm text-white shrink-0" style={{ backgroundColor: '#2F5E8F' }}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-lg transition-colors group-hover:opacity-70" style={{ color: '#3F78A8' }}>
                        {sector.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Calibration Services */}
            <div data-aos="fade-left" className="lg:col-span-2">
              <h3 className="text-2xl font-black mb-8 tracking-tight" style={{ color: '#1F2933' }}>
                CALIBRATION<br />SERVICES
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {calibrationServices.map((service, index) => (
                  <div
                    key={service.title}
                    className="group rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer p-6 border-l-4"
                    style={{ 
                      backgroundColor: 'white',
                      borderColor: '#2F5E8F'
                    }}
                    data-aos="fade-up"
                    data-aos-delay={index * 120}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 text-white rounded-md shrink-0 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#2F5E8F' }}>
                        <Zap className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold group-hover:opacity-80 transition-opacity" style={{ color: '#1F2933' }}>
                        {service.title}
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {service.items.map((item) => (
                        <li key={item} className="text-sm flex items-start gap-3" style={{ color: '#3F78A8' }}>
                          <span className="font-bold text-lg leading-none mt-0.5" style={{ color: '#7FB7B1' }}>●</span>
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  );
};

export default Home;