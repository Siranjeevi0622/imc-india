import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Mail, Phone, MapPin, Send } from 'lucide-react';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    address: '',
    contactPerson: '',
    designation: '',
    phone: '',
    fax: '',
    email: '',
    placeOfCalibration: 'Both',
    instruments: '',
    comments: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    // Reset form
    setFormData({
      companyName: '',
      address: '',
      contactPerson: '',
      designation: '',
      phone: '',
      fax: '',
      email: '',
      placeOfCalibration: 'Both',
      instruments: '',
      comments: '',
    });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Decorative Elements */}
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 opacity-10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-2xl" data-aos="fade-right">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              Send us an <span className="text-orange-500">Enquiry</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              Request calibration services and get in touch with our team. Fill out the form below and we'll get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2" data-aos="fade-right">
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">
                  Request For<br />
                  <span className="text-orange-600">Calibration Service</span>
                </h2>
                <p className="text-gray-600 font-light mb-8">
                  Please fill out the details below and we'll respond promptly
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Company Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all duration-300"
                        placeholder="Enter company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all duration-300"
                        placeholder="Enter address"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Contact Person <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all duration-300"
                        placeholder="Enter contact person name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Designation <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all duration-300"
                        placeholder="Enter designation"
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Phone <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all duration-300"
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Fax
                      </label>
                      <input
                        type="text"
                        name="fax"
                        value={formData.fax}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all duration-300"
                        placeholder="Enter fax number"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all duration-300"
                      placeholder="Enter email address"
                    />
                  </div>

                  {/* Place of Calibration */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-4">
                      Place of Calibration <span className="text-red-600">*</span>
                    </label>
                    <div className="flex gap-8">
                      {['Site', 'Lab', 'Both'].map((option) => (
                        <label key={option} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="placeOfCalibration"
                            value={option}
                            checked={formData.placeOfCalibration === option}
                            onChange={handleChange}
                            className="w-5 h-5 text-orange-600 focus:ring-2 focus:ring-orange-600"
                          />
                          <span className="text-gray-700 font-medium">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Instruments */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Instruments <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      name="instruments"
                      value={formData.instruments}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Enter details of instruments to be calibrated"
                    />
                  </div>

                  {/* Comments */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Comments <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Additional comments or special requirements"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    SEND ENQUIRY
                  </button>

                  {submitted && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 font-semibold text-center">
                      ✓ Enquiry submitted successfully! We'll get back to you soon.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Info Section */}
            <div className="lg:col-span-1" data-aos="fade-left">
              <div className="space-y-6">
                {/* Info Card 1 */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-600">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg flex-shrink-0">
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                      <p className="text-gray-600 font-light">
                        <a href="mailto:info@imc.com" className="text-orange-600 hover:text-orange-700">
                          info@imc.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info Card 2 */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-600">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg flex-shrink-0">
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                      <p className="text-gray-600 font-light">
                        <a href="tel:+91000000000" className="text-orange-600 hover:text-orange-700">
                          +91 (0) 000-000-0000
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info Card 3 */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-600">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg flex-shrink-0">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
                      <p className="text-gray-600 font-light">
                        IMC Office Address<br />
                        City, State, Country
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-lg p-8 border border-orange-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Why Choose IMC?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-lg">✓</span>
                      <span className="text-gray-700 font-light">ISO/IEC 17025 Certified</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-lg">✓</span>
                      <span className="text-gray-700 font-light">Fast Turnaround Time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-lg">✓</span>
                      <span className="text-gray-700 font-light">Expert Team</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-lg">✓</span>
                      <span className="text-gray-700 font-light">Competitive Pricing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Have Questions?
          </h3>
          <p className="text-lg text-gray-300 mb-8 font-light">
            Our team is here to help you. Feel free to reach out for any calibration service inquiries.
          </p>
        </div>
      </section> */}
    </main>
  );
};

export default Enquiry;