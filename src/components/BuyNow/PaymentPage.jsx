import React, { useEffect, useState } from "react";

export default function PaymentPage() {
  const buyItem = JSON.parse(localStorage.getItem("buyNowItem"));
  const selectedAddress = JSON.parse(localStorage.getItem("selectedBuyAddress"));

  const [selectedPayment, setSelectedPayment] = useState("preferred");

  if (!buyItem) {
    return (
      <h2 style={{ padding: "40px", textAlign: "center" }}>
        No product found for payment
      </h2>
    );
  }

  const convenienceFee = 15.52;
  const donation = 1.0;
  const orderTotal = buyItem.price + convenienceFee + donation;

  return (
    <div className="payment-page">
      <div className="payment-layout">

        {/* ------------------ LEFT PAYMENT OPTIONS ------------------ */}
        <div className="payment-left">
          <h3 className="section-title">Payment Options</h3>

          <div
            className={`payment-option ${selectedPayment === "preferred" ? "active" : ""}`}
            onClick={() => setSelectedPayment("preferred")}
          >
            <i className="icon">👤</i> Preferred Payments
          </div>

          <div
            className={`payment-option ${selectedPayment === "upi" ? "active" : ""}`}
            onClick={() => setSelectedPayment("upi")}
          >
            <i className="icon">💳</i> Pay by UPI
          </div>

          <div
            className={`payment-option ${selectedPayment === "card" ? "active" : ""}`}
            onClick={() => setSelectedPayment("card")}
          >
            <i className="icon">💳</i> Debit / Credit Card
          </div>

          <div
            className={`payment-option ${selectedPayment === "wallet" ? "active" : ""}`}
            onClick={() => setSelectedPayment("wallet")}
          >
            <i className="icon">📱</i> Mobile Wallets
          </div>

          <div
            className={`payment-option ${selectedPayment === "netbank" ? "active" : ""}`}
            onClick={() => setSelectedPayment("netbank")}
          >
            <i className="icon">🏦</i> Net Banking
          </div>

          <div
            className={`payment-option ${selectedPayment === "paylater" ? "active" : ""}`}
            onClick={() => setSelectedPayment("paylater")}
          >
            <i className="icon">⏳</i> Pay Later
          </div>
        </div>

        {/* ------------------ RIGHT ORDER SUMMARY ------------------ */}
        <div className="payment-right">
          <h3 className="summary-title">{buyItem.name}</h3>

          <div className="summary-box">
            <p><strong>Price:</strong> ₹{buyItem.price}</p>
            <p><strong>Convenience Fee:</strong> ₹{convenienceFee.toFixed(2)}</p>
            <p>
              <strong>Support Farmers Donation:</strong> ₹{donation.toFixed(2)}
              <span className="add-link"> (Auto-added)</span>
            </p>

            <hr />

            <h3 className="total">Order Total: ₹{orderTotal.toFixed(2)}</h3>
          </div>

          {/* SHIPPING INFO */}
          <div className="summary-box">
            <h4>Shipping Details</h4>
            <p>
              <strong>{selectedAddress?.name}</strong> — {selectedAddress?.phone}
              <br />
              {selectedAddress?.address}, {selectedAddress?.pin}
            </p>
          </div>

        {/* PROCEED BUTTON */}
<button
  className="pay-btn"
  onClick={() => {
    // Save final order if needed
    // localStorage.setItem("orderPaymentStatus", "success");

    // Redirect to success page
    window.location.href = "/AgriTechUl/order-success";
  }}
>
  Pay ₹{orderTotal.toFixed(2)}
</button>

        </div>
      </div>

      {/* ------------------ CSS ------------------ */}
      <style>{`
        .payment-page {
          max-width: 1100px;
          margin: auto;
          padding: 20px;
          font-family: Inter, sans-serif;
        }

        .payment-layout {
          display: flex;
          gap: 20px;
        }

        /* LEFT MENU */
        .payment-left {
          width: 30%;
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 3px 12px rgba(0,0,0,0.1);
        }

        .section-title {
          margin-bottom: 15px;
          font-size: 18px;
          font-weight: 700;
        }

        .payment-option {
          padding: 14px;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
        }

        .payment-option.active {
          background: #e8f5e9;
          border-left: 4px solid #2e7d32;
          font-weight: 700;
        }

        .icon {
          font-size: 20px;
        }

        /* RIGHT SUMMARY */
        .payment-right {
          width: 70%;
        }

        .summary-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #1b5e20;
        }

        .summary-box {
          background: #fff;
          padding: 18px;
          margin-bottom: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .total {
          color: #2e7d32;
          margin-top: 10px;
        }

        .add-link {
          font-size: 12px;
          color: #777;
        }

        .pay-btn {
          width: 100%;
          padding: 15px;
          background: #2e7d32;
          color: white;
          font-size: 18px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          margin-top: 10px;
        }

        .pay-btn:hover {
          background: #1b5e20;
        }

        @media(max-width: 900px) {
          .payment-layout {
            flex-direction: column;
          }
          .payment-left, .payment-right {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
