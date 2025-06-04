"use client";
import "./manpower-resources.css";

import LottiePlayer from "@/components/LottiePlayer";

export default function ManpowerResources() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              Manpower Resources
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Our highly skilled and dedicated workforce forms the foundation of
              our construction excellence, delivering quality projects on time,
              every time.
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/13c8d285-fdc0-44f6-bf8f-057d7488aae8/GnBkHM3Kq3.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Workforce in Action</h2>
          </div>
          <p className="intro-text">
            Our dedicated team of professionals brings expertise and commitment
            to every project.
          </p>
          <div className="content-box-template animate-on-scroll slide-up visible">
            <div className="workforce-image-container">
              <img
                src="https://i0.wp.com/ikhgroups.com/wp-content/uploads/2020/04/Manpower-Resources.jpg?w=1431&ssl=1"
                alt="IKH Groups Workforce in Action"
                className="workforce-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
