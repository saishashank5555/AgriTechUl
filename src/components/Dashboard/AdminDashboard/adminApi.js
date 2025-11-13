// Dummy admin data
const admins = [
  {
    email: "admin@gmail.com",
    phone: "1234567890",
    password: "123",
    firstName: "Super",
  },
];

// Login handler
export const loginAdmin = (username, password) => {
  const admin = admins.find(
    (a) =>
      (a.email === username || a.phone === username) &&
      a.password === password
  );

  if (!admin) {
    throw new Error("Invalid admin credentials.");
  }

  return admin;
};
