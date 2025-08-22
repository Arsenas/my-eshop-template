import { useCart } from "../cart/CartProvider";
import { formatPrice } from "../utils/money";
import { site } from "../siteConfig";

export default function CartPage() {
  const { items, setQty, remove, clear, subtotal } = useCart();

  return (
    <section className="section">
      <div className="container">
        <h1>Your Cart</h1>

        {items.length === 0 ? (
          <p style={{ marginTop: "1rem" }}>No items yet.</p>
        ) : (
          <>
            <div className="grid" style={{ marginTop: "1rem", gap: "1rem" }}>
              {items.map(({ product: p, qty }) => (
                <div
                  key={p.id}
                  className="card"
                  style={{ display: "grid", gridTemplateColumns: "80px 1fr auto", gap: "1rem", alignItems: "center" }}
                >
                  <img src={p.image} alt={p.title} />
                  <div>
                    <strong>{p.title}</strong>
                    <div style={{ color: "var(--muted)" }}>{formatPrice(p.price, site.currency)}</div>
                    <div style={{ marginTop: ".5rem", display: "flex", gap: ".5rem", alignItems: "center" }}>
                      <button className="btn" onClick={() => setQty(p.id, qty - 1)}>
                        -
                      </button>
                      <span>{qty}</span>
                      <button className="btn" onClick={() => setQty(p.id, qty + 1)}>
                        +
                      </button>
                      <button className="btn" onClick={() => remove(p.id)} style={{ marginLeft: "auto" }}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div>
                    <strong>{formatPrice(p.price * qty, site.currency)}</strong>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{ marginTop: "1.2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <button className="btn" onClick={clear}>
                Clear Cart
              </button>
              <div style={{ fontSize: "var(--fs-200)" }}>
                Subtotal: <strong>{formatPrice(subtotal, site.currency)}</strong>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
