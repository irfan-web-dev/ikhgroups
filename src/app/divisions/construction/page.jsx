"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function Constructions() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              Constructions
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Our Construction Division delivers reliable, high-quality building
              solutions with a focus on safety and innovation.
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/ca345e6c-3fd8-41e7-af1d-de5b38aaa66e/WsV7fDisbO.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Construction Services</h2>
          </div>
          <div className="content-box-template animate-on-scroll slide-up visible">
            <h3>Core Areas of Activities</h3>
            <ul className="list-style-template">
              <li>Power Plants (Open/Combined Cycle)</li>
              <li>Chemical/Petrochemical</li>
              <li>Cement Plants</li>
              <li>Fertilizer</li>
              <li>Oil & Gas</li>
              <li>Desalination & Co-Generation</li>
              <li>Buildings</li>
              <li>Water Treatment/Sewerage Treatment</li>
              <li>Mechanical Works (Piping & Structural)</li>
            </ul>

            <h3>Plant Construction & Maintenance</h3>
            <ul className="list-style-template">
              <li>
                Offers grass root plant construction, plant revamp and
                modification, plant upgrade and expansion for Oil and Gas,
                Petrochemical type projects
              </li>
              <li>Plant Turnaround & Shutdown Maintenance</li>
              <li>Short & Long-Term Plant Maintenance for all disciplines</li>
              <li>
                Fabrication of Carbon steel, Stainless steel and Alloy steel
                materials
              </li>
              <li>Plasma Cutting, Plate Rolling, Tube Sheet drilling</li>
              <li>Refurbish & Repair of large storage tanks & tank farms</li>
              <li>Petrochemical Plant Erection</li>
              <li>Pipeline & Process Piping Erection</li>
              <li>Water filtration plants & Water Retaining Structures</li>
              <li>Plant Maintenance</li>
              <li>Fire Fighting & Fire Alarm Services</li>
              <li>Shop fabrication of Piping & Welding Works</li>
              <li>Testing, Inspection & Commissioning Services</li>
              <li>Specialized Industrial Scaffolding Works</li>
            </ul>

            <h3>Civil & Architectural Works</h3>
            <ul className="list-style-template">
              <li>Roads & Highways</li>
              <li>Parking and Parking structures</li>
              <li>
                Real Estate Development including residential buildings,
                commercial buildings, etc.
              </li>
              <li>Commercial & Residential Buildings Maintenance / Repairs</li>
              <li>Infrastructure & Utilities</li>
              <li>Landscaping Projects</li>
              <li>Renovation of all types of buildings</li>
              <li>Demolition of concrete and steel structures</li>
              <li>Installation of perimeter security fences</li>
              <li>Pre-engineered structures</li>
              <li>Structural steel works</li>
              <li>Pre-cast erection works</li>
              <li>Water and sewage Networks</li>
              <li>
                Fall Ceiling work (Acoustic, Gypsum Board and Metal Strip
                Ceiling)
              </li>
              <li>Gypsum partition</li>
              <li>
                Site Development work including back filling, compaction, site
                grading and lean concrete for blinding
              </li>
              <li>
                Construction of different types of site fence including
                installation of gate
              </li>
              <li>Construction of walkways & Curb stone</li>
            </ul>

            <h3>Electrical & Instrumentation Works</h3>
            <ul className="list-style-template">
              <li>
                Overhead and underground distribution systems up to 35 kV,
                including laying, termination and connection of cable and
                installation of poles, transformers, distribution cabinets,
                meters and substation rooms
              </li>
              <li>Installation of Indoor and Outdoor Transformers</li>
              <li>Installation of all electrical switch gears</li>
              <li>Installation of U.P.S. systems</li>
              <li>Equipped to handle Engineering of the Siemens Systems</li>
              <li>Commissioning of Interfacing with Auxiliary system</li>
              <li>Field transmitters, Control valves, Actuators</li>
              <li>
                Coupling Relay cabinets, Auxiliary relay panels, Standalone
                controllers
              </li>
              <li>Preparation of Industrial Drawings</li>
              <li>Instrument Cables connections</li>
              <li>Instrument Fittings</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
