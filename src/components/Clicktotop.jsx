import React, { useState, useEffect } from "react";

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

  // SVG circle progress params
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <>
      <style>{`
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

        /* Dark filled circle background */
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

        /* Progress ring SVG */
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

        /* Arrow icon */
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

        /* Tooltip */
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

        @media (max-width: 640px) {
          .stt-btn {
            bottom: 20px;
            right: 20px;
          }
          .stt-tooltip {
            display: none;
          }
        }
      `}</style>

      <button
        className={`stt-btn${isVisible ? " visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <div className="stt-inner">
          {/* Progress ring */}
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

          {/* Dark bg circle */}
          <div className="stt-bg" />

          {/* Arrow */}
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

          {/* Tooltip */}
          <span className="stt-tooltip">Top</span>
        </div>
      </button>
    </>
  );
};

export default Clicktotop;