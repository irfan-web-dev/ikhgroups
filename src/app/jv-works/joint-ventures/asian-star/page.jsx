"use client";
import Link from "next/link";
import "../joint-ventures.css";

export default function AsianStar() {
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
              ASIAN STAR GENERAL CONTRACTING
            </h1>
            <p className="animate__animated animate__fadeInUp">
              A member of IKHGROUPS of Companies
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
                  company ASIAN STAR GENERAL CONTRACTING OF IKH GROUPS OF
                  COMPANIES as one of the emerging and most experienced and
                  qualified organization in the field of:
                </p>

                <ul className="services-list">
                  <li>
                    Civil construction (Sub structure and super structure, steel
                    building, villa etc)
                  </li>
                  <li>Electrical Substation</li>
                  <li>Mechanical work</li>
                  <li>Plumbing work</li>
                  <li>Road Construction</li>
                  <li>
                    Corrosion protection (Blasting, Painting, coating, FGD
                    Lining, Rubber Lining)
                  </li>
                  <li>Road Marking</li>
                  <li>Firefighting</li>
                  <li>Fireproofing, detection and protection</li>
                </ul>

                <p>
                  We are ready to serve marine, industrial, construction,
                  mining, ship building, refineries, desalination and power
                  plants as well as petrochemical industries, oil and gas
                  sectors and nuclear power plants in the whole of KSA.
                </p>

                <h3>Organization</h3>
                <p>
                  ASIAN STAR is well established and equipped with a team of
                  special qualified and experienced managers, engineers (Civil,
                  Electrical & Mechanical), supervisors, quality controllers,
                  quantity surveyors, safety inspectors/officers and technicians
                  including Mason, electrician, sand blasters, spray painters,
                  industrial painters, decorative painters, scaffolders, flake
                  lining/fiberglass lining applicators, FRP and GRP applicators,
                  intumescent paint and intumescent epoxy and light weight
                  cementitious fire proofing as well as flour plastic/Teflon
                  Lining (PEA, PTFE) lining applicators for new constructions
                  and maintenance of all types of plants.
                </p>

                <p>
                  ASIAN STAR's strength is to define and understand the
                  requirements of the customers and deliver the maximum
                  satisfaction in terms of technical supports, quality finished
                  products, delivery schedule and overall satisfactory
                  performance as per customer expectations and requirements.
                </p>

                <h3>Our Services</h3>

                <div className="service-section">
                  <h4>1. Civil Construction of buildings</h4>
                  <p>
                    (concrete & steel building) including Mat foundation, raft
                    foundation, combined footing, isolated footing, sub-soil
                    investigation, excavation, backfilling, waterproofing, sub
                    structures, super structures.
                  </p>
                </div>

                <div className="service-section">
                  <h4>2. Electrical Substation works</h4>
                  <p>
                    At its core, a substation is a facility designed to switch,
                    convert, or regulate electrical voltage. It acts as a
                    crucial link between the high-voltage transmission lines
                    that carry electricity over long distances and the lower
                    voltage distribution lines that deliver power to homes,
                    businesses, and industries.
                  </p>
                  <p>
                    <strong>
                      Substations serve several essential functions within the
                      electrical grid, including voltage transformation, circuit
                      protection, and power factor correction.
                    </strong>{" "}
                    They enable the efficient transmission of electricity over
                    long distances by stepping up voltage levels for
                    transmission and stepping down voltage levels for
                    distribution to end-users. Additionally, substations play a
                    vital role in isolating faults and protecting the grid from
                    disruptions caused by electrical overloads or short
                    circuits.
                  </p>

                  <h5>Types of Substations:</h5>
                  <ul>
                    <li>
                      <strong>Transmission Substations:</strong> These
                      substations are situated at key points along high-voltage
                      transmission lines and are responsible for stepping up
                      voltage levels for long-distance transmission.
                      Transmission substations typically operate at voltages
                      ranging from 69 kV to 765 kV and play a critical role in
                      ensuring the efficient transfer of bulk power across
                      regions.
                    </li>
                    <li>
                      <strong>Distribution Substations:</strong> Positioned
                      closer to end-users, distribution substations step down
                      high-voltage electricity from transmission lines to lower
                      voltage levels suitable for local distribution. They serve
                      residential, commercial, and industrial areas, delivering
                      electricity at voltages ranging from 4 kV to 35 kV.
                    </li>
                    <li>
                      <strong>Switching Substations:</strong> Switching
                      substations act as intermediaries within the grid,
                      allowing for the rerouting of power flow and facilitating
                      maintenance operations. These substations incorporate
                      switching equipment such as circuit breakers and
                      disconnect switches to control the flow of electricity and
                      manage grid reliability.
                    </li>
                  </ul>
                </div>

                <div className="service-section">
                  <h4>3. Mechanical Installation</h4>
                  <p>
                    Mechanical Installation is the whole of the projects that
                    are designed to increase the living standards and comfort in
                    the construction works and constitute the interior of the
                    building. Mechanical engineering is the branch of
                    engineering.
                  </p>
                  <p>
                    Mechanical installation services can be listed as follows:
                  </p>
                  <ul className="mechanical-services">
                    <li>Solar Power Installation</li>
                    <li>Heating Systems</li>
                    <li>Laundry and Kitchen Facilities</li>
                    <li>Plumbing</li>
                    <li>Natural Gas Installation</li>
                    <li>Air Conditioning Installation</li>
                    <li>Ventilation Installation</li>
                    <li>Scientific examination</li>
                    <li>Fire Installation</li>
                    <li>Elevator Installation</li>
                    <li>Compressed Air Installation</li>
                    <li>Medical Gas Installation</li>
                    <li>Steam, Condends, Hot Water and Hot Oil Installation</li>
                    <li>Mechanical Automation</li>
                    <li>Pool Facilities</li>
                  </ul>
                </div>

                <div className="service-section">
                  <h4>4. Corrosion Protection by Coatings and Linings</h4>
                  <ul>
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
                      Textures and other Decorative Materials.
                    </li>
                    <li>
                      Fireproofing including Intumescent Epoxies such as
                      Chartek, Pit-Char, Thermo Lag and all types of Light
                      weight Cementitious Fire Proofing Materials such as
                      Monokotes and Fendolites.
                    </li>
                    <li>
                      All types of Heavy corrosion protection Linings such as
                      Teflon (PFA, PTFE) Lining, Brick and Tiles Lining (Carbon
                      Bricks as well as Ceramic and Red Shale Bricks) including
                      Laying and Jointing Mortars based on Furanic, Phenolic,
                      Vinyl Ester, Epoxy and Potassium Silicate Resins.
                    </li>
                    <li>
                      Sand blasting to expose the aggregates, high pressure
                      water jetting, concrete tank linings above ground and
                      underground pipeline coatings, floor coatings, removal of
                      sludge and cleaning of tanks and water proofing.
                    </li>
                  </ul>
                </div>

                <div className="service-section">
                  <h4>5. Road Construction</h4>
                  <p>
                    Including base coarse, sub-base coarse, asphalt layer, Road
                    Markings with Thermoplastic Materials and Cold applied
                    Paints as well as Safety Signage for Roads, plants and all
                    Industrial and Commercial projects.
                  </p>
                </div>

                <div className="service-section">
                  <h4>6. Manpower support services</h4>
                  <p>
                    Supply of Manpower including Engineers, Supervisors, QC.,
                    Technician, Electrician, Mason, Sand Blasters, Spray
                    Painters, Painters, General Labors and all kinds of
                    Equipment.
                  </p>
                </div>

                <p className="closing-statement">
                  As a technology-driven company, <strong>IKHGROUPS</strong> is
                  committed to provide innovative solutions built on focused
                  industry domains and emerging technology platforms. We at{" "}
                  <strong>ASIAN STAR FOR IKHGROUPS OF CO</strong> provide
                  services contributing to the optimal performance of our
                  customers, Integrating advanced Technology to their business
                  needs.
                </p>

                <div className="contact-info">
                  <h3>Contact Us</h3>
                  <p>
                    <strong>Imran Khan</strong>
                    <br />
                    Operation Manager
                    <br />
                    Asian Star for IKHGROUPS
                    <br />
                    <strong>Mobile:</strong> +96653-5322-617
                    <br />
                    <strong>Email:</strong> khan@ikhgroups.com
                  </p>
                  <p>
                    <strong>C.R.</strong> 2055026127
                    <br />
                    <strong>Tel:</strong> +966 13 3584565
                    <br />
                    <strong>Email:</strong> info@ikhgroups.com,
                    asgc@ikhgroups.com, asianstarikh@gmail.com
                    <br />
                    <strong>Website:</strong> www.ikhgroups.com
                    <br />
                    <strong>Location:</strong> Kingdom of Saudi Arabia
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
