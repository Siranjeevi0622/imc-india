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
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <div className="bg-gray-50 border-b-2 border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block bg-orange-600 text-white text-sm font-bold px-6 py-2 rounded-sm mb-6 tracking-wide">
              ESTABLISHED 2012
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight">
              INDUSTRIAL<br />METROLOGY<br />CENTRE
            </h1>
            <div className="w-20 h-1 bg-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
              Welcome to IMC, your trusted partner in precision and accuracy. We are a leading calibration laboratory dedicated to providing top-notch calibration services for a wide range of industries. With our state-of-the-art facilities and highly skilled technicians, we ensure that your instruments and equipment meet the highest standards of performance and reliability.
            </p>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* About Section - Two Column */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center border-b-2 border-gray-200 pb-16">
            {/* Left - CEO Credentials */}
            <div className="bg-gray-900 text-white p-10 rounded-sm shadow-lg">
              <h2 className="text-3xl font-black mb-6 tracking-tight">PRECISION • QUALITY • RELIABILITY</h2>
              <p className="text-gray-300 leading-relaxed mb-6 font-light text-lg">
                The Company's CEO brings proficient experience as Quality Manager in a NABL-accredited firm in India,
                and Technical Manager in a SAC-SINGLAS accredited firm in Singapore.
              </p>
              <p className="text-gray-300 leading-relaxed font-light text-lg">
                We receive training from CETE Bangalore, NMC-Singapore, Fluke Singapore, and participate in
                inter-laboratory comparisons to ensure technical competency.
              </p>
            </div>

            {/* Right - About IMC */}
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                <span className="font-bold text-gray-900 text-xl block mb-2">Industrial Metrology Centre (IMC)</span>
                provides calibration requirements for various organizations. The Laboratory is equipped with elite 
                Calibration equipments – both Primary and Working/Transfer standards. The Calibration uncertainty of 
                these Master Equipments is traceable to National Physical Laboratory (India) & other nationally 
                recognized accredited laboratories.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                IMC maintains a quality management system as per <span className="font-bold text-orange-600">ISO/IEC 17025:2005</span>.
                Since establishment in 2012, the company has focused strongly and consistently on calibration with
                single-minded dedication to quality and reliability. All personnel are well qualified, trained, and highly
                experienced in calibration activities.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                With a full range of equipment, we are able to consistently meet quick turn-around time that satisfies
                customers' emergency situations.
              </p>
            </div>
          </div>

          {/* Services Grid - 3 Columns */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* IMC Offers */}
            <div className="bg-white border-2 border-gray-200 p-8 rounded-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-sm flex items-center justify-center font-bold text-xl group-hover:bg-orange-700 transition-colors">
                  🔧
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4 tracking-tight">IMC OFFERS</h3>
              </div>
              <ul className="space-y-3">
                {coreServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-orange-600 font-bold mt-1">▪</span>
                    <span className="text-lg">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Consultancy Services */}
            <div className="bg-white border-2 border-gray-200 p-8 rounded-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-sm flex items-center justify-center font-bold text-xl group-hover:bg-orange-700 transition-colors">
                  📋
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4 tracking-tight">CONSULTANCY SERVICES</h3>
              </div>
              <ul className="space-y-3">
                {consultancyServices.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-orange-600 font-bold mt-1">▪</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Training & Seminars */}
            <div className="bg-white border-2 border-gray-200 p-8 rounded-sm hover:shadow-lg transition-shadow duration-300 group md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-sm flex items-center justify-center font-bold text-xl group-hover:bg-orange-700 transition-colors">
                  🎓
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4 tracking-tight">TRAINING & SEMINARS</h3>
              </div>
              <ul className="space-y-3">
                {trainingHighlights.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-orange-600 font-bold mt-1">▪</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
                <li className="text-sm text-gray-500 mt-4 italic pl-4 border-l-2 border-gray-300">
                  + more comprehensive programs available
                </li>
              </ul>
            </div>
          </div>

          {/* Categories & Sectors Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Calibration Categories */}
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-sm">
              <h3 className="text-2xl font-black text-gray-900 mb-8 tracking-tight flex items-center">
                <span className="bg-orange-600 text-white p-3 rounded-sm mr-4 text-xl">📊</span>
                CALIBRATION CATEGORIES
              </h3>
              <div className="flex flex-wrap gap-3">
                {calibrationCategories.map((cat, idx) => (
                  <span 
                    key={idx} 
                    className="bg-white text-orange-600 px-4 py-2 rounded-sm text-base font-semibold border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-colors duration-300"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* Sectors Served */}
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-sm">
              <h3 className="text-2xl font-black text-gray-900 mb-8 tracking-tight flex items-center">
                <span className="bg-orange-600 text-white p-3 rounded-sm mr-4 text-xl">🏭</span>
                SECTORS WE SERVE
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {servedSectors.map((sector, idx) => (
                  <span 
                    key={idx} 
                    className="text-gray-800 bg-white px-3 py-2 rounded-sm text-sm font-semibold text-center border-2 border-gray-300 hover:border-orange-600 hover:bg-orange-50 transition-colors duration-300"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Training Details - Full Width */}
          <div className="bg-gray-900 text-white p-12 rounded-sm mb-0">
            <h3 className="text-3xl font-black mb-8 tracking-tight flex items-center">
              <span className="bg-orange-600 p-3 rounded-sm mr-4">📘</span>
              COMPREHENSIVE TRAINING OFFERINGS
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-4">
                {trainingHighlights.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold text-xl mt-1">✓</span>
                    <span className="text-gray-300 text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {trainingHighlights.slice(3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold text-xl mt-1">✓</span>
                    <span className="text-gray-300 text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t-2 border-gray-700 mt-8 pt-8">
              <p className="text-gray-400 text-lg">
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