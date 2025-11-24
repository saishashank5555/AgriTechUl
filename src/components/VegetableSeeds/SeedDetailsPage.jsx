import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import seedsData from "./seedsData";

export default function SeedDetailsPage() {
  const { id } = useParams();
  const seed = seedsData.find((s) => String(s.id) === String(id));

  // fallback to uploaded image
  const FALLBACK_IMAGE =
    "/mnt/data/c61b8eae-dfc2-4cca-a1e0-c301228d07ef.png";

  if (!seed)
    return (
      <div style={{ textAlign: "center", padding: 40 }}>
        <h2>Product Not Found</h2>
        <Link to="/">Go Home</Link>
      </div>
    );

  const {
    name = "Unnamed Product",
    brand = "Unknown Brand",
    price = 0,
    mrp = 0,
    image,
    description = "No description available.",
    sizes = ["Single Pack"],
    highlights = [],
    benefits = [],
    specifications = {},
    reviews = [],
    category = "Seeds",
  } = seed;

  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [zoom, setZoom] = useState(false);
  const [pin, setPin] = useState("");
  const [pinResult, setPinResult] = useState(null);

  const ratingSummary = useMemo(() => {
    if (!reviews.length) return { avg: 4.6, count: 108 };
    const avg =
      reviews.reduce((s, r) => s + (r.rating || 0), 0) / reviews.length;
    return { avg: Math.round(avg * 10) / 10, count: reviews.length };
  }, [reviews]);

  const related = seedsData
    .filter((p) => p.id !== seed.id)
    .slice(0, 6);

  function checkPin() {
    if (!/^\d{6}$/.test(pin)) {
      setPinResult({ ok: false, msg: "Enter valid 6-digit PIN" });
      return;
    }
    const ok = /^[1-9]/.test(pin);
    setPinResult(
      ok
        ? { ok: true, msg: "Delivery available (3–5 days)" }
        : { ok: false, msg: "Delivery not available in this area" }
    );
  }

  function addToCart() {
    alert(`Added ${name} (${selectedSize}) to cart`);
  }
  function buyNow() {
    alert(`Proceeding to buy ${name} (${selectedSize})`);
  }

  return (
    <div className="product-page-root">
      <div className="product-page">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <Link to="/category/vegetable-seeds">Seeds</Link>
          <span>›</span>
          <span className="current">{name}</span>
        </nav>

        {/* MAIN GRID */}
        <div className="product-grid">
          {/* LEFT IMAGE SECTION */}
          <div
            className={`image-col ${zoom ? "zoomed" : ""}`}
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
          >
            <div className="main-image">
              <img
                src={image || FALLBACK_IMAGE}
                alt={name}
                loading="lazy"
              />
            </div>
            <div className="mini-row">
              <img
                className="thumb"
                src={image || FALLBACK_IMAGE}
                alt=""
              />
              <img className="thumb" src={FALLBACK_IMAGE} alt="" />
              <img className="thumb" src={FALLBACK_IMAGE} alt="" />
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div className="info-col">
            <h1 className="title">{name}</h1>
            <p className="brand">{brand}</p>

            {/* Rating */}
            <div className="rating">
              <div className="stars">
                {"★".repeat(Math.round(ratingSummary.avg))}
                {"☆".repeat(5 - Math.round(ratingSummary.avg))}
              </div>
              <div className="rating-meta">
                {ratingSummary.avg} • {ratingSummary.count} reviews
              </div>
            </div>

            {/* Price */}
            <div className="price-card">
              <div className="price-left">
                <div className="price-current">₹{price}</div>
                <div className="price-mrp">₹{mrp}</div>
              </div>
              <div>
                <div className="save">
                  Save ₹{Math.max(0, mrp - price)}
                </div>
                <div className="badge">Best Seller</div>
              </div>
            </div>

            {/* Highlights */}
            {highlights.length > 0 && (
              <div className="highlights">
                <h4>Key Highlights</h4>
                <ul>
                  {highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sizes */}
            <div className="variants">
              <h4>Choose Pack</h4>
              <div className="variants-row">
                {sizes.map((s) => (
                  <button
                    key={s}
                    className={`variant ${
                      selectedSize === s ? "active" : ""
                    }`}
                    onClick={() => setSelectedSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Offers + Delivery */}
            <div className="offers-delivery">
              <div className="offers">
                <strong>Offers</strong>
                <ul>
                  <li>5% off on prepaid orders</li>
                  <li>Free delivery above ₹499</li>
                  <li>Cash on Delivery available</li>
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
                    placeholder="Enter PIN"
                  />
                  <button onClick={checkPin}>Check</button>
                </div>
                {pinResult && (
                  <div
                    className={`pin-result ${
                      pinResult.ok ? "ok" : "no"
                    }`}
                  >
                    {pinResult.msg}
                  </div>
                )}
              </div>
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
              <h4>About this Product</h4>
              <p>{description}</p>
            </div>
          </div>
        </div>

        {/* LOWER SECTION */}
        <div className="lower">
          {/* LEFT SIDE */}
          <div className="left-card">
            {/* Product Overview */}
            <section className="card">
              <h3>Product Overview</h3>
              <div className="spec-grid">
                <div><strong>Name</strong></div>
                <div>{name}</div>

                <div><strong>Brand</strong></div>
                <div>{brand}</div>

                <div><strong>Category</strong></div>
                <div>{category}</div>

                <div><strong>Pack Size</strong></div>
                <div>{selectedSize}</div>
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
                <p>No specifications provided.</p>
              )}
            </section>

            {/* ADDING FULL REAL-WEBSITE SECTIONS */}
            <section className="card">
              <h3>Usage Instructions</h3>
              <ul className="bullet-list">
                <li>Sow seeds at recommended depth for best germination.</li>
                <li>Use well-drained soil with proper moisture.</li>
                <li>Follow standard seed treatment if required.</li>
              </ul>
            </section>

            <section className="card">
              <h3>Sowing & Germination Guide</h3>
              <ul className="bullet-list">
                <li>Sowing depth: 1–2 cm</li>
                <li>Ideal spacing: 30–45 cm</li>
                <li>Germination time: 5–10 days</li>
                <li>Maintain moderate irrigation</li>
              </ul>
            </section>

            <section className="card">
              <h3>Crop Management / Care Tips</h3>
              <ul className="bullet-list">
                <li>Apply balanced NPK fertilizer for healthy growth.</li>
                <li>Avoid waterlogging and over-irrigation.</li>
                <li>Regularly monitor for pests / diseases.</li>
              </ul>
            </section>

            <section className="card">
              <h3>Storage & Safety Information</h3>
              <ul className="bullet-list">
                <li>Store seeds in cool, dry place away from sunlight.</li>
                <li>Keep out of reach of children & animals.</li>
                <li>Seal the packet tightly after each use.</li>
              </ul>
            </section>

            <section className="card">
              <h3>Disclaimer</h3>
              <p>
                Actual results may vary depending on soil, climate & cultivation
                practices. All information is provided for educational purposes.
              </p>
            </section>

            {/* FAQ (Expandable) */}
            <section className="card">
              <h3>Frequently Asked Questions</h3>

              <details>
                <summary>What is the germination rate?</summary>
                <p>Typically 90–95% under ideal conditions.</p>
              </details>

              <details>
                <summary>How long can the seeds be stored?</summary>
                <p>Up to 1–2 years if stored properly.</p>
              </details>

              <details>
                <summary>Is this suitable for all soil types?</summary>
                <p>Works best in well-drained soils.</p>
              </details>
            </section>
          </div>

          {/* RIGHT SIDE */}
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
                        name: "Amit",
                        rating: 5,
                        text: "Good germination, healthy seedlings!",
                        date: "2025-07-10",
                      },
                      {
                        name: "Priya",
                        rating: 4,
                        text: "Quality seeds, happy with results.",
                        date: "2025-07-16",
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

            {/* RELATED PRODUCTS */}
            <section className="card related-card">
              <h3>Related Products</h3>
              <div className="related-grid">
                {related.map((p) => (
                  <Link key={p.id} to={`/seeds/${p.id}`} className="related-item">
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
          --green: #2a7a0e;
          --muted: #666;
          --border: #e6e6e6;
        }

        .product-page-root { padding-bottom: 120px; }
        .product-page {
          max-width: 1200px;
          margin: auto;
          padding: 20px;
          font-family: Inter, sans-serif;
        }

        .breadcrumb {
          display: flex;
          gap: 8px;
          font-size: 13px;
          margin-bottom: 12px;
        }
        .breadcrumb a { color: var(--green); }

        /* MAIN GRID */
        .product-grid {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 28px;
          align-items: start;
        }

        .main-image {
          background: #fafafa;
          border-radius: 12px;
          padding: 10px;
          border: 1px solid var(--border);
          text-align: center;
        }
        .main-image img {
          width: 100%;
          max-height: 380px;
          object-fit: contain;
          transition: 0.3s;
        }
        .image-col.zoomed img {
          transform: scale(1.07);
        }

        .mini-row {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }
        .thumb {
          width: 68px;
          height: 68px;
          object-fit: cover;
          border: 1px solid var(--border);
          border-radius: 8px;
        }

        /* INFO COLUMN */
        .title {
          font-size: 26px;
          color: var(--green);
          margin-bottom: 4px;
        }
        .brand {
          color: #666;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .rating {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
        }
        .stars { color: #f7b500; }

        .price-card {
          background: #f6fbf6;
          border: 1px solid #dff0df;
          padding: 12px;
          border-radius: 12px;
          margin-bottom: 16px;
          display: flex;
          justify-content: space-between;
        }

        .price-current { color: var(--green); font-size: 24px; font-weight: 800; }
        .price-mrp { text-decoration: line-through; margin-left: 8px; color: #888; }

        .save { color: #e67e22; font-weight: 600; }
        .badge {
          background: #e6f3e6;
          padding: 6px 12px;
          border-radius: 6px;
          color: var(--green);
          font-size: 13px;
          margin-top: 6px;
        }

        .variants h4 { margin: 12px 0 6px; }
        .variants-row { display: flex; gap: 10px; flex-wrap: wrap; }

        .variant {
          padding: 10px 16px;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: white;
          cursor: pointer;
        }
        .variant.active {
          background: #eaf6ea;
          border-color: var(--green);
          color: var(--green);
          font-weight: 700;
        }

        .offers-delivery {
          display: flex;
          gap: 20px;
          margin: 18px 0;
        }
        .offers {
          background: #fff8e8;
          padding: 12px;
          border-left: 4px solid #ff9900;
          border-radius: 10px;
          flex: 1;
        }

        .pin-row {
          display: flex;
          gap: 6px;
          margin-top: 6px;
        }
        .pin-row input {
          padding: 8px;
          border-radius: 8px;
          border: 1px solid var(--border);
          flex: 1;
        }
        .pin-row button {
          background: var(--green);
          color: white;
          border: none;
          padding: 8px 14px;
          border-radius: 8px;
          cursor: pointer;
        }
        .pin-result.ok { color: #1a7b1a; }
        .pin-result.no { color: #c34a4a; }

        .cta-row {
          display: flex;
          gap: 12px;
          margin: 20px 0;
        }
        .buy {
          background: var(--green);
          color: white;
          padding: 12px;
          border: none;
          flex: 1;
          border-radius: 10px;
          cursor: pointer;
        }
        .cart {
          background: white;
          border: 2px solid var(--green);
          color: var(--green);
          padding: 12px;
          flex: 1;
          border-radius: 10px;
          cursor: pointer;
        }

        .short-desc p { color: #444; }

        /* LOWER SECTION */
        .lower {
          display: flex;
          gap: 20px;
          margin-top: 30px;
        }

        .left-card { flex: 2; }
        .right-card { flex: 1; }

        .card {
          background: white;
          border: 1px solid var(--border);
          padding: 16px;
          border-radius: 10px;
          margin-bottom: 16px;
        }

        .spec-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 18px;
          margin-top: 10px;
        }

        .spec-table { width: 100%; border-collapse: collapse; }
        .spec-table td {
          padding: 8px;
          border-bottom: 1px solid var(--border);
        }

        .bullet-list { padding-left: 18px; color: #444; }

        /* FAQ */
        details {
          border: 1px solid var(--border);
          padding: 10px;
          border-radius: 8px;
          margin-top: 10px;
          cursor: pointer;
        }
        details summary {
          font-weight: 600;
          margin-bottom: 6px;
        }

        /* Reviews */
        .big-rating {
          font-size: 26px;
          font-weight: 800;
          color: var(--green);
        }
        .review { border-top: 1px solid #eee; padding-top: 10px; }

        /* Related */
        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 12px;
        }
        .related-item {
          border: 1px solid var(--border);
          padding: 10px;
          border-radius: 10px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: 0.2s;
        }
        .related-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.1);
        }
        .related-item img {
          width: 100%;
          height: 100px;
          object-fit: contain;
        }

        /* Sticky */
        .sticky {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          border-top: 1px solid var(--border);
          z-index: 1000;
        }
        .sticky-inner {
          max-width: 1200px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          padding: 10px 20px;
          align-items: center;
        }
        .sticky-cart,
        .sticky-buy {
          padding: 10px 14px;
          border-radius: 8px;
          cursor: pointer;
          border: none;
          font-weight: 700;
        }
        .sticky-cart {
          border: 1px solid var(--green);
          background: #f4fff4;
          color: var(--green);
        }
        .sticky-buy {
          background: var(--green);
          color: white;
        }

        /* RESPONSIVE */
        @media (max-width: 990px) {
          .product-grid {
            grid-template-columns: 1fr;
          }
          .image-col { align-items: center; }
          .lower { flex-direction: column; }
        }

        @media (max-width: 600px) {
          .title { font-size: 20px; }
          .main-image img { max-height: 280px; }
          .sticky-inner { padding: 8px 12px; }
        }
      `}</style>
    </div>
  );
}
