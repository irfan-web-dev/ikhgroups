import Link from "next/link";

export default function QuickAccessSection() {
  return (
    <section className="quick-access-section">
      <div className="container">
        <div className="section-title">
          <h2>Quick Access</h2>
          <p>Easy navigation to important sections</p>
        </div>

        <div className="quick-access-buttons">
          <Link href="/about-our-company" className="quick-access-button">
            <div className="button-icon">
              <i className="fas fa-building" />
            </div>
            <span>ABOUT OUR COMPANY</span>
          </Link>

          <Link
            href="https://ikhgroups.com/IKH%20Profile.pdf"
            target="_blank"
            className="quick-access-button"
          >
            <div className="button-icon">
              <i className="fas fa-file-pdf" />
            </div>
            <span>E-PROFILE</span>
          </Link>

          <Link
            href="https://mail.hostinger.com/"
            target="_blank"
            className="quick-access-button"
          >
            <div className="button-icon">
              <i className="fas fa-envelope" />
            </div>
            <span>EMAIL LOGIN</span>
          </Link>

          <Link
            href="https://erp.ikhgroups.com/login"
            target="_blank"
            className="quick-access-button"
          >
            <div className="button-icon">
              <i className="fas fa-lock" />
            </div>
            <span>ERP LOGIN</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
