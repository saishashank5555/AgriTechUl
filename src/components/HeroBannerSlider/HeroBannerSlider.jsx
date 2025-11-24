// src/components/HeroBannerSlider.jsx
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import b1 from "../assets/banners/b1.jpg";
import b2 from "../assets/banners/b2.jpeg";
import b3 from "../assets/banners/b3.jpg";

export default function HeroBannerSlider() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const fadeRef = useRef(false);
  const timerRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "Quality Vegetable Seeds",
      subtitle: "Premium seeds for high yield and rapid germination.",
      stats: [
        "95%+ Lab-tested germination rate",
        "High-yield seed varieties",
        "Perfect for all farming types",
      ],
      image: b1,
      to: "/category/vegetable-seeds",
      buyLabel: "Shop Seeds",
      infoLabel: "Learn More",
      infoTo: "/HeroBannerSlider/vegetable-seeds-info",
    },
    {
      id: 2,
      title: "Organic Fertilizers",
      subtitle: "Boost your soil naturally with organic nutrients.",
      stats: [
        "100% natural ingredients",
        "Improves soil structure",
        "Better nutrient absorption",
      ],
      image: b2,
      to: "/category/fertilizers",
      buyLabel: "Shop Fertilizers",
      infoLabel: "Know More",
      infoTo: "/HeroBannerSlider/fertilizers-info",
    },
    {
      id: 3,
      title: "Farm Machinery & Tools",
      subtitle: "Modern equipment designed for smart farming.",
      stats: [
        "Fuel-efficient machinery",
        "High durability & performance",
        "Trusted by farmers across India",
      ],
      image: b3,
      to: "/category/farm-machinery",
      buyLabel: "Shop Machinery",
      infoLabel: "Explore Tools",
      infoTo: "/HeroBannerSlider/machinery-info",
    },
  ];

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    timerRef.current = setInterval(() => goNext(), 6000);
  };

  const stopAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const goNext = () => {
    fadeRef.current = true;
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      fadeRef.current = false;
    }, 300);
  };

  const goPrev = () => {
    fadeRef.current = true;
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
      fadeRef.current = false;
    }, 300);
  };

  const selectSlide = (i) => {
    fadeRef.current = true;
    setTimeout(() => {
      setIndex(i);
      fadeRef.current = false;
    }, 300);
  };

  let startX = 0;
  const onTouchStart = (e) => (startX = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (diff > 50) goNext();
    if (diff < -50) goPrev();
  };

  const slide = slides[index];

  return (
    <section
      className="agri-hero"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className={`agri-wrapper ${fadeRef.current ? "fade" : ""}`}>
        <div className="agri-left">
          <h1 className="agri-title">{slide.title}</h1>
          <p className="agri-subtitle">{slide.subtitle}</p>

          <ul className="agri-stats">
            {slide.stats.map((s, i) => (
              <li key={i}>
                <span className="check">✔</span> {s}
              </li>
            ))}
          </ul>

          <div className="agri-buttons">
            <button className="primary-btn" onClick={() => navigate(slide.to)}>
              {slide.buyLabel}
            </button>

            {/* Updated Info Button */}
            <button className="secondary-btn" onClick={() => navigate(slide.infoTo)}>
              {slide.infoLabel}
            </button>
          </div>
        </div>

        <div className="agri-right">
          <img src={slide.image} alt={slide.title} loading="lazy" />
        </div>
      </div>

      {/* CENTERED DOTS */}
      <div className="agri-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => selectSlide(i)}
          />
        ))}
      </div>

      <style>{`
        .agri-hero {
          padding: 55px 20px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          overflow-x: hidden;
        }

        .agri-wrapper {
          max-width: 1250px;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 45px;
          transition: opacity .35s ease;
        }
        .fade { opacity: .2; }

        .agri-left { flex: 1; }
        .agri-title {
          font-size: 40px;
          font-weight: 800;
          color: #14532d;
          margin-bottom: 10px;
        }
        .agri-subtitle {
          font-size: 17px;
          color: #475569;
          margin-bottom: 18px;
        }

        .agri-stats {
          list-style: none;
          padding: 0;
          margin: 0 0 22px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .check { color: #16a34a; margin-right: 6px; }

        .agri-buttons {
          display: flex;
          gap: 12px;
        }
        .primary-btn {
          background: linear-gradient(135deg,#28a745,#166534);
          padding: 12px 26px;
          border-radius: 8px;
          color: white;
          font-weight: 700;
          border: none;
        }
        .secondary-btn {
          border: 2px solid #22863a;
          padding: 12px 26px;
          border-radius: 8px;
          background: white;
          font-weight: 700;
          color: #14532d;
        }

        .agri-right {
          width: 48%;
          height: 360px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }
        .agri-right img { width: 100%; height: 100%; object-fit: cover; }

        .agri-dots {
          margin-top: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }
        .dot {
          width: 12px;
          height: 12px;
          background: #cbd5e1;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          transition: 0.3s;
        }
        .dot.active {
          background: #1b7a34;
          transform: scale(1.3);
        }

        @media (max-width: 930px) {
          .agri-wrapper {
            flex-direction: column-reverse;
            text-align: center;
          }
          .agri-right { width: 95%; height: 240px; }
        }
        @media (max-width: 480px) {
          .agri-title { font-size: 26px; }
          .agri-right { height: 200px; }
        }

        * { box-sizing: border-box; }
        html, body { overflow-x: hidden; }
      `}</style>
    </section>
  );
}
