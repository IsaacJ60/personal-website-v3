import React, { useEffect, useState } from "react";
import Navigation from "./portfolio/Navigation";
import HeroSection from "./portfolio/HeroSection";
import ProjectsGrid from "./portfolio/ProjectsGrid";
import Timeline from "./portfolio/Timeline";
import FloatingActions from "./portfolio/FloatingActions";
import SnowEffect from "./portfolio/SnowEffect";

const interpolateColor = (start: any, end: any, progress: number) => {
  const r = Math.round(start.r + (end.r - start.r) * progress);
  const g = Math.round(start.g + (end.g - start.g) * progress);
  const b = Math.round(start.b + (end.b - start.b) * progress);
  return { r, g, b };
};

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Color schemes
  const startColors = {
    bg: { r: 10, g: 25, b: 47 }, // #0A192F
    primary: { r: 100, g: 181, b: 246 }, // #64B5F6
    secondary: { r: 144, g: 202, b: 249 }, // #90CAF9
    border: { r: 17, g: 34, b: 64 }, // #112240
  };

  const endColors = {
    bg: { r: 38, g: 13, b: 0 }, // #260D00
    primary: { r: 251, g: 146, b: 60 }, // #fb923c
    secondary: { r: 253, g: 186, b: 116 }, // #fdb874
    border: { r: 76, g: 29, b: 0 }, // #4C1D00
  };

  const currentColors = {
    bg: interpolateColor(startColors.bg, endColors.bg, scrollProgress),
    primary: interpolateColor(
      startColors.primary,
      endColors.primary,
      scrollProgress,
    ),
    secondary: interpolateColor(
      startColors.secondary,
      endColors.secondary,
      scrollProgress,
    ),
    border: interpolateColor(
      startColors.border,
      endColors.border,
      scrollProgress,
    ),
  };

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: `rgb(${currentColors.bg.r}, ${currentColors.bg.g}, ${currentColors.bg.b})`,
      }}
    >
      <SnowEffect />
      <Navigation colors={currentColors} />
      <HeroSection colors={currentColors} />

      <section
        id="about"
        className="py-24 px-6 transition-colors duration-300"
        style={{
          backgroundColor: `rgb(${currentColors.bg.r}, ${currentColors.bg.g}, ${currentColors.bg.b})`,
        }}
      >
        <div className="container mx-auto">
          <h2
            className="text-3xl font-bold mb-8 text-center transition-colors duration-300"
            style={{
              color: `rgb(${currentColors.secondary.r}, ${currentColors.secondary.g}, ${currentColors.secondary.b})`,
            }}
          >
            About Me
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p
              className="text-lg mb-6 transition-colors duration-300"
              style={{
                color: `rgb(${currentColors.primary.r}, ${currentColors.primary.g}, ${currentColors.primary.b})`,
              }}
            >
              I'm a passionate developer with expertise in building modern web
              applications. My focus is on creating intuitive and performant
              user experiences using cutting-edge technologies.
            </p>
            <p
              className="text-lg transition-colors duration-300"
              style={{
                color: `rgb(${currentColors.primary.r}, ${currentColors.primary.g}, ${currentColors.primary.b})`,
              }}
            >
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>
        </div>
      </section>

      <ProjectsGrid colors={currentColors} />
      <Timeline colors={currentColors} />
      <FloatingActions colors={currentColors} />
    </div>
  );
};

export default Home;
