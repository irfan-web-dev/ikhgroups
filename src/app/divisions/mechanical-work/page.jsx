"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function MechanicalWork() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              Mechanical Work
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Expert mechanical engineering solutions for industrial plants,
              commercial facilities and infrastructure projects across Saudi
              Arabia.
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/7f0d1320-d223-4742-bef7-e8b29b231dbb/SqcGpcoyF9.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Mechanical Services</h2>
          </div>
          <div className="content-box-template animate-on-scroll slide-up">
            <h3>Industrial Mechanical Solutions</h3>
            <p>
              IKH Groups provides complete mechanical contracting services for
              oil & gas plants, power stations, manufacturing facilities, and
              commercial buildings. Our certified mechanical engineers and
              technicians deliver precision installations of piping systems,
              pressure vessels, rotating equipment, and structural steel
              components. We combine engineering expertise with hands-on field
              experience to solve complex mechanical challenges.
            </p>
            <p>
              Our mechanical services include process piping installations, HVAC
              ductwork, pump and compressor alignments, tank farm constructions,
              and conveyor system implementations. We specialize in ASME-coded
              pressure systems and API-compliant mechanical installations for
              the petroleum industry. All our work adheres to Saudi Aramco and
              SABIC engineering standards where applicable, ensuring compliance
              with the strictest quality and safety requirements.
            </p>
            <p>
              For commercial projects, we handle complete mechanical systems
              including plumbing networks, fire protection systems, and building
              automation integrations. Our fabrication workshop produces custom
              mechanical components to exact specifications, while our field
              teams execute installations with millimeter precision. We maintain
              an extensive inventory of mechanical tools and lifting equipment
              to handle projects of any scale.
            </p>
            <p>
              With expertise in both static and rotating mechanical equipment,
              we offer preventive maintenance programs to maximize system
              reliability and lifespan. Our mechanical integrity services
              include vibration analysis, thermographic inspections, and laser
              alignment for critical machinery. From design and fabrication to
              installation and maintenance, we provide end-to-end mechanical
              solutions tailored to Saudi Arabia's industrial landscape.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
