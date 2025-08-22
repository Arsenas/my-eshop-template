import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const featured = products.slice(0, 3);
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Welcome to MyShop</h1>
          <p>Quality products at great prices.</p>
          <Link to="/shop" className="btn-primary cta-button">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Featured</h2>
          <div className="grid cols-3" style={{ marginTop: "1rem" }}>
            {featured.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
