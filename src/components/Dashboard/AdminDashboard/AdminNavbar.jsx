import React from "react";
import { Menu, Bell, UserCircle2, LogOut } from "lucide-react";

export default function AdminNavbar({ setSidebarOpen }) {
  const adminName = "Administrator";
  const notifications = 5;

  return (
    <header className="admin-navbar-inner">
      {/* LEFT */}
      <div className="nav-left">
        <button
          className="menu-btn"
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <Menu size={22} />
        </button>
        <h2>🛡️ Admin Dashboard</h2>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        {/* Notifications */}
        <div className="icon-btn">
          <Bell size={20} />
          <span className="badge">{notifications}</span>
        </div>

        {/* Profile */}
        <div className="admin-profile">
          <UserCircle2 size={28} />
          <span className="name">{adminName}</span>
        </div>

        {/* Logout */}
        <button className="logout-btn">
          <LogOut size={18} /> Logout
        </button>
      </div>

      <style jsx="true">{`
        .admin-navbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 24px;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .menu-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 6px;
        }

        .menu-btn:hover {
          background: #f2f4f7;
        }

        .nav-left h2 {
          margin: 0;
          color: #0d47a1;
          font-weight: 800;
          font-size: 1.2rem;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .icon-btn {
          position: relative;
          cursor: pointer;
        }

        .badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background: red;
          color: white;
          padding: 2px 5px;
          border-radius: 50%;
          font-size: 10px;
        }

        .admin-profile {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #0d47a1;
          font-weight: 600;
        }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #c53030;
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 8px;
          font-weight: 600;
        }

        .logout-btn:hover {
          background: #a72626;
        }
      `}</style>
    </header>
  );
}
