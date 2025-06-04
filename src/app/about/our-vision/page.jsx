"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function OurVision() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__fadeInLeft">
              Our Vision
            </h1>
            <p className="animate__animated animate__fadeInRight">
              Guided growth through integrity and innovation
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/15cd0741-b60d-4bb0-8a10-1822c69e5f4f/PQVbAC58nx.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Vision</h2>
          </div>
          <div className="about-content animate-on-scroll slide-up">
            <blockquote className="about-message">
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
                  <li>Respond to the clients’ voice.</li>
                  <li>
                    Develop an atmosphere of respect, support and recognition.
                  </li>
                  <li>Promote long-term relationships.</li>
                </ul>
              </div>

              <div>
                Our vision for the future is to be identified by Clients and our
                competitors as the industry’s first choice contractor who
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
                  <p className="company-name">IKH GROUPS</p>
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
