import React, { useState } from "react";
import { Camera, Edit2, XCircle } from "lucide-react";

export default function VendorProfile() {
  const [profile, setProfile] = useState({
    name: "GreenGrow Traders",
    email: "vendor@grow.com",
    phone: "9876543210",
    shopName: "GreenGrow Organic Store",
    address: "Hyderabad, Telangana",
    gst: "22ABCDE1234F2Z5",
  });

  const [editOpen, setEditOpen] = useState(false);
  const [deactivateOpen, setDeactivateOpen] = useState(false);

  const [editData, setEditData] = useState(profile);

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const saveChanges = () => {
    setProfile(editData);
    setEditOpen(false);
  };

  const deactivateAccount = () => {
    console.log("Vendor Account Deactivated!");
    alert("Vendor account has been deactivated.");
    setDeactivateOpen(false);
  };

  return (
    <div className="profile-page">

      {/* HEADER */}
      <h1 className="title">👤 Vendor Profile</h1>
      <p className="subtitle">View and manage your vendor profile information.</p>

      {/* PROFILE CARD */}
      <div className="profile-card">

        {/* LEFT: Avatar + Basic Info */}
        <div className="avatar-section">
          <div className="avatar">
            <img
              src="https://i.ibb.co/3kL4m7x/profile-avatar.png"
              alt="Vendor Avatar"
            />
          </div>

          <h2>{profile.name}</h2>
          <p className="shop">{profile.shopName}</p>
        </div>

        {/* RIGHT: All Details */}
        <div className="details">
          <div className="info-row">
            <strong>Email:</strong>
            <span>{profile.email}</span>
          </div>

          <div className="info-row">
            <strong>Phone:</strong>
            <span>{profile.phone}</span>
          </div>

          <div className="info-row">
            <strong>Shop Name:</strong>
            <span>{profile.shopName}</span>
          </div>

          <div className="info-row">
            <strong>Address:</strong>
            <span>{profile.address}</span>
          </div>

          <div className="info-row">
            <strong>GST Number:</strong>
            <span>{profile.gst}</span>
          </div>

          {/* ACTION BUTTONS */}
          <div className="actions">
            <button className="edit-btn" onClick={() => setEditOpen(true)}>
              <Edit2 size={16} /> Edit Profile
            </button>

            <button className="deactivate-btn" onClick={() => setDeactivateOpen(true)}>
              <XCircle size={16} /> Deactivate Account
            </button>
          </div>

        </div>
      </div>

      {/* ------------------------------------------- */}
      {/* EDIT POPUP MODAL */}
      {/* ------------------------------------------- */}
      {editOpen && (
        <div className="modal-overlay">
          <div className="modal">

            <h2>Edit Profile</h2>

            <div className="form-group">
              <label>Name</label>
              <input name="name" value={editData.name} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input name="email" value={editData.email} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input name="phone" value={editData.phone} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Shop Name</label>
              <input name="shopName" value={editData.shopName} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea name="address" value={editData.address} onChange={handleChange} rows="2" />
            </div>

            <div className="form-group">
              <label>GST Number</label>
              <input name="gst" value={editData.gst} onChange={handleChange} />
            </div>

            <div className="modal-actions">
              <button className="save-btn" onClick={saveChanges}>Save Changes</button>
              <button className="cancel-btn" onClick={() => setEditOpen(false)}>Cancel</button>
            </div>

          </div>
        </div>
      )}

      {/* ------------------------------------------- */}
      {/* DEACTIVATE CONFIRMATION POPUP */}
      {/* ------------------------------------------- */}
      {deactivateOpen && (
        <div className="modal-overlay">
          <div className="modal small">
            <h3>Are you sure?</h3>
            <p>This action will permanently deactivate your vendor account.</p>

            <div className="modal-actions">
              <button className="danger-btn" onClick={deactivateAccount}>Yes, Deactivate</button>
              <button className="cancel-btn" onClick={() => setDeactivateOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style jsx="true">{`
        .profile-page {
          animation: fadeIn 0.4s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .title {
          color: #145108;
          font-size: 28px;
          font-weight: 800;
          margin: 0;
        }

        .subtitle {
          color: #475569;
          margin-bottom: 20px;
        }

        /* Profile Card */
        .profile-card {
          background: #ffffff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
        }

        /* Avatar */
        .avatar-section {
          text-align: center;
          min-width: 240px;
        }
        .avatar img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 12px;
        }
        h2 {
          margin: 0;
          color: #1b4d0a;
          font-size: 22px;
        }
        .shop {
          color: #475569;
          margin-top: 6px;
        }

        /* Details */
        .details {
          flex: 2;
        }

        .info-row {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid #e5e7eb;
        }

        .actions {
          margin-top: 20px;
          display: flex;
          gap: 12px;
        }

        .edit-btn {
          background: #2a7a0e;
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .deactivate-btn {
          background: #fee2e2;
          color: #b91c1c;
          border: none;
          padding: 10px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* MODAL COMMON */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 5000;
        }

        .modal {
          background: white;
          padding: 22px;
          border-radius: 12px;
          width: 420px;
          animation: popup 0.3s ease;
        }

        @keyframes popup {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .modal.small {
          width: 350px;
          text-align: center;
        }

        .modal h2, .modal h3 {
          margin: 0 0 10px;
          color: #145108;
        }

        .modal p {
          color: #475569;
          margin-bottom: 15px;
        }

        .form-group {
          margin-bottom: 12px;
        }

        .form-group label {
          font-weight: 600;
          margin-bottom: 4px;
          display: block;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          outline: none;
        }

        .modal-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 12px;
        }

        .save-btn {
          background: #2a7a0e;
          border: none;
          padding: 10px 16px;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 700;
        }

        .cancel-btn {
          background: #e5e7eb;
          border: none;
          padding: 10px 16px;
          color: #374151;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 700;
        }

        .danger-btn {
          background: #dc2626;
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 700;
        }

        @media(max-width: 680px) {
          .profile-card {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
