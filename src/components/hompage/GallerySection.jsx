export default function GallerySection() {
  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="section-title">
          <h2>Project Gallery</h2>
          <p>Explore our portfolio of completed and ongoing projects</p>
        </div>

        <div className="gallery-grid">
          <div
            className="gallery-item fade-in"
            data-animation="fade-in"
            data-delay="0"
          >
            <img
              src="/images/industry_project.webp"
              alt="Construction site with cranes"
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <p className="gallery-caption">Modern Construction Site</p>
            </div>
          </div>
          <div
            className="gallery-item fade-in"
            data-animation="fade-in"
            data-delay="100"
          >
            <img
              src="/images/building_project.jpg"
              alt="Office building exterior"
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <p className="gallery-caption">Commercial Office Complex</p>
            </div>
          </div>
          <div
            className="gallery-item fade-in"
            data-animation="fade-in"
            data-delay="200"
          >
            <img
              src="/images/commercial_project.jpg"
              alt="Residential apartments"
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <p className="gallery-caption">Luxury Residential Project</p>
            </div>
          </div>
          <div
            className="gallery-item fade-in"
            data-animation="fade-in"
            data-delay="300"
          >
            <img
              src="/images/industry_project.webp"
              alt="Interior design"
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <p className="gallery-caption">Interior Finishing Work</p>
            </div>
          </div>
          <div
            className="gallery-item fade-in"
            data-animation="fade-in"
            data-delay="400"
          >
            <img
              src="/images/building_project.jpg"
              alt="HVAC installation"
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <p className="gallery-caption">HVAC System Installation</p>
            </div>
          </div>
          <div
            className="gallery-item fade-in"
            data-animation="fade-in"
            data-delay="500"
          >
            <img
              src="/images/commercial_project.jpg"
              alt="Construction team"
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <p className="gallery-caption">Our Expert Team at Work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
