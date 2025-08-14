"use client";
import LottiePlayer from "@/components/LottiePlayer";
import "./careers.css";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Careers() {
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        "service_e37jexg", // EmailJS Service ID
        "template_1ecklkn", // EmailJS Careers Template ID
        e.target, // Form data
        "1RxYD40uyZIuOuxpb" // EmailJS Public Key
      )
      .then(() => {
        setSubmitStatus({
          success: true,
          message: `Thank you ${e.target.name.value}! We'll contact you soon.`,
        });
        e.target.reset();
      })
      .catch((error) => {
        setSubmitStatus({
          success: false,
          message: error.text || "Failed to send. Please try again.",
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <section className="hero-section-template">
        <img
          className="hero-video-background"
          src="/images/careers.avif"
          alt="Careers Banner"
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

          <div className="content-box-template">
            <section className="career-form">
              <h2>Apply Now</h2>
              {submitStatus && (
                <div
                  className={`form-message ${
                    submitStatus.success ? "success" : "error"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                />
                <input
                  name="title"
                  type="text"
                  placeholder="Position Interested In"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Tell us why you'd be a good fit..."
                  rows="5"
                  required
                ></textarea>
                <button
                  type="submit"
                  disabled={isSending}
                  className={isSending ? "loading" : ""}
                >
                  {isSending ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
