
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleMouseEnterLink = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setLinkHovered(true);
      }
    };

    const handleMouseLeaveLink = () => setLinkHovered(false);
    const handleMouseLeave = () => setHidden(true);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseenter', updatePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseEnterLink);
    window.addEventListener('mouseout', handleMouseLeaveLink);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseenter', updatePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseEnterLink);
      window.removeEventListener('mouseout', handleMouseLeaveLink);
    };
  }, []);

  if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) {
    return null;
  }

  // Triangle pointer SVG for cyberpunk effect
  return (
    <>
      <svg
        className={`fixed pointer-events-none z-50 transition-transform duration-150 will-change-transform ${hidden ? 'opacity-0' : 'opacity-100'} ${clicked ? 'scale-90 rotate-[-10deg]' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-42%, -38%)',
          width: linkHovered ? 48 : 28,
          height: linkHovered ? 48 : 28,
          filter: 'drop-shadow(0 0 12px #ea384c) drop-shadow(0 0 30px #ea384c77)'
        }}
        width={linkHovered ? 48 : 28}
        height={linkHovered ? 48 : 28}
        viewBox="0 0 48 48"
      >
        <polygon
          points="6,4 44,24 8,44"
          fill={linkHovered ? "#ea384c" : "none"}
          stroke="#ea384c"
          strokeWidth="2"
          style={{
            filter: "drop-shadow(0 0 6px #ea384c55)",
            transition: "fill 0.18s, stroke 0.18s"
          }}
        />
        <circle
          cx="13"
          cy="24"
          r={linkHovered ? 4 : 2.9}
          fill="#fff"
          style={{
            filter: "drop-shadow(0 0 7px #ea384cbb)",
            transition: "r 0.18s"
          }}
          opacity={0.67}
        />
      </svg>
      {/* Animated Neon Glow Outer Pulse */}
      <div
        className={`fixed pointer-events-none z-40 transition-opacity duration-200`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          width: linkHovered ? 66 : 36,
          height: linkHovered ? 66 : 36,
          borderRadius: "100%",
          background: "radial-gradient(circle,rgba(234,56,76,0.31) 0%,rgba(234,56,76,0.06) 90%)",
          boxShadow: "0 0 32px 12px #ea384c33",
          opacity: hidden ? 0 : 0.7,
          transition: "width 0.22s, height 0.22s, opacity 0.2s"
        }}
      />
    </>
  );
};

export default CustomCursor;
