import React from "react";
import { Link } from "react-router-dom";
import { getTodayOffers } from "./offersData";
import OfferCard from "./OfferCard";

const OffersPreview = () => {
  const items = getTodayOffers(12); // Fetch 12 items

  return (
    <div className="offers-preview-wrapper">
      
      {/* HEADER ROW */}
      <div className="offers-header-row">
        <h2 className="offers-title">Today's Offers</h2>
        <Link to="/category/offers-today" className="offers-more-btn">
          View More →
        </Link>
      </div>

      {/* SCROLL ROW */}
      <div className="offers-scroll-row">
        {items.map((item) => (
          <div key={item.id} className="scroll-item">
            <OfferCard item={item} />
          </div>
        ))}
      </div>

      <style>{`
        .offers-preview-wrapper {
          max-width: 1300px;
          margin: auto;
          padding: 0 20px;
        }

        /* HEADER */
        .offers-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 30px;
          margin-bottom: 6px;
        }

        .offers-title {
          font-size: 24px;
          font-weight: 700;
          color: #2a7a0e;
          margin: 0;
        }

        .offers-more-btn {
          background: #2a7a0e;
          color: white;
          padding: 6px 14px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s;
        }

        .offers-more-btn:hover { opacity: 0.85; }

        /* SCROLL ROW */
        .offers-scroll-row {
          display: flex;
          gap: 14px;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding-bottom: 8px;
          scrollbar-width: none;
        }

        .offers-scroll-row::-webkit-scrollbar {
          display: none;
        }

        /* GRID ITEM SIZE (MATCHING FERTILIZER PREVIEW) */
        .scroll-item {
          min-width: 200px;       /* SAME SIZE FOR ALL CARDS */
          max-width: 200px;
          flex-shrink: 0;
        }

        /* RESPONSIVE */
        @media (max-width: 600px) {
          .scroll-item {
            min-width: 160px;
            max-width: 160px;
          }
        }
      `}</style>
    </div>
  );
};

export default OffersPreview;
