import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { registerVendor } from "../api/authApi"; // ✅ API call

const VendorRegister = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    businessName: "",
    businessType: "",
    gstNumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [businessCertificate, setBusinessCertificate] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setBusinessCertificate(e.target.files[0]);
  };

  const handleProfileChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    Object.keys(formData).forEach(key => form.append(key, formData[key]));
    if (businessCertificate) form.append("businessCertificate", businessCertificate);
    if (profileImage) form.append("profileImage", profileImage);

    try {
      const response = await registerVendor(form);
      alert("Vendor Registration Successful ✅ Please wait for approval.");
      navigate("/vendor-login");
    } catch (error) {
      alert(error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reg-container">
      <div className="reg-card">
        <h2>Vendor Registration</h2>
        <p>Register your business and start selling on AgriTech</p>

        <form className="reg-form" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="row">
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
          </div>

          {/* Row 2 */}
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />

          {/* Password */}
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />

          {/* Business */}
          <input type="text" name="businessName" placeholder="Business / Shop Name" onChange={handleChange} required />

          <select name="businessType" onChange={handleChange} required>
            <option value="">Select Business Type</option>
            <option value="Seed Supplier">Seed Supplier</option>
            <option value="Farmer Producer Group">Farmer Producer Group</option>
            <option value="Fertilizer Dealer">Fertilizer Dealer</option>
            <option value="Machinery Supplier">Machinery Supplier</option>
          </select>

          <input type="text" name="gstNumber" placeholder="GST Number (Optional)" onChange={handleChange} />

          {/* Address */}
          <textarea name="address" placeholder="Full Business Address" rows="3" onChange={handleChange} required></textarea>

          <div className="row">
            <input type="text" name="city" placeholder="City" onChange={handleChange} required />
            <input type="text" name="state" placeholder="State" onChange={handleChange} required />
          </div>

          <input type="number" name="pincode" placeholder="Pincode" onChange={handleChange} required />

          {/* Upload Docs */}
          <label>Upload Business Certificate (PDF/JPG/PNG)</label>
          <input type="file" onChange={handleFileChange} required />

          <label>Profile Image (Optional)</label>
          <input type="file" onChange={handleProfileChange} />

          <button type="submit" className="reg-btn" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>

      <style>{`
        .reg-container { display:flex; justify-content:center; align-items:center; padding:2rem; background:#f5fff4; }
        .reg-card { background:#fff; padding:2rem; border-radius:12px; box-shadow:0 6px 25px rgba(0,0,0,0.12); width:100%; max-width:550px; }
        h2 { color:#2a7a0e; text-align:center; }
        .reg-form { display:flex; flex-direction:column; gap:1rem; }
        .row { display:flex; gap:1rem; }
        input, select, textarea { width:100%; padding:0.9rem; border:1px solid #ccc; border-radius:8px; }
        input:focus, select:focus, textarea:focus { border-color:#2a7a0e; box-shadow:0 0 5px rgba(42,122,14,0.2); }
        .reg-btn { background:#2a7a0e; color:#fff; padding:0.9rem; border:none; border-radius:8px; font-weight:600; cursor:pointer; }
      `}</style>
    </div>
  );
};

export default VendorRegister;
