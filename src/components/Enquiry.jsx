import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MapPin, Phone, Mail, Globe, Send, Clock } from 'lucide-react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Enquiry = () => {
  const [activeTab, setActiveTab] = useState('enquiry');

  const [enquiryData, setEnquiryData] = useState({
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

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  const handleEnquiryChange = (e) => {
    const { name, value } = e.target;
    setEnquiryData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setEnquirySubmitted(true);
    setTimeout(() => {
      setEnquirySubmitted(false);
      setEnquiryData({
        companyName: '', address: '', contactPerson: '', designation: '',
        phone: '', fax: '', email: '', placeOfCalibration: 'Both',
        instruments: '', comments: '',
      });
    }, 3000);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const inputClass = "w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 text-sm bg-white";
  const inputStyle = { borderColor: '#E5E7EB' };
  const onFocus = (e) => (e.target.style.borderColor = '#2F5E8F');
  const onBlur = (e) => (e.target.style.borderColor = '#E5E7EB');

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: [
        'Industrial Metrology Centre,',
        '36, 1st Floor, J.M. Solanki Complex,',
        'Ahamed Mohideen Street,',
        'Sriperumbudur - 602 105,',
        'Kanchipuram Dist., Tamil Nadu, India',
      ],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        'Telefax: +91 44-27162042',
        'Mobile: +91 9498071405',
        'Mobile: +91 9498071401',
      ],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@imcindia.co'],
    },
    {
      icon: Globe,
      title: 'Website',
      details: ['www.imcindia.co'],
    },
  ];

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#F3F4F6' }}>

      {/* Banner */}
      <Banner type="enquiry" title="Enquiry" />

      {/* Main Content */}
      <section className="py-8 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Two-column grid — stacks on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">

            {/* LEFT: Form */}
            <div className="flex" data-aos="fade-right">
              <div
                className="rounded-2xl shadow-lg overflow-hidden flex flex-col w-full"
                style={{ backgroundColor: 'white', border: '1px solid #E5E7EB' }}
              >
                {/* Tab Switcher */}
                <div className="grid grid-cols-2 shrink-0">
                  <button
                    onClick={() => setActiveTab('enquiry')}
                    className="py-3 sm:py-4 text-xs sm:text-sm font-bold transition-all duration-300"
                    style={{
                      backgroundColor: activeTab === 'enquiry' ? '#2F5E8F' : '#F3F4F6',
                      color: activeTab === 'enquiry' ? 'white' : '#3F78A8',
                    }}
                  >
                    Calibration Enquiry
                  </button>
                  <button
                    onClick={() => setActiveTab('contact')}
                    className="py-3 sm:py-4 text-xs sm:text-sm font-bold transition-all duration-300"
                    style={{
                      backgroundColor: activeTab === 'contact' ? '#2F5E8F' : '#F3F4F6',
                      color: activeTab === 'contact' ? 'white' : '#3F78A8',
                    }}
                  >
                    Send a Message
                  </button>
                </div>

                <div className="p-4 sm:p-8 flex-1">

                  {/* Enquiry Form */}
                  {activeTab === 'enquiry' && (
                    <form onSubmit={handleEnquirySubmit} className="space-y-3 sm:space-y-4">
                      <h2
                        className="font-black mb-1 tracking-tight"
                        style={{ color: '#1F2933', fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}
                      >
                        Request Calibration
                      </h2>
                      <p className="text-xs sm:text-sm font-light mb-3 sm:mb-4" style={{ color: '#3F78A8' }}>
                        Fill out the details and we'll respond promptly.
                      </p>

                      {/* Company + Contact — stack on mobile */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <input type="text" name="companyName" value={enquiryData.companyName} onChange={handleEnquiryChange} required placeholder="Company Name *" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                        <input type="text" name="contactPerson" value={enquiryData.contactPerson} onChange={handleEnquiryChange} required placeholder="Contact Person *" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>

                      <input type="text" name="address" value={enquiryData.address} onChange={handleEnquiryChange} required placeholder="Address *" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />

                      {/* Designation + Email — stack on mobile */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <input type="text" name="designation" value={enquiryData.designation} onChange={handleEnquiryChange} required placeholder="Designation *" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                        <input type="email" name="email" value={enquiryData.email} onChange={handleEnquiryChange} required placeholder="Email *" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>

                      {/* Phone + Fax — stack on mobile */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <input type="tel" name="phone" value={enquiryData.phone} onChange={handleEnquiryChange} required placeholder="Phone *" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                        <input type="text" name="fax" value={enquiryData.fax} onChange={handleEnquiryChange} placeholder="Fax" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>

                      {/* Place of Calibration */}
                      <div>
                        <label className="block text-xs sm:text-sm font-bold mb-2 sm:mb-3" style={{ color: '#1F2933' }}>
                          Place of Calibration *
                        </label>
                        <div className="flex gap-4 sm:gap-6 flex-wrap">
                          {['Site', 'Lab', 'Both'].map((option) => (
                            <label key={option} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="radio"
                                name="placeOfCalibration"
                                value={option}
                                checked={enquiryData.placeOfCalibration === option}
                                onChange={handleEnquiryChange}
                                className="w-4 h-4"
                                style={{ accentColor: '#2F5E8F' }}
                              />
                              <span className="text-xs sm:text-sm font-medium" style={{ color: '#3F78A8' }}>{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <textarea name="instruments" value={enquiryData.instruments} onChange={handleEnquiryChange} required rows="3" placeholder="Instruments to be calibrated *" className={`${inputClass} resize-none`} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      <textarea name="comments" value={enquiryData.comments} onChange={handleEnquiryChange} required rows="3" placeholder="Additional comments *" className={`${inputClass} resize-none`} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />

                      <button
                        type="submit"
                        className="w-full py-3 sm:py-4 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 hover:opacity-90 shadow-lg text-sm sm:text-base"
                        style={{ backgroundColor: '#FF6B35' }}
                      >
                        <Send className="w-4 h-4" /> SEND ENQUIRY
                      </button>

                      {enquirySubmitted && (
                        <div className="p-3 sm:p-4 rounded-lg text-white font-semibold text-center text-xs sm:text-sm" style={{ backgroundColor: '#10B981' }}>
                          ✓ Enquiry submitted! We'll get back to you soon.
                        </div>
                      )}
                    </form>
                  )}

                  {/* Contact Form */}
                  {activeTab === 'contact' && (
                    <form onSubmit={handleContactSubmit} className="space-y-3 sm:space-y-4">
                      <h2
                        className="font-black mb-1 tracking-tight"
                        style={{ color: '#1F2933', fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}
                      >
                        Get in Touch
                      </h2>
                      <p className="text-xs sm:text-sm font-light mb-3 sm:mb-4" style={{ color: '#3F78A8' }}>
                        Have a question? We'll respond within 24 hours.
                      </p>

                      <input type="text" name="name" value={contactData.name} onChange={handleContactChange} required placeholder="Full Name *" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />

                      {/* Email + Phone — stack on mobile */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <input type="email" name="email" value={contactData.email} onChange={handleContactChange} required placeholder="Email *" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                        <input type="tel" name="phone" value={contactData.phone} onChange={handleContactChange} required placeholder="Phone *" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>

                      <input type="text" name="subject" value={contactData.subject} onChange={handleContactChange} required placeholder="Subject *" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      <textarea name="message" value={contactData.message} onChange={handleContactChange} required rows="5" placeholder="Your message *" className={`${inputClass} resize-none`} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />

                      <button
                        type="submit"
                        className="w-full py-3 sm:py-4 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 hover:opacity-90 shadow-lg text-sm sm:text-base"
                        style={{ backgroundColor: '#FF6B35' }}
                      >
                        <Send className="w-4 h-4" /> SEND MESSAGE
                      </button>

                      {contactSubmitted && (
                        <div className="p-3 sm:p-4 rounded-lg text-white font-semibold text-center text-xs sm:text-sm" style={{ backgroundColor: '#10B981' }}>
                          ✓ Message sent! We'll get back to you soon.
                        </div>
                      )}
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT: Contact Info */}
            <div className="flex" data-aos="fade-left">
              <div
                className="rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col w-full"
                style={{ backgroundColor: 'white', border: '1px solid #E5E7EB' }}
              >
                <h3
                  className="font-black mb-4 sm:mb-6 tracking-tight"
                  style={{ color: '#1F2933', fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}
                >
                  Our <span style={{ color: '#2F5E8F' }}>Details</span>
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={info.title}
                        className="flex items-start gap-3 pb-4 sm:pb-5 border-b last:border-b-0"
                        style={{ borderColor: '#F3F4F6' }}
                      >
                        <div className="p-2 rounded-lg shrink-0 mt-0.5" style={{ backgroundColor: '#EEF4FB' }}>
                          <Icon className="w-4 h-4" style={{ color: '#2F5E8F' }} />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-bold mb-1 uppercase tracking-wide" style={{ color: '#000000' }}>
                            {info.title}
                          </p>
                          {info.details.map((d, i) => (
                            <p key={i} className="text-xs sm:text-sm leading-relaxed" style={{ color: '#3F78A8' }}>{d}</p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Business Hours */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t-2" style={{ borderColor: '#F3F4F6' }}>
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <Clock className="w-4 h-4" style={{ color: '#2F5E8F' }} />
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-wide" style={{ color: '#000000' }}>
                      Business Hours
                    </p>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm" style={{ color: '#3F78A8' }}>
                    <div className="flex justify-between">
                      <span className="font-semibold">Mon – Fri</span>
                      <span>9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Saturday</span>
                      <span>10:00 AM – 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                {/* Why Choose IMC */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t-2" style={{ borderColor: '#F3F4F6' }}>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wide mb-2 sm:mb-3" style={{ color: '#000000' }}>
                    Why Choose IMC?
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {['ISO/IEC 17025 Certified', 'Fast Turnaround Time', 'Expert Team', 'Competitive Pricing'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs sm:text-sm" style={{ color: '#3F78A8' }}>
                        <span className="font-bold text-sm sm:text-base shrink-0" style={{ color: '#FF6B35' }}>✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width Map Section */}
          <div className="mt-8 sm:mt-12" data-aos="fade-up">
            <div className="rounded-2xl shadow-lg overflow-hidden" style={{ border: '1px solid #E5E7EB' }}>
              <div
                className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between"
                style={{ backgroundColor: 'white', borderBottom: '1px solid #E5E7EB' }}
              >
                <h3
                  className="font-black tracking-tight"
                  style={{ color: '#1F2933', fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)' }}
                >
                  Find Us on the <span style={{ color: '#2F5E8F' }}>Map</span>
                </h3>
                <a
                  href="https://maps.google.com/?q=Sriperumbudur,Kanchipuram,Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-all hover:opacity-80 flex items-center gap-1 shrink-0"
                  style={{ backgroundColor: '#EEF4FB', color: '#2F5E8F' }}
                >
                  <MapPin className="w-3 h-3" /> Open in Maps
                </a>
              </div>
              {/* Map height reduced on mobile */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.006286509314!2d79.88778!3d12.82346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f63987654321%3A0x123456789abcdef!2sIndustrial%20Metrology%20Centre!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                className="sm:h-96 lg:h-450"
                style={{ border: 0, display: 'block', height: 'clamp(250px, 40vw, 450px)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

      {/* ── CTS Section ── */}
      <section
        className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-t-2"
        style={{ backgroundColor: 'white', borderColor: '#E5E7EB' }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-2xl p-6 sm:p-10 border-2"
            style={{ backgroundColor: '#F3F4F6', borderColor: '#E5E7EB' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

              {/* Left: Text Content */}
              <div data-aos="fade-right">
                <p
                  className="font-bold uppercase tracking-widest mb-2 sm:mb-3"
                  style={{ color: '#2F5E8F', fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)' }}
                >
                  Not Sure Where to Start?
                </p>
                <h2
                  className="font-black mb-3 sm:mb-4 tracking-tight leading-tight"
                  style={{ color: '#1F2933', fontSize: 'clamp(1.4rem, 4vw, 2.8rem)' }}
                >
                  EXPLORE WHAT<br />
                  <span style={{ color: '#2F5E8F' }}>IMC OFFERS YOU</span>
                </h2>
                <p
                  className="font-light leading-relaxed mb-6 sm:mb-8"
                  style={{ color: '#111827', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
                >
                  Beyond enquiries, IMC provides a full spectrum of NABL-accredited
                  calibration, ISO consultancy, and structured training programs —
                  all tailored to your industry needs.
                </p>

                {/* Stats row */}
                <div className="flex flex-wrap gap-6 sm:gap-10">
                  {[
                    { value: '24hr', label: 'Response Time' },
                    { value: '13+', label: 'Sectors Served' },
                    { value: 'NABL', label: 'Accredited Lab' },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="border-l-4 pl-4"
                      style={{ borderColor: '#2F5E8F' }}
                      data-aos="fade-up"
                      data-aos-delay={i * 100}
                    >
                      <p
                        className="font-black leading-none"
                        style={{ color: '#2F5E8F', fontSize: 'clamp(1.3rem, 3.5vw, 2rem)' }}
                      >
                        {stat.value}
                      </p>
                      <p
                        className="font-semibold mt-1"
                        style={{ color: '#1F2933', fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)' }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Action Card */}
              <div data-aos="fade-left">
                <div
                  className="rounded-2xl p-5 sm:p-7 shadow-md border-t-4"
                  style={{ backgroundColor: 'white', borderColor: '#2F5E8F' }}
                >
                  <h3
                    className="font-black mb-1 tracking-tight"
                    style={{ color: '#1F2933', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)' }}
                  >
                    DISCOVER OUR SERVICES
                  </h3>
                  <p
                    className="font-light mb-4 sm:mb-5"
                    style={{ color: '#111827', fontSize: 'clamp(0.8rem, 1.8vw, 1rem)' }}
                  >
                    From calibration to consultancy — find the right service for your organization.
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {[
                      'Temperature, Pressure, Dimensional & Mass calibration',
                      'NDT instruments calibration',
                      'ISO/IEC 17025 lab setup & NABL accreditation support',
                      'On-site & laboratory calibration across India',
                    ].map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-xs sm:text-sm font-medium"
                        style={{ color: '#1F2933' }}
                      >
                        <span
                          className="font-bold text-base leading-none mt-0.5 shrink-0"
                          style={{ color: '#2F5E8F' }}
                        >
                          ●
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/calibration"
                      className="w-full sm:w-auto flex-1 px-6 py-3 text-white font-bold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                      style={{ backgroundColor: '#2F5E8F' }}
                    >
                      OUR SERVICES
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                    <Link
                      to="/about"
                      className="w-full sm:w-auto flex-1 px-6 py-3 border-2 font-bold rounded-xl transition-all duration-300 text-sm sm:text-base text-center inline-flex items-center justify-center"
                      style={{ borderColor: '#2F5E8F', color: '#2F5E8F' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#2F5E8F';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#2F5E8F';
                      }}
                    >
                      ABOUT US
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* ── End CTS Section ── */}
    </main>
  );
};

export default Enquiry;