// src/components/Dashboard/VendorDashboard/VendorProducts/VendorProductList.jsx
import React from "react";

export default function VendorProductList({ products, onView, onEdit, onDelete }) {
  return (
    <section className="product-grid">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-wrapper" onClick={() => onView(product)}>
              <img
                src={product.image || "https://via.placeholder.com/400x300?text=No+Image"}
                alt={product.name}
                className="product-image"
              />
            </div>

            <div className="product-info">
              <h4 onClick={() => onView(product)}>{product.name}</h4>
              <p className="category">{product.category}</p>
              <div className="meta">
                <span className="price">₹{product.price}</span>
                <span className="stock">Stock: {product.stock}</span>
              </div>
            </div>

            <div className="actions">
              <button className="edit-btn" onClick={() => onEdit(product)}>
                ✏️ Edit
              </button>
              <button className="delete-btn" onClick={() => onDelete(product.id)}>
                🗑️ Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="no-products">No products to display.</p>
      )}

      <style jsx="true">{`
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 20px;
          margin-top: 12px;
        }

        .product-card {
          background: #fff;
          border: 1px solid #e6efe4;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);
          transition: transform 0.24s ease, box-shadow 0.24s ease;
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
        }

        .image-wrapper {
          width: 100%;
          height: 180px;
          overflow: hidden;
          background: #f3f6f3;
          cursor: pointer;
        }
        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .product-card:hover .product-image {
          transform: scale(1.06);
        }

        .product-info {
          padding: 12px 14px;
          flex: 1;
        }
        .product-info h4 {
          color: #1f5d09;
          margin: 0 0 6px;
          font-size: 1.05rem;
          font-weight: 700;
        }
        .product-info h4:hover { color: #3ca82a; }

        .category { color: #6d8a65; font-size: 0.9rem; margin-bottom: 8px; }
        .meta { display:flex; gap:10px; align-items:center; justify-content:space-between; }
        .price { color: #2a7a0e; font-weight:700; }
        .stock { font-size: 0.9rem; color: #556b4a; }

        .actions {
          display:flex;
          gap:8px;
          padding:10px 12px;
          border-top:1px solid #f0f5f0;
        }
        .edit-btn, .delete-btn {
          flex: 1;
          border: none;
          border-radius: 8px;
          padding: 8px;
          font-weight: 700;
          cursor: pointer;
        }
        .edit-btn { background: #eaf8ea; color: #1f5d09; }
        .delete-btn { background: #fff0f0; color: #b30000; }

        .no-products {
          grid-column: 1 / -1;
          text-align: center;
          color: #6b7f68;
          font-weight: 600;
        }

        @media (max-width: 640px) {
          .image-wrapper { height: 150px; }
        }
      `}</style>
    </section>
  );
}
