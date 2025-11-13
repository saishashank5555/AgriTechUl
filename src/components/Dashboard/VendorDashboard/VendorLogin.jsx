import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { loginVendor } from "./vendorApi";

// 🔥 ADD NAVBAR
import Navbar from "../../Navbar";  // adjust path if needed

const VendorLogin = () => {
  const [isEmailLogin, setIsEmailLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // LOGIN SUBMIT
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const vendor = loginVendor(username, password);
      alert(`Welcome ${vendor.firstName}!`);
      navigate("/vendor");
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* TOP NAVBAR */}
      <Navbar />

      {/* WRAPPER ADDED — DOESN’T TOUCH YOUR STYLING */}
      <div style={{ paddingTop: "120px" }}>
        <div className="login-container">
          <div className="login-card">
            <h2>Vendor Login</h2>
            <p>Manage your store, products & customers</p>

            {/* Toggle Email/Phone */}
            <div className="login-toggle">
              <button
                className={isEmailLogin ? "active" : ""}
                onClick={() => setIsEmailLogin(true)}
              >
                Email Login
              </button>
              <button
                className={!isEmailLogin ? "active" : ""}
                onClick={() => setIsEmailLogin(false)}
              >
                Phone Login
              </button>
            </div>

            {/* Login Form */}
            <form className="login-form" onSubmit={handleLogin}>
              <input
                type={isEmailLogin ? "email" : "tel"}
                placeholder={isEmailLogin ? "Enter your email" : "Enter your phone number"}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>

              {errorMsg && <p className="error-text">{errorMsg}</p>}

              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="divider"><span>OR</span></div>

            {/* SSO Buttons */}
            <div className="sso-icons">
              <a className="sso-btn google"><FcGoogle size={22} /></a>
              <a className="sso-btn github"><FaGithub size={20} /></a>
              <a className="sso-btn facebook"><FaFacebookF size={20} /></a>
              <a className="sso-btn linkedin"><FaLinkedinIn size={20} /></a>
            </div>

            <p className="signup-text">
              New Vendor? <Link to="/vendor-register">Register Here</Link>
            </p>
          </div>
        </div>
      </div>

      {/* YOUR ORIGINAL STYLING — UNTOUCHED */}
      <style>{`
        .login-container { 
          display:flex; 
          justify-content:center; 
          align-items:center;
          min-height:100vh; 
          background:linear-gradient(135deg,#e8f5e9,#f1f8e9); 
          padding:1rem; 
          margin-top: -120px; /* Adjust for fixed navbar height */
        }

        .login-card { 
          background:#fff; 
          padding:2.5rem 2rem; 
          border-radius:15px;
          box-shadow:0 6px 25px rgba(0,0,0,0.1); 
          width:100%; 
          max-width:420px; 
          text-align:center; 
          transition:0.3s; 
        }
        .login-card:hover { 
          transform:translateY(-3px); 
          box-shadow:0 8px 25px rgba(0,0,0,0.15); 
        }

        h2 { color:#2a7a0e; margin-bottom:0.5rem; }
        p { color:#555; margin-bottom:1.5rem; }

        .login-toggle { 
          display:flex; 
          justify-content:center; 
          margin-bottom:1.2rem;
          background:#f3f4f6; 
          border-radius:10px; 
          overflow:hidden; 
        }
        .login-toggle button { 
          flex:1; 
          padding:0.7rem; 
          border:none; 
          background:transparent;
          font-weight:500; 
          color:#555; 
          cursor:pointer; 
          transition:0.3s; 
        }
        .login-toggle button.active { 
          background:#2a7a0e; 
          color:#fff; 
        }

        .login-form { display:flex; flex-direction:column; gap:1rem; }

        .login-form input, 
        .password-field input { 
          width:100%; 
          padding:0.9rem; 
          border:1px solid #ccc;
          border-radius:8px; 
          font-size:1rem; 
          outline:none;
        }

        .password-field { position:relative; }

        .toggle-password { 
          position:absolute; 
          right:12px; 
          top:50%; 
          transform:translateY(-50%);
          color:#2a7a0e; 
          font-size:0.9rem; 
          cursor:pointer; 
          font-weight:600; 
          user-select:none; 
        }

        .error-text { 
          color:red; 
          font-size:0.9rem; 
        }

        .login-btn { 
          background:#2a7a0e; 
          color:#fff; 
          padding:0.9rem; 
          border:none;
          border-radius:8px; 
          cursor:pointer; 
          font-weight:600; 
        }

        .divider { 
          margin:1.5rem 0; 
          color:#888; 
        }

        .sso-icons { 
          display:flex; 
          justify-content:center; 
          gap:1rem; 
        }

        .sso-btn { 
          width:45px; 
          height:45px; 
          border-radius:50%; 
          display:flex; 
          justify-content:center; 
          align-items:center;
          box-shadow:0 3px 10px rgba(0,0,0,0.15); 
          cursor:pointer; 
          transition:0.3s; 
        }

        .signup-text a { 
          color:#2a7a0e; 
          font-weight:600; 
          text-decoration:none; 
        }
      `}</style>
    </>
  );
};

export default VendorLogin;
