"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function OverHeadTelephonesLines() {
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
          <source src="/videos/telephone-lines.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container hero-container">
          <div className="hero-text-content">
            <h1 className="animate__animated animate__zoomInDown">
              Overhead & Telephone Lines
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Professional installation and maintenance of overhead power
              distribution networks and telecommunication lines across Saudi
              Arabia.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Line Services</h2>
          </div>

          <div className="content-animation">
            <LottiePlayer src="https://lottie.host/b2390e78-e723-43c3-b979-f08da9a5ad64/WUZGENCMYr.lottie" />
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
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="service-section">
                <h3>Complete Overhead Solutions</h3>
                <p>
                  IKH Groups specializes in the design, installation, and
                  maintenance of overhead power lines and telephone networks
                  throughout Saudi Arabia. Our services cover everything from
                  high-voltage transmission lines to local distribution networks
                  and telecommunication cabling.
                </p>
              </div>

              <div className="service-section">
                <h3>Power Line Services</h3>
                <ul className="list-style-template">
                  <li>High-voltage transmission line installation</li>
                  <li>Distribution network upgrades and maintenance</li>
                  <li>Pole installation (wooden, concrete, steel)</li>
                  <li>Conductor stringing and tensioning</li>
                  <li>Live-line maintenance techniques</li>
                  <li>Insulator cleaning and replacement</li>
                  <li>Lightning protection systems</li>
                </ul>
              </div>

              <div className="service-section">
                <h3>Telecommunication Services</h3>
                <ul className="list-style-template">
                  <li>Aerial fiber optic cable installation</li>
                  <li>Copper telephone line deployment</li>
                  <li>Cable splicing and termination</li>
                  <li>Network testing and certification</li>
                  <li>Last-mile connectivity solutions</li>
                  <li>Drop wire installations</li>
                </ul>
              </div>

              <div className="service-section">
                <h3>Compliance & Safety</h3>
                <p>
                  All our work complies with Saudi Electricity Company (SEC)
                  specifications and international safety standards (IEEE, IEC).
                  We employ specialized teams trained in safety protocols for
                  both power and communication line work.
                </p>
              </div>

              <div className="service-section">
                <h3>Specialized Capabilities</h3>
                <ul className="list-style-template">
                  <li>Challenging terrain installations</li>
                  <li>Urban congestion solutions</li>
                  <li>Emergency storm response</li>
                  <li>Infrastructure surveys and mapping</li>
                  <li>Environmental impact mitigation</li>
                </ul>
                <p>
                  Our fleet includes bucket trucks, line tensioners, and testing
                  equipment to handle projects of any scale across Saudi
                  Arabia's diverse landscapes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
