import React from "react";
import Banner from './Banner';

const AboutUs = () => {
  const coreServices = [
    "Laboratory calibration",
    "Site calibration (at customer's work places)",
    "Annual Maintenance / Calibration",
  ];

  const consultancyServices = [
    "Identifying Master equipment & setting up a Calibration Laboratory as per ISO/IEC 17025:2005",
    "Training in CMC, Internal Audit, Management Review, Document Preparation",
    "Training the staff to run the Laboratory as per ISO/IEC 17025:2005",
    "Assisting in getting NABL Accreditation",
  ];

  const trainingHighlights = [
    "On Training – In Techniques & Methods for Technicians, Engineers, & Calibration Laboratory Managers.",
    "Short duration Training Program for Marketing and Sales Executives are also available.",
    "Training courses are well structured and if required can be made customer specific.",
    "Training Programs can also be organised / conducted at customer's location.",
    "Training includes theoretical aspects followed by hands-on practical exposure trained in well equipped Industrial Metrology Centre.",
  ];

  const calibrationCategories = [
    "Pressure and Vacuum",
    "Mass and Balance",
    "Temperature",
    "Electrical",
    "Time / Speed",
    "Dimensional",
    "NDT Equipments",
  ];

  const servedSectors = [
    "Power Plant",
    "Petrochemicals",
    "Refineries",
    "Oil and Gas",
    "Cement Plants",
    "Steel Plants",
    "Sugar Plants",
    "Pharmaceutical",
    "Marine",
    "Hotels",
    "Bio-Tech Industries",
    "Educational Institute",
    "Automobile Industries",
  ];

  return (
    <>
      <div className="min-h-screen" style={{ backgroundColor: 'white' }}>

        {/* Banner — overlay now lives inside Banner.jsx */}
        <Banner
          type="aboutus"
          // badge="ESTABLISHED 2012"
          title="INDUSTRIAL METROLOGY CENTRE"
        />

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

          {/* About Section - Two Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-10 sm:mb-16 items-center border-b-2 pb-10 sm:pb-16" style={{ borderColor: '#E5E7EB' }}>

            {/* Left - CEO Credentials */}
            <div className="text-white p-6 sm:p-8 lg:p-10 rounded-sm shadow-lg" style={{ backgroundColor: '#1F2933' }}>
              <h2
                className="font-black mb-4 sm:mb-6 tracking-tight"
                style={{ fontSize: 'clamp(1.1rem, 3vw, 1.875rem)' }}
              >
                PRECISION • QUALITY • RELIABILITY
              </h2>
              <p className="leading-relaxed mb-4 sm:mb-6 font-light text-base sm:text-lg" style={{ color: '#D1D5DB' }}>
                The Company's CEO brings proficient experience as Quality Manager in a NABL-accredited firm in India,
                and Technical Manager in a SAC-SINGLAS accredited firm in Singapore.
              </p>
              <p className="leading-relaxed font-light text-base sm:text-lg" style={{ color: '#D1D5DB' }}>
                We receive training from CETE Bangalore, NMC-Singapore, Fluke Singapore, and participate in
                inter-laboratory comparisons to ensure technical competency.
              </p>
            </div>

            {/* Right - About IMC */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#1F2933' }}>
                <span className="font-bold text-lg sm:text-xl block mb-2" style={{ color: '#1F2933' }}>
                  Industrial Metrology Centre (IMC)
                </span>
                provides calibration requirements for various organizations. The Laboratory is equipped with elite
                Calibration equipments – both Primary and Working/Transfer standards. The Calibration uncertainty of
                these Master Equipments is traceable to National Physical Laboratory (India) & other nationally
                recognized accredited laboratories.
              </p>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#1F2933' }}>
                IMC maintains a quality management system as per{' '}
                <span className="font-bold" style={{ color: '#2F5E8F' }}>ISO/IEC 17025:2005</span>.
                Since establishment in 2012, the company has focused strongly and consistently on calibration with
                single-minded dedication to quality and reliability. All personnel are well qualified, trained, and highly
                experienced in calibration activities.
              </p>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#1F2933' }}>
                With a full range of equipment, we are able to consistently meet quick turn-around time that satisfies
                customers' emergency situations.
              </p>
            </div>
          </div>

          {/* Services Grid - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-10 sm:mb-16">

            {/* IMC Offers */}
            <div className="p-5 sm:p-8 rounded-sm hover:shadow-lg transition-shadow duration-300 group" style={{ backgroundColor: 'white', border: '2px solid #E5E7EB' }}>
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 text-white rounded-sm flex items-center justify-center font-bold text-lg sm:text-xl group-hover:opacity-80 transition-opacity" style={{ backgroundColor: '#2F5E8F' }}>
                  🔧
                </div>
                <h3 className="text-base sm:text-xl font-bold ml-3 sm:ml-4 tracking-tight" style={{ color: '#1F2933' }}>IMC OFFERS</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {coreServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3" style={{ color: '#3F78A8' }}>
                    <span className="font-bold mt-1 shrink-0" style={{ color: '#2F5E8F' }}>▪</span>
                    <span className="text-sm sm:text-lg">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Consultancy Services */}
            <div className="p-5 sm:p-8 rounded-sm hover:shadow-lg transition-shadow duration-300 group" style={{ backgroundColor: 'white', border: '2px solid #E5E7EB' }}>
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 text-white rounded-sm flex items-center justify-center font-bold text-lg sm:text-xl group-hover:opacity-80 transition-opacity" style={{ backgroundColor: '#2F5E8F' }}>
                  📋
                </div>
                <h3 className="text-base sm:text-xl font-bold ml-3 sm:ml-4 tracking-tight" style={{ color: '#1F2933' }}>CONSULTANCY SERVICES</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {consultancyServices.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3" style={{ color: '#3F78A8' }}>
                    <span className="font-bold mt-1 shrink-0" style={{ color: '#2F5E8F' }}>▪</span>
                    <span className="text-sm sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Training & Seminars */}
            <div className="p-5 sm:p-8 rounded-sm hover:shadow-lg transition-shadow duration-300 group md:col-span-2 lg:col-span-1" style={{ backgroundColor: 'white', border: '2px solid #E5E7EB' }}>
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 text-white rounded-sm flex items-center justify-center font-bold text-lg sm:text-xl group-hover:opacity-80 transition-opacity" style={{ backgroundColor: '#2F5E8F' }}>
                  🎓
                </div>
                <h3 className="text-base sm:text-xl font-bold ml-3 sm:ml-4 tracking-tight" style={{ color: '#1F2933' }}>TRAINING & SEMINARS</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {trainingHighlights.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3" style={{ color: '#3F78A8' }}>
                    <span className="font-bold mt-1 shrink-0" style={{ color: '#2F5E8F' }}>▪</span>
                    <span className="text-sm sm:text-lg">{item}</span>
                  </li>
                ))}
                <li className="text-xs sm:text-sm mt-3 sm:mt-4 italic pl-3 sm:pl-4 border-l-2" style={{ color: '#9CA3AF', borderColor: '#E5E7EB' }}>
                  + more comprehensive programs available
                </li>
              </ul>
            </div>
          </div>

          {/* Categories & Sectors Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 mb-10 sm:mb-16">

            {/* Calibration Categories */}
            <div className="p-5 sm:p-8 rounded-sm" style={{ backgroundColor: '#F3F4F6', border: '2px solid #E5E7EB' }}>
              <h3
                className="font-black mb-5 sm:mb-8 tracking-tight flex items-center"
                style={{ color: '#1F2933', fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}
              >
                <span className="text-white p-2 sm:p-3 rounded-sm mr-3 sm:mr-4 text-base sm:text-xl" style={{ backgroundColor: '#2F5E8F' }}>📊</span>
                CALIBRATION CATEGORIES
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {calibrationCategories.map((cat, idx) => (
                  <span
                    key={idx}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm text-sm sm:text-base font-semibold transition-all duration-300"
                    style={{
                      backgroundColor: 'white',
                      color: '#2F5E8F',
                      border: '2px solid #2F5E8F',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#2F5E8F';
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.color = '#2F5E8F';
                    }}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* Sectors Served */}
            <div className="p-5 sm:p-8 rounded-sm" style={{ backgroundColor: '#F3F4F6', border: '2px solid #E5E7EB' }}>
              <h3
                className="font-black mb-5 sm:mb-8 tracking-tight flex items-center"
                style={{ color: '#1F2933', fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}
              >
                <span className="text-white p-2 sm:p-3 rounded-sm mr-3 sm:mr-4 text-base sm:text-xl" style={{ backgroundColor: '#2F5E8F' }}>🏭</span>
                SECTORS WE SERVE
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {servedSectors.map((sector, idx) => (
                  <span
                    key={idx}
                    className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-sm text-xs sm:text-sm font-semibold text-center transition-all duration-300"
                    style={{
                      backgroundColor: 'white',
                      color: '#1F2933',
                      border: '2px solid #E5E7EB',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = '#2F5E8F';
                      e.target.style.backgroundColor = '#F0F4F8';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = '#E5E7EB';
                      e.target.style.backgroundColor = 'white';
                    }}
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Training Details - Full Width */}
          <div className="p-6 sm:p-10 lg:p-12 rounded-sm" style={{ backgroundColor: '#1F2933' }}>
            <h3
              className="font-black mb-6 sm:mb-8 tracking-tight flex items-center text-white"
              style={{ fontSize: 'clamp(1.1rem, 3vw, 1.875rem)' }}
            >
              <span className="p-2 sm:p-3 rounded-sm mr-3 sm:mr-4" style={{ backgroundColor: '#2F5E8F' }}>📘</span>
              COMPREHENSIVE TRAINING OFFERINGS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <ul className="space-y-3 sm:space-y-4">
                {trainingHighlights.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-bold text-lg sm:text-xl mt-1 shrink-0" style={{ color: '#7FB7B1' }}>✓</span>
                    <span className="text-sm sm:text-lg leading-relaxed" style={{ color: '#D1D5DB' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3 sm:space-y-4">
                {trainingHighlights.slice(3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-bold text-lg sm:text-xl mt-1 shrink-0" style={{ color: '#7FB7B1' }}>✓</span>
                    <span className="text-sm sm:text-lg leading-relaxed" style={{ color: '#D1D5DB' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t-2 mt-6 sm:mt-8 pt-6 sm:pt-8" style={{ borderColor: '#374151' }}>
              <p className="text-sm sm:text-lg" style={{ color: '#9CA3AF' }}>
                Industrial Metrology Centre – Committed to excellence in calibration since 2012.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutUs;