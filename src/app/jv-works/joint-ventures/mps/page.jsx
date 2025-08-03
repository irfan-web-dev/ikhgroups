"use client";
import Link from "next/link";
import "../joint-ventures.css";

export default function MpsEngineers() {
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
              MPS ENGINEERS AND CONSULTANCY
            </h1>
            <p className="animate__animated animate__fadeInUp">
              We are committed to help you
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
                <h3>INTRODUCTION</h3>
                <p>
                  <strong>MPS Engineering and Consultancy</strong> is well
                  established and equipped with a team of qualified and
                  experienced managers, engineers (Civil, Mechanical &
                  Electrical), architecture, supervisors, quality controllers,
                  quantity surveyors, safety inspectors / officers and
                  technicians including Fitters, Riggers, Mason, sand blasters,
                  spray painters, industrial painters, decorative painters,
                  scaffolders & welders.
                </p>

                <p>
                  <strong>MPS Engineering and Consultancy</strong> is an award
                  winning Bangladesh & Saudi based on{" "}
                  <strong>
                    Social, Environment & Safety which consists of architectural
                    & structural design firm dedicated to providing innovative,
                    effective design solutions;
                  </strong>{" "}
                  creating environments that support and enhance the lives of
                  our clients and preserve the environment.
                </p>

                <p>
                  We view design innovation in practical terms, creating spaces
                  that efficiently support our client's operations. Design
                  innovation with in this context is about materials that
                  require minimal maintenance and the integration of building
                  systems that are flexible to changing needs and emerging
                  technologies.
                </p>

                <p>
                  <strong>MPS Engineering and Consultancy</strong>, an
                  engineering consulting firm strives for energy consultancy,
                  fire, electrical and building safety assessment and machinery
                  supplies. Over the years, we have achieved a widespread
                  success providing an immense support to our clients in terms
                  of quality and timeliness. We still have been fortifying our
                  verticals in the fields of{" "}
                  <strong>
                    ELECTRICAL SAFETY ASSESSMENT (ESA), FIRE SAFETY ASSESSMENT
                    (FSA), BUILDING SAFETY ASSESSMENT (BSA), OCCUPATIONAL HEALTH
                    AND SAFETY MANAGEMENT AUDIT, INCIDENT INVESTIGATION,
                    FACILITY CONDITION ASSESSMENT, ENERGY SAVING AUDIT, QUALITY
                    & QUANTITY INSPECTION, CONSULTANCY SERVICES, CODING &
                    MARKING MACHINERIES SUPPLIES, SAFETY EQUIPMENT'S SUPPLIES
                    AND ALL TYPES OF SECURITY SYSTEM
                  </strong>{" "}
                  supplies as well.
                </p>

                <p>
                  <strong>MPS Engineering and Consultancy</strong> is a Painting
                  company which includes{" "}
                  <strong>
                    sand blasting, spray painting, industrial painting,
                    decorative painting, scaffolding, flake lining/fiberglass
                    lining application, FRP and GRP application, intumescent and
                    intumescent epoxy and light weight cementitious fire
                    proofing as well as Flouropolymer Lining (PFA, PTFE)
                  </strong>{" "}
                  application for new constructions and maintenance of all types
                  of plants.
                </p>

                <p>
                  Building projects are generally viewed as long-term
                  investments that need to serve for many generations. We are
                  committed to these section of building systems and materials,
                  and appropriate detailing that stands the test of time,
                  providing long-term durability with safety and value.
                </p>

                <p>
                  We also provide support in industrial sector for building
                  safety. We have own setup to perform various NDT test beside
                  this As built Machine Layout drawings, As built Structural
                  Drawing, Factory Load Plan, Details Structural Assessment
                  (DEA), documents and specifications. Crack survey, load
                  calculation, Retrofit Construction etc. perform to ensure the
                  safety of life and property.
                </p>

                <p>
                  We are passionate about achieving best outcomes for clients
                  seeking to meet the challenges and opportunities of a rapidly
                  growing green building industry and bring together a number of
                  consultants with wide-ranging experience who understand the
                  needs of our clients and can offer solutions that add real
                  value to projects undertaken.
                </p>

                <h3>OUR SERVICES</h3>
                <h4>Our servicing the followings:</h4>
                <ul className="services-list">
                  <li>Consultancy</li>
                  <li>Auditing</li>
                  <li>Structural Design & Drawings (RCC & Steel)</li>
                  <li>Architectural Drawings</li>
                  <li>uPVC & cPVC pipes for Plumbing & Electrical Drawings</li>
                  <li>DA (Details Assessment) Drawings & Report</li>
                  <li>Retrofit design & construction</li>
                  <li>RCC Construction</li>
                  <li>Steel Construction</li>
                  <li>Environmental impact assessment & testing</li>
                  <li>
                    Fire Fighting (sprinkler, protection & detection) Design,
                    drawings as per BNBC guideline & UL Standard as required by
                    RSC, Elevate & Nirupon including material supply and
                    installation
                  </li>
                  <li>
                    Fireproofing (cementitious & Intumescent paint) material
                    supply & application
                  </li>
                  <li>
                    Blasting, Painting, Floor coating, Epoxy coating, FGD
                    Lining, Acid resistance lining.
                  </li>
                  <li>Road Marking, Traffic sign & Signal Marking.</li>
                  <li>Insulation</li>
                  <li>Refractory Lining</li>
                </ul>

                <div className="contact-info">
                  <h3>Contact Us</h3>
                  <p>
                    <strong>
                      House # 15, Road # 12, Nikunja-2, Khilkhet, Dhaka-1229
                    </strong>
                    <br />
                    <strong>Phone:</strong> 01836966511, 01715803716
                    <br />
                    <strong>Email:</strong> info@ikhgroups.com
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
