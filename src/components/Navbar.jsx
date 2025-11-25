import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  // Detect Mobile View
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Close menus on click outside
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setMenuOpen(false);
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="agri-header">
      <nav className="agri-nav" ref={menuRef}>

        {/* LOGO */}
        <Link to="/" className="agri-logo">
          <img
            src="https://www.shutterstock.com/image-vector/agri-tech-leaf-logo-design-600nw-2388734381.jpg"
            alt="logo"
          />
          AgriTechPro
        </Link>

        {/* SEARCH */}
        <div className="agri-center">
          <div className="agri-search">
            <input
              type="text"
              placeholder="Search Seeds, Fertilizers, Tools..."
            />
            <button>Search</button>
          </div>
        </div>

        {/* NAV LINKS */}
        <div className={`agri-links ${menuOpen ? "open" : ""}`}>

          {/* Categories Dropdown */}
          <div
            className="agri-more-area"
            ref={dropdownRef}
            onMouseEnter={() => !isMobile && setDropdownOpen(true)}
            onMouseLeave={() => !isMobile && setDropdownOpen(false)}
          >
            <button
              className="agri-more-btn"
              onClick={isMobile ? () => setDropdownOpen(!dropdownOpen) : null}
            >
              Categories <span>{dropdownOpen ? "▲" : "▼"}</span>
            </button>

            {dropdownOpen && (
              <div className="agri-dropdown">
                <Link to="/products/seeds">Seeds</Link>
                <Link to="/products/fertilizers">Fertilizers</Link>
                <Link to="/products/pesticides">Pesticides</Link>
                <Link to="/products/tools">Tools</Link>
                <Link to="/products/equipment">Equipment</Link>
              </div>
            )}
          </div>

          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>

          <Link to="/login" className="agri-login-btn">
            Login
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button className="agri-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* ✨ UPDATED CSS */}
      <style>{`
        :root {
          --green: #2a7a0e;
          --border: #e2e2e2;
          --light: #f6f8f5;
        }

        /* HEADER STICKY FIX */
        .agri-header {
          background: #fff;
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          z-index: 999999;
        }

        .agri-nav {
          max-width: 1300px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 24px;
        }

        .agri-logo {
          display: flex;
          align-items: center;
          font-size: 1.6rem;
          font-weight: 700;
          text-decoration: none;
          color: var(--green);
        }
        .agri-logo img {
          height: 42px;
          border-radius: 8px;
          margin-right: 8px;
        }

        .agri-center {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .agri-search {
          display: flex;
          background: var(--light);
          border: 1px solid var(--border);
          border-radius: 25px;
          overflow: hidden;
          width: 420px;
          max-width: 100%;
        }
        .agri-search input {
          flex: 1;
          border: none;
          padding: 10px;
          background: transparent;
          outline: none;
        }
        .agri-search button {
          background: var(--green);
          border: none;
          padding: 10px 18px;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
        }

        .agri-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .agri-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
        }
        .agri-links a:hover {
          color: var(--green);
        }

        /* ------------------------ DROPDOWN FIXED ------------------------ */

        .agri-more-area {
          position: relative;
        }

        .agri-more-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 500;
          color: #333;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .agri-dropdown {
          position: absolute;
          top: 45px;  /* places dropdown BELOW navbar */
          left: 0;
          width: 180px;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 10px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
          padding: 8px 0;
          z-index: 999999;
          animation: fadeIn .2s;
        }

        .agri-dropdown a {
          display: block;
          padding: 10px 18px;
          color: #333;
          text-decoration: none;
        }
        .agri-dropdown a:hover {
          background: var(--light);
          color: var(--green);
        }

        /* LOGIN BUTTON */
       /* LOGIN BUTTON */
.agri-login-btn {
  padding: 8px 18px;
  border: 1px solid var(--green);
  border-radius: 6px;
  color: var(--green);     /* default text color */
  background: transparent; /* default background */
  transition: 0.3s ease;
}

.agri-login-btn:hover,
.agri-login-btn:active,
.agri-login-btn:focus {
  background: var(--green);
  color: #fff !important;  /* white text on hover/click */
}


      /* HAMBURGER */
.agri-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}
.agri-hamburger span {
  width: 26px;
  height: 3px;
  background: var(--green);
}

/* MOBILE MENU — WORKS FOR ALL DEVICES */
@media (max-width: 1024px) {

  /* hide normal navbar links */
  .agri-center,
  .agri-links-desktop {
    display: none;
  }

  /* mobile dropdown */
  .agri-links {
    display: none;
    flex-direction: column;
    gap: 12px;
    padding: 15px 20px;
    background: #fff;
    border-radius: 10px;

    position: fixed;      
    top: 70px;            
    right: 18px;          
    width: 220px;
    z-index: 2000;

    border: 1px solid #e5e5e5;
    box-shadow: 0px 4px 12px rgba(0,0,0,0.12);
  }

  .agri-links.open {
    display: flex;
  }

  .agri-hamburger {
    display: flex;
  }

  .agri-dropdown {
    position: static;
    padding-left: 10px;
    border: none;
    box-shadow: none;
  }
}

/* EXTRA RESPONSIVENESS FOR SMALLER DEVICES */
@media (max-width: 768px) {
  .agri-links {
    width: 150px;
    top: 74px;
    right: 15px;
  }
}

@media (max-width: 600px) {
  .agri-links {
    width: 150px;
    top: 74px;
    right: 12px;
  }
}

@media (max-width: 480px) {
  .agri-links {
    width: 150px;
    top: 74px;
    right: 10px;
  }
}

@media (max-width: 380px) {
  .agri-links {
    width: 150px;
    top: 74px;
    right: 8px;
  }
}

@media (max-width: 320px) {
  .agri-links {
    width: 150px;
    top: 74px;
    right: 8px;
  }
}


        /* ANIMATION */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
