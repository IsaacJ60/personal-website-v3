import React, { useEffect, useRef } from "react";

const StarEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    // Enable much stronger blur for smoother glow
    ctx.shadowBlur = 65;
    ctx.shadowColor = "rgba(255, 255, 255, 0.9)";

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Reset blur after resize
      ctx.shadowBlur = 65;
      ctx.shadowColor = "rgba(255, 255, 255, 0.9)";
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Star particles
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;
      pulse: number;
      pulseSpeed: number;
      glowSize: number;
    }> = [];

    // Create particles
    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 8); // Reduced frequency
      for (let i = 0; i < particleCount; i++) {
        // Create different size categories with less variation
        const sizeCategory = Math.random();
        let radius, opacity, glowSize;

        if (sizeCategory < 0.8) {
          // 80% tiny stars
          radius = Math.random() * 0.15 + 0.1; // 0.1-0.25
          opacity = Math.random() * 0.2 + 0.15;
          glowSize = 5;
        } else if (sizeCategory < 0.95) {
          // 15% medium stars
          radius = Math.random() * 0.15 + 0.2; // 0.2-0.35
          opacity = Math.random() * 0.25 + 0.2;
          glowSize = 7;
        } else {
          // 5% large stars
          radius = Math.random() * 0.15 + 0.3; // 0.3-0.45
          opacity = Math.random() * 0.3 + 0.25;
          glowSize = 9;
        }

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius,
          speed: Math.random() * 0.015 + 0.003,
          opacity,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.015 + 0.003,
          glowSize,
        });
      }
    };
    createParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update pulse
        particle.pulse += particle.pulseSpeed;
        const twinkle = Math.sin(particle.pulse) * 0.3 + 0.7;

        // Draw star with enhanced glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * particle.glowSize,
        );

        const opacity = particle.opacity * twinkle;
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
        gradient.addColorStop(0.1, `rgba(255, 255, 255, ${opacity * 0.95})`);
        gradient.addColorStop(0.3, `rgba(255, 255, 255, ${opacity * 0.6})`);
        gradient.addColorStop(0.6, `rgba(255, 255, 255, ${opacity * 0.3})`);
        gradient.addColorStop(0.8, `rgba(255, 255, 255, ${opacity * 0.1})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        // Draw outer glow
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(
          particle.x,
          particle.y,
          particle.radius * particle.glowSize,
          0,
          Math.PI * 2,
        );
        ctx.fill();

        // Draw star core with blur
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 1.2})`;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        // Update position - very slow vertical movement
        particle.y += particle.speed;

        // Reset position if out of bounds
        if (particle.y > canvas.height) {
          particle.y = -5;
          particle.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ opacity: 0.25 }}
    />
  );
};

export default StarEffect;
