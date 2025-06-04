"use client";

import DivisionsSection from "@/components/hompage/DivisionsSection";
import LottiePlayer from "@/components/LottiePlayer";

export default function Divisions() {
  return (
    <>
      <section className="hero-section-template">
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

          <LottiePlayer src="https://lottie.host/2913ce57-168a-47cf-b8f9-a1943ff8c426/Dz4nYaDUAT.lottie" />
        </div>
      </section>

      <DivisionsSection />
    </>
  );
}
