import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../cart/CartProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="site-header">
      <div className="container navbar">
        <Link to="/" className="logo">
          MyShop
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/cart" className="btn" style={{ display: "inline-flex", gap: ".5rem", alignItems: "center" }}>
            Cart <span className="badge">{count}</span>
          </NavLink>
        </nav>

        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="mobile-drawer container">
          <NavLink to="/" end onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/shop" onClick={() => setOpen(false)}>
            Shop
          </NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="/cart" onClick={() => setOpen(false)} className="btn">
            Cart <span className="badge">{count}</span>
          </NavLink>
        </div>
      )}
    </header>
  );
}
