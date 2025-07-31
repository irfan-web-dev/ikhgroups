"use client";
import Link from "next/link";
import "../joint-ventures.css";

export default function Crotec() {
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
              ANTI CORROSION TECHNOLOGY BD. LTD.
            </h1>
            <p className="animate__animated animate__fadeInUp">
              A member of MAX GROUP of Companies
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
                  We would like to take this opportunity to introduce the
                  company ANTI CORROSION TECHNOLOGY BD. LTD as one of the
                  emerging and most experienced and qualified organization in
                  the field of corrosion protection under one roof and ready to
                  serve marine, industrial, construction, mining, ship building,
                  refineries, desalination and power plants as well as
                  petrochemical industries, oil and gas sectors and nuclear
                  power plants in the whole of Bangladesh.
                </p>

                <h3>Organization</h3>
                <p>
                  CROTEC is well established and equipped with a team of special
                  qualified and experienced managers, engineers, supervisors,
                  quality controllers, quantity surveyors, safety
                  inspectors/officers and technicians including sand blasters,
                  spray painters, industrial painters, decorative painters,
                  scaffolders, flake lining/fiberglass lining applicators, FRP
                  and GRP applicators, intumescent paint and intumescent epoxy
                  and light weight cementitious fire proofing as well as flour
                  plastic/Teflon Lining (PFA, PTFE) lining applicators for new
                  constructions and maintenance of all types of plants.
                </p>

                <p>
                  CROTEC's strength is to define and understand the requirements
                  of the customers and deliver the maximum satisfaction in terms
                  of technical supports, quality finished products, delivery
                  schedule and overall satisfactory performance as per customer
                  expectations and requirements.
                </p>

                <h3>Our Services</h3>

                <div className="service-section">
                  <h4>Corrosion Protection by Coatings and Linings:</h4>
                  <p>CROTEC offers the following services:</p>
                  <ol className="services-list">
                    <li>
                      Manual Abrasive Blast Cleaning of Tanks, Vessels, Pipes,
                      Structural Steel, Chimneys, Chimney liners, Flare stacks,
                      Boilers, Columns, De-Aerators, Evaporators, Transmission
                      Towers and all Industrial Equipment using Garnet, Coal
                      slag, Copper slag, steel Grit and Aluminum Oxides and all
                      other abrasives as required.
                    </li>
                    <li>
                      Applications of Coatings using Airless Spray Pumps,
                      Conventional Spray Pumps, Heated Plural Component Spray
                      Pumps, Grover pumps, Hemo pumps, Hopper Guns and
                      Putzmister Concrete pumps.
                    </li>
                    <li>
                      All types of Coating Materials such as Zinc, Epoxies,
                      Enamels, Polyester, Vinyl Ester.
                    </li>
                    <li>
                      All types of Linings including Rubber Linings (CR, NR,
                      BIIR, etc.) Flake linings, GRE and FRP Materials
                      (Spray-Applied or Manual Lay-up System), Emulsions,
                      Textures and other Decorative Materials, Intumescent
                      Epoxies such as Chartek, Pit-Char, Thermo Lag and all
                      types of Light weight Cementitious Fire Proofing Materials
                      such as Monokotes and Fendolites.
                    </li>
                    <li>
                      All types of Heavy corrosion protection Linings such as
                      Teflon (PFA, PTFE) Lining, Brick and Tiles Lining (Carbon
                      Bricks as well as Ceramic and Red Shale Bricks) including
                      Laying and Jointing Mortars based on Furanic, Phenolic,
                      Vinyl Ester, Epoxy and Potassium Silicate Resins.
                    </li>
                    <li>
                      Road Markings with Thermoplastic Materials and Cold
                      applied Paints as well as Safety Signage for Roads, plants
                      and all Industrial and Commercial projects.
                    </li>
                    <li>
                      Sand blasting to expose the aggregates, high pressure
                      water jetting, concrete tank linings above ground and
                      underground pipeline coatings, floor coatings, removal of
                      sludge and cleaning of tanks and water proofing.
                    </li>
                    <li>
                      Supply of Manpower including Supervisors, QC., Sand
                      Blasters, Spray Painters, Painters, General Labors and
                      Sand Blasting and Coating Equipment.
                    </li>
                  </ol>
                </div>

                <div className="contact-info">
                  <h3>Contact Us</h3>
                  <p>
                    <strong>MD. JAMIL HOSSAIN</strong>
                    <br />
                    MANAGING DIRECTOR
                    <br />
                    <strong>Mobile:</strong> +88 01736 410919
                    <br />
                    <strong>Email:</strong> jamilhossain030@gmail.com
                    <br />
                    <strong>Email:</strong> kamrul.islam717@gmail.com
                  </p>
                  <p>
                    <strong>ANTI CORROSION TECHNOLOGY BD. LTD</strong>
                    <br />
                    Ga-32, Middle Badda, Badda, Dhaka – 1212, Bangladesh
                    <br />
                    <strong>CR. No.</strong> C-150847/2019
                    <br />
                    <strong>Email:</strong> kamrul.islam717@gmail.com,
                    jamilhossain030@gmail.com
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
