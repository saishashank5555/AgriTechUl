import React, { useState } from "react";
import { Edit, Trash2, UserCheck, UserX } from "lucide-react";

export default function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "Ravi Kumar", email: "ravi@example.com", role: "Customer", status: "Active" },
    { id: 2, name: "Meena Sharma", email: "meena@example.com", role: "Vendor", status: "Blocked" },
    { id: 3, name: "Venu Gopal", email: "venu@example.com", role: "Customer", status: "Active" },
  ]);

  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });

  const startEdit = (user) => {
    setEditingUser(user);
    setFormData({ name: user.name, email: user.email, role: user.role });
  };

  const saveUser = () => {
    setUsers((prev) =>
      prev.map((u) => (u.id === editingUser.id ? { ...u, ...formData } : u))
    );
    setEditingUser(null);
  };

  const removeUser = (id) => {
    if (window.confirm("Are you sure want to delete this user?")) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
    }
  };

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, status: u.status === "Active" ? "Blocked" : "Active" } : u
      )
    );
  };

  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const blockedUsers = users.filter((u) => u.status === "Blocked").length;

  return (
    <div className="users-page">
      
      {/* STATISTICS CARDS */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>{totalUsers}</p>
        </div>

        <div className="stat-card active-card">
          <h3>Active Users</h3>
          <p>{activeUsers}</p>
        </div>

        <div className="stat-card blocked-card">
          <h3>Blocked Users</h3>
          <p>{blockedUsers}</p>
        </div>
      </div>

      {/* USER TABLE */}
      <div className="table-container">
        <h2>User Management</h2>

        <div className="table-wrapper">
          <table className="user-table">
            <thead>
              <tr>
                <th>#ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th style={{ textAlign: "center" }}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>
                    <span className={`status-badge ${u.status.toLowerCase()}`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="action-btns">
                    <button className="edit-btn" onClick={() => startEdit(u)}>
                      <Edit size={18} />
                    </button>
                    <button className="status-btn" onClick={() => toggleStatus(u.id)}>
                      {u.status === "Active" ? <UserX size={18} /> : <UserCheck size={18} />}
                    </button>
                    <button className="delete-btn" onClick={() => removeUser(u.id)}>
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* EDIT MODAL */}
      {editingUser && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Edit User</h3>

            <label>Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <label>Role</label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            >
              <option>Customer</option>
              <option>Vendor</option>
              <option>Admin</option>
            </select>

            <div className="modal-actions">
              <button className="save-btn" onClick={saveUser}>Save</button>
              <button className="cancel-btn" onClick={() => setEditingUser(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* RESPONSIVE CSS */}
      <style jsx="true">{`
        .users-page {
          width: 100%;
          padding: 20px;
        }

        /* ========== STAT CARDS ========== */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 25px;
        }

        .stat-card {
          background: #e3e8ff;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          font-weight: 700;
          color: #0d1b2a;
        }
        .active-card {
          background: #d1f7d6;
          color: #166534;
        }
        .blocked-card {
          background: #ffe5e5;
          color: #b91c1c;
        }

        /* ========== TABLE ========== */
        .table-container h2 {
          margin-bottom: 12px;
          font-size: 1.3rem;
          color: #0d1b2a;
        }

        .table-wrapper {
          overflow-x: auto; /* important for mobile */
        }

        .user-table {
          width: 100%;
          min-width: 700px;
          border-collapse: collapse;
          background: white;
          border-radius: 10px;
          overflow: hidden;
        }

        .user-table th,
        .user-table td {
          padding: 12px;
          border-bottom: 1px solid #e5e7eb;
          white-space: nowrap;
        }

        .status-badge {
          padding: 5px 10px;
          border-radius: 6px;
          font-weight: 600;
        }
        .status-badge.active {
          background: #d1f7d6;
          color: #166534;
        }
        .status-badge.blocked {
          background: #ffe5e5;
          color: #b91c1c;
        }

        .action-btns {
          display: flex;
          gap: 10px;
          justify-content: center;
        }

        .edit-btn, .delete-btn, .status-btn {
          border: none;
          background: #f0f0f0;
          padding: 6px;
          border-radius: 6px;
          cursor: pointer;
        }
        .delete-btn {
          background: #ffe5e5;
          color: #b91c1c;
        }

        /* ========== MODAL ========== */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }

        .modal-box {
          background: white;
          padding: 25px;
          width: 350px;
          max-width: 100%;
          border-radius: 10px;
        }

        input, select {
          width: 100%;
          padding: 8px;
          margin-bottom: 12px;
          border: 1px solid #cbd5e0;
          border-radius: 6px;
        }

        .modal-actions {
          display: flex;
          justify-content: space-between;
        }

        .save-btn {
          background: #2563eb;
          color: white;
          padding: 8px 14px;
          border-radius: 6px;
          border: none;
        }

        .cancel-btn {
          background: #ddd;
          padding: 8px 14px;
          border-radius: 6px;
          border: none;
        }

        /* ========== MEDIA QUERIES ========== */

        /* Tablet (768px–1024px) */
        @media (max-width: 1024px) {
          .stat-card { padding: 18px; }
          .user-table th, .user-table td { padding: 10px; }
        }

        /* Large Mobile (600px–768px) */
        @media (max-width: 768px) {
          .users-page { padding: 15px; }
          .stat-card h3 { font-size: 16px; }
          .stat-card p { font-size: 22px; }
        }

        /* Small Mobile (<480px) */
        @media (max-width: 480px) {
          .users-page { padding: 10px; }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .stat-card {
            padding: 16px;
          }

          .table-wrapper {
            overflow-x: scroll;
          }

          .modal-box {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}
