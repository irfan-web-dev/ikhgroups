"use client";

import AboutSection from "@/components/hompage/AboutSection";
import ClientsSection from "@/components/hompage/ClientsSection";
import DivisionsSection from "@/components/hompage/DivisionsSection";
import GallerySection from "@/components/hompage/GallerySection";
import HeroSection from "@/components/hompage/HeroSection";
import ProjectsSection from "@/components/hompage/ProjectsSection";
import QuickAccessSection from "@/components/hompage/QuickAccessSection";
import StatsSection from "@/components/hompage/StatsSection";

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <DivisionsSection />
      <StatsSection />
      <ProjectsSection />
      <GallerySection />
      <ClientsSection />
      <QuickAccessSection />
    </>
  );
}
