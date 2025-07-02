"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function MechanicalWork() {
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
          <source src="/videos/mechanical-work-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container hero-container">
          <div className="hero-text-content">
            <h1 className="animate__animated animate__zoomInDown">
              Mechanical Work
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Expert mechanical engineering solutions for industrial plants,
              commercial facilities and infrastructure projects across Saudi
              Arabia.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Mechanical Services</h2>
          </div>

          <div className="content-animation">
            <LottiePlayer src="https://lottie.host/7f0d1320-d223-4742-bef7-e8b29b231dbb/SqcGpcoyF9.lottie" />
          </div>

          <div className="content-box-template animate-on-scroll slide-up visible">
            <div className="service-section">
              <h3>Industrial Mechanical Solutions</h3>
              <p>
                IKH Groups provides complete mechanical contracting services for
                oil & gas plants, power stations, manufacturing facilities, and
                commercial buildings. Our certified mechanical engineers and
                technicians deliver precision installations of piping systems,
                pressure vessels, rotating equipment, and structural steel
                components.
              </p>
            </div>

            <div className="service-section">
              <h3>Core Services</h3>
              <ul className="list-style-template">
                <li>Process piping installations (ASME B31.3)</li>
                <li>HVAC mechanical systems implementation</li>
                <li>Precision pump and compressor alignments</li>
                <li>Tank farm construction and maintenance</li>
                <li>Conveyor system installation</li>
                <li>Pressure vessel installation and testing</li>
                <li>Structural steel fabrication and erection</li>
              </ul>
            </div>

            <div className="service-section">
              <h3>Industry Compliance</h3>
              <p>
                We specialize in ASME-coded pressure systems and API-compliant
                mechanical installations for the petroleum industry. All our
                work adheres to Saudi Aramco and SABIC engineering standards,
                ensuring compliance with strict quality and safety requirements.
              </p>
            </div>

            <div className="service-section">
              <h3>Commercial Mechanical Systems</h3>
              <p>
                For commercial projects, we handle complete mechanical systems
                including plumbing networks, fire protection systems, and
                building automation integrations. Our fabrication workshop
                produces custom mechanical components to exact specifications.
              </p>
            </div>

            <div className="service-section">
              <h3>Maintenance & Integrity Services</h3>
              <ul className="list-style-template">
                <li>Preventive maintenance programs</li>
                <li>Vibration analysis and balancing</li>
                <li>Thermographic inspections</li>
                <li>Laser alignment for critical machinery</li>
                <li>Mechanical integrity assessments</li>
                <li>Root cause failure analysis</li>
              </ul>
              <p>
                From design and fabrication to installation and maintenance, we
                provide end-to-end mechanical solutions tailored to Saudi
                Arabia's industrial landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
