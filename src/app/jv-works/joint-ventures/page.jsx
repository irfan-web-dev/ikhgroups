"use client";
import Link from "next/link";
import "./joint-ventures.css";
import LottiePlayer from "@/components/LottiePlayer";

export default function JointVentures() {
  return (
    <>
      <section className="hero-section-template">
        <img
          className="hero-video-background"
          src="/images/group-chairman.jpg"
          alt=""
        />
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              Joint Venture
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Strategic partnerships under the IKHGROUPS umbrella
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Ventures</h2>
          </div>

          <div className="content-animation">
            <LottiePlayer src="https://lottie.host/0820681e-61f8-42fa-8635-16d62f6ff1ce/OPZpbGyhKI.lottie" />
          </div>

          <div className="content-box-template animate-on-scroll slide-up visible">
            <div className="jv-content-wrapper">
              <div className="jv-image-container">
                <img
                  src="/images/joint-ventures.png"
                  alt="IKH Groups Joint Ventures"
                  className="jv-image"
                />
              </div>
              <div className="jv-text-content">
                <p>
                  IKHGROUPS has come a long way since its birth, achieving
                  gradual growth and success along the way.
                </p>

                <div className="jv-list">
                  <Link href="/joint-ventures/khan-enterprises" passHref>
                    <div className="jv-item">
                      <h3>Khan Enterprises</h3>
                    </div>
                  </Link>
                  <Link href="/joint-ventures/asian-star" passHref>
                    <div className="jv-item">
                      <h3>ASIAN STAR FOR IKHGROUPS</h3>
                    </div>
                  </Link>
                  <Link href="/joint-ventures/ikh-construction" passHref>
                    <div className="jv-item">
                      <h3>IKH General Constructions Co</h3>
                    </div>
                  </Link>
                  <Link href="/joint-ventures/ikh-import-export" passHref>
                    <div className="jv-item">
                      <h3>IKH Import And Export</h3>
                    </div>
                  </Link>
                  <Link href="/joint-ventures/ikh-cafe" passHref>
                    <div className="jv-item">
                      <h3>IKH Cafe (Coming soon!)</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
