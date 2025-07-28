"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function CEO() {
  return (
    <>
      <section className="hero-section-template">
        <img className="hero-video-background" src="/images/ceo.jpg" alt="" />
        <div className="container hero-container">
          <div className="hero-text-content">
            <h1 className="animate__animated animate__zoomInDown">
              Groups CEO Message
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Strategic leadership and vision for the future
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>CEO's Message</h2>
          </div>

          {/* <div className="content-animation">
            <LottiePlayer src="https://lottie.host/3026bb24-fafd-4d51-b834-5a0807427982/z82OBhrrPL.lottie" />
          </div> */}

          <div className="content-box-template animate-on-scroll slide-up visible">
            <blockquote className="about-message">
              <p>
                As the CEO of IKHGROUPS, I am honored to lead our organization
                into an exciting new era of innovation and growth. Our journey
                has been marked by resilience, adaptability, and an unwavering
                commitment to excellence.
              </p>

              <p>
                Our strategy is built on three key pillars: Innovation that
                drives sustainable solutions, Operational Excellence that
                delivers consistent value, and People Development that nurtures
                our greatest asset - our team. Together, these principles guide
                our decision-making and position us for long-term success in an
                ever-evolving business landscape.
              </p>

              <p>
                I am proud of our talented team whose dedication turns
                challenges into opportunities. As we look to the future, we
                remain focused on creating value for all our stakeholders while
                maintaining the highest standards of integrity and corporate
                responsibility.
              </p>

              <div className="signature-block">
                <p className="closing-line">With best regards,</p>
                <div className="signature-details">
                  <p className="person-name">E.H. EMAM HUSSAIN</p>
                  <p className="company-name">IKH GROUPS</p>
                  <p className="signature-title">Chief Executive Officer</p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
