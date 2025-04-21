import React, { useRef, useEffect } from "react";

interface DynamicSecurityBgProps {
  theme?: "dark" | "light";
  isAuthenticated?: boolean;
  threatDetected?: boolean;
}

const DynamicSecurityBg: React.FC<DynamicSecurityBgProps> = ({
  theme = "dark",
  isAuthenticated = false,
  threatDetected = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resizeCanvas);

    // Animation state
    let offset = 0;
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    const drawCircuitOverlay = () => {
      ctx.strokeStyle = theme === "dark"
        ? "rgba(255, 255, 255, 0.03)"
        : "rgba(0, 0, 0, 0.03)";
      ctx.lineWidth = 1;
      for (let i = 0; i < width; i += 80) {
        for (let j = 0; j < height; j += 80) {
          ctx.beginPath();
          ctx.moveTo(i, j);
          ctx.lineTo(i + 40, j);
          ctx.lineTo(i + 40, j + 40);
          ctx.lineTo(i + 80, j + 40);
          ctx.stroke();
        }
      }
    };

    const draw = () => {
      // Background gradient
      const gradient = ctx.createLinearGradient(0, offset, width, height + offset);

      if (theme === "dark") {
        gradient.addColorStop(0, "#0f172a");
        gradient.addColorStop(0.5, "#1e293b");
        gradient.addColorStop(1, "#0e7490");
      } else {
        gradient.addColorStop(0, "#f8fafc");
        gradient.addColorStop(0.5, "#e2e8f0");
        gradient.addColorStop(1, "#cbd5e1");
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      offset = (offset + 0.3) % height;

      // Binary rain effect (only if authenticated)
      if (isAuthenticated) {
        ctx.fillStyle = theme === "dark"
          ? "rgba(0, 255, 180, 0.05)"
          : "rgba(0, 0, 0, 0.05)";
        ctx.font = `${fontSize}px monospace`;
        for (let i = 0; i < drops.length; i++) {
          const text = Math.random() > 0.5 ? "0" : "1";
          const x = i * fontSize;
          const y = drops[i] * fontSize;
          ctx.fillText(text, x, y);
          if (y > height && Math.random() > 0.975) drops[i] = 0;
          drops[i]++;
        }
      }

      // Threat pulse effect
      if (threatDetected) {
        ctx.fillStyle = "rgba(255, 0, 0, 0.1)";
        ctx.fillRect(0, 0, width, height);
      }

      // Circuit board overlay
      drawCircuitOverlay();

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [theme, isAuthenticated, threatDetected]);

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

export default DynamicSecurityBg;
