"use client";
import "./about-our-company.css";

export default function AboutOurCompany() {
  return (
    <>
      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>About Our Company</h2>
          </div>
          <div className="pdf-container">
            <iframe src="/documents/E-mail-Profile.pdf" />
          </div>
        </div>
      </section>
    </>
  );
}
