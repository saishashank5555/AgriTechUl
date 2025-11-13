// src/components/Dashboard/VendorDashboard/VendorProducts/VendorProductDetails.jsx
import React from "react";

export default function VendorProductDetails({ product, onClose, onEdit, onDelete }) {
  if (!product) return null;

  return (
    <div className="overlay">
      <div className="details-card">
        <div className="image-section">
          <img
            src={product.image || "https://via.placeholder.com/300"}
            alt={product.name}
            className="product-img"
          />
        </div>

        <div className="info-section">
          <h3>{product.name}</h3>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ₹{product.price}</p>
          <p><strong>Stock:</strong> {product.stock}</p>
          <p><strong>Description:</strong> {product.description || "No description available."}</p>

          <div className="actions">
            <button className="edit" onClick={() => onEdit(product)}>✏️ Edit</button>
            <button className="delete" onClick={() => onDelete(product.id)}>🗑️ Delete</button>
            <button className="close" onClick={onClose}>❌ Close</button>
          </div>
        </div>

        <style jsx="true">{`
          .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.45);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
          }
          .details-card {
            background: #fff;
            border-radius: 12px;
            padding: 20px;
            width: 500px;
            max-width: 90%;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
            animation: fadeIn 0.3s ease;
          }
          .image-section {
            text-align: center;
          }
          .product-img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 15px;
          }
          .info-section h3 {
            margin-bottom: 10px;
            color: #1f5d09;
          }
          .info-section p {
            margin: 6px 0;
            color: #444;
          }
          .actions {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
          }
          .actions button {
            flex: 1;
            margin: 0 6px;
            padding: 10px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            transition: 0.3s;
          }
          .edit {
            background: #e0f7e0;
            color: #1f5d09;
          }
          .delete {
            background: #ffe6e6;
            color: #b30000;
          }
          .close {
            background: #ccc;
            color: #333;
          }
          .edit:hover {
            background: #c9f6c9;
          }
          .delete:hover {
            background: #ffcccc;
          }
          .close:hover {
            background: #bbb;
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
