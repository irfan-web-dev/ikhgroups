"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function OurMission() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__fadeInLeft">
              Our Mission
            </h1>
            <p className="animate__animated animate__fadeInRight">
              Purpose, values, and goals that drive us forward
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/791ca8c6-69b8-4759-9fa1-4d269d0613f0/GNQcAuqZ0T.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Mission</h2>
          </div>
          <div className="about-content animate-on-scroll slide-up visible">
            <blockquote className="about-message">
              <p>
                Our mission is to provide our employees with an honest and
                helpful working environment, where every employee individually
                and collectively, can dedicate themselves to providing our
                customers with exceptional workmanship, extraordinary service,
                and professional integrity.
              </p>

              <p>
                We will provide a professional approach to constructing
                exceptional quality projects which meet budget and schedule
                goals.
              </p>

              <p>
                To maintain the highest levels of professionalism, integrity,
                honesty and fairness in our relationships with our suppliers,
                subcontractors, professional associates and customers.
              </p>

              <p>
                To perform for our clients, the highest level of quality
                construction at fair and market competitive prices.
              </p>

              <p>
                To ensure the longevity of our company through repeat and
                referral business achieved by customer satisfaction in all areas
                including timeliness, attention to detail and service-minded
                attitudes.
              </p>

              <p>
                We are committed to fulfilling our mission by: Providing the
                highest level of service and innovative thinking for our
                clients. Providing a safe and rewarding work experience for our
                employees. Inspiring this same level of thinking and service in
                every community we touch.
              </p>

              <div className="signature-block">
                <p className="closing-line">Committed with vision,</p>
                <div className="signature-details">
                  <p className="company-name">IKH GROUPS</p>
                  <p className="signature-title">Our Mission</p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
