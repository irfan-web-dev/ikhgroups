"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function useMainScript() {
  const pathname = usePathname();

  useEffect(() => {
    console.log("Main script running on:", pathname);

    const timeout = setTimeout(() => {
      // Animate on scroll
      const animateElements = document.querySelectorAll(".animate-on-scroll");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1 }
      );
      animateElements.forEach((el) => observer.observe(el));

      // Search toggle
      const searchIcon = document.getElementById("search-icon");
      const searchContainer = document.querySelector(".search-button");
      if (searchIcon && searchContainer) {
        const handleClick = (e) => {
          e.stopPropagation();
          searchContainer.classList.toggle("active");
          const input = document.getElementById("search-input");
          if (searchContainer.classList.contains("active")) {
            input?.focus();
          }
        };
        const handleDocumentClick = (e) => {
          if (!searchContainer.contains(e.target)) {
            searchContainer.classList.remove("active");
          }
        };
        searchIcon.addEventListener("click", handleClick);
        document.addEventListener("click", handleDocumentClick);
      }

      // Back to top
      const backToTopBtn = document.getElementById("backToTop");
      const onScroll = () => {
        if (window.scrollY > 300) backToTopBtn?.classList.add("active");
        else backToTopBtn?.classList.remove("active");
      };
      window.addEventListener("scroll", onScroll);

      // Mobile menu toggle
      const menu = document.getElementById("mobileMenu");
      const menuBtn = document.querySelector(".mobile-menu-button");
      if (menu && menuBtn) {
        const toggleMenu = () => menu.classList.toggle("active");
        const closeMenu = (e) => {
          if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
            menu.classList.remove("active");
          }
        };
        menuBtn.addEventListener("click", toggleMenu);
        document.addEventListener("click", closeMenu);
        window.addEventListener("resize", () => {
          if (window.innerWidth > 767) {
            menu.classList.remove("active");
          }
        });
      }

      // Mobile dropdowns
      const mobileDropdowns = document.querySelectorAll(".mobile-dropdown > a");
      mobileDropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", function (e) {
          e.preventDefault();
          const parent = this.parentElement;
          parent.classList.toggle("active");
          mobileDropdowns.forEach((item) => {
            if (item.parentElement !== parent) {
              item.parentElement.classList.remove("active");
            }
          });
        });
      });

      // Background video movement
      const video = document.getElementById("background-video");
      const onMouseMove = (e) => {
        if (video) {
          const x = (e.clientX / window.innerWidth - 0.5) * 10;
          const y = (e.clientY / window.innerHeight - 0.5) * 10;
          video.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
        }
      };
      document.addEventListener("mousemove", onMouseMove);

      // Section reveals
      const sections = document.querySelectorAll(
        ".section, .projects-grid, .gallery-grid"
      );
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      sections.forEach((section) => revealObserver.observe(section));

      // Stat counter animation
      const statObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              document.querySelectorAll(".stat-value").forEach((el) => {
                if (el.classList.contains("counted")) return;
                el.classList.add("counted");

                const target = parseInt(
                  el.getAttribute("data-count") ||
                    el.textContent.replace(/\D/g, "")
                );
                let current = 0;
                const step = target / 200;
                const timer = setInterval(() => {
                  current += step;
                  if (current >= target) {
                    el.textContent =
                      target + (el.textContent.includes("+") ? "+" : "");
                    clearInterval(timer);
                  } else {
                    el.textContent =
                      Math.floor(current) +
                      (el.textContent.includes("+") ? "+" : "");
                  }
                }, 10);
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );

      const observeStatsGrid = () => {
        const statGrid = document.querySelector(".stats-grid");
        if (!statGrid) return;

        const rect = statGrid.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          statObserver.observe(statGrid);
          window.removeEventListener("scroll", observeStatsGrid);
        }
      };

      window.addEventListener("scroll", observeStatsGrid);
      observeStatsGrid();

      // Data-animation scroll
      const animatedElements = document.querySelectorAll("[data-animation]");
      const checkScroll = () => {
        const triggerBottom = window.innerHeight * 0.8;
        animatedElements.forEach((el) => {
          const elementTop = el.getBoundingClientRect().top;
          if (elementTop < triggerBottom) {
            const delay = parseInt(el.getAttribute("data-delay")) || 0;
            setTimeout(() => {
              el.classList.add(el.getAttribute("data-animation"));
            }, delay);
          }
        });
      };
      window.addEventListener("scroll", checkScroll);
      window.addEventListener("load", checkScroll);

      // Cleanup listeners on unmount
      return () => {
        window.removeEventListener("scroll", onScroll);
        document.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("scroll", checkScroll);
        window.removeEventListener("load", checkScroll);
        window.removeEventListener("scroll", observeStatsGrid);
      };
    }, 0); // <- Important delay to allow DOM to render

    return () => clearTimeout(timeout);
  }, [pathname]);
}
