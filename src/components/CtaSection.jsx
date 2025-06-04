export default function CtaSection() {
  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-text">
            Contact IKH Groups today for a consultation and discover how we can
            bring your vision to life.
          </p>
          <div className="cta-buttons">
            <a
              href="tel:+966138237014"
              className="button"
              style={{ backgroundColor: "white", color: "#f97316" }}
            >
              Call Now: +966 13 823 7014
            </a>
            <a href="/contact" className="button button-outline">
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
