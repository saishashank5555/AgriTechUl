import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  Heart,
  Bookmark,
  Truck,
} from "lucide-react";
import UserNavbar from "../../Usernavbar";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [saved, setSaved] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("agri_cart")) || [];
    setCartItems(savedCart);
  }, []);

  const updateQuantity = (id, type) => {
    const updated = cartItems.map((item) => {
      if (item.id === id) {
        const newQty = type === "inc" ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: newQty > 1 ? newQty : 1 };
      }
      return item;
    });
    setCartItems(updated);
    localStorage.setItem("agri_cart", JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("agri_cart", JSON.stringify(updated));
  };

  const applyCoupon = () => {
    if (coupon === "FARM10") setDiscount(10);
    else if (coupon === "FARM20") setDiscount(20);
    else {
      setDiscount(0);
      alert("Invalid Coupon");
    }
  };

  const saveForLater = (item) => {
    setSaved([...saved, item]);
    removeItem(item.id);
  };

  const addToWishlist = (item) => {
    setWishlist([...wishlist, item]);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discounted = subtotal - (subtotal * discount) / 100;

  const estimatedDelivery = () => {
    const date = new Date();
    date.setDate(date.getDate() + 4);
    return date.toDateString();
  };

  return (
      <>
       <UserNavbar/>
    <div className="cart-wrapper">
      {/* INTERNAL CSS */}
      <style>{`
        .cart-wrapper { max-width: 1200px; margin: auto; padding: 20px; }

        .info-bar { background:#FFF3CD; padding:15px; border-left:4px solid #E0A800; border-radius:8px; 
                    margin-bottom:20px; color:#8A6D00; }

        .cart-title { font-size:32px; font-weight:bold; display:flex; align-items:center; gap:10px; margin-bottom:20px; }

        .cart-grid { display:grid; grid-template-columns:1fr; gap:20px; }
        @media(min-width:1024px){ .cart-grid { grid-template-columns:2fr 1fr; } }

        .cart-card { background:white; border:1px solid #ddd; padding:15px; border-radius:14px;
                     display:flex; justify-content:space-between; gap:20px; }

        .cart-card img { width:90px; height:90px; object-fit:cover; border-radius:10px; }

        .qty-btn { padding:6px; border:1px solid #ccc; border-radius:50%; cursor:pointer; background:white; }
        .qty-btn:hover { background:#f0f0f0; }

        .delete-btn { background:#ffd6d6; padding:10px; border-radius:50%; color:red; cursor:pointer; }
        .delete-btn:hover { background:#ffbdbd; }

        .summary-box { background:white; border:1px solid #ddd; padding:20px; border-radius:14px; }

        .summary-row { display:flex; justify-content:space-between; padding:6px 0; font-size:16px; }

        .checkout-btn { width:100%; padding:14px; border-radius:12px; background:#28a745; 
                        font-weight:bold; color:white; cursor:pointer; margin-top:15px; font-size:18px; }
        .checkout-btn:hover { background:#208838; }

        .coupon-box { display:flex; gap:10px; margin:20px 0; }
        .coupon-input { flex:1; padding:10px; border-radius:8px; border:1px solid #ccc; font-size:16px; }
        .coupon-btn { padding:10px 20px; background:#007bff; color:white; border-radius:8px; cursor:pointer; }
        .coupon-btn:hover { background:#0063d1; }

        .continue-btn { margin:40px auto; display:block; background:#2874f0; padding:14px 28px; color:white;
                        border-radius:12px; font-weight:bold; text-align:center; width:fit-content; font-size:18px; }
        .continue-btn:hover { background:#145ac4; }

        .suggest-section { margin-top:50px; background:#f8f9fa; padding:20px; border-radius:12px; border:1px solid #ddd; }

        .suggest-item { min-width:180px; background:white; padding:10px; border-radius:10px;
                        border:1px solid #ddd; text-align:center; }
        .suggest-item img { width:100%; border-radius:10px; }

        .extra-info { margin-top:40px; background:white; border-radius:12px; padding:20px; 
                      border:1px solid #ddd; font-size:15px; }
      `}</style>

      {/* Announcement */}
      <div className="info-bar">
        🛒 Items in your cart are not reserved — checkout soon!
      </div>

      <h1 className="cart-title">
        <ShoppingBag /> Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2>Your cart is empty.</h2>
      ) : (
        <div className="cart-grid">
          {/* LEFT: CART ITEMS */}
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-card">
                <img src={item.image} alt={item.name} />

                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</h3>
                  <p>₹{item.price}</p>

                  {/* Delivery date */}
                  <p style={{ color: "green", display: "flex", gap: 6 }}>
                    <Truck size={16} /> Delivery by {estimatedDelivery()}
                  </p>

                  {/* Quantity */}
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" }}>
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, "dec")}>
                      <Minus size={15} />
                    </button>

                    <span style={{ fontWeight: "bold", fontSize: 18 }}>{item.quantity}</span>

                    <button className="qty-btn" onClick={() => updateQuantity(item.id, "inc")}>
                      <Plus size={15} />
                    </button>
                  </div>

                  {/* Save Later + Wishlist */}
                  <div style={{ display: "flex", gap: "15px", marginTop: "12px" }}>
                    <button onClick={() => saveForLater(item)} style={{ color: "blue" }}>
                      <Bookmark size={16} /> Save for Later
                    </button>

                    <button onClick={() => addToWishlist(item)} style={{ color: "crimson" }}>
                      <Heart size={16} /> Wishlist
                    </button>
                  </div>
                </div>

                {/* Delete */}
                <button className="delete-btn" onClick={() => removeItem(item.id)}>
                  <Trash2 />
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT: SUMMARY */}
          <div className="summary-box">
            <h2 style={{ fontSize: 22, fontWeight: "bold" }}>Price Details</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span style={{ color: "green" }}>FREE</span>
            </div>

            <div className="summary-row">
              <span>Discount</span>
              <span>- {discount}%</span>
            </div>

            <hr />

            <div className="summary-row" style={{ fontWeight: "bold", fontSize: 18 }}>
              <span>Total</span>
              <span>₹{discounted}</span>
            </div>

            {/* Coupon Section */}
            <div className="coupon-box">
              <input
                className="coupon-input"
                placeholder="Enter coupon"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button className="coupon-btn" onClick={applyCoupon}>
                Apply
              </button>
            </div>

            {/* Razorpay */}
            <button className="checkout-btn">Pay with Razorpay ▶</button>
          </div>
        </div>
      )}

      {/* CONTINUE SHOPPING */}
      <Link className="continue-btn" to="/userdashboard">
        ← Continue Shopping
      </Link>

      {/* WHY SHOP WITH US */}
      <div className="extra-info">
        <h3 style={{ fontSize: 20, fontWeight: "bold" }}>Why shop with AgriFarm?</h3>
        <ul style={{ lineHeight: "28px", marginTop: 8 }}>
          <li>✔ Trusted suppliers</li>
          <li>✔ Easy 7-day returns</li>
          <li>✔ Real-time order tracking</li>
          <li>✔ Bulk discounts for farmers</li>
          <li>✔ 24/7 support</li>
        </ul>
      </div>

      {/* SUGGESTED ITEMS */}
      <div className="suggest-section">
        <h3 style={{ fontSize: 22, fontWeight: "bold" }}>Recommended for You</h3>

        <div style={{ display: "flex", gap: "20px", overflowX: "auto", paddingTop: 10 }}>
          <div className="suggest-item">
            <img
              src="https://m.media-amazon.com/images/I/71jTQtFCtUL._SL1500_.jpg"
              alt="Irrigation Kit"
            />
            <p><b>Drip Irrigation Kit</b></p>
            <p style={{ color: "green" }}>₹1499</p>
          </div>

          <div className="suggest-item">
            <img
              src="https://m.media-amazon.com/images/I/71JFZ8tL4xL.jpg"
              alt="Fertilizer"
            />
            <p><b>Organic Fertilizer</b></p>
            <p style={{ color: "green" }}>₹450</p>
          </div>

          <div className="suggest-item">
            <img
              src="https://www.bigbasket.com/media/uploads/p/xxl/40120007-2_3-seeds-corn-hybrid.jpg"
              alt="Corn Seeds"
            />
            <p><b>Corn Hybrid Seeds</b></p>
            <p style={{ color: "green" }}>₹320</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
