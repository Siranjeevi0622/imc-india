import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Zap, Factory, Droplets, Wind, Leaf, Wrench } from 'lucide-react';
import Factory_img from '../assets/factory_img.jpg';
import img2 from '../assets/imc-t1.jpeg';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
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
    { name: 'Oil and Gas', icon: Wind },
    { name: 'Cement Plants', icon: Wrench },
    { name: 'Steel Plants', icon: Factory },
    { name: 'Sugar Plants', icon: Leaf },
    { name: 'Bio-Tech Industries', icon: Leaf },
  ];

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#F3F4F6' }}>

      {/* ── Hero Section ── */}
      <section className="relative w-full" style={{ minHeight: 'clamp(320px, 55vw, 600px)' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.35) 100%), url(${Factory_img})`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(90deg,#fff 1px,transparent 1px),linear-gradient(#fff 1px,transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center max-w-4xl w-full" data-aos="fade-up">
            <h1
              className="font-black text-white mb-4 sm:mb-6 tracking-tight drop-shadow-lg leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 6vw, 4.5rem)' }}
            >
              PRECISION IN EVERY<br />
              <span style={{ color: '#7FB7B1' }}>MEASUREMENT</span>
            </h1>
            <p
              className="text-gray-200 font-light mb-8 sm:mb-10 drop-shadow-md leading-relaxed"
              style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)' }}
            >
              Trusted calibration services for industrial excellence across multiple sectors
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link
                to="/calibration"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 text-white font-bold rounded-sm hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                style={{ backgroundColor: '#2F5E8F' }}
              >
                EXPLORE SERVICES
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 text-white font-bold rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base text-center"
                style={{ borderColor: 'white' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#2F5E8F';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'white';
                }}
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ backgroundImage: 'linear-gradient(90deg,transparent,#7FB7B1,transparent)' }}
        />
      </section>

      {/* ── Welcome / About Section ── */}
      <section
        className="py-10 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b-2"
        style={{ backgroundColor: 'white', borderColor: '#E5E7EB' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div data-aos="fade-right" className="lg:col-span-1">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={img2}
                  alt="Industrial Metrology Centre"
                  className="w-full object-cover hover:scale-105 transition-transform duration-500"
                  style={{ height: 'clamp(200px, 40vw, 384px)' }}
                />
              </div>
            </div>
            <div data-aos="fade-left" className="lg:col-span-2 space-y-4 sm:space-y-8">
              <p
                className="leading-relaxed text-justify font-light"
                style={{ color: '#000000', fontSize: 'clamp(0.9rem, 2vw, 1.25rem)' }}
              >
                <span
                  className="font-bold block mb-2 sm:mb-4"
                  style={{ color: '#1F2933', fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}
                >
                  Industrial Metrology Centre (IMC)
                </span>
                Provides the calibration requirements of various kinds of organizations. The
                Laboratory is equipped with elite Calibration equipments both Primary and
                Working / Transfer standards. The Calibration uncertainty of these Master
                Equipments is traceable to National Physical Laboratory (India) & other National
                recognized accredited laboratories. IMC is maintaining quality management system
                as per ISO/IEC 17025:2005.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 sm:gap-3 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-sm transition-opacity duration-300 font-bold tracking-wide hover:opacity-90 text-sm sm:text-base"
                style={{ backgroundColor: '#2F5E8F' }}
              >
                LEARN MORE
                <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sectors + Calibration Services Section ── */}
      <section
        className="py-10 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b-2"
        style={{ backgroundColor: '#F3F4F6', borderColor: '#E5E7EB' }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-black mb-2 sm:mb-4 tracking-tight leading-tight"
            data-aos="fade-down"
            style={{ color: '#1F2933', fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
          >
            OUR <span style={{ color: '#2F5E8F' }}>SECTORS</span>
          </h2>
          <p
            className="font-semibold mb-8 sm:mb-16"
            data-aos="fade-up"
            style={{ color: '#000000', fontSize: 'clamp(0.875rem, 2vw, 1.25rem)' }}
          >
            IMC provide Calibration services to the following sectors
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-start">
            <div data-aos="fade-right" className="lg:col-span-1">
              <div className="flex flex-wrap gap-2 lg:hidden mb-2">
                {sectors.map((sector, index) => {
                  const IconComponent = sector.icon;
                  return (
                    <div
                      key={sector.name}
                      className="flex items-center gap-2 px-3 py-2 rounded-sm text-xs sm:text-sm font-semibold"
                      style={{ backgroundColor: 'white', color: '#3F78A8', border: '1.5px solid #2F5E8F' }}
                      data-aos="fade-up"
                      data-aos-delay={index * 60}
                    >
                      <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: '#2F5E8F' }} />
                      {sector.name}
                    </div>
                  );
                })}
              </div>
              <ul className="hidden lg:block space-y-0 border-l-4" style={{ borderColor: '#2F5E8F' }}>
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
                      <span
                        className="font-semibold text-lg transition-colors group-hover:opacity-70"
                        style={{ color: '#000000' }}
                      >
                        {sector.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div data-aos="fade-left" className="lg:col-span-2">
              <h3
                className="font-black mb-5 sm:mb-8 tracking-tight leading-tight"
                style={{ color: '#1F2933', fontSize: 'clamp(1.1rem, 3vw, 1.75rem)' }}
              >
                CALIBRATION SERVICES
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                {calibrationServices.map((service, index) => (
                  <Link
                    to={service.link}
                    key={service.title}
                    className="group rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 p-4 sm:p-6 border-l-4 block"
                    style={{ backgroundColor: 'white', borderColor: '#2F5E8F' }}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex items-start gap-3 mb-2 sm:mb-4">
                      <div
                        className="p-2 text-white rounded-md shrink-0 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: '#2F5E8F' }}
                      >
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <h4
                        className="font-bold group-hover:opacity-80 transition-opacity text-sm sm:text-base"
                        style={{ color: '#000000' }}
                      >
                        {service.title}
                      </h4>
                    </div>
                    <ul className="space-y-1 sm:space-y-2">
                      {service.items.map((item) => (
                        <li key={item} className="text-xs sm:text-sm flex items-start gap-2 sm:gap-3" style={{ color: '#000000' }}>
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTS (Call to Service) Section ── */}
     <div className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F3F4F6' }}>
  <div className="max-w-7xl mx-auto">
    <div
      className="rounded-2xl p-6 sm:p-10 border"
      style={{ backgroundColor: 'white', borderColor: '#E5E7EB' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

        {/* Left: Text Content */}
        <div>
          <p
            className="font-bold uppercase tracking-widest mb-2 sm:mb-3"
            style={{ color: '#2F5E8F', fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)' }}
          >
            Ready to Work With Us?
          </p>
          <h2
            className="font-black mb-3 sm:mb-4 tracking-tight leading-tight"
            style={{ color: '#1F2933', fontSize: 'clamp(1.4rem, 4vw, 2.8rem)' }}
          >
            GET YOUR INSTRUMENTS<br />
            <span style={{ color: '#2F5E8F' }}>CALIBRATED TODAY</span>
          </h2>
          <p
            className="font-light leading-relaxed mb-6 sm:mb-8"
            style={{ color: '#111827', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
          >
            IMC delivers precise, traceable calibration services backed by ISO/IEC 17025
            standards. Our experts are ready to support your industry with fast turnaround
            and reliable results.
          </p>

          <div className="flex flex-wrap gap-6 sm:gap-10">
            {[
              { value: '500+', label: 'Instruments Calibrated' },
              { value: '8+', label: 'Industry Sectors' },
              { value: 'ISO', label: '17025 Certified' },
            ].map((stat, i) => (
              <div key={i} className="border-l-4 pl-4" style={{ borderColor: '#2F5E8F' }}>
                <p className="font-black leading-none" style={{ color: '#2F5E8F', fontSize: 'clamp(1.3rem, 3.5vw, 2rem)' }}>
                  {stat.value}
                </p>
                <p className="font-semibold mt-1" style={{ color: '#1F2933', fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Action Card */}
        <div>
          <div
            className="rounded-2xl p-5 sm:p-7 border-t-4"
            style={{ backgroundColor: '#F3F4F6', borderColor: '#2F5E8F' }}
          >
            <h3
              className="font-black mb-1 tracking-tight"
              style={{ color: '#1F2933', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)' }}
            >
              REQUEST A CALIBRATION
            </h3>
            <p
              className="font-light mb-4 sm:mb-5"
              style={{ color: '#111827', fontSize: 'clamp(0.8rem, 1.8vw, 1rem)' }}
            >
              Tell us what you need — our team will get back to you promptly.
            </p>

            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {[
                'Traceable to National Physical Laboratory (India)',
                'ISO/IEC 17025:2005 Quality Management System',
                'Primary & Working / Transfer Standards',
                'Fast turnaround with detailed calibration reports',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-xs sm:text-sm font-medium" style={{ color: '#1F2933' }}>
                  <span className="font-bold text-base leading-none mt-0.5 shrink-0" style={{ color: '#2F5E8F' }}>●</span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/enquiry"
                className="w-full sm:w-auto flex-1 px-6 py-3 text-white font-bold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                style={{ backgroundColor: '#2F5E8F' }}
              >
                CONTACT US
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                to="/calibration"
                className="w-full sm:w-auto flex-1 px-6 py-3 border-2 font-bold rounded-xl transition-all duration-300 text-sm sm:text-base text-center inline-flex items-center justify-center"
                style={{ borderColor: '#2F5E8F', color: '#2F5E8F' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#2F5E8F'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#2F5E8F'; }}
              >
                VIEW SERVICES
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

    </main>
  );
};

export default Home;