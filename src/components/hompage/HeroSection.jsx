"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.oncanplay = null;
    video.onerror = null;

    // Handler for when the video can play
    const handleCanPlay = () => {
      setVideoLoaded(true);
      if (video.paused) {
        video.play().catch((e) => {});
      }
    };

    // Handler for video error
    const handleError = () => {
      // If video fails, just show placeholder
      setVideoLoaded(false);
    };

    video.oncanplay = handleCanPlay;
    video.onerror = handleError;

    // Try to load the video
    video.load();

    // Clean up
    return () => {
      video.oncanplay = null;
      video.onerror = null;
    };
  }, []);

  return (
    <section className="hero-section visible" id="home">
      <div className="hero-overlay">
        <div className="hero-background">
          {!videoLoaded && (
            <img
              src="/images/commercial_project.JPEG"
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
            key="/videos/hero_secion_video.MP4"
          >
            <source src="/videos/hero_section_video.MP4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">WELCOME TO,</h1>
          <h2 className="hero-subtitle">IKH GROUPS OF Co.</h2>
          <p className="hero-text">ASIAN STAR GENERAL CONTRACTING CO.</p>
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
