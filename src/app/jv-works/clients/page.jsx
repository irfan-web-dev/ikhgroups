"use client";

import LottiePlayer from "@/components/LottiePlayer";

import ClientsSection from "@/components/hompage/ClientsSection";

export default function Clients() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              Our Clients
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Trusted partnerships with industry leaders across multiple sectors
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/a0bab21e-612c-42db-b9e9-4787e76b3fbc/to0JiF8gl2.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Valued Clients</h2>
          </div>
          <div className="content-box-template animate-on-scroll slide-up">
            <p>
              Clients are the key stakeholders at IKHGROUPS. We have an
              unflinching commitment to create value for all our clients and
              this is convincingly mirrored in the close relationships with
              them. At ASIAN STAR FOR IKHGROUPS, we work across an extensive
              array of industries - from offshore companies to corporate clients
              as well as the private equity firms. The success of ASIAN STAR FOR
              IKHGROUPS has engraved a significant niche in the Industrial
              construction field. In addition, more prominently, our capacity to
              innovate, audacity to act, objective to grow and zeal to deliver
              have always been shared by all our clients.
            </p>

            <p>Some of our major clients are as follows:</p>
          </div>
        </div>
      </section>
      <ClientsSection />
    </>
  );
}
