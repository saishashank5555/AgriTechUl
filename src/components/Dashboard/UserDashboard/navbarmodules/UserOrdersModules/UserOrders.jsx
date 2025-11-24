import React from "react";
import { Link } from "react-router-dom";
import {
  Truck,
  PackageCheck,
  Clock4,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import UserNavbar from "../../Usernavbar";

export default function UserOrders() {
  const orders = [
    {
      id: "ORD12345",
      date: "Feb 20, 2025",
      deliveryDate: "Feb 25, 2025",
      status: "Delivered",
      progress: 4,
      products: [
        {
          name: "Organic Fertilizer – 5 KG",
          price: 450,
          img: "https://m.media-amazon.com/images/I/71JFZ8tL4xL.jpg",
        },
      ],
    },
    {
      id: "ORD67890",
      date: "Feb 24, 2025",
      deliveryDate: "Expected Mar 02, 2025",
      status: "Out for Delivery",
      progress: 3,
      products: [
        {
          name: "Hybrid Maize Seeds – 1 KG",
          price: 320,
          img: "https://www.bigbasket.com/media/uploads/p/xxl/40120007-2_3-seeds-corn-hybrid.jpg",
        },
      ],
    },
  ];

  return (
      <>
       {/* <UserNavbar/> */}
    <div className="orders-wrapper">

      {/* INTERNAL CSS */}
      <style>{`
        .orders-wrapper { max-width: 1000px; margin: auto; padding: 20px; font-family: sans-serif; }
        .orders-title { font-size: 32px; font-weight: bold; margin-bottom: 25px; }

        .order-card {
          background: white;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 16px;
          margin-bottom: 22px;
          transition: 0.3s;
        }
        .order-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.12); }

        .order-header { display: flex; justify-content: space-between; margin-bottom: 15px; }
        .order-id { font-size: 15px; color: #666; }
        .order-date { font-size: 14px; color: #444; }

        .product-row { display: flex; gap: 15px; margin-top: 10px; }
        .product-img { width: 85px; height: 85px; border-radius: 10px; object-fit: cover; }
        .product-name { font-size: 18px; font-weight: bold; }
        .price { font-size: 18px; margin-top: 5px; font-weight: bold; }

        .status-tag { margin-top: 5px; font-weight: bold; }
        .delivered { color: green; }
        .shipped { color: orange; }
        .out-for-delivery { color: #0a7cff; }
        .packed { color: #444; }

        /* PROGRESS BAR */
        .progress-bar {
          margin-top: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        .progress-line {
          position: absolute;
          top: 50%;
          left: 5%;
          width: 90%;
          height: 3px;
          background: #ddd;
          z-index: 1;
        }

        .progress-step {
          z-index: 2;
          background: white;
          padding: 5px;
          border-radius: 50%;
          border: 2px solid #999;
        }

        .active-step { border-color: green; color: green; }

        .btn-row {
          margin-top: 20px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 10px 16px;
          border-radius: 10px;
          cursor: pointer;
          font-size: 15px;
          font-weight: bold;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .btn-track { background: #007bff; color: white; }
        .btn-reorder { background: #28a745; color: white; }
        .btn-invoice { background: #f4f4f4; color: black; }
        .btn-support { background: #ffe8c4; color: #9c6200; }
        .continue-shopping {
          background:#2874f0; 
          color:white; 
          padding:10px 18px; 
          border-radius:10px;
        }
      `}</style>

      {/* TITLE */}
      <h1 className="orders-title">Your Orders</h1>

      {/* ORDER LIST */}
      {orders.map((order) => (
        <div className="order-card" key={order.id}>

          {/* HEADER */}
          <div className="order-header">
            <p className="order-id">Order ID: {order.id}</p>
            <p className="order-date">Ordered on: {order.date}</p>
          </div>

          {order.products.map((p, i) => (
            <div key={i} className="product-row">
              <img src={p.img} className="product-img" alt="" />

              <div>
                <p className="product-name">{p.name}</p>
                <p className="price">₹{p.price}</p>

                <p className={`status-tag ${order.status.toLowerCase().replace(/ /g, "-")}`}>
                  Status: {order.status}
                </p>

                <p style={{ color: "#333", marginTop: 4 }}>
                  Delivery: <b>{order.deliveryDate}</b>
                </p>
              </div>
            </div>
          ))}

          {/* PROGRESS BAR */}
          <div className="progress-bar">
            <div className="progress-line"></div>

            <PackageCheck className={`progress-step ${order.progress >= 1 ? "active-step" : ""}`} />
            <Clock4 className={`progress-step ${order.progress >= 2 ? "active-step" : ""}`} />
            <Truck className={`progress-step ${order.progress >= 3 ? "active-step" : ""}`} />
            <CheckCircle className={`progress-step ${order.progress >= 4 ? "active-step" : ""}`} />
          </div>

          {/* BUTTONS WITH LINKS */}
          <div className="btn-row">
            
            {/* Track Order */}
            <Link to={`/track-order/${order.id}`} className="btn btn-track">
              Track Order
            </Link>

            {/* Reorder */}
            <Link to={`/product/${order.id}`} className="btn btn-reorder">
              Reorder
            </Link>

            {/* Invoice */}
            <Link to={`/invoice/${order.id}`} className="btn btn-invoice">
              Download Invoice
            </Link>

            {/* Support */}
            <Link to="/support" className="btn btn-support">
              <MessageCircle size={16} /> Support
            </Link>

            {/* Continue Shopping */}
            <Link to="/userdashboard" className="btn continue-shopping">
              ← Continue Shopping
            </Link>
          </div>

        </div>
      ))}
    </div>
    </>
  );
}
