import { useRef, useEffect } from "react";

const DynamicHackerBg = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const drawDynamicBackground = () => {
      // Set a gradient hacker-themed background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#0f2027");
      gradient.addColorStop(0.5, "#203a43");
      gradient.addColorStop(1, "#2c5364");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Add dynamic glowing particles
      const particles = Array.from({ length: 100 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
      }));

      const animateParticles = () => {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        particles.forEach((particle) => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI);
          ctx.fillStyle = "rgba(0, 255, 0, 0.8)";
          ctx.shadowColor = "rgba(0, 255, 0, 0.5)";
          ctx.shadowBlur = 10;
          ctx.fill();

          // Update particle position
          particle.x += particle.dx;
          particle.y += particle.dy;

          // Wrap particles around the screen
          if (particle.x < 0) particle.x = width;
          if (particle.x > width) particle.x = 0;
          if (particle.y < 0) particle.y = height;
          if (particle.y > height) particle.y = 0;
        });

        requestAnimationFrame(animateParticles);
      };

      animateParticles();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    drawDynamicBackground();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default DynamicHackerBg;
