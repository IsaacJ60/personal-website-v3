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
  const endColors = {
    bg: { r: 13, g: 16, b: 29 }, //rgb(5, 13, 26)
    primary: { r: 100, g: 181, b: 246 }, // #64B5F6
    secondary: { r: 144, g: 202, b: 249 }, // #90CAF9
    border: { r: 17, g: 34, b: 64 }, // #112240
  };

  const startColors = {
    bg: { r: 25, g: 10, b: 0 }, //rgb(27, 10, 0)
    primary: { r: 224, g: 130, b: 54 }, //rgb(196, 114, 47)
    secondary: { r: 253, g: 186, b: 116 }, //rgb(218, 155, 93)
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
      <SnowEffect/>
      <Navigation colors={currentColors} />
      <HeroSection colors={currentColors} />
      <FloatingActions colors={currentColors} />
      
      <div className="backdrop-blur-sm">

      <section
        id="about"
        className=" py-24 px-6 transition-colors duration-300 border-t"
        style={{
          borderColor: `rgb(${currentColors.border.r}, ${currentColors.border.g}, ${currentColors.border.b})`,
        }}
      >
        <div className="container mx-auto">
          <h2
            className="text-3xl font-bold mb-10 text-center transition-colors duration-300"
            style={{
              color: `rgb(${currentColors.secondary.r}, ${currentColors.secondary.g}, ${currentColors.secondary.b})`,
            }}
          >
            About Me
          </h2>
          <div className="text-lg/8 max-w-4xl mx-auto text-center tracking-wide">
            <p
              className=" mb-6 transition-colors duration-300"
              style={{
                color: `rgb(${currentColors.primary.r}, ${currentColors.primary.g}, ${currentColors.primary.b})`,
              }}
            >
              As a child, I loved math and programming.
              After all, in elementary school, math was my favorite subject, and by high school,
              that passion had naturally evolved into a love for computer science.
              So, of course, at the ripe age of 12, my dad—armed with his exciting math and engineering degrees—introduced me to&hellip; Python!
              Since that time, I’ve been coding projects, big and small.


            </p>
            <p
              className=" mb-6 transition-colors duration-300 "
              style={{
                color: `rgb(${currentColors.primary.r}, ${currentColors.primary.g}, ${currentColors.primary.b})`,
              }}
            >
              Another one of my most sincere and personal passions lies in storytelling. 

        
            </p>

            <p
              className="mb-6 transition-colors duration-300"
              style={{
                color: `rgb(${currentColors.primary.r}, ${currentColors.primary.g}, ${currentColors.primary.b})`,
              }}
            >

              For me, storytelling is an instrument that transcends the pragmatic, physical world that we live in. In particular, I've discovered
              three mediums I love using: videos, writing, and software. Whether I’m piecing together moments to be rendered
              in a .mov, typing characters into a .docx, or developing an API endpoint in a .py, I’m always trying to create something special.
            </p>

            <p
              className=" mb-10 transition-colors duration-300 "
              style={{
                color: `rgb(${currentColors.primary.r}, ${currentColors.primary.g}, ${currentColors.primary.b})`,
              }}
            >
              With videos, I can create narrative's that move and inspire. With writing, I can breathe life into unknown worlds.
              With programming, I can develop tools that change lives.
            </p>
          </div>
        </div>
      </section>

      <ProjectsGrid colors={currentColors} />
      <Timeline colors={currentColors} />

      </div>
    </div>
  );
};

export default Home;
