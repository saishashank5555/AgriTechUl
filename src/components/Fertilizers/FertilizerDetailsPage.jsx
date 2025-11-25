import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import fertilizersData from "./fertilizersData";
import { requireAuth, isLoggedIn } from "../../utils/auth";
import { useNavigate } from "react-router-dom"; 

/**
 * FertilizerDetailsPage.jsx
 * - Matches the SeedDetailsPage design (BigHaat-like)
 * - Dynamic fields from fertilizersData
 * - Responsive, no horizontal scroll, sticky buy bar
 * - Includes: Overview, Specifications, Application Guide, Nutrient Composition,
 *   Storage & Safety, FAQs, Reviews, Related Products
 *
 * Expected fertilizer object shape (example):
 * {
 *   id: 1,
 *   name: "Urea 46%",
 *   brand: "AgriPro",
 *   price: 420,
 *   mrp: 500,
 *   image: "/path/to/img.png",
 *   description: "High-quality nitrogen fertilizer...",
 *   sizes: ["1kg", "5kg", "25kg"],
 *   highlights: ["Quick nitrogen release", "High purity"],
 *   benefits: ["Promotes vegetative growth", "Improves yield"],
 *   specifications: { "N%": "46%", "Form": "Granular" },
 *   nutrientComposition: { N: "46%", P: "0%", K: "0%" },
 *   application: { rate: "50kg/acre", method: "Broadcast/Side dressing" },
 *   precautions: ["Do not mix with lime directly", "Keep dry"],
 *   reviews: [{ name, rating, text, date }],
 *   category: "Fertilizers"
 * }
 */

