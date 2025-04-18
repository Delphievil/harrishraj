
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
        } ${clicked ? 'scale-90' : 'scale-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          width: linkHovered ? '50px' : '20px',
          height: linkHovered ? '50px' : '20px',
          border: '2px solid #FF3131', // Bright red border
          borderRadius: '50%',
          boxShadow: '0 0 15px rgba(255, 49, 49, 0.5)', // Glowing effect
          transition: 'width 0.2s, height 0.2s, border 0.2s, box-shadow 0.2s',
        }}
      />
      <div
        className={`fixed pointer-events-none z-40 ${
          hidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '6px',
          height: '6px',
          backgroundColor: '#FF3131', // Bright red dot
          borderRadius: '50%',
          boxShadow: '0 0 10px rgba(255, 49, 49, 0.7)', // Subtle glow
          transition: 'opacity 0.2s'
        }}
      />
    </>
  );
};

export default CustomCursor;
