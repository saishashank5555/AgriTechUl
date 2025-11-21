import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaShoppingCart,
  FaBoxOpen,
  FaHeart,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaInfoCircle,
  FaPhoneAlt,
  FaHome,
  FaRegListAlt,
} from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";

/**
 * UserNavbar.jsx
 * - Responsive navbar with LEFT-SIDE drawer for mobile (Option A)
 * - Language selector placed inside mobile drawer (as requested)
 * - Internal CSS only (no external CSS)
 * - No horizontal scrollbar (overflow-x hidden)
 * - Profile dropdown on desktop; drawer shows profile links on mobile
 */

export default function UserNavbar() {
  const { t } = useTranslation();

  const [profileOpen, setProfileOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false); // used for desktop lang menu
  const [lang, setLang] = useState(i18n.language || "en");

  const navigate = useNavigate();
  const profileRef = useRef(null);
  const langRef = useRef(null);
  const drawerRef = useRef(null);

  const LANGUAGES = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिन्दी" },
    { code: "te", label: "తెలుగు" },
    { code: "ta", label: "தமிழ்" },
    { code: "mr", label: "मराठी" },
    { code: "bn", label: "বাংলা" },
    { code: "kn", label: "ಕನ್ನಡ" },
    { code: "ml", label: "മലയാളം" },
  ];

  const userEmail = sessionStorage.getItem("userEmail") || "guest@agri.com";

  // load saved lang
  useEffect(() => {
    const saved = sessionStorage.getItem("language");
    if (saved) {
      i18n.changeLanguage(saved);
      setLang(saved);
    }
  }, []);

  // update lang state when i18n changes
  useEffect(() => {
    const handler = (lng) => setLang(lng);
    i18n.on("languageChanged", handler);
    return () => i18n.off("languageChanged", handler);
  }, []);

  // close dropdowns on outside click
  useEffect(() => {
    function handleClick(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
      if (drawerRef.current && !drawerRef.current.contains(e.target) && drawerOpen) {
        // only close if click outside drawer when open and click is not on hamburger
        const isHamburger =
          e.target.closest && e.target.closest(".hamburger-btn");
        if (!isHamburger) setDrawerOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    // lock body scroll while drawer open
    document.body.style.overflowX = "hidden";
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.body.style.overflowX = ""; // restore
    };
  }, [drawerOpen]);

  // toggle drawer
  const toggleDrawer = () => {
    setDrawerOpen((s) => !s);
    setProfileOpen(false);
    setLangOpen(false);
  };

  const logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  // Desktop language change
  const changeLang = (code) => {
    i18n.changeLanguage(code);
    sessionStorage.setItem("language", code);
    setLang(code);
    setLangOpen(false);
  };

  // Mobile drawer language change (same handler)
  const changeLangFromDrawer = (code) => {
    changeLang(code);
    setDrawerOpen(false); // optional: close drawer after selection
  };

  return (
    <>
      <header className="user-header" aria-hidden={drawerOpen ? "false" : "false"}>
        <nav className="user-nav">
          {/* LEFT: Hamburger + Logo */}
          <div className="left-group">
            <button
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              className="hamburger-btn"
              onClick={toggleDrawer}
            >
              {drawerOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

            <Link to="/" className="user-logo" aria-label="AgriTechPro home">
              <img
                src="https://www.shutterstock.com/image-vector/agri-tech-leaf-logo-design-600nw-2388734381.jpg"
                alt="AgriTechPro"
              />
              <span className="brand-text">AgriTechPro</span>
            </Link>
          </div>

          {/* CENTER: Search (collapses on mobile) */}
          <div className="center-group">
            <form className="user-search" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder={t ? t("search_placeholder") : "Search for products, seeds, tools..."}
                aria-label="Search"
              />
              <button type="submit" aria-label="Search">
                {t ? t("search_button") : "Search"}
              </button>
            </form>
          </div>

          {/* RIGHT: Icons + Profile */}
          <div className="right-group">
            {/* Desktop language button (hidden on small screens) */}
            <div className="lang-desktop" ref={langRef}>
              <button
                className="lang-btn"
                onClick={() => setLangOpen((s) => !s)}
                aria-haspopup="true"
                aria-expanded={langOpen}
              >
                <BsGlobe size={16} />
                <span className="lang-code">{lang.toUpperCase()}</span> ▾
              </button>

              {langOpen && (
                <div className="lang-dropdown">
                  {LANGUAGES.map((l) => (
                    <div
                      key={l.code}
                      className={`lang-option ${lang === l.code ? "active" : ""}`}
                      onClick={() => changeLang(l.code)}
                    >
                      {l.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link to="/cart" className="user-act-btn" title="Cart">
              <FaShoppingCart size={20} />
              <span className="icon-label">{t ? t("cart") : "Cart"}</span>
            </Link>

            <Link to="/orders" className="user-act-btn" title="Orders">
              <FaBoxOpen size={20} />
              <span className="icon-label">{t ? t("orders") : "Orders"}</span>
            </Link>

            <Link to="/wishlist" className="user-act-btn" title="Wishlist">
              <FaHeart size={20} />
              <span className="icon-label">{t ? t("wishlist") : "Wishlist"}</span>
            </Link>

            {/* PROFILE (desktop drop) */}
            <div className="profile-box" ref={profileRef}>
              <button
                className="profile-btn"
                onClick={() => setProfileOpen((s) => !s)}
                aria-haspopup="true"
                aria-expanded={profileOpen}
                title="Profile"
              >
                <FaUserCircle size={26} />
              </button>

              {profileOpen && (
                <div className="profile-dropdown" role="menu">
                  <p className="profile-email">{userEmail}</p>
                  <Link to="/user/profile" className="profile-item">My Profile</Link>
                  <Link to="/orders" className="profile-item">My Orders</Link>
                  <Link to="/cart" className="profile-item">My Cart</Link>
                  <Link to="/services" className="profile-item">Services</Link>
                  <Link to="/about" className="profile-item">About Us</Link>
                  <Link to="/contact" className="profile-item">Contact</Link>
                  <button onClick={logout} className="logout-btn">
                    <FaSignOutAlt /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* LEFT SLIDING DRAWER (Mobile) */}
      <aside
        className={`mobile-drawer ${drawerOpen ? "open" : ""}`}
        ref={drawerRef}
        aria-hidden={!drawerOpen}
      >
        <div className="drawer-inner">
          <div className="drawer-top">
            <Link to="/" className="drawer-logo" onClick={() => setDrawerOpen(false)}>
              <img
                src="https://www.shutterstock.com/image-vector/agri-tech-leaf-logo-design-600nw-2388734381.jpg"
                alt="logo"
              />
              <span>AgriTechPro</span>
            </Link>
            <button className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
              <FaTimes size={18} />
            </button>
          </div>

          <nav className="drawer-nav">
            <Link to="/" className="drawer-link" onClick={() => setDrawerOpen(false)}>
              <FaHome /> Home
            </Link>

            <Link to="/services" className="drawer-link" onClick={() => setDrawerOpen(false)}>
              <FaRegListAlt /> Services
            </Link>

            <Link to="/about" className="drawer-link" onClick={() => setDrawerOpen(false)}>
              <FaInfoCircle /> About Us
            </Link>

            <Link to="/contact" className="drawer-link" onClick={() => setDrawerOpen(false)}>
              <FaPhoneAlt /> Contact
            </Link>

            <div className="drawer-divider" />

            <Link to="/cart" className="drawer-link" onClick={() => setDrawerOpen(false)}>
              <FaShoppingCart /> Cart
            </Link>

            <Link to="/orders" className="drawer-link" onClick={() => setDrawerOpen(false)}>
              <FaBoxOpen /> Orders
            </Link>

            <Link to="/wishlist" className="drawer-link" onClick={() => setDrawerOpen(false)}>
              <FaHeart /> Wishlist
            </Link>

            <div className="drawer-divider" />

            {/* Language selector inside drawer (mobile) */}
            <div className="drawer-subtitle">Language</div>
            <div className="drawer-langs">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  className={`drawer-lang-btn ${lang === l.code ? "active" : ""}`}
                  onClick={() => changeLangFromDrawer(l.code)}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <div className="drawer-divider" />

            {/* Profile area in drawer */}
            <div className="drawer-profile">
              <div className="drawer-profile-top">
                <FaUserCircle size={36} />
                <div style={{ marginLeft: 12 }}>
                  <div style={{ fontWeight: 700 }}>{userEmail}</div>
                  <div style={{ fontSize: 13, color: "#666" }}>Member since 2024</div>
                </div>
              </div>

              <div className="drawer-profile-links">
                <Link to="/user/profile" onClick={() => setDrawerOpen(false)}>My Profile</Link>
                <Link to="/orders" onClick={() => setDrawerOpen(false)}>My Orders</Link>
                <Link to="/support" onClick={() => setDrawerOpen(false)}>Support</Link>
                <button className="drawer-logout" onClick={() => { logout(); setDrawerOpen(false); }}>
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            </div>
          </nav>
        </div>
      </aside>

      {/* OVERLAY when drawer open */}
      <div className={`drawer-overlay ${drawerOpen ? "visible" : ""}`} onClick={() => setDrawerOpen(false)} />

      {/* INTERNAL CSS */}
      <style>{`
        /* Prevent horizontal scrollbar globally */
        html, body { overflow-x: hidden; }

        /* Header */
        .user-header {
          width: 100%;
          background: white;
          border-bottom: 1px solid #e7e7e7;
          position: sticky;
          top: 0;
          z-index: 1200;
        }

        .user-nav {
          max-width: 1300px;
          margin: 0 auto;
          padding: 10px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .left-group { display: flex; align-items: center; gap: 12px; }
        .hamburger-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px; height: 40px;
          border-radius: 8px;
          border: none;
          background: transparent;
          cursor: pointer;
          color: #2a7a0e;
        }
        .hamburger-btn:focus { outline: 2px solid #cfead0; }

        .user-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; color: #2a7a0e; }
        .user-logo img { height: 40px; width: 40px; object-fit: cover; border-radius: 8px; }
        .brand-text { font-weight: 700; font-size: 18px; }

        /* center search */
        .center-group { flex: 1; display: flex; justify-content: center; padding: 0 12px; }
        .user-search {
          display: flex;
          width: 540px;
          max-width: 100%;
          background: #f6f8f5;
          border: 1px solid #ddd;
          border-radius: 28px;
          overflow: hidden;
        }
        .user-search input {
          flex: 1;
          padding: 10px 14px;
          border: none;
          outline: none;
          background: transparent;
          font-size: 14px;
        }
        .user-search button {
          padding: 10px 16px;
          border: none;
          background: #2a7a0e;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        /* right icons */
        .right-group { display: flex; align-items: center; gap: 16px; }
        .user-act-btn {
          text-decoration: none;
          color: #333;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          font-size: 12px;
        }
        .user-act-btn .icon-label { display: block; margin-top: 2px; }

        /* language desktop */
        .lang-desktop { display: inline-block; position: relative; margin-right: 6px; }
        .lang-btn {
          padding: 6px 10px;
          border-radius: 8px;
          border: 1px solid #ddd;
          background: white;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          font-size: 13px;
        }
        .lang-dropdown {
          position: absolute;
          top: 44px;
          right: 0;
          background: white;
          border: 1px solid #eee;
          border-radius: 10px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          width: 200px;
          overflow: hidden;
          z-index: 1400;
        }
        .lang-option {
          padding: 10px 12px;
          cursor: pointer;
        }
        .lang-option.active { background: #e8f7e8; font-weight: 700; color: #2a7a0e; }
        .lang-option:hover { background: #f5f5f5; }

        /* profile dropdown */
        .profile-box { position: relative; }
        .profile-btn { border: none; background: transparent; cursor: pointer; color: #2a7a0e; }
        .profile-dropdown {
          position: absolute;
          top: 44px;
          right: 0;
          width: 220px;
          background: white;
          border: 1px solid #eee;
          border-radius: 10px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          z-index: 1400;
        }
        .profile-email { padding: 10px; background: #fafafa; border-bottom: 1px solid #eee; font-weight: 700; }
        .profile-item { display: block; padding: 10px 12px; color: #333; text-decoration: none; }
        .profile-item:hover { background: #f6f6f6; }
        .logout-btn {
          width: 100%;
          text-align: left;
          padding: 10px 12px;
          border: none;
          background: #fff4f4;
          color: #c0392b;
          cursor: pointer;
        }

        /* MOBILE DRAWER */
        .mobile-drawer {
          --drawer-width: 280px;
          position: fixed;
          top: 0;
          left: calc(-1 * var(--drawer-width));
          width: var(--drawer-width);
          height: 100vh;
          background: #fff;
          z-index: 1500;
          box-shadow: 4px 0 18px rgba(0,0,0,0.08);
          transition: left 280ms cubic-bezier(.2,.8,.2,1);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        .mobile-drawer.open { left: 0; }

        .drawer-inner { padding: 16px; }
        .drawer-top { display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom: 10px; }
        .drawer-logo { display:flex; align-items:center; gap:8px; text-decoration:none; color:#2a7a0e; }
        .drawer-logo img { width:40px; height:40px; border-radius:8px; }
        .drawer-close { border:none; background:transparent; cursor:pointer; color:#333; }

        .drawer-nav { display:flex; flex-direction:column; gap:8px; padding-top:8px; }
        .drawer-link {
          display:flex; align-items:center; gap:12px;
          padding:10px 12px; text-decoration:none; color:#222; border-radius:8px;
          font-weight:600;
        }
        .drawer-link:hover { background:#f4f7f4; }

        .drawer-divider { height:1px; background:#efefef; margin:12px 0; border-radius:2px; }

        .drawer-subtitle { font-size:13px; color:#666; margin:6px 2px; font-weight:600; }
        .drawer-langs { display:flex; flex-wrap:wrap; gap:8px; padding:6px 2px; }
        .drawer-lang-btn {
          border:1px solid #eee; padding:8px 10px; border-radius:8px; background:white; cursor:pointer; font-size:14px;
        }
        .drawer-lang-btn.active { background:#e8f7e8; border-color:#cfead0; font-weight:700; color:#2a7a0e; }

        .drawer-profile { margin-top:12px; padding-top:12px; border-top:1px dashed #eaeaea; }
        .drawer-profile-top { display:flex; align-items:center; gap:12px; margin-bottom:10px; }
        .drawer-profile-links { display:flex; flex-direction:column; gap:8px; }
        .drawer-profile-links a { color:#2a7a0e; text-decoration:none; padding:8px 6px; font-weight:600; }

        .drawer-logout {
          margin-top:8px; padding:10px; border-radius:8px; border:none; background:#fff4f4; color:#c0392b; cursor:pointer; width:100%;
        }

        .drawer-overlay {
          position: fixed;
          top:0; left:0; right:0; bottom:0; background: rgba(0,0,0,0.28);
          opacity: 0; pointer-events: none; transition: opacity 200ms;
          z-index: 1400;
        }
        .drawer-overlay.visible { opacity: 1; pointer-events: all; }

        /* RESPONSIVE tweaks */
        @media (max-width: 900px) {
          .user-search { width: 360px; }
          .lang-desktop { display: none; } /* hide desktop language on smaller */
        }

        @media (max-width: 700px) {
          .center-group { display: none; } /* hide center search on very small */
          .user-search { display: none; }
          .brand-text { display: none; }
          .user-act-btn .icon-label { display: none; } /* show icons only */
        }

        @media (max-width: 420px) {
          .hamburger-btn { width:36px; height:36px; }
        }
      `}</style>
    </>
  );
}
