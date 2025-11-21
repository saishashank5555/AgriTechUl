import React, { useState } from "react";
import machineryData from "./machineryData";
import MachineryCard from "./MachineryCard";

const FarmMachinery = () => {
  const [search, setSearch] = useState("");

  const filtered = machineryData.filter((i) =>
    i.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mach-page">

      {/* PAGE HEADER */}
      <div className="mach-header">
        <h2>Farm Machinery</h2>
        <p className="mach-subtitle">
          Explore high-quality tools & machinery for farming and agriculture.
        </p>
      </div>

      {/* SEARCH BOX */}
      <div className="mach-search-box">
        <input
          placeholder="Search machinery (tractors, sprayers, tools...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* MACHINERY LIST GRID */}
      <div className="mach-grid">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <MachineryCard key={item.id} item={item} />
          ))
        ) : (
          <div className="mach-no-results">No machinery found.</div>
        )}
      </div>

      <style>{`
        .mach-page {
          max-width:1300px;
          margin:auto;
          padding:40px 20px;
          font-family:Inter, sans-serif;
        }

        /* HEADER */
        .mach-header {
          text-align:center;
          margin-bottom:25px;
        }
        .mach-header h2 {
          font-size:28px;
          font-weight:700;
          color:#2a7a0e;
          margin-bottom:8px;
        }
        .mach-subtitle {
          color:#666;
          font-size:15px;
        }

        /* SEARCH BOX */
        .mach-search-box {
          display:flex;
          justify-content:center;
          margin:25px 0;
        }
        .mach-search-box input {
          padding:12px 16px;
          border:1px solid #ccc;
          border-radius:8px;
          width:320px;
          font-size:15px;
          outline:none;
          transition:.2s;
        }
        .mach-search-box input:focus {
          border-color:#2a7a0e;
          box-shadow:0 0 4px rgba(42,122,14,.3);
        }

        /* GRID */
        .mach-grid {
          display:grid;
          grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
          gap:22px;
        }

        /* NO RESULTS */
        .mach-no-results {
          text-align:center;
          grid-column:1 / -1;
          color:#777;
          font-size:16px;
          padding:20px 0;
        }

        @media (max-width:600px) {
          .mach-header h2 { font-size:24px; }
          .mach-search-box input { width:100%; }
        }
      `}</style>
    </div>
  );
};

export default FarmMachinery;
