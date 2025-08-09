"use client";
import "./contact.css";
import LottiePlayer from "@/components/LottiePlayer";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const timerRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitStatus(null);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          success: true,
          message: `Thank you, ${formData.name}! Your message has been sent. We'll contact you soon.`,
        });
        e.target.reset();
      } else {
        setSubmitStatus({
          success: false,
          message: "Failed to send message. Please try again later.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  // Automatically remove the submitStatus message after 4 seconds
  useEffect(() => {
    if (submitStatus) {
      // Clear any previous timer
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
    // Cleanup on unmount or when submitStatus changes
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [submitStatus]);

  useEffect(() => {
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
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-background"
        >
          <source src="/videos/contact-us.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__fadeInDown">
              Contact Us
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Get in touch with our team for inquiries, quotes, or any questions
              you may have about your construction projects.
            </p>
            <button
              onClick={() => {
                const contactForm = document.getElementById("contactForm");
                contactForm?.scrollIntoView({ behavior: "smooth" });
              }}
              className="button button-primary animate__animated animate__pulse animate__infinite"
            >
              Send Message <i className="fas fa-paper-plane" />
            </button>
          </div>
        </div>
      </section>

      <div className="content-animation">
        <LottiePlayer src="https://lottie.host/f3f39cf3-a512-49a9-9094-5e33f5e99654/8H97tqqugD.lottie" />
      </div>
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
                <p>sales@ikhgroups.com</p>
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
                <p>sales@ikhgroups.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2 className="contact-section-title">Send Us a Message</h2>
          {submitStatus && (
            <div
              className={`form-message ${
                submitStatus.success ? "success" : "error"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          <form
            className="contact-form"
            id="contactForm"
            onSubmit={handleSubmit}
          >
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

            <button
              type="submit"
              className="button button-primary"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}{" "}
              <i className="fas fa-paper-plane" />
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
