
import { useRef, useEffect } from "react";

const CyberpunkBg = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resizeCanvas();

    // Listen for resize
    window.addEventListener("resize", resizeCanvas);

    // Animation parameters
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Black background with a slight noisy texture
      ctx.fillStyle = "#0b0514";
      ctx.fillRect(0, 0, width, height);

      // Draw vertical grid lines (red neon)
      const gridSpacing = 80;
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.save();
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#ea384c";
        ctx.strokeStyle = "#ea384c88";
        ctx.globalAlpha = 0.23;
        ctx.beginPath();
        ctx.moveTo(x + (Math.sin((t + x / 200) * 0.7) * 5), 0);
        ctx.lineTo(x + (Math.sin((t + x / 200) * 0.7) * 5), height);
        ctx.stroke();
        ctx.restore();
      }

      // Draw horizontal grid lines (magenta neon)
      ctx.globalAlpha = 0.16;
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.save();
        ctx.shadowBlur = 12;
        ctx.shadowColor = "#ff267d";
        ctx.strokeStyle = "#ff267d77";
        ctx.beginPath();
        ctx.moveTo(0, y + (Math.cos((t + y / 140) * 0.9) * 6));
        ctx.lineTo(width, y + (Math.cos((t + y / 140) * 0.9) * 6));
        ctx.stroke();
        ctx.restore();
      }

      // Neon cityscape silhouette (bottom)
      ctx.save();
      ctx.globalAlpha = 0.22;
      ctx.shadowBlur = 42;
      ctx.shadowColor = "#ea384c";
      ctx.fillStyle = "#ea384c";
      ctx.beginPath();
      const cityHeight = height * 0.1;
      for (let x = 0; x <= width; x += 50) {
        const buildingHeight =
          cityHeight +
          Math.sin(t / 9 + x / 60) * 18 +
          Math.random() * 10 +
          (Math.sin((t + x) / 40) * 12);
        ctx.lineTo(x, height - buildingHeight);
        ctx.lineTo(x + 35, height - cityHeight / 1.8);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Pulsing neon lines in back
      ctx.save();
      ctx.globalAlpha = 0.24 + 0.08 * Math.sin(t);
      ctx.beginPath();
      ctx.moveTo(0, height * 0.77 + Math.sin(t / 3) * 7);
      ctx.lineTo(width, height * 0.82 + Math.cos(t / 2) * 10);
      ctx.strokeStyle = "#fa2c5c";
      ctx.shadowBlur = 30;
      ctx.shadowColor = "#fa2c5c";
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();

      ctx.globalAlpha = 1;

      t += 0.024;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-30 pointer-events-none"
      style={{
        opacity: 1,
        background: "radial-gradient(ellipse at 60% 10%,rgba(255,49,49,0.15) 0%,rgba(0,0,0,0.91) 74%)",
        transition: "opacity 1s",
      }}
    />
  );
};

export default CyberpunkBg;
