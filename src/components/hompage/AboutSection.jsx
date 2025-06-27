"use client";
export default function AboutSection() {
  return (
    <section className="section about-section visible" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
          <p>Learn more about our company and our commitment to excellence</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Building Excellence Since Inception</h3>
            <p>
              IKH Groups of Companies is a leading construction and services
              conglomerate with over 25 years of experience in delivering
              high-quality projects across Saudi Arabia and beyond.
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

          <div className="about-image-wrapper">
            <div className="about-image">
              <img
                src="/images/building_project.jpg"
                alt="IKH Groups Building"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
