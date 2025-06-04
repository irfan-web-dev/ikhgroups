"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function MechanicalWork() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              Piping System
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Complete piping solutions for oil & gas, petrochemical, and
              industrial facilities - from design to installation and
              maintenance.
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/a8b0042e-32fe-48f9-8851-f5d6401532d6/QY3VAsHKCI.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Piping Services</h2>
          </div>
          <div className="content-box-template animate-on-scroll slide-up">
            <h3>Industrial Piping Expertise</h3>
            <p>
              IKH Groups specializes in comprehensive piping system solutions
              for the oil & gas, petrochemical, power generation, and water
              treatment industries across Saudi Arabia. Our ASME-certified
              piping engineers and welders deliver precision installations of
              process piping, utility networks, and pipeline systems that meet
              the most stringent quality and safety standards.
            </p>
            <p>
              Our services include complete piping system design, fabrication,
              installation, testing, and maintenance. We work with all piping
              materials including carbon steel, stainless steel, duplex, and
              specialty alloys for corrosive services. Our capabilities cover
              everything from small bore tubing to large diameter pipelines,
              with expertise in both above-ground and underground installations.
              All our piping work complies with ASME B31.3, API, and Saudi
              Aramco engineering standards.
            </p>
            <p>
              We provide turnkey piping solutions including stress analysis,
              pipe routing, support design, and insulation systems. Our in-house
              fabrication shop produces prefabricated spools using advanced
              welding techniques, while our field teams execute complex
              installations in operational plants with minimal disruption.
              Specialized services include hot tapping, line stopping, and
              pigging operations for existing pipelines.
            </p>
            <p>
              With extensive experience in Saudi Arabia's industrial sector,
              we've successfully completed piping projects for major refineries,
              petrochemical plants, and power stations. Our quality control
              program includes radiographic testing, hydrostatic testing, and
              material verification to ensure piping system integrity. From
              conceptual design to commissioning and maintenance, we deliver
              reliable piping solutions tailored to each client's specific
              process requirements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
