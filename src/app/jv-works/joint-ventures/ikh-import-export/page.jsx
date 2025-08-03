"use client";
import Link from "next/link";
import "../joint-ventures.css";

export default function IKHImportExport() {
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
          <source src="/videos/joint-ventures.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              IKH IMPORT AND EXPORT
            </h1>
            <p className="animate__animated animate__fadeInUp">
              A Subsidiary of IKH Groups of Companies
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Company Introduction</h2>
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
            <div
              className="jv-content-wrapper"
              style={{ position: "relative", zIndex: 1 }}
            >
              <div className="jv-text-content">
                <p>
                  IKH Import and Export is a dynamic trading arm of IKH Groups
                  of Companies, specializing in global trade solutions with a
                  focus on quality, reliability, and customer satisfaction. We
                  bridge international markets with local expertise.
                </p>

                <h3>Our Core Services</h3>
                <ul className="services-list">
                  <li>International procurement and sourcing solutions</li>
                  <li>Export of locally manufactured goods and commodities</li>
                  <li>Import of industrial machinery and equipment</li>
                  <li>Customs clearance and logistics management</li>
                  <li>Trade financing and documentation services</li>
                </ul>

                <div className="service-section">
                  <h4>Import Services</h4>
                  <p>
                    We specialize in importing high-quality industrial
                    equipment, construction materials, and specialized machinery
                    for various sectors:
                  </p>
                  <ul>
                    <li>Construction equipment and tools</li>
                    <li>Industrial machinery and spare parts</li>
                    <li>Raw materials for manufacturing</li>
                    <li>Electrical and mechanical components</li>
                    <li>Safety equipment and PPE</li>
                  </ul>
                </div>

                <div className="service-section">
                  <h4>Export Services</h4>
                  <p>Our export division handles international shipments of:</p>
                  <ul>
                    <li>Local manufactured goods</li>
                    <li>Construction materials</li>
                    <li>Textile products</li>
                    <li>Agricultural commodities</li>
                    <li>Handicrafts and specialty items</li>
                  </ul>
                </div>

                <div className="service-section">
                  <h4>Logistics Solutions</h4>
                  <p>Comprehensive logistics support including:</p>
                  <ul>
                    <li>Sea and air freight forwarding</li>
                    <li>Customs clearance and documentation</li>
                    <li>Warehousing and distribution</li>
                    <li>Cargo insurance services</li>
                    <li>Door-to-door delivery solutions</li>
                  </ul>
                </div>

                <div className="service-section">
                  <h4>Our Competitive Advantages</h4>
                  <ul>
                    <li>Extensive global supplier network</li>
                    <li>Market intelligence and sourcing expertise</li>
                    <li>Competitive pricing and flexible payment terms</li>
                    <li>Efficient customs clearance procedures</li>
                    <li>Dedicated customer support</li>
                  </ul>
                </div>

                <p className="closing-statement">
                  As part of <strong>IKHGROUPS</strong>, we are committed to
                  providing seamless trade solutions that connect businesses
                  across borders with efficiency and reliability.
                </p>

                <div className="contact-info">
                  <h3>Contact Us</h3>
                  <p>
                    <strong>IKH Import and Export</strong>
                    <br />
                    A Subsidiary of IKH Groups of Companies
                    <br />
                    <strong>Phone:</strong> +88017110265
                    <br />
                    <strong>Email:</strong> trade@ikhgroups.com,
                    ikhgroups@gmail.com
                    <br />
                    <strong>Website:</strong> www.ikhgroups.com
                    <br />
                    <strong>Location:</strong> Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
