import './Mouse.css';
import React, { useEffect, useRef } from 'react';

const MouseOverlay: React.FC = () => {
  const verticalRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
      if (verticalRef.current) {
        verticalRef.current.style.left = `${event.clientX}px`;
      }
      if (horizontalRef.current) {
        horizontalRef.current.style.top = `${event.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='mouse-area'>
      <div className='vertical' ref={verticalRef}></div>
      <div className='horizontal' ref={horizontalRef}></div>
    </div>
  );
};

export default MouseOverlay;
