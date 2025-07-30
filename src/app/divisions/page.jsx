"use client";

import DivisionsSection from "@/components/hompage/DivisionsSection";
import LottiePlayer from "@/components/LottiePlayer";

export default function Divisions() {
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
          <source src="/videos/mechanical-work.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">Divisions</h1>
            <p className="animate__animated animate__fadeInUp">
              IKH Groups offers specialized divisions—Construction, Support
              Services, HVAC, IT, and Operations—each dedicated to delivering
              excellence in its field. Explore our expertise tailored to meet
              diverse industry needs.
            </p>
          </div>
        </div>
      </section>

      <DivisionsSection />
    </>
  );
}
