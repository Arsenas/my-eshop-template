import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/" className="btn">
          Go Home
        </Link>
      </div>
    </section>
  );
}
