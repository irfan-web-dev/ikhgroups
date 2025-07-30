"use client";
import { useState } from "react";

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openLightbox = (src) => {
    setCurrentImage(src);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const galleryItems = [
    {
      id: 1,
      src: "/images/industry_project.JPEG",
      alt: "Construction site with cranes",
      caption: "Modern Construction Site",
    },
    {
      id: 2,
      src: "/images/building-project.JPEG",
      alt: "Office building exterior",
      caption: "Commercial Office Complex",
    },
    {
      id: 3,
      src: "/images/commercial-project.JPEG",
      alt: "Residential apartments",
      caption: "Luxury Residential Project",
    },
    {
      id: 4,
      src: "/images/industry_project.JPEG",
      alt: "Interior design",
      caption: "Interior Finishing Work",
    },
    {
      id: 5,
      src: "/images/building-project.JPEG",
      alt: "HVAC installation",
      caption: "HVAC System Installation",
    },
    {
      id: 6,
      src: "/images/commercial-project.JPEG",
      alt: "Construction team",
      caption: "Our Expert Team at Work",
    },
  ];

  return (
    <section
      id="gallery"
      className="section gallery-section visible"
      style={{ position: "relative" }}
    >
      {/* Background Logo */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50%",
          height: "50%",
          zIndex: 0,
          opacity: 0.05,
          backgroundImage: "url(/images/bg-logo.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          pointerEvents: "none",
        }}
      ></div>

      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(185deg, rgba(249, 115, 22, 0.03) 0%, rgba(249, 115, 22, 0.01) 50%, rgba(255, 255, 255, 1) 100%)",
          zIndex: 0,
        }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-title">
          <h2>Project Gallery</h2>
          <p>Explore our portfolio of completed and ongoing projects</p>
        </div>

        <div className="gallery-grid visible">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={item.id}
              item={item}
              delay={index * 100}
              onClick={() => openLightbox(item.src)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox active" onClick={closeLightbox}>
          <button className="close-lightbox" onClick={closeLightbox}>
            &times;
          </button>
          <img
            src={currentImage}
            alt="Enlarged view"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

function GalleryItem({ item, delay, onClick }) {
  return (
    <div
      className="gallery-item fade-in"
      data-animation="fade-in"
      data-delay={delay}
      onClick={onClick}
    >
      <img src={item.src} alt={item.alt} className="gallery-image" />
      <div className="gallery-overlay">
        <p className="gallery-caption">{item.caption}</p>
      </div>
    </div>
  );
}
