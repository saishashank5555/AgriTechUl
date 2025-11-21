import React from "react";
import {
  PackageCheck,
  Package,
  Truck,
  Clock,
  MapPin,
  Phone,
  CheckCircle,
} from "lucide-react";

export default function TrackOrder() {
  const order = {
    id: "ORD12345",
    productName: "Organic Fertilizer – 5 KG",
    img: "https://m.media-amazon.com/images/I/71JFZ8tL4xL.jpg",
    price: 450,
    orderedOn: "Feb 20, 2025",
    estimated: "Feb 25, 2025",
    status: 4, // 1-Ordered, 2-Packed, 3-Shipped, 4-Out for delivery, 5-Delivered
    address: {
      name: "Ramesh Kumar",
      phone: "9876543210",
      street: "Plot 22, Green Valley",
      village: "Madha Village",
      district: "Nellore",
      state: "Andhra Pradesh",
      pincode: "524101",
    },
  };

  const steps = [
    { id: 1, label: "Ordered", icon: <Package size={22} /> },
    { id: 2, label: "Packed", icon: <PackageCheck size={22} /> },
    { id: 3, label: "Shipped", icon: <Truck size={22} /> },
    { id: 4, label: "Out for Delivery", icon: <Clock size={22} /> },
    { id: 5, label: "Delivered", icon: <CheckCircle size={22} /> },
  ];

  return (
    <div className="track-wrapper">

      {/* INTERNAL CSS */}
      <style>{`
        .track-wrapper { max-width: 900px; margin: auto; padding: 20px; }

        .title { font-size: 30px; font-weight: bold; margin-bottom: 15px; }

        .order-card {
          background: white;
          border: 1px solid #ddd;
          padding: 18px;
          border-radius: 14px;
          margin-bottom: 20px;
        }

        .product-row { display: flex; gap: 15px; margin-bottom: 20px; }
        .product-img { width: 90px; height: 90px; object-fit: cover; border-radius: 10px; }

        .product-name { font-size: 18px; font-weight: bold; }
        .price { font-size: 18px; font-weight: bold; margin-top: 5px; }

        .timeline { margin-top: 25px; position: relative; }
        .line {
          position: absolute; top: 30px; left: 10px;
          width: 3px; height: calc(100% - 50px);
          background: #ddd;
        }

        .step {
          display: flex; gap: 15px; margin-bottom: 35px;
          align-items: center;
        }

        .step-icon {
          width: 40px; height: 40px;
          border-radius: 50%;
          display:flex; justify-content:center; align-items:center;
          background:#f2f2f2;
          border:2px solid #ccc;
          z-index:2;
        }

        .step-active {
          background: #d4f8d4;
          border-color: green;
          color: green;
        }

        .address-box, .summary-box {
          background: white;
          border: 1px solid #ddd;
          padding: 16px;
          border-radius: 14px;
          margin-top: 20px;
        }

        .address-title, .summary-title {
          font-size: 20px; font-weight: bold; margin-bottom: 10px;
        }

        .address-line { font-size: 15px; margin-bottom: 4px; }

        .summary-row { display: flex; justify-content: space-between; padding: 4px 0; }

        @media (max-width:600px) {
          .product-row { flex-direction: column; text-align:center; }
        }
      `}</style>

      <h1 className="title">Track Your Order</h1>

      {/* ORDER SUMMARY */}
      <div className="order-card">

        <div className="product-row">
          <img src={order.img} className="product-img" />
          <div>
            <p className="product-name">{order.productName}</p>
            <p className="price">₹{order.price}</p>
            <p style={{ color: "#666", marginTop: 6 }}>Order ID: {order.id}</p>
            <p style={{ color: "#666" }}>Ordered on: {order.orderedOn}</p>
            <p style={{ color: "green", marginTop: 4 }}>
              Estimated Delivery: <b>{order.estimated}</b>
            </p>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="timeline">
          <div className="line"></div>

          {steps.map((step) => (
            <div className="step" key={step.id}>
              <div className={`step-icon ${order.status >= step.id ? "step-active" : ""}`}>
                {step.icon}
              </div>
              <p style={{ fontSize: 17, fontWeight: order.status >= step.id ? "bold" : "normal" }}>
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* DELIVERY ADDRESS */}
      <div className="address-box">
        <p className="address-title">Delivery Address</p>

        <p className="address-line"><b>{order.address.name}</b></p>
        <p className="address-line">
          <Phone size={15} /> {order.address.phone}
        </p>
        <p className="address-line">{order.address.street}</p>
        <p className="address-line">{order.address.village}</p>
        <p className="address-line">
          {order.address.district}, {order.address.state} - {order.address.pincode}
        </p>
      </div>

      {/* ORDER AMOUNT */}
      <div className="summary-box">
        <p className="summary-title">Order Summary</p>

        <div className="summary-row">
          <span>Item Price</span> <span>₹{order.price}</span>
        </div>

        <div className="summary-row">
          <span>Delivery</span> <span style={{ color: "green" }}>FREE</span>
        </div>

        <hr />

        <div className="summary-row" style={{ fontWeight: "bold", fontSize: 18 }}>
          <span>Total Paid</span> <span>₹{order.price}</span>
        </div>
      </div>
    </div>
  );
}
