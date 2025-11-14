import React, { useMemo, useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  PauseCircle,
  Edit,
  Trash2,
  PlusCircle,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Vendors() {
  const navigate = useNavigate();

  // SAMPLE VENDORS
  const [vendors, setVendors] = useState([
    { id: 1, name: "GreenGrow Traders", email: "green@grow.com", phone: "9876543210", company: "GreenGrow Pvt Ltd", status: "Pending" },
    { id: 2, name: "FreshFarm Suppliers", email: "fresh@farm.com", phone: "9123456780", company: "FreshFarm Enterprises", status: "Approved" },
    { id: 3, name: "AgriMart", email: "contact@agrimart.com", phone: "9988776655", company: "AgriMart Services", status: "Hold" },
    { id: 4, name: "Farmers Best", email: "hello@farmersbest.com", phone: "9012345678", company: "Farmers Best Co", status: "Approved" },
    { id: 5, name: "UrbanAgri", email: "info@urbanagri.com", phone: "9001122334", company: "UrbanAgri Pvt", status: "Rejected" },
  ]);

  // UI STATE
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState({ key: "id", dir: "desc" });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const [editVendor, setEditVendor] = useState(null);
  const [addModalOpen, setAddModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    status: "Pending",
  });

  useEffect(() => setPage(1), [search, statusFilter, sortBy, pageSize]);

  // CRUD FUNCTIONS
  const openEdit = (v) => {
    setEditVendor(v);
    setFormData(v);
  };

  const saveEdit = () => {
    setVendors((prev) => prev.map((x) => (x.id === editVendor.id ? formData : x)));
    setEditVendor(null);
  };

  const deleteVendor = (id) => {
    if (window.confirm("Delete vendor?"))
      setVendors((prev) => prev.filter((v) => v.id !== id));
  };

  const updateStatus = (id, newStatus) => {
    setVendors((prev) => prev.map((v) => (v.id === id ? { ...v, status: newStatus } : v)));
  };

  const addVendor = () => {
    const nextId = vendors.length ? Math.max(...vendors.map((x) => x.id)) + 1 : 1;
    setVendors([{ id: nextId, ...formData }, ...vendors]);
    setAddModalOpen(false);
    setFormData({ name: "", email: "", phone: "", company: "", status: "Pending" });
  };

  const openProfile = (v) => navigate(`/admin/vendors/${v.id}`);

  // STATS
  const totalVendors = vendors.length;
  const approved = vendors.filter((v) => v.status === "Approved").length;
  const pending = vendors.filter((v) => v.status === "Pending").length;
  const rejected = vendors.filter((v) => v.status === "Rejected").length;
  const hold = vendors.filter((v) => v.status === "Hold").length;

  // FILTERING
  const filtered = useMemo(() => {
    const s = search.toLowerCase();
    return vendors.filter((v) => {
      if (statusFilter !== "All" && v.status !== statusFilter) return false;
      return (
        v.name.toLowerCase().includes(s) ||
        v.email.toLowerCase().includes(s) ||
        v.phone.toLowerCase().includes(s) ||
        v.company.toLowerCase().includes(s) ||
        v.status.toLowerCase().includes(s)
      );
    });
  }, [vendors, search, statusFilter]);

  // SORTING
  const sorted = useMemo(() => {
    let arr = [...filtered];
    arr.sort((a, b) => {
      let A = a[sortBy.key].toString().toLowerCase();
      let B = b[sortBy.key].toString().toLowerCase();
      if (A < B) return sortBy.dir === "asc" ? -1 : 1;
      if (A > B) return sortBy.dir === "asc" ? 1 : -1;
      return 0;
    });
    return arr;
  }, [filtered, sortBy]);

  // PAGINATION
  const totalPages = Math.ceil(sorted.length / pageSize);
  const pageItems = sorted.slice((page - 1) * pageSize, page * pageSize);

  const toggleSort = (key) => {
    setSortBy((prev) => ({
      key,
      dir: prev.key === key && prev.dir === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div className="vendor-page">

      {/* TOP STATS */}
      <div className="stats-grid">
        <div className="stat-card total">
          <h3>Total Vendors</h3><p>{totalVendors}</p>
        </div>
        <div className="stat-card approved"><h3>Approved</h3><p>{approved}</p></div>
        <div className="stat-card pending"><h3>Pending</h3><p>{pending}</p></div>
        <div className="stat-card rejected"><h3>Rejected</h3><p>{rejected}</p></div>
        <div className="stat-card hold"><h3>On Hold</h3><p>{hold}</p></div>
      </div>

      {/* ADD VENDOR BUTTON */}
      <div className="add-button-row">
        <button className="add-btn" onClick={() => setAddModalOpen(true)}>
          <PlusCircle size={16} /> Add New Vendor
        </button>
      </div>

      {/* SEARCH + FILTER + SORT */}
      <div className="controls-row">
        <input
          className="search-input"
          placeholder="Search vendor by name, email, phone, company, status..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className="filter" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option>All</option>
          <option>Approved</option>
          <option>Pending</option>
          <option>Rejected</option>
          <option>Hold</option>
        </select>

        <button className="sort-btn" onClick={() => toggleSort("name")}>
          Name {sortBy.key === "name" ? (sortBy.dir === "asc" ? <ArrowUp /> : <ArrowDown />) : <ArrowUpDown />}
        </button>

        <button className="sort-btn" onClick={() => toggleSort("status")}>
          Status {sortBy.key === "status" ? (sortBy.dir === "asc" ? <ArrowUp /> : <ArrowDown />) : <ArrowUpDown />}
        </button>
      </div>

      {/* TABLE */}
      <div className="table-wrapper">
        <table className="vendor-table">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Vendor</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Status</th>
              <th style={{ textAlign: "center" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {pageItems.map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>
                  <button className={`vendor-name ${v.status.toLowerCase()}`} onClick={() => openProfile(v)}>
                    <User size={14} /> {v.name}
                  </button>
                </td>
                <td>{v.email}</td>
                <td>{v.phone}</td>
                <td>{v.company}</td>
                <td><span className={`badge ${v.status.toLowerCase()}`}>{v.status}</span></td>
                <td className="actions">
                  <button className="btn green" onClick={() => updateStatus(v.id, "Approved")}><CheckCircle /></button>
                  <button className="btn yellow" onClick={() => updateStatus(v.id, "Hold")}><PauseCircle /></button>
                  <button className="btn red" onClick={() => updateStatus(v.id, "Rejected")}><XCircle /></button>
                  <button className="btn edit" onClick={() => openEdit(v)}><Edit /></button>
                  <button className="btn delete" onClick={() => deleteVendor(v.id)}><Trash2 /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}><ChevronLeft /></button>
        <span>{page} / {totalPages}</span>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}><ChevronRight /></button>
      </div>

      {/* EDIT MODAL */}
      {editVendor && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Edit Vendor</h3>

            <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <input value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            <input value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />

            <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}>
              <option>Approved</option>
              <option>Pending</option>
              <option>Rejected</option>
              <option>Hold</option>
            </select>

            <div className="modal-actions">
              <button className="save" onClick={saveEdit}>Save</button>
              <button className="cancel" onClick={() => setEditVendor(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* ADD MODAL */}
      {addModalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Add Vendor</h3>

            <input placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <input placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <input placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            <input placeholder="Company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />

            <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
              <option>Hold</option>
            </select>

            <div className="modal-actions">
              <button className="save" onClick={addVendor}>Add</button>
              <button className="cancel" onClick={() => setAddModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* CSS */}
      <style jsx="true">{`
        .vendor-page {
          width: 100%;
          padding: 20px;
        }

        /* =======================
         RESPONSIVE STATS GRID
        ========================*/
        .stats-grid {
          display: grid;
          gap: 16px;
          margin-bottom: 20px;
          grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }

        .stat-card {
          background: #eaf0ff;
          padding: 16px;
          border-radius: 10px;
          text-align: center;
          font-weight: 700;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .stat-card.approved { background: #d1f7d6; color: #165c2b; }
        .stat-card.pending { background: #fff7d6; color: #b7791f; }
        .stat-card.rejected { background: #ffe5e5; color: #c53030; }
        .stat-card.hold { background: #e9e9e9; color: #555; }

        /* Add vendor button */
        .add-button-row {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 15px;
        }

        .add-btn {
          background: #0d47a1;
          color: white;
          padding: 10px 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* Search / Filter / Sort */
        .controls-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 15px;
        }

        .search-input {
          flex: 1;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
        }

        .filter {
          padding: 10px;
          border-radius: 8px;
        }

        .sort-btn {
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          cursor: pointer;
        }

        /* Table */
        .table-wrapper {
          width: 100%;
          overflow-x: auto;
          background: white;
          border-radius: 10px;
        }

        .vendor-table {
          width: 100%;
          min-width: 900px;
          border-collapse: collapse;
        }

        th, td {
          padding: 12px;
          border-bottom: 1px solid #eee;
        }

        .actions {
          display: flex;
          gap: 8px;
          justify-content: center;
        }

        .btn {
          border: none;
          padding: 8px;
          border-radius: 6px;
          cursor: pointer;
        }

        .green { background: #d1f7d6; }
        .yellow { background: #fff7d6; }
        .red { background: #ffe5e5; }
        .edit { background: #dce6ff; }
        .delete { background: #ffc9c9; }

        .badge {
          padding: 6px 10px;
          border-radius: 6px;
        }

        .badge.approved { background: #d1f7d6; }
        .badge.pending { background: #fff7d6; }
        .badge.rejected { background: #ffe5e5; }
        .badge.hold { background: #e9e9e9; }

        /* Pagination */
        .pagination {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: center;
          margin-top: 20px;
        }

        .pagination button {
          padding: 8px 12px;
          border-radius: 6px;
          border: 1px solid #ccc;
          background: white;
        }

        /* Modal styles */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-box {
          background: white;
          padding: 20px;
          width: 350px;
          max-width: 95%;
          border-radius: 10px;
        }

        .modal-box input, .modal-box select {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          margin-bottom: 12px;
          border: 1px solid #ccc;
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }

        .save {
          background: #0d47a1;
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
        }

        .cancel {
          background: #e5e5e5;
          padding: 8px 16px;
          border-radius: 8px;
        }

      `}</style>
    </div>
  );
}
