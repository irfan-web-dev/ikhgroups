"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function BuildingsConstruction() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              Buildings Construction
            </h1>
            <p className="animate__animated animate__fadeInUp">
              End-to-end construction solutions for commercial, residential and
              institutional buildings - delivering quality structures on time
              and within budget.
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/cbb946b3-30ef-4e73-b4ed-028c8042ebae/eZyXt2mTij.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Construction Services</h2>
          </div>
          <div className="content-box-template animate-on-scroll slide-up visible">
            <h3>Complete Building Solutions</h3>
            <p>
              IKH Groups offers comprehensive building construction services
              across Saudi Arabia, handling projects from initial design to
              final handover. We specialize in constructing commercial
              complexes, residential towers, institutional buildings, and
              mixed-use developments. Our construction methodology combines
              modern techniques with rigorous quality control to deliver
              structures that stand the test of time.
            </p>
            <p>
              Our services include complete civil construction, structural
              works, MEP installations, and finishing works. We employ advanced
              project management systems to ensure timely completion while
              maintaining the highest standards of safety and quality. Our team
              of architects, engineers, and construction professionals work
              collaboratively to transform architectural visions into reality,
              paying meticulous attention to every detail from foundation to
              rooftop.
            </p>
            <p>
              We construct buildings using both conventional RCC methods and
              modern pre-engineered systems, selecting the most appropriate
              approach for each project's requirements. Our portfolio includes
              high-rise towers, mid-rise buildings, and large-scale horizontal
              developments. All our constructions comply with Saudi Building
              Code (SBC) requirements and international quality standards.
            </p>
            <p>
              As a turnkey construction provider, we manage all aspects
              including permits, approvals, utility connections, and
              landscaping. We prioritize sustainable construction practices,
              incorporating energy-efficient designs and environmentally
              friendly materials where possible. Our client-focused approach
              ensures transparent communication throughout the construction
              process, with regular progress updates and strict adherence to
              agreed timelines and budgets.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
