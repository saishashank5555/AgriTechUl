export default function PaymentOptions() {
  return (
    <div className="payment-card">
      <h3>Payment Options</h3>

      <label><input type="radio" name="pay" /> Cash on Delivery</label>
      <label><input type="radio" name="pay" /> UPI</label>
      <label><input type="radio" name="pay" /> Debit/Credit Card</label>
    </div>
  );
}
