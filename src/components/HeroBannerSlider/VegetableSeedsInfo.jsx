import React from "react";
import { useNavigate } from "react-router-dom";
import b1 from "../assets/banners/b1.jpg";

export default function VegetableSeedsInfo() {
  const navigate = useNavigate();

  return (
    <div className="info-page">
      <img src={b1} className="info-banner" alt="Vegetable Seeds" />

      <div className="info-content">
        <h1>Premium Vegetable Seeds</h1>
        <p className="tagline">Grow more. Earn more. Trusted by thousands of farmers.</p>

        <h2>🌱 Why Choose Our Vegetable Seeds?</h2>
        <ul>
          <li>✔ 95%+ Lab-tested germination rate</li>
          <li>✔ Resistant to common diseases & pests</li>
          <li>✔ High-yield hybrid and desi varieties</li>
          <li>✔ Suitable for all soil types of India</li>
          <li>✔ Fast delivery across India</li>
        </ul>

        <h2>🌾 What Makes Our Seeds Special?</h2>
        <p>
          We partner directly with certified agricultural research centers and 
          top breeders. Every batch undergoes strict quality testing for:
        </p>

        <ul>
          <li>🌡 Climate adaptability</li>
          <li>🌿 Growth uniformity</li>
          <li>🌻 Purity and moisture balance</li>
          <li>📦 Vacuum-packed freshness</li>
        </ul>

        <h2>🎯 Perfect For:</h2>
        <ul>
          <li>Vegetable farmers</li>
          <li>Polyhouse growers</li>
          <li>Kitchen gardeners</li>
          <li>Commercial farming</li>
        </ul>

        <button className="shop-btn" onClick={() => navigate("/category/vegetable-seeds")}>Shop Vegetable Seeds</button>
      </div>

      <style>{`
        .info-page {
          width: 100%;
          max-width: 1100px;
          margin: auto;
          padding: 20px;
        }
        .info-banner {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0 6px 20px rgba(0,0,0,.15);
        }
        .info-content { margin-top: 20px; }
        h1 { color: #14532d; font-size: 32px; margin-bottom: 10px; }
        h2 { margin-top: 20px; color: #166534; }
        .tagline { color: #475569; font-size: 18px; margin-bottom: 20px; }
        ul { margin-top: 10px; line-height: 1.8; }
        .shop-btn {
          margin-top: 20px;
          background: #15803d;
          color: white;
          padding: 12px 28px;
          border: none;
          font-size: 16px;
          border-radius: 8px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
