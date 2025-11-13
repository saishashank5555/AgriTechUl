// src/components/ScrollToTop.jsx
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 * - Smoothly scrolls to top after every route change.
 * - Works across persistent layouts like MainLayout.
 * - Restores scroll if user presses "Back" in browser.
 */
export default function ScrollToTop() {
  const { pathname, key } = useLocation();
  const scrollPositions = useRef({});

  useEffect(() => {
    // Restore previous scroll position if available (back navigation)
    const prevPos = scrollPositions.current[key];
    if (prevPos !== undefined) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: prevPos, behavior: "auto" });
      });
      return;
    }

    // Otherwise, scroll to top after render
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Save current scroll position on route leave
    const handleBeforeUnload = () => {
      scrollPositions.current[key] = window.scrollY;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [pathname, key]);

  return null;
}