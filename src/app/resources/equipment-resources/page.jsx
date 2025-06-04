"use client";
import "./equipment-resources.css";

import LottiePlayer from "@/components/LottiePlayer";

export default function EquipmentResources() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              Equipment Resources
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Our state-of-the-art construction equipment and machinery ensure
              efficiency, precision, and timely completion of all projects, big
              or small.
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/ab82bba8-130b-4873-9624-52d26f2528de/7qnhvYd6KP.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Equipment Inventory</h2>
          </div>
          <p className="intro-text">
            We maintain a comprehensive fleet of modern construction equipment
            to meet all project requirements.
          </p>

          <div className="content-box-template animate-on-scroll slide-up">
            <div className="equipment-table-container">
              <table className="equipment-table">
                <thead>
                  <tr>
                    <th>Equipment Type</th>
                    <th>Manufacturer</th>
                    <th>Quantity</th>
                    <th>Capacity/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Crane</td>
                    <td>TADANO/XCMG/SANY</td>
                    <td>2</td>
                    <td>100 Ton</td>
                  </tr>
                  <tr>
                    <td>Crane</td>
                    <td>TADANO/XCMG/SANY</td>
                    <td>5</td>
                    <td>100 Ton</td>
                  </tr>
                  <tr>
                    <td>Crane</td>
                    <td>TADANO/XCMG/SANY</td>
                    <td>2</td>
                    <td>100 Ton</td>
                  </tr>
                  <tr>
                    <td>Boom Truck</td>
                    <td>GROVE/TADANO</td>
                    <td>3</td>
                    <td>GROVE/TADANO</td>
                  </tr>
                  <tr>
                    <td>Man Lift</td>
                    <td>JLG</td>
                    <td>2</td>
                    <td>20-40</td>
                  </tr>
                  <tr>
                    <td>Fork Lift</td>
                    <td>CLARCK/CAT</td>
                    <td>3</td>
                    <td>3-12 Ton</td>
                  </tr>
                  <tr>
                    <td>Trailer</td>
                    <td>MERCIDEES</td>
                    <td>4</td>
                    <td>MERCIDEES</td>
                  </tr>
                  <tr>
                    <td>Mini Truck</td>
                    <td>DEIHATSU/IZUZU</td>
                    <td>3</td>
                    <td>DEIHATSU/IZUZU</td>
                  </tr>
                  <tr>
                    <td>Welding Machine</td>
                    <td>MILLER/RHINO/LINCOLN</td>
                    <td>26</td>
                    <td>MILLER/RHINO/LINCOLN</td>
                  </tr>
                  <tr>
                    <td>Generator</td>
                    <td>WILKINSON/KIRLOSKAR</td>
                    <td>3</td>
                    <td>120-300</td>
                  </tr>
                  <tr>
                    <td>Grinding Machine</td>
                    <td>DEWALT/MAKITA</td>
                    <td>28</td>
                    <td>DEWALT/MAKITA</td>
                  </tr>
                  <tr>
                    <td>Drilling Machine</td>
                    <td>DEWALT/MAKITA</td>
                    <td>12</td>
                    <td>DEWALT/MAKITA</td>
                  </tr>
                  <tr>
                    <td>Threading Machine</td>
                    <td>Electric & Manual, w/Die Set</td>
                    <td>3</td>
                    <td>Electric & Manual, w/Die Set</td>
                  </tr>
                  <tr>
                    <td>Chain Block</td>
                    <td>Toyo</td>
                    <td>20</td>
                    <td>2-20 T</td>
                  </tr>
                  <tr>
                    <td>Bus</td>
                    <td>International/Leyland</td>
                    <td>3</td>
                    <td>50 Seater</td>
                  </tr>
                  <tr>
                    <td>Mini Bus</td>
                    <td>Toyota/Nissan</td>
                    <td>2</td>
                    <td>30 Seater</td>
                  </tr>
                  <tr>
                    <td>Mini Bus</td>
                    <td>Nissan/Toyota</td>
                    <td>2</td>
                    <td>20 seater</td>
                  </tr>
                  <tr>
                    <td>Pick Ups</td>
                    <td>Nissan/Toyota/Mitsubishi</td>
                    <td>5</td>
                    <td>Nissan/Toyota/Mitsubishi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
