import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import Contactus from "./components/pages/Contactus";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Footer from "./components/Footer";

import VegetableSeedsPage from "./components/VegetableSeeds/VegetableSeedsPage";
import SeedDetailsPage from "./components/VegetableSeeds/SeedDetailsPage";
import FertilizersPage from "./components/Fertilizers/FertilizersPage";
import FarmMachineryPage from "./components/FarmMachinery/FarmMachineryPage";
import OffersPage from "./components/Offers/OffersPage";
import BestSellingPage from "./components/BestSelling/BestSellingPage";

import VendorLogin from "./components/Dashboard/VendorDashboard/VendorLogin";
import VendorRegister from "./components/Dashboard/VendorDashboard/VendorRegister";

// **Vendor Layout & Pages**
import VendorLayout from "./components/Dashboard/VendorDashboard/VendorLayout";
import VendorDashboard from "./components/Dashboard/VendorDashboard/VendorDashboard";
import VendorProductLayout from "./components/Dashboard/VendorDashboard/VendorProducts/VendorProductLayout";
import VendorOrders from "./components/Dashboard/VendorDashboard/VendorOrders/index.jsx";
import VendorProfile from "./components/Dashboard/VendorDashboard/VendorProfile";
import VendorSettings from "./components/Dashboard/VendorDashboard/VendorSettings.jsx";
import AdminLogin from "./components/Dashboard/AdminDashboard/AdminLogin.jsx";

function App() {
  return (
    <>
      {/* Normal Site Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/contact" element={<Contactus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />

        <Route path="/category/vegetable-seeds" element={<VegetableSeedsPage />} />
        <Route path="/seeds/:id" element={<SeedDetailsPage />} />
        <Route path="/category/fertilizers" element={<FertilizersPage />} />
        <Route path="/category/farm-machinery" element={<FarmMachineryPage />} />

        <Route path="/offers-today" element={<OffersPage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />

        {/* Vendor Auth */}
        <Route path="/vendor-login" element={<VendorLogin />} />
        <Route path="/vendor-register" element={<VendorRegister />} />

        {/* ------------------------------- */}
        {/* ✔ Vendor Dashboard with Layout */}
        {/* ------------------------------- */}
        <Route path="/vendor" element={<VendorLayout />}>
          {/* Default redirect */}
          <Route index element={<Navigate to="dashboard" replace />} />

          {/* Dashboard home */}
          <Route path="dashboard" element={<VendorDashboard />} />

          {/* Product Management */}
          <Route path="products" element={<VendorProductLayout />} />

          {/* Orders */}
          <Route path="orders" element={<VendorOrders />} />

          {/* Profile */}
          <Route path="profile" element={<VendorProfile />} />

          <Route path="about" element={<About />} />
          
          <Route path="services" element={<Services />} />

          <Route path="contact" element={<Contactus />} />

          <Route path="settings" element={<VendorSettings />} />




        </Route>
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Fallback Route */}
        <Route path="*" element={<div style={{ padding: 40 }}>404 Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
