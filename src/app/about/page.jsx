"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function About() {
  return (
    <>
      <section className="hero-section-template">
        <img
          className="hero-video-background"
          src="/images/about-us.webp"
          alt=""
        />
        <div className="container hero-container">
          <div className="hero-text-content">
            <h1 className="animate__animated animate__zoomInDown">About Us</h1>
            <p className="animate__animated animate__fadeInUp">
              Learn more about our company and our commitment to excellence
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Story</h2>
          </div>

          <div className="content-animation">
            <LottiePlayer src="https://lottie.host/718d76f4-f11d-4caf-ae23-0ed4d892ca04/AJi18S70X0.lottie" />
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
            <blockquote
              className="about-message"
              style={{ position: "relative", zIndex: 1 }}
            >
              <p>
                Built up as a main turnkey development firm of recognized
                abilities and achievements, IKHGROUPS owes its consistent
                development to long-term business relations at universal levels.
                Pioneering the present serious market, IKHGROUPS Infrastructure
                has expanded its viewpoints to an autonomous division, securing
                considerable interests in highly specialized equipment and
                unique working frameworks with its relentless responsibility
                towards outstanding excellence, ideally surpassing customer
                expectations.
              </p>

              <p>
                We, at IKHGROUPS, have the experience, ability, and assets to
                handle the most challenging development under the most demanding
                plans. Our on-time delivery, on-budget execution, management
                expertise, building know-how, advancement, and unparalleled
                devotion to safety are just a few reasons why IKHGROUPS is the
                full-service substantial contractor to trust.
              </p>

              <p>
                IKHGROUPS maintains high professional standards in procurement
                and development, with due consideration to quality control, loss
                prevention, and scheduling requirements. Our record of cautious
                planning, sound administration, safe work sites, and on-time
                execution shows respect for the regular habitat while minimizing
                traffic interruption and different burdens where we work.
              </p>

              <div className="core-values-section">
                <h3>Our Core Values</h3>
                <ul className="values-list">
                  <li>
                    <i className="fas fa-check-circle" /> Engineering and
                    construction excellence
                  </li>
                  <li>
                    <i className="fas fa-check-circle" /> Maintaining leadership
                    in project management capability, supported by project
                    management systems
                  </li>
                  <li>
                    <i className="fas fa-check-circle" /> Timely project
                    execution and stringent budget control
                  </li>
                  <li>
                    <i className="fas fa-check-circle" /> Exceptional service
                    and progressive technical knowledge and expertise
                  </li>
                  <li>
                    <i className="fas fa-check-circle" /> Outstanding health and
                    safety standards
                  </li>
                  <li>
                    <i className="fas fa-check-circle" /> Transparency,
                    accountability, and discipline in all necessary areas
                  </li>
                  <li>
                    <i className="fas fa-check-circle" /> Respecting and
                    honoring its employees and ensuring the continuous
                    development of their careers and know-how
                  </li>
                </ul>
              </div>

              <p className="closing-remark">
                A quality organization fabricated and completed by quality
                individuals. IKHGROUPS prizes individuals over every other
                asset. Our employees have consistently been the source of our
                quality. Through training and professional development, we're
                especially proud of our long-standing record of safety, as we
                always empower our workforce to take responsibility for consumer
                satisfaction, and grow personally and professionally.
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
