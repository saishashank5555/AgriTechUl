import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Edit, Save, ArrowLeft, Trash2 } from "lucide-react";

export default function VendorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  // SAMPLE VENDOR DATA (Replace with API later)
  const [vendor, setVendor] = useState(null);

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const sampleVendors = [
      {
        id: 1,
        name: "GreenGrow Traders",
        email: "green@grow.com",
        phone: "9876543210",
        company: "GreenGrow Pvt Ltd",
        address: "Hyderabad, India",
        status: "Approved",
        image: "https://i.pravatar.cc/150?img=12",
      },
      {
        id: 2,
        name: "FreshFarm Suppliers",
        email: "fresh@farm.com",
        phone: "9123456780",
        company: "FreshFarm Enterprises",
        address: "Mumbai, India",
        status: "Pending",
        image: "https://i.pravatar.cc/150?img=33",
      },
    ];

    const foundVendor = sampleVendors.find((v) => v.id === Number(id));
    setVendor(foundVendor);
  }, [id]);

  if (!vendor) {
    return <h2>Vendor Not Found</h2>;
  }

  const updateVendor = () => {
    alert("Vendor updated successfully!");
    setEditMode(false);
  };

  const deactivateVendor = () => {
    if (window.confirm("Are you sure to deactivate this vendor?")) {
      alert("Vendor account deactivated!");
    }
  };

  return (
    <div className="vendor-profile-page">

      <button className="back-btn" onClick={() => navigate("/admin/vendors")}>
        <ArrowLeft size={18} /> Back
      </button>

      <div className="profile-container">

        {/* LEFT SIDE PROFILE CARD */}
        <div className="profile-left">
          <img src={vendor.image} alt="" className="vendor-photo" />
          <h2>{vendor.name}</h2>
          <p className={`status-badge ${vendor.status.toLowerCase()}`}>
            {vendor.status}
          </p>

          <button className="deactivate-btn" onClick={deactivateVendor}>
            <Trash2 size={18} /> Deactivate Vendor
          </button>
        </div>

        {/* RIGHT SIDE EDIT FORM */}
        <div className="profile-right">
          <h3>Vendor Details</h3>

          <label>Name</label>
          <input
            disabled={!editMode}
            value={vendor.name}
            onChange={(e) =>
              setVendor({ ...vendor, name: e.target.value })
            }
          />

          <label>Email</label>
          <input
            disabled={!editMode}
            value={vendor.email}
            onChange={(e) =>
              setVendor({ ...vendor, email: e.target.value })
            }
          />

          <label>Phone</label>
          <input
            disabled={!editMode}
            value={vendor.phone}
            onChange={(e) =>
              setVendor({ ...vendor, phone: e.target.value })
            }
          />

          <label>Company</label>
          <input
            disabled={!editMode}
            value={vendor.company}
            onChange={(e) =>
              setVendor({ ...vendor, company: e.target.value })
            }
          />

          <label>Address</label>
          <input
            disabled={!editMode}
            value={vendor.address}
            onChange={(e) =>
              setVendor({ ...vendor, address: e.target.value })
            }
          />

          {!editMode ? (
            <button className="edit-btn" onClick={() => setEditMode(true)}>
              <Edit size={18} /> Edit Profile
            </button>
          ) : (
            <button className="save-btn" onClick={updateVendor}>
              <Save size={18} /> Save Changes
            </button>
          )}
        </div>
      </div>

      <style jsx="true">{`
        .vendor-profile-page {
          padding: 20px;
          width: 100%;
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: #e5e7eb;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-bottom: 20px;
        }

        .profile-container {
          display: flex;
          gap: 25px;
        }

        .profile-left {
          width: 250px;
          background: white;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .vendor-photo {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin-bottom: 10px;
        }

        .status-badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 6px;
          margin-top: 5px;
          font-weight: 600;
        }

        .status-badge.approved { background: #d1f7d6; color: #166534; }
        .status-badge.pending { background: #fff7d6; color: #b7791f; }
        .status-badge.rejected { background: #ffe5e5; color: #c53030; }
        .status-badge.hold { background: #e8e8e8; color: #555; }

        .deactivate-btn {
          margin-top: 20px;
          background: #ffe5e5;
          color: #c53030;
          border: none;
          padding: 10px;
          width: 100%;
          border-radius: 8px;
          cursor: pointer;
        }

        .profile-right {
          flex: 1;
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        input {
          width: 100%;
          padding: 10px;
          margin-bottom: 12px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        .edit-btn,
        .save-btn {
          padding: 10px 16px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .edit-btn {
          background: #dce6ff;
          color: #1e40af;
        }

        .save-btn {
          background: #1e40af;
          color: white;
        }
      `}</style>
    </div>
  );
}