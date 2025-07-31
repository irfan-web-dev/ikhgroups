"use client";

import LottiePlayer from "@/components/LottiePlayer";

import ClientsSection from "@/components/hompage/ClientsSection";

export default function Clients() {
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
          <source src="/videos/client.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              Our Clients
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Trusted partnerships with industry leaders across multiple sectors
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Valued Clients</h2>
          </div>

          <div className="content-animation">
            <LottiePlayer src="https://lottie.host/a0bab21e-612c-42db-b9e9-4787e76b3fbc/to0JiF8gl2.lottie" />
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
              <p>
                Clients are the key stakeholders at IKHGROUPS. We have an
                unflinching commitment to create value for all our clients and
                this is convincingly mirrored in the close relationships with
                them. At ASIAN STAR FOR IKHGROUPS, we work across an extensive
                array of industries - from offshore companies to corporate
                clients as well as the private equity firms. The success of
                ASIAN STAR FOR IKHGROUPS has engraved a significant niche in the
                Industrial construction field. In addition, more prominently,
                our capacity to innovate, audacity to act, objective to grow and
                zeal to deliver have always been shared by all our clients.
              </p>
              <p>Some of our major clients are as follows:</p>
            </div>
          </div>
        </div>
      </section>
      <ClientsSection />
    </>
  );
}
