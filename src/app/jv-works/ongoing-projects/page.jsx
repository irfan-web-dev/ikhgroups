"use client";
import "./ongoing-projects.css";

import LottiePlayer from "@/components/LottiePlayer";

export default function OngoingProjects() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              Ongoing Projects
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Our current and upcoming projects showcasing our continuous growth
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/bd546e6b-6763-459e-a132-e3c68ad51b44/NsegJVScne.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Current Projects</h2>
          </div>
          <div className="projects-table-container animate-on-scroll slide-up">
            <table className="projects-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Project Name</th>
                  <th>Company Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>RAS TANURA</td>
                  <td>TECNICAS REUNIDAS ( TR )</td>
                  <td>
                    <span className="status-badge upcoming">UPCOMING</span>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>WAAD AL SHAMAL</td>
                  <td>SNC-LAVALIN</td>
                  <td>
                    <span className="status-badge upcoming">UPCOMING</span>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>PETRO RABIGH</td>
                  <td>ABENGOA SA</td>
                  <td>
                    <span className="status-badge upcoming">UPCOMING</span>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>SYABA 3 IWPP</td>
                  <td>HANCHANG</td>
                  <td>
                    <span className="status-badge upcoming">UPCOMING</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
