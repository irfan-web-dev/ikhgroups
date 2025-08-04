"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoSrc, setVideoSrc] = useState("/videos/hero_section_video.MP4");
  const [videoError, setVideoError] = useState(false);

  const fallbackVideo = "/videos/jv-works.mp4";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let fallbackTimeout;

    // Handler for when the video can play
    const handleCanPlay = () => {
      setVideoLoaded(true);
      clearTimeout(fallbackTimeout);
      video.play().catch((e) => console.log("Autoplay prevented:", e));
    };

    // Handler for video error
    const handleError = () => {
      if (!videoError) {
        setVideoError(true);
        setVideoSrc(fallbackVideo);
        setVideoLoaded(false);
      }
    };

    fallbackTimeout = setTimeout(() => {
      if (!videoLoaded && !videoError) {
        setVideoError(true);
        setVideoSrc(fallbackVideo);
        setVideoLoaded(false);
      }
    }, 200);

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    video.load();

    return () => {
      clearTimeout(fallbackTimeout);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
    // eslint-disable-next-line
  }, [videoSrc, videoError]);

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
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
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
