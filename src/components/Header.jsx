"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      const pageText = document.body.innerText || "";
      sessionStorage.setItem("pageContent", pageText);
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

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
            <input
              type="text"
              id="search-input"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>

          <button
            className="mobile-menu-button"
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars" />
          </button>
        </div>
      </div>
    </header>
  );
}
