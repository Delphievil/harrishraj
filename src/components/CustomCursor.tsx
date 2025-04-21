
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(false);

  useEffect(() => {
    const updatePos = (ev: MouseEvent) => {
      setPos({ x: ev.clientX, y: ev.clientY });
      setHidden(false);
    };
    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);

    const onLinkEnter = (ev: MouseEvent) => {
      const target = ev.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setHoveredLink(true);
      }
    };
    const onLinkLeave = () => setHoveredLink(false);
    const onMouseLeave = () => setHidden(true);

    window.addEventListener('mousemove', updatePos);
    window.addEventListener('mouseenter', updatePos);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mouseover', onLinkEnter);
    window.addEventListener('mouseout', onLinkLeave);

    return () => {
      window.removeEventListener('mousemove', updatePos);
      window.removeEventListener('mouseenter', updatePos);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mouseover', onLinkEnter);
      window.removeEventListener('mouseout', onLinkLeave);
    };
  }, []);

  if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) {
    return null;
  }

  const size = hoveredLink ? 40 : 24;
  const strokeColor = '#ea384c';
  const fillColor = hoveredLink ? '#ea384c' : 'transparent';
  const circleRadius = hoveredLink ? 6 : 3;
  const scale = clicked ? 0.85 : 1;

  return (
    <>
      <svg
        className={`fixed pointer-events-none z-50 transition-transform duration-150 will-change-transform ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${scale})`,
          width: size,
          height: size,
          filter: `drop-shadow(0 0 6px ${strokeColor}) drop-shadow(0 0 14px ${strokeColor}88)`,
        }}
        width={size}
        height={size}
        viewBox="0 0 48 48"
      >
        <circle
          cx="24"
          cy="24"
          r={circleRadius}
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth="2"
        />
        <path
          d="M 8 24 L 24 8 L 40 24 L 24 40 Z"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
          style={{ filter: `drop-shadow(0 0 4px ${strokeColor})` }}
        />
      </svg>
      <div
        className="fixed pointer-events-none z-40 transition-opacity duration-200"
        style={{
          left: pos.x,
          top: pos.y,
          transform: 'translate(-50%, -50%)',
          width: hoveredLink ? 50 : 30,
          height: hoveredLink ? 50 : 30,
          borderRadius: '50%',
          boxShadow: `0 0 31px 12px ${strokeColor}33`,
          background: `radial-gradient(circle, ${strokeColor}55 0%, transparent 90%)`,
          opacity: hidden ? 0 : 0.75,
          transition: 'width 0.2s, height 0.2s, opacity 0.2s',
        }}
      />
    </>
  );
};

export default CustomCursor;
