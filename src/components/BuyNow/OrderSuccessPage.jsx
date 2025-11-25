import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderSuccessPage() {
  const navigate = useNavigate();

  const buyItem = JSON.parse(localStorage.getItem("buyNowItem"));
  const address = JSON.parse(localStorage.getItem("selectedBuyAddress"));

  // Generate Random Order ID
  const orderId = "ORD" + Math.floor(100000 + Math.random() * 900000);

  // Estimated Delivery Date
  const today = new Date();
  const deliveryDate = new Date(today.setDate(today.getDate() + 5)).toDateString();

  useEffect(() => {
    if (!buyItem) navigate("/");
  }, []);

  // Download Invoice
  const downloadInvoice = () => {
    const invoiceContent = `
      Order Invoice
      -----------------------
      Order ID: ${orderId}
      Product: ${buyItem?.name}
      Amount: ₹${buyItem?.price}
      Delivery Address: ${address?.address}, ${address?.pin}
    `;

    const blob = new Blob([invoiceContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Invoice-${orderId}.txt`;
    link.click();
  };

  return (
    <div className="success-page">
      <div className="success-card">
      
        {/* Animated Green Tick */}
        <div className="tick-wrapper">
          <div className="tick-circle">
            <div className="tick-mark"></div>
          </div>
        </div>

        <h1 className="success-title">Order Confirmed!</h1>
        <p className="success-message">
          Thank you for shopping with AgriTechPro. Your order is confirmed and being processed.
        </p>

        {/* ORDER SUMMARY */}
        <div className="summary-box">
          <h3>Order Details</h3>

          <p><strong>Order ID:</strong> {orderId}</p>
          <p><strong>Expected Delivery:</strong> {deliveryDate}</p>
          <p><strong>Shipping Status:</strong> Confirmed</p>

          {/* Product */}
          <div className="order-item">
            <img src={buyItem?.image} alt="" />
            <div>
              <p className="item-name">{buyItem?.name}</p>
              <p className="item-price">₹{buyItem?.price}</p>
            </div>
          </div>

          <hr />

          {/* Address */}
          <div className="address-block">
            <h4>Delivering To:</h4>
            <p>
              <strong>{address?.name}</strong> — {address?.phone} <br />
              {address?.address}, {address?.pin}
            </p>
          </div>

          <hr />

          {/* Action Buttons */}
          <div className="small-btns">
            <button className="invoice-btn" onClick={downloadInvoice}>
              Download Invoice
            </button>

            <button
              className="cancel-btn"
              onClick={() => alert("Order cancel request submitted")}
            >
              Cancel Order
            </button>
          </div>
        </div>

        {/* CUSTOMER CARE SECTION */}
        <div className="support-box">
          <h3>Customer Support</h3>
          <p>If you need help with your order, our support team is available.</p>

          <div className="support-info">
            <p><strong>📞 Phone:</strong> +91 98765 43210</p>
            <p><strong>📧 Email:</strong> support@agritechpro.com</p>
            <p><strong>🕒 Support Hours:</strong> 9:00 AM – 7:00 PM</p>
          </div>

          <div className="support-btns">
            <button className="support-call" onClick={() => window.location.href = "tel:+919876543210"}>
              Call Support
            </button>

            <button className="support-email" onClick={() => window.location.href = "mailto:support@agritechpro.com"}>
              Email Support
            </button>

            <button className="support-whatsapp" onClick={() => window.open("https://wa.me/919876543210", "_blank")}>
              WhatsApp Chat
            </button>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="btn-row">
          <button className="continue-btn" onClick={() => navigate("/")}>
            Continue Shopping
          </button>

          <button className="orders-btn" onClick={() => navigate("/userdashboard/orders")}>
            View My Orders
          </button>
        </div>
      </div>

      {/* ---------------- CSS ---------------- */}
      <style>{`
        .success-page {
          display: flex;
          justify-content: center;
          padding: 40px 20px;
          font-family: Inter, sans-serif;
        }

        .success-card {
          max-width: 650px;
          width: 100%;
          background: #fff;
          padding: 40px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
        }

        .success-title {
          color: #1b5e20;
        }

        .success-message {
          color: #555;
          margin-bottom: 20px;
        }

        .summary-box {
          text-align: left;
          padding: 20px;
          border: 1px solid #eee;
          border-radius: 12px;
          background: #fafafa;
          margin-bottom: 25px;
        }

        .order-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .order-item img {
          width: 70px;
          height: 70px;
          border-radius: 10px;
          object-fit: contain;
          border: 1px solid #ddd;
        }

        .item-name { font-weight: 600; }
        .item-price { color: #2e7d32; font-weight: 700; }

        .small-btns {
          display: flex;
          justify-content: space-between;
          margin-top: 12px;
        }

        .invoice-btn, .cancel-btn {
          padding: 10px 12px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          border: none;
        }

        .invoice-btn {
          background: #2e7d32;
          color: white;
        }

        .invoice-btn:hover { background: #1b5e20; }

        .cancel-btn {
          background: #ffdddd;
          color: #b30000;
        }

        .cancel-btn:hover { background: #ffcccc; }

        /* SUPPORT SECTION */
        .support-box {
          padding: 20px;
          background: #e8f5e9;
          border-left: 4px solid #2e7d32;
          border-radius: 12px;
          margin-bottom: 25px;
          text-align: left;
        }

        .support-info p { margin: 5px 0; }

        .support-btns {
          display: flex;
          gap: 10px;
          margin-top: 12px;
          flex-wrap: wrap;
        }

        .support-call,
        .support-email,
        .support-whatsapp {
          padding: 10px 14px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          color: #fff;
        }

        .support-call { background: #2e7d32; }
        .support-email { background: #1565c0; }
        .support-whatsapp { background: #25d366; }

        .btn-row {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .continue-btn, .orders-btn {
          padding: 12px 20px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 600;
        }

        .continue-btn { background: #2e7d32; color: white; }
        .orders-btn { background: #ddd; }

        /* Tick Animation */
        .tick-wrapper {
          display: flex;
          justify-content: center;
        }

        .tick-circle {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: #e8f5e9;
          border: 4px solid #2e7d32;
          position: relative;
          animation: pop 0.4s ease;
        }

        .tick-mark {
          width: 28px;
          height: 55px;
          border-bottom: 5px solid #2e7d32;
          border-right: 5px solid #2e7d32;
          transform: rotate(45deg);
          position: absolute;
          top: 10px;
          left: 28px;
          animation: drawTick 0.5s ease forwards;
          opacity: 0;
        }

        @keyframes drawTick {
          to { opacity: 1; transform: rotate(45deg) scale(1); }
        }

        @keyframes pop {
          0% { transform: scale(0.5); }
          100% { transform: scale(1); }
        }

      `}</style>
    </div>
  );
}
