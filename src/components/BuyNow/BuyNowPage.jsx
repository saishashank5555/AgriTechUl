import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BuyNowPage() {
  const navigate = useNavigate();
  const buyItem = JSON.parse(localStorage.getItem("buyNowItem"));

  if (!buyItem) {
    return (
      <h1 style={{ padding: "40px", textAlign: "center" }}>
        No product selected for Buy Now
      </h1>
    );
  }

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Sai Shashank",
      phone: "9876543210",
      address: "D.No: 1-22, Near Bus Stand, Hyderabad",
      pin: "500001",
    },
  ]);

  const [selectedAddress, setSelectedAddress] = useState(
    addresses[0]?.id || null
  );

  const [showModal, setShowModal] = useState(false);
  const [newAddr, setNewAddr] = useState({
    name: "",
    phone: "",
    address: "",
    pin: "",
  });

  const handleAddAddress = () => {
    if (
      !newAddr.name ||
      !newAddr.phone ||
      !newAddr.address ||
      !/^\d{6}$/.test(newAddr.pin)
    ) {
      alert("❗ Please fill all fields correctly.");
      return;
    }

    const newAddressObj = {
      id: Date.now(),
      ...newAddr,
    };

    setAddresses([...addresses, newAddressObj]);
    setSelectedAddress(newAddressObj.id);
    setShowModal(false);
    setNewAddr({ name: "", phone: "", address: "", pin: "" });
  };

  return (
    <div className="buy-container">
      <h2 className="page-title">Buy Now</h2>

      {/* PRODUCT DETAILS */}
      <div className="section">
        <h3>Product Details</h3>
        <div className="buy-card">
          <img src={buyItem.image} alt="" className="product-img" />
          <div>
            <h3>{buyItem.name}</h3>
            <p className="price">₹{buyItem.price}</p>
            <p className="mrp">M.R.P: ₹{buyItem.mrp}</p>
          </div>
        </div>
      </div>

      {/* DELIVERY ADDRESS */}
      <div className="section">
        <h3>Delivery Address</h3>

        {addresses.map((addr) => (
          <label key={addr.id} className="address-box">
            <input
              type="radio"
              name="address"
              checked={selectedAddress === addr.id}
              onChange={() => setSelectedAddress(addr.id)}
            />
            <div>
              <strong>{addr.name}</strong> ({addr.phone})
              <br />
              {addr.address} — {addr.pin}
            </div>
          </label>
        ))}

        <button className="add-address-btn" onClick={() => setShowModal(true)}>
          + Add New Address
        </button>
      </div>

      {/* ⭐ UPDATED CONFIRM BUTTON */}
      <button
        className="confirm-btn"
        onClick={() => {
          if (!selectedAddress) {
            alert("Please select a delivery address");
            return;
          }

          const finalAddress = addresses.find((a) => a.id === selectedAddress);

          localStorage.setItem("selectedAddress", JSON.stringify(finalAddress));
          navigate("/payment");
        }}
      >
        Proceed to Payment →
      </button>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add New Address</h3>

            <input
              type="text"
              placeholder="Full Name"
              value={newAddr.name}
              onChange={(e) => setNewAddr({ ...newAddr, name: e.target.value })}
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={newAddr.phone}
              onChange={(e) =>
                setNewAddr({ ...newAddr, phone: e.target.value })
              }
            />

            <textarea
              placeholder="Full Address"
              value={newAddr.address}
              onChange={(e) =>
                setNewAddr({ ...newAddr, address: e.target.value })
              }
            ></textarea>

            <input
              type="text"
              placeholder="PIN Code"
              value={newAddr.pin}
              onChange={(e) => setNewAddr({ ...newAddr, pin: e.target.value })}
            />

            <div className="modal-actions">
              <button className="save-btn" onClick={handleAddAddress}>
                Save Address
              </button>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSS */}
      <style>{`
        
.buy-container {
          max-width: 900px;
          margin: auto;
          padding: 20px;
          font-family: Inter, sans-serif;
        }

        .page-title {
          text-align: center;
          font-size: 26px;
          margin-bottom: 20px;
          color: #1b5e20;
        }

        .section {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 3px 12px rgba(0,0,0,0.1);
          margin-bottom: 20px;
        }

        .buy-card {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .product-img {
          width: 160px;
          height: 160px;
          object-fit: contain;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 10px;
          background: #fafafa;
        }

        .price {
          font-size: 20px;
          color: #2e7d32;
          font-weight: bold;
        }

        .mrp {
          text-decoration: line-through;
          color: #777;
        }

        .address-box {
          display: flex;
          gap: 12px;
          padding: 12px;
          margin-top: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          cursor: pointer;
        }

        .address-box:hover {
          border-color: #1b5e20;
        }

        .add-address-btn {
          margin-top: 12px;
          background: #f1f8e9;
          border: 1px solid #4caf50;
          padding: 10px 14px;
          border-radius: 8px;
          cursor: pointer;
          color: #2e7d32;
          font-weight: 600;
        }

        .confirm-btn {
          width: 100%;
          padding: 14px;
          font-size: 18px;
          color: white;
          background: #2e7d32;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          margin-top: 20px;
          font-weight: bold;
        }

        .confirm-btn:hover {
          background: #1b5e20;
        }

        /* MODAL */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }

        .modal {
          background: #fff;
          padding: 25px;
          width: 420px;
          border-radius: 10px;
          box-shadow: 0 4px 18px rgba(0,0,0,0.2);
        }

        .modal input,
        .modal textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 8px;
          margin: 8px 0;
        }

        .modal-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 12px;
        }

        .save-btn {
          background: #2e7d32;
          color: white;
          padding: 10px 18px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .close-btn {
          background: #ccc;
          padding: 10px 18px;
          border-radius: 8px;
          cursor: pointer;
        }


      `}</style>
    </div>
  );
}
