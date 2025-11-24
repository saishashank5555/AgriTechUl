import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import UserNavbar from "./Dashboard/UserDashboard/Usernavbar";

export default function NavbarWrapper() {
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("auth") === "true"
  );

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("auth") === "true");

    const handleStorage = (e) => {
      if (e.key === "auth") {
        setIsLoggedIn(e.newValue === "true");
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [location]);

  // ❗ EXCLUDE ADMIN & VENDOR ROUTES
  const path = location.pathname;

  if (path.startsWith("/admin") || path.startsWith("/vendor")) {
    return null; // no navbar at all
  }

  // PUBLIC + USER ROUTES
  return isLoggedIn ? <UserNavbar /> : <Navbar />;
}
