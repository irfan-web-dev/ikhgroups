"use client";

export default function PlumbingServices() {
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
          <source src="/videos/plumbing-services.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container hero-container">
          <div className="hero-text-content">
            <h1 className="animate__animated animate__zoomInDown">
              Plumbing Services
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Comprehensive plumbing solutions for residential, commercial and
              industrial properties - ensuring efficient water systems with
              quality materials and expert installation.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Plumbing Services</h2>
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
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3>Complete Plumbing Solutions</h3>
              <p>
                IKH Groups provides professional plumbing services throughout
                Saudi Arabia, covering installation, maintenance, and repair of
                all plumbing systems. Our certified plumbers handle projects of
                any scale, from single residential units to large commercial
                complexes and industrial facilities. We use high-quality
                materials that meet Saudi standards to ensure long-lasting
                performance.
              </p>
              <p>
                Our services include complete water supply systems, drainage
                systems, sewage systems, and gas piping installations. We
                specialize in modern plumbing technologies including pressurized
                systems, water conservation solutions, and smart plumbing
                fixtures. Our team is trained in the latest plumbing techniques
                and adheres to strict safety protocols during all installations
                and repairs.
              </p>
              <p>
                We offer both new construction plumbing and renovation plumbing
                services, with expertise in high-rise buildings, villas,
                hospitals, hotels, and industrial plants. All our plumbing work
                complies with Saudi Plumbing Code (SPC) requirements and
                municipal regulations. We handle all necessary permits and
                inspections to ensure full compliance with local authorities.
              </p>
              <p>
                As a full-service plumbing contractor, we provide emergency
                plumbing services 24/7 for urgent repairs and leaks. Our
                preventive maintenance programs help clients avoid costly
                plumbing issues before they occur. We prioritize water
                efficiency in all our installations, recommending and
                implementing water-saving solutions that reduce consumption
                while maintaining optimal performance. Our client-focused
                approach ensures transparent pricing and reliable service you
                can count on.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
