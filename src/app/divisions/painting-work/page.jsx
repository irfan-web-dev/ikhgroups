"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function PaintingWork() {
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
          <source src="/videos/painting-work.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container hero-container">
          <div className="hero-text-content">
            <h1 className="animate__animated animate__zoomInDown">
              Painting Work
            </h1>
            <p className="animate__animated animate__fadeInUp">
              High-quality painting services for industrial facilities,
              commercial buildings and residential properties - protecting
              surfaces while enhancing aesthetics.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Painting Services</h2>
          </div>

          <div className="content-animation">
            <LottiePlayer src="https://lottie.host/ae2fd8b3-1ef2-4473-84bc-0d1603b7da98/WykWpgXzXg.lottie" />
          </div>

          <div className="content-box-template animate-on-scroll slide-up visible">
            <div className="service-section">
              <h3>Complete Painting Solutions</h3>
              <p>
                IKH Groups provides professional painting services for all types
                of surfaces across Saudi Arabia. Our certified painters
                specialize in both protective industrial coatings and decorative
                applications, using premium-quality products that withstand the
                region's climate.
              </p>
            </div>

            <div className="service-section">
              <h3>Industrial Painting</h3>
              <ul className="list-style-template">
                <li>Anti-corrosive coatings for metal surfaces</li>
                <li>Fire-resistant and intumescent paints</li>
                <li>Specialized tank linings (epoxy, polyurethane)</li>
                <li>High-temperature resistant coatings</li>
                <li>Pipe and structural steel painting</li>
                <li>Surface preparation (sandblasting, power washing)</li>
              </ul>
            </div>

            <div className="service-section">
              <h3>Commercial Painting</h3>
              <ul className="list-style-template">
                <li>Interior/exterior building painting</li>
                <li>Decorative and textured finishes</li>
                <li>Low-VOC and eco-friendly paints</li>
                <li>Wallpaper installation and removal</li>
                <li>Special effect finishes (metallic, faux)</li>
              </ul>
            </div>

            <div className="service-section">
              <h3>Residential Services</h3>
              <ul className="list-style-template">
                <li>Villa and apartment painting</li>
                <li>Community development projects</li>
                <li>Color consultation services</li>
                <li>Wood staining and varnishing</li>
                <li>Concrete floor coatings</li>
              </ul>
            </div>

            <div className="service-section">
              <h3>Quality Assurance</h3>
              <p>
                Our quality control includes surface profile testing, dry film
                thickness measurements, and adhesion testing. We employ advanced
                application methods like airless spraying and electrostatic
                painting, with all work backed by comprehensive warranties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