export default function FertilizerDetailsPage() {
  const { id } = useParams();
  const fert = fertilizersData.find((f) => String(f.id) === String(id));
  const navigate = useNavigate();

  // local fallback image (uploaded earlier)
  const FALLBACK_IMAGE = "/mnt/data/c61b8eae-dfc2-4cca-a1e0-c301228d07ef.png"; 

// duplicate navigate removed

  if (!fert) {
    return (
      <div style={{ textAlign: "center", padding: 40 }}>
        <h2>Product Not Found</h2>
        <Link to="/">Go Home</Link>
      </div>
    );
  }

  const {
    name = "Unnamed Fertilizer",
    brand = "Unknown Brand",
    price = 0,
    mrp = 0,
    image,
    description = "No description available.",
    sizes = ["Single Pack"],
    highlights = [],
    benefits = [],
    specifications = {},
    nutrientComposition = {},
    application = {},
    precautions = [],
    reviews = [],
    category = "Fertilizers",
  } = fert;

  const [selectedSize, setSelectedSize] = useState(sizes[0] || "Single Pack");
  const [pin, setPin] = useState("");
  const [pinResult, setPinResult] = useState(null);

  const ratingSummary = useMemo(() => {
    if (!reviews.length) return { avg: 4.5, count: 42 };
    const avg = reviews.reduce((s, r) => s + (r.rating || 0), 0) / reviews.length;
    return { avg: Math.round(avg * 10) / 10, count: reviews.length };
  }, [reviews]);

  const related = fertilizersData.filter((p) => p.id !== fert.id).slice(0, 6);

  function checkPin() {
    if (!/^\d{6}$/.test(pin)) {
      setPinResult({ ok: false, msg: "Enter valid 6-digit PIN" });
      return;
    }
    const ok = /^[1-9]/.test(pin);
    setPinResult(
      ok
        ? { ok: true, msg: "Delivery available (2–5 days)" }
        : { ok: false, msg: "Delivery not available in this area" }
    );
  }

  function addToCart() {
    const dest = `/fertilizers/${id}`;
    if (!requireAuth(navigate, dest)) return;
    alert(`Added ${name} (${selectedSize}) to cart`);
  }

  function buyNow() {
    const dest = `/fertilizers/${id}`;
    const buyItem = { id, name, price, mrp, image };
    localStorage.setItem("buyNowItem", JSON.stringify(buyItem));
    sessionStorage.setItem("redirectToBuyNow", "true");
    if (!requireAuth(navigate, dest)) return;
    navigate("/buy-now");
  }



  return (
    <div className="fert-page-root">
      <div className="fert-page">
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <Link to="/category/fertilizers">Fertilizers</Link>
          <span>›</span>
          <span className="current">{name}</span>
        </nav>

        <div className="product-grid">
          {/* IMAGE COLUMN */}
          <div className="image-col">
            <div className="main-image">
              <img src={image || FALLBACK_IMAGE} alt={name} loading="lazy" />
            </div>

            <div className="mini-row">
              <img className="thumb" src={image || FALLBACK_IMAGE} alt="thumb1" />
              <img className="thumb" src={FALLBACK_IMAGE} alt="thumb2" />
              <img className="thumb" src={FALLBACK_IMAGE} alt="thumb3" />
            </div>
          </div>

          {/* INFO COLUMN */}
          <div className="info-col">
            <h1 className="title">{name}</h1>
            <p className="brand">{brand}</p>

            <div className="rating">
              <div className="stars">
                {"★".repeat(Math.round(ratingSummary.avg))}
                {"☆".repeat(5 - Math.round(ratingSummary.avg))}
              </div>
              <div className="rating-meta">
                {ratingSummary.avg} • {ratingSummary.count} Reviews
              </div>
            </div>

            <div className="price-card">
              <div className="price-left">
                <div className="price-current">₹{price}</div>
                <div className="price-mrp">₹{mrp}</div>
              </div>
              <div>
                <div className="save">Save ₹{Math.max(0, mrp - price)}</div>
                <div className="badge">Top Rated</div>
              </div>
            </div>

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

            <div className="variants">
              <h4>Select Pack</h4>
              <div className="variants-row">
                {sizes.map((s) => (
                  <button
                    key={s}
                    className={`variant ${selectedSize === s ? "active" : ""}`}
                    onClick={() => setSelectedSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="offers-delivery">
              <div className="offers">
                <strong>Offers</strong>
                <ul>
                  <li>Special price on bulk orders</li>
                  <li>Free delivery above ₹999</li>
                  <li>Prepaid discounts available</li>
                </ul>
              </div>

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
                {pinResult && <div className={`pin-result ${pinResult.ok ? "ok" : "no"}`}>{pinResult.msg}</div>}
              </div>
            </div>

            <div className="cta-row">
              <button className="buy" onClick={buyNow}>Buy Now</button>
              <button className="cart" onClick={addToCart}>Add to Cart</button>
            </div>

            <div className="short-desc">
              <h4>About this Product</h4>
              <p>{description}</p>
            </div>
          </div>
        </div>

        {/* LOWER SECTION */}
        <div className="lower">
          <div className="left-card">
            <section className="card">
              <h3>Product Overview</h3>
              <div className="spec-grid">
                <div><strong>Name</strong></div><div>{name}</div>
                <div><strong>Brand</strong></div><div>{brand}</div>
                <div><strong>Category</strong></div><div>{category}</div>
                <div><strong>Pack</strong></div><div>{selectedSize}</div>
              </div>
            </section>

            <section className="card">
              <h3>Specifications</h3>
              {Object.keys(specifications).length > 0 ? (
                <table className="spec-table">
                  <tbody>
                    {Object.entries(specifications).map(([k, v]) => (
                      <tr key={k}><td>{k}</td><td>{v}</td></tr>
                    ))}
                  </tbody>
                </table>
              ) : <p>No specifications provided.</p>}
            </section>

            <section className="card">
              <h3>Nutrient Composition</h3>
              {Object.keys(nutrientComposition).length > 0 ? (
                <div className="spec-grid">
                  {Object.entries(nutrientComposition).map(([k, v]) => (
                    <React.Fragment key={k}>
                      <div><strong>{k}</strong></div>
                      <div>{v}</div>
                    </React.Fragment>
                  ))}
                </div>
              ) : <p>Composition details not provided.</p>}
            </section>

            <section className="card">
              <h3>Application Guide</h3>
              <ul className="bullet-list">
                <li><strong>Recommended Rate:</strong> {application.rate || "Refer label"}</li>
                <li><strong>Method:</strong> {application.method || "Broadcast / Side dressing"}</li>
                <li><strong>Timing:</strong> {application.timing || "As per crop requirement"}</li>
              </ul>
            </section>

            <section className="card">
              <h3>Crop Management & Tips</h3>
              <ul className="bullet-list">
                {benefits.length > 0 ? benefits.map((b, i) => <li key={i}>{b}</li>) : (
                  <>
                    <li>Split application for better uptake.</li>
                    <li>Apply with recommended irrigation scheduling.</li>
                  </>
                )}
              </ul>
            </section>

            <section className="card">
              <h3>Storage & Safety</h3>
              <ul className="bullet-list">
                <li>Store in a cool, dry place away from moisture.</li>
                <li>Use protective gloves while handling concentrated forms.</li>
                {precautions.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </section>

            <section className="card">
              <h3>Disclaimer</h3>
              <p>Field conditions, soil type and weather affect fertilizer performance. Use recommendations as guidance; test small area before wide application.</p>
            </section>

            <section className="card">
              <h3>Frequently Asked Questions</h3>
              <details><summary>How often should I apply?</summary><p>Depends on crop and soil test — typically split doses during the growing season.</p></details>
              <details><summary>Can I mix this with other fertilizers?</summary><p>Check compatibility; avoid mixing with strong alkaline products directly.</p></details>
              <details><summary>Is there an expiry?</summary><p>Most granular fertilizers are stable; check label for shelf life.</p></details>
            </section>
          </div>

          <div className="right-card">
            <section className="card reviews-card">
              <h3>Customer Reviews</h3>
              <div className="reviews-summary">
                <div className="big-rating">{ratingSummary.avg}</div>
                <div className="small">Based on {ratingSummary.count} reviews</div>
              </div>

              <div className="reviews-list">
                {(reviews.length ? reviews : [
                  { name: "Ravi", rating: 5, text: "Excellent nutrient release", date: "2025-07-01" },
                  { name: "Sunita", rating: 4, text: "Good value for money", date: "2025-07-10" },
                ]).map((r, i) => (
                  <div className="review" key={i}>
                    <div className="r-top"><strong>{r.name}</strong> <span className="r-rating">{"★".repeat(r.rating)}{"☆".repeat(5-r.rating)}</span></div>
                    <div className="r-text">{r.text}</div>
                    <div className="r-date">{r.date}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="card related-card">
              <h3>Related Fertilizers</h3>
              <div className="related-grid">
                {related.map((p) => (
                  <Link key={p.id} to={`/fertilizers/${p.id}`} className="related-item">
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

      {/* STICKY BAR */}
      <div className="sticky">
        <div className="sticky-inner">
          <div className="sticky-left">
            <div className="sticky-price">₹{price}</div>
            <div className="sticky-save">Save ₹{Math.max(0, mrp - price)}</div>
          </div>
          <div className="sticky-ctas">
            <button className="sticky-cart" onClick={addToCart}>Add</button>
            <button className="sticky-buy" onClick={buyNow}>Buy</button>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        html, body { overflow-x: hidden; }

        :root {
          --green: #2a7a0e;
          --muted: #666;
          --border: #e6e6e6;
        }

        .fert-page-root { padding-bottom: 120px; }
        .fert-page { max-width: 1200px; margin: auto; padding: 20px; font-family: Inter, sans-serif; }

        .breadcrumb { display:flex; gap:8px; font-size:13px; margin-bottom:12px; }
        .breadcrumb a { color: var(--green); }

        .product-grid { display:grid; grid-template-columns: 420px 1fr; gap:28px; align-items:start; }

        .main-image { background:#fafafa; border-radius:12px; padding:10px; border:1px solid var(--border); text-align:center; }
        .main-image img { width:100%; max-height:380px; object-fit:contain; transition: .3s; }
        .mini-row { display:flex; gap:12px; margin-top:8px; }
        .thumb { width:68px; height:68px; object-fit:cover; border-radius:8px; border:1px solid var(--border); }

        .title { font-size:26px; color:var(--green); margin-bottom:4px; }
        .brand { color:var(--muted); font-weight:600; margin-bottom:12px; }

        .rating { display:flex; gap:12px; margin-bottom:12px; }
        .stars { color:#f7b500; }

        .price-card { background:#f6fbf6; border:1px solid #dff0df; padding:12px; border-radius:12px; margin-bottom:16px; display:flex; justify-content:space-between; }
        .price-current { color:var(--green); font-size:24px; font-weight:800; }
        .price-mrp { text-decoration:line-through; margin-left:8px; color:#888; }

        .variants-row { display:flex; gap:10px; flex-wrap:wrap; }
        .variant { padding:10px 16px; border-radius:8px; border:1px solid var(--border); background:#fff; cursor:pointer; }
        .variant.active { background:#eef9ee; border-color:var(--green); color:var(--green); font-weight:700; }

        .offers-delivery { display:flex; gap:20px; margin:18px 0; flex-wrap:wrap; }
        .offers { background:#fff8e8; padding:12px; border-left:4px solid #ff9900; border-radius:10px; flex:1; min-width:220px; }

        .pin-row { display:flex; gap:6px; margin-top:6px; }
        .pin-row input { padding:8px; border-radius:8px; border:1px solid var(--border); flex:1; }
        .pin-row button { background:var(--green); color:#fff; border:none; padding:8px 14px; border-radius:8px; cursor:pointer; }

        .cta-row { display:flex; gap:12px; margin:20px 0; }
        .buy { background:var(--green); color:white; padding:12px; border:none; flex:1; border-radius:10px; cursor:pointer; }
        .cart { background:white; border:2px solid var(--green); color:var(--green); padding:12px; border-radius:10px; cursor:pointer; }

        .short-desc p { color:#444; }

        .lower { display:flex; gap:20px; margin-top:30px; }
        .left-card { flex:2; min-width:0; }
        .right-card { flex:1; min-width:0; }

        .card { background:white; border:1px solid var(--border); padding:16px; border-radius:10px; margin-bottom:16px; }

        .spec-grid { display:grid; grid-template-columns: 1fr 1fr; gap:12px 18px; margin-top:10px; }
        .spec-table { width:100%; border-collapse:collapse; }
        .spec-table td { padding:8px; border-bottom:1px solid var(--border); }

        .bullet-list { padding-left:18px; color:#444; }

        details { border:1px solid var(--border); padding:10px; border-radius:8px; margin-top:10px; cursor:pointer; }
        details summary { font-weight:600; margin-bottom:6px; }

        .big-rating { font-size:26px; font-weight:800; color:var(--green); }
        .review { border-top:1px solid #eee; padding-top:10px; }

        .related-grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(140px,1fr)); gap:12px; }
        .related-item { border:1px solid var(--border); padding:10px; border-radius:10px; display:flex; flex-direction:column; gap:6px; text-decoration:none; color:inherit; }
        .related-item img { width:100%; height:100px; object-fit:contain; }

        .sticky { position:fixed; bottom:0; left:0; right:0; background:white; border-top:1px solid var(--border); z-index:1000; }
        .sticky-inner { max-width:1200px; margin:auto; display:flex; justify-content:space-between; padding:10px 20px; align-items:center; }
        .sticky-cart, .sticky-buy { padding:10px 14px; border-radius:8px; cursor:pointer; border:none; font-weight:700; margin-left:10px; }
        .sticky-cart { border:1px solid var(--green); background:#f4fff4; color:var(--green); }
        .sticky-buy { background:var(--green); color:white; }

        /* Responsive */
        @media (max-width: 990px) {
          .product-grid { grid-template-columns: 1fr; }
          .lower { flex-direction:column; }
        }
        @media (max-width: 600px) {
          .title { font-size:20px; }
          .main-image img { max-height: 280px; }
          .sticky-inner { padding:8px 12px; }
          .fert-page-root { padding-bottom: 140px; }
        }
      `}</style>
    </div>
  );
}