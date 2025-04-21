import { useRef, useEffect } from "react";
import _ from "lodash";

const DynamicHackerBg = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Resize canvas with debounce to avoid excessive redrawing
    const resizeCanvas = _.debounce(() => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }, 200);

    // Create particles for the animation
    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 1.5,
      dy: (Math.random() - 0.5) * 1.5,
    }));

    const drawDynamicBackground = () => {
      // Set a gradient hacker-themed background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#0f2027");
      gradient.addColorStop(0.5, "#203a43");
      gradient.addColorStop(1, "#2c5364");

      const animateParticles = () => {
        // Clear and fill the canvas with the gradient
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        // Animate each particle
        particles.forEach((particle) => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI);
          ctx.fillStyle = "rgba(0, 255, 0, 0.8)";
          ctx.shadowColor = "rgba(0, 255, 0, 0.5)";
          ctx.shadowBlur = 5;
          ctx.fill();

          // Update position and wrap around edges
          particle.x = (particle.x + particle.dx + width) % width;
          particle.y = (particle.y + particle.dy + height) % height;
        });

        // Request next animation frame
        requestAnimationFrame(animateParticles);
      };

      animateParticles();
    };

    // Initialize canvas size and animation
    resizeCanvas();
    drawDynamicBackground();
    window.addEventListener("resize", resizeCanvas);

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
