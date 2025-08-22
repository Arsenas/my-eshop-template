export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <h1>Contact Us</h1>
        <form className="grid" style={{ gap: "1rem", maxWidth: "400px" }}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={5}></textarea>
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
