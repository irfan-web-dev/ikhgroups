"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function FireProtectionSystems() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              Fire Protection Systems
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Complete fire safety solutions for commercial, industrial and
              residential facilities - protecting lives and property through
              advanced systems.
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/5c5855e9-8a12-4e20-bf41-a9c633c45020/8kV9DEKFot.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Fire Protection Services</h2>
          </div>
          <div className="content-box-template animate-on-scroll slide-up visible">
            <h3>Life Safety Solutions</h3>
            <p>
              IKH Groups provides end-to-end fire protection systems for all
              types of facilities across Saudi Arabia. Our certified fire safety
              engineers design and install NFPA-compliant systems tailored to
              each building's specific risks and requirements. We offer complete
              solutions including fire detection, suppression, and alarm systems
              that meet Saudi Civil Defense regulations and international safety
              standards.
            </p>
            <p>
              Our services include installation of automatic sprinkler systems,
              fire hydrant networks, gaseous suppression systems (FM200, CO2),
              and specialized solutions for high-hazard areas. For commercial
              buildings, we implement addressable fire alarm systems with voice
              evacuation, while industrial facilities benefit from our
              explosion-proof detection solutions. All our systems undergo
              rigorous testing and commissioning to ensure optimal performance
              during emergencies.
            </p>
            <p>
              We specialize in fire protection for oil & gas facilities,
              including deluge systems for process areas and foam suppression
              systems for tank farms. Our team stays updated with the latest
              technologies like early warning aspirating smoke detection and
              video flame detection systems. Regular maintenance contracts
              include system inspections, hydrostatic testing, and alarm panel
              checks to maintain compliance with Saudi Civil Defense
              requirements.
            </p>
            <p>
              With extensive experience in Saudi Arabia's construction sector,
              we've protected everything from high-rise towers to industrial
              plants. Our fire safety approach combines engineering expertise
              with practical installation knowledge, ensuring systems are both
              code-compliant and maintainable. From initial risk assessment to
              final commissioning and annual maintenance, we deliver
              comprehensive fire protection that gives building owners peace of
              mind.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
