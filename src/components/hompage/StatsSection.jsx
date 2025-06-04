export default function StatsSection() {
  return (
    <section id="stats" className="section stats-section visible">
      <div className="container">
        <div className="section-title">
          <h2>Our Achievements</h2>
          <p>Numbers that speak for our commitment to excellence</p>
        </div>

        <div className="stats-grid visible">
          <div
            className="stat-card fade-in-up"
            data-animation="fade-in-up"
            data-delay="0"
          >
            <div className="stat-icon">
              <i className="fas fa-building" />
            </div>
            <div className="stat-value" data-count="150">
              0
            </div>
            <p className="stat-label">Projects Completed</p>
          </div>
          <div
            className="stat-card fade-in-up"
            data-animation="fade-in-up"
            data-delay="200"
          >
            <div className="stat-icon">
              <i className="fas fa-users" />
            </div>
            <div className="stat-value" data-count="500">
              0
            </div>
            <p className="stat-label">Satisfied Clients</p>
          </div>
          <div
            className="stat-card fade-in-up"
            data-animation="fade-in-up"
            data-delay="400"
          >
            <div className="stat-icon">
              <i className="fas fa-award" />
            </div>
            <div className="stat-value" data-count="25">
              0
            </div>
            <p className="stat-label">Years Experience</p>
          </div>
          <div
            className="stat-card fade-in-up"
            data-animation="fade-in-up"
            data-delay="600"
          >
            <div className="stat-icon">
              <i className="fas fa-clock" />
            </div>
            <div className="stat-value" data-count="99">
              0
            </div>
            <p className="stat-label">On-time Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
