import Link from "next/link";

export default function MobileMenu() {
  return (
    <div className="mobile-menu" id="mobileMenu">
      <ul>
        <li>
          <Link href="/" className="mobile-nav-link">
            <span>Home</span>
          </Link>
        </li>

        {/* About Dropdown */}
        <li className="mobile-dropdown">
          <Link href="/about" className="mobile-nav-link">
            <span>About</span>
            <i className="fas fa-chevron-down mobile-dropdown-arrow" />
          </Link>
          <ul className="mobile-dropdown-menu">
            <li>
              <Link href="/about/groups-chairman" className="mobile-nav-link">
                Groups Chairman
              </Link>
            </li>
            <li>
              <Link href="/about/president" className="mobile-nav-link">
                President
              </Link>
            </li>
            <li>
              <Link href="/about/general-manager" className="mobile-nav-link">
                General Manager
              </Link>
            </li>
            <li>
              <Link href="/about/our-staff" className="mobile-nav-link">
                Our Staffs
              </Link>
            </li>
            <li>
              <Link href="/about/our-mission" className="mobile-nav-link">
                Our Mission
              </Link>
            </li>
            <li>
              <Link href="/about/our-vision" className="mobile-nav-link">
                Our Vision
              </Link>
            </li>
            <li>
              <Link href="/about/our-objectives" className="mobile-nav-link">
                Our Objectives
              </Link>
            </li>
            <li>
              <Link href="/about/epilogue" className="mobile-nav-link">
                Epilogue
              </Link>
            </li>
            <li>
              <Link href="/about/careers" className="mobile-nav-link">
                Careers
              </Link>
            </li>
          </ul>
        </li>

        {/* JV & Works Dropdown */}
        <li className="mobile-dropdown">
          <Link href="#jv-works" className="mobile-nav-link">
            <span>JV & Works</span>
            <i className="fas fa-chevron-down mobile-dropdown-arrow" />
          </Link>
          <ul className="mobile-dropdown-menu">
            <li>
              <Link href="/jv-works/joint-ventures" className="mobile-nav-link">
                Joint Ventures
              </Link>
            </li>
            <li>
              <Link href="/jv-works/works" className="mobile-nav-link">
                Works
              </Link>
            </li>
            <li>
              <Link
                href="/jv-works/completed-projects"
                className="mobile-nav-link"
              >
                Completed Projects
              </Link>
            </li>
            <li>
              <Link
                href="/jv-works/ongoing-projects"
                className="mobile-nav-link"
              >
                Ongoing Projects
              </Link>
            </li>
            <li>
              <Link href="/jv-works/clients" className="mobile-nav-link">
                Clients
              </Link>
            </li>
          </ul>
        </li>

        {/* Divisions Dropdown */}
        <li className="mobile-dropdown">
          <Link href="/divisions" className="mobile-nav-link">
            <span>Divisions</span>
            <i className="fas fa-chevron-down mobile-dropdown-arrow" />
          </Link>
          <ul className="mobile-dropdown-menu">
            <li>
              <Link
                href="Divisions/Construction.html"
                className="mobile-nav-link"
              >
                Construction
              </Link>
            </li>
            <li>
              <Link
                href="Divisions/Support_Services.html"
                className="mobile-nav-link"
              >
                Support Services
              </Link>
            </li>
            <li>
              <Link
                href="Divisions/HVAC-Services.html"
                className="mobile-nav-link"
              >
                HVAC Services
              </Link>
            </li>
            <li>
              <Link
                href="Divisions/IT_Solutions.html"
                className="mobile-nav-link"
              >
                IT Solutions
              </Link>
            </li>
            <li>
              <Link
                href="Divisions/Civil_Work_RCC_Buildings.html"
                className="mobile-nav-link"
              >
                Civil Work & RCC Buildings
              </Link>
            </li>
            <li>
              <Link
                href="Divisions/Steel_Buildings.html"
                className="mobile-nav-link"
              >
                Steel Buildings
              </Link>
            </li>
            <li>
              <Link
                href="Divisions/Electric_Work.html"
                className="mobile-nav-link"
              >
                Electrical Work
              </Link>
            </li>
            <li>
              <Link
                href="Divisions/Buildings_Construction.html"
                className="mobile-nav-link"
              >
                Buildings Construction
              </Link>
            </li>
            <li>
              <Link
                href="Divisions/OverHead_Telephones_Lines.html"
                className="mobile-nav-link"
              >
                Overhead & Telephone Lines
              </Link>
            </li>
            <li>
              <Link
                href="Divisions/Mechanical_Work.html"
                className="mobile-nav-link"
              >
                Mechanical Work
              </Link>
            </li>
            <li>
              <Link
                href="Divisions/Piping_System.html"
                className="mobile-nav-link"
              >
                Piping Systems
              </Link>
            </li>
            <li>
              <Link
                href="Divisions/Fire_Protection_Systems.html"
                className="mobile-nav-link"
              >
                Fire Protection Systems
              </Link>
            </li>
            <li>
              <Link
                href="Divisions/Painting_Work.html"
                className="mobile-nav-link"
              >
                Painting Work
              </Link>
            </li>
          </ul>
        </li>

        {/* Policies Dropdown */}
        <li className="mobile-dropdown">
          <Link href="#policies" className="mobile-nav-link">
            <span>Policies</span>
            <i className="fas fa-chevron-down mobile-dropdown-arrow" />
          </Link>
          <ul className="mobile-dropdown-menu">
            <li>
              <Link
                href="/policies/quality-management"
                className="mobile-nav-link"
              >
                Quality Management
              </Link>
            </li>
            <li>
              <Link href="/policies/she-management" className="mobile-nav-link">
                She Management
              </Link>
            </li>
          </ul>
        </li>

        {/* Resources Dropdown */}
        <li className="mobile-dropdown">
          <Link href="#resources" className="mobile-nav-link">
            <span>Resources</span>
            <i className="fas fa-chevron-down mobile-dropdown-arrow" />
          </Link>
          <ul className="mobile-dropdown-menu">
            <li>
              <Link
                href="/resources/manpower-resources"
                className="mobile-nav-link"
              >
                Manpower Resources
              </Link>
            </li>
            <li>
              <Link
                href="/resources/equipment-resources"
                className="mobile-nav-link"
              >
                Equipment Resources
              </Link>
            </li>
          </ul>
        </li>

        {/* Contact Link */}
        <li>
          <Link href="/contact" className="mobile-nav-link">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
