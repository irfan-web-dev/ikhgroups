"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function PipingSystem() {
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
          <source src="/videos/piping-system.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container hero-container">
          <div className="hero-text-content">
            <h1 className="animate__animated animate__zoomInDown">
              Piping System
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Complete piping solutions for oil & gas, petrochemical, and
              industrial facilities - from design to installation and
              maintenance.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Piping Services</h2>
          </div>

          <div className="content-animation">
            <LottiePlayer src="https://lottie.host/a8b0042e-32fe-48f9-8851-f5d6401532d6/QY3VAsHKCI.lottie" />
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
                <h3>Industrial Piping Expertise</h3>
                <p>
                  IKH Groups specializes in comprehensive piping system
                  solutions for the oil & gas, petrochemical, power generation,
                  and water treatment industries across Saudi Arabia. Our
                  ASME-certified professionals deliver precision installations
                  meeting stringent quality and safety standards.
                </p>
              </div>

              <div className="service-section">
                <h3>Core Piping Services</h3>
                <ul className="list-style-template">
                  <li>Process piping design and installation</li>
                  <li>Utility piping networks (steam, water, air)</li>
                  <li>Pipeline construction and maintenance</li>
                  <li>Pipe fabrication and spooling</li>
                  <li>Above-ground and underground installations</li>
                  <li>Hot tapping and line stopping services</li>
                </ul>
              </div>

              <div className="service-section">
                <h3>Materials & Standards</h3>
                <ul className="list-style-template">
                  <li>Carbon steel, stainless steel, duplex alloys</li>
                  <li>HDPE and corrosion-resistant materials</li>
                  <li>ASME B31.3 Process Piping Code compliance</li>
                  <li>API and Saudi Aramco standards</li>
                  <li>ANSI/ASME flange ratings</li>
                </ul>
              </div>

              <div className="service-section">
                <h3>Specialized Capabilities</h3>
                <ul className="list-style-template">
                  <li>Stress analysis and pipe support design</li>
                  <li>Insulation and heat tracing systems</li>
                  <li>Pipe routing and 3D modeling</li>
                  <li>Hydrotesting and pneumatic testing</li>
                  <li>Non-destructive examination (RT, UT, PT)</li>
                  <li>Turnaround and maintenance services</li>
                </ul>
              </div>

              <div className="service-section">
                <h3>Quality Assurance</h3>
                <p>
                  Our comprehensive QC program includes material verification,
                  weld mapping, pressure testing, and final documentation. We
                  maintain complete traceability from fabrication to
                  installation, ensuring piping system integrity for your
                  critical processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
