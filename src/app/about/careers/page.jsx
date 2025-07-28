"use client";

import LottiePlayer from "@/components/LottiePlayer";
import "./careers.css";

export default function Careers() {
  return (
    <>
      <section className="hero-section-template">
        <img
          className="hero-video-background"
          src="/images/careers.avif"
          alt=""
        />
        <div className="container hero-container">
          <div className="hero-text-content">
            <h1 className="animate__animated animate__zoomInDown">Careers</h1>
            <p className="animate__animated animate__fadeInUp">
              Be a part of our growing journey
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Join Our Team</h2>
          </div>

          <div className="content-animation">
            <LottiePlayer src="https://lottie.host/ecb1af8f-b3ac-4ee4-8f9e-c01d5c64cfdc/bJnHzIbgWC.lottie" />
          </div>

          <div className="content-box-template animate-on-scroll slide-up visible">
            <section className="career-form">
              <h2>Contact US</h2>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Subject" required />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
