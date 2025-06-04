"use client";
import "./joint-ventures.css";

import LottiePlayer from "@/components/LottiePlayer";

export default function JointVentures() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              Joint Venture
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Strategic partnerships and business ventures under the IKHGROUPS
              umbrella
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/0820681e-61f8-42fa-8635-16d62f6ff1ce/OPZpbGyhKI.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Ventures</h2>
          </div>
          <div className="content-box-template animate-on-scroll slide-up visible">
            <div className="jv-content-wrapper">
              <div className="jv-image-container">
                <img
                  src="https://i0.wp.com/ikhgroups.com/wp-content/uploads/2020/04/IKH-Joint-1.jpg?fit=1000%2C1000&ssl=1"
                  alt="IKH Groups Joint Ventures"
                  className="jv-image"
                />
              </div>
              <div className="jv-text-content">
                <p>
                  IKHGROUPS has come a long way since its birth, achieving
                  gradual growth and success along the way. we feel privileged
                  and proud to serve the entire Middle East as a premier General
                  Construction Contractor & Manpower Supplier.
                </p>

                <p>
                  IKHGROUPS of Company not only providing the manpower supply,
                  under IKHGROUPS we have several ventures, following are the
                  main ventures under IKHGROUPS:
                </p>

                <div className="jv-list">
                  <div className="jv-item">
                    <h3>Khan Enterprises</h3>
                  </div>
                  <div className="jv-item">
                    <h3>ASIAN STAR FOR IKHGROUPS</h3>
                  </div>
                  <div className="jv-item">
                    <h3>IKH General Constructions Co</h3>
                  </div>
                  <div className="jv-item">
                    <h3>IKH Import And Export</h3>
                  </div>
                  <div className="jv-item">
                    <h3>IKH Cafe (Coming soon!)</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
