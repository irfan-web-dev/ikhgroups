"use client";
import Link from "next/link";
import "../joint-ventures.css";

export default function IKHCafe() {
  return (
    <>
      <section className="hero-section-template">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-background"
        >
          <source src="/videos/joint-ventures.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">IKH CAFE</h1>
            <p className="animate__animated animate__fadeInUp">
              A Subsidiary of IKH Groups of Companies
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Coming Soon!</h2>
          </div>

          <div
            className="content-box-template animate-on-scroll slide-up visible"
            style={{ position: "relative" }}
          >
            {/* Centered background logo */}
            <div
              style={{
                position: "absolute",
                top: "50%",
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></div>
            <div
              className="jv-content-wrapper"
              style={{ position: "relative", zIndex: 1 }}
            >
              <div className="jv-text-content">
                <div className="coming-soon-message">
                  <h3>We're brewing something special!</h3>
                  <p>
                    IKH CAFE is the newest venture from IKH Groups of Companies,
                    bringing a unique culinary experience to our community.
                  </p>

                  <div className="countdown-container">
                    <div className="countdown-box">
                      <span className="countdown-number">--</span>
                      <span className="countdown-label">Days</span>
                    </div>
                    <div className="countdown-box">
                      <span className="countdown-number">--</span>
                      <span className="countdown-label">Hours</span>
                    </div>
                    <div className="countdown-box">
                      <span className="countdown-number">--</span>
                      <span className="countdown-label">Minutes</span>
                    </div>
                  </div>
                </div>

                <div className="service-section">
                  <h4>What to Expect</h4>
                  <ul className="services-list">
                    <li>Premium coffee blends from around the world</li>
                    <li>Artisanal bakery and fresh pastries</li>
                    <li>Healthy breakfast and lunch options</li>
                    <li>Cozy workspace-friendly environment</li>
                    <li>Signature IKH specialty beverages</li>
                  </ul>
                </div>

                <div className="service-section">
                  <h4>Our Philosophy</h4>
                  <p>
                    At IKH CAFE, we believe in combining quality ingredients
                    with warm hospitality to create memorable dining
                    experiences. Our menu will reflect both international
                    flavors and local tastes.
                  </p>
                </div>

                <div className="service-section">
                  <h4>Stay Updated</h4>
                  <p>
                    Join our mailing list to be the first to know about our
                    opening date, special promotions, and exclusive preview
                    events.
                  </p>
                </div>

                <div className="contact-info">
                  <h3>For inquiries</h3>
                  <p>
                    <strong>IKH Groups Headquarters</strong>
                    <br />
                    <strong>Phone:</strong> +88017110265
                    <br />
                    <strong>Email:</strong> cafe@ikhgroups.com
                    <br />
                    <strong>Website:</strong> www.ikhgroups.com
                    <br />
                    <strong>Location:</strong> Coming to Dhaka soon!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
