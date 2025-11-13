import React from "react";
import { Bell, PlusCircle, UserCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function VendorNavbar({ onAddProduct }) {
  const navigate = useNavigate();
  const vendorName = "GreenGrow Traders";

  return (
    <header className="vendor-navbar-inner">
      <div className="nav-left">
        <h2>🌿 Vendor Dashboard</h2>
      </div>

      <div className="nav-right">
        <button
          className="add-btn"
          onClick={() => {
            if (onAddProduct) onAddProduct();
            else navigate("/vendor/products");
          }}
        >
          <PlusCircle size={18} /> Add Product
        </button>

        <div className="icon-btn" title="Notifications">
          <Bell size={20} />
          <span className="badge">3</span>
        </div>

        <div className="vendor-profile">
          <UserCircle2 size={28} />
          <span className="name">{vendorName}</span>
        </div>
      </div>

      <style jsx="true">{`
        .vendor-navbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 24px;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .nav-left h2 {
          color: #1f5d09;
          font-weight: 800;
          font-size: 1.2rem;
          margin: 0;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .add-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #2a7a0e;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 8px 12px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.15s ease, background 0.15s ease;
        }

        .add-btn:hover {
          transform: translateY(-2px);
        }

        .icon-btn {
          position: relative;
          cursor: pointer;
          color: #333;
        }

        .icon-btn .badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background: red;
          color: white;
          font-size: 10px;
          padding: 2px 6px;
          border-radius: 999px;
        }

        .vendor-profile {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #2a7a0e;
          font-weight: 600;
        }

        .vendor-profile .name {
          font-size: 0.95rem;
        }

        @media (max-width: 520px) {
          .nav-right {
            gap: 8px;
          }
          .add-btn {
            padding: 6px 8px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </header>
  );
}
