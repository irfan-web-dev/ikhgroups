"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function OurVision() {
  return (
    <>
      <section className="hero-section-template">
        <img
          className="hero-video-background"
          src="/images/our-vision.avif"
          alt=""
        />
        <div className="container hero-container">
          <div className="hero-text-content">
            <h1 className="animate__animated animate__zoomInDown">
              Our Vision
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Guided growth through integrity and innovation
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Vision</h2>
          </div>

          <div className="content-animation">
            <LottiePlayer src="https://lottie.host/15cd0741-b60d-4bb0-8a10-1822c69e5f4f/PQVbAC58nx.lottie" />
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
                Our vision guides every aspect of our business by describing
                what we must accomplish to continue achieving sustainable
                growth.
              </p>

              <div>
                Our vision is to:
                <ul>
                  <li>
                    Never compromise commitments to our employees and clients.
                  </li>
                  <li>Respond to the clients' voice.</li>
                  <li>
                    Develop an atmosphere of respect, support and recognition.
                  </li>
                  <li>Promote long-term relationships.</li>
                </ul>
              </div>

              <div>
                Our vision for the future is to be identified by Clients and our
                competitors as the industry's first choice contractor who
                always:
                <ul>
                  <li>
                    Delivers projects to the highest standards of health &
                    safety
                  </li>
                  <li>
                    Continually differentiates ourselves from our competitors
                    through superior management skills, professionalism,
                    integrity and excellence
                  </li>
                  <li>
                    Anticipates and responds innovatively to Client requirements
                  </li>
                  <li>
                    Provides proactive team members focused on delivery of goals
                  </li>
                  <li>
                    Provides continuously improving sustainability commitments
                  </li>
                  <li>Fosters close working relationships for the long term</li>
                  <li>
                    Values projects as highly as our Clients and is prepared to
                    go the extra mile to deliver them
                  </li>
                </ul>
              </div>

              <div className="signature-block">
                <p className="closing-line">With clarity and purpose,</p>
                <div className="signature-details">
                  {/* <p className="company-name">IKH GROUPS</p> */}
                  <p className="signature-title">Vision Statement</p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
