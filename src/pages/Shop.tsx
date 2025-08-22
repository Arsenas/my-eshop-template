import { useMemo, useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"relevance" | "price-asc" | "price-desc">("relevance");

  const list = useMemo(() => {
    let arr = products.filter((p) =>
      [p.title, p.description, ...(p.tags ?? [])].join(" ").toLowerCase().includes(q.toLowerCase())
    );
    if (sort === "price-asc") arr = arr.slice().sort((a, b) => a.price - b.price);
    if (sort === "price-desc") arr = arr.slice().sort((a, b) => b.price - a.price);
    return arr;
  }, [q, sort]);

  return (
    <section className="section">
      <div className="container">
        <h1>Shop</h1>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", flexWrap: "wrap" }}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products…"
            style={{ padding: ".6rem .8rem", border: "1px solid var(--line)", borderRadius: "var(--radius)" }}
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as any)}
            style={{ padding: ".6rem .8rem", border: "1px solid var(--line)", borderRadius: "var(--radius)" }}
          >
            <option value="relevance">Sort: Relevance</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
          </select>
        </div>

        <div className="grid cols-3" style={{ marginTop: "1rem" }}>
          {list.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
