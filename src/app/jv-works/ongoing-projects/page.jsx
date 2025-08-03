"use client";
import "./ongoing-projects.css";
import LottiePlayer from "@/components/LottiePlayer";

export default function OngoingProjects() {
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
          <source src="/videos/ongoing-project.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              ASIAN STAR GENERAL CONTRACTING COMPANY
            </h1>
            <p className="animate__animated animate__fadeInUp">
              IKH GROUPS OF COMPANY PROJECT LIST
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Upcoming Projects</h2>
          </div>

          <div className="content-animation">
            <LottiePlayer src="https://lottie.host/bd546e6b-6763-459e-a132-e3c68ad51b44/NsegJVScne.lottie" />
          </div>

          <div className="projects-table-container animate-on-scroll slide-up visible">
            <table className="projects-table">
              <thead>
                <tr>
                  <th>SL No.</th>
                  <th>Description</th>
                  <th>Client</th>
                  <th>Amount USD</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Supply and installation of Sewage pipe line at Riyadh</td>
                  <td>National Water Company (NWC)</td>
                  <td>11,574,004.00</td>
                  <td>
                    <span className="status-badge upcoming">
                      Awarded waiting for Agreement
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    Civil, mechanical & electrical work at Yard line Project,
                    Madina
                  </td>
                  <td>TAL DESIGN & CONSTRUCTION COMPANY</td>
                  <td>9,741,142.40</td>
                  <td>
                    <span className="status-badge upcoming">
                      Awarded waiting for Agreement
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    Civil Work at Al Ghai, ARRAS, KHAFAH Project at Riyadh
                  </td>
                  <td>SEC/AI Sawadi</td>
                  <td>29,089,740.27</td>
                  <td>
                    <span className="status-badge negotiation">
                      Final Negotiation
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Construction of 1000 Villas at Riyadh</td>
                  <td>Diriyah</td>
                  <td>1,323,200,000.00</td>
                  <td>
                    <span className="status-badge approval">
                      Per villa cost USD 1,323,200.00 (Our documents waiting for
                      final approval)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Construction of 5000 villas at Jizan</td>
                  <td>Jizan Govt. Authority</td>
                  <td>1,664,666,666.67</td>
                  <td>
                    <span className="status-badge approval">
                      Per villa cost USD 332,933.00 (Our documents waiting for
                      preliminary approval)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Supply and installation of Sewage pipe line at Madina</td>
                  <td>Madina Authority</td>
                  <td>8,428,451.51</td>
                  <td>
                    <span className="status-badge waiting">
                      Waiting for Client feedback
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Construction of Movinpick Hotel, Jeddah</td>
                  <td>Movinpick</td>
                  <td>160,000,000.00</td>
                  <td>
                    <span className="status-badge tendering">Tendering</span>
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
