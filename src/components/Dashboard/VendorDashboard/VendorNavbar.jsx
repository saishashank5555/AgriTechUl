import React from "react";
import { Bell, UserCircle, PlusCircle } from "lucide-react";

export default function VendorNavbar() {
  return (
    <header className="vendor-navbar">
      <div className="left">
        <h2>🌿 Vendor Dashboard</h2>
      </div>

      <div className="right">
        <button className="add-btn">
          <PlusCircle size={18} />
          Add Product
        </button>

        <div className="icon-badge">
          <Bell size={20} />
          <span className="badge">3</span>
        </div>

        <div className="profile">
          <UserCircle size={26} />
          GreenGrow Traders
        </div>
      </div>

      <style jsx="true">{`
        .vendor-navbar {
          height: 70px;                           /* IMPORTANT */
          background: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 5000;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
        }

        .left h2 {
          font-size: 20px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .right {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .add-btn {
          background: #1f7a0a;
          color: white;
          padding: 8px 12px;
          border-radius: 8px;
          border: none;
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
        }

        .icon-badge {
          position: relative;
        }

        .badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background: red;
          color: white;
          font-size: 10px;
          padding: 2px 5px;
          border-radius: 8px;
        }

        .profile {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
        }
      `}</style>
    </header>
  );
}
