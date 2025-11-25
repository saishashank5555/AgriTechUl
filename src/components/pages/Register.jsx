import React, { useState } from "react";
import { registerUser } from "../api/authApi"; 
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    mobile: "",
    password: "",
    address: "",
    role: "USER",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  //  Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //  Handle registration submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const response = await registerUser(formData);
      alert(response.message || "User registered successfully!");
      navigate("/login");
    } catch (error) {
      setErrorMsg(error.message || "Registration failed! Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 🌿 AGRITECH THEMED WRAPPER */}
      <div className="register-page-wrapper">
        <div className="register-container">
          {/* AgriTech Icon Badge */}
          <div className="icon-badge">
            <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C10.9 2 10 2.9 10 4V6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6V4C14 2.9 13.1 2 12 2Z" fill="currentColor"/>
              <path d="M5 9C3.9 9 3 9.9 3 11V13C3 14.1 3.9 15 5 15C6.1 15 7 14.1 7 13V11C7 9.9 6.1 9 5 9Z" fill="currentColor"/>
              <path d="M19 9C17.9 9 17 9.9 17 11V13C17 14.1 17.9 15 19 15C20.1 15 21 14.1 21 13V11C21 9.9 20.1 9 19 9Z" fill="currentColor"/>
              <path d="M12 10C10.9 10 10 10.9 10 12V22H14V12C14 10.9 13.1 10 12 10Z" fill="currentColor"/>
            </svg>
          </div>

          <h2>Join AgriTechPro 🌾</h2>
          <p className="subtitle">Create your account and grow your future</p>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="userName"
                placeholder="Full Name"
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <textarea
                name="address"
                placeholder="Full Address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="input-group">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
                <option value="VENDOR">VENDOR</option>
              </select>
            </div>

            {errorMsg && (
              <div className="error-message">
                <span>⚠️</span>
                <span>{errorMsg}</span>
              </div>
            )}

            <button type="submit" className="register-btn" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner"></span>
                  <span>Creating Account...</span>
                </>
              ) : (
                <>
                  <span>Create Account</span>
                  <span>→</span>
                </>
              )}
            </button>
          </form>

          <p className="signup-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>

      {/* ------------------ AGRITECH CSS ------------------ */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        .register-page-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 2rem;
          background: #E9F8E4;
          overflow: hidden;
        }

        .register-container {
          position: relative;
          width: 100%;
          max-width: 520px;
          background: linear-gradient(180deg, #ffffff, #fbfff9);
          padding: 2.2rem 2.2rem;
          border-radius: 20px;
          box-shadow: 0 12px 36px rgba(42, 122, 14, 0.10);
          text-align: center;
          border: 1px solid rgba(34, 197, 94, 0.06);
        }

        /* Icon Badge */
        .icon-badge {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background: #2a7a0e;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 8px 24px rgba(42, 122, 14, 0.3);
        }

        h2 {
          color: #2a7a0e;
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 0.5rem;
          letter-spacing: -0.5px;
        }

        .subtitle {
          color: #558b2f;
          font-size: 0.95rem;
          margin: 0 0 2rem;
        }

        /* Form Styling */
        .register-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem 1.1rem;
        }

        .input-group {
          position: relative;
        }

        .input-group input,
        .input-group textarea,
        .input-group select {
          width: 100%;
          padding: 1.1rem 1.3rem;
          border: 1px solid rgba(34,197,94,0.12);
          border-radius: 12px;
          font-size: 1rem;
          color: #1f2937;
          background: white;
          transition: all 0.3s ease;
          outline: none;
          font-family: inherit;
        }

        .input-group input:focus,
        .input-group textarea:focus,
        .input-group select:focus {
          border-color: #2a7a0e;
          box-shadow: 0 0 0 4px rgba(42, 122, 14, 0.1);
        }

        .input-group input::placeholder,
        .input-group textarea::placeholder {
          color: #9ca3af;
        }

        .input-group textarea {
          resize: none;
          font-family: inherit;
        }

        .input-group select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%232a7a0e' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1.2rem center;
          padding-right: 2.8rem;
        }

        /* Error Message */
        .error-message {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 1rem 1.2rem;
          background: #fee2e2;
          border: 2px solid #fca5a5;
          border-radius: 10px;
          color: #dc2626;
          font-size: 0.9rem;
        }

        /* Register Button */
        .register-btn {
          grid-column: 1 / -1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 1rem 1.15rem;
          background: var(--green);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1.05rem;
          cursor: pointer;
          transition: transform 0.14s ease, box-shadow 0.14s ease;
          box-shadow: 0 8px 24px rgba(42, 122, 14, 0.08);
          margin-top: 0.25rem;
        }

        .register-btn:hover:not(:disabled) {
          background: #1e5a0a;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(42, 122, 14, 0.4);
        }

        .register-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .register-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Spinner */
        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Signup Text */
        .signup-text {
          color: #6b7280;
          font-size: 0.95rem;
          margin-top: 2rem;
        }

        .signup-text a {
          color: #2a7a0e;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .signup-text a:hover {
          color: #1e5a0a;
          text-decoration: underline;
        }

        /* Responsive */
        @media (max-width: 820px) {
          .register-container {
            padding: 2rem 1.5rem;
            max-width: 460px;
          }
          .register-form {
            grid-template-columns: 1fr;
          }

          h2 { font-size: 1.7rem; }
        }
      `}</style>
    </>
  );
};

export default Register;