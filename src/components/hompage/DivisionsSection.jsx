import Link from "next/link";

export default function DivisionsSection() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Divisions</h2>
          <p>Comprehensive Services Across Multiple Sectors</p>
        </div>
        <div className="services">
          <div
            className="service-card fade-in-up"
            data-animation="fade-in-up"
            data-delay="0"
          >
            <div className="service-icon">
              <i className="fas fa-industry" />
            </div>
            <h3>Construction</h3>
            <p>
              Specializing in industrial, commercial, and residential projects
              with a focus on quality and safety.
            </p>
            <Link href="/divisions/construction" className="service-link">
              Learn More <i className="fas fa-arrow-right" />
            </Link>
          </div>
          <div
            className="service-card fade-in-up"
            data-animation="fade-in-up"
            data-delay="200"
          >
            <div className="service-icon">
              <i className="fas fa-cogs" />
            </div>
            <h3>Support Services</h3>
            <p>
              Providing essential support services to ensure seamless project
              execution and maintenance.
            </p>
            <Link href="/divisions/support-services" className="service-link">
              Learn More <i className="fas fa-arrow-right" />
            </Link>
          </div>
          <div
            className="service-card fade-in-up"
            data-animation="fade-in-up"
            data-delay="400"
          >
            <div className="service-icon">
              <i className="fas fa-snowflake" />
            </div>
            <h3>HVAC Services</h3>
            <p>
              Delivering efficient heating, ventilation, and air conditioning
              solutions for diverse environments.
            </p>
            <Link href="/divisions/hvac-services" className="service-link">
              Learn More <i className="fas fa-arrow-right" />
            </Link>
          </div>
          <div
            className="service-card fade-in-up"
            data-animation="fade-in-up"
            data-delay="600"
          >
            <div className="service-icon">
              <i className="fas fa-desktop" />
            </div>
            <h3>IT Solutions</h3>
            <p>
              Implementing cutting-edge technology solutions to optimize
              operations and enhance digital infrastructure.
            </p>
            <Link href="/divisions/it-solutions" className="service-link">
              Learn More <i className="fas fa-arrow-right" />
            </Link>
          </div>
          <div
            className="service-card fade-in-up"
            data-animation="fade-in-up"
            data-delay="0"
          >
            <div className="service-icon">
              <i className="fas fa-building" />
            </div>
            <h3>Civil Work & RCC Buildings</h3>
            <p>
              Expert civil engineering services and reinforced concrete
              construction for durable structures.
            </p>
            <Link
              href="/divisions/civil-work-rcc-buildings"
              className="service-link"
            >
              Learn More <i className="fas fa-arrow-right" />
            </Link>
          </div>
          <div
            className="service-card fade-in-up"
            data-animation="fade-in-up"
            data-delay="200"
          >
            <div className="service-icon">
              <i className="fas fa-chess-rook" />
            </div>
            <h3>Steel Buildings</h3>
            <p>
              High-quality steel structure design and construction for
              industrial and commercial applications.
            </p>
            <Link href="/divisions/steel-buildings" className="service-link">
              Learn More <i className="fas fa-arrow-right" />
            </Link>
          </div>
          <div
            className="service-card fade-in-up"
            data-animation="fade-in-up"
            data-delay="400"
          >
            <div className="service-icon">
              <i className="fas fa-bolt" />
            </div>
            <h3>Electrical Work</h3>
            <p>
              Comprehensive electrical solutions including wiring,
              installations, and maintenance services.
            </p>
            <Link href="divisions/electric-work" className="service-link">
              Learn More <i className="fas fa-arrow-right" />
            </Link>
          </div>
          <div
            className="service-card fade-in-up"
            data-animation="fade-in-up"
            data-delay="600"
          >
            <div className="service-icon">
              <i className="fas fa-city" />
            </div>
            <h3>Buildings Construction</h3>
            <p>
              End-to-end building construction services from planning to
              execution.
            </p>
            <Link
              href="/divisions/buildings-construction"
              className="service-link"
            >
              Learn More <i className="fas fa-arrow-right" />
            </Link>
          </div>
          <div
            className="service-card fade-in-up"
            data-animation="fade-in-up"
            data-delay="0"
          >
            <div className="service-icon">
              <i className="fas fa-tower-broadcast" />
            </div>
            <h3>Overhead & Telephone Lines</h3>
            <p>
              Professional installation and maintenance of overhead power and
              telephone line systems.
            </p>
            <Link
              href="/divisions/overhead-telephones-lines"
              className="service-link"
            >
              Learn More <i className="fas fa-arrow-right" />
            </Link>
          </div>
          <div
            className="service-card fade-in-up"
            data-animation="fade-in-up"
            data-delay="200"
          >
            <div className="service-icon">
              <i className="fas fa-tools" />
            </div>
            <h3>Mechanical Work</h3>
            <p>
              Mechanical engineering services including equipment installation
              and maintenance.
            </p>
            <Link href="/divisions/mechanical-work" className="service-link">
              Learn More <i className="fas fa-arrow-right" />
            </Link>
          </div>
          <div
            className="service-card fade-in-up"
            data-animation="fade-in-up"
            data-delay="400"
          >
            <div className="service-icon">
              <i className="fas fa-oil-well" />
            </div>
            <h3>Piping Systems</h3>
            <p>
              Design, installation, and maintenance of efficient piping systems
              for various applications.
            </p>
            <Link href="/divisions/piping-system" className="service-link">
              Learn More <i className="fas fa-arrow-right" />
            </Link>
          </div>
          <div
            className="service-card fade-in-up"
            data-animation="fade-in-up"
            data-delay="600"
          >
            <div className="service-icon">
              <i className="fas fa-fire-extinguisher" />
            </div>
            <h3>Fire Protection Systems</h3>
            <p>
              Complete firefighting solutions including sprinkler systems,
              alarms, and fireproofing.
            </p>
            <Link
              href="/divisions/fire-protection-systems"
              className="service-link"
            >
              Learn More <i className="fas fa-arrow-right" />
            </Link>
          </div>
          <div
            className="service-card fade-in-up"
            data-animation="fade-in-up"
            data-delay="0"
          >
            <div className="service-icon">
              <i className="fas fa-paint-roller" />
            </div>
            <h3>Painting Work</h3>
            <p>
              Professional painting services for industrial, commercial, and
              residential properties.
            </p>
            <Link href="/divisions/painting-work" className="service-link">
              Learn More <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
