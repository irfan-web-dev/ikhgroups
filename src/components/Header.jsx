"use client";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <a href="/" className="site-logo">
            <img
              src="/images/logo.webp"
              alt="IKH Groups of Companies"
              className="logo-image"
            />
          </a>

          <div className="search-button">
            <i className="fas fa-search" id="search-icon" />
            <input type="text" id="search-input" placeholder="Search..." />
          </div>

          <button
            className="mobile-menu-button"
            aria-label="Toggle mobile menu"
            onClick={() => {
              if (typeof toggleMobileMenu === "function") {
                toggleMobileMenu();
              }
            }}
          >
            <i className="fas fa-bars" />
          </button>
        </div>
      </div>
    </header>
  );
}
