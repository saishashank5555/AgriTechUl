import React from "react";
import { Link } from "react-router-dom";

const FertilizerCard = ({ item }) => {
  const FALLBACK_IMAGE =
    "/mnt/data/c61b8eae-dfc2-4cca-a1e0-c301228d07ef.png";

  return (
    <Link to={`/fertilizers/${item.id}`} className="fert-card">
      <div className="fert-img-box">
        <img
          src={item.image || FALLBACK_IMAGE}
          alt={item.name}
          loading="lazy"
        />
      </div>

      <h3 className="fert-name">{item.name}</h3>
      <p className="fert-brand">{item.brand}</p>

      <div className="fert-price-row">
        <span className="fert-price">₹{item.price}</span>
        <span className="fert-mrp">₹{item.mrp}</span>
      </div>

      <style>{`
        .fert-card {
          background: #fff;
          border-radius: 12px;
          padding: 14px;
          text-align: center;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          border: 1px solid #e6e6e6;
          transition: .25s;
          display: block;
          text-decoration: none;
          color: #222;
        }
        .fert-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }

        .fert-img-box {
          height: 160px;
          border-radius: 10px;
          overflow: hidden;
          background: #fafafa;
          display:flex;
          justify-content:center;
          align-items:center;
        }
        .fert-img-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: .3s;
        }
        .fert-card:hover img {
          transform: scale(1.06);
        }

        .fert-name {
          margin: 12px 0 4px;
          font-size: 15px;
          font-weight: 600;
          color: #222;
          height: 38px; /* consistent height */
          overflow: hidden;
        }
        .fert-brand {
          font-size: 13px;
          color: #777;
          margin-bottom: 8px;
        }

        .fert-price-row {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .fert-price {
          font-weight: 700;
          color: #2a7a0e;
          font-size: 16px;
        }
        .fert-mrp {
          text-decoration: line-through;
          font-size: 13px;
          color: #888;
          margin-top: 2px;
        }

        /* Responsive */
        @media (max-width: 600px) {
          .fert-img-box { height: 140px; }
          .fert-name { font-size: 14px; }
        }
      `}</style>
    </Link>
  );
};

export default FertilizerCard;
