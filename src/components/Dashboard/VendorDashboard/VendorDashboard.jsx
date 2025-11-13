import React from "react";

const VendorDashboard = () => {
  const bars = [
    { label: "Mon", value: 12 },
    { label: "Tue", value: 18 },
    { label: "Wed", value: 10 },
    { label: "Thu", value: 25 },
    { label: "Fri", value: 30 },
    { label: "Sat", value: 20 },
    { label: "Sun", value: 15 },
  ];

  const topProducts = [
    { name: "Organic Fertilizer", sales: 240 },
    { name: "Hybrid Tomato Seeds", sales: 190 },
    { name: "Power Sprayer", sales: 160 },
    { name: "Wheat Seeds", sales: 120 },
  ];

  return (
    <div className="vendor-dashboard">
      {/* === Header Section === */}
      <section className="header-section">
        <div className="welcome">Welcome, Raju 👋</div>
        <h1 className="heading">Vendor Overview</h1>
        <p className="sub">
          Your business performance insights this week.
        </p>
      </section>

      {/* === Stats Section === */}
      <section className="stats">
        <div className="stat-card">
          <div className="icon">🌾</div>
          <h4>Products</h4>
          <p>18</p>
          <span className="delta">+5%</span>
        </div>
        <div className="stat-card">
          <div className="icon">🛒</div>
          <h4>Orders</h4>
          <p>45</p>
          <span className="delta">+12%</span>
        </div>
        <div className="stat-card">
          <div className="icon">💰</div>
          <h4>Earnings</h4>
          <p>₹42,000</p>
          <span className="delta">+8%</span>
        </div>
        <div className="stat-card">
          <div className="icon">⭐</div>
          <h4>Rating</h4>
          <p>4.6 / 5</p>
          <span className="delta">+0.2</span>
        </div>
      </section>

      {/* === Charts and Tables === */}
      <section className="cards">
        {/* Left Chart */}
        <div className="panel">
          <div className="panel-head">
            <h3>Weekly Sales</h3>
            <span className="hint">Last 7 days</span>
          </div>
          <div className="bar-chart">
            {bars.map((b) => (
              <div key={b.label} className="bar-wrap">
                <div
                  className="bar"
                  style={{ height: `${b.value * 6}px` }}
                  title={`${b.label}: ${b.value} orders`}
                />
                <span className="lbl">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Table */}
        <div className="panel">
          <div className="panel-head">
            <h3>Top Selling Products</h3>
            <span className="hint">Based on order volume</span>
          </div>
          <ul className="list">
            {topProducts.map((p) => (
              <li key={p.name} className="li">
                <span>{p.name}</span>
                <span className="pill">{p.sales}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* === Styles === */}
      <style jsx="true">{`
        .vendor-dashboard {
          width: 100%;
          min-height: 100%;
          background: #f8fff8;
          padding-bottom: 20px;
        }

        /* === Header === */
        .header-section {
          background: #f0fff4;
          padding: 16px 20px;
          border-radius: 10px;
          margin-bottom: 20px;
        }

        .welcome {
          font-size: 1rem;
          color: #2a7a0e;
          font-weight: 600;
        }

        .heading {
          font-size: 1.8rem;
          font-weight: 800;
          color: #1f5d09;
          margin: 4px 0;
        }

        .sub {
          color: #5b7b54;
          font-size: 0.95rem;
        }

        /* === Stats === */
        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 18px;
          margin-bottom: 24px;
        }

        .stat-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 18px;
          text-align: center;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
        }

        .icon {
          font-size: 1.8rem;
          margin-bottom: 6px;
        }

        .stat-card h4 {
          color: #2a7a0e;
          font-size: 1rem;
          margin: 0;
        }

        .stat-card p {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1f5d09;
          margin: 6px 0;
        }

        .delta {
          font-size: 0.85rem;
          color: #22c55e;
          font-weight: 600;
        }

        /* === Cards Section === */
        .cards {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 18px;
        }

        .panel {
          background: #ffffff;
          border-radius: 14px;
          padding: 18px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
        }

        .panel-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .panel-head h3 {
          color: #2a7a0e;
          font-size: 1rem;
          font-weight: 700;
        }

        .hint {
          font-size: 0.85rem;
          color: #64748b;
        }

        /* === Bar Chart === */
        .bar-chart {
          display: flex;
          align-items: flex-end;
          gap: 12px;
          height: 200px;
          padding: 8px 0;
        }

        .bar-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .bar {
          width: 26px;
          background: linear-gradient(180deg, #4ade80, #15803d);
          border-radius: 6px 6px 0 0;
          transition: all 0.3s ease;
        }

        .bar:hover {
          transform: scaleY(1.1);
          background: linear-gradient(180deg, #22c55e, #166534);
        }

        .lbl {
          font-size: 0.8rem;
          color: #475569;
        }

        /* === Product List === */
        .list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .li:hover {
          background: #f0fff4;
          transform: translateX(3px);
        }

        .pill {
          background: #dcfce7;
          color: #166534;
          font-weight: 700;
          padding: 5px 10px;
          border-radius: 999px;
          border: 1px solid #bbf7d0;
        }

        /* === Responsive === */
        @media (max-width: 1200px) {
          .cards {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .heading {
            font-size: 1.5rem;
          }
          .stats {
            grid-template-columns: 1fr 1fr;
          }
          .panel {
            padding: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default VendorDashboard;
