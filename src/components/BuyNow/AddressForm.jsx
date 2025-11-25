export default function AddressForm() {
  return (
    <div className="address-card">
      <h3>Shipping Address</h3>
      <input placeholder="Full Name" />
      <input placeholder="Mobile Number" />
      <input placeholder="PIN Code" />
      <input placeholder="Address" />
      <input placeholder="City" />
      <input placeholder="State" />

      <button className="save-address">Save Address</button>
    </div>
  );
}
