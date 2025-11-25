export function requireAuth(navigate, redirectTo) {
  const logged = sessionStorage.getItem("auth") === "true";
  if (logged) return true;
  // set redirect and navigate to login
  if (redirectTo) {
    sessionStorage.setItem("redirectTo", redirectTo);
  }
  navigate("/login");
  return false;
}

export function isLoggedIn() {
  return sessionStorage.getItem("auth") === "true";
}
