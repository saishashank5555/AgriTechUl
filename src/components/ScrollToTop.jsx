// src/components/ScrollToTop.jsx
import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * ScrollToTop
 * - Only scrolls to top on client navigations (PUSH / REPLACE).
 * - Does NOT override browser behavior on POP (back/forward) or page refresh;
 *   this prevents unexpected jumps when user refreshes or uses browser controls.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  // Use layout effect to run synchronously before paint so the new page
  // appears at the top immediately (no visible scroll animation).
  useLayoutEffect(() => {
    // If navigation is POP (back/forward or refresh), allow browser to restore position.
    if (navType === "POP") return;

    // For client navigations (PUSH/REPLACE) force immediate top-of-page.
    // Use synchronous scroll to avoid a visible smooth animation from previous scroll position.
    try {
      window.scrollTo(0, 0);
    } catch (e) {
      // fallback: no-op
    }
  }, [pathname, navType]);

  return null;
}