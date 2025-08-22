import { Link } from "react-router-dom";
import { useState } from "react";
import type { Product } from "../types";
import { useCart } from "../cart/CartProvider";
import { formatPrice } from "../utils/money";
import { site } from "../siteConfig";
import Toast from "../components/Toast"; // sukurk failą Toast.tsx

export default function ProductCard(p: Product) {
  const { add } = useCart();
  const [toast, setToast] = useState(false);

  return (
    <article className="card">
      <Link to={`/product/${p.id}`}>
        <img src={p.image} alt={p.title} loading="lazy" />
      </Link>
      <h3 style={{ marginTop: ".5rem" }}>{p.title}</h3>
      <p style={{ color: "var(--muted)" }}>{formatPrice(p.price, site.currency)}</p>
      <div style={{ display: "flex", gap: ".5rem", marginTop: ".5rem" }}>
        <Link to={`/product/${p.id}`} className="btn">
          View
        </Link>
        <button
          className="btn-primary"
          onClick={() => {
            add(p, 1);
            setToast(true);
          }}
        >
          Add to Cart
        </button>
      </div>

      {toast && <Toast msg="Added to cart" onDone={() => setToast(false)} />}
    </article>
  );
}
