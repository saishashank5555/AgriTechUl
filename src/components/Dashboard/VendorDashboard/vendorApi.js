// src/api/vendorApi.js

// ✅ Temporary dummy vendor list (pretend database)
let vendorDB = [
  {
    firstName: "Raju",
    lastName: "Seeds",
    email: "vendor@gmail.com",
    password: "123",
    phoneNumber: "9876543210",
    businessName: "Raju Seeds Store",
    businessType: "Seed Supplier",
    address: "Guntur, Andhra Pradesh",
    city: "Guntur",
    state: "AP",
    pincode: "522001",
  },
];

// ✅ Load vendors from localStorage (if exists)
const savedVendors = JSON.parse(localStorage.getItem("vendorDB"));
if (savedVendors && savedVendors.length > 0) vendorDB = savedVendors;

// ✅ Save back to storage
const saveDB = () => localStorage.setItem("vendorDB", JSON.stringify(vendorDB));


// ✅ Login Vendor Function
export const loginVendor = (email, password) => {
  const vendor = vendorDB.find(
    (v) => v.email === email && v.password === password
  );

  if (!vendor) {
    throw new Error("Invalid Email or Password");
  }

  sessionStorage.setItem("vendorSession", JSON.stringify(vendor));
  return vendor;
};





// src/components/Dashboard/VendorDashboard/VendorProducts/vendorApi.js

let dummyProducts = [
  {
    id: 1,
    name: "Hybrid Tomato Seeds",
    category: "Seeds",
    price: 150,
    stock: 50,
    description: "High-yield hybrid tomato seeds ideal for warm climates.",
    image:
      "https://images.unsplash.com/photo-1603048297172-1d5a2608a2cc?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: 2,
    name: "Organic Fertilizer",
    category: "Fertilizers",
    price: 350,
    stock: 30,
    description: "Natural fertilizer with organic nutrients for soil enrichment.",
    image:
      "https://images.unsplash.com/photo-1590747854873-2c0e59c2a734?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: 3,
    name: "Power Sprayer",
    category: "Machinery",
    price: 12000,
    stock: 10,
    description: "Durable sprayer suitable for all types of crops.",
    image:
      "https://images.unsplash.com/photo-1602526218600-8ef2e779a58c?auto=format&fit=crop&w=400&q=60",
  },
];

// Simulated API calls
export const getVendorProducts = async () => Promise.resolve(dummyProducts);

export const addVendorProduct = async (product) => {
  const newProd = { id: Date.now(), ...product };
  dummyProducts.push(newProd);
  return Promise.resolve(newProd);
};

export const updateVendorProduct = async (id, updatedData) => {
  dummyProducts = dummyProducts.map((p) => (p.id === id ? { ...p, ...updatedData } : p));
  return Promise.resolve(updatedData);
};

export const deleteVendorProduct = async (id) => {
  dummyProducts = dummyProducts.filter((p) => p.id !== id);
  return Promise.resolve(true);
};
