import React from "react";

const Header = () => {
  const vendor = JSON.parse(sessionStorage.getItem("vendorSession"));

  return (
    <div className="header">
      <h3>Welcome, {vendor?.firstName || "Vendor"} 👋</h3>
      <style>{`
        .header {
          background: #f4fff3;
          padding: 16px 24px;
          border-bottom: 1px solid #ddeedb;
        }
        h3 { color: #2a7a0e; margin: 0; }
      `}</style>
    </div>
  );
};

export default Header;
