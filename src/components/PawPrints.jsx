import { useEffect, useState } from 'react';

export function PawPrints() {
  const [paws, setPaws] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: (i * 5) + (Math.random() * 3), // Spread evenly across screen
      size: 35 + Math.random() * 25, // 35-60px (bigger)
      delay: i * 1.2, // Stagger (0s, 1.2s, 2.4s, etc.)
      duration: 15 + Math.random() * 10, // 15-25s
      opacity: 0.2 + Math.random() * 0.2, // 20-40% opacity (more visible)
    }));
    setPaws(generated);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" style={{ willChange: 'transform' }}>
      {paws.map((paw) => (
        <span
          key={paw.id}
          className="absolute bottom-[-60px] animate-paw"
          style={{
            left: `${paw.left}%`,
            fontSize: `${paw.size}px`,
            animationDelay: `${paw.delay}s`,
            animationDuration: `${paw.duration}s`,
            opacity: paw.opacity,
            willChange: 'transform',
            filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.15))',
          }}
        >
          🐾
        </span>
      ))}
    </div>
  );
}
