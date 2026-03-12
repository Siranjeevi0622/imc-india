import React, { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "919498071405"; // Replace with your number (country code + number, no +)
const WHATSAPP_MESSAGE = "Hello, I'd like to enquire about IMC calibration services.";

const Clicktotop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollPercent(percent);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank");
  };

  // SVG circle progress params
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <>
      <style>{`

        /* ── Scroll To Top ── */
        .stt-btn {
          position: fixed;
          bottom: 32px;
          right: 32px;
          width: 56px;
          height: 56px;
          cursor: pointer;
          border: none;
          background: transparent;
          padding: 0;
          z-index: 1000;
          opacity: 0;
          transform: translateY(20px) scale(0.8);
          transition: opacity 0.35s ease, transform 0.35s ease;
          pointer-events: none;
        }

        .stt-btn.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: all;
        }

        .stt-inner {
          position: relative;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stt-bg {
          position: absolute;
          inset: 6px;
          border-radius: 50%;
          background-color: #1F2933;
          transition: background-color 0.2s ease, transform 0.2s ease;
          box-shadow: 0 4px 16px rgba(0,0,0,0.35);
        }

        .stt-btn:hover .stt-bg {
          background-color: #2F5E8F;
          transform: scale(1.05);
        }

        .stt-svg {
          position: absolute;
          inset: 0;
          transform: rotate(-90deg);
        }

        .stt-track {
          stroke: #374151;
          fill: none;
          stroke-width: 2.5;
        }

        .stt-progress {
          stroke: #2F5E8F;
          fill: none;
          stroke-width: 2.5;
          stroke-linecap: round;
          transition: stroke-dashoffset 0.1s linear;
        }

        .stt-btn:hover .stt-progress {
          stroke: #7FB7B1;
        }

        .stt-arrow {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: transform 0.2s ease;
        }

        .stt-btn:hover .stt-arrow {
          transform: translateY(-2px);
        }

        .stt-tooltip {
          position: absolute;
          right: 64px;
          top: 50%;
          transform: translateY(-50%);
          background: #1F2933;
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 5px 10px;
          border-radius: 3px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease;
          border-left: 2px solid #2F5E8F;
        }

        .stt-btn:hover .stt-tooltip {
          opacity: 1;
        }

        /* ── WhatsApp Button ── */
        .wa-btn {
          position: fixed;
          bottom: 100px;
          right: 32px;
          width: 56px;
          height: 56px;
          cursor: pointer;
          border: none;
          background: transparent;
          padding: 0;
          z-index: 1000;
        }

        .wa-inner {
          position: relative;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wa-pulse {
          position: absolute;
          inset: 6px;
          border-radius: 50%;
          background-color: #25D366;
          opacity: 0.4;
          animation: wa-pulse-anim 2s ease-out infinite;
        }

        @keyframes wa-pulse-anim {
          0%   { transform: scale(1);   opacity: 0.4; }
          70%  { transform: scale(1.6); opacity: 0;   }
          100% { transform: scale(1.6); opacity: 0;   }
        }

        .wa-bg {
          position: absolute;
          inset: 6px;
          border-radius: 50%;
          background-color: #25D366;
          transition: background-color 0.2s ease, transform 0.2s ease;
          box-shadow: 0 4px 16px rgba(37,211,102,0.45);
        }

        .wa-btn:hover .wa-bg {
          background-color: #1ebe5d;
          transform: scale(1.08);
        }

        .wa-icon {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .wa-btn:hover .wa-icon {
          transform: scale(1.1);
        }

        .wa-tooltip {
          position: absolute;
          right: 64px;
          top: 50%;
          transform: translateY(-50%);
          background: #1F2933;
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 5px 10px;
          border-radius: 3px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease;
          border-left: 2px solid #25D366;
        }

        .wa-btn:hover .wa-tooltip {
          opacity: 1;
        }

        /* ── Mobile adjustments ── */
        @media (max-width: 640px) {
          .stt-btn {
            bottom: 20px;
            right: 20px;
          }
          .wa-btn {
            bottom: 88px;
            right: 20px;
          }
          .stt-tooltip,
          .wa-tooltip {
            display: none;
          }
        }
      `}</style>

      {/* WhatsApp Button — always visible */}
      <button
        className="wa-btn"
        onClick={handleWhatsApp}
        aria-label="Chat on WhatsApp"
      >
        <div className="wa-inner">
          <div className="wa-pulse" />
          <div className="wa-bg" />
          <span className="wa-icon">
            <svg width="26" height="26" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.613 4.613 1.773 6.613L2.667 29.333l6.907-1.747A13.253 13.253 0 0016.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 24c-2.053 0-4.067-.547-5.827-1.587l-.413-.24-4.107 1.04 1.08-3.973-.267-.427A10.613 10.613 0 015.333 16c0-5.88 4.787-10.667 10.667-10.667S26.667 10.12 26.667 16 21.88 26.667 16.004 26.667zm5.853-7.973c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-.987 1.253-.173.213-.347.24-.667.08-.32-.16-1.347-.493-2.56-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.013-.493.147-.653.147-.133.32-.347.48-.52.16-.173.213-.293.32-.507.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.253-.613-.52-.533-.72-.547-.187-.013-.4-.013-.613-.013s-.56.08-.853.4c-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.253 3.44 5.467 4.827.76.333 1.36.533 1.827.68.76.24 1.453.2 2 .12.613-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z"/>
            </svg>
          </span>
          <span className="wa-tooltip">WhatsApp</span>
        </div>
      </button>

      {/* Scroll To Top Button — visible after 300px scroll */}
      <button
        className={`stt-btn${isVisible ? " visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <div className="stt-inner">
          <svg className="stt-svg" width="56" height="56" viewBox="0 0 56 56">
            <circle className="stt-track" cx="28" cy="28" r={radius} />
            <circle
              className="stt-progress"
              cx="28"
              cy="28"
              r={radius}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
          <div className="stt-bg" />
          <span className="stt-arrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 13V3M8 3L3 8M8 3L13 8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="stt-tooltip">Top</span>
        </div>
      </button>
    </>
  );
};

export default Clicktotop;