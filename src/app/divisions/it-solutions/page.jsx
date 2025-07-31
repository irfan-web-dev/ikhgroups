"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function ITSolutions() {
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
          <source src="/videos/it-solution.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container hero-container">
          <div className="hero-text-content">
            <h1 className="animate__animated animate__zoomInDown">
              IT Solutions
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Comprehensive technology solutions to streamline your business
              operations and enhance digital presence.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our IT Services</h2>
          </div>

          <div className="content-animation">
            <LottiePlayer src="https://lottie.host/69267603-ec02-4510-926f-09817c6a6c25/FdxisJwRSI.lottie" />
          </div>

          <div
            className="content-box-template animate-on-scroll slide-up visible"
            style={{ position: "relative" }}
          >
            {/* Centered background logo */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "50%",
                height: "50%",
                zIndex: 0,
                opacity: 0.1,
                backgroundImage: "url(/images/bg-logo.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="service-section">
                <h3>Comprehensive IT Solutions</h3>
                <p>
                  The scope of the Division encompasses the planning,
                  development, implementation, and application of existing and
                  new technologies and systems that provide for the process of
                  collecting, storing, and organizing information for its future
                  retrieval, exchange, use, and delivery.
                </p>
              </div>

              <div className="service-section">
                <h3>Enterprise Resource Planning (ERP)</h3>
                <p>
                  ERP is business management software that allows an
                  organization to use a system of integrated applications to
                  manage the business. ERP software contains many modules that
                  an enterprise would require, based on what best meets its
                  specific needs and technical capabilities.
                </p>
                <h4>ERP Modules Include:</h4>
                <ul className="list-style-template">
                  <li>Accounting system</li>
                  <li>Material purchasing and Inventory control</li>
                  <li>HR with payroll system</li>
                  <li>Warehouse Management</li>
                  <li>Customer Relationship Management (CRM)</li>
                  <li>Supply Chain Management</li>
                </ul>
              </div>

              <div className="service-section">
                <h3>Our IT Service Sections</h3>
                <p>
                  IT has multiple sections, each concentrating on specific areas
                  of interest. We provide various other services that suites
                  your need at affordable prices, quality and satisfaction
                  guaranteed.
                </p>
              </div>

              <div className="service-section">
                <h3>Digital Services</h3>
                <ul className="list-style-template">
                  <li>Domain Registration, Renewal, & Transfer</li>
                  <li>Web Design & Development</li>
                  <li>E-commerce Solutions</li>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Social Media Marketing</li>
                  <li>Email and SMS Marketing Campaigns</li>
                  <li>Logo & Brand Identity Design</li>
                  <li>Company Profile & Graphic Design</li>
                  <li>Mobile Application Development</li>
                </ul>
              </div>

              <div className="service-section">
                <h3>Infrastructure Services</h3>
                <ul className="list-style-template">
                  <li>Network Design & Implementation</li>
                  <li>Cloud Solutions & Migration</li>
                  <li>Data Center Services</li>
                  <li>Cybersecurity Solutions</li>
                  <li>IT Support & Maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
