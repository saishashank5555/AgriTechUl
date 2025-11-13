import React, { useState } from "react";
import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";

export default function VendorOrders() {
  const [search, setSearch] = useState("");

  const orders = [
    { id: "ORD-1001", customer: "Rahul Sharma", amount: 1899, status: "Pending", date: "2025-02-10" },
    { id: "ORD-1002", customer: "Priya Verma", amount: 2999, status: "Shipped", date: "2025-02-09" },
    { id: "ORD-1003", customer: "Arun Kumar", amount: 1199, status: "Delivered", date: "2025-02-08" },
    { id: "ORD-1004", customer: "Meghana Rao", amount: 899, status: "Cancelled", date: "2025-02-07" },
    { id: "ORD-1005", customer: "Suresh R", amount: 2499, status: "Delivered", date: "2025-02-06" },
  ];

  const statusColors = {
    Pending: "#eab308",
    Shipped: "#3b82f6",
    Delivered: "#16a34a",
    Cancelled: "#dc2626",
  };

  return (
    <div className="orders-page">

      {/* HEADER */}
      <div className="header">
        <h1>📦 Orders</h1>
        <p>Manage your orders, view details, update statuses, and track progress.</p>
      </div>

      {/* SEARCH + FILTER */}
      <div className="actions">
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search by Order ID or Customer Name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button className="filter-btn">
          <Filter size={18} />
          Filter
        </button>
      </div>

      {/* TABLE */}
      <div className="table-wrapper">
        <table className="order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders
              .filter(
                (o) =>
                  o.id.toLowerCase().includes(search.toLowerCase()) ||
                  o.customer.toLowerCase().includes(search.toLowerCase())
              )
              .map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>₹{order.amount}</td>
                  <td>
                    <span
                      className="status"
                      style={{
                        background: statusColors[order.status] + "22",
                        color: statusColors[order.status],
                        border: `1px solid ${statusColors[order.status]}55`,
                      }}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>{order.date}</td>
                  <td>
                    <button className="view-btn">View</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        <button className="page-btn"><ChevronLeft size={18} /></button>
        <span className="page-number">1</span>
        <button className="page-btn"><ChevronRight size={18} /></button>
      </div>

      {/* CSS */}
      <style jsx="true">{`
        .orders-page {
          animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Header */
        .header h1 {
          margin: 0;
          color: #1f5d09;
          font-size: 28px;
          font-weight: 800;
        }
        .header p {
          margin: 4px 0 20px;
          color: #475569;
        }

        /* Search + Filter */
        .actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #d1d5db;
          padding: 8px 12px;
          border-radius: 8px;
          background: white;
          width: 300px;
        }

        .search-box input {
          border: none;
          outline: none;
          flex: 1;
          font-size: 14px;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #2a7a0e;
          border: none;
          padding: 10px 16px;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: 0.2s;
        }

        .filter-btn:hover {
          background: #35a012;
        }

        /* Table */
        .table-wrapper {
          overflow-x: auto;
          background: #ffffff;
          padding: 12px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .order-table {
          width: 100%;
          border-collapse: collapse;
        }

        .order-table th {
          text-align: left;
          padding: 14px 12px;
          background: #f0fdf4;
          color: #145108;
          font-weight: 600;
        }

        .order-table td {
          padding: 12px;
          border-bottom: 1px solid #e5e7eb;
        }

        .order-table tr:hover {
          background: #f9fff9;
        }

        .status {
          padding: 5px 10px;
          font-size: 12px;
          border-radius: 6px;
          font-weight: 600;
        }

        .view-btn {
          background: #e8f5e9;
          padding: 6px 12px;
          border: none;
          border-radius: 6px;
          color: #1f5d09;
          font-weight: 600;
          cursor: pointer;
        }
        .view-btn:hover {
          background: #d7f5d8;
        }

        /* Pagination */
        .pagination {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 14px;
        }

        .page-btn {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          border: none;
          background: #f1f5f9;
          cursor: pointer;
        }

        .page-number {
          font-size: 16px;
          font-weight: 700;
        }

        @media(max-width: 768px) {
          .actions {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
          }
          .search-box {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
