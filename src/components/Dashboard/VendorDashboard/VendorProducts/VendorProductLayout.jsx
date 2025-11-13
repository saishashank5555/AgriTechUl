// src/components/Dashboard/VendorDashboard/VendorProducts/VendorProductLayout.jsx
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import VendorProductList from "./VendorProductList";
import VendorProductDetails from "./VendorProductDetails";
import ProductFormModal from "./ProductFormModal";
import {
  getVendorProducts,
  addVendorProduct,
  updateVendorProduct,
  deleteVendorProduct,
} from "../vendorApi";

export default function VendorProductLayout() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    image: "",
  });

  // ✅ Load Products on Mount
  useEffect(() => {
    getVendorProducts().then(setProducts);
  }, []);

  // ✅ Add or Update Product
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode && selectedProduct) {
      await updateVendorProduct(selectedProduct.id, formData);
    } else {
      await addVendorProduct(formData);
    }

    const updated = await getVendorProducts();
    setProducts(updated);

    setShowForm(false);
    setEditMode(false);
    setSelectedProduct(null);
    setFormData({ name: "", category: "", price: "", stock: "", description: "", image: "" });
  };

  // ✅ Handle Edit Product
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setFormData(product);
    setEditMode(true);
    setShowForm(true);
  };

  // ✅ Handle View Product
  const handleView = (product) => {
    setSelectedProduct(product);
  };

  // ✅ Handle Delete Product
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteVendorProduct(id);
      const updated = await getVendorProducts();
      setProducts(updated);
      setSelectedProduct(null);
    }
  };

  // ✅ Open Add Product Form
  const handleAddProduct = () => {
    setFormData({ name: "", category: "", price: "", stock: "", description: "", image: "" });
    setEditMode(false);
    setShowForm(true);
  };

  return (
    <div className="vendor-layout">
      <div className="sidebar-area">
        {/* <Sidebar /> */}
      </div>

      <div className="main-content">
        <header className="page-header">
          <h2>Vendor Product Management</h2>
          <p>Manage, edit, and track your listed products easily.</p>
          <button className="add-btn" onClick={handleAddProduct}>
            ➕ Add Product
          </button>
        </header>

        {/* ✅ Product Grid */}
        <VendorProductList
          products={products}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {/* ✅ Product Details Modal */}
        {selectedProduct && !showForm && (
          <VendorProductDetails
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onEdit={() => handleEdit(selectedProduct)}
            onDelete={handleDelete}
          />
        )}

        {/* ✅ Add/Edit Modal */}
        {showForm && (
          <ProductFormModal
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            onCancel={() => setShowForm(false)}
            editMode={editMode}
          />
        )}
      </div>

      <style jsx="true">{`
        .vendor-layout {
          display: flex;
          min-height: 100vh;
          background: #f8fff8;
        }
        .sidebar-area {
          width: 250px;
          background: linear-gradient(180deg, #1f5d09, #2a7a0e);
        }
        .main-content {
          flex: 1;
          padding: 30px;
        }
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .page-header h2 {
          color: #2a7a0e;
          margin: 0;
        }
        .add-btn {
          background: #2a7a0e;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 10px 18px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }
        .add-btn:hover {
          background: #3ca82a;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
