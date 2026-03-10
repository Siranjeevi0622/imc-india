import React from "react";

const AboutUs = () => {
  // Services data arrays for cleaner mapping
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
    "Bio-Tech Industries",
    "Automobile Industries",
    "Pharmaceutical",
    "Marine",
    "Hotels",
    "Educational Institute",
  ];

  return (
    <>
      <div className="min-h-screen" style={{ backgroundColor: 'white' }}>
        {/* Header Section */}
        <div className="border-b-2 py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F3F4F6', borderColor: '#E5E7EB' }}>
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block text-white text-sm font-bold px-6 py-2 rounded-sm mb-6 tracking-wide" style={{ backgroundColor: '#2F5E8F' }}>
              ESTABLISHED 2012
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight" style={{ color: '#1F2933' }}>
              INDUSTRIAL<br />METROLOGY<br />CENTRE
            </h1>
            <div className="w-20 h-1 mx-auto mb-8" style={{ backgroundColor: '#2F5E8F' }}></div>
            <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{ color: '#3F78A8' }}>
              Welcome to IMC, your trusted partner in precision and accuracy. We are a leading calibration laboratory dedicated to providing top-notch calibration services for a wide range of industries. With our state-of-the-art facilities and highly skilled technicians, we ensure that your instruments and equipment meet the highest standards of performance and reliability.
            </p>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* About Section - Two Column */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center border-b-2 pb-16" style={{ borderColor: '#E5E7EB' }}>
            {/* Left - CEO Credentials */}
            <div className="text-white p-10 rounded-sm shadow-lg" style={{ backgroundColor: '#1F2933' }}>
              <h2 className="text-3xl font-black mb-6 tracking-tight">PRECISION • QUALITY • RELIABILITY</h2>
              <p className="leading-relaxed mb-6 font-light text-lg" style={{ color: '#D1D5DB' }}>
                The Company's CEO brings proficient experience as Quality Manager in a NABL-accredited firm in India,
                and Technical Manager in a SAC-SINGLAS accredited firm in Singapore.
              </p>
              <p className="leading-relaxed font-light text-lg" style={{ color: '#D1D5DB' }}>
                We receive training from CETE Bangalore, NMC-Singapore, Fluke Singapore, and participate in
                inter-laboratory comparisons to ensure technical competency.
              </p>
            </div>

            {/* Right - About IMC */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: '#1F2933' }}>
                <span className="font-bold text-xl block mb-2" style={{ color: '#1F2933' }}>Industrial Metrology Centre (IMC)</span>
                provides calibration requirements for various organizations. The Laboratory is equipped with elite 
                Calibration equipments – both Primary and Working/Transfer standards. The Calibration uncertainty of 
                these Master Equipments is traceable to National Physical Laboratory (India) & other nationally 
                recognized accredited laboratories.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#1F2933' }}>
                IMC maintains a quality management system as per <span className="font-bold" style={{ color: '#2F5E8F' }}>ISO/IEC 17025:2005</span>.
                Since establishment in 2012, the company has focused strongly and consistently on calibration with
                single-minded dedication to quality and reliability. All personnel are well qualified, trained, and highly
                experienced in calibration activities.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#1F2933' }}>
                With a full range of equipment, we are able to consistently meet quick turn-around time that satisfies
                customers' emergency situations.
              </p>
            </div>
          </div>

          {/* Services Grid - 3 Columns */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* IMC Offers */}
            <div className="p-8 rounded-sm hover:shadow-lg transition-shadow duration-300 group" style={{ backgroundColor: 'white', border: '2px solid #E5E7EB' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 text-white rounded-sm flex items-center justify-center font-bold text-xl group-hover:opacity-80 transition-opacity" style={{ backgroundColor: '#2F5E8F' }}>
                  🔧
                </div>
                <h3 className="text-xl font-bold ml-4 tracking-tight" style={{ color: '#1F2933' }}>IMC OFFERS</h3>
              </div>
              <ul className="space-y-3">
                {coreServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3" style={{ color: '#3F78A8' }}>
                    <span className="font-bold mt-1" style={{ color: '#2F5E8F' }}>▪</span>
                    <span className="text-lg">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Consultancy Services */}
            <div className="p-8 rounded-sm hover:shadow-lg transition-shadow duration-300 group" style={{ backgroundColor: 'white', border: '2px solid #E5E7EB' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 text-white rounded-sm flex items-center justify-center font-bold text-xl group-hover:opacity-80 transition-opacity" style={{ backgroundColor: '#2F5E8F' }}>
                  📋
                </div>
                <h3 className="text-xl font-bold ml-4 tracking-tight" style={{ color: '#1F2933' }}>CONSULTANCY SERVICES</h3>
              </div>
              <ul className="space-y-3">
                {consultancyServices.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3" style={{ color: '#3F78A8' }}>
                    <span className="font-bold mt-1" style={{ color: '#2F5E8F' }}>▪</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Training & Seminars */}
            <div className="p-8 rounded-sm hover:shadow-lg transition-shadow duration-300 group md:col-span-2 lg:col-span-1" style={{ backgroundColor: 'white', border: '2px solid #E5E7EB' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 text-white rounded-sm flex items-center justify-center font-bold text-xl group-hover:opacity-80 transition-opacity" style={{ backgroundColor: '#2F5E8F' }}>
                  🎓
                </div>
                <h3 className="text-xl font-bold ml-4 tracking-tight" style={{ color: '#1F2933' }}>TRAINING & SEMINARS</h3>
              </div>
              <ul className="space-y-3">
                {trainingHighlights.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3" style={{ color: '#3F78A8' }}>
                    <span className="font-bold mt-1" style={{ color: '#2F5E8F' }}>▪</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
                <li className="text-sm mt-4 italic pl-4 border-l-2" style={{ color: '#9CA3AF', borderColor: '#E5E7EB' }}>
                  + more comprehensive programs available
                </li>
              </ul>
            </div>
          </div>

          {/* Categories & Sectors Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Calibration Categories */}
            <div className="p-8 rounded-sm" style={{ backgroundColor: '#F3F4F6', border: '2px solid #E5E7EB' }}>
              <h3 className="text-2xl font-black mb-8 tracking-tight flex items-center" style={{ color: '#1F2933' }}>
                <span className="text-white p-3 rounded-sm mr-4 text-xl" style={{ backgroundColor: '#2F5E8F' }}>📊</span>
                CALIBRATION CATEGORIES
              </h3>
              <div className="flex flex-wrap gap-3">
                {calibrationCategories.map((cat, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 rounded-sm text-base font-semibold transition-all duration-300"
                    style={{ 
                      backgroundColor: 'white',
                      color: '#2F5E8F',
                      border: '2px solid #2F5E8F'
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
            <div className="p-8 rounded-sm" style={{ backgroundColor: '#F3F4F6', border: '2px solid #E5E7EB' }}>
              <h3 className="text-2xl font-black mb-8 tracking-tight flex items-center" style={{ color: '#1F2933' }}>
                <span className="text-white p-3 rounded-sm mr-4 text-xl" style={{ backgroundColor: '#2F5E8F' }}>🏭</span>
                SECTORS WE SERVE
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {servedSectors.map((sector, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-2 rounded-sm text-sm font-semibold text-center transition-all duration-300"
                    style={{
                      backgroundColor: 'white',
                      color: '#1F2933',
                      border: '2px solid #E5E7EB'
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
          <div className="p-12 rounded-sm" style={{ backgroundColor: '#1F2933' }}>
            <h3 className="text-3xl font-black mb-8 tracking-tight flex items-center text-white">
              <span className="p-3 rounded-sm mr-4" style={{ backgroundColor: '#2F5E8F' }}>📘</span>
              COMPREHENSIVE TRAINING OFFERINGS
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-4">
                {trainingHighlights.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-bold text-xl mt-1" style={{ color: '#7FB7B1' }}>✓</span>
                    <span className="text-lg leading-relaxed" style={{ color: '#D1D5DB' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {trainingHighlights.slice(3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-bold text-xl mt-1" style={{ color: '#7FB7B1' }}>✓</span>
                    <span className="text-lg leading-relaxed" style={{ color: '#D1D5DB' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t-2 mt-8 pt-8" style={{ borderColor: '#374151' }}>
              <p className="text-lg" style={{ color: '#9CA3AF' }}>
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