"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function SteelBuildings() {
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
          <source src="/videos/steel-building.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container hero-container">
          <div className="hero-text-content">
            <h1 className="animate__animated animate__zoomInDown">
              Steel Buildings
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Advanced steel structure solutions offering durability,
              flexibility and cost-efficiency for industrial and commercial
              applications.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Steel Building Solutions</h2>
          </div>

          <div className="content-animation">
            <LottiePlayer src="https://lottie.host/a36cb6b0-12f4-4350-87ae-7c12fdd5c614/1vXKjOXr58.lottie" />
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
                <h3>Pre-Engineered Steel Structures</h3>
                <p>
                  IKH Groups specializes in the design, fabrication, and
                  erection of high-quality steel buildings for diverse
                  industrial and commercial applications across Saudi Arabia.
                </p>
              </div>

              <div className="service-section">
                <h3>Key Applications</h3>
                <ul className="list-style-template">
                  <li>Industrial warehouses and factories</li>
                  <li>Aircraft hangars and maintenance facilities</li>
                  <li>Commercial complexes and showrooms</li>
                  <li>Retail centers and supermarkets</li>
                  <li>Sports facilities and event venues</li>
                  <li>Agricultural storage buildings</li>
                </ul>
              </div>

              <div className="service-section">
                <h3>Technical Advantages</h3>
                <ul className="list-style-template">
                  <li>Clear-span designs up to 100m+</li>
                  <li>40% faster construction than conventional methods</li>
                  <li>Superior strength-to-weight ratio</li>
                  <li>Customizable roof and wall systems</li>
                  <li>Seismic and wind load resistance</li>
                  <li>Energy-efficient insulation options</li>
                </ul>
              </div>

              <div className="service-section">
                <h3>Our Process</h3>
                <ul className="list-style-template">
                  <li>3D modeling and structural analysis</li>
                  <li>Precision factory fabrication</li>
                  <li>Bolt-up construction methodology</li>
                  <li>Quality-controlled erection</li>
                  <li>Integrated MEP solutions</li>
                  <li>Custom finishing options</li>
                </ul>
              </div>

              <div className="service-section">
                <h3>Quality Assurance</h3>
                <p>
                  Our steel buildings comply with international standards (AISC,
                  MBMA) and Saudi building codes. We use certified materials and
                  implement rigorous quality control at every stage from design
                  to completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
