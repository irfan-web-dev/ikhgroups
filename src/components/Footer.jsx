import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-logo-container">
          <img
            src="/images/logo.webp"
            alt="IKH Groups of Companies"
            className="footer-logo"
          />
        </div>

        <div className="footer-grid">
          <div>
            <h3 className="footer-heading">About Us</h3>
            <p className="footer-text">
              IKH Groups of Companies, a subsidiary of IKH Groups of Companies,
              is committed to delivering high-quality construction projects with
              integrity and professionalism.
            </p>
            <div className="footer-social">
              <Link
                target="_blank"
                href="https://www.facebook.com/ikhgroups"
                className="footer-social-link"
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/ikhgroups/"
                className="footer-social-link"
              >
                <i className="fab fa-instagram" />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/ikhgroups/"
                className="footer-social-link"
              >
                <i className="fab fa-linkedin-in" />
              </Link>
              <Link
                target="_blank"
                href="https://www.youtube.com/channel/UCzzxqmCNiW7M7jVkaCZdaJA?view_as=subscriber"
                className="footer-social-link"
              >
                <i className="fab fa-youtube" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link href="/" className="footer-link">
                  <i className="fas fa-chevron-right" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  <i className="fas fa-chevron-right" /> About
                </Link>
              </li>
              <li>
                <Link href="/divisions" className="footer-link">
                  <i className="fas fa-chevron-right" /> Divisions
                </Link>
              </li>
              <li>
                <Link href="#projects" className="footer-link">
                  <i className="fas fa-chevron-right" /> Projects
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="footer-link">
                  <i className="fas fa-chevron-right" /> Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  <i className="fas fa-chevron-right" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Our Divisions</h3>
            <ul className="footer-links">
              <li>
                <Link href="/divisions/construction" className="footer-link">
                  <i className="fas fa-chevron-right" /> Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/divisions/support-services"
                  className="footer-link"
                >
                  <i className="fas fa-chevron-right" /> Support Services
                </Link>
              </li>
              <li>
                <Link href="/divisions/hvac-services" className="footer-link">
                  <i className="fas fa-chevron-right" /> HVAC Services
                </Link>
              </li>
              <li>
                <Link href="/divisions/it-solutions" className="footer-link">
                  <i className="fas fa-chevron-right" /> IT Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Contact Us</h3>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <i className="fas fa-map-marker-alt footer-contact-icon" />
                <div>
                  <p className="footer-contact-text">
                    King Saud Street, Dammam
                  </p>
                  <p className="footer-contact-text">Kingdom of Saudi Arabia</p>
                </div>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-phone-alt footer-contact-icon" />
                <p className="footer-contact-text">+966 13 823 7014</p>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-envelope footer-contact-icon" />
                <p className="footer-contact-text">info@ikhgroups.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; 2025 IKH Groups. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
