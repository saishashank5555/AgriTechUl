import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/authApi";
import defaultUsers from "../Dashboard/UserDashboard/userlogin";

const Login = () => {
  const [isEmailLogin, setIsEmailLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ------------------ LOGIN FUNCTION ------------------
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      // 1️⃣ Try backend login
      const data = await loginUser(username, password);

      if (data?.accessToken) {
        sessionStorage.setItem("accessToken", data.accessToken);
        sessionStorage.setItem("refreshToken", data.refreshToken);
        sessionStorage.setItem("userEmail", username);
        sessionStorage.setItem("auth", "true");

        alert("Login Successful!");

        // ⭐ Redirect to Buy-Now if required or to saved path
        const redirectToBuyNow = sessionStorage.getItem("redirectToBuyNow");
        if (redirectToBuyNow) {
          sessionStorage.removeItem("redirectToBuyNow");
          navigate("/buy-now");
          return;
        }
        const redirectTo = sessionStorage.getItem("redirectTo");
        if (redirectTo) {
          sessionStorage.removeItem("redirectTo");
          navigate(redirectTo);
        } else {
          navigate("/userdashboard");
        }
        return;
      }

      setErrorMsg(data?.message || "Trying offline login...");
    } catch {
      console.warn("Backend offline — using fallback login");
    }

    // 2️⃣ Offline fallback login
    const foundUser = defaultUsers.find(
      (u) =>
        u.email.toLowerCase() === username.toLowerCase() &&
        u.password === password
    );

    if (foundUser) {
      sessionStorage.setItem("auth", "true");
      alert("Offline Login Successful!");

      // ⭐ Redirect to Buy Now if needed
      const redirectToBuyNow = sessionStorage.getItem("redirectToBuyNow");
      if (redirectToBuyNow) {
        sessionStorage.removeItem("redirectToBuyNow");
        navigate("/buy-now");
        return;
      }
      const redirectTo = sessionStorage.getItem("redirectTo");
      if (redirectTo) {
        sessionStorage.removeItem("redirectTo");
        navigate(redirectTo);
      } else {
        navigate("/userdashboard");
      }
    } else {
      setErrorMsg("Invalid username or password (offline login)");
    }

    setLoading(false);
  };

  return (
    <>
      {/* 🌟 FULL SCREEN CENTER WRAPPER */}
      <div className="login-page-wrapper">
        <div className="login-container">

          <h2>Welcome Back</h2>
          <p>Login to continue your AgriTechPro journey</p>

          {/* Toggle Email / Phone */}
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
              className="passwordbox"
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

            {/* FORGOT PASSWORD FIXED */}
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>

            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

            <button className="login-btn" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="divider"><span>OR</span></div>

          {/* Social Icons */}
          <div className="sso-icons">
            <a className="sso-btn google">
              <FcGoogle size={22} />
            </a>
            <a className="sso-btn github">
              <FaGithub size={20} />
            </a>
            <a className="sso-btn facebook">
              <FaFacebookF size={20} />
            </a>
            <a className="sso-btn linkedin">
              <FaLinkedinIn size={20} />
            </a>
          </div>

          <p className="signup-text">
            Don’t have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>

      {/* ------------------ UPDATED CSS ------------------ */}
      <style>{`
        .login-page-wrapper {
          display:flex;
          justify-content:center;
          align-items:center;
          min-height:100vh;
          padding:2rem;
          background:linear-gradient(135deg, #e8f5e9, #f1f8e9);
        }

        .login-container {
          width:100%;
          max-width:420px;
          background:#fff;
          padding:2.4rem 2rem;
          border-radius:15px;
          box-shadow:0 6px 25px rgba(0,0,0,0.1);
          text-align:center;
        }

        .login-container:hover {
          transform:translateY(-3px);
          box-shadow:0 8px 25px rgba(0,0,0,0.15);
        }

        h2 { color:#2a7a0e; }

        .login-toggle {
          display:flex;
          width:100%;
          background:#f3f4f6;
          margin:1rem 0 1.3rem;
          border-radius:10px;
          overflow:hidden;
        }
        .login-toggle button {
          flex:1;
          padding:.8rem;
          border:none;
          font-weight:600;
          cursor:pointer;
          background:transparent;
        }
        .login-toggle .active {
          background:#2a7a0e;
          color:white;
        }

        .login-form {
          display:flex;
          flex-direction:column;
          gap:1rem;
        }

        .login-form input {
          padding:.9rem;
          border:1px solid #ccc;
          border-radius:8px;
          font-size:1rem;
        }

        .password-field { position:relative;
        }
        .passwordbox {          
          width:93%;
          padding-right:60px;
        }

        .toggle-password {
          position:absolute;
          right:12px;
          top:50%;
          transform:translateY(-50%);
          cursor:pointer;
          font-size:.9rem;
          font-weight:600;
          color:#2a7a0e;
        }

        .forgot-password {
          text-align:right;
          margin-top:-5px;
          margin-bottom:8px;
        }
        .forgot-password a {
          color:#2a7a0e;
          font-size:.9rem;
          text-decoration:none;
        }

        .login-btn {
          padding:.9rem;
          background:#2a7a0e;
          color:white;
          border:none;
          border-radius:8px;
          font-weight:600;
          cursor:pointer;
        }

        .divider { margin:1.5rem 0; color:#777; }

        .sso-icons {
          display:flex;
          justify-content:center;
          gap:1.2rem;
          margin-bottom:1rem;
        }

        .sso-btn {
          width:45px;
          height:45px;
          background:#fff;
          border-radius:50%;
          display:flex;
          justify-content:center;
          align-items:center;
          box-shadow:0 3px 10px rgba(0,0,0,.15);
          cursor:pointer;
        }

        .github { background:#333; color:white; }
        .facebook { background:#1877f2; color:white; }
        .linkedin { background:#0077b5; color:white; }

        .signup-text a {
          color:#2a7a0e;
          font-weight:600;
        }

        @media (max-width:600px) {
          .login-container { padding:2rem 1.4rem; }
          .passwordbox {          
          width:93%;
          padding-right:60px;
        }
        }
      `}</style>
    </>
  );
};

export default Login;
