import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MapPin, Phone, Mail, Globe, Send, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
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
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: [
        'Industrial Metrology Centre,',
        '36, 1st Floor, J.M. Solanki Complex,',
        'Ahamed Mohideen Street,',
        'Sriperumbudur - 602 105,',
        'Kanchipuram Dist.,',
        'Tamil Nadu, India',
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
      details: [
        'info@imcindia.co',
      ],
    },
    {
      icon: Globe,
      title: 'Website',
      details: [
        'www.imcindia.co',
      ],
    },
  ];

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#F3F4F6' }}>
      {/* Hero Section */}
      <section className="relative w-full py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#1F2933' }}>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10 rounded-full blur-3xl" style={{ backgroundColor: '#2F5E8F' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10 rounded-full blur-3xl" style={{ backgroundColor: '#7FB7B1' }} />

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-2xl" data-aos="fade-right">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              Get in <span style={{ color: '#7FB7B1' }}>Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              Have questions about our calibration services? We're here to help. Reach out to our expert team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={info.title}
                  className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: 'white' }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-lg shrink-0" style={{ backgroundColor: '#F0F4F8' }}>
                      <IconComponent className="w-6 h-6" style={{ color: '#2F5E8F' }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: '#1F2933' }}>
                        {info.title}
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm" style={{ color: '#3F78A8' }}>
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <div className="rounded-2xl shadow-lg p-8 lg:p-12" style={{ backgroundColor: 'white' }}>
                <h2 className="text-3xl md:text-4xl font-black mb-2 tracking-tight" style={{ color: '#1F2933' }}>
                  Send us a <span style={{ color: '#2F5E8F' }}>Message</span>
                </h2>
                <p className="font-light mb-8" style={{ color: '#3F78A8' }}>
                  Fill out the form below and we'll respond as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2" style={{ color: '#1F2933' }}>
                      Full Name <span style={{ color: '#E53E3E' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all"
                      style={{ borderColor: '#E5E7EB' }}
                      onFocus={(e) => e.target.style.borderColor = '#2F5E8F'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all"
                        style={{ borderColor: '#E5E7EB' }}
                        onFocus={(e) => e.target.style.borderColor = '#2F5E8F'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                        placeholder="Enter your email"
                      />
                    </div>
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
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all"
                        style={{ borderColor: '#E5E7EB' }}
                        onFocus={(e) => e.target.style.borderColor = '#2F5E8F'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                        placeholder="Enter your phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2" style={{ color: '#1F2933' }}>
                      Subject <span style={{ color: '#E53E3E' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all"
                      style={{ borderColor: '#E5E7EB' }}
                      onFocus={(e) => e.target.style.borderColor = '#2F5E8F'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2" style={{ color: '#1F2933' }}>
                      Message <span style={{ color: '#E53E3E' }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all resize-none"
                      style={{ borderColor: '#E5E7EB' }}
                      onFocus={(e) => e.target.style.borderColor = '#2F5E8F'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white px-8 py-4 rounded-lg transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:opacity-90"
                    style={{ backgroundColor: '#2F5E8F' }}
                  >
                    <Send className="w-5 h-5" />
                    SEND MESSAGE
                  </button>

                  {submitted && (
                    <div className="p-4 rounded-lg text-white font-semibold text-center" style={{ backgroundColor: '#10B981' }}>
                      ✓ Thank you! We'll get back to you soon.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Info Cards */}
            <div data-aos="fade-left" className="space-y-6">
              {/* Business Hours */}
              <div className="rounded-2xl shadow-lg p-8" style={{ backgroundColor: 'white' }}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg shrink-0" style={{ backgroundColor: '#F0F4F8' }}>
                    <Clock className="w-6 h-6" style={{ color: '#2F5E8F' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: '#1F2933' }}>
                      Business Hours
                    </h3>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-bold" style={{ color: '#1F2933' }}>Monday - Friday</p>
                    <p style={{ color: '#3F78A8' }}>9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-bold" style={{ color: '#1F2933' }}>Saturday</p>
                    <p style={{ color: '#3F78A8' }}>10:00 AM - 2:00 PM</p>
                  </div>
                  <div>
                    <p className="font-bold" style={{ color: '#1F2933' }}>Sunday</p>
                    <p style={{ color: '#3F78A8' }}>Closed</p>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="rounded-2xl shadow-lg p-8" style={{ backgroundColor: '#F0F4F8', border: '2px solid #E0E9F5' }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg shrink-0" style={{ backgroundColor: 'white' }}>
                    <MessageSquare className="w-6 h-6" style={{ color: '#2F5E8F' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: '#1F2933' }}>
                      Quick Response
                    </h3>
                  </div>
                </div>
                <p className="font-light text-sm" style={{ color: '#3F78A8' }}>
                  We typically respond to inquiries within 24 hours during business days. For urgent matters, please call us directly.
                </p>
              </div>

              {/* Services Info */}
              <div className="rounded-2xl shadow-lg p-8" style={{ backgroundColor: 'white' }}>
                <h3 className="text-lg font-bold mb-4" style={{ color: '#1F2933' }}>
                  Services Offered
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span style={{ color: '#2F5E8F' }} className="font-bold mt-1">✓</span>
                    <span style={{ color: '#3F78A8' }} className="text-sm">Calibration Services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span style={{ color: '#2F5E8F' }} className="font-bold mt-1">✓</span>
                    <span style={{ color: '#3F78A8' }} className="text-sm">Consultancy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span style={{ color: '#2F5E8F' }} className="font-bold mt-1">✓</span>
                    <span style={{ color: '#3F78A8' }} className="text-sm">Training Programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span style={{ color: '#2F5E8F' }} className="font-bold mt-1">✓</span>
                    <span style={{ color: '#3F78A8' }} className="text-sm">NABL Accreditation Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto" data-aos="zoom-in">
          <h2 className="text-3xl font-black mb-8 text-center tracking-tight" style={{ color: '#1F2933' }}>
            Find Us on the <span style={{ color: '#2F5E8F' }}>Map</span>
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.006286509314!2d79.88778!3d12.82346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f63987654321%3A0x123456789abcdef!2sIndustrial%20Metrology%20Centre!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

     
    </main>
  );
};

export default Contact;