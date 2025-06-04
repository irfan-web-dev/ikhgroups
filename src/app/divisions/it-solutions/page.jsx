"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function ITSolutions() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              IT Solutions
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Comprehensive technology solutions to streamline your business
              operations and enhance digital presence.
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/69267603-ec02-4510-926f-09817c6a6c25/FdxisJwRSI.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our IT Services</h2>
          </div>
          <div className="content-box-template animate-on-scroll slide-up visible">
            <h3>Comprehensive IT Solutions</h3>
            <p>
              The scope of the Division encompasses the planning, development,
              implementation, and application of existing and new technologies
              and systems that provide for the process of collecting, storing,
              and organizing information for its future retrieval, exchange,
              use, and delivery.
            </p>

            <h3>Enterprise Resource Planning (ERP)</h3>
            <p>
              ERP is business management software that allows an organization to
              use a system of integrated applications to manage the business.
              ERP software contains many modules that an enterprise would
              require, based on what best meets its specific needs and technical
              capabilities. Each ERP module includes:
            </p>

            <ul className="list-style-template">
              <li>Accounting system</li>
              <li>Material purchasing and Inventory control</li>
              <li>HR with payroll system</li>
              <li>Warehouse Management</li>
            </ul>

            <h3>Our IT Service Sections</h3>
            <p>
              IT has multiple sections, each concentrating on specific areas of
              interest. We provide various other services that suites your need
              at affordable prices, quality and satisfaction guaranteed.
            </p>

            <h3>Digital Services</h3>
            <ul className="list-style-template">
              <li>Domain Registration, Renewal, & Transfer</li>
              <li>Web Designing</li>
              <li>Search Engine Optimization and Social Marketing</li>
              <li>Email and SMS Campaigns</li>
              <li>Logo, Company Profile and other Graphics designing</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
