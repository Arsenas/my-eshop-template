import { Link } from "react-router-dom";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" style={{ fontSize: ".9rem", marginBottom: "1rem" }}>
      <ol style={{ display: "flex", flexWrap: "wrap", gap: ".4rem", listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: "flex", alignItems: "center", gap: ".4rem" }}>
            {item.href ? (
              <Link to={item.href} style={{ color: "var(--brand)" }}>
                {item.label}
              </Link>
            ) : (
              <span style={{ color: "var(--muted)" }}>{item.label}</span>
            )}
            {i < items.length - 1 && <span style={{ color: "var(--muted)" }}>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
