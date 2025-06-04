"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function CivilWorkRCCBuildings() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              Civil Work & RCC Buildings
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Comprehensive civil construction services specializing in
              Reinforced Cement Concrete (RCC) structures for commercial and
              industrial projects.
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/278fdbe7-5a70-45b3-9411-deb9562f2637/Wb3NMW1RNc.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Civil Construction Services</h2>
          </div>
          <div className="content-box-template animate-on-scroll slide-up visible">
            <h3>Expertise in RCC Structures</h3>
            <p>
              IKH Groups provides top-tier civil construction services with
              specialized expertise in Reinforced Cement Concrete (RCC)
              buildings and structures. Our team delivers high-quality
              construction solutions for commercial complexes, industrial
              facilities, and infrastructure projects across Saudi Arabia. We
              combine engineering excellence with practical construction
              knowledge to deliver durable, safe, and cost-effective structures.
            </p>
            <p>
              Our civil work services include complete turnkey solutions from
              foundation work to finishing, with particular specialization in
              RCC framed structures that are designed to withstand the region's
              environmental conditions. We utilize advanced construction
              methodologies and quality materials to ensure structural integrity
              and longevity of all our projects.
            </p>
            <p>
              Our portfolio includes successful completion of projects for major
              clients in both public and private sectors. We adhere to
              international construction standards while complying with all
              local building codes and regulations. Our project management
              approach ensures timely completion while maintaining strict
              quality control at every construction phase.
            </p>
            <p>
              With a team of experienced civil engineers, project managers, and
              skilled workforce, we handle all aspects of civil construction
              including site preparation, structural work, utility
              installations, and finishing works. Our expertise extends to
              specialized construction techniques required for challenging soil
              conditions and unique architectural requirements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
