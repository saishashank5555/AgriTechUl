import React, { useState } from "react";
import { Sun, Moon, Bell, Smartphone, Save } from "lucide-react";

export default function VendorSettings() {
  const [account, setAccount] = useState({
    businessName: "GreenGrow Traders",
    email: "vendor@grow.com",
    phone: "9876543210",
  });

  const [password, setPassword] = useState({
    currentPwd: "",
    newPwd: "",
    confirmPwd: "",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
  });

  const [themeDark, setThemeDark] = useState(false);
  const [saving, setSaving] = useState(false);

  function handleAccountChange(e) {
    setAccount((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handlePasswordChange(e) {
    setPassword((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function toggleNotification(key) {
    setNotifications((s) => ({ ...s, [key]: !s[key] }));
  }

  function saveAccount() {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert("Account settings saved.");
    }, 700);
  }

  function changePassword() {
    if (!password.currentPwd || !password.newPwd) {
      alert("Please fill required password fields.");
      return;
    }
    if (password.newPwd !== password.confirmPwd) {
      alert("New password and confirm password do not match.");
      return;
    }
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setPassword({ currentPwd: "", newPwd: "", confirmPwd: "" });
      alert("Password updated successfully.");
    }, 900);
  }

  function savePreferences() {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert("Preferences saved.");
    }, 600);
  }

  return (
    <div className="settings-page">
      <header className="header">
        <h1>⚙️ Settings</h1>
        <p>Manage account, security and notifications for your vendor account.</p>
      </header>

      <div className="grid">

        {/* Account */}
        <section className="card">
          <h2>Account</h2>
          <p className="muted">Basic business contact information.</p>

          <div className="form">
            <label>
              Business Name
              <input name="businessName" value={account.businessName} onChange={handleAccountChange} />
            </label>

            <label>
              Email
              <input name="email" value={account.email} onChange={handleAccountChange} />
            </label>

            <label>
              Phone
              <input name="phone" value={account.phone} onChange={handleAccountChange} />
            </label>

            <div className="row">
              <button className="btn primary" onClick={saveAccount} disabled={saving}>
                <Save size={14} /> {saving ? "Saving..." : "Save Account"}
              </button>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="card">
          <h2>Security</h2>
          <p className="muted">Change your password to keep your account secure.</p>

          <div className="form">
            <label>
              Current Password
              <input name="currentPwd" type="password" value={password.currentPwd} onChange={handlePasswordChange} />
            </label>

            <label>
              New Password
              <input name="newPwd" type="password" value={password.newPwd} onChange={handlePasswordChange} />
            </label>

            <label>
              Confirm New Password
              <input name="confirmPwd" type="password" value={password.confirmPwd} onChange={handlePasswordChange} />
            </label>

            <div className="row">
              <button className="btn danger" onClick={changePassword}>Change Password</button>
            </div>
          </div>
        </section>

        {/* Preferences */}
        <section className="card">
          <h2>Notifications & Preferences</h2>
          <p className="muted">Control how you receive notifications and app preferences.</p>

          <div className="form">
            <div className="toggle-row">
              <div className="label">
                <Bell /> Email Notifications
              </div>
              <label className="switch">
                <input type="checkbox" checked={notifications.email} onChange={() => toggleNotification("email")} />
                <span className="slider" />
              </label>
            </div>

            <div className="toggle-row">
              <div className="label">
                <Smartphone /> SMS Notifications
              </div>
              <label className="switch">
                <input type="checkbox" checked={notifications.sms} onChange={() => toggleNotification("sms")} />
                <span className="slider" />
              </label>
            </div>

            <div className="toggle-row">
              <div className="label">
                Theme
              </div>
              <button className="theme-toggle" onClick={() => setThemeDark((s) => !s)}>
                {themeDark ? <Moon /> : <Sun />} {themeDark ? "Dark" : "Light"}
              </button>
            </div>

            <div className="row">
              <button className="btn" onClick={savePreferences}>Save Preferences</button>
            </div>
          </div>
        </section>
      </div>

      <style jsx="true">{`
        .settings-page {
          animation: fadeIn 0.35s ease;
        }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px) } to { opacity: 1; transform: translateY(0) } }

        .header h1 {
          margin: 0;
          color: #145108;
          font-size: 26px;
          font-weight: 800;
        }
        .header p { margin: 6px 0 18px; color: #556b57; }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .card {
          background: #fff;
          padding: 18px;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.04);
        }

        .card h2 { margin: 0 0 6px; color: #1f5d09; }
        .muted { color: #6b7769; margin-bottom: 12px; }

        .form label {
          display: block;
          margin-bottom: 10px;
          font-weight: 600;
          color: #234d09;
        }
        .form input[type="text"],
        .form input[type="password"],
        .form input[type="email"] {
          width: 100%;
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          margin-top: 6px;
          font-size: 14px;
        }

        .row {
          margin-top: 12px;
          display: flex;
          gap: 10px;
        }

        .btn {
          padding: 10px 14px;
          border-radius: 8px;
          border: 1px solid rgba(0,0,0,0.06);
          background: #f3faf3;
          color: #135007;
          font-weight: 700;
          cursor: pointer;
        }
        .btn.primary {
          background: #2a7a0e;
          color: #fff;
          display: inline-flex;
          gap: 8px;
          align-items: center;
        }
        .btn.danger {
          background: #fee2e2;
          color: #9b1c1c;
          border: none;
        }

        .toggle-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px dashed #eef6ee;
        }
        .toggle-row .label {
          display: flex;
          gap: 8px;
          align-items: center;
          color: #234d09;
          font-weight: 600;
        }

        /* switch */
        .switch { position: relative; display: inline-block; width: 48px; height: 26px; }
        .switch input { opacity: 0; width: 0; height: 0; }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0; left: 0; right: 0; bottom: 0;
          background: #cfe9cf;
          transition: .2s;
          border-radius: 999px;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 18px; width: 18px;
          left: 4px; top: 4px;
          background: white;
          transition: .2s;
          border-radius: 50%;
        }
        .switch input:checked + .slider { background: #2a7a0e; }
        .switch input:checked + .slider:before { transform: translateX(22px); }

        .theme-toggle {
          background: transparent;
          border: 1px solid #e6f4e6;
          padding: 8px 12px;
          border-radius: 8px;
          display: inline-flex;
          gap: 8px;
          align-items: center;
          cursor: pointer;
          color: #145108;
          font-weight: 700;
        }

        @media (max-width: 980px) {
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
