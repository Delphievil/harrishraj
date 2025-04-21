import React, { useEffect, useState } from "react";
import "./CyberpunkBg.css";

const CyberpunkBg: React.FC = () => {
  const [matrix, setMatrix] = useState<string[]>([]);

  useEffect(() => {
    const createMatrixEffect = () => {
      const columns = Math.floor(window.innerWidth / 20);
      const rows = Math.floor(window.innerHeight / 20);
      const newMatrix: string[] = Array(columns).fill("");

      setMatrix(newMatrix);

      const intervalId = setInterval(() => {
        setMatrix((prevMatrix) =>
          prevMatrix.map((column, index) => {
            const newColumn =
              column +
              String.fromCharCode(
                0x30a0 + Math.floor(Math.random() * 96) // Random Katakana characters
              );
            return newColumn.slice(-rows); // Trim to fit screen
          })
        );
      }, 100);

      return () => clearInterval(intervalId);
    };

    createMatrixEffect();
    window.addEventListener("resize", createMatrixEffect);

    return () => window.removeEventListener("resize", createMatrixEffect);
  }, []);

  return (
    <div className="cyberpunk-bg">
      {matrix.map((column, index) => (
        <div key={index} className="matrix-column">
          {column.split("").map((char, charIndex) => (
            <span key={charIndex} className="matrix-char">
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CyberpunkBg;
