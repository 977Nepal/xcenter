import { useState, useRef, useEffect, useCallback } from "react";

function useDraggable() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const startCoords = useRef({ x: 0, y: 0 });

  const onMouseDown = useCallback((e) => {
    isDragging.current = true;
    startCoords.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  }, [position]);

  const onMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    setPosition({ x: e.clientX - startCoords.current.x, y: e.clientY - startCoords.current.y });
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  return {
    position,
    isDragging: isDragging.current,
    bind: {
      onMouseDown,
      style: { transform: `translate(${position.x}px, ${position.y}px)`, cursor: "grab" },
    },
  };
}

export default useDraggable;
