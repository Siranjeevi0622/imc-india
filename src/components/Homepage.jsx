import { useState } from "react";

const navLinks = ["Home", "About Us", "Calibration Services", "Accreditation", "Enquiry", "Feedback", "Contact Us"];

const calibrationServices = [
  {
    title: "Mechanical Pressure Calibration",
    items: ["Pressure Gauges", "Pressure Calibrators"],
    color: "from-amber-500 to-orange-600",
    icon: "⟳",
  },
  {
    title: "Temperature Calibration",
    items: ["Temperature Calibrators", "Temperature Sensors"],
    color: "from-red-500 to-rose-600",
    icon: "🌡",
  },
  {
    title: "Mechanical Mass Calibration",
    items: ["Weighing Machine", "Weights/Weight Box"],
    color: "from-stone-500 to-zinc-600",
    icon: "⚖",
  },
];

export default function IMCWebsite() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 font-serif">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Rajdhani:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-ui { font-family: 'Rajdhani', sans-serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes scanline {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        .animate-fade-up { animation: fadeUp 0.8s ease forwards; }
        .animate-fade-up-delay { animation: fadeUp 0.8s ease 0.3s both; }
        .animate-fade-up-delay2 { animation: fadeUp 0.8s ease 0.5s both; }
        .card-hover { transition: all 0.35s cubic-bezier(0.4,0,0.2,1); }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.15); }
        .nav-link { position: relative; }
        .nav-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:2px; background:#d97706; transition: width 0.3s ease; }
        .nav-link:hover::after, .nav-link.active::after { width:100%; }
        .hero-bg { background: linear-gradient(135deg, #1a0a00 0%, #3b1a08 40%, #5c2d0e 70%, #2d1206 100%); }
        .gold-text { background: linear-gradient(90deg, #d4a017, #f5c842, #d4a017); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 3s linear infinite; }
        .section-line { width:60px; height:3px; background:linear-gradient(90deg,#d97706,#f59e0b); border-radius:2px; }
        .glass { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.15); }
        .img-frame { position: relative; }
        .img-frame::before { content:''; position:absolute; inset:0; border:2px solid #d97706; transform:translate(8px,8px); z-index:0; border-radius:4px; }
        .service-card { transition: all 0.3s ease; border-left: 3px solid transparent; }
        .service-card:hover { border-left-color: #d97706; background: #fef3c7; }
      `}</style>

      {/* ── HEADER / NAV ── */}
      <header className="hero-bg sticky top-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-amber-500 flex items-center justify-center">
                <span className="text-amber-400 font-display font-bold text-xl">IMC</span>
              </div>
              <div>
                <div className="font-display text-white font-bold text-lg leading-tight">Industrial Metrology</div>
                <div className="font-ui text-amber-400 text-xs tracking-widest uppercase">Centre</div>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => setActiveNav(link)}
                  className={`nav-link font-ui text-sm tracking-wide transition-colors duration-200 pb-1 ${
                    activeNav === link ? "text-amber-400 active" : "text-stone-300 hover:text-amber-300"
                  }`}
                >
                  {link}
                </button>
              ))}
            </nav>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden text-amber-400 text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Nav */}
          {menuOpen && (
            <div className="lg:hidden pb-4 border-t border-stone-700 pt-3">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => { setActiveNav(link); setMenuOpen(false); }}
                  className="block w-full text-left font-ui text-stone-300 hover:text-amber-400 py-2 px-2 text-sm tracking-wide transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* ── HERO BANNER ── */}
      <section className="hero-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(217,119,6,0.3) 40px,rgba(217,119,6,0.3) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(217,119,6,0.3) 40px,rgba(217,119,6,0.3) 41px)"}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-36 relative z-10 text-center">
          <div className="animate-fade-up">
            <p className="font-ui text-amber-500 tracking-[0.3em] uppercase text-xs mb-4">ISO/IEC 17025:2005 Certified</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
              Industrial <span className="gold-text">Metrology</span> Centre
            </h1>
            <p className="font-ui text-stone-400 text-lg md:text-xl max-w-2xl mx-auto animate-fade-up-delay">
              Precision Calibration. Traceable Standards. Uncompromising Quality.
            </p>
          </div>
          <div className="animate-fade-up-delay2 mt-10 flex flex-wrap gap-4 justify-center">
            <button className="font-ui bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-sm tracking-widest uppercase text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/50">
              Our Services
            </button>
            <button className="font-ui border border-amber-600 text-amber-400 hover:bg-amber-600/20 px-8 py-3 rounded-sm tracking-widest uppercase text-sm font-semibold transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
        {/* Bottom gradient blend */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-stone-50"></div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ── LEFT: WELCOME + SECTORS ── */}
          <div className="lg:col-span-2 space-y-14">

            {/* Welcome Section */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="section-line"></div>
                <h2 className="font-display text-3xl font-bold text-stone-800 tracking-wide">Welcome to IMC</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Image */}
                <div className="img-frame relative">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
                    alt="Industrial facility"
                    className="relative z-10 w-full h-64 object-cover rounded-sm shadow-xl"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80";
                    }}
                  />
                </div>

                {/* Text */}
                <div className="space-y-4">
                  <p className="font-ui text-stone-600 leading-relaxed text-base">
                    <strong className="text-stone-800 font-semibold">Industrial Metrology Centre (IMC)</strong> provides the calibration requirements of various kinds of organizations. The Laboratory is equipped with elite Calibration equipments both Primary and Working / Transfer standards.
                  </p>
                  <p className="font-ui text-stone-600 leading-relaxed text-base">
                    The Calibration uncertainty of these Master Equipments is traceable to National Physical Laboratory (India) & other National recognized accredited laboratories. <strong className="text-stone-800">IMC</strong> is maintaining quality management system as per ISO/IEC 17025:2005.
                  </p>
                  <div className="flex gap-6 pt-2">
                    {["Primary Standards", "Traceable Accuracy", "ISO Certified"].map((badge) => (
                      <div key={badge} className="text-center">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mx-auto mb-1"></div>
                        <p className="font-ui text-xs text-stone-500 leading-tight">{badge}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Our Sectors */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="section-line"></div>
                <h2 className="font-display text-3xl font-bold text-stone-800 tracking-wide">Our Sectors</h2>
              </div>

              <p className="font-ui text-amber-700 font-semibold mb-6 uppercase tracking-wider text-sm">
                IMC provides Calibration services to the following sectors
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "Petroleum & Petrochemical", icon: "🏭" },
                  { name: "Pharmaceutical", icon: "⚗️" },
                  { name: "Automobile", icon: "🔧" },
                  { name: "Food & Beverage", icon: "🌾" },
                  { name: "Power & Energy", icon: "⚡" },
                  { name: "Research & Development", icon: "🔬" },
                ].map((sector) => (
                  <div
                    key={sector.name}
                    className="card-hover flex items-center gap-4 p-4 bg-white border border-stone-200 rounded-sm shadow-sm cursor-default"
                  >
                    <span className="text-2xl">{sector.icon}</span>
                    <span className="font-ui text-stone-700 font-medium">{sector.name}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* ── RIGHT: CALIBRATION SERVICES SIDEBAR ── */}
          <aside className="space-y-4">
            <div className="bg-stone-800 rounded-sm p-5 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-amber-500 rounded-full"></div>
                <h3 className="font-display text-xl font-bold text-white tracking-wide">Calibration Services</h3>
              </div>

              <div className="space-y-5">
                {calibrationServices.map((service) => (
                  <div key={service.title} className="service-card bg-stone-700/50 rounded-sm p-4 transition-all">
                    <h4 className="font-ui font-semibold text-amber-400 text-sm uppercase tracking-wider mb-3">
                      {service.title}
                    </h4>
                    <ul className="space-y-1.5">
                      {service.items.map((item) => (
                        <li key={item} className="font-ui text-stone-300 text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-3 font-ui text-amber-500 hover:text-amber-300 text-xs tracking-wider uppercase transition-colors">
                      Read more →
                    </button>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 pt-5 border-t border-stone-600">
                <p className="font-ui text-stone-400 text-xs mb-3 leading-relaxed">
                  Need calibration services for your industry? Get in touch today.
                </p>
                <button className="w-full bg-amber-600 hover:bg-amber-500 text-white font-ui text-sm tracking-widest uppercase py-2.5 rounded-sm transition-colors font-semibold">
                  Enquire Now
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="hero-bg mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <div className="font-display text-white text-lg font-bold">Industrial Metrology Centre</div>
              <div className="font-ui text-stone-400 text-xs mt-1 tracking-wider">ISO/IEC 17025:2005 Accredited Laboratory</div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {navLinks.map((link) => (
                <button key={link} className="font-ui text-stone-400 hover:text-amber-400 text-xs tracking-wide transition-colors">
                  {link}
                </button>
              ))}
            </div>
          </div>
          <div className="border-t border-stone-700 mt-8 pt-6 text-center">
            <p className="font-ui text-stone-500 text-xs tracking-wide">
              © 2024 Industrial Metrology Centre (IMC). All rights reserved. | imcindia.co
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}