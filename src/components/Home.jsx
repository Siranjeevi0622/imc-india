import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Zap, Factory, Droplets, Wind, Leaf, Wrench } from 'lucide-react';
import Factory_img from '../assets/factory_img.jpg';
// import industrial_img from '../assets/industrial_img.jpg';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  // const calibrationServices = [
  //   {
  //     title: 'Mechanical Pressure Calibration',
  //     items: ['Pressure Gauges', 'Pressure Calibrators'],
  //     link: '/calibration',
  //   },
  //   {
  //     title: 'Temperature Calibration',
  //     items: ['Temperature Calibrators', 'Temperature Sensors'],
  //     link: '/calibration',
  //   },
  //   {
  //     title: 'Mechanical Mass Calibration',
  //     items: ['Weighing Machine', 'Weights/Weight Box'],
  //     link: '/calibration',
  //   },
  //   {
  //     title: 'NDT Instruments Calibration',
  //     items: ['UT machine', 'UTG machine'],
  //     link: '/calibration',
  //   },
  //   {
  //     title: 'Mechanical - Linear Calibration',
  //     items: ['Vernier Caliper', 'Micrometer'],
  //     link: '/calibration',
  //   },
  // ];

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
    <main className="min-h-screen bg-white">
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
              <span className="text-orange-400">MEASUREMENT</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-light mb-10 drop-shadow-md leading-relaxed">
              Trusted calibration services for industrial excellence across multiple sectors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/calibration"
                className="px-8 py-3 bg-orange-600 text-white font-bold rounded-sm hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
              >
                EXPLORE SERVICES
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-sm hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>

        {/* Accent Line Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      </section>

      {/* Welcome Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-16 tracking-tight"
            data-aos="fade-down"
          >
            INDUSTRIAL<br />
            <span className="text-orange-600">METROLOGY</span><br />
            CENTRE
          </h1>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Image */}
            <div data-aos="fade-right" className="lg:col-span-1">
              <div className="overflow-hidden rounded-sm shadow-lg">
                <img
                  src={Factory_img}
                  alt="Industrial Metrology Centre"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content */}
            <div data-aos="fade-left" className="lg:col-span-2 space-y-8">
              <p className="text-xl text-gray-800 leading-relaxed text-justify font-light">
                <span className="font-bold text-gray-900 text-2xl block mb-4">
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
                className="inline-flex items-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-sm hover:bg-orange-700 transition-colors duration-300 font-bold text-lg tracking-wide"
              >
                LEARN MORE
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Sectors Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 tracking-tight"
            data-aos="fade-down"
          >
            OUR <span className="text-orange-600">SECTORS</span>
          </h2>

          <p
            className="text-xl text-gray-700 font-semibold mb-16"
            data-aos="fade-up"
          >
            IMC provide Calibration services to the following sectors
          </p>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Sectors List */}
            <div data-aos="fade-right" className="lg:col-span-1">
              <ul className="space-y-0 border-l-4 border-orange-600">
                {sectors.map((sector, index) => {
                  const IconComponent = sector.icon;
                  return (
                    <li
                      key={sector.name}
                      className="flex items-center gap-4 px-6 py-4 border-b border-gray-300 hover:bg-white transition-colors duration-300 cursor-pointer group"
                      data-aos="fade-up"
                      data-aos-delay={index * 80}
                    >
                      <div className="p-3 rounded-sm bg-orange-600 text-white flex-shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-gray-800 font-semibold text-lg group-hover:text-orange-600 transition-colors">
                        {sector.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Image */}
            {/* <div data-aos="zoom-in" className="lg:col-span-1">
              <div className="overflow-hidden rounded-sm shadow-lg">
                <img
                  src={industrial_img}
                  alt="Industrial Plant"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div> */}

            {/* Calibration Services Sidebar */}
            {/* <div data-aos="fade-left" className="lg:col-span-1 bg-white p-8 rounded-sm shadow-md border-t-4 border-orange-600">
              <h3 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">
                CALIBRATION<br />SERVICES
              </h3>

              <div className="space-y-8">
                {calibrationServices.map((service, index) => (
                  <div
                    key={service.title}
                    className="group cursor-pointer pb-8 border-b border-gray-200 last:border-0 last:pb-0"
                    data-aos="fade-up"
                    data-aos-delay={index * 120}
                  >
                    <h4 className="text-lg font-bold text-orange-600 mb-3 group-hover:text-orange-700 transition-colors">
                      {service.title}
                    </h4>
                    <ul className="space-y-2 mb-4">
                      {service.items.map((item) => (
                        <li key={item} className="text-gray-700 text-sm flex items-start gap-2">
                          <span className="text-orange-600 font-bold mt-0.5">◆</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.link}
                      className="text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors inline-flex items-center gap-1"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white mb-0">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h3 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
            NEED CALIBRATION<br />SERVICES?
          </h3>
          <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed">
            Contact us today to learn how IMC can help your organization maintain precision and accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/enquiry"
              className="px-10 py-4 bg-orange-600 text-white font-bold rounded-sm hover:bg-orange-700 transition-colors duration-300 text-lg tracking-wide"
            >
              SEND ENQUIRY
            </Link>
            <Link
              to="/contact"
              className="px-10 py-4 border-2 border-white text-white font-bold rounded-sm hover:bg-white hover:text-gray-900 transition-colors duration-300 text-lg tracking-wide"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;