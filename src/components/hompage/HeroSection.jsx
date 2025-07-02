"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Preload the video
    const video = videoRef.current;
    if (video) {
      video.load();

      const handleCanPlay = () => {
        setVideoLoaded(true);
        video.play().catch((e) => console.log("Autoplay prevented:", e));
      };

      video.addEventListener("canplay", handleCanPlay);

      return () => {
        video.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, []);

  return (
    <section className="hero-section visible" id="home">
      <div className="hero-overlay">
        <div className="hero-background">
          {!videoLoaded && (
            <img
              src="/images/commercial_project.jpg"
              alt="Hero Background"
              className="hero-placeholder"
              loading="eager"
            />
          )}
          <video
            ref={videoRef}
            id="background-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className={videoLoaded ? "video-loaded" : "video-loading"}
          >
            <source src="/videos/hero_section_video.MP4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">WELCOME TO,</h1>
          <h2 className="hero-subtitle">IKH GROUPS OF Co.</h2>
          <p className="hero-text">ASIAN STAR GENERAL CONTRACTING</p>
          <button
            onClick={() => {
              const section = document.getElementById("about");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="button button-primary"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
