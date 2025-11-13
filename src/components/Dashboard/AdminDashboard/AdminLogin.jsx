import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { loginAdmin } from "./adminApi";
import Navbar from "../../Navbar";

const AdminLogin = () => {
  const [isEmailLogin, setIsEmailLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const admin = loginAdmin(username, password);
      alert(`Welcome Admin ${admin.firstName}!`);
      navigate("/admin");
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ paddingTop: "120px" }}>
        <div className="login-container">
          <div className="login-card">

            <h2>Admin Login</h2>
            <p>Access admin control panel & manage the system</p>

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

            <form className="login-form" onSubmit={handleLogin}>
              <input
                type={isEmailLogin ? "email" : "tel"}
                placeholder={isEmailLogin ? "Enter admin email" : "Enter admin phone"}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter admin password"
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

            <div className="sso-icons">
              <a className="sso-btn google"><FcGoogle size={22} /></a>
              <a className="sso-btn github"><FaGithub size={20} /></a>
              <a className="sso-btn facebook"><FaFacebookF size={20} /></a>
              <a className="sso-btn linkedin"><FaLinkedinIn size={20} /></a>
            </div>

            <p className="signup-text">
              Need an Admin Account? <Link to="/admin-register">Create One</Link>
            </p>
          </div>

          {/* UPDATED STYLING */}
          <style>{`
            .login-container { 
              display:flex; justify-content:center; align-items:center;
              min-height:100vh; background:linear-gradient(135deg,#e8f5e9,#f1f8e9);
              padding:1rem; 
              margin-top: -120px; 
            }

            .login-card { 
              background:#fff; padding:2.5rem 2rem; border-radius:15px;
              box-shadow:0 6px 25px rgba(0,0,0,0.1); width:100%;
              max-width:420px; text-align:center; transition:0.3s; 
            }

            .login-card:hover { 
              transform:translateY(-3px); 
              box-shadow:0 8px 25px rgba(0,0,0,0.15); 
            }

            h2 { color:#2a7a0e; margin-bottom:0.5rem; }
            p { color:#555; margin-bottom:1.5rem; }

            .login-toggle { 
              display:flex; justify-content:center; margin-bottom:1.2rem;
              background:#f3f4f6; border-radius:10px; overflow:hidden; 
            }

            .login-toggle button { 
              flex:1; padding:0.7rem; border:none; background:transparent;
              font-weight:500; color:#444; cursor:pointer; transition:0.3s; 
            }

            .login-toggle button.active { 
              background:#2a7a0e; color:#fff; 
            }

            .login-form { display:flex; flex-direction:column; gap:1rem; }

            .login-form input { 
              width:100%; padding:0.9rem; border:1px solid #ccc;
              border-radius:8px; font-size:1rem; outline:none; 
            }

            .password-field { position:relative; }

            .toggle-password { 
              position:absolute; right:12px; top:50%; transform:translateY(-50%);
              color:#2a7a0e; font-size:0.9rem; cursor:pointer;
              font-weight:600; 
            }

            .error-text { color:red; font-size:0.9rem; }

            .login-btn { 
              background:#2a7a0e; color:#fff; padding:0.9rem; border:none;
              border-radius:8px; cursor:pointer; font-weight:600; transition:0.3s; 
            }

            .login-btn:hover {
              background:#3ca82a;
            }

            .divider { margin:1.5rem 0; color:#999; }

            .sso-icons { display:flex; justify-content:center; gap:1rem; }

            .sso-btn { 
              width:45px; height:45px; border-radius:50%;
              display:flex; justify-content:center; align-items:center;
              box-shadow:0 3px 10px rgba(0,0,0,0.15); cursor:pointer; 
            }

            .sso-btn.google { background:#fff; border:1px solid #ddd; color:#000; }
            .sso-btn.github { background:#333; color:white; }
            .sso-btn.facebook { background:#1877f2; color:white; }
            .sso-btn.linkedin { background:#0077b5; color:white; }

            .signup-text a { color:#2a7a0e; font-weight:600; text-decoration:none; }
          `}</style>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
