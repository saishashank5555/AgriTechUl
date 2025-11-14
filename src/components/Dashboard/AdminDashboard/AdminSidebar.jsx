import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Settings,
  Info,
  PhoneCall,
  LogOut,
  Wrench,
  Package,
  UserCog,
} from "lucide-react";

export default function AdminSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: Clear any admin login storage
    localStorage.removeItem("adminToken");

    navigate("/admin-login"); // Redirect to Vendor Login Page
  };

  return (
    <div className="admin-sidebar">

      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>

      <div className="menu-section-title">MAIN MENU</div>

      <nav className="menu-list">
        <NavItem to="/admin/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" />
        <NavItem to="/admin/users" icon={<Users size={18} />} label="Users" />
        <NavItem to="/admin/vendors" icon={<UserCog size={18} />} label="Vendors" />
        <NavItem to="/admin/products" icon={<Package size={18} />} label="Products" />
        <NavItem to="/admin/orders" icon={<ClipboardList size={18} />} label="Orders" />
        <NavItem to="/admin/settings" icon={<Settings size={18} />} label="Settings" />
        <NavItem to="/admin/services" icon={<Wrench size={18} />} label="Services" />
      </nav>

      <div className="menu-section-title" style={{ marginTop: "20px" }}>
        MORE
      </div>

      <nav className="menu-list">
        <NavItem to="/admin/about" icon={<Info size={18} />} label="About Us" />
        <NavItem to="/admin/support" icon={<PhoneCall size={18} />} label="Support" />
      </nav>

      <div className="logout-container">
        <button className="logout-btn" onClick={handleLogout}>
          <LogOut size={18} /> Logout
        </button>
      </div>

      <style jsx="true">{`
        .admin-sidebar {
          height: 100%;
          width: 100%;
          background: #0d1b2a;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          padding: 20px 0;
        }

        .sidebar-header {
          padding: 0 22px 20px;
        }

        .sidebar-header h2 {
          font-size: 1.3rem;
          margin: 0;
          font-weight: 700;
        }

        .menu-section-title {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 5px 22px;
          color: #9db4c0;
        }

        .menu-list {
          display: flex;
          flex-direction: column;
        }

        .menu-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px 22px;
          margin: 4px 12px;
          color: #e6edf5;
          border-radius: 8px;
          text-decoration: none;
        }

        .menu-item:hover {
          background: #1b2b40;
        }

        .menu-item.active {
          background: #1e3a5f;
        }

        .logout-container {
          margin-top: auto;
          padding: 20px;
        }

        .logout-btn {
          width: 100%;
          padding: 10px;
          font-weight: 600;
          background: white;
          color: #c53030;
          border-radius: 10px;
          border: none;
        }
      `}</style>
    </div>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "menu-item active" : "menu-item"
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}
