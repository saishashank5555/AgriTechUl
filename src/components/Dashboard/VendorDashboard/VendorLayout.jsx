import React from "react";
import VendorNavbar from "./VendorNavbar";
import VendorSidebar from "./Sidebar"
import { Outlet } from "react-router-dom";

export default function VendorLayout() {
  return (
    <div className="vendor-layout">
      <header className="vendor-navbar">
        <VendorNavbar />
      </header>

      <div className="vendor-body">
        {/* Sidebar wrapper controls transform/animation */}
        <div className="vendor-sidebar-wrapper">
          <VendorSidebar />
        </div>

        {/* Main content where nested routes render */}
        <main className="vendor-content">
          <Outlet />
        </main>
      </div>

      <style jsx="true">{`
        :root {
          --sidebar-width: 250px;
          --navbar-height: 65px;
          --border-color: rgba(0, 0, 0, 0.06);
        }

        .vendor-layout {
          display: flex;
          flex-direction: column;
          height: 100vh;
          width: 100%;
          background: #f8fff8;
          font-family: "Poppins", sans-serif;
          overflow: hidden;
        }

        .vendor-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--navbar-height);
          z-index: 2000;
          background: transparent; /* VendorNavbar component has its own background */
        }

        .vendor-body {
          display: flex;
          flex: 1;
          margin-top: var(--navbar-height);
          height: calc(100vh - var(--navbar-height));
          min-height: 0; /* important for children scroll */
        }

        /* wrapper for sidebar - used for transforms if needed */
        .vendor-sidebar-wrapper {
          width: var(--sidebar-width);
          min-width: var(--sidebar-width);
          height: calc(100vh - var(--navbar-height));
          position: relative;
          z-index: 1500;
          flex-shrink: 0;
        }

        .vendor-content {
          flex: 1;
          background: #ffffff;
          padding: 24px 32px;
          height: calc(100vh - var(--navbar-height));
          overflow-y: auto;
          box-shadow: inset 8px 0 8px -8px rgba(0, 0, 0, 0.08);
          min-width: 0; /* allow children to shrink */
        }

        /* custom scrollbar */
        .vendor-content::-webkit-scrollbar {
          width: 8px;
        }
        .vendor-content::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.12);
          border-radius: 6px;
        }

        @media (max-width: 992px) {
          .vendor-body {
            flex-direction: column;
            height: auto;
          }
          .vendor-sidebar-wrapper {
            width: 100%;
            min-width: 100%;
            position: relative;
            height: auto;
          }
          .vendor-content {
            margin-top: 0;
            height: auto;
            padding: 16px;
            box-shadow: none;
          }
        }
      `}</style>
    </div>
  );
}
