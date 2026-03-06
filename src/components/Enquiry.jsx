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
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
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
    <main className="min-h-screen" style={{ backgroundColor: 'white' }}>
      {/* Hero Section */}
      <section className="relative w-full py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#1F2933' }}>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10 rounded-full blur-3xl" style={{ backgroundColor: '#2F5E8F' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10 rounded-full blur-3xl" style={{ backgroundColor: '#7FB7B1' }} />

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-2xl" data-aos="fade-right">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              Send us an <span style={{ color: '#7FB7B1' }}>Enquiry</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              Request calibration services and get in touch with our team. Fill out the form below and we'll get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2" data-aos="fade-right">
              <div className="rounded-2xl shadow-lg p-8 lg:p-12" style={{ backgroundColor: 'white', border: '1px solid #E5E7EB' }}>
                <h2 className="text-3xl md:text-4xl font-black mb-2 tracking-tight" style={{ color: '#1F2933' }}>
                  Request For<br />
                  <span style={{ color: '#2F5E8F' }}>Calibration Service</span>
                </h2>
                <p className="font-light mb-8" style={{ color: '#3F78A8' }}>
                  Please fill out the details below and we'll respond promptly
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2" style={{ color: '#1F2933' }}>
                        Company Name <span style={{ color: '#E53E3E' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300"
                        style={{ borderColor: '#E5E7EB' }}
                        onFocus={(e) => e.target.style.borderColor = '#2F5E8F'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                        placeholder="Enter company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2" style={{ color: '#1F2933' }}>
                        Address <span style={{ color: '#E53E3E' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300"
                        style={{ borderColor: '#E5E7EB' }}
                        onFocus={(e) => e.target.style.borderColor = '#2F5E8F'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                        placeholder="Enter address"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2" style={{ color: '#1F2933' }}>
                        Contact Person <span style={{ color: '#E53E3E' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300"
                        style={{ borderColor: '#E5E7EB' }}
                        onFocus={(e) => e.target.style.borderColor = '#2F5E8F'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                        placeholder="Enter contact person name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2" style={{ color: '#1F2933' }}>
                        Designation <span style={{ color: '#E53E3E' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300"
                        style={{ borderColor: '#E5E7EB' }}
                        onFocus={(e) => e.target.style.borderColor = '#2F5E8F'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                        placeholder="Enter designation"
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2" style={{ color: '#1F2933' }}>
                        Phone <span style={{ color: '#E53E3E' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300"
                        style={{ borderColor: '#E5E7EB' }}
                        onFocus={(e) => e.target.style.borderColor = '#2F5E8F'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2" style={{ color: '#1F2933' }}>
                        Fax
                      </label>
                      <input
                        type="text"
                        name="fax"
                        value={formData.fax}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300"
                        style={{ borderColor: '#E5E7EB' }}
                        onFocus={(e) => e.target.style.borderColor = '#2F5E8F'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                        placeholder="Enter fax number"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold mb-2" style={{ color: '#1F2933' }}>
                      Email <span style={{ color: '#E53E3E' }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300"
                      style={{ borderColor: '#E5E7EB' }}
                      onFocus={(e) => e.target.style.borderColor = '#2F5E8F'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                      placeholder="Enter email address"
                    />
                  </div>

                  {/* Place of Calibration */}
                  <div>
                    <label className="block text-sm font-bold mb-4" style={{ color: '#1F2933' }}>
                      Place of Calibration <span style={{ color: '#E53E3E' }}>*</span>
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
                            className="w-5 h-5 focus:ring-2"
                            style={{ accentColor: '#2F5E8F' }}
                          />
                          <span className="font-medium" style={{ color: '#3F78A8' }}>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Instruments */}
                  <div>
                    <label className="block text-sm font-bold mb-2" style={{ color: '#1F2933' }}>
                      Instruments <span style={{ color: '#E53E3E' }}>*</span>
                    </label>
                    <textarea
                      name="instruments"
                      value={formData.instruments}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 resize-none"
                      style={{ borderColor: '#E5E7EB' }}
                      onFocus={(e) => e.target.style.borderColor = '#2F5E8F'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                      placeholder="Enter details of instruments to be calibrated"
                    />
                  </div>

                  {/* Comments */}
                  <div>
                    <label className="block text-sm font-bold mb-2" style={{ color: '#1F2933' }}>
                      Comments <span style={{ color: '#E53E3E' }}>*</span>
                    </label>
                    <textarea
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 resize-none"
                      style={{ borderColor: '#E5E7EB' }}
                      onFocus={(e) => e.target.style.borderColor = '#2F5E8F'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                      placeholder="Additional comments or special requirements"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full text-white px-8 py-4 rounded-lg transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:opacity-90"
                    style={{ backgroundColor: '#2F5E8F' }}
                  >
                    <Send className="w-5 h-5" />
                    SEND ENQUIRY
                  </button>

                  {submitted && (
                    <div className="p-4 rounded-lg text-white font-semibold text-center" style={{ backgroundColor: '#10B981' }}>
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
                <div className="rounded-2xl shadow-lg p-8" style={{ backgroundColor: 'white', borderLeft: '4px solid #2F5E8F' }}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#F0F4F8' }}>
                      <Mail className="w-6 h-6" style={{ color: '#2F5E8F' }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: '#1F2933' }}>Email Us</h3>
                      <p style={{ color: '#3F78A8' }} className="font-light">
                        <a href="mailto:info@imc.com" style={{ color: '#2F5E8F' }} className="hover:opacity-80">
                          info@imc.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info Card 2 */}
                <div className="rounded-2xl shadow-lg p-8" style={{ backgroundColor: 'white', borderLeft: '4px solid #2F5E8F' }}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#F0F4F8' }}>
                      <Phone className="w-6 h-6" style={{ color: '#2F5E8F' }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: '#1F2933' }}>Call Us</h3>
                      <p style={{ color: '#3F78A8' }} className="font-light">
                        <a href="tel:+91000000000" style={{ color: '#2F5E8F' }} className="hover:opacity-80">
                          +91 (0) 000-000-0000
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info Card 3 */}
                <div className="rounded-2xl shadow-lg p-8" style={{ backgroundColor: 'white', borderLeft: '4px solid #2F5E8F' }}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#F0F4F8' }}>
                      <MapPin className="w-6 h-6" style={{ color: '#2F5E8F' }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: '#1F2933' }}>Visit Us</h3>
                      <p style={{ color: '#3F78A8' }} className="font-light">
                        IMC Office Address<br />
                        City, State, Country
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="rounded-2xl shadow-lg p-8" style={{ backgroundColor: '#F0F4F8', border: '1px solid #E5E7EB' }}>
                  <h3 className="text-lg font-bold mb-4" style={{ color: '#1F2933' }}>Why Choose IMC?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span style={{ color: '#2F5E8F' }} className="font-bold text-lg">✓</span>
                      <span style={{ color: '#3F78A8' }} className="font-light">ISO/IEC 17025 Certified</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span style={{ color: '#2F5E8F' }} className="font-bold text-lg">✓</span>
                      <span style={{ color: '#3F78A8' }} className="font-light">Fast Turnaround Time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span style={{ color: '#2F5E8F' }} className="font-bold text-lg">✓</span>
                      <span style={{ color: '#3F78A8' }} className="font-light">Expert Team</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span style={{ color: '#2F5E8F' }} className="font-bold text-lg">✓</span>
                      <span style={{ color: '#3F78A8' }} className="font-light">Competitive Pricing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Enquiry;