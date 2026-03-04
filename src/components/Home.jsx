import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Zap, Factory, Droplets, Wind, Leaf, Wrench } from 'lucide-react';
import Factory_img from '../assets/factory_img.jpg';


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
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Welcome Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-600 mb-12"
            data-aos="fade-down"
          >
            WELCOME TO IMC
          </h1>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Image */}
            <div data-aos="fade-right" className="lg:col-span-1">
              <img
                src={Factory_img}
                alt="Industrial Metrology Centre"
                className="rounded-lg shadow-xl w-full h-64 md:h-80 object-cover hover:shadow-2xl transition-shadow duration-300"
              />
            </div>

            {/* Content */}
            <div data-aos="fade-left" className="lg:col-span-2 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                <span className="font-bold text-gray-900">
                  Industrial Metrology Centre (IMC)
                </span>{' '}
                provides the calibration requirements of various kinds of organizations. The
                Laboratory is equipped with elite Calibration equipments both Primary and
                Working / Transfer standards. The Calibration uncertainty of these Master
                Equipments is traceable to National Physical Laboratory (India) & other National
                recognized accredited laboratories.{' '}
                <span className="font-bold text-gray-900">IMC</span> is maintaining quality
                management system as per ISO/IEC 17025:2005.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 font-semibold group"
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Sectors Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-orange-600 mb-4"
            data-aos="fade-down"
          >
            OUR SECTORS
          </h2>

          <p
            className="text-xl text-blue-600 font-semibold mb-12"
            data-aos="fade-up"
          >
            IMC provide Calibration services to the following sectors
          </p>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Sectors List */}
            <div data-aos="fade-right" className="lg:col-span-1">
              <ul className="space-y-3">
                {sectors.map((sector, index) => {
                  const IconComponent = sector.icon;
                  return (
                    <li
                      key={sector.name}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer group"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white group-hover:shadow-lg transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors">
                        {sector.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Image */}
            <div data-aos="zoom-in" className="lg:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=500&fit=crop"
                alt="Industrial Plant"
                className="rounded-lg shadow-xl w-full h-96 object-cover hover:shadow-2xl transition-shadow duration-300"
              />
            </div>

            {/* Calibration Services Sidebar */}
            <div data-aos="fade-left" className="lg:col-span-1 border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">
                CALIBRATION SERVICES
              </h3>

              <div className="space-y-6">
                {calibrationServices.map((service, index) => (
                  <div
                    key={service.title}
                    className="group cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                  >
                    <h4 className="text-lg font-bold text-blue-600 mb-2 group-hover:text-cyan-500 transition-colors">
                      {service.title}
                    </h4>
                    <ul className="space-y-1 mb-2">
                      {service.items.map((item) => (
                        <li key={item} className="text-gray-700 text-sm flex items-start gap-2">
                          <span className="text-blue-600 font-bold mt-1">■</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.link}
                      className="text-sm text-gray-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1 group"
                    >
                      Readmore...
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Calibration Services?
          </h3>
          <p className="text-lg text-blue-100 mb-8">
            Contact us today to learn how IMC can help your organization maintain precision and accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/enquiry"
              className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Send Enquiry
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;