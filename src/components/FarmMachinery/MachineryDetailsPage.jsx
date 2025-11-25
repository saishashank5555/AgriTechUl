import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { requireAuth } from "../../utils/auth";
import machineryData from "./machineryData";
import { useNavigate } from "react-router-dom";

/**
 * MachineryDetailsPage.jsx
 * ✔ Matches Seeds/Fertilizers details design
 * ✔ Includes: Overview, Specifications, Features, Usage Guide, Maintenance,
 *   Safety, Warranty, FAQ, Reviews, Related Products
 * ✔ Fully responsive
 * ✔ Sticky Buy Bar
 */

export default function MachineryDetailsPage() {
  const { id } = useParams();
  const machine = machineryData.find((m) => String(m.id) === String(id));
const navigate = useNavigate();
  const FALLBACK_IMAGE =
    "/mnt/data/c61b8eae-dfc2-4cca-a1e0-c301228d07ef.png";


  if (!machine)
    return (
      <div style={{ textAlign: "center", padding: 40 }}>
        <h2>Product Not Found</h2>
        <Link to="/">Go Home</Link>
      </div>
    );

  const {
    name = "Unnamed Machinery",
    brand = "Unknown Brand",
    price = 0,
    mrp = 0,
    image,
    description = "No description available.",
    highlights = [],
    specifications = {},
    features = [],
    usage = [],
    maintenance = [],
    safety = [],
    warranty = "Standard 1-year warranty",
    reviews = [],
    category = "Farm Machinery",
  } = machine;

  const [pin, setPin] = useState("");
  const [pinResult, setPinResult] = useState(null);

  const ratingSummary = useMemo(() => {
    if (!reviews.length) return { avg: 4.6, count: 112 };
    const avg =
      reviews.reduce((s, r) => s + (r.rating || 0), 0) / reviews.length;
    return { avg: Math.round(avg * 10) / 10, count: reviews.length };
  }, [reviews]);

  const related = machineryData.filter((p) => p.id !== machine.id).slice(0, 6);

  function checkPin() {
    if (!/^\d{6}$/.test(pin)) {
      setPinResult({ ok: false, msg: "Enter valid 6-digit PIN" });
      return;
    }
    const ok = /^[1-9]/.test(pin);
    setPinResult(
      ok
        ? { ok: true, msg: "Delivery available (4–7 days)" }
        : { ok: false, msg: "Delivery not available in this area" }
    );
  }

    function addToCart() {
      const dest = `/machinery/${id}`;
      if (!requireAuth(navigate, dest)) return;
      alert(`Added ${name} to cart`);
    }

  
  function buyNow() {
    const dest = `/machinery/${id}`;
    const buyItem = { id, name, price, mrp, image };
    localStorage.setItem("buyNowItem", JSON.stringify(buyItem));
    sessionStorage.setItem("redirectToBuyNow", "true");
    if (!requireAuth(navigate, dest)) return;
    navigate("/buy-now");
  }




  return (
    <div className="mach-page-root">
      <div className="mach-page">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <Link to="/category/farm-machinery">Farm Machinery</Link>
          <span>›</span>
          <span className="current">{name}</span>
        </nav>

        {/* MAIN GRID */}
        <div className="product-grid">
          {/* IMAGE SECTION */}
          <div className="image-col">
            <div className="main-image">
              <img
                src={image || FALLBACK_IMAGE}
                alt={name}
                loading="lazy"
              />
            </div>

            <div className="mini-row">
              <img className="thumb" src={image || FALLBACK_IMAGE} alt="" />
              <img className="thumb" src={FALLBACK_IMAGE} alt="" />
              <img className="thumb" src={FALLBACK_IMAGE} alt="" />
            </div>
          </div>

          {/* DETAILS */}
          <div className="info-col">
            <h1 className="title">{name}</h1>
            <p className="brand">{brand}</p>

            <div className="rating">
              <div className="stars">
                {"★".repeat(Math.round(ratingSummary.avg))}
                {"☆".repeat(5 - Math.round(ratingSummary.avg))}
              </div>
              <div className="rating-meta">
                {ratingSummary.avg} • {ratingSummary.count} reviews
              </div>
            </div>

            {/* PRICE */}
            <div className="price-card">
              <div className="price-left">
                <div className="price-current">₹{price}</div>
                <div className="price-mrp">₹{mrp}</div>
              </div>
              <div>
                <div className="save">Save ₹{mrp - price}</div>
                <div className="badge">Best Seller</div>
              </div>
            </div>

            {/* Highlights */}
            {highlights.length > 0 && (
              <div className="highlights">
                <h4>Highlights</h4>
                <ul>
                  {highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Delivery */}
            <div className="delivery-check">
              <label>Check Delivery</label>
              <div className="pin-row">
                <input
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value);
                    setPinResult(null);
                  }}
                  placeholder="Enter 6 digit PIN"
                />
                <button onClick={checkPin}>Check</button>
              </div>

              {pinResult && (
                <div
                  className={`pin-result ${pinResult.ok ? "ok" : "no"}`}
                >
                  {pinResult.msg}
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="cta-row">
              <button className="buy" onClick={buyNow}>
                Buy Now
              </button>
              <button className="cart" onClick={addToCart}>
                Add to Cart
              </button>
            </div>

            {/* Description */}
            <div className="short-desc">
              <h4>About this Machinery</h4>
              <p>{description}</p>
            </div>
          </div>
        </div>

        {/* LOWER SECTION */}
        <div className="lower">
          <div className="left-card">
            {/* Overview */}
            <section className="card">
              <h3>Product Overview</h3>
              <div className="spec-grid">
                <div><strong>Name</strong></div><div>{name}</div>
                <div><strong>Brand</strong></div><div>{brand}</div>
                <div><strong>Category</strong></div><div>{category}</div>
              </div>
            </section>

            {/* Specifications */}
            <section className="card">
              <h3>Specifications</h3>
              {Object.keys(specifications).length > 0 ? (
                <table className="spec-table">
                  <tbody>
                    {Object.entries(specifications).map(([k, v]) => (
                      <tr key={k}>
                        <td>{k}</td>
                        <td>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No specifications available.</p>
              )}
            </section>

            {/* Features */}
            <section className="card">
              <h3>Key Features</h3>
              <ul className="bullet-list">
                {features.length > 0 ? (
                  features.map((f, i) => <li key={i}>{f}</li>)
                ) : (
                  <>
                    <li>High durability & long life.</li>
                    <li>Designed for efficient farming.</li>
                    <li>Low maintenance cost.</li>
                  </>
                )}
              </ul>
            </section>

            {/* Usage */}
            <section className="card">
              <h3>Usage Guide</h3>
              <ul className="bullet-list">
                {usage.length > 0 ? (
                  usage.map((u, i) => <li key={i}>{u}</li>)
                ) : (
                  <>
                    <li>Read the manual before operation.</li>
                    <li>Check engine oil and coolant levels.</li>
                    <li>Ensure safety guards are in place.</li>
                  </>
                )}
              </ul>
            </section>

            {/* Maintenance */}
            <section className="card">
              <h3>Maintenance Tips</h3>
              <ul className="bullet-list">
                {maintenance.length > 0 ? (
                  maintenance.map((m, i) => <li key={i}>{m}</li>)
                ) : (
                  <>
                    <li>Regular lubrication recommended.</li>
                    <li>Clean air filters weekly.</li>
                    <li>Inspect belts & bolts before use.</li>
                  </>
                )}
              </ul>
            </section>

            {/* Safety */}
            <section className="card">
              <h3>Safety Instructions</h3>
              <ul className="bullet-list">
                {safety.length > 0 ? (
                  safety.map((s, i) => <li key={i}>{s}</li>)
                ) : (
                  <>
                    <li>Wear protective gear.</li>
                    <li>Keep away from moving parts.</li>
                    <li>Do not overload machinery.</li>
                  </>
                )}
              </ul>
            </section>

            {/* Warranty */}
            <section className="card">
              <h3>Warranty</h3>
              <p>{warranty}</p>
            </section>

            {/* FAQ */}
            <section className="card">
              <h3>Frequently Asked Questions</h3>

              <details>
                <summary>Does this model require servicing?</summary>
                <p>Yes, regular servicing ensures best performance.</p>
              </details>

              <details>
                <summary>Are spare parts available?</summary>
                <p>Yes, parts are available with authorized dealers.</p>
              </details>

              <details>
                <summary>Can beginners operate it?</summary>
                <p>Yes, but proper guidance is recommended.</p>
              </details>
            </section>
          </div>

          {/* Reviews + Related */}
          <div className="right-card">
            {/* Reviews */}
            <section className="card reviews-card">
              <h3>Customer Reviews</h3>
              <div className="reviews-summary">
                <div className="big-rating">{ratingSummary.avg}</div>
                <div className="small">
                  Based on {ratingSummary.count} reviews
                </div>
              </div>

              <div className="reviews-list">
                {(reviews.length
                  ? reviews
                  : [
                      {
                        name: "Mahesh",
                        rating: 5,
                        text: "Very powerful and efficient. Worth the price!",
                        date: "2025-07-10",
                      },
                      {
                        name: "Arun",
                        rating: 4,
                        text: "Good performance, low fuel usage.",
                        date: "2025-07-12",
                      },
                    ]
                ).map((r, i) => (
                  <div className="review" key={i}>
                    <div className="r-top">
                      <strong>{r.name}</strong>
                      <span className="r-rating">
                        {"★".repeat(r.rating)}
                        {"☆".repeat(5 - r.rating)}
                      </span>
                    </div>
                    <div className="r-text">{r.text}</div>
                    <div className="r-date">{r.date}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Related */}
            <section className="card related-card">
              <h3>Related Machinery</h3>

              <div className="related-grid">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    to={`/machinery/${p.id}`}
                    className="related-item"
                  >
                    <img src={p.image || FALLBACK_IMAGE} alt={p.name} />
                    <div className="r-name">{p.name}</div>
                    <div className="r-price">₹{p.price}</div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* STICKY BUY BAR */}
      <div className="sticky">
        <div className="sticky-inner">
          <div className="sticky-left">
            <div className="sticky-price">₹{price}</div>
            <div className="sticky-save">
              Save ₹{Math.max(0, mrp - price)}
            </div>
          </div>
          <div className="sticky-ctas">
            <button className="sticky-cart" onClick={addToCart}>
              Add
            </button>
            <button className="sticky-buy" onClick={buyNow}>
              Buy
            </button>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        html, body { overflow-x: hidden; }

        :root {
          --green:#2a7a0e;
          --muted:#666;
          --border:#e6e6e6;
        }

        .mach-page-root { padding-bottom:140px; }
        .mach-page { max-width:1200px;margin:auto;padding:20px;font-family:Inter,sans-serif; }

        .breadcrumb { display:flex;gap:8px;font-size:13px;margin-bottom:12px; }
        .breadcrumb a { color:var(--green); }

        .product-grid { display:grid;grid-template-columns:420px 1fr;gap:28px;align-items:start; }

        .main-image { background:#fafafa;border-radius:12px;padding:12px;border:1px solid var(--border); }
        .main-image img { width:100%;max-height:380px;object-fit:contain; }

        .mini-row { display:flex;gap:12px;margin-top:10px; }
        .thumb { width:68px;height:68px;border-radius:8px;border:1px solid var(--border);object-fit:cover; }

        .title { font-size:28px;color:var(--green); }
        .brand { color:var(--muted);font-weight:600;margin-bottom:12px; }

        .rating { display:flex;gap:14px;margin:10px 0; }
        .stars { color:#ffb400; }

        .price-card {
          background:#f6fbf6;border:1px solid #dff0df;
          padding:12px;border-radius:12px;display:flex;justify-content:space-between;
          margin-bottom:18px;
        }
        .price-current { font-size:24px;font-weight:800;color:var(--green); }
        .price-mrp { text-decoration:line-through;color:#777; }

        .save { color:#e67e22;font-weight:600; }
        .badge {
          margin-top:6px;background:#e8f6e8;color:var(--green);
          padding:4px 10px;border-radius:6px;font-size:13px;
        }

        .delivery-check { margin:15px 0; }
        .pin-row { display:flex;gap:8px;margin-top:4px; }
        .pin-row input { padding:8px;border:1px solid var(--border);border-radius:6px;flex:1; }
        .pin-row button { padding:8px 14px;background:var(--green);border:none;color:white;border-radius:8px; }
        .pin-result.ok { color:#1b7b1b; }
        .pin-result.no { color:#c24444; }

        .cta-row { display:flex;gap:14px;margin:20px 0; }
        .buy { background:var(--green);color:#fff;padding:12px;border:none;border-radius:10px;flex:1; }
        .cart { background:#fff;border:2px solid var(--green);color:var(--green);padding:12px;border-radius:10px;flex:1; }

        .short-desc { color:#444;margin-bottom:16px; }

        /* LOWER SECTION */
        .lower { display:flex;gap:20px;margin-top:30px; }
        .left-card { flex:2; }
        .right-card { flex:1; }

        .card {
          background:white;border:1px solid var(--border);
          padding:16px;border-radius:10px;margin-bottom:16px;
        }

        .spec-grid { display:grid;grid-template-columns:1fr 1fr;gap:12px 18px; }
        .spec-table { width:100%;border-collapse:collapse; }
        .spec-table td { border-bottom:1px solid #eee;padding:8px; }

        .bullet-list { padding-left:18px;color:#444; }

        details { border:1px solid var(--border);padding:10px;border-radius:8px;margin-top:8px;cursor:pointer; }
        details summary { font-weight:600; }

        /* Reviews */
        .big-rating { font-size:26px;font-weight:800;color:var(--green); }
        .review { border-top:1px solid #eee;padding-top:10px;margin-top:10px; }

        /* Related */
        .related-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px; }
        .related-item { border:1px solid var(--border);border-radius:10px;padding:10px;text-align:center; }
        .related-item img { width:100%;height:100px;object-fit:contain; }
        .r-name { font-size:14px;font-weight:600;color:#333;margin-top:6px; }
        .r-price { color:var(--green);font-weight:700;margin-top:2px; }

        /* Sticky Bar */
        .sticky {
          position:fixed;bottom:0;left:0;right:0;background:white;
          border-top:1px solid var(--border);z-index:1000;
        }
        .sticky-inner {
          max-width:1200px;margin:auto;
          display:flex;justify-content:space-between;
          padding:10px 20px;align-items:center;
        }
        .sticky-cart, .sticky-buy {
          padding:10px 14px;border:none;border-radius:8px;font-weight:700;cursor:pointer; margin-left:10px;
        }
        .sticky-cart { background:#eaffea;color:var(--green);border:1px solid var(--green); }
        .sticky-buy { background:var(--green);color:white; }

        /* Responsive */
        @media(max-width:990px) {
          .product-grid { grid-template-columns:1fr; }
          .lower { flex-direction:column; }
        }
        @media(max-width:600px) {
          .title { font-size:20px; }
          .main-image img { max-height:260px; }
          .sticky-inner { padding:8px 12px; }
        }
      `}</style>
    </div>
  );
}
