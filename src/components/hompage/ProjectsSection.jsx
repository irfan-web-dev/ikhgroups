import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Projects</h2>
          <p>Showcasing Our Commitment to Excellence</p>
        </div>

        <div className="projects-grid">
          <div
            className="project-card fade-in-up"
            data-animation="fade-in-up"
            data-delay="0"
          >
            <img
              src="/images/industry_project.webp"
              alt="Industrial Plant"
              className="project-image"
            />
            <div className="project-overlay">
              <div className="project-content">
                <h3 className="project-title">Industrial Plant</h3>
                <p className="project-location">
                  <i className="fas fa-map-marker-alt" /> Saudi Arabia
                </p>
              </div>
            </div>
          </div>
          <div
            className="project-card fade-in-up"
            data-animation="fade-in-up"
            data-delay="200"
          >
            <img
              src="/images/commercial_project.jpg"
              alt="Commercial Complex"
              className="project-image"
            />
            <div className="project-overlay">
              <div className="project-content">
                <h3 className="project-title">Commercial Complex</h3>
                <p className="project-location">
                  <i className="fas fa-map-marker-alt" /> Saudi Arabia
                </p>
              </div>
            </div>
          </div>
          <div
            className="project-card fade-in-up"
            data-animation="fade-in-up"
            data-delay="400"
          >
            <img
              src="/images/building_project.jpg"
              alt="Residential Building"
              className="project-image"
            />
            <div className="project-overlay">
              <div className="project-content">
                <h3 className="project-title">Residential Building</h3>
                <p className="project-location">
                  <i className="fas fa-map-marker-alt" /> Saudi Arabia
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="button-container">
          <Link href="#" className="button button-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
