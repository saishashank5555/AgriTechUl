import React from "react";

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="cards-container">
        <div className="card">
          <div className="card-title">Total Users</div>
          <div className="card-value">120</div>
        </div>

        <div className="card">
          <div className="card-title">Total Vendors</div>
          <div className="card-value">45</div>
        </div>

        <div className="card">
          <div className="card-title">Total Orders</div>
          <div className="card-value">540</div>
        </div>

        <div className="card">
          <div className="card-title">Active Users</div>
          <div className="card-value">67</div>
        </div>
      </div>

      {/* CSS STYLES */}
      <style>{`
        .admin-dashboard {
          width: 100%;
          padding: 20px;
        }

        .dashboard-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        /* Cards Grid */
        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .card {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease-in-out;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .card-title {
          font-size: 18px;
          font-weight: 600;
        }

        .card-value {
          font-size: 26px;
          font-weight: 700;
          margin-top: 10px;
        }

        /* -----------------------------------
          MEDIA QUERIES FOR RESPONSIVENESS
        ------------------------------------*/

        /* Tablets (768px - 1024px) */
        @media (max-width: 1024px) {
          .dashboard-title {
            font-size: 22px;
          }
          .card {
            padding: 18px;
          }
          .card-value {
            font-size: 24px;
          }
        }

        /* Mobile Large (600px - 768px) */
        @media (max-width: 768px) {
          .cards-container {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
          .dashboard-title {
            font-size: 20px;
          }
          .card-title {
            font-size: 16px;
          }
          .card-value {
            font-size: 22px;
          }
        }

        /* Mobile Small (Below 480px) */
        @media (max-width: 480px) {
          .admin-dashboard {
            padding: 10px;
          }
          .cards-container {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          .dashboard-title {
            font-size: 18px;
          }
          .card {
            padding: 15px;
            border-radius: 8px;
          }
          .card-title {
            font-size: 15px;
          }
          .card-value {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
}
