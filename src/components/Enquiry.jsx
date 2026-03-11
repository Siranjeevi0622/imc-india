import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MapPin, Phone, Mail, Globe, Send, Clock, MessageSquare } from 'lucide-react';
import Banner from '../components/Banner';

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

  const inputClass = "w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 text-sm bg-white";
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
      <Banner
        type="contact"
        title="Contact & Enquiry"
        // subtitle="Get in touch with our expert team or request calibration services."
        // badge="WE'RE HERE TO HELP"
      />

      {/* Main Content */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* 3-column layout: Form | Contact Info | Map */}
          <div className="grid lg:grid-cols-5 gap-8">

            {/* LEFT: Form with tabs (spans 2 cols) */}
            <div className="lg:col-span-2" data-aos="fade-right">
              <div className="rounded-2xl shadow-lg overflow-hidden" style={{ backgroundColor: 'white', border: '1px solid #E5E7EB' }}>

                {/* Tab Switcher */}
                <div className="grid grid-cols-2">
                  <button
                    onClick={() => setActiveTab('enquiry')}
                    className="py-4 text-sm font-bold transition-all duration-300"
                    style={{
                      backgroundColor: activeTab === 'enquiry' ? '#2F5E8F' : '#F3F4F6',
                      color: activeTab === 'enquiry' ? 'white' : '#3F78A8',
                    }}
                  >
                    Calibration Enquiry
                  </button>
                  <button
                    onClick={() => setActiveTab('contact')}
                    className="py-4 text-sm font-bold transition-all duration-300"
                    style={{
                      backgroundColor: activeTab === 'contact' ? '#2F5E8F' : '#F3F4F6',
                      color: activeTab === 'contact' ? 'white' : '#3F78A8',
                    }}
                  >
                    Send a Message
                  </button>
                </div>

                <div className="p-8">
                  {/* Enquiry Form */}
                  {activeTab === 'enquiry' && (
                    <form onSubmit={handleEnquirySubmit} className="space-y-4">
                      <h2 className="text-2xl font-black mb-1 tracking-tight" style={{ color: '#1F2933' }}>
                        Request Calibration
                      </h2>
                      <p className="text-sm font-light mb-4" style={{ color: '#3F78A8' }}>
                        Fill out the details and we'll respond promptly.
                      </p>

                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" name="companyName" value={enquiryData.companyName} onChange={handleEnquiryChange} required placeholder="Company Name *" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                        <input type="text" name="contactPerson" value={enquiryData.contactPerson} onChange={handleEnquiryChange} required placeholder="Contact Person *" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>

                      <input type="text" name="address" value={enquiryData.address} onChange={handleEnquiryChange} required placeholder="Address *" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />

                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" name="designation" value={enquiryData.designation} onChange={handleEnquiryChange} required placeholder="Designation *" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                        <input type="email" name="email" value={enquiryData.email} onChange={handleEnquiryChange} required placeholder="Email *" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <input type="tel" name="phone" value={enquiryData.phone} onChange={handleEnquiryChange} required placeholder="Phone *" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                        <input type="text" name="fax" value={enquiryData.fax} onChange={handleEnquiryChange} placeholder="Fax" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>

                      {/* Place of Calibration */}
                      <div>
                        <label className="block text-sm font-bold mb-3" style={{ color: '#1F2933' }}>Place of Calibration *</label>
                        <div className="flex gap-6">
                          {['Site', 'Lab', 'Both'].map((option) => (
                            <label key={option} className="flex items-center gap-2 cursor-pointer">
                              <input type="radio" name="placeOfCalibration" value={option} checked={enquiryData.placeOfCalibration === option} onChange={handleEnquiryChange} className="w-4 h-4" style={{ accentColor: '#2F5E8F' }} />
                              <span className="text-sm font-medium" style={{ color: '#3F78A8' }}>{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <textarea name="instruments" value={enquiryData.instruments} onChange={handleEnquiryChange} required rows="3" placeholder="Instruments to be calibrated *" className={`${inputClass} resize-none`} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      <textarea name="comments" value={enquiryData.comments} onChange={handleEnquiryChange} required rows="3" placeholder="Additional comments *" className={`${inputClass} resize-none`} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />

                      <button type="submit" className="w-full py-4 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 hover:opacity-90 shadow-lg" style={{ backgroundColor: '#FF6B35' }}>
                        <Send className="w-4 h-4" /> SEND ENQUIRY
                      </button>

                      {enquirySubmitted && (
                        <div className="p-4 rounded-lg text-white font-semibold text-center text-sm" style={{ backgroundColor: '#10B981' }}>
                          ✓ Enquiry submitted! We'll get back to you soon.
                        </div>
                      )}
                    </form>
                  )}

                  {/* Contact Form */}
                  {activeTab === 'contact' && (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <h2 className="text-2xl font-black mb-1 tracking-tight" style={{ color: '#1F2933' }}>
                        Get in Touch
                      </h2>
                      <p className="text-sm font-light mb-4" style={{ color: '#3F78A8' }}>
                        Have a question? We'll respond within 24 hours.
                      </p>

                      <input type="text" name="name" value={contactData.name} onChange={handleContactChange} required placeholder="Full Name *" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />

                      <div className="grid grid-cols-2 gap-4">
                        <input type="email" name="email" value={contactData.email} onChange={handleContactChange} required placeholder="Email *" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                        <input type="tel" name="phone" value={contactData.phone} onChange={handleContactChange} required placeholder="Phone *" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>

                      <input type="text" name="subject" value={contactData.subject} onChange={handleContactChange} required placeholder="Subject *" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      <textarea name="message" value={contactData.message} onChange={handleContactChange} required rows="5" placeholder="Your message *" className={`${inputClass} resize-none`} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />

                      <button type="submit" className="w-full py-4 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 hover:opacity-90 shadow-lg" style={{ backgroundColor: '#FF6B35' }}>
                        <Send className="w-4 h-4" /> SEND MESSAGE
                      </button>

                      {contactSubmitted && (
                        <div className="p-4 rounded-lg text-white font-semibold text-center text-sm" style={{ backgroundColor: '#10B981' }}>
                          ✓ Message sent! We'll get back to you soon.
                        </div>
                      )}
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* MIDDLE: Contact Info (spans 1 col) */}
            <div className="lg:col-span-1" data-aos="fade-up">
              <div className="rounded-2xl shadow-lg p-6 h-full" style={{ backgroundColor: 'white', border: '1px solid #E5E7EB' }}>
                <h3 className="text-xl font-black mb-6 tracking-tight" style={{ color: '#1F2933' }}>
                  Our <span style={{ color: '#2F5E8F' }}>Details</span>
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <div key={info.title} className="flex items-start gap-3 pb-5 border-b last:border-b-0" style={{ borderColor: '#F3F4F6' }}>
                        <div className="p-2 rounded-lg shrink-0 mt-0.5" style={{ backgroundColor: '#EEF4FB' }}>
                          <Icon className="w-4 h-4" style={{ color: '#2F5E8F' }} />
                        </div>
                        <div>
                          <p className="text-xs font-bold mb-1 uppercase tracking-wide" style={{ color: '#2F5E8F' }}>{info.title}</p>
                          {info.details.map((d, i) => (
                            <p key={i} className="text-xs leading-relaxed" style={{ color: '#3F78A8' }}>{d}</p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Business Hours */}
                <div className="mt-6 pt-6 border-t-2" style={{ borderColor: '#F3F4F6' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4" style={{ color: '#2F5E8F' }} />
                    <p className="text-xs font-bold uppercase tracking-wide" style={{ color: '#2F5E8F' }}>Business Hours</p>
                  </div>
                  <div className="space-y-2 text-xs" style={{ color: '#3F78A8' }}>
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
                <div className="mt-6 pt-6 border-t-2" style={{ borderColor: '#F3F4F6' }}>
                  <p className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: '#2F5E8F' }}>Why Choose IMC?</p>
                  <ul className="space-y-2">
                    {['ISO/IEC 17025 Certified', 'Fast Turnaround Time', 'Expert Team', 'Competitive Pricing'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs" style={{ color: '#3F78A8' }}>
                        <span className="font-bold text-base" style={{ color: '#FF6B35' }}>✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT: Map (spans 2 cols) */}
            <div className="lg:col-span-2" data-aos="fade-left">
              <div className="rounded-2xl shadow-lg overflow-hidden h-full" style={{ border: '1px solid #E5E7EB', minHeight: '500px' }}>
                <div className="px-6 py-4 flex items-center justify-between" style={{ backgroundColor: 'white', borderBottom: '1px solid #E5E7EB' }}>
                  <h3 className="text-lg font-black tracking-tight" style={{ color: '#1F2933' }}>
                    Find Us on the <span style={{ color: '#2F5E8F' }}>Map</span>
                  </h3>
                  <a
                    href="https://maps.google.com/?q=Sriperumbudur,Kanchipuram,Tamil+Nadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold px-3 py-1.5 rounded-lg transition-all hover:opacity-80 flex items-center gap-1"
                    style={{ backgroundColor: '#EEF4FB', color: '#2F5E8F' }}
                  >
                    <MapPin className="w-3 h-3" /> Open in Maps
                  </a>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.006286509314!2d79.88778!3d12.82346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f63987654321%3A0x123456789abcdef!2sIndustrial%20Metrology%20Centre!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '460px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Enquiry;