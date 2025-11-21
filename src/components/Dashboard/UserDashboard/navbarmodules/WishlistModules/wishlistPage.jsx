import React from "react";
import { Link } from "react-router-dom";
import { FaHeartBroken, FaShoppingCart, FaTrash } from "react-icons/fa";
import UserNavbar from "../../Usernavbar";

export default function WishlistPage() {
  const wishlist = [
    {
      id: 1,
      name: "Organic Fertilizer 5KG",
      price: 450,
      mrp: 699,
      discount: "35% off",
      img: "https://m.media-amazon.com/images/I/71JFZ8tL4xL.jpg",
    },
    {
      id: 2,
      name: "Hybrid Maize Seeds 1KG",
      price: 320,
      mrp: 420,
      discount: "24% off",
      img: "https://www.bigbasket.com/media/uploads/p/xxl/40120007-2_3-seeds-corn-hybrid.jpg",
    },
  ];

  return (
   <>
   <UserNavbar/>
    <div className="wishlist-wrapper">

      {/* INTERNAL CSS */}
      <style>{`
        .wishlist-wrapper {
          max-width: 1100px;
          margin: auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .title {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        /* GRID layout */
        .wishlist-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 18px;
        }

        .wish-card {
          background: white;
          padding: 14px;
          border-radius: 14px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.08);
          border: 1px solid #eee;
          transition: 0.3s;
        }
        .wish-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
        }

        .wish-img {
          width: 100%;
          height: 200px;
          object-fit: contain;
          background: #fafafa;
          border-radius: 12px;
        }

        .wish-name {
          font-weight: bold;
          font-size: 18px;
          margin-top: 10px;
        }

        .price-box {
          margin-top: 8px;
        }
        .price {
          color: green;
          font-size: 20px;
          font-weight: bold;
        }
        .mrp {
          margin-left: 10px;
          text-decoration: line-through;
          color: #777;
        }
        .discount {
          color: #d32f2f;
          margin-left: 6px;
          font-weight: 600;
        }

        .btn-row {
          display: flex;
          gap: 10px;
          margin-top: 12px;
        }

        .btn {
          flex: 1;
          padding: 10px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          text-align: center;
          transition: 0.2s;
        }
        .btn-cart {
          background: #1a8c1a;
          color: white;
        }
        .btn-cart:hover {
          background: #146814;
        }
        .btn-remove {
          background: #fff2f2;
          color: #d32f2f;
        }
        .btn-remove:hover {
          background: #ffe5e5;
        }

        /* Empty wishlist */
        .empty-box {
          text-align: center;
          padding: 50px 20px;
        }
        .empty-icon {
          font-size: 70px;
          color: #d9534f;
          margin-bottom: 10px;
        }
        .empty-title {
          font-size: 22px;
          font-weight: bold;
          color: #444;
        }
        .empty-sub {
          color: #666;
          margin-top: 6px;
        }
        .start-shopping {
          margin-top: 20px;
          display: inline-block;
          background: #2a7a0e;
          color: white;
          padding: 12px 20px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
        }
        .start-shopping:hover {
          background: #25690d;
        }

        @media (max-width: 480px) {
          .wish-img { height: 170px; }
          .title { font-size: 26px; }
        }
      `}</style>

      {/* Title */}
      <h1 className="title">My Wishlist</h1>

      {/* EMPTY WISHLIST SECTION */}
      {wishlist.length === 0 && (
        <div className="empty-box">
          <FaHeartBroken className="empty-icon" />
          <p className="empty-title">Your Wishlist is Empty</p>
          <p className="empty-sub">Save items you love and buy them anytime.</p>
          <Link to="/products" className="start-shopping">Start Shopping</Link>
        </div>
      )}

      {/* WISHLIST GRID */}
      <div className="wishlist-grid">
        {wishlist.map((item) => (
          <div className="wish-card" key={item.id}>

            {/* IMAGE */}
            <img src={item.img} alt={item.name} className="wish-img" />

            {/* NAME */}
            <p className="wish-name">{item.name}</p>

            {/* PRICE */}
            <div className="price-box">
              <span className="price">₹{item.price}</span>
              <span className="mrp">₹{item.mrp}</span>
              <span className="discount">{item.discount}</span>
            </div>

            {/* BUTTONS */}
            <div className="btn-row">
              <button className="btn btn-cart">
                <FaShoppingCart /> Add to Cart
              </button>

              <button className="btn btn-remove">
                <FaTrash /> Remove
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
    </>
  );
}
