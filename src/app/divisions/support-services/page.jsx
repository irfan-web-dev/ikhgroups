"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function SupportServices() {
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
          <source src="/videos/support-services.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container hero-container">
          <div className="hero-text-content">
            <h1 className="animate__animated animate__zoomInDown">
              Support Services
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Comprehensive support solutions to enhance your construction
              projects and business operations.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Support Services</h2>
          </div>

          <div className="content-animation">
            <LottiePlayer src="https://lottie.host/3209ebbc-9811-489f-8fb3-5c991a432ad4/xI87Q0dBYg.lottie" />
          </div>

          <div className="content-box-template animate-on-scroll slide-up visible">
            <div className="service-section">
              <h3>Civil Works Support</h3>
              <ul className="list-style-template">
                <li>
                  <strong>Concrete Core Drilling:</strong> 6mm – 1000mm diameter
                  for any concrete thickness
                </li>
                <li>
                  <strong>Concrete Cutting:</strong> Wall saw cutting up to
                  730mm depth (vertical/horizontal/inclined)
                </li>
                <li>
                  <strong>Floor Sawing:</strong> Precise cutting up to 250mm
                  depth for slab removal
                </li>
                <li>
                  <strong>GPR Scanning:</strong> Advanced concrete scanning and
                  utility detection
                </li>
              </ul>
            </div>

            <div className="service-section">
              <h3>Professional Staffing Solutions</h3>
              <ul className="list-style-template">
                <li>
                  Temporary workforce for technical and professional positions
                </li>
                <li>Full benefits package equivalent to permanent employees</li>
                <li>Guaranteed satisfaction with performance standards</li>
                <li>
                  Specialized construction teams including:
                  <ul className="nested-list">
                    <li>Superintendents & Site Managers</li>
                    <li>Qualified Welders & Fitters</li>
                    <li>Engineers & Supervisors</li>
                    <li>Inspectors & Technicians</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="service-section">
              <h3>Equipment Rental Services</h3>
              <ul className="list-style-template">
                <li>Extensive range of construction equipment</li>
                <li>Safety-focused equipment management</li>
                <li>Cost-effective rental solutions</li>
                <li>Nationwide network support</li>
                <li>Innovative equipment tracking systems</li>
                <li>Industry-leading safety standards</li>
              </ul>
            </div>

            <div className="service-section">
              <h3>Quality Assurance</h3>
              <p>
                All our support services adhere to the highest industry
                standards, with rigorous quality control measures and
                performance guarantees. Our certified professionals and
                well-maintained equipment ensure reliable support for your
                critical operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
