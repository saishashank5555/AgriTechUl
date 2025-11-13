import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ClipboardList,
  User,
  Info,
  Wrench,
  Phone,
  LogOut,
  Menu,
  X,
  Settings,
} from "lucide-react";

export default function VendorSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 992px)");
    const handleMq = (e) => {
      const mobile = e.matches;
      setIsMobile(mobile);
      setIsOpen(!mobile);
    };
    handleMq(mq);

    mq.addEventListener?.("change", handleMq);
    mq.addListener?.(handleMq);

    return () => {
      mq.removeEventListener?.("change", handleMq);
      mq.removeListener?.(handleMq);
    };
  }, []);

  // Auto close on route change (mobile only)
  useEffect(() => {
    if (isMobile) setIsOpen(false);
  }, [location.pathname, isMobile]);

  const handleLogout = () => {
    sessionStorage.removeItem("vendorSession");
    navigate("/vendor-login");
  };

  const menu = [
    { to: "/vendor/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/vendor/products", icon: Package, label: "Products" },
    { to: "/vendor/orders", icon: ClipboardList, label: "Orders" },
    { to: "/vendor/profile", icon: User, label: "Profile" },
    { to: "/vendor/settings", icon: Settings, label: "Settings" },
  ];

  const moreLinks = [
    { to: "/vendor/about", icon: Info, label: "About Us" },
    { to: "/vendor/services", icon: Wrench, label: "Services" },
    { to: "/vendor/contact", icon: Phone, label: "Contact Us" },
  ];

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className="hamburger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Background Overlay */}
      {isMobile && isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <aside className={`vendor-sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <div className="logo">🌿</div>
          <h2 className="title">Vendor Panel</h2>
        </div>

        <nav className="nav">
          <div className="nav-group-title">MAIN MENU</div>

          {menu.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => isMobile && setIsOpen(false)}
              className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}

          <div className="nav-group-title" style={{ marginTop: "10px" }}>
            MORE
          </div>

          {moreLinks.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => isMobile && setIsOpen(false)}
              className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="bottom">
          <button className="logout" onClick={handleLogout}>
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* STYLES */}
      <style jsx="true">{`
        :root {
          --sidebar-width: 250px;
          --navbar-height: 65px;
        }

        /* Hamburger */
        .hamburger {
          position: fixed;
          top: 14px;
          left: 14px;
          background: #2a7a0e;
          border: none;
          padding: 8px;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          z-index: 3000;
        }

        @media (min-width: 993px) {
          .hamburger {
            display: none;
          }
        }

        /* Overlay */
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: 2500;
        }

        /* Sidebar Container */
        .vendor-sidebar {
          width: var(--sidebar-width);
          height: calc(100vh - var(--navbar-height));
          background: linear-gradient(180deg, #1d4f07, #256f0d);
          position: sticky;
          top: var(--navbar-height);
          color: white;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease;
          box-shadow: 2px 0 12px rgba(0, 0, 0, 0.25);
          overflow-y: auto;
          overflow-x: hidden;
          scrollbar-width: none; /* Firefox */
        }

        .vendor-sidebar::-webkit-scrollbar {
          display: none; /* Chrome */
        }

        /* Closed sidebar (mobile) */
        .vendor-sidebar.closed {
          transform: translateX(-100%);
        }

        /* Header */
        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }

        .logo {
          background: #3ca82a;
          width: 42px;
          height: 42px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          font-size: 22px;
        }

        .title {
          font-size: 1.2rem;
          font-weight: 800;
        }

        /* Nav area */
        .nav {
          flex: 1;
          padding: 10px;
          overflow-y: auto;
          overflow-x: hidden;
          scrollbar-width: none;
        }

        .nav::-webkit-scrollbar {
          display: none;
        }

        .nav-group-title {
          font-size: 0.75rem;
          color: #d4f6d2;
          text-transform: uppercase;
          margin: 10px 0 6px 8px;
          font-weight: bold;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          color: #eaffea;
          text-decoration: none;
          border-radius: 8px;
          transition: 0.15s;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        .nav-item.active {
          background: rgba(70, 200, 80, 0.32);
          box-shadow: inset 4px 0 0 #7fff84;
          color: white;
        }

        /* Bottom logout section */
        .bottom {
          padding: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        .logout {
          width: 100%;
          padding: 10px;
          background: white;
          border: none;
          border-radius: 8px;
          color: #1f5d09;
          font-weight: bold;
          cursor: pointer;
        }

        .logout:hover {
          background: #eaffea;
        }

        @media (max-width: 992px) {
          .vendor-sidebar {
            position: fixed;
            left: 0;
            top: var(--navbar-height);
            height: calc(100vh - var(--navbar-height));
          }
        }
      `}</style>
    </>
  );
}
