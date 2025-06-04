"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function Works() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">Works</h1>
            <p className="animate__animated animate__fadeInUp">
              Comprehensive services and solutions through our strategic
              partnerships
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/a9e8893a-ee8a-4231-a6a2-30683b767424/aHbKYF0qY8.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Services</h2>
          </div>
          <div className="services-grid animate-on-scroll slide-up">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-industry"></i>
              </div>
              <h3>Industrial Construction</h3>
              <p>
                Undertake Industrial Plant construction of civil, steel /
                infrastructural Mechanical, Piping for Oil & Gas Industries and
                others. Undertake plant shutdown and plant modification /
                upgrading existing.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Professional Support Service</h3>
              <p>
                We serve each year using our placement services for multiple
                situations including emergencies, end-of-year inventories,
                Special projects, or simply as an ongoing strategy for flexible,
                cost-effective staffing.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-truck-monster"></i>
              </div>
              <h3>Heavy Equipment Rental</h3>
              <p>
                Focused on safety, availability, value and support, we work with
                our customers to help keep their business working safely and
                efficiently whilst driving down their costs.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-boxes"></i>
              </div>
              <h3>Trading & Industrial Supply</h3>
              <p>
                Gas turbine parts High Speed Motors and Pumps, seals and bushes,
                Bearing, generator sets and Engine, pipes and Valves, fittings
                and fasteners.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <h3>Project Support Services</h3>
              <p>
                Site development work including back filling, compaction, site
                grading and lean concrete for blinding.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3>Topographic & Land Surveying</h3>
              <p>
                CAC Goal is to be your company's number one choice for all your
                land surveying needs. We can provide you with land surveying
                services in timely and accurate manner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
