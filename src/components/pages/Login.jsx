import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/authApi";

// ⭐ ADD NAVBAR
import Navbar from "../Navbar"; // Adjust path if needed

const Login = () => {
  const [isEmailLogin, setIsEmailLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Login API call
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const data = await loginUser(username, password);

      if (data.accessToken) {
        sessionStorage.setItem("accessToken", data.accessToken);
        sessionStorage.setItem("refreshToken", data.refreshToken);
        sessionStorage.setItem("userEmail", username);

        alert("Login Successful!");
        navigate("/userdashboard");
      } else {
        setErrorMsg(data.message || "Invalid email or password");
      }
    } catch (error) {
      setErrorMsg(error.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ⭐ Top Navbar */}
      <Navbar />

      {/* ⭐ Wrapper so navbar does not cover login UI */}
      <div style={{ paddingTop: "120px" }}>
        <div className="login-container">
          <div className="login-card">
            <h2>Welcome Back</h2>
            <p>Login to continue your AgriTechPro journey</p>

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
                placeholder={
                  isEmailLogin ? "Enter your email" : "Enter your phone number"
                }
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

              <div className="forgot-password">
                <a href="/forgot-password">Forgot Password?</a>
              </div>

              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="divider">
              <span>OR</span>
            </div>

            {/* OAuth Buttons */}
            <div className="sso-icons">
              <a
                href="http://localhost:8080/oauth2/authorization/google"
                className="sso-btn google"
              >
                <FcGoogle size={22} />
              </a>

              <a
                href="http://localhost:8080/oauth2/authorization/github"
                className="sso-btn github"
              >
                <FaGithub size={20} />
              </a>

              <a href="#" className="sso-btn facebook">
                <FaFacebookF size={20} />
              </a>

              <a href="#" className="sso-btn linkedin">
                <FaLinkedinIn size={20} />
              </a>
            </div>

            <p className="signup-text">
              Don’t have an account? <Link to="/register">Sign up</Link>
            </p>
          </div>
        </div>
      </div>

      {/* ⭐ Your Original Styling — unchanged */}
      <style>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #e8f5e9, #f1f8e9);
          padding: 1rem;
           margin-top: -120px; /* Adjust for fixed navbar height */
        }
        .login-card {
          background: #fff;
          padding: 2.5rem 2rem;
          border-radius: 15px;
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 420px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .login-card:hover { transform: translateY(-3px); box-shadow: 0 8px 25px rgba(0,0,0,0.15); }
        h2 { color: #2a7a0e; margin-bottom: .5rem; }
        p { color: #555; font-size: .95rem; margin-bottom: 1.5rem; }

        .login-toggle {
          display: flex;
          justify-content: center;
          margin-bottom: 1.2rem;
          background: #f3f4f6;
          border-radius: 10px;
          overflow: hidden;
        }
        .login-toggle button {
          flex: 1; padding: .7rem; border: none; background: transparent;
          font-weight: 500; color: #555; cursor: pointer; transition: .3s;
        }
        .login-toggle button.active { background: #2a7a0e; color: #fff; }

        .login-form { display: flex; flex-direction: column; gap: 1rem; }
        .login-form input {
          width: 100%; padding: .9rem; border: 1px solid #ccc; border-radius: 8px;
          font-size: 1rem; outline: none; transition: .3s;
        }
        .login-form input:focus { border-color: #2a7a0e; box-shadow: 0 0 5px rgba(42,122,14,.2); }

        .password-field { position: relative; }
        .toggle-password {
          position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
          color: #2a7a0e; font-size: .9rem; cursor: pointer; font-weight: 600;
        }

        .forgot-password { text-align: right; }
        .forgot-password a { color: #2a7a0e; font-size: .9rem; text-decoration: none; }

        .login-btn {
          background: #2a7a0e; color: #fff; padding: .9rem; border: none;
          border-radius: 8px; cursor: pointer; font-weight: 600;
        }

        .divider { margin: 1.5rem 0; color: #999; font-weight: 500; font-size: .9rem; }

        .sso-icons { display: flex; justify-content: center; gap: 1rem; margin-bottom: 1rem; }
        .sso-btn {
          width: 45px; height: 45px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #fff; font-size: 1.2rem;
          transition: all .3s ease; box-shadow: 0 3px 10px rgba(0,0,0,.15);
        }

        .sso-btn.google { background: #fff; border: 1px solid #ddd; color: #000; }
        .sso-btn.github { background: #333; }
        .sso-btn.facebook { background: #1877f2; }
        .sso-btn.linkedin { background: #0077b5; }

        .signup-text a { color: #2a7a0e; text-decoration: none; font-weight: 600; }

        @media (max-width: 600px) {
          .login-card { padding: 2rem 1.5rem; }
          h2 { font-size: 1.3rem; }
        }
      `}</style>
    </>
  );
};

export default Login;
