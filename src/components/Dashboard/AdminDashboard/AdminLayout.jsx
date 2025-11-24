import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="admin-layout">
      {/* <AdminNavbar> </AdminNavbar> */}
      <header className="admin-navbar">
        <AdminNavbar setSidebarOpen={setSidebarOpen} />
      </header>

      <div className="admin-body">

        <aside
          className={`admin-sidebar-container ${
            sidebarOpen ? "open" : "closed"
          }`}
        >
          <AdminSidebar />
        </aside>

        <main
          className={`admin-content ${
            sidebarOpen ? "with-sidebar" : "full-width"
          }`}
        >
          <Outlet />
        </main>
      </div>

      <style jsx="true">{`
        :root {
          --admin-sidebar-width: 230px;
          --admin-navbar-height: 70px;
        }

        .admin-layout {
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #eef3ff;
          overflow: hidden;
        }

        .admin-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--admin-navbar-height);
          z-index: 2000;
        }

        .admin-body {
          display: flex;
          flex: 1;
          margin-top: var(--admin-navbar-height);
          height: calc(100vh - var(--admin-navbar-height));
        }

       /* SLIDING SIDEBAR */
.admin-sidebar-container {
  width: var(--admin-sidebar-width);
  min-width: var(--admin-sidebar-width);
  transition: all 0.3s ease-in-out;
  overflow-y: auto;
  background: #0d1b2a;
}

/* Sidebar CLOSED → width becomes 0 */
.admin-sidebar-container.closed {
  width: 0;
  min-width: 0;
  overflow: hidden;
}


        .admin-sidebar-container.open {
          transform: translateX(0);
        }

        /* CONTENT AREA RESPONSIVE SHIFT */
        .admin-content {
  flex: 1;
  background: #ffffff;
  padding: 25px 32px;
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
}


        .admin-content.with-sidebar {
          margin-left: 0; /* no need margin because sidebar is inside flex */
        }

        .admin-content.full-width {
          margin-left: 0;
        }

        @media (max-width: 768px) {
          .admin-content {
            padding: 15px 20px;
          }
        }
      `}</style>
    </div>
  );
}
