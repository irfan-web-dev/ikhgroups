"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function SteelBuildings() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              Steel Buildings
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Advanced steel structure solutions offering durability,
              flexibility and cost-efficiency for industrial and commercial
              applications.
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/a36cb6b0-12f4-4350-87ae-7c12fdd5c614/1vXKjOXr58.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Steel Building Solutions</h2>
          </div>
          <div className="content-box-template animate-on-scroll slide-up visible">
            <h3>Pre-Engineered Steel Structures</h3>
            <p>
              IKH Groups specializes in the design, fabrication, and erection of
              high-quality steel buildings for diverse industrial and commercial
              applications. Our steel structures offer superior
              strength-to-weight ratios, faster construction timelines, and
              long-term durability compared to conventional building methods. We
              provide complete turnkey solutions for warehouses, factories,
              aircraft hangars, commercial complexes, and specialized industrial
              facilities.
            </p>
            <p>
              Our expertise includes pre-engineered steel buildings (PEB) that
              are custom-designed to meet specific load requirements and
              environmental conditions of Saudi Arabia. We utilize advanced 3D
              modeling software for precise design and detailing, ensuring
              optimal material usage and structural integrity. All our steel
              components are fabricated in controlled factory conditions using
              high-grade steel that meets international standards.
            </p>
            <p>
              The advantages of our steel building solutions include clear-span
              designs that provide column-free interior spaces, excellent
              resistance to extreme weather conditions, and flexibility for
              future expansions. We incorporate advanced insulation systems to
              enhance energy efficiency and occupant comfort in our steel
              structures. Our construction methodology minimizes on-site work,
              reducing construction time by up to 40% compared to traditional
              methods.
            </p>
            <p>
              With a team of certified steel structure engineers and skilled
              erection crews, we ensure precision in every phase from foundation
              work to final commissioning. Our quality control processes adhere
              to both international standards and local Saudi building codes. We
              partner with leading steel manufacturers to source premium
              materials while maintaining competitive pricing for our clients
              across various sectors.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
