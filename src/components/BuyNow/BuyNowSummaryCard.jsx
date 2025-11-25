export default function BuyNowSummaryCard({ item }) {
  return (
    <div className="summary-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Pack: {item.selectedSize}</p>
      <p>Price: ₹{item.price}</p>
      <button className="confirm-btn">
        Place Order
      </button>
    </div>
  );
}
