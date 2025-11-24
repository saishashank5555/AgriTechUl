import React from "react";
import { useNavigate } from "react-router-dom";
import b3 from "../assets/banners/b3.jpg";

export default function MachineryInfo() {
  const navigate = useNavigate();

  return (
    <div className="info-page">
      <img src={b3} className="info-banner" alt="Farm Machinery" />

      <div className="info-content">
        <h1>Farm Machinery & Tools</h1>
        <p className="tagline">Modern tools for modern farming.</p>

        <h2>⚙️ Why Choose Our Machinery?</h2>
        <ul>
          <li>✔ Fuel-efficient and powerful</li>
          <li>✔ Long-lasting durability</li>
          <li>✔ Perfect for small and large farms</li>
          <li>✔ Easy maintenance and spare parts support</li>
          <li>✔ Trusted by 20,000+ farmers</li>
        </ul>

        <h2>🔧 Features & Advantages</h2>
        <ul>
          <li>🚜 Advanced engineering design</li>
          <li>🔩 Premium quality materials</li>
          <li>🎯 High performance for tough conditions</li>
          <li>⏳ Long operational life</li>
        </ul>

        <h2>🌾 Suitable For:</h2>
        <ul>
          <li>Ploughing & tilling</li>
          <li>Harvesting</li>
          <li>Soil preparation</li>
          <li>Seed bed preparation</li>
        </ul>

        <button className="shop-btn" onClick={() => navigate("/category/farm-machinery")}>
          Shop Machinery & Tools
        </button>
      </div>

      <style>{`
        .info-page { width: 100%; max-width: 1100px; margin: auto; padding: 20px; }
        .info-banner { width: 100%; height: 300px; object-fit: cover; border-radius: 14px; }
        h1 { color: #14532d; }
        .tagline { color: #475569; font-size: 18px; }
        ul { margin-top: 10px; line-height: 1.8; }
        .shop-btn {
          margin-top: 20px;
          background: #15803d;
          color: white;
          padding: 12px 28px;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}
