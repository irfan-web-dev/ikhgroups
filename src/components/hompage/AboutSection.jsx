"use client";
export default function AboutSection() {
  return (
    <section
      className="section about-section visible"
      id="about"
      style={{ position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50%",
          height: "50%",
          zIndex: 0,
          opacity: 0.1,
          backgroundImage: "url(/images/bg-logo.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          pointerEvents: "none",
        }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-title">
          <h2>About Us</h2>
          <p>Learn more about our company and our commitment to excellence</p>
        </div>

        {/* Improved about-content layout for better image positioning */}
        <div
          className="about-content"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2.5rem",
          }}
        >
          <div
            className="about-text"
            style={{
              flex: "1 1 350px",
              minWidth: 0,
              maxWidth: "600px",
            }}
          >
            <h3>Building Excellence Since Inception</h3>
            <p>
              IKH Groups of Companies is a leading construction and services
              conglomerate with over 25 years of experience in delivering
              high-quality projects across Saudi Arabia, Middle East and
              Bangladesh.
            </p>
            <p>
              Our commitment to excellence, innovation, and customer
              satisfaction has established us as a trusted partner in the
              construction industry. We specialize in industrial, commercial,
              and residential projects with a focus on quality and safety.
            </p>

            <div className="about-features-grid">
              <div className="about-feature-card">
                <div className="feature-icon-wrapper">
                  <i className="fas fa-medal" />
                </div>
                <div className="feature-content">
                  <h4>Quality Assurance</h4>
                  <p>Highest standards in every project we undertake</p>
                </div>
                <div className="glass-reflection"></div>
              </div>
              <div className="about-feature-card">
                <div className="feature-icon-wrapper">
                  <i className="fas fa-users" />
                </div>
                <div className="feature-content">
                  <h4>Expert Team</h4>
                  <p>Skilled professionals with years of experience</p>
                </div>
                <div className="glass-reflection"></div>
              </div>
              <div className="about-feature-card">
                <div className="feature-icon-wrapper">
                  <i className="fas fa-clock" />
                </div>
                <div className="feature-content">
                  <h4>Timely Delivery</h4>
                  <p>On-time completion of all our projects</p>
                </div>
                <div className="glass-reflection"></div>
              </div>
              <div className="about-feature-card">
                <div className="feature-icon-wrapper">
                  <i className="fas fa-tools" />
                </div>
                <div className="feature-content">
                  <h4>Modern Equipment</h4>
                  <p>Using the latest technology and machinery</p>
                </div>
                <div className="glass-reflection"></div>
              </div>
            </div>
          </div>

          {/* Improved image wrapper for better alignment and sizing */}
          <div
            className="about-image-wrapper"
            style={{
              flex: "1 1 320px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              minWidth: "280px",
              maxWidth: "420px",
              height: "100%",
            }}
          >
            <div
              className="about-image"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "380px",
                aspectRatio: "4/5",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/images/about-section-pic.png"
                alt="IKH Groups Building"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
              <div
                className="image-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg,rgba(255,255,255,0.05) 0%,rgba(0,0,0,0.08) 100%)",
                  pointerEvents: "none",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
