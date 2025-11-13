// src/components/Dashboard/VendorDashboard/VendorProducts/ProductFormModal.jsx
import React, { useRef } from "react";

export default function ProductFormModal({ formData, setFormData, onSubmit, onCancel, editMode }) {
  const fileInputRef = useRef();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setFormData({ ...formData, image: reader.result });
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>{editMode ? "Edit Product" : "Add New Product"}</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Product Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Price (₹)"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Stock Quantity"
            value={formData.stock}
            onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
            required
          />
          <textarea
            placeholder="Product Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          ></textarea>

          <div className="upload-section">
            <label>Upload Product Image:</label>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
            />
            {formData.image && (
              <img src={formData.image} alt="preview" className="preview" />
            )}
          </div>

          <div className="form-actions">
            <button type="submit">{editMode ? "Update Product" : "Add Product"}</button>
            <button type="button" onClick={onCancel}>Cancel</button>
          </div>
        </form>

        <style jsx="true">{`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
          }
          .modal {
            background: #fff;
            border-radius: 12px;
            padding: 25px;
            width: 420px;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
            animation: fadeIn 0.3s ease-in-out;
          }
          h3 {
            color: #2a7a0e;
            margin-bottom: 18px;
          }
          input, textarea {
            width: 100%;
            margin-bottom: 10px;
            padding: 10px;
            border-radius: 6px;
            border: 1px solid #ccc;
            outline: none;
          }
          textarea {
            height: 70px;
            resize: none;
          }
          .upload-section {
            margin-top: 10px;
          }
          .preview {
            width: 100%;
            height: 150px;
            border-radius: 6px;
            object-fit: cover;
            margin-top: 8px;
            border: 1px solid #ddd;
          }
          .form-actions {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
          }
          .form-actions button {
            padding: 10px 16px;
            border: none;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
          }
          .form-actions button:first-child {
            background: #2a7a0e;
            color: white;
          }
          .form-actions button:last-child {
            background: #ccc;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        `}</style>
      </div>
    </div>
  );
}
