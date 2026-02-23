import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-40 rounded-full"
      style={{
        left: pos.x - 150,
        top: pos.y - 150,
        width: 300,
        height: 300,
        background: "radial-gradient(circle, hsl(255 70% 65% / 0.15) 0%, transparent 70%)",
        filter: "blur(40px)",
        transition: "left 0.1s ease-out, top 0.1s ease-out",
      }}
    />
  );
};

export default CursorGlow;
