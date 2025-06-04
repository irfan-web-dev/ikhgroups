"use client";
import "./about-our-company.css";

export default function AboutOurCompany() {
  return (
    <>
      <section className="hero-section-template">
        <div class="content-container-template">
          <div class="section-title-template">
            <h2>About Our Company</h2>
          </div>
          <div class="pdf-container">
            <iframe src="/public/documents/E-mail-Profile.pdf"></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
