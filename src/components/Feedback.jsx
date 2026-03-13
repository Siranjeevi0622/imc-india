import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Send, CheckCircle, ArrowRight } from 'lucide-react';
import Banner from '../components/Banner';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    fax: '',
    email: '',
    services: 'Excellent',
    contact: 'Excellent',
    response: 'Excellent',
    quotation: 'Excellent',
    value: 'Excellent',
    assistance: 'Excellent',
    completion: 'Excellent',
    manner: 'Excellent',
    report: 'Excellent',
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
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        phone: '',
        fax: '',
        email: '',
        services: 'Excellent',
        contact: 'Excellent',
        response: 'Excellent',
        quotation: 'Excellent',
        value: 'Excellent',
        assistance: 'Excellent',
        completion: 'Excellent',
        manner: 'Excellent',
        report: 'Excellent',
        comments: '',
      });
    }, 2000);
  };

  const ratingFields = [
    { name: 'services', label: 'Range of Services Offered' },
    { name: 'contact', label: 'Ease of Getting Through' },
    { name: 'response', label: 'Speed of Response' },
    { name: 'quotation', label: 'Timeliness of Quotation' },
    { name: 'value', label: 'Value for Money' },
    { name: 'assistance', label: 'Technical Assistance' },
    { name: 'completion', label: 'Completion on Time' },
    { name: 'manner', label: 'Professional Manner' },
    { name: 'report', label: 'Calibration Report Efficiency' },
  ];

  const ratingOptions = ['Excellent', 'Good', 'Average', 'Poor'];

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#F3F4F6' }}>

      {/* Banner */}
      <Banner
        type="feedback"
        title="FEEDBACK"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">

          {/* Left Sidebar */}
          <div data-aos="fade-right">
            <div
              className="rounded-2xl p-5 sm:p-8 lg:sticky lg:top-24"
              style={{ backgroundColor: 'white' }}
            >
              <h1
                className="font-black mb-4 sm:mb-6 tracking-tight"
                style={{ color: '#1F2933', fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}
              >
                Your <span style={{ color: '#2F5E8F' }}>Feedback</span>
              </h1>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div>
                  <p className="text-xs sm:text-sm font-bold mb-2 sm:mb-3" style={{ color: '#000000' }}>
                    WE VALUE YOUR OPINION
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#000000' }}>
                    Your feedback helps us improve our services, calibration activities, and customer experience.
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 border-t-2" style={{ borderColor: '#E5E7EB' }}>
                  <p className="text-xs sm:text-sm font-bold mb-2 sm:mb-3" style={{ color: '#000000' }}>
                    CONFIDENTIALITY
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#000000' }}>
                    No information received will be disclosed to third parties.
                  </p>
                </div>
              </div>

              {submitted && (
                <div
                  className="p-3 sm:p-4 rounded-xl flex items-start gap-3"
                  style={{ backgroundColor: '#D1FAE5' }}
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5" style={{ color: '#059669' }} />
                  <p className="text-xs sm:text-sm font-bold" style={{ color: '#065F46' }}>
                    Thank you! Your feedback has been submitted.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-2" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-8">

              {/* Ratings Section */}
              <div className="rounded-2xl p-5 sm:p-8" style={{ backgroundColor: 'white' }}>
                <h2
                  className="font-bold mb-4 sm:mb-6"
                  style={{ color: '#1F2933', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}
                >
                  Rate Your Experience
                </h2>

                <div className="space-y-4 sm:space-y-5">
                  {ratingFields.map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs sm:text-sm font-bold mb-2 sm:mb-3" style={{ color: '#000000' }}>
                        {field.label}
                      </label>
                      <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
                        {ratingOptions.map((option) => (
                          <label key={option} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name={field.name}
                              value={option}
                              checked={formData[field.name] === option}
                              onChange={handleChange}
                              className="w-4 h-4 cursor-pointer"
                              style={{ accentColor: '#2F5E8F' }}
                            />
                            <span className="text-xs sm:text-sm" style={{ color: '#3F78A8' }}>
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comments Section */}
              <div className="rounded-2xl p-5 sm:p-8" style={{ backgroundColor: 'white' }}>
                <h2
                  className="font-bold mb-4 sm:mb-6"
                  style={{ color: '#1F2933', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}
                >
                  Comments
                </h2>
                <textarea
                  name="comments"
                  placeholder="Please share any additional comments..."
                  value={formData.comments}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 focus:outline-none transition-all resize-none text-sm"
                  style={{ borderColor: '#E5E7EB' }}
                  onFocus={(e) => e.target.style.borderColor = '#2F5E8F'}
                  onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 sm:py-4 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 hover:opacity-90 shadow-lg hover:shadow-xl text-sm sm:text-base"
                style={{ backgroundColor: '#2F5E8F' }}
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                SEND FEEDBACK
              </button>

            </form>
          </div>
        </div>
      </div>

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
                  Looking for Calibration?
                </p>
                <h2
                  className="font-black mb-3 sm:mb-4 tracking-tight leading-tight"
                  style={{ color: '#1F2933', fontSize: 'clamp(1.4rem, 4vw, 2.8rem)' }}
                >
                  ALREADY A<br />
                  <span style={{ color: '#2F5E8F' }}>SATISFIED CLIENT?</span>
                </h2>
                <p
                  className="font-light leading-relaxed mb-6 sm:mb-8"
                  style={{ color: '#111827', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
                >
                  Thank you for taking the time to share your experience. If you'd like
                  to continue working with us or explore more of our calibration and
                  consultancy services, we're ready to help.
                </p>

                {/* Stats row */}
                <div className="flex flex-wrap gap-6 sm:gap-10">
                  {[
                    { value: '100%', label: 'Confidential Feedback' },
                    { value: 'NABL', label: 'Accredited Services' },
                    { value: '2012', label: 'Serving Since' },
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
                    WORK WITH US AGAIN
                  </h3>
                  <p
                    className="font-light mb-4 sm:mb-5"
                    style={{ color: '#111827', fontSize: 'clamp(0.8rem, 1.8vw, 1rem)' }}
                  >
                    Reach out for your next calibration, training, or consultancy requirement.
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {[
                      'On-site & laboratory calibration available',
                      'Consultancy for ISO/IEC 17025 & NABL accreditation',
                      'Training programs for technicians & lab managers',
                      'Quick turnaround for emergency requirements',
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
                      to="/enquiry"
                      className="w-full sm:w-auto flex-1 px-6 py-3 text-white font-bold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                      style={{ backgroundColor: '#2F5E8F' }}
                    >
                      ENQUIRE NOW
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                    <Link
                      to="/calibration"
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
                      OUR SERVICES
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

export default Feedback;