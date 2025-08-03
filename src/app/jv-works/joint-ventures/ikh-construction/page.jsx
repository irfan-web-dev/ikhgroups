"use client";
import { useState } from "react";
import Link from "next/link";
import "../joint-ventures.css";

export default function IKHGeneralConstruction() {
  const [showPdf, setShowPdf] = useState(false);

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
              IKH GENERAL CONSTRUCTION
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
                  IKH General Construction Company is a dedicated construction
                  firm specializing in delivering high-quality projects tailored
                  to meet the unique needs of our clients. With a proven track
                  record of success in the industry, we are excited about the
                  possibility of collaborating on future endeavors.
                </p>

                <p>
                  Our company has built a solid reputation for excellence in
                  construction management, general contracting, and design-build
                  services. Our team of experienced professionals is committed
                  to ensuring that every project is completed on time, within
                  budget, and to the highest standards of quality.
                </p>

                <p>
                  At IKH General Construction, we pride ourselves on our ability
                  to adapt to the specific requirements of each project. We
                  understand the importance of clear communication and
                  collaboration, which is why we work closely with our clients
                  and stakeholders from project inception through to completion.
                </p>

                <h3>Our Comprehensive Services</h3>
                <ul className="services-list">
                  <li>
                    Pre-Construction Planning: Thorough planning and analysis to
                    set the foundation for successful project execution.
                  </li>
                  <li>
                    Project Management: Skilled management of all aspects of
                    construction to ensure efficiency.
                  </li>
                  <li>
                    Safety Protocols: A strong emphasis on safety to protect our
                    team and the surrounding community throughout the
                    construction process.
                  </li>
                </ul>

                <div className="service-section">
                  <h4>Site Development</h4>
                  <p>
                    IKH has a full range of equipment and available man power
                    capable of developing at grade sites and structures. Our
                    services start with GPS topographic models which are
                    transferred into our grading equipment onsite for added
                    speed & accuracy on the ground. We can also provide surface
                    demolition, clearing, pre-wet, track out and other civil
                    services.
                  </p>
                </div>

                <div className="service-section">
                  <h4>Structural Excavation & Backfill</h4>
                  <p>
                    We are expert in structural excavation & backfill. We pay
                    special attention towards excavation to lines and grades,
                    over-excavation, & specific compaction requirements
                    essential to the building's integrity and lifespan. We will
                    work side-by-side with other contractors to help coordinate
                    the schedule while meeting cost requirements and tackling
                    logistical challenges typically involved on new projects.
                  </p>
                  <p>
                    IKH will generally mitigate the track-out of dirt and truck
                    hauling by using the same aggregate and palliative
                    stabilization, larger size rock at the entrances/exits, and
                    street sweeping.
                  </p>
                </div>

                <div className="service-section">
                  <h4>Mass Excavation</h4>
                  <p>
                    IKH has been in the mass excavation and backfill business
                    which included several of the projects that have shaped its
                    unique skyline. We pride ourselves on our ability to take on
                    the largest most difficult excavations in a cost effective
                    and timely manner.
                  </p>
                </div>

                <div className="service-section">
                  <h4>Installation Services</h4>
                  <ul>
                    <li>
                      Installation of Manufacturing Tooling, Conveyors and
                      Industrial Equipment
                    </li>
                    <li>
                      Process and Facility Equipment Relocation and Engineering
                    </li>
                    <li>Consulting, Budgeting, and Value Engineering</li>
                  </ul>
                  <p>
                    IKH Groups provides equipment installation services for a
                    wide range of equipment types including manufacturing
                    tooling, conveyors and industrial machines. With an
                    exemplary safety record, IKH Groups is a leader in the
                    installation industry and offers strong project management
                    alongside our self perform installation services.
                  </p>
                </div>

                <div className="service-section">
                  <h4>Structural Fabrication & Erection</h4>
                  <p>
                    At IKH Groups, we supply all the equipment, manpower, tools
                    and transportation to erect the customers' buildings, power
                    house, boiler & chimney structure and other supporting
                    components. From metal buildings and structural steel
                    projects to erecting new structures and repairing existing
                    structures, we deliver the best results for your erection
                    projects every time.
                  </p>
                  <p>
                    We check everything from operator qualifications and crane
                    inspections to weather and rigging. Steel erection is all
                    disciplined detailing all the while engineering safety into
                    those activities. We strictly abide by a zero-incident
                    policy. Every one of our construction sites is a completely
                    safe working environment.
                  </p>
                </div>

                <div className="contact-info">
                  <h3>Contact Us</h3>
                  <p>
                    <strong>IKH General Construction</strong>
                    <br />
                    A Subsidiary of IKH Groups of Companies
                    <br />
                    <strong>C.R No.:</strong> C-196043
                    <br />
                    <strong>Phone:</strong> +88017110265
                    <br />
                    <strong>Email:</strong> info@ikhgroups.com,
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
