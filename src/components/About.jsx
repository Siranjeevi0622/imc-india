import React from "react";

// Modern About Us component based on Industrial Metrology Centre (IMC) content
// Using exact color specifications from design system
const AboutUs = () => {
  // Services data arrays for cleaner mapping
  const coreServices = [
    "Laboratory calibration",
    "Site calibration (at customer’s work places)",
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
    "Training Programs can also be organised / conducted at customer’s location.",
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
    <div>
      <h1 className='text-4xl font-bold text-center mt-10'>About Us</h1>
      <p className='text-center mt-4 text-lg text-gray-700 max-w-2xl mx-auto'>
        Welcome to IMC, your trusted partner in precision and accuracy. We are a leading calibration laboratory dedicated to providing top-notch calibration services for a wide range of industries. With our state-of-the-art facilities and highly skilled technicians, we ensure that your instruments and equipment meet the highest standards of performance and reliability.
      </p>
    </div>
<div className="min-h-screen mt-2.5 bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Main container with modern card-like feel */}
      <div className="max-w-7xl mx-auto">
        {/* Header with accent - using blue-600 for secondary heading */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Established 2012
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
            Industrial Metrology Centre
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* About Us Section - modern grid */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left side - key highlight / CEO achievement - using blue-600 for gradient */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Precision • Quality • Reliability</h2>
              <p className="text-blue-100 leading-relaxed mb-4">
                The Company’s CEO brings proficient experience as Quality Manager in a NABL-accredited firm in India,
                and Technical Manager in a SAC-SINGLAS accredited firm in Singapore.
              </p>
              <p className="text-blue-100 leading-relaxed">
                We receive training from CETE Bangalore, NMC-Singapore, Fluke Singapore, and participate in
                inter-laboratory comparisons to ensure technical competency.
              </p>
            </div>
            {/* Right side - description */}
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold text-gray-700">Industrial Metrology Centre (IMC)</span> provides
                calibration requirements for various organizations. The Laboratory is equipped with elite Calibration
                equipments – both Primary and Working/Transfer standards. The Calibration uncertainty of these Master
                Equipments is traceable to National Physical Laboratory (India) & other nationally recognized accredited
                laboratories.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                IMC maintains a quality management system as per <span className="font-semibold text-blue-600">ISO/IEC 17025:2005</span>.
                Since establishment in 2012, the company has focused strongly and consistently on calibration with
                single-minded dedication to quality and reliability. All personnel are well qualified, trained, and highly
                experienced in calibration activities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With a full range of equipment, we are able to consistently meet quick turn-around time that satisfies
                customers’ emergency situations.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid - 3 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* IMC offers */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-600 hover:bg-blue-50 transition">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">🔧</div>
              <h3 className="text-xl font-semibold text-gray-700 ml-3">IMC Offers</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              {coreServices.map((service, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Consultancy Services */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-600 hover:bg-blue-50 transition">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">📋</div>
              <h3 className="text-xl font-semibold text-gray-700 ml-3">Consultancy Services</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              {consultancyServices.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Calibration Seminars / Training */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-600 hover:bg-blue-50 transition md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">🎓</div>
              <h3 className="text-xl font-semibold text-gray-700 ml-3">Training & Seminars</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              {trainingHighlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
              <li className="text-sm text-gray-500 mt-2 italic">+ more comprehensive programs available</li>
            </ul>
          </div>
        </div>

        {/* Two column section: Categories & Sectors */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Common Categories */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
              <span className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-lg text-white mr-2">📊</span>
              Most Common Categories Calibrated
            </h3>
            <div className="flex flex-wrap gap-2">
              {calibrationCategories.map((cat, idx) => (
                <span key={idx} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium border border-blue-600">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Sectors served */}
          <div className="bg-white rounded-xl shadow-md p-6 border-r-4 border-blue-600">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
              <span className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-lg text-white mr-2">🏭</span>
              Sectors We Serve
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {servedSectors.map((sector, idx) => (
                <span key={idx} className="text-gray-700 bg-blue-50 px-3 py-1 rounded-md text-sm text-center border border-blue-600">
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Training Details - expanded for completeness */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-50 rounded-xl p-6 border border-blue-600">
          <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
            <span className="text-blue-600 mr-2">📘</span> Detailed Training & Seminar Offerings
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <ul className="space-y-2">
              {trainingHighlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {trainingHighlights.slice(3).map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-sm text-gray-500 border-t border-gray-100 pt-3">
            Industrial Metrology Centre – Committed to excellence in calibration since 2012.
          </p>
        </div>
      </div>
    </div>
    
    
    </>
  );
};

export default AboutUs;