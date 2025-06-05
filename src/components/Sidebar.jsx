import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link href="/" className="sidebar-link">
              <i className="fas fa-home" />
              <span>Home</span>
            </Link>
          </li>

          {/* About Dropdown */}
          <li className="has-dropdown">
            <Link href="/about" className="sidebar-link">
              <i className="fas fa-info-circle" />
              <span>About</span>
              <i className="fas fa-chevron-right dropdown-arrow" />
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link href="/about/groups-chairman">Groups Chairman</Link>
              </li>
              <li>
                <Link href="/about/president">President</Link>
              </li>
              <li>
                <Link href="/about/general-manager">General manager</Link>
              </li>
              <li>
                <Link href="/about/our-staff">Our Staffs</Link>
              </li>
              <li>
                <Link href="/about/our-mission">Our Mission</Link>
              </li>
              <li>
                <Link href="/about/our-vision">Our Vision</Link>
              </li>
              <li>
                <Link href="/about/our-objectives">Our Objectives</Link>
              </li>
              <li>
                <Link href="/about/epilogue">Epilogue</Link>
              </li>
              <li>
                <Link href="/about/careers">Careers</Link>
              </li>
            </ul>
          </li>

          {/* JV & Works Dropdown */}
          <li className="has-dropdown">
            <Link href="/jv-works/joint-ventures" className="sidebar-link">
              <i className="fas fa-briefcase" />
              <span>JV & Works</span>
              <i className="fas fa-chevron-right dropdown-arrow" />
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link href="/jv-works/joint-ventures">Joint Ventures</Link>
              </li>
              <li>
                <Link href="/jv-works/works">Works</Link>
              </li>
              <li>
                <Link href="/jv-works/completed-projects">
                  Completed Projects
                </Link>
              </li>
              <li>
                <Link href="/jv-works/ongoing-projects">Ongoing Projects</Link>
              </li>
              <li>
                <Link href="/jv-works/clients">Clients</Link>
              </li>
            </ul>
          </li>

          {/* Divisions Dropdown */}
          <li className="has-dropdown">
            <Link href="/divisions" className="sidebar-link">
              <i className="fas fa-th-large" />
              <span>Divisions</span>
              <i className="fas fa-chevron-right dropdown-arrow" />
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link href="/divisions/construction">Construction</Link>
              </li>
              <li>
                <Link href="/divisions/support-services">Support Services</Link>
              </li>
              <li>
                <Link href="/divisions/hvac-services">HVAC Services</Link>
              </li>
              <li>
                <Link href="/divisions/it-solutions">IT Solutions</Link>
              </li>
              <li>
                <Link href="/divisions/civil-work-rcc-buildings">
                  Civil Work & RCC Buildings
                </Link>
              </li>
              <li>
                <Link href="/divisions/steel-buildings">Steel Buildings</Link>
              </li>
              <li>
                <Link href="divisions/electric-work">Electrical Work</Link>
              </li>
              <li>
                <Link href="/divisions/buildings-construction">
                  Buildings Construction
                </Link>
              </li>
              <li>
                <Link href="/divisions/overhead-telephones-lines">
                  Overhead & Telephone Lines
                </Link>
              </li>
              <li>
                <Link href="/divisions/mechanical-work">Mechanical Work</Link>
              </li>
              <li>
                <Link href="/divisions/piping-system">Piping Systems</Link>
              </li>
              <li>
                <Link href="/divisions/fire-protection-systems">
                  Fire Protection Systems
                </Link>
              </li>
              <li>
                <Link href="/divisions/painting-work">Painting Work</Link>
              </li>
            </ul>
          </li>

          {/* Policies Dropdown */}
          <li className="has-dropdown">
            <Link href="/policies/quality-management" className="sidebar-link">
              <i className="fas fa-file-alt" />
              <span>Policies</span>
              <i className="fas fa-chevron-right dropdown-arrow" />
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link href="/policies/quality-management">
                  Quality management
                </Link>
              </li>
              <li>
                <Link href="/policies/she-management">She management</Link>
              </li>
            </ul>
          </li>

          {/* Resources Dropdown */}
          <li className="has-dropdown">
            <Link href="/resources/manpower-resources" className="sidebar-link">
              <i className="fas fa-building" />
              <span>Resources</span>
              <i className="fas fa-chevron-right dropdown-arrow" />
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link href="/resources/manpower-resources">
                  Manpower Resources
                </Link>
              </li>
              <li>
                <Link href="/resources/equipment-resources">
                  Equipment Resources
                </Link>
              </li>
            </ul>
          </li>

          {/* Contact */}
          <li>
            <Link href="/contact" className="sidebar-link">
              <i className="fas fa-phone" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
