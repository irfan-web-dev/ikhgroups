"use client";
import Link from "next/link";
import "./joint-ventures.css";
import LottiePlayer from "@/components/LottiePlayer";

export default function JointVentures() {
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
              className="jv-image-container"
              style={{
                position: "relative",
                zIndex: 1,
                marginBottom: 32,
                textAlign: "center",
              }}
            >
              <img
                src="/images/joint-ventures.png"
                alt="IKH Groups Joint Ventures"
                className="jv-image"
                style={{ display: "inline-block" }}
              />
            </div>
            <div
              className="jv-content-wrapper"
              style={{
                position: "relative",
                zIndex: 1,
                flexDirection: "column",
                display: "flex",
              }}
            >
              <div className="jv-text-content">
                <p>
                  IKHGROUPS has come a long way since its birth, achieving
                  gradual growth and success along the way.
                </p>

                <div className="jv-list">
                  <Link href="/joint-ventures/ikh-construction" passHref>
                    <div className="jv-item">
                      <h3>IKH GENERAL CONSTRUCTIONS CO</h3>
                    </div>
                  </Link>
                  <Link href="joint-ventures/asian-star" passHref>
                    <div className="jv-item">
                      <h3>ASIAN STAR FOR IKHGROUPS</h3>
                    </div>
                  </Link>
                  <Link href="joint-ventures/crotec" passHref>
                    <div className="jv-item">
                      <h3>CROTEC FOR IKHGROUPS</h3>
                    </div>
                  </Link>
                  <Link href="joint-ventures/mps" passHref>
                    <div className="jv-item">
                      <h3>MPS FOR IKHGROUPS</h3>
                    </div>
                  </Link>
                  <Link href="/joint-ventures/ikh-import-export" passHref>
                    <div className="jv-item">
                      <h3>IKH IMPORT AND EXPORT</h3>
                    </div>
                  </Link>
                  <Link
                    href="/jv-works/joint-ventures/khan-enterprises"
                    passHref
                  >
                    <div className="jv-item">
                      <h3>KHAN ENTERPRISES</h3>
                    </div>
                  </Link>
                  <Link href="/joint-ventures/ikh-cafe" passHref>
                    <div className="jv-item">
                      <h3>IKH CAFE (Coming soon!)</h3>
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
