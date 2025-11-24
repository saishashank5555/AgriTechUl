import React from "react";
import { useNavigate } from "react-router-dom";
import b2 from "../assets/banners/b2.jpeg";

export default function FertilizersInfo() {
  const navigate = useNavigate();

  return (
    <div className="info-page">
      <img src={b2} className="info-banner" alt="Organic Fertilizers" />

      <div className="info-content">
        <h1>Organic Fertilizers</h1>
        <p className="tagline">Healthy soil, healthy crops, higher income.</p>

        <h2>🌿 Why Choose Our Fertilizers?</h2>
        <ul>
          <li>✔ 100% natural organic ingredients</li>
          <li>✔ Improves soil structure & fertility</li>
          <li>✔ Balanced NPK for healthy crop growth</li>
          <li>✔ Safer alternative to chemical fertilizers</li>
          <li>✔ Eco-friendly and long-lasting effect</li>
        </ul>

        <h2>🧪 What Makes Our Fertilizers Special?</h2>
        <ul>
          <li>🌱 Rich in organic carbon</li>
          <li>🌦 Suitable for all climates</li>
          <li>🪴 Enhances microbial activity in soil</li>
          <li>🔥 Boosts root strength and nutrient absorption</li>
        </ul>

        <h2>🌾 Perfect For:</h2>
        <ul>
          <li>Organic farming</li>
          <li>Vegetable & fruit farming</li>
          <li>Cereal & grain crops</li>
          <li>Greenhouse and polyhouse farming</li>
        </ul>

        <button className="shop-btn" onClick={() => navigate("/category/fertilizers")}>
          Shop Fertilizers
        </button>
      </div>

      <style>{`
        .info-page { width: 100%; max-width: 1100px; margin: auto; padding: 20px; }
        .info-banner { width: 100%; height: 300px; object-fit: cover; border-radius: 14px; }
        .info-content { margin-top: 20px; }
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
