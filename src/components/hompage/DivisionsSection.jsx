"use client";
import Link from "next/link";
import LottiePlayer from "@/components/LottiePlayer";

export default function DivisionsSection() {
  return (
    <section
      className="section services-section visible"
      id="services"
      style={{ position: "relative" }}
    >
      {/* Background Logo */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50%",
          height: "50%",
          zIndex: 0,
          opacity: 0.05,
          backgroundImage: "url(/images/bg-logo.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          pointerEvents: "none",
        }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-title">
          <h2>Our Divisions</h2>
          <p style={{ marginTop: "20px" }}>
            Comprehensive Services Across Multiple Sectors
          </p>
        </div>

        <div className="content-animation">
          <LottiePlayer src="https://lottie.host/2913ce57-168a-47cf-b8f9-a1943ff8c426/Dz4nYaDUAT.lottie" />
        </div>

        <div className="services">
          {divisions.map((division, index) => (
            <ServiceCard
              key={division.id}
              division={division}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const divisions = [
  {
    id: 1,
    title: "Construction",
    icon: "fa-industry",
    description:
      "Specializing in industrial, commercial, and residential projects with a focus on quality and safety.",
    link: "/divisions/construction",
  },
  {
    id: 2,
    title: "Support Services",
    icon: "fa-cogs",
    description:
      "Providing essential support services to ensure seamless project execution and maintenance.",
    link: "/divisions/support-services",
  },
  {
    id: 3,
    title: "HVAC Services",
    icon: "fa-snowflake",
    description:
      "Delivering efficient heating, ventilation, and air conditioning solutions for diverse environments.",
    link: "/divisions/hvac-services",
  },
  {
    id: 4,
    title: "IT Solutions",
    icon: "fa-desktop",
    description:
      "Implementing cutting-edge technology solutions to optimize operations and enhance digital infrastructure.",
    link: "/divisions/it-solutions",
  },
  {
    id: 5,
    title: "Buildings Construction",
    icon: "fa-city",
    description:
      "End-to-end building construction services from planning to execution.",
    link: "/divisions/buildings-construction",
  },
  {
    id: 6,
    title: "RCC Buildings",
    icon: "fa-building",
    description:
      "Expert civil engineering services and reinforced concrete construction for durable structures.",
    link: "/divisions/rcc-buildings",
  },
  {
    id: 7,
    title: "Steel Buildings",
    icon: "fa-chess-rook",
    description:
      "High-quality steel structure design and construction for industrial and commercial applications.",
    link: "/divisions/steel-buildings",
  },
  {
    id: 8,
    title: "Electrical Work",
    icon: "fa-bolt",
    description:
      "Comprehensive electrical solutions including wiring, installations, and maintenance services.",
    link: "/divisions/electric-work",
  },
  {
    id: 9,
    title: "Overhead & Telephone Lines",
    icon: "fa-tower-broadcast",
    description:
      "Professional installation and maintenance of overhead power and telephone line systems.",
    link: "/divisions/overhead-telephones-lines",
  },
  {
    id: 10,
    title: "Mechanical Work",
    icon: "fa-tools",
    description:
      "Mechanical engineering services including equipment installation and maintenance.",
    link: "/divisions/mechanical-work",
  },
  {
    id: 11,
    title: "Piping Systems",
    icon: "fa-oil-well",
    description:
      "Design, installation, and maintenance of efficient piping systems for various applications.",
    link: "/divisions/piping-system",
  },
  {
    id: 12,
    title: "Fire Protection Systems",
    icon: "fa-fire-extinguisher",
    description:
      "Complete firefighting solutions including sprinkler systems, alarms, and fireproofing.",
    link: "/divisions/fire-protection-systems",
  },
  {
    id: 13,
    title: "Painting Work",
    icon: "fa-paint-roller",
    description:
      "Professional painting services for industrial, commercial, and residential properties.",
    link: "/divisions/painting-work",
  },
  {
    id: 14,
    title: "Plumbing Services",
    icon: "fa-faucet", // Changed to a plumbing-related icon
    description:
      "Expert plumbing services including installation, repair, and maintenance for all types of piping and fixtures.",
    link: "/divisions/plumbing-services",
  },
];

function ServiceCard({ division, delay }) {
  return (
    <div
      className="service-card fade-in-up"
      data-animation="fade-in-up"
      data-delay={delay}
    >
      <div className="service-icon">
        <i className={`fas ${division.icon}`} />
      </div>
      <h3>{division.title}</h3>
      <p>{division.description}</p>
      <Link href={division.link} className="service-link">
        Learn More <i className="fas fa-arrow-right" />
      </Link>
    </div>
  );
}
