"use client";
import "./contact.css";
import LottiePlayer from "@/components/LottiePlayer";
import Link from "next/link";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        alert(
          `Thank you, ${name}! Your message has been sent. We'll contact you soon.`
        );

        this.reset();
      });
    }

    // Smooth scrolling
    const anchors = document.querySelectorAll('Link[href^="#"]');
    const handleClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.getAttribute("#"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    anchors.forEach((anchor) => anchor.addEventListener("click", handleClick));

    // Cleanup
    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleClick)
      );
    };
  }, []);

  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__fadeInDown">
              Contact Us
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Get in touch with our team for inquiries, quotes, or any questions
              you may have about your construction projects.
            </p>
            <Link
              href="#contactForm"
              className="button button-primary animate__animated animate__pulse animate__infinite"
            >
              Send Message <i className="fas fa-paper-plane" />
            </Link>
          </div>

          <LottiePlayer src="https://lottie.host/f3f39cf3-a512-49a9-9094-5e33f5e99654/8H97tqqugD.lottie" />
        </div>
      </section>

      <div className="contact-container">
        <div className="contact-info-section">
          <h2 className="contact-section-title">Our Contact Information</h2>
          <p className="contact-description">
            We're here to help and answer any questions you might have. We look
            forward to hearing from you.
          </p>

          <div className="contact-methods-grid">
            <div className="contact-method-card">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt" />
              </div>
              <div className="contact-method-content">
                <h3>Head Office</h3>
                <p>King Saud Street, Near PANDA & Al Khanani Building</p>
                <p>Ar. Rabi, Dammam - 32254</p>
                <p>Phone: +966 13 823 7014</p>
                <p>Kingdom of Saudi Arabia</p>
                <p>Email: info@ikhgroups.com</p>
                <p>sales@cacgroups.com</p>
              </div>
            </div>

            <div className="contact-method-card">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt" />
              </div>
              <div className="contact-method-content">
                <h3>Branch Office</h3>
                <p>Al-Jubail, Near Dawah Center</p>
                <p>Jubail - 31961</p>
                <p>Kingdom of Saudi Arabia</p>
                <p>Email: info@ikhgroups.com</p>
                <p>cac@cacgroups.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2 className="contact-section-title">Send Us a Message</h2>
          <form className="contact-form" id="contactForm">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your Email"
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Subject"
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Your Message"
              />
            </div>

            <button type="submit" className="button button-primary">
              Send Message <i className="fas fa-paper-plane" />
            </button>
          </form>
        </div>
      </div>

      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Our Location</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14023.786040804567!2d49.658691!3d27.010344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDAwJzM3LjIiTiA0OcKwMznigJMzMS4zIkU!5e0!3m2!1sen!2s!4v1716888888888!5m2!1sen!2s"
              style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
