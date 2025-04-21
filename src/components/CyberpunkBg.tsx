
import { useRef, useEffect } from "react";

// Util for a random Katakana/Hiragana/ASCII character
function getMatrixChar() {
  const chars =
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return chars[Math.floor(Math.random() * chars.length)];
}

const MatrixBg = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Setting up matrix columns
    let fontSize = 20;
    let columns = Math.floor(width / fontSize);
    let drops = new Array(columns).fill(1);

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      columns = Math.floor(width / fontSize);
      drops = new Array(columns).fill(1);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function draw() {
      // Black transparent bg to gently fade trails
      ctx.fillStyle = "rgba(10, 24, 35, 0.68)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = fontSize + "px 'Fira Code', monospace";
      ctx.textAlign = "center";
      for (let i = 0; i < columns; i++) {
        // Cyan/teal glow
        ctx.shadowColor = "#33C3F0";
        ctx.shadowBlur = 14;
        ctx.fillStyle =
          Math.random() > 0.88
            ? "#0ff"
            : Math.random() > 0.85
            ? "#33C3F0"
            : "#1EAEDB";
        const text = getMatrixChar();
        ctx.fillText(
          text,
          i * fontSize + fontSize / 2,
          drops[i] * fontSize
        );

        if (
          drops[i] * fontSize > height &&
          Math.random() > 0.98
        ) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      ctx.shadowBlur = 0;
      requestAnimationFrame(draw);
    }

    draw();

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
        background: "linear-gradient(180deg, #18315A 60%, #0EAEDB 100%)"
      }}
    />
  );
};

export default MatrixBg;
