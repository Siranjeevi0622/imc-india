import { useState } from "react";

const AdobeLogo = () => (
  <svg width="84" height="34" viewBox="0 0 84 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="26" fontFamily="'Adobe Clean', Georgia, serif" fontSize="28" fontWeight="700" fill="#FA0F00">Adobe</text>
  </svg>
);

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2 flex-shrink-0">
    <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#FA0F00" />
    <path d="M19 16L19.75 19.25L23 20L19.75 20.75L19 24L18.25 20.75L15 20L18.25 19.25L19 16Z" fill="#FA0F00" opacity="0.6" />
    <path d="M5 3L5.5 5.5L8 6L5.5 6.5L5 9L4.5 6.5L2 6L4.5 5.5L5 3Z" fill="#FA0F00" opacity="0.6" />
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 2L11 13" stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChatIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const NavDropdown = ({ label }) => (
  <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 transition-colors py-2 px-1">
    {label}
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
);

const suggestions = [
  { text: "Which apps can help me combine, retouch, and remix my photos?" },
  { text: "How can I generate and edit videos for social?" },
  { text: "How can I create and edit PDFs?" },
  { text: "What are Adobe's solutions for businesses?" },
];

const products = [
  {
    name: "Acrobat",
    color: "#FF0000",
    bg: "bg-red-50",
    icon: "📄",
    desc: "Create, edit, sign, and share PDFs.",
    badge: "Most popular",
  },
  {
    name: "Photoshop",
    color: "#31A8FF",
    bg: "bg-blue-50",
    icon: "🖼",
    desc: "Edit photos, create composites, and more.",
    badge: null,
  },
  {
    name: "Illustrator",
    color: "#FF9A00",
    bg: "bg-orange-50",
    icon: "✏️",
    desc: "Create logos, icons, and illustrations.",
    badge: null,
  },
  {
    name: "Premiere Pro",
    color: "#9999FF",
    bg: "bg-purple-50",
    icon: "🎬",
    desc: "Edit and produce stunning video content.",
    badge: null,
  },
];

export default function AdobeFlashEOLPage() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans" style={{ fontFamily: "'Adobe Clean', 'Source Sans Pro', Georgia, sans-serif" }}>

      {/* ── Top Nav ── */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <span className="text-3xl font-black tracking-tight" style={{ color: "#FA0F00", fontFamily: "Georgia, serif", letterSpacing: "-1px" }}>
              Adobe
            </span>
            <nav className="hidden md:flex items-center gap-1">
              <NavDropdown label="Creativity & Design" />
              <NavDropdown label="PDF & E-signatures" />
              <NavDropdown label="Marketing & Commerce" />
              <NavDropdown label="Learn & Support" />
            </nav>
          </div>
          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:block text-sm text-gray-600 hover:text-gray-900 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="inline"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/><path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
            <button className="hidden md:block p-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="#555" strokeWidth="2"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="#555" strokeWidth="2"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="#555" strokeWidth="2"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="#555" strokeWidth="2"/></svg>
            </button>
            <button
              className="px-4 py-1.5 rounded-full border border-gray-800 text-sm font-semibold text-gray-800 hover:bg-gray-900 hover:text-white transition-all"
            >
              Sign in
            </button>
          </div>
        </div>
      </header>

      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center gap-1 text-xs text-gray-500">
          <a href="#" className="hover:underline">Home</a>
          <span>/</span>
          <a href="#" className="hover:underline">Adobe Creative Cloud</a>
          <span>/</span>
          <a href="#" className="hover:underline">Adobe Flash Player</a>
          <span>/</span>
          <span className="text-gray-800 font-medium">End Of Life Info</span>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #e8eaf6 0%, #fce4ec 30%, #fff3e0 60%, #fbe9e7 100%)",
          minHeight: "520px",
        }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #FA0F00 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-64 rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-10"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif", letterSpacing: "-0.5px" }}>
            Find the right app to bring<br />your ideas to life.
          </h1>

          {/* Search bar */}
          <div
            className={`w-full max-w-2xl flex items-center gap-3 px-5 py-3 rounded-full bg-white transition-all duration-200 ${focused ? "shadow-lg ring-2 ring-red-300" : "shadow-md"}`}
          >
            <SparkleIcon />
            <input
              type="text"
              placeholder="Ask a question"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="flex-1 text-base text-gray-700 bg-transparent outline-none placeholder-gray-400"
            />
            <button className="hover:opacity-70 transition-opacity">
              <SendIcon />
            </button>
          </div>

          {/* Suggestion chips */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => setQuery(s.text)}
                className="flex items-center text-sm text-gray-700 bg-white bg-opacity-80 hover:bg-opacity-100 border border-gray-200 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all duration-150 text-left"
              >
                <SparkleIcon />
                <span>{s.text}</span>
              </button>
            ))}
          </div>

          {/* AI disclaimer */}
          <p className="mt-6 text-xs text-gray-500 max-w-lg leading-relaxed">
            Use of this beta AI chatbot is subject to Adobe's{" "}
            <a href="#" className="underline hover:text-gray-700">Privacy Policy</a>. Don't share sensitive data.{" "}
            AI responses are not your Content, may be inaccurate and any offers provided are non-binding.{" "}
            <a href="#" className="underline hover:text-gray-700">Generative AI Terms</a>.
          </p>
        </div>
      </section>

      {/* ── Flash Retirement Banner ── */}
      <div className="bg-gray-900 text-white py-4 px-6 text-center text-sm">
        <span className="text-gray-300">
          We have retired Flash. Support for Flash ended on December 31, 2020.{" "}
        </span>
        <a href="#" className="underline text-white font-medium hover:text-red-400 transition-colors">
          Find out more
        </a>
      </div>

      {/* ── Products Section ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12"
            style={{ fontFamily: "Georgia, serif" }}>
            You might be interested in trying a different Adobe product.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <div
                key={i}
                className={`rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group ${p.bg}`}
              >
                <div className="text-4xl mb-3">{p.icon}</div>
                {p.badge && (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full mb-2 inline-block"
                    style={{ background: "#FA0F00", color: "white" }}>
                    {p.badge}
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-1">{p.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{p.desc}</p>
                <a
                  href="#"
                  className="text-sm font-semibold transition-colors group-hover:underline"
                  style={{ color: p.color }}
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-gray-400 text-xs py-8 px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-2xl font-black text-white" style={{ fontFamily: "Georgia, serif" }}>Adobe</span>
          <div className="flex flex-wrap gap-4 justify-center">
            {["Privacy Policy", "Terms of Use", "Cookie Preferences", "Do not sell my personal information", "AdChoices"].map((link) => (
              <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
            ))}
          </div>
          <span>Copyright © 2024 Adobe. All rights reserved.</span>
        </div>
      </footer>

      {/* ── Floating Chat Button ── */}
      <button
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform z-50"
        style={{ background: "#FA0F00" }}
      >
        <ChatIcon />
      </button>
    </div>
  );
}
