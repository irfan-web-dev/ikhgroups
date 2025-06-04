"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function PaintingWork() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              Painting Work
            </h1>
            <p className="animate__animated animate__fadeInUp">
              High-quality painting services for industrial facilities,
              commercial buildings and residential properties - protecting
              surfaces while enhancing aesthetics.
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/ae2fd8b3-1ef2-4473-84bc-0d1603b7da98/WykWpgXzXg.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Painting Services</h2>
          </div>
          <div className="content-box-template animate-on-scroll slide-up">
            <h3>Complete Painting Solutions</h3>
            <p>
              IKH Groups provides professional painting services for all types
              of surfaces across Saudi Arabia. Our certified painters specialize
              in both protective industrial coatings and decorative
              commercial/residential painting. We use premium-quality paints and
              application techniques to ensure long-lasting results that
              withstand the region's harsh climate conditions.
            </p>
            <p>
              Our industrial painting services include surface preparation,
              anti-corrosive coatings, fire-resistant paints, and specialized
              tank linings for oil & gas facilities. For commercial projects, we
              offer interior/exterior painting, decorative finishes, and texture
              coatings using environmentally friendly products. Our residential
              services cover everything from villa painting to complete
              community developments with color consultation services.
            </p>
            <p>
              We follow strict quality control procedures including surface
              profile testing, dry film thickness measurements, and adhesion
              testing. Our team is trained in advanced application methods like
              airless spraying, electrostatic painting, and thermal spray
              coatings. All our painting systems are customized based on
              substrate material, environmental exposure, and client
              requirements.
            </p>
            <p>
              With extensive experience in Saudi Arabia's construction sector,
              we've completed painting projects for refineries, high-rise
              towers, hospitals, and residential compounds. Our maintenance
              painting programs help extend asset life while maintaining
              aesthetic appeal. From surface preparation to final inspection, we
              deliver painting solutions that combine technical performance with
              visual excellence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
