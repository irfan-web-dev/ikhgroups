"use client";

import LottiePlayer from "@/components/LottiePlayer";
import "./careers.css";

export default function Careers() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">Careers</h1>
            <p className="animate__animated animate__fadeInUp">
              Be a part of our growing journey
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/ecb1af8f-b3ac-4ee4-8f9e-c01d5c64cfdc/bJnHzIbgWC.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <section className="career-form">
            <h2>Join Our Team</h2>
            <form>
              <input type="text" placeholder="Your Name " required />
              <input type="email" placeholder="Email " required />
              <input type="text" placeholder="Subject " required />
              <textarea
                placeholder="Your Message "
                rows="5"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </section>
        </div>
      </section>
    </>
  );
}
