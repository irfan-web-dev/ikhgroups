"use client";
export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay">
        <div className="hero-background">
          <video id="background-video" autoPlay loop muted playsInline>
            <source src="/images/hero_section_video.MP4" type="video/mp4" />
            <img src="/images/commercial_project.jpg" alt="Hero Background" />
          </video>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title animate__animated animate__fadeInDown">
            WELCOME TO IKH GROUPS
          </h1>
          <h2 className="hero-subtitle animate__animated ">
            Asian Star General Contracting
          </h2>
          <p className="hero-text animate__animated animate__fadeInUp">
            IKH General construction CO.
          </p>
          <a
            href="#about"
            className="button button-primary animate__animated animate__fadeInUp animate__delay-1s"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
