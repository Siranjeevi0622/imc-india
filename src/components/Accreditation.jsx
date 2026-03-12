import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Download, ExternalLink, CheckCircle2 } from 'lucide-react';
import Banner from './Banner';
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

  const handleViewPDF = () => {
    window.open(CertificatePDF, '_blank');
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'white' }}>

      {/* Banner — overlay now lives inside Banner.jsx */}
      <Banner
        type="accreditation"
        title="ACCREDITATION"
      />

      {/* Accreditation Info */}
      <section
        className="py-10 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b-2"
        style={{ borderColor: '#E5E7EB' }}
      >
        <div className="max-w-7xl mx-auto">

          <div className="mb-8 sm:mb-16" data-aos="fade-down">
            <p
              className="font-light leading-relaxed max-w-3xl"
              style={{ color: '#3F78A8', fontSize: 'clamp(0.95rem, 2vw, 1.25rem)' }}
            >
              M/s. Industrial Metrology Centre is Now Accredited as per ISO/IEC 17025:2005 by National Accreditation
              Board for Testing and Calibration Laboratories (NABL) under the aegis of Department of Science &
              Technology, Government of India
            </p>
          </div>

          <h2
            className="font-black mb-8 sm:mb-12 tracking-tight"
            data-aos="fade-down"
            style={{ color: '#1F2933', fontSize: 'clamp(1.8rem, 5vw, 3.75rem)' }}
          >
            Accreditation <span style={{ color: '#2F5E8F' }}>Scope</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
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
                className="p-5 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: 'white', borderTop: '4px solid #2F5E8F' }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start gap-3 mb-3 sm:mb-4">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-1" style={{ color: '#2F5E8F' }} />
                  <h3
                    className="font-bold"
                    style={{ color: '#1F2933', fontSize: 'clamp(0.95rem, 2vw, 1.25rem)' }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="font-light text-sm sm:text-base" style={{ color: '#3F78A8' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section
        className="py-12 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#F3F4F6' }}
      >
        <div className="max-w-7xl mx-auto">

          <h2
            className="font-black mb-3 sm:mb-4 tracking-tight text-center"
            data-aos="fade-down"
            style={{ color: '#1F2933', fontSize: 'clamp(1.8rem, 5vw, 3.75rem)' }}
          >
            NABL <span style={{ color: '#2F5E8F' }}>Certificate</span>
          </h2>

          <p
            className="text-center font-light mb-10 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-lg"
            data-aos="fade-up"
            style={{ color: '#3F78A8' }}
          >
            Certificate of Accreditation for Electro Technical, Mechanical & Thermal Calibration Services
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">

            {/* Certificate Image */}
            <div className="flex justify-center" data-aos="zoom-in">
              <div className="relative w-full max-w-xs sm:max-w-sm">
                <div
                  className="rounded-lg shadow-xl p-3 sm:p-4 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                  style={{ backgroundColor: 'white', border: '4px solid #7FB7B1' }}
                >
                  <div className="relative overflow-hidden rounded">
                    <img
                      src={CertificateImg}
                      alt="NABL Certificate of Accreditation"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate Details */}
            <div data-aos="fade-left">
              <h3
                className="font-black mb-6 sm:mb-8 tracking-tight"
                style={{ color: '#1F2933', fontSize: 'clamp(1.3rem, 3vw, 1.875rem)' }}
              >
                Certificate<br />
                <span style={{ color: '#2F5E8F' }}>Details</span>
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: 'ISO/IEC 17025:2005',
                    desc: 'General requirements for the competence of testing and calibration laboratories',
                  },
                  {
                    title: 'NABL Accreditation',
                    desc: 'Recognition by National Accreditation Board under Department of Science & Technology, Government of India',
                  },
                  {
                    title: 'Measurement Traceability',
                    desc: 'All calibration uncertainties traceable to National Physical Laboratory (India)',
                  },
                ].map((detail) => (
                  <div
                    key={detail.title}
                    className="p-4 sm:p-6 rounded-r-lg"
                    style={{ backgroundColor: '#F0F4F8', borderLeft: '4px solid #2F5E8F' }}
                  >
                    <h4
                      className="font-bold mb-1 sm:mb-2 text-sm sm:text-lg"
                      style={{ color: '#1F2933' }}
                    >
                      {detail.title}
                    </h4>
                    <p className="font-light text-sm sm:text-base" style={{ color: '#3F78A8' }}>
                      {detail.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-4 mt-6 sm:mt-8">
                <button
                  onClick={handleViewPDF}
                  className="inline-flex items-center justify-center gap-2 w-full text-white px-6 py-3 rounded-lg transition-all duration-300 font-bold hover:opacity-90 text-sm sm:text-base"
                  style={{ backgroundColor: '#2F5E8F' }}
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  VIEW CERTIFICATE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section
        className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t-2"
        style={{ backgroundColor: '#F3F4F6', borderColor: '#E5E7EB' }}
      >
        <div className="max-w-7xl mx-auto">

          <h2
            className="font-black mb-10 sm:mb-16 text-center tracking-tight"
            data-aos="fade-down"
            style={{ color: '#1F2933', fontSize: 'clamp(1.8rem, 5vw, 3.75rem)' }}
          >
            International <span style={{ color: '#2F5E8F' }}>Standards</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
            {[
              {
                title: 'Quality Management',
                items: ['ISO/IEC 17025:2005', 'Regular Audits', 'Continuous Improvement'],
              },
              {
                title: 'Technical Excellence',
                items: ['Advanced Equipment', 'Trained Personnel', 'Measurement Traceability'],
              },
              {
                title: 'Customer Focus',
                items: ['Timely Delivery', 'Transparent Reporting', 'Customer Support'],
              },
            ].map((section, index) => (
              <div
                key={section.title}
                className="p-5 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: 'white', borderTop: '4px solid #2F5E8F' }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3
                  className="font-black mb-4 sm:mb-6 tracking-tight"
                  style={{ color: '#1F2933', fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}
                >
                  {section.title}
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="font-bold text-base sm:text-lg shrink-0" style={{ color: '#2F5E8F' }}>●</span>
                      <span className="font-light text-sm sm:text-base" style={{ color: '#3F78A8' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default Accreditation;