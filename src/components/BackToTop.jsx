"use client";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className="back-to-top" id="backToTop" onClick={scrollToTop}>
      <i className="fas fa-arrow-up" />
    </button>
  );
}
