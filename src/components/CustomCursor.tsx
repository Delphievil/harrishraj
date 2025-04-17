
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
      if ((e.target as HTMLElement).tagName === 'A' || 
          (e.target as HTMLElement).tagName === 'BUTTON' ||
          (e.target as HTMLElement).closest('a') ||
          (e.target as HTMLElement).closest('button')) {
        setLinkHovered(true);
      } else {
        setLinkHovered(false);
      }
    };

    const handleMouseLeave = () => setHidden(true);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseenter', updatePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseEnterLink);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseenter', updatePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseEnterLink);
    };
  }, []);

  // Don't render custom cursor on touch devices
  if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) {
    return null;
  }

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${
          clicked ? 'scale-90' : 'scale-100'
        } ${
          linkHovered ? 'w-8 h-8' : 'w-6 h-6'
        } transition-[transform,opacity,width,height] duration-200`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          backgroundColor: linkHovered ? '#64FFDA' : '#0ea5e9',
        }}
      />
      <div
        className={`fixed pointer-events-none z-50 rounded-full border border-cyber-accent ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${
          linkHovered ? 'w-16 h-16' : 'w-10 h-10'
        } transition-[width,height,opacity] duration-300 ease-out`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CustomCursor;
