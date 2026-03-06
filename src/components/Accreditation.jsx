import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Download, ExternalLink, CheckCircle2 } from 'lucide-react';
import CertificateImg from '../assets/imc-certificate-img.png';
import CertificatePDF from '../assets/imc-certificate.pdf';

const Accreditation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  // const handleDownloadPDF = () => {
  //   const link = document.createElement('a');
  //   link.href = CertificatePDF;
  //   link.download = 'IMC-NABL-Certificate.pdf';
  //   link.click();
  // };

  const handleViewPDF = () => {
    window.open(CertificatePDF, '_blank');
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Accreditation Info */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16" data-aos="fade-down">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight">
              <span className="text-orange-600">ACCREDITATION</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed max-w-3xl">
              M/s. Industrial Metrology Centre is Now Accredited as per ISO/IEC 17025:2005 by National Accreditation 
              Board for Testing and Calibration Laboratories (NABL) under the aegis of Department of Science & 
              Technology, Government of India
            </p>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-12 tracking-tight"
            data-aos="fade-down"
          >
            Accreditation <span className="text-orange-600">Scope</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'ELECTRO TECHNICAL',
                description: 'Electrical and Electronic calibration with full traceability to national standards',
              },
              {
                title: 'MECHANICAL',
                description: 'Precision mechanical instruments and equipment calibration services',
              },
              {
                title: 'THERMAL',
                description: 'Temperature and thermal measurement calibration with high accuracy',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-white border-t-4 border-orange-600 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight text-center"
            data-aos="fade-down"
          >
            NABL <span className="text-orange-600">Certificate</span>
          </h2>
          
          <p className="text-center text-lg text-gray-700 font-light mb-16 max-w-2xl mx-auto" data-aos="fade-up">
            Certificate of Accreditation for Electro Technical, Mechanical & Thermal Calibration Services
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Certificate Image - Smaller */}
            <div className="flex justify-center" data-aos="zoom-in">
              <div className="relative w-full max-w-sm">
                <div className="bg-white rounded-lg shadow-xl p-4 border-4 border-orange-300 hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <div className="relative overflow-hidden rounded">
                    <img
                      src={CertificateImg}
                      alt="NABL Certificate of Accreditation"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                      <button
                        onClick={handleViewPDF}
                        className="flex items-center gap-2 bg-white text-orange-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-lg"
                      >
                        <ExternalLink className="w-4 h-4" />
                        VIEW
                      </button>
                      <button
                        onClick={handleDownloadPDF}
                        className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-orange-700 transition-all duration-300 shadow-lg"
                      >
                        <Download className="w-4 h-4" />
                        DOWNLOAD
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate Details */}
            <div data-aos="fade-left">
              <h3 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">
                Certificate<br />
                <span className="text-orange-600">Details</span>
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-orange-600 bg-orange-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    ISO/IEC 17025:2005
                  </h4>
                  <p className="text-gray-700 font-light">
                    General requirements for the competence of testing and calibration laboratories
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 bg-orange-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    NABL Accreditation
                  </h4>
                  <p className="text-gray-700 font-light">
                    Recognition by National Accreditation Board under Department of Science & Technology, Government of India
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 bg-orange-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Measurement Traceability
                  </h4>
                  <p className="text-gray-700 font-light">
                    All calibration uncertainties traceable to National Physical Laboratory (India)
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-4 mt-8">
                <button
                  onClick={handleViewPDF}
                  className="inline-flex items-center justify-center gap-2 w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-all duration-300 font-bold"
                >
                  <ExternalLink className="w-5 h-5" />
                  VIEW CERTIFICATE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t-2 border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-16 text-center tracking-tight"
            data-aos="fade-down"
          >
            International <span className="text-orange-600">Standards</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '✓',
                title: 'Quality Management',
                items: ['ISO/IEC 17025:2005', 'Regular Audits', 'Continuous Improvement'],
              },
              {
                icon: '✓',
                title: 'Technical Excellence',
                items: ['Advanced Equipment', 'Trained Personnel', 'Measurement Traceability'],
              },
              {
                icon: '✓',
                title: 'Customer Focus',
                items: ['Timely Delivery', 'Transparent Reporting', 'Customer Support'],
              },
            ].map((section, index) => (
              <div
                key={section.title}
                className="bg-white border-t-4 border-orange-600 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-lg">●</span>
                      <span className="text-gray-700 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gray-900 mb-15 mx-40 text-white">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            Ready to Get <span className="text-orange-400">Certified?</span>
          </h3>
          <p className="text-lg text-gray-300 mb-12 font-light">
            Contact us today to learn how IMC can help your organization maintain precision and accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors duration-300 text-lg"
            >
              GET IN TOUCH
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/calibration"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300 text-lg"
            >
              EXPLORE SERVICES
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Accreditation;