
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

    window.addEventListener("resize", resizeCanvas);

    // Parameters for grid
    const gridSpacing = 70;
    let offset = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Background black with subtle dark red gradient glow
      const gradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        height * 0.1,
        width * 0.5,
        height * 0.5,
        height * 0.9
      );
      gradient.addColorStop(0, "#220000");
      gradient.addColorStop(1, "#000000");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle glowing red grid lines (vertical and horizontal)
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(234, 56, 76, 0.4)";
      ctx.shadowColor = "rgba(234, 56, 76, 0.8)";
      ctx.shadowBlur = 10;

      ctx.beginPath();
      for (let x = (offset % gridSpacing) - gridSpacing; x < width; x += gridSpacing) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = (offset % gridSpacing) - gridSpacing; y < height; y += gridSpacing) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Add a subtle pulsating horizontal line across mid screen
      const pulseY = height / 2 + Math.sin(offset * 0.03) * 15;
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255, 80, 80, 0.8)";
      ctx.lineWidth = 2;
      ctx.shadowColor = "rgba(255, 80, 80, 1.0)";
      ctx.shadowBlur = 18;
      ctx.moveTo(0, pulseY);
      ctx.lineTo(width, pulseY);
      ctx.stroke();

      // Add a few random glitching effects
      if (Math.random() > 0.97) {
        const glitchX = Math.random() * width;
        const glitchY = Math.random() * height;
        const glitchW = Math.random() * 100 + 50;
        const glitchH = Math.random() * 5 + 2;
        
        ctx.fillStyle = "rgba(234, 56, 76, 0.7)";
        ctx.fillRect(glitchX, glitchY, glitchW, glitchH);
      }

      offset += 0.8;

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
      className="fixed top-0 left-0 w-full h-full"
      style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100vw", 
        height: "100vh", 
        zIndex: -1, 
        pointerEvents: "none",
        backgroundColor: "#000000" 
      }}
    />
  );
};

export default CyberpunkBg;
