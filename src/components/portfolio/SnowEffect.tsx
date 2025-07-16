import React, { useEffect, useRef } from "react";

const StarEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Array<{
      x: number;
      y: number;
      speed: number;
      opacity: number;
      pulse: number;
      pulseSpeed: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
    }> = [];
    const starImage = new Image();
    starImage.src = "/images/star.png"; // Replace with the path to your star image

    // Resize canvas
    const resizeCanvas = () => {
      if (canvas.width === window.innerWidth && canvas.height === window.innerHeight) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Throttle resize events
    let resizeTimeout: number | undefined;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(resizeCanvas, 200);
    };

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      const particleCount = Math.floor(window.innerWidth / 32);

      for (let i = 0; i < particleCount; i++) {
        const sizeCategory = Math.random();
        let size, opacity;

        if (sizeCategory < 0.7) {
          size = Math.random() * 10 + 5; // Tiny stars
          opacity = Math.random();
        } else if (sizeCategory < 0.9) {
          size = Math.random() * 15 + 10; // Medium stars
          opacity = Math.random();
        } else {
          size = Math.random() * 20 + 15; // Large stars
          opacity = Math.random();
        }

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: Math.random() * 0.5 + 0.1,
          opacity,
          pulse: Math.random() * Math.PI,
          pulseSpeed: Math.random() * 0.02,
          size,
          rotation: Math.random() * Math.PI, // Initial random rotation
          rotationSpeed: Math.random() * 0.002 - 0.001, // Random rotation speed (-0.01 to 0.01)
        });
      }
    };

    // Draw stars
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update pulse for twinkle effect
        particle.pulse += particle.pulseSpeed;
        const twinkle = Math.sin(particle.pulse) * 0.3 + 0.4;

        // Update rotation
        particle.rotation += particle.rotationSpeed;

        // Save canvas state
        ctx.save();

        // Move canvas to particle position, apply rotation, and draw the image
        ctx.translate(particle.x + particle.size / 2, particle.y + particle.size / 2);
        ctx.rotate(particle.rotation);
        ctx.globalAlpha = particle.opacity * twinkle;
        ctx.drawImage(
          starImage,
          -particle.size / 2,
          -particle.size / 2,
          particle.size,
          particle.size
        );

        // Restore canvas state
        ctx.restore();

        // Update position
        particle.x += particle.speed;
        if (particle.x > canvas.width) {
          particle.x = -particle.size;
          particle.y = Math.random() * canvas.height;
        }
      });

      ctx.globalAlpha = 1; // Reset globalAlpha
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    starImage.onload = () => {
      resizeCanvas();
      animate();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-49"
      style={{ opacity: 0.8 }}
    />
  );
};

export default StarEffect;
