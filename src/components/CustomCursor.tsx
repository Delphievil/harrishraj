
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
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button')) {
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

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 mix-blend-difference ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${
          clicked ? 'scale-90' : 'scale-100'
        } ${
          linkHovered ? 'w-8 h-8' : 'w-6 h-6'
        } transition-all duration-200 ease-out`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle, rgba(100, 255, 218, 1) 0%, rgba(100, 255, 218, 0.8) 50%, rgba(100, 255, 218, 0) 100%)`,
          boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)',
          borderRadius: '50%'
        }}
      />
      <div
        className={`fixed pointer-events-none z-40 ${
          hidden ? 'opacity-0' : 'opacity-80'
        } transition-opacity duration-300`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i}
            className="absolute text-xs font-mono text-cyber-accent select-none opacity-30"
            style={{
              left: `${Math.cos((i / 4) * Math.PI) * 30}px`,
              top: `${Math.sin((i / 4) * Math.PI) * 30}px`,
              transform: `rotate(${i * 45}deg)`,
              opacity: 0.3 - (i / 20)
            }}
          >
            {Math.round(Math.random()) === 1 ? '1' : '0'}
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomCursor;
