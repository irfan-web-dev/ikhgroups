"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function ElectricWork() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              Electric Work
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Comprehensive electrical solutions for industrial, commercial and
              residential projects - ensuring safety, efficiency and
              reliability.
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/385854f9-ff41-4f96-b84a-111e657f8e3a/i81B6a2PBb.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Electrical Services</h2>
          </div>
          <div className="content-box-template animate-on-scroll slide-up">
            <h3>Complete Electrical Solutions</h3>
            <p>
              IKH Groups provides end-to-end electrical services for all types
              of projects across Saudi Arabia. Our certified electricians and
              engineers deliver high-quality installations, maintenance, and
              troubleshooting services for industrial plants, commercial
              buildings, and residential complexes. We adhere to the highest
              safety standards while implementing innovative electrical
              solutions.
            </p>
            <p>
              Our electrical services include complete wiring solutions, panel
              installations, lighting systems, power distribution networks, and
              renewable energy integrations. We specialize in high-voltage
              electrical systems for industrial applications, including
              substations, transformers, and switchgear installations. All our
              work complies with Saudi Electricity Company (SEC) regulations and
              international electrical codes.
            </p>
            <p>
              For commercial projects, we implement energy-efficient lighting
              solutions, emergency power systems, and smart building automation.
              Our residential services cover everything from basic wiring to
              complete home automation systems. We use only premium-grade
              materials from trusted manufacturers to ensure long-term
              reliability and performance of all our electrical installations.
            </p>
            <p>
              Our team stays updated with the latest electrical technologies
              including solar power integration, EV charging stations, and
              energy management systems. We provide 24/7 emergency services for
              critical electrical systems, with rapid response teams available
              across major cities in Saudi Arabia. From design to implementation
              and maintenance, we offer comprehensive electrical solutions
              tailored to each client's specific requirements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
